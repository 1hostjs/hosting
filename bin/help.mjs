import formatting from "../src/formatting.mjs";
import l10n from "../localization/getstring.mjs";
import osLocale from "os-locale";
const locale = osLocale.sync();
var title = l10n("1host.js Help", locale);
console.log(
  formatting.successBox(
    l10n(
      `Commands:
        > start: starts 1host.js
          >> args: directory: changes the directory
          >> usage: 1host start < directory (optional) >
        > config: changes the config file
          >> args: directory: changes the directory
          >> usage: 1host config < directory (optional) >
        `,
      locale
    ),
    title
  )
);
