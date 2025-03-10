const Usuario = require('../models/users.model');

exports.get_signup = (request, response, next) => {
    response.render("login.ejs",{
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || '',
    isNew: true,
    });
};

exports.post_signup = (request, response, next) =>{
    const usuario = new 
        Usuario(request.body.username, request.body.password);
    usuario.save().then(() => {
        response.redirect('/users/login');
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_login = (request, response, next) => {
    
    response.render('login.ejs', {
        //QUE HACE
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: false,
    });
};

exports.post_login = (request, response, next) => {
    //QUE HACE
    request.session.isLoggedIn = true;
    request.session.username = request.body.username;
    response.redirect('/zoo');
};

//Para destruir la sesión
exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        response.redirect('/users/login'); 
    });
};