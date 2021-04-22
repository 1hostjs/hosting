module.exports = {
  modules: [
    {
      module: require("./test.js"),
      host: "google.google",
      config: { go: true },
    },
    {
      module: require("./errors.js"),
      errorHandler: true,
    },
  ],
  port: 3000,
  https: {
    on: false,
    port: 3001,
    cert: null,
    key: null,
  },
};
