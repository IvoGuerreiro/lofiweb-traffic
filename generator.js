
var express =  require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.route('/map/:lat/:lng/:zoom/:width/:height')
	.get(function(req, res) {
		console.log(req.params.lat);
                console.log(req.params.lng);
                console.log(req.params.zoom);
                console.log(req.params.width);
                console.log(req.params.height);
	});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

		
