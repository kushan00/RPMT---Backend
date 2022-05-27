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

const updateSuperviserReq = async (req, res) => {
  const { id } = req.params;
  const { group_regnum , is_accept , leader_itnum , superviser_id } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Req with id: ${id}`);

  const updateReq = { group_regnum , is_accept , leader_itnum , superviser_id, _id:id};

  await assignSupervisor.findByIdAndUpdate(id, updateReq, { new: true });

  res.json(updateReq);
}

module.exports = { requestSupervisor, getReqBySupervisorId , updateSuperviserReq};
