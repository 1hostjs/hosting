const formatting = require("./formatting");
const consola = require("consola");
const l10n = require("../localization/getstring");
const locale = require("os-locale").sync();
try {
  console.log(formatting.successBox(l10n("Starting...", locale)));
  //o.err()
  importdata = require("./import")(process.cwd());
  require("./serve")(importdata[0], importdata[1]);
} catch (err) {
  console.clear();
  console.log(
    formatting.fatalBox(
      l10n("Yikes, we ran into an error running your project\n", locale)
    )
  );
  consola.error(err);
}
