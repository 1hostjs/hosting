import { createInterface } from "readline";
import path from "path";
const l10nn = await import(path.join("..", "localization", "getstring.js"));
const l10n = l10nn.default;
const formatting = await import(path.join("..", "src", "formatting.js"));
import osloc from "os-locale";
import fs from "fs";
const locale = osloc.sync();
var title = l10n("1host.js Config", locale);
var portt;
var modules = new Array();
var cfgmdle = {};
var https = {};
formatting.successBox(l10n("Answer the prompts below", locale), title);
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
      `module.exports={port:${portt},modules:[`,
      {}
    );
    let module;
    for (module in modules) {
      let data = modules[module];
      fs.appendFileSync(
        path.join(dir, "1host.config.js"),
        `{"module":"${data.module}","errorHandler":${data.errorHandler}},`
      );
    }
    fs.appendFileSync(
      path.join(dir, "1host.config.js"),
      `],https:${JSON.stringify(https)},}`
    );
  }
  function httpsdata() {
    readline.question(
      l10n("Do you want to configure https support(y/n):", locale),
      (yn) => {
        if (yn === "y") {
          readline.question(
            l10n("Choose a port number for HTTPS:", locale),
            (port) => {
              https.port = port;
              readline.question(l10n("Path to the cert:", locale), (cert) => {
                https.cert = cert;
                readline.question(l10n("Path to the key:", locale), (key) => {
                  https.key = key;
                  readline.close();
                  writedata();
                });
              });
            }
          );
        } else {
          https.on = false;
          https.port = null;
          readline.close();
          writedata();
        }
      }
    );
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
                modules.push(cfgmdle);
                readline.question(
                  l10n("Do you want do add another(y/n):", locale),
                  (yn) => {
                    if (yn === "y") {
                      e();
                    } else {
                      httpsdata();
                    }
                  }
                );
              }
            );
          });
        } else {
          httpsdata();
        }
      }
    );
  }
  e();
});
