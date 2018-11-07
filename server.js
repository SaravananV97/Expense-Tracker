const express = require("express");
const passport = require("passport");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const db = require("./Config/Keys/key").mongoURI;
const login = require("./Routes/api/userlogin");
const expenses = require("./Routes/api/expenses");
const cookieSecret = require("./Config/Keys/key").cookieSecret;
const cookieSession = require("cookie-session");
require("./Config/Passport/passport");

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

app.use(passport.initialize());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))
app.use("/api/users",login);
app.use("/api/expenses", expenses);
app.use(cookieSession({
    keys: [cookieSecret],
    maxAge: 24 * 60 * 60 * 1000
}))
app.get("/",  (req, res) => {
    res.send("Welcome to Home");
});

app.listen(port, () => console.log("The server is running on Port " + port));

