# 1host-next - _The next version of 1host_
## Get started
Install 1host
```bash
npm install @1hostjs/hosting
```
Add 1host by adding a new script in package.json
```diff-json
"scripts": {
+ "start": "1host"
- "start": "node ."
}
```
Create a 1host.config.js
```js
module.exports = {
  modules: [
  ],
  port: 3000,
};
```
