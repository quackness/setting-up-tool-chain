webpackHotUpdate_N_E("pages/ImageChangeOnScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/karolinadubaj/lighthouse/personal_projects/sfh/React/clip2-Setting-Up-Toolchain/src/ImageToggleOnScroll.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {\n  _s();\n\n  var primaryImg = _ref.primaryImg,\n      secondaryImg = _ref.secondaryImg;\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  var isInView = function isInView() {\n    var rect = imageRef.current.getBoundingClientRect();\n    return rect.top >= 0 && rect.bottom <= window.innerHeight;\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      inView = _useState2[0],\n      setInView = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // setInView(true);\n    setInView(isInView());\n    window.addEventListener(\"scroll\", scrollHandler);\n    return function () {\n      window.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, []);\n\n  var scrollHandler = function scrollHandler() {\n    setInView(isInView());\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: inView ? secondaryImg : primaryImg,\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageToggleOnScroll, \"ZXGxYM2/GoMqCdxtGlrQhtEYGrw=\");\n\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanM/OTY2MiJdLCJuYW1lcyI6WyJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpblZpZXciLCJzZXRJblZpZXciLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxVQUErQixRQUEvQkEsVUFBK0I7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQzVELE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCOztBQUQ0RCxrQkFFMUJDLHNEQUFRLENBQUMsSUFBRCxDQUZrQjtBQUFBLE1BRXJEQyxTQUZxRDtBQUFBLE1BRTFDQyxZQUYwQzs7QUFJNUQsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ08sT0FBVCxDQUFpQkMscUJBQWpCLEVBQWI7QUFDQSxXQUFPRixJQUFJLENBQUNHLEdBQUwsSUFBWSxDQUFaLElBQWlCSCxJQUFJLENBQUNJLE1BQUwsSUFBZUMsTUFBTSxDQUFDQyxXQUE5QztBQUNELEdBSEQ7O0FBSjRELG1CQVNoQ1Ysc0RBQVEsQ0FBQyxLQUFELENBVHdCO0FBQUEsTUFTckRXLE1BVHFEO0FBQUEsTUFTN0NDLFNBVDZDOztBQVc1REMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQUQsYUFBUyxDQUFDVCxRQUFRLEVBQVQsQ0FBVDtBQUNBTSxVQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxhQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYTixZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxhQUFyQztBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQkgsYUFBUyxDQUFDVCxRQUFRLEVBQVQsQ0FBVDtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFDRSxPQUFHLEVBQUVRLE1BQU0sR0FBR2QsWUFBSCxHQUFrQkQsVUFEL0I7QUFFRSxPQUFHLEVBQUMsRUFGTjtBQUdFLE9BQUcsRUFBRUU7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQTlCRDs7R0FBTUgsbUI7O0tBQUFBLG1CO0FBZ0NTQSxrRkFBZiIsImZpbGUiOiIuL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH07XG5cbiAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNldEluVmlldyh0cnVlKTtcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBzcmM9e2luVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWd9XG4gICAgICBhbHQ9XCJcIlxuICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n");

/***/ })

})