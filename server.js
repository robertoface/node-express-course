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

    app.get('/users/:id',function(req,res){  //basically a GET request on the back-end
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })


    const bodyParser = require('body-parser'); // is a POST request on the back-end 
    app.use(bodyParser.json());
  
    app.post('/login',function(req,res){
        const username=req.body.username;
        const password=req.body.password;
    
        const mockUsername="billyTheKid";
        const mockPassword="superSecret";
    
        if (username===mockUsername && password===mockPassword){  // if-else statement to see that username and password both match
             res.json({
                  success: true,
                  message: 'password and username match!',
                  token: 'encrypted token goes here'
             })
        } else {
             res.json({
                  success: false,
                  message: 'password and username do not match'
             })
        }
   })


    app.listen(8000,function(){
        console.log("server is running")  // listening on port 8000, would this change per live hosting???
    });