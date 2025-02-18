const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;

const isDevelopment = env === 'development';

const webpackConfig = {
    entry: {
        main: './index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].min.js'
    },
    mode: env,
    devtool: isDevelopment ? 'inline-source-map' : false,
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.resolve(__dirname, '.'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        port: 8666,
        disableHostCheck: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    }
};

module.exports = webpackConfig;
