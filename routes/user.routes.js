module.exports = app => {
    const users = require("../controller/user.controller.js") ; 

    var router = require("express").Router() ; 
    
    //create a new user 
    router.post("/signup",users.create) ; 
    
    //check whether a user exists with password  
    router.post("/login",users.findByEmailIdAndPassword) ; 
    
    //check whether a user exists and have incorrect password  
    router.get("/:emailId",users.findByEmailId)  ;
    
    //update password  ; 
    router.put("/:emailId" , users.updateByEmailId) ; 

    app.use("/api/users",router) ; 

}