const formatting = require("./formatting");
const consola = require("consola");
const importmodules = require("./import");
const l10n = require("../localization/getstring");
const osLocale = require("os-locale");
const localeee = osLocale.sync();
const localee = localeee.split("-");
const locale = localee[0];
try {
  console.log(formatting.successBox(l10n("starting", locale)));
  //o.err()
  importmodules(process.cwd());
} catch (err) {
  console.clear();
  console.log(formatting.fatalBox(l10n("starting.loadingerror", locale)));
  consola.error(err);
}
