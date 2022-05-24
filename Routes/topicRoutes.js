const express = require("express");
const router = express.Router();
const {getTopics , getTopicById ,createTopic} = require("../Controllers/topicController");


router.post("/createTopic",createTopic);
router.get("/getAllTopics",getTopics);
router.get("/getTopicById/:id",getTopicById);



module.exports = router;
