const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./server/routes");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

/**
 * Router Middleware
 * Router - /api/*
 * Method - *
 */
app.use("/api", routes); // API Root url at: http://localhost:8080/api

app.get("/", (req, res) => {
    res.json({ message : "API Working" });
});

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
});
