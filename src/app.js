const express = require("express");

const app = express();

const getDetails = require("./api/routes/get-info");

app.use("/api", getDetails);

app.get("/", (req, res) => {
 res.status(200).json({
  data: {},
  message: { type: "success", content: "Testing express server" },
 });
});
//Catch non-registered route
app.use("*", (req, res, next) => {
 const err = new Error(`${req.originalUrl} not found!`);
 err.status = "Failed";
 err.statusCode = 404;
 next(err);
});

module.exports = app;
