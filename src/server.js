const express=require('express');

const app=express();

app.get("/api",(req,res)=>{
    console.log("Response Sent");
})


app.post("/register",(req,res)=>{
    
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})