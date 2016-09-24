var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var novatoSchema = new Schema({
    nombre:String,
    padrino:String,
    puntos:Number
});

novatoSchema.pre('save', function(next, done){
    if(!this.puntos)
        this.puntos = 0;
    next();
    done();
});

var Novato = mongoose.model('Novato', novatoSchema);

module.exports = Novato;
