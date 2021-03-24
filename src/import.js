module.exports = (dir) => {
  const config = require(dir + "/1host.config.js");
  let modules = [];
  for (module of config.modules) {
    if (typeof module.module == "function") {
      modules.push({ module: module.module, data: module });
    } else if (typeof module.module == "string") {
      modules.push({ module: require(module.module), data: module });
    }
  }
  require("./serve")(modules,config.port);
};
