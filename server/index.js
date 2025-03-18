const express= require("express");

const app= express();
const PORT =5050;

app.get("/",(req,res)=>{
    res.status(200).json({message:"Hello from index node"})
})


app.listen(PORT,function(){
    console.log("Server Running on port",PORT);
})