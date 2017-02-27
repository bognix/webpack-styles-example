import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractStyles = new ExtractTextPlugin({
    filename: 'bundle.css'
});

module.exports = {
    entry: [
        './example/index.js'
    ],
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: extractStyles.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            })
        }]
    },
    plugins: [
        extractStyles
    ]
};
