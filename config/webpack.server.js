const path = require("path");
const rootPath = path.resolve(__dirname, "..");

module.exports = {
  //Bundling for node JS not browser
  target: "node",

  //Root file of the server application
  entry: rootPath + "/server/index.js",

  // add the bundles here:
  output: {
    filename: "bundle.js",
    path: rootPath + "/build"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    alias: {
      Components: rootPath + "/client/components/"
    }
  }
};
