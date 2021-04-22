import path from "path";
export default async (dir) => {
  const cfg = import(path.join(dir, "1host.config.js"));
  var config = await cfg;
  let modules = [];
  let module;
  for (module of config.default.modules) {
    if (typeof module.module == "function") {
      if (!module.errorHandler) {
        modules.push({ module: module.module, data: module });
      } else {
        modules.errorHandler = { module: module.module, data: module };
      }
    } else if (typeof module.module == "string") {
      if (!module.errorHandler) {
        modules.push({ module: require(module.module), data: module });
      } else {
        modules.errorHandler = { module: require(module.module), data: module };
      }
    }
  }
  var https;
  if (config.default.https.on || false) {
    https = [
      true,
      config.default.https.port,
      config.default.https.cert,
      config.default.https.key,
    ];
  } else {
    https = [false, null, null, null];
  }
  return [modules, config.default.port, https];
};
