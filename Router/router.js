function error404(req, res){
	res.writeHead(404,{'Content-Type': 'text/plain'});
	res.write("No route registered for '"+req.url+"'");
	res.end();
}

function Router(){
	this._routes = new Object();

	this.register = function(path, callback){
		this._routes[path] = callback;
		delete buff;
	};

	this.route = function(req, res){
		var cback = this._routes[req.url];
		if(!cback)
			error404(req, res);
		else{
			res.writeHead(404,{'Content-Type': 'text/plain'});
			cback(req, res);
			res.end();
		}
	};

	return this;
}

exports.Router = Router;
