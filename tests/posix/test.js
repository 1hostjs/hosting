module.exports = (req, res, config) => {
  console.log(config);
  res.startFile("/workspace/hosting/tests/posix/index.html");
};
