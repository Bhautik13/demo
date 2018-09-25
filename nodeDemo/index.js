var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Cross cutting concern
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', function(request, response){
  response.json({"msg" : "Hello World!", "Name" : "Bhautik Dobariya!"});
})

app.post('/user', function(request, response, next){
  console.log(request.body);
  response.json(request.body);
})

app.get('/user/:id/:action', function(request, response, next){
  console.log(request.params.id +"   "+ request.params.action );
  response.send(request.url);
})

app.listen(8080, function(){
    console.log("app listening on port 8080");
})
