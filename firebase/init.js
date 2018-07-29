var admin = require("firebase-admin");
// var serviceAccount = require("./private_key/config.json");
var config = {
	apiKey: "AIzaSyADc2W0Lcwx_T54yxD-zeljzX2vFqCEzn4",
    authDomain: "test-cbf01.firebaseapp.com",
    databaseURL: "https://test-cbf01.firebaseio.com",
    projectId: "test-cbf01",
    storageBucket: "",
    messagingSenderId: "891402759112"
  
}
//initialize firebase app API
try
{
    admin.initializeApp(config);
} 
catch (err) 
{
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) 
  {
    console.error('Firebase initialization error');
  }
}

module.exports = admin;