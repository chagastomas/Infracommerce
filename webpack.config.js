const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/js/Main",
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: "script.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include:[
                    path.resolve(__dirname, "src/js")
                ],
                loader: "babel-loader",
                options:{
                    presets: ["env", "react"]
                }
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(["bin"]),
        new HtmlWebpackPlugin({
            title: "Geru",
            template: "src/index.html"
        }),
        new BrowserSyncWebpackPlugin({
            host: "localhost",
            port: 9000,
            server: {
                baseDir: ["./bin"]
            }
        }),
        new CopyWebpackPlugin([
            {
                from: "src/fonts",
                to: "fonts"
            },
            {
                from: "src/images",
                to: "images"
            },
            {
                from: "node_modules/react-select/dist/react-select.css",
                to: "css"
            },
            {
                from: "src/orgExpedidor.json",
                to: ""
            }
        ])
    ],

    watch: true
}
