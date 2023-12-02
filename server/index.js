require('dotenv').config();

//Firebase
const { initializeApp } = require("firebase/app");
//const {getFirestore, collection, addDoc} = require("firebase/firestore");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, deleteUser } = require("firebase/auth");

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
//const db = getFirestore();


//Express
const express = require("express");
const app = express();
app.use(express.json());

//MongoDB
const mongoose = require("mongoose");
const UserModel = require("./models/users.js");
//connects to the database
mongoose.connect(`${process.env.DB_URL}`);


//connects our backend to our frontend
const cors = require("cors");
app.use(cors());



//returns list of users from our database
app.get("/getUsers", (req, res) => {
    UserModel.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});


//get the current logged in user
//returns the user info if successful
app.get("/getCurrentUser", (req, res) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            UserModel.find({_id:user.uid})
            .then((result) => {
                res.json(result[0]);
                return;
            })
            .catch((err) => {
                return;
            });
        } else {
            res.send("Not logged in");
            return;
        }
    });
});


//sends a user to be created in the database
app.post("/createUser", (req, res) => {

    //create user
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
        var error;

        //add display name
        updateProfile(auth.currentUser, { displayName: req.body.username })
        .then(() => {
            //insert into MongoDB database
            UserModel.create({
                _id: auth.currentUser.uid,
                username: req.body.username,
                email: req.body.email,
                xp: 0
            })
            .then(() => {
                res.send("User created");
            })
            .catch((err) => {
                error = err;
            })

        })
        .catch((err) => {
            error = err;
        });
        //if there's a failure, we delete the user we just made and send an error
        if (error){
            deleteUser(auth.currentUser)
            .then(() => {
                res.status(400).json(error);
            })
            .catch((err) => {
                //bro idk
            });
        }
    })
    .catch((err) => {
        res.status(400).send("");
    });


});





//match login credinetials with the database
//will return user info if successful
app.use("/login", (req, res) => {

    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
        // Signed in 
        res.send(userCredential);
    })
    .catch((err) => {
        res.send(false);
    });

});

app.use("/logOutCurrentUser", (req, res) => {
    auth.signOut();
});



app.post("/addXP", (req, res) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            UserModel.findOneAndUpdate({_id:user.uid}, {$inc: {xp: req.body.xp}})
            .then(() => res.send(true))
            .catch((err) => res.send(err));
           
        } else {
            res.send(false);
            return;
        }
    });
});

app.post("/addField", (req, res) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            UserModel.findOneAndUpdate({_id:user.uid}, {$inc: {xp: req.body.xp}})
            .then(() => res.send(true))
            .catch((err) => res.send(err));
           
        } else {
            res.send(false);
            return;
        }
    });
});

app.listen(3001, () => {
    console.log("Server is running!");
});

// Export the Express API
module.exports = app;