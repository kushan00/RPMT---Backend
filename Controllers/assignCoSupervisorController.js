const mongoose = require("mongoose");
const Group = require("../Model/assignCoSupersivor");

const requestCoSupervisor = async (req, res) => {
  const data = req.body;

  const reqCoSupervisor = new Group({ ...data, creator: req.userId });

  try {
    await reqCoSupervisor.save();

    res.status(201).json(reqCoSupervisor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { requestCoSupervisor };
