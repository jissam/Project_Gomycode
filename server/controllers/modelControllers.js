const model = require("../models/model");

//GET: localhost:8000/model/allmodels
module.exports.getAllmodels = async (req, res) => {
  const allmodels = await model.find();
  return res.status(200).json(allmodels);
};

//POST: localhost:8000/model/add
module.exports.addmodel = async (req, res) => {
  try {
    const { name, urn } = req.body;
    const addedmodel = new model({
      name,
      urn,
    });

    await addedmodel.save();
    return res.status(200).json(addedmodel);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

//GET: localhost:8000/model/:idselected
module.exports.getModel = async (req, res) => {
  const { idselected } = req.params;
  const idmodel = await model.findById(idselected);
  return res.status(200).json(idmodel);
};
