/** @format */

const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            exclude: [
              /node_modules[\\/]core-js/,
              /node_modules[\\/]webpack[\\/]buildin/
            ],
            presets: ["@babel/preset-env"]
          }
        }
      },

      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
