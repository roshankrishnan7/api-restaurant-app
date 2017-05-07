'use strict';
module.exports = function(app){
  var mealO = require('../controllers/meal-o-controller');

//meal-o routes
app.route('/items')
   .get(mealO.list_all_items);

/*
app.route('/orders')
    .put(mealO.createOrder);

app.route('/tasks/:itemId')
   .get(mealO.displayItem)
   .put(mealO.addItemToCart);
   */
};
