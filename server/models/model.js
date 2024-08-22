const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
  name: { type: String },
  urn: { type: String },
});

module.exports = mongoose.model("model", ModelSchema);
