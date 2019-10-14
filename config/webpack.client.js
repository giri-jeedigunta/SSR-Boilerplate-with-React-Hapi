const path = require("path");
const rootPath = path.resolve(__dirname, "..");
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const clientConfig = {
  //Root file of the client application
  entry: rootPath + "/client/index.js",

  // add the bundles here:
  output: {
    filename: "bundle.js",
    path: rootPath + "/public"
  }
};

module.exports = merge(baseConfig, clientConfig);
