const path = require('path');

module.exports = {
    // context: path.resolve(__dirname, 'js'),
    entry: {
        index: './src/tennisKata.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

}