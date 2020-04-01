const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.join(__dirname, "build", "js"),
    /* Hash the filename every build for cache busting */
    filename: "[name].[contenthash].js",
    /* The base path which will be routed to index.html */
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
  devServer: {
    hot: true
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebPackPlugin({
      /* This injects the bundle into the src/index.html template */
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html"
    })
  ]
};
