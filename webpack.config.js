const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app/src/index.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                ]
            }
        ],

    },
    target: 'node'
};