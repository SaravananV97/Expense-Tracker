const express = require("express");
const passport = require("passport");
const router = express.Router();
const url = require("url");

router.get("/test", (req, res) => {
    res.json({test: "Its working fine ...."});
});

router.get("/login", passport.authenticate("google", {scope: ["profile"]}));

router.get("/auth/redirect", passport.authenticate("google"), (req, res) => {
    // res.json(req.user)
    res.redirect(url.format({
        
        pathname: "http://localhost:3000/home",
        query:{
            id: req.user.id,
            name: req.user.name,   
            holdings: req.user.currentHoldings,
            expense: req.user.expense
        }
    }));

});

module.exports = router;
