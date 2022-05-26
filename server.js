const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//import Routes
const user = require("./Routes/userRoutes");
const group = require("./Routes/groupRoutes");
const assignCoSup = require("./Routes/assignCoSupervisorRoutes");
const assignSup = require("./Routes/assignSupervisorRoutes");




const topic = require("./Routes/topicRoutes");
const submissionType = require("./Routes/submissionTypeRoutes");




const app = express();


const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:1234"],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/user",user);
app.use("/group",group);
app.use("/topic",topic);
app.use("/supervisor", assignSup);
app.use("/co-supervisor", assignCoSup);
app.use("/submissionType", submissionType);


//DB connection
const DB_URL =
  "mongodb+srv://admin:admin@reaerchtool.celhc.mongodb.net/RPMTDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
