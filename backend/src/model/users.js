const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {type: String, required: true},
    password : {type: String, required: true},
    avatarImage : {type: String },
    username : {type: String }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
    