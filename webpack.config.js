const path = require('path');
// import path from 'path';

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'client/')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    watch: true,
    mode: 'development'
  };