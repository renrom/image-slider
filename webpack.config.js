const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/scripts/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({
	title: 'Template Website',
	template: './src/index.html',
	filename: './index.html',

  })],
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
