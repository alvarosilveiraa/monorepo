module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~/app': ([, name]) => `../app/src${name}`,
          '~/mobile': ([, name]) => `./src${name}`,
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@mobile/env',
        path: '.env',
      },
    ],
  ],
};
