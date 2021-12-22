import brain from 'brain.js';
import {BrainModuleEnum} from './brain.enum';
import {readData, readNeuralNetwork, writeNeuralNetwork} from './brain.utils';

export const getNeuralNetwork = (module: BrainModuleEnum, onData?: (data: any[]) => any[]) => {
  const neuralNetwork = new brain.NeuralNetwork();

  const neuralNetworkJSON = readNeuralNetwork(module);

  if (neuralNetworkJSON) {
    neuralNetwork.fromJSON(neuralNetworkJSON);
  } else {
    const data = onData ? onData(readData(module)) : readData(module);

    neuralNetwork.train(data, {iterations: 2000, log: true});

    const newNeuralNetworkJSON = neuralNetwork.toJSON();

    writeNeuralNetwork(module, newNeuralNetworkJSON);
  }

  return neuralNetwork;
};
