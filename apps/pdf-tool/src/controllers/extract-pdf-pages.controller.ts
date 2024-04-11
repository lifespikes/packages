import { Request, Response } from 'express';
import { PDFDocument } from 'pdf-lib';

export const extractPdfPagesController = async (
  req: Request,
  res: Response
) => {
  const file = req.file as Express.Multer.File;

  let _pages: null;

  try {
    _pages = JSON.parse(req.body.pages ?? '[]');
  } catch (e) {
    _pages = null;
  }

  if (!Array.isArray(_pages)) {
    return res.status(422).json({
      message: 'Invalid pages parameter',
    });
  }

  const pages: number[] = (_pages ?? []).map((page: string) => parseInt(page));

  if (!file) {
    return res.status(400).json({
      message: 'No file uploaded',
    });
  }

  try {
    const sourcePdf = await PDFDocument.load(file.buffer);

    const sourcePdfCount = sourcePdf.getPageCount();

    const extractedPdf = await PDFDocument.create();

    const pagesToExtract = pages
      .map((page) => page - 1)
      .filter((page) => page >= 0 && page <= sourcePdfCount - 1); // filter out invalid pages

    const copiedPages = await extractedPdf.copyPages(sourcePdf, pagesToExtract);

    copiedPages.forEach((page) => extractedPdf.addPage(page));

    const extractedPdfBytes = await extractedPdf.save();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=extracted.pdf');
    return res.send(Buffer.from(extractedPdfBytes));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error extracting pages from PDF file',
      error: error?.message,
    });
  }
};
