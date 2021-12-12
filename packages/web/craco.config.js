const webpack = require('webpack');
const {getWebpackTools} = require('react-native-monorepo-tools');

const monorepoWebpackTools = getWebpackTools();

module.exports = {
  webpack: {
    configure: webpackConfig => {
      monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);

      monorepoWebpackTools.addNohoistAliases(webpackConfig);

      return webpackConfig;
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
      }),
    ],
  },
};
