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
  ],
};
