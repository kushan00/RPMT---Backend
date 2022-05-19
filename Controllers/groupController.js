const mongoose = require('mongoose');
const Group = require("../Model/group");
const User = require("../Model/user");


 const getGroups = async (req, res) => { 
    try {
        const data = [];
        var superviserID;
        var coSuperviserID;
        var superviser;
        var cosuperviser;

        const groups = await Group.find();
        for(let i =0;i<groups.length;i++){
            const leaderstudentID = groups[i].GroupLeaderID;
            const studentID1 = groups[i].GroupMember1ID;
            const studentID2 = groups[i].GroupMember2ID;
            const studentID3 = groups[i].GroupMember3ID;

            const std1 = await User.findById(leaderstudentID);
            const std2 = await User.findById(studentID1);
            const std3 = await User.findById(studentID2);
            const std4 = await User.findById(studentID3);

            if(groups[i].GroupSuperviser != "")
            {
             superviserID = groups[i].GroupSuperviser;
             superviser = await User.findById(superviserID);
            }
            if(groups[i].GroupCoSuperviser != "")
            {
             coSuperviserID = groups[i].GroupCoSuperviser;          
             cosuperviser = await User.findById(coSuperviserID);
            }
          
            
            data.push({res: groups[i], 
                       superviserdetails:superviser ? superviser : "",
                       cosuperviserdetails:cosuperviser ? cosuperviser : "",
                       grpleader :std1,
                       grpstudent1 :std2,
                       grpstudent2 :std3,
                       grpstudent3 :std4});
        }         
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const getGroupById = async (req, res) => { 
    const { id } = req.params;

    try {
        var superviserID;
        var coSuperviserID;
        var superviser;
        var cosuperviser;

        const groups = await Group.findById(id);
        const leaderstudentID = groups.GroupLeaderID;
        const studentID1 = groups.GroupMember1ID;
        const studentID2 = groups.GroupMember2ID;
        const studentID3 = groups.GroupMember3ID;

        const std1 = await User.findById(leaderstudentID);
        const std2 = await User.findById(studentID1);
        const std3 = await User.findById(studentID2);
        const std4 = await User.findById(studentID3);


        if(groups.GroupSuperviser != "")
        {
         superviserID = groups.GroupSuperviser;
         superviser = await User.findById(superviserID);
        }
        if(groups.GroupCoSuperviser != "")
        {
         coSuperviserID = groups.GroupCoSuperviser;          
         cosuperviser = await User.findById(coSuperviserID);
        }

       let data = {res: groups, 
                    superviserdetails:superviser ? superviser : "",
                    cosuperviserdetails:cosuperviser ? cosuperviser : "",
                   grpleader :std1,
                   grpstudent1 :std2,
                   grpstudent2 :std3,
                   grpstudent3 :std4};
        
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const createGroup = async (req, res) => {
    const groups = req.body;

    const newGroup = new Group({ ...groups, creator: req.userId })

    try {
        await newGroup.save();

        res.status(201).json(newGroup );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


 const updateGroupById = async (req, res) => {
    const { id } = req.params;
    const { GroupNo, GroupSuperviser, GroupCoSuperviser , GroupLeaderID , GroupMember1ID, GroupMember2ID , GroupMember3ID} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No room with id: ${id}`);

    const updatedGroup = { GroupNo, GroupSuperviser, GroupCoSuperviser , GroupLeaderID , GroupMember1ID, GroupMember2ID , GroupMember3ID, _id:id};

    await Group.findByIdAndUpdate(id, updatedGroup, { new: true });

    res.json(updatedGroup);
}


 const deleteGroup = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Group with id: ${id}`);

    await Group.findByIdAndRemove(id);

    res.json({ message: "room deleted successfully." });
}



module.exports ={ deleteGroup , updateGroupById , getGroups , getGroupById ,createGroup };