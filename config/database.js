const mongoose = require("mongoose");

module.exports.connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("aaaaaaaaaaaaaa"))
    .catch((err) => {
      console.log("errxxxxxxxxxxxxxxxx");
      process.exit(1);
    });
};
