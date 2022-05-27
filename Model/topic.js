const mongoose = require("mongoose"); 

const TopicSchema = new mongoose.Schema({
	GroupNo: {
		type: String,
		required: true,
	},
	
    Topic: {
        type: String,
		required: true,
    },
	Description: {
        type: String,
		required: true,
    },
	is_accept: {
		type: Boolean,
		required: false,
		default: null,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	
});

module.exports = Topic = mongoose.model("Topic", TopicSchema);
