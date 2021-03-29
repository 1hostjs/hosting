---
title: "Build an error handler"
description: "Tips on building a great error handler for 1host.js"
category: "Usage"
---

- Make a folder in the modules folder called whatever you want
- Add a file called `index.js`
- Add the following code:

```javascript
module.exports = async (req, res,code) => {
  // your code here
}
```

- In the blank space add your own [http module](https://nodejs.dev/learn/the-nodejs-http-module) code, note that you must use res.start to send stuff.
- Import the module by adding the folder name to your config file
- Run 1host.js
- It should work!
- Need help? Ask the community [here](https://github.com/1hostjs/1host-next/discussions)
