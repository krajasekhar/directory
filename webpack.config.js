const path = require("path");
const webpack = require('webpack');

var clientConfig = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        port: 8080,
        stats: "minimal",
        before(app){
            var [connectToDb,setUserModel] = require("./server/db.js");
            console.log(connectToDb());
            var User = setUserModel();
            var signupPost = require("./server/signupPost.js");
            app.post('/signup', signupPost);
            var getUserData = require("./server/getUserData.js");
            app.get('/getUserData', getUserData);
          }
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'lib.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
}

var serverConfig = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    entry: './server/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'lib.node.js'
    },
    externals: "node_modules",
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
}

module.exports = [clientConfig, serverConfig];