require("dotenv").config();
const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    client: {
      logging: "info",
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
    host: process.env.HOST,
    hot: true,
    open: true,
    port: process.env.PORT,
    static: {
      directory: path.join(__dirname, "dist"),
      watch: {
        aggregateTimeout: 600,
      },
    },
  },
  devtool: "eval-cheap-module-source-map",
  cache: {
    type: "filesystem",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|woff|woff2|eot|ttf|otf)$/,
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    usedExports: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
