const path = require('path');
const externals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const fromRoot = path.resolve.bind(__dirname)

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [externals()],

  entry: fromRoot('src/index.ts'),
  output: {
    filename: 'bundle.js',
    path: fromRoot('build'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      fromRoot('src'),
      fromRoot('node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        npm_package_name: JSON.stringify(process.env.npm_package_name),
        npm_package_version: JSON.stringify(process.env.npm_package_version),
      },
    })
  ],
};
