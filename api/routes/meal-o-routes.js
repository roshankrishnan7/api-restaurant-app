'use strict';
module.exports = function(app){
  var mealO = require('../controllers/meal-o-controller');

//retrice menu list
app.route('/items')
   .get(mealO.list_all_items);

//process payment
app.route('/stripe')
   .post(mealO.process_payment);

//retireve specific menu item
app.route('/items/:itemId')
    .get(mealO.displayItem);


};
