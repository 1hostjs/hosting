module.exports = (key, locale) => {
  const { tx, t } = require("@transifex/native");
  tx.init({
    token: "1/c885c73e0f89b3c7910d866455dbf5809465ca8e",
    sourceLocale: "en",
  });
  tx.setCurrentLocale(locale).catch((err) => {
    tx.setCurrentLocale("en");
  });
  return t(key);
};
