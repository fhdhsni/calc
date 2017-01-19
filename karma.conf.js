const webpackConfig = require("./webpack.config.js");

// removing CommonsChunkPlugin. it doesn't work with karma-webpack
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);

webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

webpackConfig.entry = {};
// Karma configuration
const configuration = {
  customLaunchers: {
    Chrome_travis_ci: {
      base: "Chrome",
      flags: ["--no-sandbox"],
    },
  },
  // browsers: ["PhantomJS"],
  browsers: ["Chrome"],
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
    "karma-chrome-launcher",
  ],
};
if (process.env.USER === "farhad") {
  process.env.CHROME_BIN = "chromium";
}
if (process.env.TRAVIS) {
  configuration.browsers = ["Chrome_travis_ci"];
}
module.exports = function (config) {
  config.set(configuration);
};
