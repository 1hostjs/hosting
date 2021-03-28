module.exports = (key,locale) => {
    const path = require("path");
    string = require(`./strings.${locale}`)
    return string[key]
}