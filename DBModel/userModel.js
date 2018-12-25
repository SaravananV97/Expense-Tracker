const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date().toLocaleDateString;
const bcrypt = require("bcrypt");
const userSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
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

//Hash before saving in DB

userSchema.pre("save", async function (next){
    try{
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.password, salt);
        this.password = passwordHash;
        next();
    }
    catch(err){ 
        next(err);
    }
});

userSchema.methods.isValidPassword = async function(password){
    try{
       const match =  await bcrypt.compare(password, this.password);
       return match;
    }
    catch(err){
        throw new Error(err);
    }
}

const userModel =  mongoose.model("User", userSchema);
module.exports = userModel;

