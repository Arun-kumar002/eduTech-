const express = require('express');
// const bodyParser = require('body-parser');
const {engine}=require("express-handlebars");
const compilerRoute = require("./routes/compilerRoute")

const app = express();
// app.use(bodyParser.json())
app.engine("handlebars",engine())
app.set("view engine","handlebars")
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+"/public"))
app.use("/compiler",compilerRoute)

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(5500,err=>{
    console.log("running on port 5500");
});