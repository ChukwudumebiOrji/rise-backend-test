import { Request, Response } from 'express';
import FileModel from '../models/files.model';
import { v4 as uuidv4 } from 'uuid';

const fs = require('fs');

class FilesController {
  async saveFile(req: Request, res: Response) {
    if (!req.file) return;

    const data = fs.readFileSync(req.file['path']);

    const newFile = await FileModel.create({
      name: req.file['originalname'],
      type: req.file['mimetype'],
      size: req.file['size'],
      file_id: uuidv4().split('-')[4],
      data,
    });

    res.send(newFile);
  }

  async downloadFile(req: Request, res: Response) {
    // Get the file ID from the request parameters.
    const fileId = req.params.id;

    // Find the file by its ID.
    const file = await FileModel.findOne({
      where: {
        file_id: fileId,
      },
    });

    // If the file is not found, throw an error.
    if (!file) {
      throw new Error('File not found');
    }

    // Get the filename and mimetype of the file.
    const filename = file.name;
    const mimetype = file.type;

    // Set the Content-Disposition and Content-Type headers of the response.
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', mimetype);

    // Write the file data to a file with the same name as the filename.
    fs.writeFile(filename, file.data, (err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File written successfully');
      }
    });

    // Send a response indicating that the file has been written.
    res.send('file written');
  }
}

export default new FilesController();
