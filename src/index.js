var express = require("express");

var app = express();


app.get("/", (req, res, err) => {
    res.send("Server started on port 3000");
});

app.listen(3000, (error) => {
    console.log("Server started on port 3000");
});