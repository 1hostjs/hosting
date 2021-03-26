module.exports = (modules, port) => {
  const http = require("http");
  console.log("Serving");

  http
    .createServer(function (req, res) {
      const host = req.headers.host; // this is the host
      res.setHeader("X-Powered-By", "1hostjs"); // this is for credit
      let content = "";
      let config = [];
      let type = '';
      res.add = (newContent) => {
        content = newContent;
      };
      res.start = (newContent, newConfig, newType = 'html') => {
        content = '';
        content = newContent
        config.push(newConfig);
        let type = newType
      };

      res.content = () => {
        return content;
      };
      res.type = () => {
        return type;
      };

      for (module of modules) {
        module.module(req, res);
      }
      if (content == '') modules.errorHandler.module(req,res,404)
      res.write(content);
      res.end();
    })

    .listen(port);
};
