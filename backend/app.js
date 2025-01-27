const express=require("express");
const app=express();
const ErrorHandler=require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit:"50mb"}));
//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env",
});
};

//app.use(ErrrorHandler);
module.exports=app;