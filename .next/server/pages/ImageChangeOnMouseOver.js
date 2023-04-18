module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnMouseOver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ \"./src/ImageToggleOnMouseOver.js\");\n\nvar _jsxFileName = \"/Users/karolinadubaj/lighthouse/personal_projects/sfh/React/clip2-Setting-Up-Toolchain/pages/ImageChangeOnMouseOver.js\";\n\n\n\nconst ImageChangeOnMouseOver = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      primaryImg: \"/static/speakers/bw/Speaker-187.jpg\",\n      secondaryImg: \"/static/speakers/Speaker-187.jpg\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), \"\\xA0\\xA0\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      primaryImg: \"static/speakers/bw/Speaker-1124.jpg\",\n      secondaryImg: \"static/speakers/Speaker-1124.jpg\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzPzFmNzMiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLHNCQUFzQixHQUFHLE1BQU07QUFDbkMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxtRUFBRDtBQUNFLGdCQUFVLEVBQUMscUNBRGI7QUFFRSxrQkFBWSxFQUFDLGtDQUZmO0FBR0UsU0FBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERiwrQkFNRSxxRUFBQyxtRUFBRDtBQUNFLGdCQUFVLEVBQUMscUNBRGI7QUFFRSxrQkFBWSxFQUFDLGtDQUZmO0FBR0UsU0FBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELENBZkQ7O0FBaUJlQSxxRkFBZiIsImZpbGUiOiIuL3BhZ2VzL0ltYWdlQ2hhbmdlT25Nb3VzZU92ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgZnJvbSAnLi4vc3JjL0ltYWdlVG9nZ2xlT25Nb3VzZU92ZXInO1xuXG5jb25zdCBJbWFnZUNoYW5nZU9uTW91c2VPdmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2VUb2dnbGVPbk1vdXNlT3ZlclxuICAgICAgICBwcmltYXJ5SW1nPVwiL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLTE4Ny5qcGdcIlxuICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItMTg3LmpwZ1wiXG4gICAgICAgIGFsdD1cIlwiIC8+XG4gICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgIDxJbWFnZVRvZ2dsZU9uTW91c2VPdmVyXG4gICAgICAgIHByaW1hcnlJbWc9XCJzdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0xMTI0LmpwZ1wiXG4gICAgICAgIHNlY29uZGFyeUltZz1cInN0YXRpYy9zcGVha2Vycy9TcGVha2VyLTExMjQuanBnXCJcbiAgICAgICAgYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnMouseOver.js\n");

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/karolinadubaj/lighthouse/personal_projects/sfh/React/clip2-Setting-Up-Toolchain/src/ImageToggleOnMouseOver.js\";\n\n\nconst ImageToggleOnMouseOver = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    onMouseOver: () => {\n      imageRef.current.src = secondaryImg;\n    },\n    onMouseOut: () => {\n      imageRef.current.src = primaryImg;\n    },\n    src: primaryImg,\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3Zlci5qcz82Zjc0Il0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlT25Nb3VzZU92ZXIiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJjdXJyZW50Iiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsc0JBQXNCLEdBQUcsQ0FBQztBQUFFQyxZQUFGO0FBQWNDO0FBQWQsQ0FBRCxLQUFrQztBQUMvRCxRQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLHNCQUNFO0FBQ0UsZUFBVyxFQUFFLE1BQU07QUFDakJELGNBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsR0FBakIsR0FBdUJKLFlBQXZCO0FBQ0QsS0FISDtBQUlFLGNBQVUsRUFBRSxNQUFNO0FBQ2hCQyxjQUFRLENBQUNFLE9BQVQsQ0FBaUJDLEdBQWpCLEdBQXVCTCxVQUF2QjtBQUNELEtBTkg7QUFPRSxPQUFHLEVBQUVBLFVBUFA7QUFRRSxPQUFHLEVBQUMsRUFSTjtBQVNFLE9BQUcsRUFBRUU7QUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFhRCxDQWZEOztBQWlCZUgscUZBQWYiLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3Zlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICBpbWFnZVJlZi5jdXJyZW50LnNyYyA9IHNlY29uZGFyeUltZztcbiAgICAgIH19XG4gICAgICBvbk1vdXNlT3V0PXsoKSA9PiB7XG4gICAgICAgIGltYWdlUmVmLmN1cnJlbnQuc3JjID0gcHJpbWFyeUltZztcbiAgICAgIH19XG4gICAgICBzcmM9e3ByaW1hcnlJbWd9XG4gICAgICBhbHQ9XCJcIlxuICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageToggleOnMouseOver.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });