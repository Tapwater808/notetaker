
const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

// Starts the server 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});