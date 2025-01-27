const express=require("express");
const app=express();
const ErrorHandler=require("./middleware/error");

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env",
});
};

//app.use(ErrrorHandler);
module.exports=app;