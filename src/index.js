import { successBox, fatalBox } from "./formatting.js";
import consola from "consola";
import path from "path";
const l10nn = await import(path.join("..", "localization", "getstring.js"));
const l10n = l10nn.default;
import osloc from "os-locale";
import importmodules from "./import.js";
import serve from "./serve.js";
const locale = osloc.sync();
const dir = process.argv[3] || process.cwd();
try {
  console.log(successBox(l10n("Starting...", locale)));
  //o.err()
  var data = importmodules(dir, successBox, fatalBox, l10n, locale);
  var sdata = await data;
  serve(sdata[0], sdata[1], sdata[2]);
} catch (err) {
  console.clear();
  console.log(
    fatalBox(l10n("Yikes, we ran into an error running your project\n", locale))
  );
  consola.error(err);
}
