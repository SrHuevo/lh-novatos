var Padrino = require('../model/padrino');
var UserService = require('../service/user.service');
var PadrinoService = require('../service/padrino.service');

module.exports.controller = function(app) {
	app.get('/api/padrino', function(req, resp){
		PadrinoService.find().then(function(padrinos){
			resp.write(JSON.stringify(padrinos));
			resp.end();
		}, function(err){
			resp.status(500);
			resp.end();
		});
    });

	app.put('/api/padrino', function(req, resp) {
		UserService.checkUser(req.get('Authorization'), function(){
			var padrino = new Padrino(req.body);
			PadrinoService.save(padrino).then(function(){
				resp.write(JSON.stringify(padrino));
				resp.end();
			}, function(err){
				resp.status(500);
				resp.write(err);
				resp.end();
			});
		}, function(err){
			resp.status(403);
			resp.end();
		});
	});
}
