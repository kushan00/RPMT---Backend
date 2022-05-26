const express = require("express");
const router = express.Router();

const {getSubmissionTypes,getSubmissionType ,deleteSubmissionType , createSubmissionType , updateSubmissionType} = require("../Controllers/submissionTypeController");


router.post("/createSubmissionType",createSubmissionType);
router.get("/getAllSubmissionTypes",getSubmissionTypes);
router.get("/getSubmissionTypeById/:id",getSubmissionType);
router.delete("/deleteSubmissionType/:id",deleteSubmissionType);
router.put("/updateSubmissionType/:id",updateSubmissionType);


module.exports = router;
