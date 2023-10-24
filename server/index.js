require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users.js");
//const CelestialModel = require("./models/celestial.js");

//connects our backend to our frontend
const cors = require("cors");
app.use(express.json());
app.use(cors());

//connects to the database
mongoose.connect(`${process.env.DB_URL}`);

//returns list of users from our database
app.get("/getUsers", (req, res) => {
    UserModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

//sends a user to be created in the database
app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
});

app.use("/login", (req, res) => {
    res.send({
        token:"test123"
    });
});

app.listen(3001, () => {
    console.log("Server is running!");
});