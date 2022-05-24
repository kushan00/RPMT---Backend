const express = require("express");
const router = express.Router();
const {requestCoSupervisor, getReqByCoSupervisorId} = require("../Controllers/assignCoSupervisorController");

router.post("/reqCoSupervisor",requestCoSupervisor);
router.get("/getReqByCoSupervisorId/:id", getReqByCoSupervisorId);

module.exports = router;
