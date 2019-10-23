
const webpackNodeExternals = require('webpack-node-externals');
const path = require("path");
const srcPath = path.resolve(__dirname, "..");

const serverConfig = {
  name: 'server',

  //Bundling for node not browser
  target: "node",

  //Root file of the server application
  entry: {
    server: srcPath + "/src/server/index.js",
  },

  //Externals will inform webpack not to bundle any libraries exist inside the node_modules folder  
  externals: [webpackNodeExternals()]
};

module.exports = serverConfig;