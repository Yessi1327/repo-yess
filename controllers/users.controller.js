const Usuario = require('../models/users.model');

exports.get_signup = (request, response, next) => {
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }
    
    response.render("login.ejs",{
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || '',
    isNew: true,
    info: mensaje,
    });
};

exports.post_signup = (request, response, next) =>{
    const usuario = new 
        Usuario(request.body.username, request.body.password);
    usuario.save().then(() => {
        request.session.info = `Tu usuario se ha creado`;
        response.redirect('/users/login');
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_login = (request, response, next) => {
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }
    
    response.render('login.ejs', {
        //QUE HACE
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: false,
        info: mensaje,
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