"use strict";
exports.__esModule = true;
var models_1 = require("../models");
var JwtStrategy = require('passport-jwt').Strategy, ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "-----BEGIN RSA PUBLIC KEY-----\n    MIIBCgKCAQEAst0QhV3d+owVRDE9qy1RjqG67cij32bt+0PutmZKzGnU2+A6JQ2w\n    xTg9q89MoYN+mnyNgcURMwgK+MbyfvqWLSaNK88KexI2GQ4IDFLldHk25VSZHnrk\n    YBl9vxIqGYSlWRGlTVPoCCvx8f+CNCyVomEU9g98N0cUtp/873hSp6jEyzP76ZKP\n    9gY7ykF8QcjnpU/+5gPxlBtdp69c7VUREk8654NskW6HVgGVJLE3hAUGcvdFFGIJ\n    hslDgA864e5v6/vG5xL5wutFMIoGALNPVq2BgZ50wnqP0s/Zgw8bCtZQCQH1Elxm\n    r7heStYxGqM9La1mfQs9ZBitEiNud8VGWwIDAQAB\n    -----END RSA PUBLIC KEY-----".replace(/\n\s+/g, "\n")
};
var jwtStrategy = new JwtStrategy(opts, function (jwt_payload, done) {
    models_1.User.findOne({ email: jwt_payload.email }, function (err, user) {
        console.log("Admin USER: ", user);
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
});
exports["default"] = jwtStrategy;
