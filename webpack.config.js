const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        resume: './src/js/Resume.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js',
        publicPath: '/dist'
    },

    devtool: "source-map",

    module: {
        rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
            test: /\.scss$/,
            use: extractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        }
        ],
        loaders: [
        {
            test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            loader: extractTextPlugin.extract('css!sass')
        }
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: ['src', 'node_modules']
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
    new extractTextPlugin('../css/[name].css', {
        allChunks: true
    })
    ],
};
