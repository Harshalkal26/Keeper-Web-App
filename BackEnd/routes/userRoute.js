const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userDataModel");

//creating router
const router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//get singleuser
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleuser = await User.findById({ _id: id });
    res.status(200).json(singleuser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//delete user by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleuser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(singleuser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//update user using id
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateuser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateuser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
