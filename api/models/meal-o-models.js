
var admin = require('firebase-admin');

var serviceAccount = require('../../firebase/mealo-ce9b0-firebase-adminsdk-1080s-06fa628839.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mealo-ce9b0.firebaseio.com/",

});

var db = admin.database();
var ref = db.ref();
var item = ref.child('Item');
var allergent = ref.child('Allergent');
var users = ref.child('User');
var category = ref.child('Category');
var orders = ref.child('Orders');
var itemVal;


allergent.on("child_added", function(snapshot) {
  console.log( snapshot.key);
});

category.on("child_added", function(snapshot) {
  console.log( snapshot.key);
});

orders.on("child_added", function(snapshot) {
  console.log( snapshot.val().Item);
});


item.on('value', function(snapshot){
  console.log(snapshot.key);

  exports.getItems = function() {
    var o = {};
    var key = snapshot.key;
    o[key] = [];
    o[key].push(snapshot.val());

  return o;
  }

});

function getItem(key){
//exports.getItem = function(var key) {
console.log("getItem" + key);
item.child(key)
.once('value')
.then(function(snapshot) {
  //return(snapshot.key);
  console.log("snapshot : "+snapshot.val().price);
  return (snapshot.key);
});

}
module.exports.getItem = getItem;

users.orderByChild("email").on("child_added", function(snapshot) {
  console.log(snapshot.val().email);
});
