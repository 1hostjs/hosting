module.exports = (key,locale) => {
    const path = require("path");
    string = require(`./strings.${locale}`)
    console.log(string)
    return string[key]
}