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
const fileUpload = require('./Routes/fileUpload');
const markingScheme = require('./Routes/markingScheme')
const addSubmission = require('./Routes/addSubmissions')
const GroupPanel = require('./Routes/GroupPanelRoutes');


const app = express();


const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
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
app.use("/fileupload", fileUpload);
app.use("/marking", markingScheme);
app.use("/submission", addSubmission);
app.use("/GrouPanel",GroupPanel);

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
  console.log(`Backend App is running on ${PORT}`);
});


//chat imports
const http = require("http");
const { Server } = require("socket.io");


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("CHAT SERVER RUNNING ON PORT 3001");
});
