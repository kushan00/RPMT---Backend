const router = require("express").Router();
const File = require('../Model/addSubmissions');

const {uploadSubmissions, getAllSubmissions, getSubmissionById, updateSubmission } = require("../Controllers/addSubmissionController");


// upload new file
router.post("/upsubmissions", uploadSubmissions);

// Get all files
router.get("/allsubmissions", getAllSubmissions);

//get specific file
router.get('/getsubmission/:id', getSubmissionById);

//update the file
router.put('/updatesubmission/:id', updateSubmission);

module.exports = router;