"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Link */ \"./src/utils/Link.js\");\n/* harmony import */ var _img_Logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/Logo.svg */ \"./src/img/Logo.svg\");\n/* harmony import */ var _img_burger_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/burger-menu.svg */ \"./src/img/burger-menu.svg\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MobileMenu */ \"./src/components/MobileMenu.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_action_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/action/auth */ \"./src/redux/action/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\n\n// import {Link} from \"react-router-dom\";\n// import Link from \"next/link\";\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Header = function(props) {\n    _s();\n    var showSignHandler = props.showSignHandler;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isMobileMenuShow = ref[0], setIsMobileMenuShow = ref[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    var isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.auth.isAuthorized;\n    });\n    var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.user;\n    });\n    var signOutHandler = function() {\n        dispatch((0,_redux_action_auth__WEBPACK_IMPORTED_MODULE_8__.logout)());\n    };\n    var goToProfile = function() {\n        router.push('/profile');\n    };\n    console.log(user);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"header\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                className: \"header__logo\",\n                to: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _img_Logo_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"logo\",\n                    width: \"115px\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                        lineNumber: 34,\n                        columnNumber: 51\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {\n                className: \"header__nav is-desktop\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: isAuth ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            className: \"header__nav__link is-animated\",\n                            to: \"/bookings\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Бронирования\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            className: \"header__nav__link is-animated\",\n                            to: \"/cars\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Мои автомобили\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            className: \"header__nav__link is-animated\",\n                            to: \"/messages\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Сообщения\"\n                        })\n                    ]\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            className: \"header__nav__link is-animated\",\n                            to: \"/about\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"О Нас\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            className: \"header__nav__link is-animated\",\n                            to: \"/\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Условия\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            className: \"header__nav__link is-animated\",\n                            to: \"/faq\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Частые вопросы\"\n                        })\n                    ]\n                })\n            }),\n            isAuth && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"avatar-wrapper\",\n                onClick: goToProfile,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                    lineNumber: 52,\n                    columnNumber: 24\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"user-name\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                            lineNumber: 52,\n                            columnNumber: 78\n                        },\n                        __self: _this\n                    }),\n                    user.avatar && !!user.avatar.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"data:\".concat(user.avatar[0].mimetype, \";base64,\").concat(Buffer.from(user.avatar[0].buffer).toString('base64')),\n                        className: \"user-avatar\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                            lineNumber: 54,\n                            columnNumber: 19\n                        },\n                        __self: _this\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"avatar-wrapper\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                            lineNumber: 55,\n                            columnNumber: 19\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: \"no-avatar\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                                lineNumber: 55,\n                                columnNumber: 51\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            isAuth ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: signOutHandler,\n                className: \"header__authBtn is-animated is-desktop\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                    lineNumber: 64,\n                    columnNumber: 19\n                },\n                __self: _this,\n                children: \"Выйти\"\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: function() {\n                    return showSignHandler(true);\n                },\n                className: \"header__authBtn is-animated is-desktop\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                    lineNumber: 66,\n                    columnNumber: 19\n                },\n                __self: _this,\n                children: \"Войти\"\n            }),\n            !isMobileMenuShow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                id: \"burger-menu\",\n                className: \"header__menu-icon is-mobile is-active\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    className: \"btn-opacity\",\n                    onClick: function() {\n                        return setIsMobileMenuShow(true);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _img_burger_menu_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"logo\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        },\n                        __self: _this\n                    })\n                })\n            }),\n            isMobileMenuShow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MobileMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                showSignHandler: showSignHandler,\n                closeHandler: function() {\n                    return setIsMobileMenuShow(false);\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Documents\\\\projects\\\\skillfactory\\\\sf-drive\\\\src\\\\components\\\\Header\\\\Header.js\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Header, \"rPC7vG+UrBdNTPXTgt5QiwaBOns=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEJHLE1BQU07QUFvRVosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzPzk1MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi8uLi91dGlscy9MaW5rJ1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1nL0xvZ28uc3ZnXCI7XHJcbmltcG9ydCBidXJnZXJNZW51SWNvbiBmcm9tIFwiLi4vLi4vaW1nL2J1cmdlci1tZW51LnN2Z1wiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi4vTW9iaWxlTWVudVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9nb3V0fSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uL2F1dGhcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHtzaG93U2lnbkhhbmRsZXJ9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbaXNNb2JpbGVNZW51U2hvdywgc2V0SXNNb2JpbGVNZW51U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IGlzQXV0aCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGguaXNBdXRob3JpemVkKTtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxyXG5cclxuICAgIGNvbnN0IHNpZ25PdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnb1RvUHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codXNlcilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiIHRvPVwiL1wiPjxJbWFnZSBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiB3aWR0aD1cIjExNXB4XCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdiBpcy1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgIHtpc0F1dGhcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZfX2xpbmsgaXMtYW5pbWF0ZWRcIiB0bz1cIi9ib29raW5nc1wiPtCR0YDQvtC90LjRgNC+0LLQsNC90LjRjzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX25hdl9fbGluayBpcy1hbmltYXRlZFwiIHRvPVwiL2NhcnNcIj7QnNC+0Lgg0LDQstGC0L7QvNC+0LHQuNC70Lg8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZfX2xpbmsgaXMtYW5pbWF0ZWRcIiB0bz1cIi9tZXNzYWdlc1wiPtCh0L7QvtCx0YnQtdC90LjRjzwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX25hdl9fbGluayBpcy1hbmltYXRlZFwiIHRvPVwiL2Fib3V0XCI+0J4g0J3QsNGBPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2X19saW5rIGlzLWFuaW1hdGVkXCIgdG89XCIvXCI+0KPRgdC70L7QstC40Y88L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZfX2xpbmsgaXMtYW5pbWF0ZWRcIiB0bz1cIi9mYXFcIj7Qp9Cw0YHRgtGL0LUg0LLQvtC/0YDQvtGB0Ys8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgey8qPGltZyBzcmM9e2BkYXRhOiR7cGhvdG8ubWltZXR5cGV9O2Jhc2U2NCwke0J1ZmZlci5mcm9tKHBob3RvLmJ1ZmZlcikudG9TdHJpbmcoJ2Jhc2U2NCcpfWB9IC8+Ki99XHJcbiAgICAgICAgICAgIHtpc0F1dGggJiYgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItd3JhcHBlclwiIG9uQ2xpY2s9e2dvVG9Qcm9maWxlfT48c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5hdmF0YXIgJiYgISF1c2VyLmF2YXRhci5sZW5ndGhcclxuICAgICAgICAgICAgICAgID8gPEltYWdlIHNyYz17YGRhdGE6JHt1c2VyLmF2YXRhclswXS5taW1ldHlwZX07YmFzZTY0LCR7QnVmZmVyLmZyb20odXNlci5hdmF0YXJbMF0uYnVmZmVyKS50b1N0cmluZygnYmFzZTY0Jyl9YH0gY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci13cmFwcGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibm8tYXZhdGFyXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICB7Lyp7aXNBdXRoICYmIHVzZXIuYXZhdGFyICYmICEhdXNlci5hdmF0YXIubGVuZ3RoKi99XHJcbiAgICAgICAgICAgIHsvKiAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLXdyYXBwZXJcIj48SW1hZ2Ugc3JjPXtgZGF0YToke3VzZXIuYXZhdGFyWzBdLm1pbWV0eXBlfTtiYXNlNjQsJHtCdWZmZXIuZnJvbSh1c2VyLmF2YXRhclswXS5idWZmZXIpLnRvU3RyaW5nKCdiYXNlNjQnKX1gfSBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiIC8+PC9kaXY+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICA6IDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLXdyYXBwZXJcIj48c3BhbiBjbGFzc05hbWU9XCJuby1hdmF0YXJcIi8+PC9kaXY+fSovfVxyXG5cclxuICAgICAgICAgICAge2lzQXV0aFxyXG4gICAgICAgICAgICAgICAgPyA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25PdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fYXV0aEJ0biBpcy1hbmltYXRlZCBpcy1kZXNrdG9wXCI+0JLRi9C50YLQuDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgOiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNob3dTaWduSGFuZGxlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX2F1dGhCdG4gaXMtYW5pbWF0ZWQgaXMtZGVza3RvcFwiPtCS0L7QudGC0Lg8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IWlzTW9iaWxlTWVudVNob3dcclxuICAgICAgICAgICAgJiZcclxuICAgICAgICAgICAgPGRpdiBpZD1cImJ1cmdlci1tZW51XCIgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51LWljb24gaXMtbW9iaWxlIGlzLWFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tb3BhY2l0eVwiIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudVNob3codHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2J1cmdlck1lbnVJY29ufSBhbHQ9XCJsb2dvXCIvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7aXNNb2JpbGVNZW51U2hvdyAmJlxyXG4gICAgICAgICAgICA8TW9iaWxlTWVudSBzaG93U2lnbkhhbmRsZXI9e3Nob3dTaWduSGFuZGxlcn0gY2xvc2VIYW5kbGVyPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVTaG93KGZhbHNlKX0vPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsImxvZ28iLCJidXJnZXJNZW51SWNvbiIsIk1vYmlsZU1lbnUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nb3V0IiwidXNlUm91dGVyIiwiSGVhZGVyIiwicHJvcHMiLCJzaG93U2lnbkhhbmRsZXIiLCJpc01vYmlsZU1lbnVTaG93Iiwic2V0SXNNb2JpbGVNZW51U2hvdyIsImRpc3BhdGNoIiwicm91dGVyIiwiaXNBdXRoIiwic3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwidXNlciIsInNpZ25PdXRIYW5kbGVyIiwiZ29Ub1Byb2ZpbGUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJuYXYiLCJvbkNsaWNrIiwic3BhbiIsImF2YXRhciIsImxlbmd0aCIsIkJ1ZmZlciIsIm1pbWV0eXBlIiwiZnJvbSIsImJ1ZmZlciIsInRvU3RyaW5nIiwiYnV0dG9uIiwiaWQiLCJjbG9zZUhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/Header.js\n");

/***/ })

});