import consola from "consola";
import http from "http";
import fs from "fs";
export default (mdls, port) => {
  const modules = mdls;
  console.log("Serving");
  function start(usePort = port) {
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
          res.start(fs.readFileSync(path), {});
        };
        res.content = () => {
          return content;
        };
        res.type = () => {
          return type;
        };
        try {
          let module;
          for (module of modules) {
            module.module(req, res);
          }
          if (content == "") modules.errorHandler.module(req, res, 404);
          res.setHeader("Content-Type", type);
          res.write(content);
          res.end();
        } catch (err) {
          modules.errorHandler.module(req, res, 500, err);
        }
      })
      .listen(usePort);
  }
  try {
    start();
  } catch (err) {
    if (err.code == "EADDRINUSE") {
      start(0);
    } else {
      throw err;
    }
  }
};
