const express = require("express");
const router = express.Router();
const {requestCoSupervisor, getReqByCoSupervisorId , updateCoSuperviserReq} = require("../Controllers/assignCoSupervisorController");

router.post("/reqCoSupervisor",requestCoSupervisor);
router.get("/getReqByCoSupervisorId/:id", getReqByCoSupervisorId);
router.patch("/AcceptTopic/:id",updateCoSuperviserReq);

module.exports = router;
