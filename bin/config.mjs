import { createInterface } from "readline";
import formatting from "../src/formatting.mjs";
import l10n from "../localization/getstring.mjs";
import osloc from "os-locale";
import path from "path";
import fs from "fs";
const locale = osloc.sync();
var title = l10n("1host.js Config", locale);
var portt;
var modules = [];
console.log(
  formatting.successBox(l10n("Answer the prompts below", locale), title)
);
const readline = { createInterface }.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(l10n("Choose a port number:",locale), (port) => {
  portt = port;
  function e() {
    readline.question(l10n("Do you want to add a module(y/n):",locale), (yn) => {
      if (yn === "y") {
        var cfgmdle = {};
        readline.question(l10n("Path to the module",locale), (str) => {
          cfgmdle.module = str;
          readline.question(l10n("Is it an error handler? (y/n):",locale), (yn) => {
            if (yn === "y") {
              cfgmdle.errorHandler = true;
            }
            modules.push(cfgmdle);
            readline.question(l10n("Do you want do add another(y/n):",locale), (yn) => {
              if (yn === "y") {
                e();
              } else {
                readline.close();
              }
            });
          });
        });
      } else {
        readline.close();
      }
    });
  }
  e();
  const dir = process.argv[3] || process.cwd();
  fs.writeFileSync(
    path.join(dir, "1host.config.js"),
    `module.exports={port:${portt},modules:${modules}}`,
    {}
  );
});
