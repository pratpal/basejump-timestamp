/*var express = 1uire('express'),
moment  = require ('moment');
var app = express()


 

app.get('/:time', function (req, res) {
  var result ={ "unix": null, "natural": null }
  
  var requestTime = req.params.time;
 
  if (requestTime != ""){
      if (Number(requestTime) > 0){
           var parse = new moment.unix (requestTime).format("MMM DD, Y");
            result ={ "unix": requestTime, "natural": parse }
      }
      else {
          var parse = new Date(requestTime);
          if (parse != "Invalid Date") {
              result ={ "unix": parse.getTime() / 1000, "natural": requestTime }
          }
      }
  }
  
  res.send(result)
  
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

*/

'use strict';

// call the packages we need
var express    = require('express');        
var app        = express();                
var routes = require('./app/routes/index.js');

//app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));
    
var port = process.env.PORT || 8080;        // set our port
    
routes(app);
//api(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});