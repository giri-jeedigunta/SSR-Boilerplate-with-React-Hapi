const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const path = require("path");
const srcPath = path.resolve(__dirname, "..");

const baseConfig = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },

    stats: {
        colors: true
    },     

    // Enables webpack to apply production compression / webpack settings
    mode: 'development',

    output: {
        path: srcPath + "/dist",
        pathinfo: true,
        filename: '[name].[hash].js',
        publicPath: '/'
    },

    resolve: {
        // Allow absolute paths in imports
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx']
    },

    // Choose a developer tool to enhance debugging
    // https://webpack.js.org/configuration/devtool/#devtool
    devtool: 'inline-cheap-module-source-map',

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: []
        }),
        new ProgressBarPlugin({
            format: 'Build > [:bar] ' + chalk.cyan.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        })
    ]
};

module.exports = baseConfig