import { createInterface } from "readline";
import formatting from "../src/formatting.mjs";
import l10n from "../localization/getstring.mjs";
import osloc from "os-locale";
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
      }
      readline.question("Do you want to remove a module(y/n):", (yn) => {
        if (yn === "y") {
        }
        readline.question(
          "Do you want do anything else with modules(y/n):",
          (yn) => {
            if (yn === "y") {
              e();
            } else {
              readline.close();
            }
          }
        );
      });
    });
  }
  e();
});
