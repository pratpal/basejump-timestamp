'use strict';

var path = process.cwd();
var timeParser = require(path + '/app/controllers/timeparser.js');

module.exports = function (app) {

var tp = new timeParser();

app.get('/', function (req, res) {
		res.sendFile(path + '/public/index.html');
	})


app.get('/:datestring',  function (req, res) {
		res.json(tp.getTimes(req.params.datestring));
	})

}