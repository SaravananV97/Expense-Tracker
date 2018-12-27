const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../../DBModel/userModel");
const url = require("url");
const {jwtAuth} = require("../../Config/Keys/key");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post("/test", (req, res) => {
    res.json({test: "Its working fine ....", msg: req.body});
});

const generateToken = (id) => {
    return jwt.sign({
        iss: "Expense Tracker",
        sub: id,
        iat: new Date().getDate(),
        exp: new Date().getDate() + 1  
    }, jwtAuth.secret);
}

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

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({email});
    try{
        if(user){
            const match = await user.isValidPassword(password);
           if(match){
                res.json({ jwtToken: generateToken(user.id) });
           }
           else res.status(401).json({password: "Please enter a right Password"});
        }
        else res.json({email: "Email ID not found!"});
    }
    catch(err){
        throw new Error(err);
    }
});

router.post("/register", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.firstName + " " + req.body.lastName;
    User.findOne({email}).then((user) =>{
       if(user) res.json({email: "Email Id is already in use"});
        else{
            const newUser = new User({
                                    email: req.body.email,
                                     password: req.body.password, 
                                     name: name});
            newUser.save().then((savedUser) =>{
                res.json({msg: "User Registration Successful!" });
            })
            .catch(err => res.json(err));
        }
    })
    .catch((err) => {
        res.json(err); 
    });

router.get("/google/oauth", passport.authenticate("google", {scope: ["profile", "email"]}));

router.get("/auth/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect(url.format(`http://localhost:3000/home/${req.user.id}`));
    });
});

module.exports = router;
