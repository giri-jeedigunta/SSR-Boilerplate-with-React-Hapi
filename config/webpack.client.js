const path = require("path");
const rootPath = path.resolve(__dirname, "..");

module.exports = {
  //Root file of the client application
  entry: rootPath + "/client/index.js",

  // add the bundles here:
  output: {
    filename: "bundle.js",
    path: rootPath + "/public"
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
