exports.getHistoria = (request, response, next) => {
    response.render('historia', { title: 'Historia del Zoológico' });
};

exports.getUbicacion = (request, response, next) => {
    response.render('ubicacion', { title: 'Ubicación del Zoológico' });
};

exports.getHorarios = (request, response, next) => {
    response.render('horarios', { title: 'Horarios del Zoológico' });
};
