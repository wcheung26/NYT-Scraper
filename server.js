var express = require("express");
var router = express.Router();
var request = require("request");
var axios = require("axios");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");

// Require Articles schema
var Address = require("./models/Articles");

// Create a new express app
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// MongoDB configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/nyt-scraper");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------
// Routes

// Require controller
var api = require("./controllers/api_controller.js")

app.use("/api", api);

app.get("/", function(req, res) {
	res.send('index.html')
})


// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});