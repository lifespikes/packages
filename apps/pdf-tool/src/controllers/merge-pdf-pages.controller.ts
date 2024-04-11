import { Request, Response } from 'express';
import { PDFDocument } from 'pdf-lib';

export const mergePdfPagesController = async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];

  if (!files || files.length <= 1) {
    return res.status(400).json({
      message: 'At least two PDF files are required for merging.',
    });
  }

  try {
    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const pdf = await PDFDocument.load(file.buffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    }

    const mergedPdfBytes = await mergedPdf.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=merged.pdf');
    return res.send(Buffer.from(mergedPdfBytes));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Something went wrong processing the PDF files.',
      error: error?.message,
    });
  }
};
