const express = require("express")
const cookieParser = require("cookie-parser")
const authenticate = require("./authenticate")
const { signIn, logout } = require("./route")

const app = express()
app.use(express.json())
app.use(cookieParser())

app.post("/signin",authenticate, signIn)
app.get("/logout",authenticate, logout)


const PORT = 5000;
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);