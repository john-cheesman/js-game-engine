const path = require('path')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.png$/,
                type: 'asset/resource'
            },
            {
                test: /\.json$/,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        static: './dist'
    }
}

