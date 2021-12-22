import brain from 'brain.js';
import {getBets} from './brain.utils';

export const getNeuralNetwork = () => {
  const net = new brain.NeuralNetwork();

  const bets = getBets();

  const data = bets
    .filter(bet => !!bet.odd && !!bet.position)
    .map(bet => ({
      input: {
        odd: bet.odd,
      },
      output: [bet.position === 1, bet.position === 2],
    }));

  net.train(data, {log: true});

  return net;
};
