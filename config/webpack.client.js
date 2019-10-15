const path = require("path");
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const srcPath = path.resolve(__dirname, "..");

const clientConfig = {
  //Root file of the client application
  entry: srcPath + "/src/client/index.js",

  // add the bundles here:
  output: {
    filename: "bundle.js",
    path: srcPath + "/dist"
  },

  // Enables webpack to apply development settings
  mode: 'development'  
};

module.exports = merge(baseConfig, clientConfig);
