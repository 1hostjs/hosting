const { t } = require("@transifex/native");
t("Starting...");
t("Yikes, we ran into an error running your project\n");
t("1host.js Message");
t("✔ 1host.js Success");
t("⚠ 1host.js Warning");
t("✖ 1host.js Error");
t("✖ 1host.js Fatal Error");
t("1host.js Help");
t(`Commands:
> start: starts 1host.js
  >> args: directory: changes the directory
  >> usage: 1host start < directory (optional) >
> config: changes the config file
  >> args: directory: changes the directory
  >> usage: 1host config < directory (optional) >
`);
t("1host.js Config");
t("Answer the prompts below");
t("Choose a port number:");
t("Do you want to add a module(y/n):");
t("Path to the module");
t("Is it an error handler? (y/n):");
t("Do you want do add another(y/n):");
t(
  "the cli ISN'T finished, modules DON'T save to your config file. You will need to manually configure your modules."
);
t("You need to add the following to the config file:\n ", locale);
