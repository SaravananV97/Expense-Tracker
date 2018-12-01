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
        type: Number,
        default: 0
    },
    totalExpenses:{
        type: Number,
        default: 0
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
            type:Number
        }
    }],
    incomes:[
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
                type:Number
            }
        }]
});

const userModel =  mongoose.model("User", userSchema);
module.exports = userModel;

