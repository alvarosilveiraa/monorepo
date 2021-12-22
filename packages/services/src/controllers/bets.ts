import {Request, Response} from 'express';
import {betsNeuralNetwork} from '../config';

export const postBetsPredictionController = async (req: Request, res: Response): Promise<void> => {
  const output = betsNeuralNetwork.run(req.body);

  res.status(200).json({output});
};
