const merge = require('webpack-merge');
const baseConfig = require('./baseConfig.js');
const serverConfig = require('./serverConfig.js');
const clientConfig = require('./clientConfig.js');

module.exports = merge(baseConfig, serverConfig, clientConfig);