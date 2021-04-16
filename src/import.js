export default (dir) => {
  if (process.platform === "win32") {
    var e = "\\";
  } else {
    var e = "/";
  }
  const moduleloc = dir + e + "1host.config.js";
  return import(moduleloc).then((config) => {
    var modules = [];
    for (module of config.default.modules) {
      if (typeof module.module == "function") {
        if (!module.errorHandler)
          modules.push({ module: module.module, data: module });
        else modules.errorHandler = { module: module.module, data: module };
      } else if (typeof module.module == "string") {
        if (!module.errorHandler)
          modules.push({ module: require(module.module), data: module });
        else
          modules.errorHandler = {
            module: require(module.module),
            data: module,
          };
      }
    }
    return [modules, config.default.port];
  });
};
