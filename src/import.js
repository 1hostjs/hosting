module.exports = (dir) => {
  const path = require("path");
  const config = require(path.join(dir, "1host.config.js"));
  let modules = [];
  for (module of config.modules) {
    if (typeof module.module == "function") {
      if (!module.errorHandler)
        modules.push({ module: module.module, data: module });
      else modules.errorHandler = { module: module.module, data: module };
    } else if (typeof module.module == "string") {
      if (!module.errorHandler)
        modules.push({ module: require(module.module), data: module });
      else
        modules.errorHandler = { module: require(module.module), data: module };
    }
  }
  try {
    require("./serve")(modules, config.port);
  } catch {
    require("./serve")(modules, process.env.PORT);
  }
};
