var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true})); 
app.set("view engine" , "ejs");


app.get("/" , function(req, res){
	res.render("landing");
});

app.get("/home" , function(req , res){
	res.render("home");
});






app.listen(process.env.PORT || 3000 , process.env.IP , function(){
	console.log("Server has started");
});