exports.get_login = (request, response, next) => {
    
    response.render('login.ejs', {
        //QUE HACE
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
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