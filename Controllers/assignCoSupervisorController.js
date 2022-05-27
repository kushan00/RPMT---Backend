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

const updateCoSuperviserReq = async (req, res) => {
  const { id } = req.params;
  const { group_regnum , is_accept , leader_itnum , superviser_id } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Req with id: ${id}`);

  const updateReq = { group_regnum , is_accept , leader_itnum , superviser_id, _id:id};

  await assignCoSupersivor.findByIdAndUpdate(id, updateReq, { new: true });

  res.json(updateReq);
}

module.exports = { requestCoSupervisor, getReqByCoSupervisorId , updateCoSuperviserReq};
