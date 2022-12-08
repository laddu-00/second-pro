const exp = require("constants");
const express=require("express");
const app=express();
app.set("view engine","ejs");
app.use(express.static("views"));
app.listen(3000,function(){
    console.log("started");
});
app.get("/",function(req,res){
    res.render("list1");
})
