const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: {
    main: path.resolve(__dirname, './client/src/index.jsx'),
    popupgalleryimagelist: path.resolve(__dirname, './client/src/components/popupGallery/popupGalleryImageList.jsx'),
    popupslider: path.resolve(__dirname, './client/src/components/popupSlider/popupSlider.jsx'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Overview Gallery',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'overview-gallery',
      // appMountHtmlSnippet: '<div id="overview-gallery"></div>',
      // bodyHtmlSnippet: '<div id="overview-gallery"></div>',
    }),
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$|\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};