const path =require('path');
const querystring = require('querystring');
const http = require('http');

var qs,email,password;
http.createServer((req,res)=>{
    var data='';
    req.on('data',function(chunk){
        data+=chunk;
    })
    req.on('end',function(){
        qs=querystring.parse(data);
        email=qs['email'];
        password=qs['password'];
        res.write("Hello "+email+", your email id "+password+" has been registered successfully");
				res.end(); 

    })
}).listen(7777);