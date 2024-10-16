const sql = require("./db.js");

// constructor
class User {
    constructor(email , username , password){
      this.email = email ; 
      this.username = username ; 
      this.password = password ;  
    }

    create(newUser , result)  {
      sql.query("INSERT INTO UserAuth (emailId, username , password ) values (?,?,?)" ,
          [newUser.emailId , newUser.username , newUser.password], (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
      
          console.log("created id: ", { id: res.id, ...newUser });
          result(null, { id: res.emailId, ...newUser });
        }) ;
      } 


      findByEmailIdAndPassword (emailId,password ,  result) {
      sql.query(`SELECT * FROM UserAuth WHERE emailId = '${emailId}'
        and password = '${password}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
  }
  findByEmailId  (emailId , result) {
    sql.query(`SELECT * FROM UserAuth WHERE emailId = '${emailId}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
  }

  updateByEmailId (emailId, password , result)  {
    sql.query(
      "UPDATE UserAuth SET password = ? WHERE emailId = ?",
      [ password, emailId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated user : ", { id: emailId, password});
        result(null, { id: emailId, password });
      }
    );
  }
  
  }

exports.User = User ; 

/*
const User = function(user) {
    this.email= user.email ;
    this.username= user.username ;
    this.password= user.password ;
};

  User.create (newUser , result)  =>{
    sql.query("INSERT INTO UserAuth (emailId, username , password ) values ?" ,
        newUser, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("created tutorial: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
      }) ; 
    };
    

User.findByEmailIdAndPassword = (emailId,password ,  result) => {
  sql.query(`SELECT * FROM UserAuth WHERE emailId = ${emailId}
     and password = ${password}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};
User.findByEmailId = (emailId , result) => {
    sql.query(`SELECT * FROM UserAuth WHERE emailId = ${emailId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
  };


  
User.updateByEmailId = (emailId, password , result) => {
    sql.query(
      "UPDATE tutorials SET password = ? WHERE emailId = ?",
      [ password, emailId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated tutorial: ", { id: id, password});
        result(null, { id: id, password });
      }
    );
  };
  */