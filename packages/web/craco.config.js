const webpack = require('webpack');
const {getWebpackTools} = require('react-native-monorepo-tools');
const path = require('path');

const monorepoWebpackTools = getWebpackTools();

module.exports = {
  webpack: {
    configure: webpackConfig => {
      monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);

      monorepoWebpackTools.addNohoistAliases(webpackConfig);

      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '~/app': path.resolve(__dirname, '../app/src'),
        '~/web': path.resolve(__dirname, '../web/src'),
      };

      return webpackConfig;
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
      }),
    ],
  },
};
