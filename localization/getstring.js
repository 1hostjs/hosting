module.exports = (key,locale) => {
    const path = require("path");
    if (path.existsSync(`./strings.${locale}.js`)) { 
        const string = require(`./strings.${locale}`)
    } else {
        console.warn('1host.js isn\'t avalible in the system language, using english.');
        const string = require(`./strings.en`)
    }
    // uncomment the code below to test L10N system
    // console.log(string)
    return string[key]
}
