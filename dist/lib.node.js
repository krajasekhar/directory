/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log(\"hi server\");\n// import mongoose from \"mongoose\";\n// var express = require(\"express\");\n// var http = require(\"http\");\n// var fs = require(\"fs\");\n// var ejs = require(\"ejs\");\n// var url = require(\"url\");\n// var path = require(\"path\");\n// var app = express();\n\n// var server = app.listen(8080, function() {\n// \tconsole.info('Express server started at http://localhost:' + app.get('port'));\n\n// });\n\n// app.use('/assets', url.parse('http://localhost:8080/assets'));\n// app.set('views', path.join('app', 'server', 'views'));\n// app.set('view engine', 'ejs');\n\n// var httpserver = http.createServer(function (request, response) {\n//   if (request.url === '/favicon.ico') {\n//     response.end();\n//   }\n//   else {\n//     var htmlContent = fs.readFileSync(\"./index.html\", 'utf8');\n\n//     var htmlRenderized = ejs.render(htmlContent);\n//     response.writeHead(200, {\n//       'Content-Type': 'text/html'\n// \t});\n// \t// console.log(htmlContent);\n// \tresponse.write(htmlRenderized);\n// \t// response.setHeader('Content-Type', 'text/html');\n//     // response.end(htmlContent);\n//     response.end(\"htmlContent\");\n//   }\n// });\n\n// httpserver.listen(8080);\n// console.log(\"listening to 8080\");\n// var db = 'mongodb://localhost/example';\n// mongoose.connect(db, function (err) {\n\n//     if (err){ \n//         console.log(err);\n//         throw err;}\n\n//     console.log('Successfully connected');\n\n//  });\n\n//  app.get('/', function (req, res) {\n\n//     console.log('hey world');\n//     res.send('hello world');\n// })\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

/******/ });