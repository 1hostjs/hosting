module.exports = (modules, port) => {
  const http = require("http");
  const fs = require("fs");
  console.log("Serving");

  http
    .createServer(function (req, res) {
      const host = req.headers.host; // this is the host
      res.setHeader("X-Powered-By", "1hostjs"); // this is for credit
      let content = "";
      let config = [];
      let type = "text/plain";
      res.modify = (newContent) => {
        content = newContent;
      };
      res.start = (newContent, newConfig, newType = "text/html") => {
        content = "";
        content = newContent;
        config.push(newConfig);

        type = newType;
      };
      res.startFile = (path) => {
        res.start(fs.readFileSync(path))
      };
      res.content = () => {
        return content;
      };
      res.type = () => {
        return type;
      };
      try {
        for (module of modules) {
          module.module(req, res);
        }
        if (content == "") modules.errorHandler.module(req, res, 404);
        console.log("Type:" + type);
        res.setHeader("Content-Type", type);
        res.write(content);

        res.end();
      } catch {
        modules.errorHandler.module(req, res, 500);
        res.write(content);
      }
    })

    .listen(port);
};
