var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var accionSchema = new Schema({
    novato:String,
    padrino:String,
    motivo:String,
    puntos:Number,
    date:Date
});

accionSchema.pre('save', function(next, done){
    if(!this.date)
        this.date = new Date();
    next();
    done();
});

var Accion = mongoose.model('Accion', accionSchema);

module.exports = Accion;
