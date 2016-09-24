var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var padrinoSchema = new Schema({
    nombre:String,
    puntos:Number
});

padrinoSchema.pre('save', function(next, done){
    if(!this.puntos)
        this.puntos = 0;
    next();
    done();
});

var Padrino = mongoose.model('Padrino', padrinoSchema);

module.exports = Padrino;
