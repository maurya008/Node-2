const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null
    },
    lastname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    token: {
        type: String,
    }
})

module.exports = mongoose.model("user", userSchema)    // it automatically saves in Mongo db as users so it plurise it at time of saving