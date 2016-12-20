const webpackConfig = require("./webpack.config.js");

// removing CommonsChunkPlugin. it doesn't work with karma-webpack
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);

webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

webpackConfig.entry = {};
// Karma configuration
module.exports = function (config) {
  config.set({
    // ... normal karma configuration
    reporters: ["mocha"],
    files: [
      // all files ending in "_test"
      { pattern: "test/*test.js", watched: false },
      { pattern: "test/**/*test.js", watched: false },
      // each file acts as entry point for the webpack configuration
    ],
    frameworks: ["mocha"],
    preprocessors: {
      // add webpack as preprocessor
      "test/*test.js": ["webpack"],
      "test/**/*test.js": ["webpack"],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: "errors-only",
    },
    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
    ],
  });
};
