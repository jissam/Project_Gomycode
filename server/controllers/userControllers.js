const user = require("../models/user");
const bcrypt = require("bcrypt");
const request = require("request");

//GET: localhost:8000/user/allusers
module.exports.getAllusers = async (req, res) => {
  const allusers = await user.find();
  return res.status(200).json(allusers);
};

//POST: localhost:8000/user/add
module.exports.adduser = async (req, res) => {
  try {
    const { user_id, client_secret } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedid = await bcrypt.hash(user_id, salt);
    const hashedsecret = await bcrypt.hash(client_secret, salt);
    const addeduser = new user({
      user_id: hashedid,
      client_secret: hashedsecret,
    });

    await addeduser.save();
    return res.status(200).json(addeduser);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

//PUT: localhost:8000/user/update/:idselected
module.exports.updateuserbyid = async (req, res) => {
  const { idselected } = req.params;
  const updateData = req.body;
  await user.findByIdAndUpdate(idselected, {
    $set: { client_secret: updateData.client_secret },
  });
  return res.status(200).json("updated");
};

//DELETE: localhost:8000/user/delete/:iddeleted
module.exports.deleteuserbyid = async (req, res) => {
  const { iddeleted } = req.params;
  await user.findByIdAndDelete(iddeleted);
  return res.status(200).json("deleted");
};

//POST: localhost:8000/user/token
module.exports.generateToken = async (req, res) => {
  const { user_id, client_secret } = req.body;
  console.log(req.body);
  const btoa = Buffer.from(user_id + ":" + client_secret).toString("base64");
  console.log(btoa, user_id, client_secret);
  const options = {
    url: "https://developer.api.autodesk.com/authentication/v2/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: "Basic " + btoa,
    },
    form: {
      grant_type: "client_credentials",
      scope: "data:read",
    },
  };
  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      return res.json(JSON.parse(body));
    } else {
      return res.status(500).json(error);
    }
  });
};
