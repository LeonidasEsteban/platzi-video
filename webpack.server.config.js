const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    "home": path.resolve(__dirname, 'src/pages/containers/home.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ssr/[name].js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',

  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              }
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css")
  ]
}
