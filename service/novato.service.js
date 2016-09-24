var Novato = require('../model/novato');

module.exports.update = function(accion, callback, error){
    Novato.findOne({nombre: accion.novato}).then(function(novato){
        novato.puntos = novato.puntos + accion.puntos;
        novato.save(callback);
    }, function(err){
        error(err);
    });
}

module.exports.find = function(){
    return Novato.find({}).sort('-puntos').exec();
}

module.exports.save = function(novato){
    return novato.save();
}
