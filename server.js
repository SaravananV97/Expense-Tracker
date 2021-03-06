const express = require("express");
const passport = require("passport");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const port =process.env.PORT || 5000;
const db = require("./Config/Keys/key").mongoURI;
const login = require("./Routes/api/userlogin");
const expenses = require("./Routes/api/expenses");
const cookieSecret = require("./Config/Keys/key").cookieSecret;
const cookieSession = require("cookie-session");
const session = require("express-session");

require("./Config/Passport/passport");

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
if(process.env.NODE_ENV !== "dev"){
    app.use(express.static(path.join(__dirname, "Frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
    });
}
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))
app.use("/api/users",login);
app.use("/api/expenses", expenses);
app.get("/",  (req, res) => {
    res.send("Welcome to Home");
});
 app.listen(port, () => console.log("The server is running on Port " + port));

