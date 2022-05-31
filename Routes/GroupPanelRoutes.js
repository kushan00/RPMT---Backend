const express = require("express");
const router = express.Router();
const {getGroupPanelByUserId,deleteGroupPanel , updateGroupPanelById , createGroupPanel , getGroupPanelById ,getGroupPanels} = require("../Controllers/GroupPanelController");


router.post("/createGroupPanel",createGroupPanel);
router.get("/getGroupPanels",getGroupPanels);
router.get("/getGroupPanelById/:id",getGroupPanelById);
router.delete("/deleteGroupPanel/:id",deleteGroupPanel);
router.patch("/updateGroupPanelById/:id",updateGroupPanelById);
router.get("/getGroupByUserID/:id",getGroupPanelByUserId);

module.exports = router;
