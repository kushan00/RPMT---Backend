const express = require("express");
const router = express.Router();
const {deleteGroup,updateGroupById , getGroups , getGroupById ,createGroup , getGroupByNumber} = require("../Controllers/groupController");


router.post("/createGroup",createGroup);
router.get("/getAllGroups",getGroups);
router.get("/getGroupById/:id",getGroupById);
router.delete("/deleteGroup/:id",deleteGroup);
router.patch("/updateGroupById/:id",updateGroupById);
router.get("/getgroupByNumber/:id",getGroupByNumber);

module.exports = router;
