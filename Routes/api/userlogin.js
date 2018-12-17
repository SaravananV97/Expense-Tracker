const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../../DBModel/userModel");
const url = require("url");

router.post("/test", (req, res) => {
    res.json({test: "Its working fine ....", msg: req.body});
});


router.get("/userdetails/:id",(req, res) => {
    console.log(req.logout);
    User.findById(req.params.id).then((user) => {

        if(!user){
            res.status(404).json({msg: "userNotFound"})
        }
        else
            res.json(user);
    })
});

router.get("/login", passport.authenticate("google", {scope: ["profile"]}));

router.get("/auth/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect(url.format(`http://localhost:3000/home/${req.user.id}`));
});

module.exports = router;
