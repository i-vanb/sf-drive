"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_withAuth_withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/withAuth/withAuth */ \"./src/withAuth/withAuth.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Profile = function() {\n    _s();\n    var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.auth;\n    });\n    var profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.user;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n    // if(!user.isAuthorized) {}\n    }, [\n        user\n    ]);\n    console.log(profile);\n    if (!user.isAuthorized || !profile.mail || !profile.name) return null;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\pages\\\\profile.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"content-container\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\pages\\\\profile.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"profile__avatar\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\pages\\\\profile.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"data:\".concat(profile.avatar[0].mimetype, \";base64,\").concat(Buffer.from(profile.avatar[0].buffer).toString('base64')),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\pages\\\\profile.js\",\n                            lineNumber: 22,\n                            columnNumber: 25\n                        },\n                        __self: _this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"profile__label\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\pages\\\\profile.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: profile.name\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"profile__exit\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\pages\\\\profile.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Выйти из профиля\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"profile__info\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\pages\\\\profile.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            ]\n        })\n    }));\n};\n_s(Profile, \"AXvEZ/npJ068h5YUyU0cDE9INcE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Profile;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return (0,_src_withAuth_withAuth__WEBPACK_IMPORTED_MODULE_1__.withNoAuth)(Profile);\n};\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUNEOzs7QUFFdEMsR0FBSyxDQUFDSSxPQUFPLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsSUFBSSxHQUFHSix3REFBVyxDQUFDSyxRQUFRLENBQVJBLEtBQUs7UUFBSUEsTUFBTUMsQ0FBTkQsS0FBSyxDQUFDQyxJQUFJOztJQUM1QyxHQUFLLENBQUNDLE9BQU8sR0FBR1Asd0RBQVcsQ0FBQ0ssUUFBUSxDQUFSQSxLQUFLO1FBQUlBLE1BQU1ELENBQU5DLEtBQUssQ0FBQ0QsSUFBSTs7SUFHL0NGLGdEQUFTLENBQUMsUUFDYixHQURpQixDQUFDO0lBQ1gsRUFBNEI7SUFDaEMsQ0FBQyxFQUFFLENBQUNFO1FBQUFBLElBQUk7SUFBQSxDQUFDO0lBRVRJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPO0lBRW5CLEVBQUUsR0FBRUgsSUFBSSxDQUFDTSxZQUFZLEtBQUtILE9BQU8sQ0FBQ0ksSUFBSSxLQUFLSixPQUFPLENBQUNLLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUVwRSxNQUFNLHNFQUNEQyxDQUFPOzs7Ozs7O3dGQUNIQyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFtQjs7Ozs7Ozs7cUZBQzdCRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7bUdBQ3ZCQyxDQUFHO3dCQUFDQyxHQUFHLEVBQUcsQ0FBSyxPQUF1Q0MsTUFBd0QsQ0FBN0ZYLE9BQU8sQ0FBQ1ksTUFBTSxDQUFDLENBQUMsRUFBRUMsUUFBUSxFQUFDLENBQVEsV0FBMkQsT0FBekRGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDZCxPQUFPLENBQUNZLE1BQU0sQ0FBQyxDQUFDLEVBQUVHLE1BQU0sRUFBRUMsUUFBUSxDQUFDLENBQVE7Ozs7Ozs7OztxRkFFckhULENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs4QkFDMUJSLE9BQU8sQ0FBQ0ssSUFBSTs7cUZBRWhCRSxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBZTs7Ozs7Ozs4QkFBQyxDQUUvQjs7cUZBQ0NELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFlOzs7Ozs7Ozs7OztBQU05QyxDQUFDO0dBL0JLWixPQUFPOztRQUNJSCxvREFBVztRQUNSQSxvREFBVzs7O0tBRnpCRyxPQUFPO0FBaUNiLDZCQUFlLHNDQUFRO0lBQUZKLE1BQU0sQ0FBTkEsa0VBQVUsQ0FBQ0ksT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLmpzPzA4ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3aXRoTm9BdXRofSBmcm9tIFwiLi4vc3JjL3dpdGhBdXRoL3dpdGhBdXRoXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gICAgY29uc3QgcHJvZmlsZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIGlmKCF1c2VyLmlzQXV0aG9yaXplZCkge31cclxuICAgIH0sIFt1c2VyXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlKVxyXG5cclxuICAgIGlmKCF1c2VyLmlzQXV0aG9yaXplZCB8fCAhcHJvZmlsZS5tYWlsIHx8ICFwcm9maWxlLm5hbWUpIHJldHVybiBudWxsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX19hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BkYXRhOiR7cHJvZmlsZS5hdmF0YXJbMF0ubWltZXR5cGV9O2Jhc2U2NCwke0J1ZmZlci5mcm9tKHByb2ZpbGUuYXZhdGFyWzBdLmJ1ZmZlcikudG9TdHJpbmcoJ2Jhc2U2NCcpfWB9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX19sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZV9fZXhpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCS0YvQudGC0Lgg0LjQtyDQv9GA0L7RhNC40LvRj1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVfX2luZm9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB3aXRoTm9BdXRoKFByb2ZpbGUpXHJcbiJdLCJuYW1lcyI6WyJ3aXRoTm9BdXRoIiwidXNlU2VsZWN0b3IiLCJSZWFjdCIsInVzZUVmZmVjdCIsIlByb2ZpbGUiLCJ1c2VyIiwic3RhdGUiLCJhdXRoIiwicHJvZmlsZSIsImNvbnNvbGUiLCJsb2ciLCJpc0F1dGhvcml6ZWQiLCJtYWlsIiwibmFtZSIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJCdWZmZXIiLCJhdmF0YXIiLCJtaW1ldHlwZSIsImZyb20iLCJidWZmZXIiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ })

});