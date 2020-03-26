const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.join(__dirname, "src", "js"),
    /* The base path which will be routed to index.html */
    filename: "[name].[contenthash].js",

    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: !isDevelopment }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      /* This injects the bundle into the src/index.html template */
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html"
    })
  ]
};
