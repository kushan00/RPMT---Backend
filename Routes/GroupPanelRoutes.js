const express = require("express");
const router = express.Router();
const {deleteGroupPanel , updateGroupPanelById , createGroupPanel , getGroupPanelById ,getGroupPanels} = require("../Controllers/GroupPanelController");


router.post("/createGroupPanel",createGroupPanel);
router.get("/getGroupPanels",getGroupPanels);
router.get("/getGroupPanelById/:id",getGroupPanelById);
router.delete("/deleteGroupPanel/:id",deleteGroupPanel);
router.patch("/updateGroupPanelById/:id",updateGroupPanelById);


module.exports = router;
