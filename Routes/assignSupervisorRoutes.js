const express = require("express");
const router = express.Router();
const {requestSupervisor} = require("../Controllers/assignSupervisorController");

router.post("/reqSupervisor",requestSupervisor);

module.exports = router;
