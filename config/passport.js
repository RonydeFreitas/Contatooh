var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');

module.exports = () => {
    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: '', // Your client id github
        clientSecret: '', // Your client secret key github
        callBackURL: 'http://localhost:3000/github/callback' //Your URL callback github
    }, (accessToken, refreshToken, profile, done) => {
        Usuario.findOrCreate(
            {'login': profile.username},
            {'nome': profile.username},
            (erro, usuario) => {
                if(erro){
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
            )
    }));
    passport.serializeUser((usuario, done) => {
        done(null, usuario._id);
    });

    passport.deserializeUser((id, done) => {
        Usuario.findById(id).exec()
        .then(usuario => {
            done(null, usuario);
        });
    });
}