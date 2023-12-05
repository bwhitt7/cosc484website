//Database scheme for users
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    xp: {
        type: Number,
        required: false
    }
    character: {
        type: String,
        required: false,
        default: 'defaultCharacter'
    }
}, {strict: false});

const UserModel = mongoose.model("users", schema);
module.exports = UserModel;
