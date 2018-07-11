var path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app/src/index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|css)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],

                    }
                }
            }
        ],
        test: /\.css$/,
        use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
        ]
    },
    target: 'node'
};