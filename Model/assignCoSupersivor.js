const mongoose = require("mongoose");

const CoSupervisorSchema = new mongoose.Schema({
	co_supervisor_id: {
		type: String,
		required: true,
	},
	leader_itnum: {
		type: String,
		required: true,
	},
	group_regnum: {
		type: String,
		required: true,
		unique: true,
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

module.exports = User = mongoose.model("assignCoSupersivor", CoSupervisorSchema);