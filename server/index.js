require('dotenv').config();
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const UserModel = require("./models/users.js");
const cors = require("cors");

var ses;

//connects our backend to our frontend
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
//declares cookie
app.use(session({
    secret: "some_cookie",
    name: "cookie_name",
    resave: true,
    saveUninitialized:true,
}));

//connects to the database
mongoose.connect(`${process.env.DB_URL}`);


app.get("/", (req, res) =>{
    ses = req.session;
    res.send(ses);
});

//returns list of users from our database
app.get("/getUsers", (req, res) => {
    UserModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

//get the current logged in user
//returns the user info if successful
//returns nothing if unsuccesful
app.get("/getCurrentUser", (req, res) => {
    UserModel.find({username: {$eq: ses.userid}})
    .then(result => {
        res.send(result);
    })
});

//sends a user to be created in the database
app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
});

//match login credinetials with the database
//will return user info if successful
//will return nothing if unsuccessful
app.use("/login", async (req, res) => {
    UserModel.find({username: {$eq: req.body.username}, password: {$eq: req.body.password}})
    .then(result => {
        //ses = req.session;
        //ses.userid = req.body.username;
        //ses = req;
        res.json(result[0]);
    })
    .catch(err => res.json(err));

});



app.listen(3001, () => {
    console.log("Server is running!");
});