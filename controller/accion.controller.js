var Accion = require('../model/accion');
var UserService = require('../service/user.service');
var AccionService = require('../service/accion.service');
var PadrinoService = require('../service/padrino.service');
var NovatoService = require('../service/novato.service');

module.exports.controller = function(app) {
	app.get('/api/accion', function(req, resp){
		AccionService.find().then(function(actions){
			resp.write(JSON.stringify(actions));
			resp.end();
		}, function(err){
			resp.status(500);
			resp.end();
		});
    });

	app.put('/api/accion', function(req, resp) {
		UserService.checkUser(req.get('Authorization'), function(){
			var accion = new Accion(req.body);
			console.log('accion: ' + accion);
			AccionService.save(accion).then(function(err){
				if(err){
					resp.status(500);
					resp.end();
					return;
				}
				resp.write(JSON.stringify(accion));
				resp.end();
				PadrinoService.update(accion, function(err){
					if(err){
						console.log(err);
						return;
					}
					console.log("actualiza padrino");
					NovatoService.update(accion, function(err){
						if(err){
							console.log(err);
							return;
						}
						console.log("actualiza novato");
					});
				});
			});
		}, function(err){
			resp.status(403);
			resp.write(err);
			resp.end();
		});
	});
}
