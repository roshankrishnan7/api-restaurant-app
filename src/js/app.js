var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

//console.log('Welcome to Meal-O server');


app.use(stormpath.init(app, {
  expand: {
    customData: true,
  },
  web: {
    produces: ['application/json']
  }
}));


app.get('/item', stormpath.apiAuthenticationRequired, function(req, res){
  res.json({menu: req.user.customData.notes || "This is your food item"});
});

app.listen(3000);