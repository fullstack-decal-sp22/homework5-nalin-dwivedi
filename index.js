const express = require("express");
const app = express();
var router = express.Router();
const port = 8080;

app.use("/api", router); // API Root url at: http://localhost:8080/api

// root url
router.get("/", (req, res) => {
    res.json({ message : "Welcome to the APOD app." });
});

router.get("/favorite", function (req, res) {
    res.json({ "result" : }); // send back a list of image properties
});
  
router.post("/add", function (req, res) {
    const url = req.body.url;
    const date = req.body.date;
    // store the url and date in mongoDB database
});

router.delete("/delete", function (req, res) {
    const date = req.body.date;
    // find the image with this date in mongoDB database, delete it
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});