const router = require("express").Router();
const File = require('../Model/addSubmissions');

// upload new file
router.post("/upsubmissions", async (req, res) => {
    try {
        const file = await File(req.body).save();

        res.status(201).send({data: file, message: "File Uploaded successfully" ,status:201})

    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})

    }
})

// Get all files
router.get("/allsubmissions", async (req, res) => {
    try {
        const files = await File.find();

        res.status(200).send({data: files})

    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})

    }
})

module.exports = router;