const express = require("express");
const app = express();
var router = express.Router();
const port = 8080;

app.use("/api", router); // API Root url at: http://localhost:8080/api

// root url
app.get("/", (req, res) => {
    res.json({ message : "Welcome to the APOD app." });
});

app.post("/api/add", (req, res) => {
    const url = req.body.image_url;
    const date = req.body.date;

    res.send("POST Request Successful.");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});