import { createInterface } from "readline";
import formatting from "../src/formatting.js";
import l10n from "../localization/getstring.js";
import osloc from "os-locale";
import path from "path";
import fs from "fs";
const locale = osloc.sync();
var title = l10n("1host.js Config", locale);
var portt;
var modules = new Array();
var cfgmdle = {};
formatting.successBox(l10n("Answer the prompts below", locale), title);
console.warn(
  l10n(
    "the cli ISN'T finished, modules DON'T save to your config file. You will need to manually configure your modules.",
    locale
  )
);
console.log(
  formatting.successBox(l10n("Answer the prompts below", locale), title)
);
const readline = { createInterface }.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(l10n("Choose a port number:", locale), (port) => {
  portt = port;
  function writedata() {
    const dir = process.argv[3] || process.cwd();
    fs.writeFileSync(
      path.join(dir, "1host.config.js"),
      `module.exports={port:${portt}}`,
      {}
    );
    // todo: add for loop so we can write the variable modules to the config file
  }
  function e() {
    readline.question(
      l10n("Do you want to add a module(y/n):", locale),
      (yn) => {
        if (yn === "y") {
          readline.question(l10n("Path to the module:", locale), (str) => {
            cfgmdle.module = str;
            readline.question(
              l10n("Is it an error handler? (y/n):", locale),
              (yn) => {
                if (yn === "y") {
                  cfgmdle.errorHandler = true;
                }
                console.warn(
                  l10n(
                    "You need to add the following to the config file:\n ",
                    locale
                  )
                );
                modules.push(cfgmdle);
                readline.question(
                  l10n("Do you want do add another(y/n):", locale),
                  (yn) => {
                    if (yn === "y") {
                      e();
                    } else {
                      readline.close();
                      writedata();
                    }
                  }
                );
              }
            );
          });
        } else {
          readline.close();
          writedata();
        }
      }
    );
  }
  e();
});
