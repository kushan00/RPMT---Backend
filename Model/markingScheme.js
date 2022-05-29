const mongoose = require("mongoose");

const markingScheme = new mongoose.Schema({

    topic: { 
        type: String,
        required: true 
    },

    file: { 
        type: String, 
        required: true 
    },
});

module.exports = mongoose.model("markingSchemes", markingScheme)