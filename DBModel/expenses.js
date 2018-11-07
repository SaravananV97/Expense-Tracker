const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = require("./userModel");

const postSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    expenses:[
    {
        date: {
        type: String
        },
    category:{
        type:String
    },
    details:{
        type:String
    },
        amount:{
        type:String
    }
}
]
});

