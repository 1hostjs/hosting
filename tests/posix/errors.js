const ejs = require("ejs");
module.exports = async (req, res, code) => {
  res.statusCode = code;
  var datanum = code;
  var dataver = "v2";
  var datadate = new Date(Date.now() * 1000).toLocaleString("en-US", {
    timeZoneName: "short",
    timeZone: "America/New_York",
  });

  res.start(
    await ejs.renderFile("./error.ejs", {
      errornumber: code,
      datanum: datanum,
      url: `https://${req.host}${req.url}`,
      host: req.host || "1host.js selfhosted",
      timestamp: datadate,
      version: dataver,
    })
  );
};
