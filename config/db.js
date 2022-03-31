const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/homework5-nasa-apod";
const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser : true
        });
        console.log("Connected to DB");
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = InitiateMongoServer;