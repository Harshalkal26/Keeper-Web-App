const mongoose = require("mongoose");
//declearing schema
const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
const userData = mongoose.model("UserData", userDataSchema);
module.exports = userData;
