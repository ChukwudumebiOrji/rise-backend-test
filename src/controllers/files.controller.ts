import { Request, Response } from 'express';
import FileModel from '../models/files.model';
import { v4 as uuidv4 } from 'uuid';
import UserModel from '../models/users.model';

const fs = require('fs');

class FilesController {
  async saveFile(req: Request, res: Response) {
    // Check if the request has a file.
    if (!req.file) return;

    // Read the file data.
    const data = fs.readFileSync(req.file['path']);

    // Create a new FileModel object.
    const newFile = await FileModel.create({
      name: req.file['originalname'],
      type: req.file['mimetype'],
      size: req.file['size'],
      path: req.file['path'],
      data,
    });

    // Send the file data to the client.
    res.json({
      message: `File ${req.file['filename']} successfully saved to the database.`,
    });
  }

  async downloadFile(req: Request, res: Response) {
    // Get the file ID from the request parameters.
    const fileId = req.params['id'];

    // Find the file by its ID.
    const file = await FileModel.findOne({
      where: {
        id: fileId,
      },
    });

    // If the file is not found, throw an error.
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
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
    res.json({ message: 'File written successfully' });
  }

  async markFileUnsafe(req: Request, res: Response) {
    const fileId = req.params['id'];
    const userId = req.body['id'];

    // Find the user by its id
    const user = await UserModel.findOne({
      where: {
        id: userId,
      },
    });

    // If the user isnt found, send an error
    if (!user) return res.status(404).json({ message: 'User not found!' });
    // If the user.is_admin is false, send an error
    if (!user.is_admin) return res.status(400).json({ message: 'User not permitted!' });

    // Find the file by its id
    const file = await FileModel.findOne({
      where: {
        id: fileId,
      },
    });

    // If the file isn't found, send an error
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Mark file as unsafe
    file.is_unsafe = true;

    // Save file to database
    await file.save();

    // Send a response indicating that the file has been marked unsafe
    res.status(200).json({ message: `File ${fileId} successfully marked as unsafe` });
  }

  async deleteFile(req: Request, res: Response) {
    const fileId = req.params['id'];

    // Delete the file by its id
    await FileModel.destroy({
      where: {
        id: fileId,
      },
    });

    // Send a response indicating that the file has been deleted
    res.json({ message: `File ${fileId} deleted successfully.` });
  }

  async streamMedia(req: Request, res: Response) {
    const range = req.headers.range;

    // Check if the Range header is present.
    if (!range) {
      return res.status(400).send('Requires Range header');
    }

    // Get the file by ID.
    const file = await FileModel.findOne({
      where: {
        id: parseInt(req.params['id']),
      },
    });

    // Check if the file is a video or audio file.
    if (!file.type.includes('video') || !file.type.includes('audio')) {
      return res.status(400).send('Requires Video/Audio mimetype');
    }

    // Get the path to the file.
    const videoPath = file.path;

    // Get the size of the file.
    const videoSize = fs.statSync(videoPath).size;

    // Get the chunk size
    const CHUNK_SIZE = 10 ** 6;

    // Get the start and end byte offsets of the range.
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    // Get the length of the range.
    const contentLength = end - start + 1;

    // Set the response headers.
    const headers = {
      'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': file.type,
    };

    // Write the response headers.
    res.writeHead(206, headers);

    // Create a read stream from the file.
    const videoStream = fs.createReadStream(videoPath, { start, end });

    // Pipe the read stream to the response.
    videoStream.pipe(res);
  }
}

export default new FilesController();
