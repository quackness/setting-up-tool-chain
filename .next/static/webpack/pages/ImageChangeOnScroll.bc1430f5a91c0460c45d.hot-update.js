webpackHotUpdate_N_E("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\n\nvar _jsxFileName = \"/Users/karolinadubaj/lighthouse/personal_projects/sfh/React/clip2-Setting-Up-Toolchain/pages/ImageChangeOnScroll.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar ImageChangeOnScroll = function ImageChangeOnScroll() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentSpeakerId = _useState[0],\n      setCurrentSpeakerId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      mouseEventCnt = _useState2[0],\n      setMouseEventCnt = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.document.title = \"Speaker Id: \".concat(currentSpeakerId);\n    console.log(\"useEff: \".concat(currentSpeakerId));\n  }, [currentSpeakerId]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [\"mouseEventCnt: $\", mouseEventCnt]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), [1124, 187, 823, 1269, 1530].map(function (speakerId) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseOver: function onMouseOver() {\n          setCurrentSpeakerId(speakerId);\n          setMouseEventCnt(mouseEventCnt + 1);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          primaryImg: \"/static/speakers/bw/Speaker-\".concat(speakerId, \".jpg\"),\n          secondaryImg: \"/static/speakers/Speaker-\".concat(speakerId, \".jpg\"),\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this)\n      }, speakerId, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageChangeOnScroll, \"XDXVveCh0mFDHA6S/A4AclRGIAU=\");\n\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcz9kODY5Il0sIm5hbWVzIjpbIkltYWdlQ2hhbmdlT25TY3JvbGwiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwibW91c2VFdmVudENudCIsInNldE1vdXNlRXZlbnRDbnQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNwZWFrZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFBQTs7QUFBQSxrQkFFZ0JDLHNEQUFRLENBQUMsQ0FBRCxDQUZ4QjtBQUFBLE1BRXpCQyxnQkFGeUI7QUFBQSxNQUVQQyxtQkFGTzs7QUFBQSxtQkFHVUYsc0RBQVEsQ0FBQyxDQUFELENBSGxCO0FBQUEsTUFHekJHLGFBSHlCO0FBQUEsTUFHVkMsZ0JBSFU7O0FBTWhDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxLQUFoQix5QkFBdUNQLGdCQUF2QztBQUNBUSxXQUFPLENBQUNDLEdBQVIsbUJBQXVCVCxnQkFBdkI7QUFDRCxHQUhRLEVBR04sQ0FBQ0EsZ0JBQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLHFDQUF1QkUsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QlEsR0FBN0IsQ0FBaUMsVUFBQ0MsU0FBRCxFQUFlO0FBQy9DLDBCQUNFO0FBQ0UsbUJBQVcsRUFBRSx1QkFBTTtBQUNqQlYsNkJBQW1CLENBQUNVLFNBQUQsQ0FBbkI7QUFDQVIsMEJBQWdCLENBQUNELGFBQWEsR0FBRyxDQUFqQixDQUFoQjtBQUVELFNBTEg7QUFBQSwrQkFNRSxxRUFBQyxnRUFBRDtBQUNFLG9CQUFVLHdDQUFpQ1MsU0FBakMsU0FEWjtBQUVFLHNCQUFZLHFDQUE4QkEsU0FBOUIsU0FGZDtBQUdFLGFBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixTQUFVQSxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELEtBZkEsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQWhDRDs7R0FBTWIsbUI7O0tBQUFBLG1CO0FBa0NTQSxrRkFBZiIsImZpbGUiOiIuL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcblxuY29uc3QgSW1hZ2VDaGFuZ2VPblNjcm9sbCA9ICgpID0+IHtcblxuICBjb25zdCBbY3VycmVudFNwZWFrZXJJZCwgc2V0Q3VycmVudFNwZWFrZXJJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21vdXNlRXZlbnRDbnQsIHNldE1vdXNlRXZlbnRDbnRdID0gdXNlU3RhdGUoMCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IGBTcGVha2VyIElkOiAke2N1cnJlbnRTcGVha2VySWR9YDtcbiAgICBjb25zb2xlLmxvZyhgdXNlRWZmOiAke2N1cnJlbnRTcGVha2VySWR9YCk7XG4gIH0sIFtjdXJyZW50U3BlYWtlcklkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+bW91c2VFdmVudENudDogJHttb3VzZUV2ZW50Q250fTwvc3Bhbj5cbiAgICAgIHtbMTEyNCwgMTg3LCA4MjMsIDEyNjksIDE1MzBdLm1hcCgoc3BlYWtlcklkKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3NwZWFrZXJJZH1cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEN1cnJlbnRTcGVha2VySWQoc3BlYWtlcklkKTtcbiAgICAgICAgICAgICAgc2V0TW91c2VFdmVudENudChtb3VzZUV2ZW50Q250ICsgMSk7XG5cbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGxcbiAgICAgICAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPblNjcm9sbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ })

})