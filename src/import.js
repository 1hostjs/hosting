import path from "path";
export default async (dir) => {
  const cfg = import(path.join(dir, "1host.config.js"));
  var config = await cfg;
  let modules = [];
  let module;
  for (module of config.default.modules) {
    if (typeof module.module == "function") {
      if (!module.errorHandler)
        modules.push({ module: module.module, data: module });
      else modules.errorHandler = { module: module.module, data: module };
    } else if (typeof module.module == "string") {
      if (!module.errorHandler);
      else
        modules.errorHandler = { module: require(module.module), data: module };
    }
  }
  console.error([modules, config.default.port]);
  return [modules, config.default.port];
};
