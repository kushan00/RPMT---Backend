const mongoose = require("mongoose"); 

const GroupPanelSchema = new mongoose.Schema({
	GroupNo: {
		type: String,
		required: true,
	},
	GroupID: {
		type: String,
		required: true,
	},
	PanelMember1ID: {
		type: String,
		required: true,
	},
	PanelMember2ID: {
		type: String,
		required: true,
	},
	PanelMember3ID: {
		type: String,
		required: true,
	},
	PanelMember4ID: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = GroupPanel = mongoose.model("group panel", GroupPanelSchema);
