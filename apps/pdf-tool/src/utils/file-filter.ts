import { FileFilterCallback } from 'multer';
import { Request } from 'express';

export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype !== 'application/pdf') {
    cb(new Error('Invalid file type'));
  } else {
    cb(null, true);
  }
};
