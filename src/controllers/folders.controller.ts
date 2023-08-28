import { Request, Response } from 'express';
import FolderModel from '../models/folders.model';
import UserModel from '../models/users.model';
import FileModel from '../models/files.model';

class FoldersController {
  async createFolder(req: Request, res: Response) {
    // Find the user by its id
    const user = await UserModel.findOne({
      where: {
        id: req.body['user_id'],
      },
    });

    // If the user isnt found, send an error
    if (!user) return res.status(404).json({ message: 'User not found!' });

    // Create the folder
    const newFolder = await FolderModel.create({
      name: req.body['folderName'],
      files: req.body['file_ids'],
      // user,
    });

    // Send a response indicating that the folder has been created.
    res.status(201).json({
      message: 'Folder created successfully',
    });
  }
}

export default new FoldersController();
