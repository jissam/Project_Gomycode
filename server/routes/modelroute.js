const express = require("express");
const {
  getModel,
  addmodel,
  getAllmodels,
} = require("../controllers/modelControllers");

const modelRoute = express.Router();

modelRoute.get("/allmodels", getAllmodels);
modelRoute.get("/idselected", getModel);
modelRoute.post("/add", addmodel);

module.exports = modelRoute;
