const mongoose = require("mongoose");
const assignSupervisor = require("../Model/assignSupervisor");

const requestSupervisor = async (req, res) => {
  const data = req.body;

  const newGroup = new assignSupervisor({ ...data});

  try {
    await newGroup.save();

    res.status(201).json(newGroup);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getReqBySupervisorId = async (req, res) => { 

  let id = req.params;
  console.log("supervisor_id",id.id);

  try {
      const users = await assignSupervisor.find({"supervisor_id" : id.id});
               
      res.status(200).json(users);
  } catch (error) {
      console.log(error);
      res.status(404).json({ message: error.message });
  }
}

module.exports = { requestSupervisor, getReqBySupervisorId};
