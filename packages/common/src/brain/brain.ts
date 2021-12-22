import brain from 'brain.js';
import {forEach, groupBy, map} from 'lodash';
import {readBets, readEnglish, readNeuralNetwork, writeNeuralNetwork} from './brain.utils';

export const getBetsNeuralNetwork = () => {
  const neuralNetwork = new brain.NeuralNetwork();

  const neuralNetworkJSON = readNeuralNetwork('bets');

  if (neuralNetworkJSON) {
    neuralNetwork.fromJSON(neuralNetworkJSON);
  } else {
    const bets = readBets();

    const validBets = bets.filter(bet => !!bet.odd && !!bet.position);

    const groupsBets = groupBy(validBets, 'startAt');

    const data = map(groupsBets, groupBets => {
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

    // const data = validBets.map(bet => ({
    //   input: {
    //     odd: bet.odd,
    //     // ev: bet.strategies.default.ev,
    //     // selectionId: Number(bet.selectionId),
    //     // startAt: Number(bet.startAt.replace(/-/g, '').replace(' ', '')),
    //   },
    //   output: [bet.position === 1, bet.position === 2],
    // }));

    neuralNetwork.train(data, {iterations: 2000, log: true});

    const newNeuralNetworkJSON = neuralNetwork.toJSON();

    writeNeuralNetwork('bets', newNeuralNetworkJSON);
  }

  return neuralNetwork;
};

export const getEnglishNeuralNetwork = () => {
  const neuralNetwork = new brain.recurrent.LSTM();

  const neuralNetworkJSON = readNeuralNetwork('english');

  if (neuralNetworkJSON) {
    neuralNetwork.fromJSON(neuralNetworkJSON);
  } else {
    const data = readEnglish();

    neuralNetwork.train(data, {iterations: 2000, log: true});

    const newNeuralNetworkJSON = neuralNetwork.toJSON();

    writeNeuralNetwork('english', newNeuralNetworkJSON);
  }

  return neuralNetwork;
};
