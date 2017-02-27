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
            test: /\.css$/,
            use: extractStyles.extract({
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        extractStyles
    ]
};
