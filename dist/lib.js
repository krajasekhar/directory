/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".lib.js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/styles/bootswatch.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/bootswatch.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://bootswatch.com/4/lumen/bootstrap.min.css);\", \"\"]);\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/bootswatch.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: signupUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signupUser\", function() { return signupUser; });\n// import User from \"../DBModule/db.js\";\n\nconst signupUser = obj => {\n    // console.log(\"action signupUser\"+obj.name);\n    return {\n        type: 'SIGNUP',\n        payload: {\n            obj: obj\n        }\n        // var db = 'mongodb://localhost/example';\n        // mongoose.connect(db);\n        // var connection = mongoose.createConnection(db);\n\n        // var newUser = new User({\n        //     name: obj.name,\n        //     username: obj.username,\n        //     password: obj.password,\n        //     contactNo: obj.contactno\n        // });\n        // newUser.save(function (err) {\n        //     if (err) {\n        //         console.log(err);\n        //         throw err;\n        //     }\n        // });\n    };\n};\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/containers/home.js":
/*!********************************!*\
  !*** ./src/containers/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_bootswatch_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/bootswatch.css */ \"./src/styles/bootswatch.css\");\n/* harmony import */ var _styles_bootswatch_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_bootswatch_css__WEBPACK_IMPORTED_MODULE_2__);\n\n// import axios from 'axios';\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\tuserList() {\n\t\treturn this.props.users.map(user => {\n\t\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'tr',\n\t\t\t\t{ key: user._id },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tuser.name\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tuser.username\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tuser.contactNo\n\t\t\t\t)\n\t\t\t);\n\t\t});\n\t}\n\trender() {\n\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'table',\n\t\t\t{ className: 'table table-hover' },\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'thead',\n\t\t\t\tnull,\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'tr',\n\t\t\t\t\tnull,\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'th',\n\t\t\t\t\t\t{ scope: 'col' },\n\t\t\t\t\t\t'Name'\n\t\t\t\t\t),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'th',\n\t\t\t\t\t\t{ scope: 'col' },\n\t\t\t\t\t\t'Username'\n\t\t\t\t\t),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'th',\n\t\t\t\t\t\t{ scope: 'col' },\n\t\t\t\t\t\t'Contact No'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'tbody',\n\t\t\t\tnull,\n\t\t\t\tthis.userList()\n\t\t\t)\n\t\t);\n\t}\n}\n\nvar mapStateToProps = state => {\n\treturn {\n\t\tusers: state.users\n\t};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Home));\n\n//# sourceURL=webpack:///./src/containers/home.js?");

/***/ }),

/***/ "./src/containers/signup.js":
/*!**********************************!*\
  !*** ./src/containers/signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.es6.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/lib/index.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n/* harmony import */ var _styles_bootswatch_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/bootswatch.css */ \"./src/styles/bootswatch.css\");\n/* harmony import */ var _styles_bootswatch_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_bootswatch_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst InnerForm = props => {\n\tconst { values, errors, touched, dirty, handleSubmit,\n\t\tisSubmitting, handleChange, handleBlur, handleReset } = props;\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t'div',\n\t\tnull,\n\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'h1',\n\t\t\tnull,\n\t\t\t'Signup'\n\t\t),\n\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'form',\n\t\t\t{ onSubmit: handleSubmit, className: 'container form-group d-block' },\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'form-group row col-sm-6 col-xs-6' },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ htmlFor: 'name', className: 'control-label' },\n\t\t\t\t\t'Name'\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text',\n\t\t\t\t\tid: 'name',\n\t\t\t\t\tvalue: values.name,\n\t\t\t\t\tonChange: handleChange,\n\t\t\t\t\tonBlur: handleBlur,\n\t\t\t\t\tclassName: errors.name && touched.name ? \"form-control is-invalid\" : \"form-control\"\n\t\t\t\t}),\n\t\t\t\terrors.name && touched.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'invalid-feedback' },\n\t\t\t\t\terrors.name\n\t\t\t\t)\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'form-group row col-sm-6 col-xs-6' },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ htmlFor: 'username', className: 'control-label' },\n\t\t\t\t\t'Username'\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text',\n\t\t\t\t\tid: 'username',\n\t\t\t\t\tvalue: values.username,\n\t\t\t\t\tonChange: handleChange,\n\t\t\t\t\tonBlur: handleBlur,\n\t\t\t\t\tclassName: errors.username && touched.username ? \"form-control is-invalid\" : \"form-control\"\n\t\t\t\t}),\n\t\t\t\terrors.username && touched.username && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'input-feedback' },\n\t\t\t\t\terrors.username\n\t\t\t\t)\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'form-group row col-sm-6 col-xs-6' },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ htmlFor: 'password', className: 'control-label' },\n\t\t\t\t\t'Password'\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'password',\n\t\t\t\t\tid: 'password',\n\t\t\t\t\tvalue: values.password,\n\t\t\t\t\tonChange: handleChange,\n\t\t\t\t\tonBlur: handleBlur,\n\t\t\t\t\tclassName: errors.password && touched.password ? \"form-control is-invalid\" : \"form-control\"\n\t\t\t\t}),\n\t\t\t\terrors.password && touched.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'input-feedback' },\n\t\t\t\t\terrors.password\n\t\t\t\t)\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'form-group row col-sm-6 col-xs-6' },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ htmlFor: 'contactno', className: 'control-label' },\n\t\t\t\t\t'Contact No'\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text',\n\t\t\t\t\tid: 'contactno',\n\t\t\t\t\tvalue: values.contactno,\n\t\t\t\t\tonChange: handleChange,\n\t\t\t\t\tonBlur: handleBlur,\n\t\t\t\t\tclassName: errors.contactno && touched.contactno ? \"form-control is-invalid\" : \"form-control\"\n\t\t\t\t}),\n\t\t\t\terrors.contactno && touched.contactno && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'input-feedback' },\n\t\t\t\t\terrors.contactno\n\t\t\t\t)\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'button',\n\t\t\t\t{ type: 'button', className: 'btn btn-warning',\n\t\t\t\t\tonClick: handleReset,\n\t\t\t\t\tdisabled: !dirty || isSubmitting\n\t\t\t\t},\n\t\t\t\t'Reset'\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'button',\n\t\t\t\t{ type: 'submit',\n\t\t\t\t\tclassName: 'btn btn-primary',\n\t\t\t\t\tdisabled: isSubmitting\n\t\t\t\t},\n\t\t\t\t'Submit'\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n\t\t\tJSON.stringify(props)\n\t\t)\n\t);\n};\n\nconst MyForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__[\"withFormik\"])({\n\tmapPropsToValues: () => ({\n\t\tname: \"\",\n\t\tusername: \"\",\n\t\tpassword: \"\",\n\t\tcontactno: \"\"\n\t}),\n\tvalidationSchema: yup__WEBPACK_IMPORTED_MODULE_2___default.a.object().shape({\n\t\tname: yup__WEBPACK_IMPORTED_MODULE_2___default.a.string().matches(/^(?!.*[^A-Za-z0-9\\s]+)/, \"Invalid Name\").required(\"Name is required\"),\n\t\tusername: yup__WEBPACK_IMPORTED_MODULE_2___default.a.string().matches(/^(?!.*[^A-Za-z0-9]+)/, \"Invalid Username\").required(\"Username is required\"),\n\t\tpassword: yup__WEBPACK_IMPORTED_MODULE_2___default.a.string().min(4, \"Password should contain minimum 4 characters\").matches(/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)/, \"Password must contain atleast 1 uppercase, 1 lowercase, 1 number\").required(\"Password is required\"),\n\t\tcontactno: yup__WEBPACK_IMPORTED_MODULE_2___default.a.string().matches(/^(?!.*[^0-9]+)/, \"Invalid Contact number\").required(\"Contact number is required\")\n\n\t}),\n\thandleSubmit: (values, { setSubmitting }) => {\n\t\tsetSubmitting(false);\n\t\tObject(_actions_index__WEBPACK_IMPORTED_MODULE_4__[\"signupUser\"])(values);\n\t\taxios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"http://localhost:8080/signup\", values);\n\t\t// axios.get(\"http://localhost:8080/signup\");\n\t\t// axios.post(\"http://localhost:5000/signup\")\n\t\t//   .then(function(response){\n\t\t//     alert(\"response\");\n\t\t//   })\n\t\t//   .catch(function (error) {\n\t\t//     alert(error);\n\t\t//   });\n\t},\n\tdisplayName: \"Signup Form\"\n})(InnerForm);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyForm);\n\n//# sourceURL=webpack:///./src/containers/signup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _containers_signup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/signup.js */ \"./src/containers/signup.js\");\n/* harmony import */ var _containers_home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/home.js */ \"./src/containers/home.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\n\n\n\n\n\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\nconsole.log(\"hii\");\nObject(react_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\n    react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n    { store: store },\n    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_home_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducer_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer-users */ \"./src/reducers/reducer-users.js\");\n\n\n\nconst allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    users: _reducer_users__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (allReducers);\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/reducer-users.js":
/*!***************************************!*\
  !*** ./src/reducers/reducer-users.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (state = null, action) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/getUserData\", function (response) {\n        console.log(response);\n    });\n    // return [\n    //     {\n    //         _id: '11104017',\n    //         name: 'RajaSekhar',\n    //         username: 'raj',\n    //         contactNo: '9493349437'\n    //     },\n    //     {\n    //         _id: '305407',\n    //         name: 'Bala',\n    //         username: 'balu',\n    //         contactNo: '9959471732'\n    //     }\n    // ];\n});\n\n//# sourceURL=webpack:///./src/reducers/reducer-users.js?");

/***/ }),

/***/ "./src/styles/bootswatch.css":
/*!***********************************!*\
  !*** ./src/styles/bootswatch.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./bootswatch.css */ \"./node_modules/css-loader/index.js!./src/styles/bootswatch.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/bootswatch.css?");

/***/ })

/******/ });