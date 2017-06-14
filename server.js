var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

//listens on PORT 3000 for requests
const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Meal-O server API started on : ${port}`);


var routes = require('./api/routes/meal-o-routes');
routes(app);
