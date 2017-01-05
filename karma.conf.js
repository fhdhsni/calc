const webpackConfig = require("./webpack.config.js");

// removing CommonsChunkPlugin. it doesn't work with karma-webpack
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);

webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

webpackConfig.entry = {};
// Karma configuration
module.exports = function (config) {
  config.set({
    browsers: ["PhantomJS"],
    reporters: ["mocha"],
    files: [
      { pattern: "test/*test.js", watched: false },
      { pattern: "test/**/*test.js", watched: false },
    ],
    frameworks: ["mocha"],
    preprocessors: {
      "test/*test.js": ["webpack"],
      "test/**/*test.js": ["webpack"],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: "errors-only",
    },
    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      "karma-phantomjs-launcher",
    ],
  });
};
