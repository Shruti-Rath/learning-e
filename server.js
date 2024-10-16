const express = require("express") ; 
const cors = require("cors") ; 
const app = express() ; 

var corsOptions = {
    origin : "http://127.0.0.1:5500"
};

app.use(cors(corsOptions)) ; 

//pars request of content type - application/json 

app.use(express.json()) ; 

app.use(express.urlencoded({extended:true})) ; 

app.get("/",(req,res)=>{
    res.json({message:"Welcome to E-Learning Backend Server"}); 
})

require("./routes/user.routes.js")(app);

const PORT = 8080 ;
app.listen(PORT ,()=>{
    console.log(`Live on http://localhost:${PORT}`);
})