const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    image_url : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    }
});

// export model favorites with Schema
module.exports = mongoose.model("favorites", Schema);