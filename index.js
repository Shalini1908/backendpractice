const express = require("express")
const {connection} = require("./db")
require("dotenv").config()
const {userRouter} = require("./routes/Users.routes")
const { authenticate } = require("./middleware/authenticate.middleware")
const {criticalRouter} = require("./routes/Critical.routes")
const {lowRouter} = require("./routes/Low.routes")
const {majorRouter} = require("./routes/Major.routes")
const {mediaRouter} = require("./routes/Media.routes")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors());


app.get("/",(req,res)=>{
 res.send("Hello")

})


app.use("/users",userRouter)
app.use(authenticate) 
app.use("/low",lowRouter)  
app.use("/major",majorRouter)  
app.use("/media",mediaRouter)  
app.use("/critical",criticalRouter)     

app.listen(process.env.port,async()=>{

try{
await connection
console.log("Connected to db")

}
catch(err){
console.log(err)

}
console.log("Server is running")

})

