const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const googleOAuth = require("../Keys/key").googleOAuth;
const User = require("../../DBModel/userModel");


passport.serializeUser((user, done) => {
    done(null, user.id)    // for adding cookies 
});                                 

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {  //for removing cookies with id
        done(null, user);
    });
});


passport.use( new GoogleStrategy({
    callbackURL: "/api/users/auth/redirect",
    clientID: googleOAuth.clientID,
    clientSecret: googleOAuth.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id}).then((user) => {
        if(!user){
            const newUser = new User({
                googleId: profile.id,
                name: profile.displayName
            });
            newUser.save().then((newUser) => {
                done(null, newUser);
            })
            .catch((err) =>{
                console.log(err);
            })
        }
        else{
            done(null, user);
        }
    })
    .catch(err => console.log(err))
}));
