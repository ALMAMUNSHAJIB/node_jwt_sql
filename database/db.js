const mysql = require('mysql');


const connection = mysql.createConnection({
    
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.DB_DATABASE,
    //port: 3306
    
    host:'localhost',
    user:'mamun',
    password:'add',
    database: 'node_jwt_auth',
    
  });

  //console.log(process.env);

connection.connect( (error) => {
    //if(error) throw error;
    if(error){
        console.log(process.env);
        return;
    }
    console.log('Sucess connected');
    
});

module.exports = connection;
//exports.connection = {};