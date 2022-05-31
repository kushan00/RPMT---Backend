const router = require("express").Router();
const File = require('../Model/fileUpload');

const {uploadFile, getAllFiles} = require("../Controllers/fileUploadController");

// upload new file
router.post("/uploadfile", uploadFile)

// Get all files
router.get("/allfiles", getAllFiles)

module.exports = router;