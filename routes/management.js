const express = require("express")

const api = express.Router();

api.get("/status", function(req,res){
    res.send("service is running")
    console.log("service is running")
})

module.exports = api