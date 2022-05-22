const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//import Routes
const user = require("./Routes/userRoutes");
const group = require("./Routes/groupRoutes");

//dev/kushan

const app = express();


//asd
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin:["http://localhost:1234"],
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user",user);
app.use("/group",group);


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