console.log("getUserData");
// import mongoose from "mongoose";
// var express = require("express");
// var http = require("http");
// var fs = require("fs");
// var ejs = require("ejs");
// var url = require("url");
// var path = require("path");
// var app = express();

var getUserData = function(request,response) {
    if (request.url === '/favicon.ico') {
        response.send();
        return "over";
    }
    else {
        console.log('getUserData in function');
        // data1 = "";
        // request.on('data',function(chunk){
        //     data1 += chunk;
        // });
        // request.on('end',function(){
            // if(data1 != ""){

            console.log();
            User.find({},'name username contactNo lastLogin _id',function(err,users){
                if (err) {
                    console.log(err);
                }
                response.send(JSON.stringify(users));
                console.log(users);
                return users;
                // users.forEach(function(element){
                //     console.log(element);
                // });
            });

            
        //     }
        // });
        return "over";
    }
};

module.exports = getUserData;