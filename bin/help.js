import formatting from "../src/formatting.js";
import l10n from "../localization/getstring.js";
import osLocale from "os-locale";
const locale = osLocale.sync();
var title = l10n("1host.js Help", locale);
console.log(
  formatting.successBox(
    l10n('Commands: \n\
> start: starts 1host.js \n\
  >> args: directory: changes the directory \n\
  >> usage: 1host start < directory (optional) > \n\
> config: changes the config file \n\
  >> args: directory: changes the directory \n\
  >> usage: 1host config < directory (optional) > \n
',
      locale
    ),
    title
  )
);
