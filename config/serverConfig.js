const path = require("path");
const srcPath = path.resolve(__dirname, "..");
const NodemonPlugin = require('nodemon-webpack-plugin');

const serverConfig = {
  name: 'server',

  //Bundling for node not browser
  target: "node",

  //Root file of the server application
  entry: {
    server: srcPath + "/src/server/index.js",
  }
};

module.exports = serverConfig;