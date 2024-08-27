const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");


const UserRouter = express.Router();

UserRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(401).send({ message: "User already Exists." });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(500).send("Error in hashing password.");
      }

      const newUser = new UserModel({
        name,
        email,
        password: hash,
      });

      await newUser.save();

      res.status(201).send({
        message: `Congratulations ${name} you are registered`,
        User: newUser,
      });
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: `Error occured: ${error.message}` });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: `Wrong Email, Register first` });
    }
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error in Comparing password: ${err.message}` });
      }

      if (result) {
        const token = jwt.sign(
          {
            name: user.name,
            email: user.email,
            userID: user._id,
          },
          process.env.userSecretKey
        );

        res
          .status(200)
          .send({ message: "Login successful", token: token, user });
      } else {
        res.status(500).send({ message: `Wrong Credentials` });
      }
    });
  } catch (error) {
    res.status(500).send({ message: `Wrong Credentials: ${error.message}` });
  }
});

module.exports = UserRouter;
