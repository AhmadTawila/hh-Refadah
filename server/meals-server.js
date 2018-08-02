var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var Meals = require('./models/meals');
//Access-Control-Allow-Origin, to be allowed to call it from angular
//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db,
	 url: 'mongodb://asmaa:a12345678@ds263161.mlab.com:63161/hajj-meals'
  })
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser:true
};
mongoose.connect('mongodb://asmaa:a12345678@ds263161.mlab.com:63161/hajj-meals',options);
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

///////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

app.get('/', (req, res)=>{
	  res.send('<h1>HAJJ SERVER ^_^</h1>');
	});


app.post("/addMeal",(req,res)=> {

	console.log(req.body);
		    var meal = {
      breakfast: req.body.breakfast,
      breakfastDate: req.body.breakfastDate,
      launch: req.body.launch,
      launchDate: req.body.launchDate,
      dinner: req.body.dinner,
      dinnerDate: req.body.dinnerDate,
      personsNumber:req.body.personsNumber
    }


    Meals.create(meal, (error, newMeal)=> {
      if (error) {
        console.log(error);
		res.send(error);
      } else {
        
        res.send(newMeal);
		//db.close();
      }
	  
    });
});
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
app.get('/ListMeals',(req, res)=> {

	Meals.find({},(err,data)=>{
                console.log(JSON.stringify(data.toArray));
                res.send(data);
                //queryResult=data;

            });
    
});
var port = process.env.PORT || 8080;
server.listen(port);
console.log('running on port '+port);