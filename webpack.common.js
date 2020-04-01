const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebPackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.join(__dirname, "build"),
    /* Hash the filename every build for cache busting */
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
  plugins: [
    //  Remove build directory on every build
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      /* This injects the bundle into the src/index.html template */
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
      //  The title to be used in the created index.html file
      title: "Webpack boilerplate template"
    })
  ]
};
