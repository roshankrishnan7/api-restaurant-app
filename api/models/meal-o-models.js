//var ref = db.ref("/public_resource");

var admin = require('firebase-admin');

var serviceAccount = require('../../firebase/mealo-ce9b0-firebase-adminsdk-1080s-06fa628839.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mealo-ce9b0.firebaseio.com/",
  /*databaseAuthVariableOverride: null /*{
    uid: "my-service-worker"
  }*/
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
  //console.log(snapshot.val());
 itemVal = snapshot.val();
  //module.exports = itemVal;
});

exports.getItems = function() {
  return itemVal;
}

/*
item.orderByChild("price").on("child_added", function(snapshot) {
  console.log(snapshot.key + " was " + snapshot.val().price + "$");
  console.log(snapshot);
});
*/


users.orderByChild("email").on("child_added", function(snapshot) {
  console.log(snapshot.val().email);
});


/*
//get value of child
item.child('test')
   .once('value')
   .then(function(snapshot) {
     console.log(snapshot.key);
   });

*/
