const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devtool: "cheap-eval-source-map",
  context: path.join(__dirname, "src"),
  entry: {
    app: "./scripts/app.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  // externals: {
  //   mathjs: "math",
  // },
  module: {
    noParse: ["src/scripts/math.min.js"],
    loaders: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        include: /scripts/,
        loaders: [
          "babel",
          "eslint",
        ],
      },
      {
        test: /\.scss$/,
        include: /styles/,
        loaders: [
          "style",
          "css",
          "postcss",
          "sass",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        include: /assets/,
        loader: "url",
        query: { limit: 1024 },
      },
      {
        test: /\.svg$/,
        include: /src/,
        loader: "svg-url",
        query: { limit: 1024 },
      },
    ],
  },
  postcss() {
    return [require("autoprefixer")];
  },
  devServer: {
    inline: true,
    stats: "errors-only",
    contentBase: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      inject: "head",
    }),
    new webpack.optimize.CommonsChunkPlugin("common.js"),
  ],
  eslint: {
    configFile: path.join(__dirname, ".eslintrc.json"),
    formatter: require("eslint-friendly-formatter"),
  },
};