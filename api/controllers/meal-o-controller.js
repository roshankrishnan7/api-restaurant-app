'use strict';

var model = require('../models/meal-o-models');
var stripe = require("stripe")("ENTER_TEST_SECRET_KEY");


exports.list_all_items = function(req, res) {
  //retrieve all menu items
    res.json(model.getItems());
    console.log(model.getItems());

};

//process stripe payment request from mobile app
exports.process_stripe = function(req, res) {

var token = req.body.source;
var desc = req.body.description;
var amount = parseInt(req.body.amount,10);

//create charge for stripe payment
var charge= stripe.charges.create({
amount: amount,
  currency: "aud",
  description: desc,
  source: token,
}, function(err, charge){
	if (err && err.type === 'StripeCardError') {
            console.log(JSON.stringify(err, null, 2));
	    res.json({"status":"fail"});
        }
        res.json({"status":"success"});
});
};
