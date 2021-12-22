import {Request, Response} from 'express';
import {net} from '../config';

export const postBetsPredictionController = async (req: Request, res: Response): Promise<void> => {
  const output = net.run(req.body);

  res.status(200).json({output});
};
