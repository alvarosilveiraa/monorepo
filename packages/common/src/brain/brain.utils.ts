import {INeuralNetworkJSON} from 'brain.js';
import fs from 'fs';
import {forEach, groupBy, map} from 'lodash';
import path from 'path';
import {BrainModuleEnum} from './brain.enum';
import {BrainBetsModelType, BrainNeuralNetworkSettingsType} from './brain.type';

export function readData<T>(module: BrainModuleEnum) {
  const moduleDataPath = path.join(__dirname, 'modules', module, 'data');

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
  const moduleDataPath = path.join(__dirname, 'modules', module);

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
  const moduleDataPath = path.join(__dirname, 'modules', module);

  fs.writeFileSync(
    path.join(moduleDataPath, 'neural-network.json'),
    JSON.stringify(neuralNetworkJSON, null, 2),
  );
};

export const getDataBySettings = (data: any[], settings: BrainNeuralNetworkSettingsType) => {
  const validData = data.filter(item => !!item[settings.input] && !!item[settings.output]);

  if (settings.groupBy) {
    const groupsData = groupBy(validData, settings.groupBy);

    const groupData: BrainBetsModelType[] = map(groupsData, groupData => {
      const input: any = {};
      const output: any = {};

      forEach(groupData, (item, index) => {
        input[`${settings.groupPrefix}${index + 1}-${settings.input}`] = item[settings.input];

        output[`${settings.groupPrefix}${index + 1}-${settings.output}`] =
          item[settings.output] === 1 ? 1 : 0;
      });

      return {
        input,
        output,
      };
    });

    return groupData;
  }

  const newData: BrainBetsModelType[] = validData.map(item => ({
    input: {[settings.input]: item[settings.input]},
    output: {[settings.output]: item[settings.output] === 1 ? 1 : 0},
  }));

  return newData;
};
