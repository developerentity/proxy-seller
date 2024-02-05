const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    client: "./src/client.js",
    bundle: "./src/bundle.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
};
