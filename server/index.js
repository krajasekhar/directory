'use strict';
console.log("hi server");
// import mongoose from "mongoose";
// var express = require("express");
// var http = require("http");
// var fs = require("fs");
// var ejs = require("ejs");
// var url = require("url");
// var path = require("path");
// var app = express();

// var server = app.listen(8080, function() {
// 	console.info('Express server started at http://localhost:' + app.get('port'));

// });

// app.use('/assets', url.parse('http://localhost:8080/assets'));
// app.set('views', path.join('app', 'server', 'views'));
// app.set('view engine', 'ejs');
	
// var httpserver = http.createServer(function (request, response) {
//   if (request.url === '/favicon.ico') {
//     response.end();
//   }
//   else {
//     var htmlContent = fs.readFileSync("./index.html", 'utf8');

//     var htmlRenderized = ejs.render(htmlContent);
//     response.writeHead(200, {
//       'Content-Type': 'text/html'
// 	});
// 	// console.log(htmlContent);
// 	response.write(htmlRenderized);
// 	// response.setHeader('Content-Type', 'text/html');
//     // response.end(htmlContent);
//     response.end("htmlContent");
//   }
// });

// httpserver.listen(8080);
// console.log("listening to 8080");
// var db = 'mongodb://localhost/example';
// mongoose.connect(db, function (err) {

//     if (err){ 
//         console.log(err);
//         throw err;}

//     console.log('Successfully connected');

//  });

//  app.get('/', function (req, res) {

//     console.log('hey world');
//     res.send('hello world');
// })