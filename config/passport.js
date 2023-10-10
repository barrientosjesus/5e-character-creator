const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const BnetStrategy = require('passport-bnet').Strategy;

const User = require('../models/user');

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },

    async function (accessToken, refreshToken, profile, cb) {

        try {
            let user = await User.findOne({ googleId: profile.id });

            if (user) return cb(null, user);

            user = await User.create({
                name: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            });
        } catch (err) {
            return cb(err);
        }
    }
));

passport.use(new BnetStrategy(
    {
        clientID: process.env.BNET_ID,
        clientSecret: process.env.BNET_SECRET,
        scope: process.env.OAUTH_SCOPES || "wow.profile",
        callbackURL: process.env.OAUTH_CALLBACK_URL || "http://localhost:3000/oauth/battlenet/callback",
        region: "us"
    },

    async function (accessToken, refreshToken, profile, cb) {

        try {
            let user = await User.findOne({ googleId: profile.id });

            if (user) return cb(null, user);
            console.log('try BNET STRAT')
            user = await User.create({
                name: profile.battletag,
                googleId: profile.id,
                email: "test@gmail.com",
                avatar: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg"
            });
        } catch (err) {
            return cb(err);
        }
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user._id);
});

passport.deserializeUser(async function (userId, cb) {
    cb(null, await User.findById(userId));
});