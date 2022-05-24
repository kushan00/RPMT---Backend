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

	
});

module.exports = Topic = mongoose.model("Topic", TopicSchema);
