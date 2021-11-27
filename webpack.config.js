const path = require("path");

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
};
