module.exports = (req, res) => {
  console.log(req.url);
  const fs = require("fs");
  if (req.url === "/") {
    res.start(fs.readFileSync("./index.html", 'utf8'), {}, 'text/html');
  }
};
