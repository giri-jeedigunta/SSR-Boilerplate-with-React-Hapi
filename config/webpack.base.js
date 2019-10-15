const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }, 
    plugins: [
        new ProgressBarPlugin({
            format: 'Build > [:bar] ' + chalk.cyan.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        })
    ]
}