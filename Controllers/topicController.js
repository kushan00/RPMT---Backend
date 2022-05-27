const express = require('express');
const mongoose = require('mongoose');
const topic = require('../Model/topic.js');

const router = express.Router();


const getTopics = async (req, res) => {
    try {
        const topics = await topic.find();

        res.status(200).json(topics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getTopicById = async (req, res) => {
    const { id } = req.params;

    try {
        const topics = await topic.findById(id);

        res.status(200).json(topics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createTopic = async (req, res) => {
    const topics = req.body;

    const newTopic = new topic({ ...topics, creator: req.topicId, })
    console.log("saved data", newTopic);
    try {
        await newTopic.save();

        res.status(201).json({ newTopic });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateTopic = async (req, res) => {
    const { id } = req.params;
    const { GroupNo, Topic, Description, is_accept } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No accept with id: ${id}`);

    const updatedTopic = { GroupNo, Topic, Description, is_accept, _id: id };

    await assignSupervisor.findByIdAndUpdate(id, updatedTopic, { new: true });

    res.json(updatedTopic);
}



module.exports = { getTopics, getTopicById, createTopic, updateTopic };