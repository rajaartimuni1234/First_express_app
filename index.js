//bring
console.log("first")
const express=require('express')

//assign
const app=express()

const PORT=4000

//router
app.get('/',(req,res)=>{
    res.status(200).send("<h2>hellow world</h2>")
})

app.get("/api/v1/instagram", (req,res)=>{
    const instaSocial={
        username:"rajaartimuni1234",
        followers:66,
        date:Date.now(),
    };

    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook", (req,res)=>{
    const fackbookSocial={
        username:"rajaartimuni1234pages",
        followers:66,
        date:Date.now(),
    };
    res.status(200).json(fackbookSocial)
})

app.get("/api/v1/linkdin", (req,res)=>{
    const linkdinSocial={
        username:"rajaartimuni",
        followers:66,
        date:Date.now(),
    };
    res.status(200).json(linkdinSocial)
})

app.listen(PORT, ()=>{
    console.log("server Running")
      })