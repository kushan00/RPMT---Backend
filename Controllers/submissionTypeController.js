const express = require('express');
const mongoose = require('mongoose');

const submissionType = require("../Model/submissionType");

const router = express.Router();


 const getSubmissionTypes = async (req, res) => { 
    try {
        const submissionTypes = await submissionType.find();
                 
        res.status(200).json(submissionTypes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const getSubmissionType = async (req, res) => { 
    const { id } = req.params;

    try {
        const submissionTypes = await submissionType.findById(id);
        
        res.status(200).json(submissionTypes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const createSubmissionType = async (req, res) => {
    const submissionTypes = req.body;

    const newSubmissionType = new submissionType({ ...submissionTypes, creator: req.submissionTypeId, })
    console.log("saved data",newSubmissionType);
    try {
        await newSubmissionType.save();
        
        res.status(201).json({newSubmissionType} );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


 const updateSubmissionType = async (req, res) => {
    const { id } = req.params;
    const { subType,description,deadline  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedSubmissionType = { subType,description,deadline , _id: id };

    await submissionType.findByIdAndUpdate(id, updatedSubmissionType, { new: true });

    res.json({message : "Submission Type updated successfully."});
}


 const deleteSubmissionType = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await submissionType.findByIdAndRemove(id);

    res.json({ message: "Submission Type deleted successfully." });
}

module.exports ={getSubmissionTypes,getSubmissionType ,deleteSubmissionType , createSubmissionType , updateSubmissionType};