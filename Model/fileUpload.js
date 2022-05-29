const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({

    topic: { 
        type: String
    },
    description: { 
        type: String
    },
    file: { 
        type: String, 
        required: true 
    },
    img: { 
        type: String
    }
});

module.exports = mongoose.model("templateFiles", songSchema)