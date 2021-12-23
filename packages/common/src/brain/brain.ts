import {BrainNeuralNetworkSettingsType} from '.';
import brain from 'brain.js';
import {BrainModuleEnum} from './brain.enum';
import {getDataBySettings, readData, readNeuralNetwork, writeNeuralNetwork} from './brain.utils';

export const getNeuralNetwork = (
  module: BrainModuleEnum,
  settings: BrainNeuralNetworkSettingsType,
) => {
  const neuralNetwork = new brain.NeuralNetwork();

  const neuralNetworkJSON = readNeuralNetwork(module);

  if (neuralNetworkJSON) {
    neuralNetwork.fromJSON(neuralNetworkJSON);
  } else {
    const data = getDataBySettings(readData(module), settings);

    neuralNetwork.train(data, {log: true});

    const newNeuralNetworkJSON = neuralNetwork.toJSON();

    writeNeuralNetwork(module, newNeuralNetworkJSON);
  }

  return neuralNetwork;
};
