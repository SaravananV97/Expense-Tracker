const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date().toLocaleDateString;
const userSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    googleId:{
        type:String
    },
    date: {
        type: Date, 
        default: Date.now()
    },
    currentHoldings: {
        type: String,
        default: 0
    },
    expense: {
        type: String,
        default: 0
    },
});

const userModel =  mongoose.model("User", userSchema);
module.exports = userModel;

