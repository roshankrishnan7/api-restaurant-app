var express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Meal-O server API started on : ${port}`);

//var model = require('./api/models/meal-o-models');


var routes = require('./api/routes/meal-o-routes');
routes(app);
