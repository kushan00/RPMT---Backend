const mongoose = require("mongoose"); 

const SubmissionTypeSchema = new mongoose.Schema({

	subType: {
		type: String,
		required: true,
	},
	
    description: {
        type: String,
		required: true,
    },
	deadline: {
        type: String,
		required: true,
    },

	
});

module.exports = SubmissionType = mongoose.model("SubmissionType", SubmissionTypeSchema);
