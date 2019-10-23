const path = require("path");
const srcPath = path.resolve(__dirname, "..");

const clientConfig = {
  name: 'client',

  // Let webpack know that this config is not for node
  target: 'web',  

  //Root file of the client application
  entry: {
    client: srcPath + "/src/client/index.js"
  }
};

module.exports = clientConfig;
