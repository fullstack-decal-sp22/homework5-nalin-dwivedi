const express = require("express");
const router = express.Router();
const favorite = require("../models/favorites");

/**
 * @method - GET
 * @param - /
 * @description - The method of the root url. Be friendly and welcome our user :)
 */
router.get("/", (req, res) => {
    res.json({ message: "Welcome to the APOD app." });
});

/**
 * @method - POST
 * @param - /add
 * @description - store new favorite picture in database
 */
router.post("/add", (req, res) => {
    const { image_url, date } = req.body;
    const image = new favorite({
        image_url,
        date,
    });
    image.save((error, document) => {
        if (error) {
            res.json({ status : "failure" });
        } else {
            res.json({
                status : "success",
                id : image._id,
                content : req.body,
            });
        }
    });
});

/**
 * @method - DELETE
 * @param - /delete
 * @description - delete the favorited picture based on date passed in body
 */
router.delete("/delete", (req, res) => {
    const { date } = req.body;
    favorite.findOneAndDelete({
        date,
    }, (error, image) => {
        if (error) {
            res.json({ status : "failure" });
        } else {
            res.json(image);
        }
    });
});

/**
 * @method - GET
 * @param - /favorite
 * @description - fetch all favorited pictures from the database
 */
router.get("/favorite", function (req, res) {
    favorite.find().then((images) => {
        res.json({ result : images })
    });
});

module.exports = router;