const mongoose = require("mongoose");
const Group = require("../Model/assignSupervisor");

const requestSupervisor = async (req, res) => {
  const data = req.body;

  const newGroup = new Group({ ...data});

  try {
    await newGroup.save();

    res.status(201).json(newGroup);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { requestSupervisor };
