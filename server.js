const express = require('express'); // searches node_modules for "express"
const app = express(); // is an instance of the above constructor

app.listen(8000,function(){
    console.log("server is running")
    });