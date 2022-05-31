const router = require("express").Router();
const File = require('../Model/markingScheme');

const {newMarkingScheme, allMarkings} = require ("../Controllers/markingSchemeController");

// upload new file
router.post("/uploadmarking", newMarkingScheme)

// Get all files
router.get("/allmarkings", allMarkings)

module.exports = router;