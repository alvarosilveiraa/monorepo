import {INeuralNetworkJSON} from 'brain.js';
import fs from 'fs';
import path from 'path';
import {BrainModuleEnum} from './brain.enum';

export function readData<T>(module: BrainModuleEnum) {
  const moduleDataPath = path.join(__dirname, 'data', module);

  const directory = fs.readdirSync(moduleDataPath);

  const data: T[] = [];

  directory.forEach(filename => {
    if (filename === 'neural-network.json') {
      return;
    }

    const file = fs.readFileSync(path.join(moduleDataPath, filename), 'utf-8');

    const array = JSON.parse(file);

    data.push(...array);
  });

  return data;
}

export const readNeuralNetwork = (module: BrainModuleEnum) => {
  const moduleDataPath = path.join(__dirname, 'data', module);

  const file = fs.readFileSync(path.join(moduleDataPath, 'neural-network.json'), 'utf-8');

  if (!file) {
    return;
  }

  const neuralNetworkJSON: INeuralNetworkJSON = JSON.parse(file);

  return neuralNetworkJSON;
};

export const writeNeuralNetwork = (
  module: BrainModuleEnum,
  neuralNetworkJSON: INeuralNetworkJSON,
) => {
  const moduleDataPath = path.join(__dirname, 'data', module);

  fs.writeFileSync(
    path.join(moduleDataPath, 'neural-network.json'),
    JSON.stringify(neuralNetworkJSON, null, 2),
  );
};
