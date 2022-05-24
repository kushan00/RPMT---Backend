const express = require("express");
const router = express.Router();
const {requestSupervisor, getReqBySupervisorId} = require("../Controllers/assignSupervisorController");

router.post("/reqSupervisor",requestSupervisor);
router.get("/getReqBySupervisorId/:id", getReqBySupervisorId);

module.exports = router;
