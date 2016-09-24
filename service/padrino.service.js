var Padrino = require('../model/padrino');

module.exports.update = function(accion, callback, error){
    Padrino.findOne({nombre: accion.padrino}).then(function(padrino){
        padrino.puntos = padrino.puntos + accion.puntos;
        padrino.save(callback);
    }, function(err){
        error(err);
    });
}

module.exports.find = function(){
    return Padrino.find({}).sort('-puntos').exec();
}

module.exports.save = function(padrino){
    return padrino.save();
}
