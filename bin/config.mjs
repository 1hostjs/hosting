import { createInterface } from "readline";
import formatting from "../src/formatting.mjs";
import l10n from "../localization/getstring.mjs";
import osloc from "os-locale";
import path from "path";
import fs from "fs";
const locale = osloc.sync();
var title = l10n("1host.js Config", locale) || "1host.js Config";
var config = {};
console.log(
  formatting.successBox(l10n("Answer the prompts below", locale), title)
);
const readline = { createInterface }.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Choose a port number:", (port) => {
  config.port = port;
  console.log(config);
  function e() {
    readline.question("Do you want to add a module(y/n):", (yn) => {
      if (yn === "y") {
        // todo: add code here
      }
      readline.question(
        "Do you want do add another(y/n):",
        (yn) => {
          if (yn === "y") {
            e();
          } else {
            readline.close();
          }
        }
      );
    });
  }
  e();
  const dir = process.argv[3] || process.cwd();
  fs.writeFileSync(
    path.join(dir, "1host.config.js"),
    `module.exports={port:${config.port},modules:${config.modules}}`,
    {}
  );
});
