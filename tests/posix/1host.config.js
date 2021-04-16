module.exports = {
  modules: [
    {
      module: require("./test.js"),
    },
    {
      module: require("./errors.js"),
      errorHandler: true,
    },
  ],
  port: 3000,
};
