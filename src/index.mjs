import { successBox, fatalBox } from "./formatting.mjs";
import consola from "consola";
import l10n from "../localization/getstring.mjs";
import osloc from "os-locale";
import importmodules from "./import.mjs";
import serve from "./serve.mjs";
const locale = osloc.sync();

try {
  console.log(successBox(l10n("Starting...", locale)));
  //o.err()
  var data = importmodules(process.cwd(), successBox, fatalBox, l10n, locale);
  var sdata = await data
  serve(sdata[0], sdata[1]);
} catch (err) {
  console.clear();
  console.log(
    fatalBox(l10n("Yikes, we ran into an error running your project\n", locale))
  );
  consola.error(err);
}
