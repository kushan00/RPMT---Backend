const router = require("express").Router();
const File = require('../Model/addSubmissions');

const {uploadSubmissions, getAllSubmissions} = require("../Controllers/addSubmissionController");


// upload new file
router.post("/upsubmissions", uploadSubmissions);

// Get all files
router.get("/allsubmissions", getAllSubmissions);

module.exports = router;