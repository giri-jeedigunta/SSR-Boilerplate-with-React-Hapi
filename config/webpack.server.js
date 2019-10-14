const path = require("path");
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const srcPath = path.resolve(__dirname, "..");

const serverConfig = {
  //Bundling for node JS not browser
  target: "node",

  //Root file of the server application
  entry: srcPath + "/src/server/index.js",

  // add the bundles here:
  output: {
    filename: "server-bundle.js",
    path: srcPath + "/build"
  },

  //Externals will inform webpack not to bundle any libraries exist inside the node_modules folder  
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);