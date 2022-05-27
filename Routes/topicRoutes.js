const express = require("express");
const router = express.Router();
const {getTopics , getTopicById ,createTopic,updateTopic} = require("../Controllers/topicController");


router.post("/createTopic",createTopic);
router.get("/getAllTopics",getTopics);
router.get("/getTopicById/:id",getTopicById);
router.patch("/updateTopic/:id",updateTopic);



module.exports = router;
