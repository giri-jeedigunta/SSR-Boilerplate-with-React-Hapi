const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const path = require("path");
const srcPath = path.resolve(__dirname, "..");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


const clientConfig = {
  name: 'client',

  // Let webpack know that this config is not for node
  target: 'web',  

  //Root file of the client application
  entry: {
    client: srcPath + "/src/client/index.js"
  }, 

  devtool: (process.env.NODE_ENV === 'development') ? 'inline-cheap-module-source-map' : false,

  optimization: {
    minimizer: [new TerserPlugin({ /* additional options here */ })],
    splitChunks: {
      cacheGroups: {
        nodeVendors: {
          test: /[\\/]node_modules[\\/]/, 
          chunks: "initial", 
          name: "vendor"
        }
      }
    }    
  },  

  plugins: [
    new CleanWebpackPlugin(), 
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new ProgressBarPlugin({
        format: 'Build [:bar] ' + chalk.cyan.bold(':percent') + ' (:elapsed seconds)',
        clear: false
    })
  ]  
};

module.exports = clientConfig;