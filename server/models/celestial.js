const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const CelestialModel = mongoose.model("users", schema);
module.exports = CelestialModel;