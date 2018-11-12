const express = require("express");
const passport = require("passport");
const router = express.Router();
const url = require("url");
const Expenses = require("../../DBModel/expenses")

router.get("/test", (req, res) => {
    res.json({msg: "Works fine to me...!"})
});
router.post("/add",(req, res) => {
    console.log(req.body);
    const expense = req.body.expense;
    Expenses.findOne({user: expense.currentUser}).then((expenses) => { 
        if(!expenses){
           const newExp = new Expenses({user: expense.currentUser, expenses: [{date:expense.date, amount: expense.amount, 
                category: expense.catagory, details: expense.details}]});
            newExp.save().then((exp) => res.json(exp))
            .catch((err) => res.json({err: "Addition failed"}));

        }
        else{
            const prevExps = [...expenses.expenses];
            prevExps.unshift({date:expense.date, amount: expense.amount, 
                              category: expense.catagory, details: expense.details});
            const newExp = {user: expense.currentUser, expenses: prevExps}
            Expenses.findOneAndUpdate({user: expense.currentUser}, {$set: newExp}, {new: true})
            .then((exp) => res.json(exp))
            .catch((err) => res.json({msg: "Addition Failed"}));
        }
    });
    // res.redirect(url.format({
    //     pathname: "http://localhost:3000/home",
    //     query:{
    //         id: req.user.id,
    //         name: req.user.name,   
    //         holdings: req.user.currentHoldings,
    //         expense: req.user.expense
    //     }
    // }));

});

module.exports = router;

