// https://expressjs.com/en/guide/routing.html


// REQUIRES
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// just like a simple web server like Apache web server
// we are mapping file system paths to the app's virtual paths
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));


app.get("/", function(req, res) {
  res.send(fs.readFileSync("./app/html/main.html", "utf8"));
});

app.get("/chat", function(req, res) {

  let formatOfResponse = req.query["format"];

  // e.g.,: http://localhost:8000/weekdays?format=html
  // e.g.,: http://localhost:8000/weekdays?format=json
  if (formatOfResponse == "html") {
    // MIME type 
    res.setHeader("Content-Type", "text/html");
    res.send(fs.readFileSync("./app/data/main.js", "utf8"));

  } else if (formatOfResponse == "json") {
    // MIME type
    res.setHeader("Content-Type", "application/json");
    res.send(fs.readFileSync("./app/data/chat.js", "utf8"));

  } else {
    // just send JSON message
    res.send({ status: "fail", msg: "Wrong format!" });
  }

});

app.get("/response", function(req, res) {

  let formatOfResponse = req.query["format"];

  // e.g.,: http://localhost:8000/weekdays?format=html
  // e.g.,: http://localhost:8000/weekdays?format=json
  if (formatOfResponse == "html") {
    // MIME type 
    res.setHeader("Content-Type", "text/html");
    res.send(fs.readFileSync("./app/data/main.js", "utf8"));

  } else if (formatOfResponse == "json") {
    // MIME type
    res.setHeader("Content-Type", "application/json");
    res.send(fs.readFileSync("./app/data/response.js", "utf8"));

  } else {
    // just send JSON message
    res.send({ status: "fail", msg: "Wrong format!" });
  }

});

// for page not found (i.e., 404)
app.use(function(req, res, next) {
  // this could be a separate file too - but you'd have to make sure that you have the path
  // correct, otherewise, you'd get a 404 on the 404 (actually a 500 on the 404)
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});

// RUN SERVER
let port = 8000;
app.listen(port, function() {
  console.log("Example app listening on port " + port + "!");
});