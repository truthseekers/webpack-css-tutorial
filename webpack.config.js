const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "main.js",
//     // path: path.resolve(__dirname, "dist")
//   },
// };

module.exports = {
  entry: {
    hello: "./src/index.js",
    duuude: "./src/somefile.js",
  },
  output: {
    filename: "[name].js",
    // path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
