const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static("public"));


app.listen(3000, function(){
  console.log("Listening in port 3000")
});