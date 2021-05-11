const express = require('express'); // searches node_modules for "express"
const app = express(); // is an instance of the above constructor


const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })

    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })
    
app.listen(8000,function(){
    console.log("server is running")  // listening on port 8000, would this change per live hosting???
    });