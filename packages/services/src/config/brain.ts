import {forEach, groupBy, map} from 'lodash';
import {BetType, BrainModuleEnum, getNeuralNetwork} from '@developer-ui/common';

export const betsNeuralNetwork = getNeuralNetwork(BrainModuleEnum.Bets, (bets: BetType[]) => {
  const validBets = bets.filter(({odd, position}) => !!odd && !!position);

  const groupsBets = groupBy(validBets, 'startAt');

  const dataBets = map(groupsBets, groupBets => {
    const input: any = {};

    const output: any = {};

    forEach(groupBets, (bet, index) => {
      input[`horse${index + 1}Odd`] = bet.odd;

      output[`horse${index + 1}Green`] = bet.position === 1 ? 1 : 0;
    });

    return {
      input,
      output,
    };
  });

  return dataBets;
});
