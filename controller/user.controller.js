var User = require("../models/user.model.js");
User = new User.User("x","y","z");
//create a new user
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a User
  const user = {
    emailId: req.body.emailId,
    username: req.body.username,
    password: req.body.password 
  };

  // Save user in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the new User."
      });
    else res.send(data);
  });
};

//check whether a user exists with password  
exports.findByEmailIdAndPassword = (req, res) => {
  const emailId = req.body.emailId; 
  const password = req.body.password ;
  User.findByEmailIdAndPassword(emailId , password ,(err,data)=>{
    if(err)
        res.status(500).send({
    message: err.message || "invalid emailId or password "  
    });
    else res.send(data) ; 
  })
};

//check whether a user exists and have incorrect password  
exports.findByEmailId = (req, res) => {
    const emailId = req.params.emailId ; 
  User.findByEmailId(emailId , (err ,data)=>{
    if(err){
        if(err.kind === "not_found"){
            res.status (404) . send({
                message :  `Not Found User with emailId ${emailId}`
            });
        }
        else {
            res.status(500).send({
                message: "Error retrieving User with email Id : "+ emailId 
            })
        }
    }
    else res.send(data) ; 
  } );
};

//update password  ; 
exports.updateByEmailId = (req, res) => {
    const emailId = req.params.emailId ; 
    const newPassword = req.body.password ; 
    User.updateByEmailId(emailId , newPassword , (err , data )=>{
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found User with emailId ${emailId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating user with id " + emailId 
              });
            }
          } else res.send(data);
    });
};
