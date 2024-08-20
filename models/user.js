const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  client_secret: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("user", UserSchema);
