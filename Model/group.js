const mongoose = require("mongoose"); 

const GroupSchema = new mongoose.Schema({
	GroupNo: {
		type: String,
		required: true,
	},
	GroupSuperviser: {
		type: String,
	},
	GroupCoSuperviser: {
		type: String,
	},
	GroupLeaderID: {
		type: String,
		required: true,
	},
	GroupMember1ID: {
		type: String,
		required: true,
	},
	GroupMember2ID: {
		type: String,
		required: true,
	},
	GroupMember3ID: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Group = mongoose.model("group", GroupSchema);
