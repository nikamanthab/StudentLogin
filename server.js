const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;

const Mongo = require('./Mongo');


const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+"/views/partials");
app.use(bodyParser.json());//////////

app.set('view engine','hbs');
app.use(express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
	res.render('welcome.hbs',{
		title: "English Exam System",
	});
});

app.post('/test',(req,res)=>{
	console.log("2",req.body);
	res.render('test.hbs');
});

app.get('/signup',(req,res)=>{
	console.log(req.body);
	res.render('signup.hbs');
	//res.render('signup.js');
});

app.post('/finish',(req,res)=>{
	console.log(req.body);
	Mongo.add(req.body);
	res.render('finish.hbs');

});

app.listen(port ,()=>{
	console.log(`server is started in ${port}`)
});