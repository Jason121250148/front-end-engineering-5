const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        path.resolve(__dirname, "src/index.js")
    ],

    output: {
        path: __dirname + "/assets",
        filename: "bundle.js"
    },

    module: {
        loader: [
            {
                test: /\.js$/,
                exclude: "node_modules/",
                loader: "babel"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },

    devServer: {
        contentBase: "./assets"
    }
};
