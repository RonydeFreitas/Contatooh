module.exports = (app) => {
    app.get('/', (req, res) => {
        var login = '';
        if (req.user) {
            login = req.user.login;
        }
        res.render('index', {'usuarioLogado' : login});
    })
}