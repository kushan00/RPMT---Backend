const express = require("express");
const router = express.Router();
const {deleteGroup,updateGroupById , getGroups , getGroupById ,createGroup} = require("../Controllers/groupController");


router.post("/createGroup",createGroup);
router.get("/getAllGroups",getGroups);
router.get("/getGroupById/:id",getGroupById);
router.delete("/deleteGroup/:id",deleteGroup);
router.patch("/updateGroupById/:id",updateGroupById);


module.exports = router;
