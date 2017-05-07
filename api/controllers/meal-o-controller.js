'use strict';

var model = require('../models/meal-o-models');

exports.list_all_items = function(req, res) {
  //Task.find({}, function(err, task) {
  //  if (err)
    //  res.send(err);
    res.json(model.getItems());
    //console.log(model.getItems());
  //});
};
