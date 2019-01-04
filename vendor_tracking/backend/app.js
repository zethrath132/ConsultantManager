const express = require('express');
const http = require('http');
const app = express();

const user = require("./routes/users");
//const interview = require("./routes/interview");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/users", user);
//app.use("/api/interview", interview);

module.exports = app;
