module.exports = (req, res) => {
  console.log(req.url);
  if (req.url === '/' ) {
      res.add('Welcome to 1host')
  }
};
