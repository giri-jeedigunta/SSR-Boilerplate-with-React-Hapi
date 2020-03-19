const merge = require("webpack-merge");
const baseConfig = require("./baseConfig.js");
const serverConfig = require("./serverConfig.js");
const clientConfig = require("./clientConfig.js");

const serverBundle = merge(baseConfig, serverConfig);
const clientBundle = merge(baseConfig, clientConfig);

module.exports = [clientBundle, serverBundle];
