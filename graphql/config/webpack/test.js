const webpack = require('webpack');
const externals = require('webpack-node-externals');
const path = require('path');
const isCoverage = process.env.MOCHA_ENV === 'coverage';
const fromRoot = path.resolve.bind(__dirname)

const instrumenter = {
    test:/\.[jt]s$/,
    loaders: 'istanbul-instrumenter-loader',
    options: { esModules: true },
    include: fromRoot('src'),
};

const rules = [].concat(
    isCoverage ? instrumenter : [],
    [
        {
            test: /\.[jt]s$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }
    ]
);

module.exports = {
    mode: 'development',

    target: 'node',
    
    devtool: 'inline-cheap-module-source-map',

    entry: fromRoot('src/index.ts'),

    externals: [externals()],

    resolve: {
      extensions: ['.js', '.ts'],
      modules: [
        fromRoot('src'),
        fromRoot('node_modules'),
      ],
    },

    module: {
        rules,
    },
};