const mongoose = require("mongoose");
const assignCoSupersivor = require("../Model/assignCoSupersivor");

const requestCoSupervisor = async (req, res) => {
  const data = req.body;

  const reqCoSupervisor = new assignCoSupersivor({ ...data});

  try {
    await reqCoSupervisor.save();

    res.status(201).json(reqCoSupervisor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getReqByCoSupervisorId = async (req, res) => { 

  let id = req.params;
  console.log("co_supervisor_id",id.id);

  try {
      const co_supervisor = await assignCoSupersivor.find({"co_supervisor_id" : id.id});
               
      res.status(200).json(co_supervisor);
  } catch (error) {
      console.log(error);
      res.status(404).json({ message: error.message });
  }
}

module.exports = { requestCoSupervisor, getReqByCoSupervisorId };
