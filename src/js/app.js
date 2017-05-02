var express = require('express');

var app = express();

//console.log('Welcome to Meal-O server');

app.get('/item', function(req, res){
  res.json({menu: "This is your food item"});
});


app.listen(3000);
