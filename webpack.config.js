require("dotenv").config();
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isDevServer = process.env.WEBPACK_SERVE;
  const isDev = env.mode === "development";
  const mode = isDev ? "development" : env.mode;
  const devServer = {
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
    port: process.env.PORT,
    static: {
      directory: path.join(__dirname, "dist"),
      watch: {
        aggregateTimeout: 600,
      },
    },
  };

  return {
    entry: "./src/index.jsx",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "[name].js",
      publicPath: "/",
    },
    devServer: isDevServer ? devServer : {},
    devtool: "eval-cheap-module-source-map",
    cache: {
      type: "filesystem",
    },
    mode,
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
          type: "asset/resource",
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
      new Dotenv({
        path: "./.env", // Path to .env file (this is the default)
        systemvars: true, //load all system variables as well (useful for CI purposes)
      }),
    ],
    resolve: {
      alias: {
        styles: path.resolve(__dirname, "src/client/assets/scss"),
      },
      extensions: [".js", ".jsx"],
    },
  };
};
