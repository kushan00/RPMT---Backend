const express = require("express");
const router = express.Router();
const {requestSupervisor, getReqBySupervisorId , updateSuperviserReq} = require("../Controllers/assignSupervisorController");

router.post("/reqSupervisor",requestSupervisor);
router.get("/getReqBySupervisorId/:id", getReqBySupervisorId);
router.patch("/AcceptTopic/:id",updateSuperviserReq);

module.exports = router;
