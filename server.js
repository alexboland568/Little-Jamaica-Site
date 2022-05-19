const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000);

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/shtml", express.static(__dirname + "/public/shtml"));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/views/index.html");

})

app.get("/menu", function(req, res) {

    res.sendFile(__dirname + "/views/menu.html");

})

app.get("/location", function(req, res) {

    res.sendFile(__dirname + "/views/location.html");

})

app.get("/team", function(req, res) {

    res.sendFile(__dirname + "/views/team.html");

})

app.get("/apply", function(req, res) {

    res.sendFile(__dirname + "/views/apply.html");

})

app.get("/review", function(req, res) {

    res.sendFile(__dirname + "/views/review.html");

})

app.get("/contact", function(req, res) {

    res.sendFile(__dirname + "/views/contact.html");

})
console.log("Server running");

