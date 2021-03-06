var nodeExternals = require('cdm-webpack-node-externals');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var libPath = require('../../src/webpack-util');

var webpack_opts = {
  entry: {
    index: './src/index.ts',
  },
  target: 'node',
  output: {
    filename: libPath("[name].js"),
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      'node_modules',
      'src',
    ]
  },
  plugins: [
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
      loaders: 'ts-loader'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }]
  },
  externals: [nodeExternals({ modulesDir: "../../node_modules" },
    { "@adminide-stack/core": "@adminide-stack/core" }
  )]
};

module.exports = webpack_opts;
