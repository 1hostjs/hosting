module.exports = (modules,port) => {
    const http = require('http')
    console.log('Serving')

    http.createServer(function (req, res) {
        const host = req.headers.host; // this is the host
        res.setHeader("X-Powered-By", "1hostjs"); // this is for credit
        let content = 'No content'
        let config = []
        res.add = (newContent, newConfig) => {
            content = newContent;
            config.push(newConfig)
        }
        for (module of modules){
            module.module(req, res)
        }
        res.write(content)
        res.end()
    })

    .listen(port);

};
