import {BrainModuleEnum, getNeuralNetwork} from '@developer-ui/common';

export const betsNeuralNetwork = getNeuralNetwork(BrainModuleEnum.Bet, {
  input: 'odd',
  output: 'position',
  groupBy: 'startAt',
  groupPrefix: 'horse',
});
