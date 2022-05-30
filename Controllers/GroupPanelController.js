const mongoose = require('mongoose');
const GroupPanel = require("../Model/GroupPanel");
const User = require("../Model/user");


 const getGroupPanels = async (req, res) => { 
    try {
        const data = [];

        const groups = await GroupPanel.find();
        for(let i =0;i<groups.length;i++){
            const M1 = groups[i].PanelMember1ID;
            const M2 = groups[i].PanelMember2ID;
            const M3 = groups[i].PanelMember3ID;
            const M4 = groups[i].PanelMember4ID;

            const PM1 = await User.findById(M1);
            const PM2 = await User.findById(M2);
            const PM3 = await User.findById(M3);
            const PM4 = await User.findById(M4);
                               
            data.push({res: groups[i], 
                       PanelMember1 :PM1,
                       PanelMember2 :PM2,
                       PanelMember3 :PM3,
                       PanelMember4 :PM4
                    });
        }         
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const getGroupPanelById = async (req, res) => { 
    const { id } = req.params;

    try {

        const groups = await GroupPanel.findById(id);
        const M1 = groups.PanelMember1ID;
        const M2 = groups.PanelMember2ID;
        const M3 = groups.PanelMember3ID;
        const M4 = groups.PanelMember4ID;

        const PM1 = await User.findById(M1);
        const PM2 = await User.findById(M2);
        const PM3 = await User.findById(M3);
        const PM4 = await User.findById(M4);
                           
        let data = {res: groups, 
                   PanelMember1 :PM1,
                   PanelMember2 :PM2,
                   PanelMember3 :PM3,
                   PanelMember4 :PM4
                };
        
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const createGroupPanel = async (req, res) => {
    const PanelData = req.body;

    const Panel = new GroupPanel({ ...PanelData})

    try {
        await Panel.save();

        res.status(201).json({Panel , status:201} );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


 const updateGroupPanelById = async (req, res) => {
    const { id } = req.params;
    const { GroupNo, GroupID, PanelMember1ID , PanelMember2ID , PanelMember3ID, PanelMember4ID } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No room with id: ${id}`);

    const updatedGroup = { GroupNo, GroupID, PanelMember1ID , PanelMember2ID , PanelMember3ID, PanelMember4ID , _id:id};

    await GroupPanel.findByIdAndUpdate(id, updatedGroup, { new: true });

    res.json(updatedGroup);
}


 const deleteGroupPanel = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Group with id: ${id}`);

    await GroupPanel.findByIdAndRemove(id);

    res.json({ message: "Group Panel deleted successfully." });
}



module.exports ={ deleteGroupPanel , updateGroupPanelById , createGroupPanel , getGroupPanelById ,getGroupPanels };