const express = require("express");
const router = express.Router();
const {requestCoSupervisor} = require("../Controllers/assignCoSupervisorController");

router.post("/reqCoSupervisor",requestCoSupervisor);

module.exports = router;
