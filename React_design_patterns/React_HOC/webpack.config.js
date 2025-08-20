const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",   // ✅ Entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // clean dist folder before build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,   // process JS + JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,        // process CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // allow imports without extension
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // ✅ injects into root index.html
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,     // run at http://localhost:3000
    open: true,     // auto open browser
    hot: true,      // hot reloading
  },
  mode: "development", // you can switch to 'production' later
};
