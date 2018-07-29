var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'newrootpassword',
  database : 'herbeat'
});
connection.connect(function(err){
    if(err){
        //log the error
        console.log(err);
    }
    else{
        console.log('Connected to MySQL');
    }
});

module.exports = connection;
