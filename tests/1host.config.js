module.exports = {
  modules: [
    {
      module: require("./test.js"),
      host: "google.google",
      config: { dirname: __dirname },
    },
    {
      module: require("./errors.js"),
      errorHandler: true,
      config: { dirname: __dirname },
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
