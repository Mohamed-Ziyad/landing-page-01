const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },

      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   loader: "file-loader",
      // },
    ],
  },
  plugins: [new HtmlWebPackPlugin({ template: "./src/index.html" })],
};
