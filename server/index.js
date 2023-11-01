require('dotenv').config();

//Firebase
const {initializeApp} = require("firebase/app");
const {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } = require("firebase/auth");

const firebaseConfig = {
    apiKey: `${process.env.FB_API_KEY}`,
    authDomain: "astro-teach.firebaseapp.com",
    projectId: "astro-teach",
    storageBucket: "astro-teach.appspot.com",
    messagingSenderId: `${process.env.FB_SENDER_ID}`,
    appId: `${process.env.FB_APP_ID}`
  };
initializeApp(firebaseConfig);
const auth = getAuth();



//Express
const express = require("express");
const app = express();

//MongoDB
const mongoose = require("mongoose");
const UserModel = require("./models/users.js");


//connects our backend to our frontend
const cors = require("cors");
app.use(cors());

app.use(express.json());

//connects to the database
mongoose.connect(`${process.env.DB_URL}`);


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


    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          res.send(uid);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
});


//sends a user to be created in the database
app.post("/createUser", async (req, res) => {

    //create user
    await createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      //
    })
    .catch((err) => {
        res.send(err);
    });

    //add display name
    await updateProfile(auth.currentUser, {displayName: req.body.username})
    .catch((err) => {
        res.send(err);
    });

    res.send(auth.currentUser.uid);

});





//match login credinetials with the database
//will return user info if successful
//will return nothing if unsuccessful
app.use("/login", async (req, res) => {

    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      res.send(user.uid);
      // ...
    })
    .catch((err) => {
      res.send(err)
    });

});



app.listen(3001, () => {
    console.log("Server is running!");
});