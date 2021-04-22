const path = require("path");
module.exports = (req, res, config) => {
  res.startFile(path.join(config.dirname, "index.html"));
};
