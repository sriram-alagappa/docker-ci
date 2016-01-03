var express = require('express');

var app = express();

app.get("/",function(req,res){
	res.end("Hello Sriram !!");
});

app.listen(8080,function(){
	console.log("app started");
});

module.exports = app;