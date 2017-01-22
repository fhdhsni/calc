const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  context: path.join(__dirname, "src"),
  entry: {
    app: "./scripts/app.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  // externals: {
  //   mathjs: "math",
  // },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [/scripts/, /test/],
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
          "css?minimize",
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
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        includeAutoGeneratedTags: false,
        removeComments: true,
      },
    }),
  ],
  eslint: {
    configFile: path.join(__dirname, ".eslintrc.json"),
    formatter: require("eslint-friendly-formatter"),
  },
};
