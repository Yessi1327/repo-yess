module.exports = (request, response, next) => {
    for (let privilegio of request.session.privilegios) {
        //Compara Privilegios
        if (privilegio.nombre == "ver animales") {
            return next();
        }
    }
    //En caso de que no tenga el permiso se manda este mensaje
    return response.status(403).send("Tus acciones han sido registradas y reportadas al superadmin");
}