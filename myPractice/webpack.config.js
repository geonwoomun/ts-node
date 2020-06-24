const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, options) => {
  const config = {
    entry: { app: ['./src/index.js'] },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, 'src')],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
  if (options.mode === 'development') {
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/public/index.html'),
        showErrors: true,
      }),
    ];
    config.devtool = 'inline-source-map';
    config.devServer = { hot: true, contentBase: './dist' };
  } else {
    config.plugins = [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/public/index.html'),
        showErrors: true,
      }),
    ];
  }
  return config;
};
