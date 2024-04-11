import { Request, Response } from 'express';
import puppeteer from 'puppeteer';

export const htmlToPdfController = async (req: Request, res: Response) => {
  const html = req.body.html;
  const css = req.body.css || '';

  if (!html) {
    return res.status(400).json({
      message: 'HTML content is required',
    });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(`<style>${css}</style>${html}`);
    const pdf = await page.pdf({ format: 'A4' });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
    return res.send(pdf);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error converting HTML to PDF',
      error: error?.message,
    });
  }
};
