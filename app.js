
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var setup = require('./routes/api/setup');
var todos = require('./routes/api/todos');

var app = express();

var port = process.env.PORT || 5000;
connectionUrl="mongodb+srv://deepakbharati434:slimshady@cluster0.cn7tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(connectionUrl,{ useNewUrlParser: true })
.then(()=> console.log("Connected to the MongoDatabase"))
.catch(err => console.log("Error connecting to the database"));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api/todos/',todos);


app.use('/assets', express.static(__dirname + '/public'));

 
app.set('view engine', 'ejs');


app.get('/', function(req,res){
  res.send("Its Working: " + req.url);
});

app.listen(5000);//creating the node webserver which listens on port 3000
