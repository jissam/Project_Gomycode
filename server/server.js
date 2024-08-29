const express = require("express");
require("dotenv").config();
const { connectDB } = require("./config/database");
const userRoute = require("./routes/userroute");
const modelRoute = require("./routes/modelroute");
const server = express();
const cors = require("cors");
connectDB();

server.use(express.json());
server.use(cors());
server.use("/user", userRoute);
server.use("/model", modelRoute);

//run server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log("you are using port 8000");
});
