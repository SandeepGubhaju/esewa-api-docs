const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/newuserdb');

var db = mongoose.connection;

db.on("error",()=>console.log("Error in connecting to the database"))
db.once("open",()=>console.log("connected to database"))

app.post("/signup",(req,res)=>{
    var email = req.body.email;
    var request = req.body.request;
    var fName = req.body.fName;
    var mobile = req.body.mobile;
    var address = req.body.address;
    var oName =req.body.oName;
    var oWeb= req.body.oWeb;
    var organizationCatogory=req.body.organizationCatogory;
    var cPan = req.body.cPan;
    var message = req.body.message;

    var data ={
        "email":email,
        "request":request,
        "fName":fName,
        "mobile":mobile,
        "address":address,
        "oName":oName,
        "oWeb":oWeb,
        "organizationCatogory":organizationCatogory,
        "cPan":cPan,
        "message":message
    
    }

    db.collection("user").insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Sucessfully");
    })
    return res.redirect("signup_success.html")

    

})


app.get("/", (req,res)=> {
    res.set({"Allow-access-Allow-origin":"*"});

    return res.redirect("form.html")
});



app.listen(3000, (req,res)=>{
    console.log("server started sucessfully at port 3000")
})


