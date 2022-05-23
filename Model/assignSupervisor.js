const mongoose = require("mongoose");

const SupervisorSchema = new mongoose.Schema({
	supervisor_id: {
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
    }
});

module.exports = User = mongoose.model("assignSupervisor", SupervisorSchema);