const mongoose = require("mongoose");

const submission = new mongoose.Schema({

    groupNo: { 
        type: String,
        required: true 
    },

    itNo: { 
        type: String, 
        required: true 
    },

    topic: { 
        type: String, 
        required: true 
    },

    file: { 
        type: String, 
        required: true 
    },

    comment: { 
        type: String,
    },
});

module.exports = mongoose.model("StudentSubmissions", submission)