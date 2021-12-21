import {Request, Response} from 'express';

export const getUserController = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({name: 'Alvaro'});
};
