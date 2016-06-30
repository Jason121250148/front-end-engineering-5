const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: [
        //"webpack-dev-server/client?http://localhost:8080",
        path.resolve(__dirname, "src/index.js")
    ],

    target: "node",
    externals: [nodeExternals()],

    output: {
        path: __dirname + "/assets",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.js$/,
                exclude: "node_modules/",
                loader: "babel"
            }
        ]
    },

    devServer: {
        contentBase: "./assets"
    }
};
