const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'source'
});


connection.connect(function(error){
  if(!!error) {
    console.log(error,"www");
  }

  else{
    console.log(('Database Connected'))
  }
  });


module.exports = connection;
