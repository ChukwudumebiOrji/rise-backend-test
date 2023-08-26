import { Request, Response } from 'express';
import FolderModel from '../models/folders.model';
import UserModel from '../models/users.model';
import FileModel from '../models/files.model';

class FoldersController {
  async createFolder(req: Request, res: Response) {
    // Get the user
    const user = await UserModel.findOne({
      where: {
        id: req.body['user_id'],
      },
    });
    if (!user) return;

    // Get the files
    const files: any[] = [];
    req.body['files'].forEach(async (el: any) => {
      const file = await FileModel.findOne({
        where: {
          id: el,
        },
      });
      files.push(file);
    });

    // Create folder
    const newFolder = await FolderModel.create({
      name: req.body['folderName'],
      // files,
      // user,
    });

    res.status(201).json({
      message: 'Folder created successfully',
      folder: newFolder,
    });
  }
}

export default new FoldersController();
