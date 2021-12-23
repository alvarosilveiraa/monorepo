export type BrainBetsModelInputType = {
  [key: string]: number;
};

export type BrainBetsModelOutputType = {
  [key: string]: number;
};

export type BrainBetsModelType = {
  input: BrainBetsModelInputType;
  output: BrainBetsModelOutputType;
};

export type BrainNeuralNetworkSettingsType = {
  input: string;
  output: string;
  groupBy?: string;
  groupPrefix?: string;
};
