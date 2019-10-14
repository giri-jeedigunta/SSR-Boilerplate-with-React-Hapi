const path = require("path");
const rootPath = path.resolve(__dirname, "..");
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
  //Bundling for node JS not browser
  target: "node",

  //Root file of the server application
  entry: rootPath + "/server/index.js",

  // add the bundles here:
  output: {
    filename: "bundle.js",
    path: rootPath + "/build"
  },

  //Externals will inform webpack not to bundle any libraries exist inside the node_modules folder  
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);