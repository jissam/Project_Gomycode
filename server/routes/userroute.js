const express = require("express");
const {
  getAllusers,
  adduser,
  updateuserbyid,
  deleteuserbyid,
  generateToken,
} = require("../controllers/userControllers");

const userRoute = express.Router();

userRoute.get("/allusers", getAllusers);
userRoute.post("/add", adduser);
userRoute.post("/token", generateToken);
userRoute.put("update/:idselected", updateuserbyid);
userRoute.delete("/delete/:iddeleted", deleteuserbyid);

module.exports = userRoute;
