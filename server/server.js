const express = require('express');
const app = express();
const port = 3000;
path = require("path");

app.get("/", function(req, res){
    const reqPath = path.join(__dirname, "..", "src", "index.js");
    res.sendFile(reqPath);
    }
);

app.listen(port, function() {
    console.log("Server started on port " + port);
});
