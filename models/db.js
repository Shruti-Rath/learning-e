const mysql = require("mysql2") ; 
const dbCofig =  require("../config/db.config.js");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbCofig.HOST , 
    user : dbCofig.USER , 
    password : dbConfig.PASSWORD , 
    database : dbConfig.DB 
});


connection.connect(error => {
    if(error) throw error ; 
    console.log("Connection Successfull to the database . ") ; 
})

module.exports = connection ; 