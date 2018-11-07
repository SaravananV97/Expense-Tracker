const express = require("express");
const passport = require("passport");
const router = express.Router();
const url = require("url");
const Expenses = require("../../DBModel/expenses")

router.post("/add",(req, res) => {
    console.log(req.body);
    const expense = req.body.expense;
    Expenses.findOne({user: expense.currentUser}).then((expenses) => {

        if(expenses){
          const prevExps = [...expenses.expenses];
          prevExps.unshift({date:expense.date, amount: expense.amount, 
                            category: expense.catagory, details: expense.details});
            new Expenses({})
        }
        else{
            
        }

    })
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

