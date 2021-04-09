const formatting = require("./formatting");
const consola = require("consola");
const importmodules = require("./import");
const l10n = require("../localization/getstring");
const osLocale = require("os-locale");
const locale = osLocale.sync();
try {
  console.log(formatting.successBox(l10n("Starting...", locale)));
  //o.err()
  importmodules(process.cwd());
} catch (err) {
  console.clear();
  console.log(
    formatting.fatalBox(
      l10n("Yikes, we ran into an error running your project\n", locale)
    )
  );
  consola.error(err);
}
