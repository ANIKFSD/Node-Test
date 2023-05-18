const express = require('express');
var app = express();

app.get("/", (req,res) => {
    res.send("Home Page");
});


app.listen(3000, () => {
    console.log("The server started at 3000 port no.");
});