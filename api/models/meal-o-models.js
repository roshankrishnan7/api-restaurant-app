var admin = require('firebase-admin');

var serviceAccount = require('../../firebase/mealo-ce9b0-firebase-adminsdk-1080s-06fa628839.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount);
  databaseURL: "https://mealo-ce9b0.firebaseio.com/";
});
