var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeExternals = require('cdm-webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var libPath = require('../../src/webpack-util');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: libPath("[name].js"),
    library: '@adminide-stack/graphql',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js', '.graphql'],
    modules: [
      'src',
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/**/*.graphql', to: 'lib'}
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        test: /\.ts$/,
        ts: {
          compiler: 'typescript',
          configFileName: 'tsconfig.json'
        },
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }, {
      test: /\.graphql$/,
      loader: 'raw',
      exclude: /node_modules/,
    },]
  },
  externals: [nodeExternals({ modulesDir: "../../node_modules" }),
  {
    "@adminide-stack/client-core": "@adminide-stack/client-core"
  }]
};
