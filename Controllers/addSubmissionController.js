const router = require("express").Router();
const File = require('../Model/addSubmissions');
const mongoose = require("mongoose");

const uploadSubmissions = async (req, res) => {
    try {
        const file = await File(req.body).save();

        res.status(201).send({ data: file, message: "File Uploaded successfully", status: 201 })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })

    }
}

const getAllSubmissions = async (req, res) => {
    try {
        const files = await File.find();

        res.status(200).send({ data: files })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })

    }
}

const getSubmissionById = async (req, res) => {
    let subid = req.params.id;

    File.findById(subid, (err, file) => {
        if (err) {
            return res.status(400).json({
                success: false, err
            });
        }

        return res.status(200).json({
            success: true, file
        });
    });
}

const updateSubmission = async (req, res) => {
    const { id } = req.params;
    const { groupNo, itNo, topic, comment } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Unable to update. Incorrect instance: ${id}`);

    const updateReq = { groupNo, itNo, topic, comment, _id: id };

    await File.findByIdAndUpdate(id, updateReq, { new: true });

    res.json(updateReq);
}

module.exports = { uploadSubmissions, getAllSubmissions, getSubmissionById, updateSubmission };