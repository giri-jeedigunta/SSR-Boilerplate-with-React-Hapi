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
    mode: process.env.NODE_ENV,

    output: {
        path: srcPath + "/dist",
        filename: (chunkData) => {
            return chunkData.chunk.name === 'client' ? '[name].[hash].js': '[name]/index.js';
        },
        chunkFilename: '[name].[hash].js', 
        publicPath: '/'
    },

    resolve: {
        // Absolute imports fix
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx']
    }
};

module.exports = baseConfig