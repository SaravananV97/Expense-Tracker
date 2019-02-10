const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const JwtStrategy = require("passport-jwt").Strategy;
const {ExtractJwt} = require("passport-jwt");
const {googleOAuth, jwtAuth} = require("../Keys/key");
const User = require("../../DBModel/userModel");

passport.serializeUser((user, done) => {
    done(null, user.id)    // for adding cookies 
});                                

opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtAuth.secret
} 

passport.use(new JwtStrategy(opts, async (payload, done) => {
    try{
        console.log("logging...payload...")
        // console.log(payload);
   const user = await User.findById(payload.id);
   if(!user) done(null, false);
   else done(null, user);
    }
    catch(err){
        console.log("error");
        res.json({err});
    }
}));


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
