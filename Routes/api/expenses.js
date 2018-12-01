const express = require("express");
const passport = require("passport");
const router = express.Router();
const url = require("url");
const User = require("../../DBModel/userModel")

router.get("/test", (req, res) => {
    res.json({msg: "Works fine to me...!"})
});

router.post("/addincome", (req, res) => {
    const income = req.body.income;
    console.log(income.currentUser);
    User.findById(income.currentUser).then((user) => {
        if(!user){
            res.status(404).json({msg: "User Not Found"});
        }
        else{
            let newHoldings = user.currentHoldings + income.amount;
            const prevExps = [...user.incomes];
            prevExps.unshift({date:income.date, amount: income.amount, 
                              category: income.catagory, details: income.details});
            User.findByIdAndUpdate(income.currentUser, {$set: {"incomes": prevExps,
                                                        "currentHoldings": newHoldings}}, {$new: true})
            .then((user) => res.json(user))
            .catch((err) => res.json({msg: "Addition Failed"}));
        }
    })
    .catch(err => console.log(err));
});

router.post("/add",(req, res) => {
    const expense = req.body.expense;
    console.log(expense.currentUser);
    User.findById(expense.currentUser).then((user) => {
        if(!user){
            res.status(404).json({msg: "User Not Found"});
        }
        else{
            let newHoldings = user.currentHoldings - expense.amount;
            let newTotal = user.totalExpenses + expense.amount; 
            const prevExps = [...user.expenses];
            prevExps.unshift({date:expense.date, amount: expense.amount, 
                              category: expense.catagory, details: expense.details});
            User.findByIdAndUpdate(expense.currentUser, {$set: {"expenses": prevExps, 
                                                                "totalExpenses": newTotal,
                                                                "currentHoldings": newHoldings}}, {$new: true})
            .then((user) => res.json(user))
            .catch((err) => res.json({msg: "Addition Failed"}));
        }
    })
    .catch(err => console.log(err));
});
module.exports = router;
