import consola from "consola";
import http from "http";
import https from "https";
import fs from "fs";
export default (mdls, port, httpsdata) => {
  const modules = mdls;
  console.log("Serving");
  function serverfunction(req, res) {
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
  }
  function start(usePort = port, httpsdata = httpsdata) {
    http
      .createServer(function (req, res) {
        serverfunction(req, res);
      })
      .listen(usePort);
    if (httpsdata[0]) {
      const options = {
        key: fs.readFileSync(httpsdata[3]),
        cert: fs.readFileSync(httpsdata[2]),
      };
      https
        .createServer(options, (req, res) => {
          serverfunction(req, res);
        })
        .listen(httpsdata[1]);
    }
  }
  try {
    start(port, httpsdata);
  } catch (err) {
    if (err.code == "EADDRINUSE") {
      start(0, [httpsdata[0], 0, httpsdata[2], httpsdata[3]]);
    } else {
      throw err;
    }
  }
};
