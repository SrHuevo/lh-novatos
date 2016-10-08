var Accion = require('../model/accion');

module.exports.find = function(){
    return Accion.find({}).sort('-date').exec();
}
module.exports.save = function(accion){
    return accion.save();
}
module.exports.remove = function(id){
    return Accion.remove({_id:id});
}
