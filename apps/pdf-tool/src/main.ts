import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { mergePdfPagesController } from './controllers/merge-pdf-pages.controller';
import { fileFilter } from './utils/file-filter';
import { extractPdfPagesController } from './controllers/extract-pdf-pages.controller';
import { htmlToPdfController } from './controllers/html-to-pdf.controller';

const host = process.env.HOST ?? 'localhost';
// process.env.PORT ? Number(process.env.PORT) : 3000
const port = 3000;

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage, fileFilter: fileFilter });

app.get('/', (req, res) => {
  return res.json({ message: 'Hello API bruh' });
});

app.post('/api/merge-pages', upload.array('files'), mergePdfPagesController);

app.post(
  '/api/extract-pages',
  upload.single('file'),
  extractPdfPagesController
);



app.post('/api/html-to-pdf',  htmlToPdfController);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
