var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Uses for getting page elements
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Make a DB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/shoppingList", function(err){
	if(err){
		console.log("Error:" + err);
	} else{
		console.log("Connect to Database successfully.");
	}
});

//All Shopping Lists schema
var allShoppingLists = mongoose.model("allShoppingLists",{
	shoppingLists:[],
});

//Shopping List Schema
var shoppingList = mongoose.model("shoppingList",{
	name:String,
	date:Date,
	location:String,
	items:[],
});

//Shopping Item Schema
var ShoppingListItem = mongoose.model("shoppingListItem",{
	name:String,
	description:String,
	category:String,
	amount:Number,
	price:Number,
	required:Boolean,
});

app.post("/addOneItem",function(request, response){
    var newListItem = new ShoppingListItem(request.body);
    newListItem.save();
    response.status(201);
    response.send(newListItem);
});


app.get("/getAllShoppingLists",function(req,res){
	allShoppingLists.find({}).exec(function(err,allLists){
		if(err){
			console.log(err);
		} else {
			response.send(allLists);
		}
	})
});

// allows the server to connect on port 3000 
app.listen(3000,function(){
	console.log("Listening on http://localhost:3000");
});