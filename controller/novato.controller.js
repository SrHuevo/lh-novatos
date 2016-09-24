var Novato = require('../model/novato');
var UserService = require('../service/user.service');
var NovatoService = require('../service/novato.service');

module.exports.controller = function(app) {
	app.get('/api/novato', function(req, resp){
		NovatoService.find().then(function(novatos){
			resp.write(JSON.stringify(novatos));
			resp.end();
		}, function(err){
			resp.status(500);
			resp.end();
		});
    });

	app.put('/api/novato', function(req, resp) {
		UserService.checkUser(req.get('Authorization'), function(){
			var novato = new Novato(req.body);
			NovatoService.save(novato).then(function(){
				resp.write(JSON.stringify(novato));
				resp.end();
			}, function(err){
				resp.status(500);
				resp.end();
			});
		}, function(err){
			resp.status(403);
			resp.write(err);
			resp.end();
		});
	});
}
