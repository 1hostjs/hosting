import wrapAnsi from "wrap-ansi";
import chalk from "chalk";
import boxen from "boxen";
import path from "path";
const l10nn = await import(path.join("..", "localization", "getstring.js"));
const l10n = l10nn.default;
import { osLocaleSync } from "os-locale";
const locale = osLocaleSync();
const maxCharsPerLine = () => ((process.stdout.columns || 100) * 80) / 100;
function indent(count, chr = " ") {
  return chr.repeat(count);
}
function indentLines(string, spaces, firstLineSpaces) {
  const lines = Array.isArray(string) ? string : string.split("\n");
  let s = "";
  if (lines.length) {
    const i0 = indent(firstLineSpaces === undefined ? spaces : firstLineSpaces);
    s = i0 + lines.shift();
  }
  if (lines.length) {
    const i = indent(spaces);
    s += "\n" + lines.map((l) => i + l).join("\n");
  }
  return s;
}
function foldLines(
  string,
  spaces,
  firstLineSpaces,
  charsPerLine = maxCharsPerLine()
) {
  return indentLines(wrapAnsi(string, charsPerLine), spaces, firstLineSpaces);
}
function box(message, title, options) {
  return (
    boxen(
      [
        title || chalk.white(l10n("1host.js Message", locale)),
        "",
        chalk.white(foldLines(message, 0, 0, maxCharsPerLine())),
      ].join("\n"),
      Object.assign(
        {
          borderColor: "white",
          borderStyle: "round",
          padding: 1,
          margin: 1,
        },
        options
      )
    ) + "\n"
  );
}
function successBox(message, title) {
  return box(
    message,
    title || chalk.green(l10n("✔ 1host.js Success", locale)),
    {
      borderColor: "green",
    }
  );
}
function warningBox(message, title) {
  return box(
    message,
    title || chalk.yellow(l10n("⚠ 1host.js Warning", locale)),
    {
      borderColor: "yellow",
    }
  );
}
function errorBox(message, title) {
  return box(message, title || chalk.red(l10n("✖ 1host.js Error", locale)), {
    borderColor: "red",
  });
}
function fatalBox(message, title) {
  return errorBox(
    message,
    title || chalk.red(l10n("✖ 1host.js Fatal Error", locale))
  );
}
export { fatalBox };
export { successBox };
export { warningBox };
export default {
  fatalBox,
  successBox,
  warningBox,
};
