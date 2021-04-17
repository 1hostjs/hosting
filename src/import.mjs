export default (dir, successBox, fatalBox, l10n, locale) => {
  if (process.platform === "win32") {
    var e = "\\";
  } else {
    var e = "/";
  }
  const moduleloc = dir + e + "1host.config.js";
  var moduless;
  var portss;
  import(moduleloc)
    .then((config) => {
      var modules = [];
      var i = 0;
      for (i of config.default.modules) {
        if (typeof i.module == "function") {
          if (!i.errorHandler) modules.push({ module: i.module, data: i });
          else modules.errorHandler = { module: i.module, data: i };
        } else if (typeof i.module == "string") {
          if (!i.errorHandler)
            modules.push({ module: require(i.module), data: i });
          else
            modules.errorHandler = {
              module: require(i.module),
              data: i,
            };
        }
      }
      moduless = modules;
      portss = config.default.port;
    })
    .catch((err) => {
      console.clear();
      console.log(
        fatalBox(
          l10n("Yikes, we ran into an error running your project\n", locale)
        )
      );
      consola.error(err);
    });
  return [moduless, portss];
};
