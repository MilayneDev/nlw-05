webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9QbGF5ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ }),

/***/ "./src/pages/episodes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/episodes/[slug].tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Episode; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_thamyrismila_Documentos_Projetos_nlw05_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../episode.module.scss */ \"./src/pages/episode.module.scss\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/pages/episodes/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Episode(_ref) {\n  _s();\n\n  var episode = _ref.episode;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useContext\"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__[\"PlayerContext\"]);\n\n  Object(_home_thamyrismila_Documentos_Projetos_nlw05_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useContext);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.episode,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.thumbnailContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/arrow-left.svg\",\n            alt: \"Voltar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 20\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        width: 700,\n        height: 160,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/play.svg\",\n          alt: \"Tocar epis\\xF3dio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 18\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 18\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.publishedAd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.durationAsString\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,\n      dangerouslySetInnerHTML: {\n        __html: episode.description\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 10\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Episode, \"57Zz0Yb0DC1YSjiTG2RvfDJKC04=\");\n\n_c = Episode;\n\nvar _c;\n\n$RefreshReg$(_c, \"Episode\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3g/ZjgyMSJdLCJuYW1lcyI6WyJFcGlzb2RlIiwiZXBpc29kZSIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0Iiwic3R5bGVzIiwidGh1bWJuYWlsQ29udGFpbmVyIiwidGh1bWJuYWlsIiwidGl0bGUiLCJtZW1iZXJzIiwicHVibGlzaGVkQWQiLCJkdXJhdGlvbkFzU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBOztBQWtCZSxTQUFTQSxPQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3Qjs7QUFBQSxvQkFDMUNDLHdEQUFVLENBQUNDLHFFQUFELENBRGdDOztBQUFBOztBQUdwRCxzQkFDRztBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0gsT0FBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUcsMkRBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNBO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQSxpQ0FDRztBQUFLLGVBQUcsRUFBQyxpQkFBVDtBQUEyQixlQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFNSSxxRUFBQyxpREFBRDtBQUNDLGFBQUssRUFBRSxHQURSO0FBRUMsY0FBTSxFQUFFLEdBRlQ7QUFHQyxXQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssU0FIZDtBQUlDLGlCQUFTLEVBQUM7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFZSztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUEsK0JBQ0E7QUFBSyxhQUFHLEVBQUMsV0FBVDtBQUFxQixhQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWtCSTtBQUFBLDhCQUNJO0FBQUEsa0JBQUtMLE9BQU8sQ0FBQ007QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFPTixPQUFPLENBQUNPO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQSxrQkFBT1AsT0FBTyxDQUFDUTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUEsa0JBQU9SLE9BQU8sQ0FBQ1M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKLGVBeUJDO0FBQ0csZUFBUyxFQUFFTiwyREFBTSxDQUFDTyxXQURyQjtBQUVHLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBQ1gsT0FBTyxDQUFDVTtBQUFqQjtBQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBa0NKOztHQXJDdUJYLE87O0tBQUFBLE8iLCJmaWxlIjoiLi9zcmMvcGFnZXMvZXBpc29kZXMvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU099IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUidcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInIFxuaW1wb3J0IHtHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnO1xuXG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJzsgXG5pbXBvcnQge2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZ30gZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9lcGlzb2RlLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQbGF5ZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHB1Ymxpc2hlZEFkOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgRXBpc29kZVByb3BzID0geyBcbiAgICBlcGlzb2RlOiBFcGlzb2RlO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVwaXNvZGUoe2VwaXNvZGV9OiBFcGlzb2RlUHJvcHMpIHtcbiAgIGNvbnN0IHsgfSA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dClcblxuICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aHVtYm5haWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJWb2x0YXJcIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgd2lkdGg9ezcwMH0gXG4gICAgICAgICAgICAgICAgIGhlaWdodD17MTYwfSBcbiAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gIFxuICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgIC8+ICAgICAgXG4gICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyIGVwaXPDs2Rpb1wiLz5cbiAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aDE+e2VwaXNvZGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3NwYW4+IFxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gXG4gICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ZXBpc29kZS5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocz0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJyx7XG4gICAgICAgIHBhcmFtczp7XG4gICAgICAgIF9saW1pdDogMTIsXG4gICAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcbiAgICAgICAgX29yZGVyOiAnZGVzYydcbiAgICAgIH1cbiAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgc2x1ZzogZXBpc29kZS5pZFxuICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZydcbiAgICB9XG4gICAgLy8gaW5jcmVtZW50YXIgc3RhdGljIHJlZ2VuZXJhdGlvblxufVxuICBcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY3R4LnBhcmFtcztcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KGAvZXBpc29kZXMvJHtzbHVnfWApXG5cbiAgY29uc3QgZXBpc29kZSA9ICB7XG4gICAgaWQ6IGRhdGEuaWQsXG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgdGh1bWJuYWlsOiBkYXRhLnRodW1ibmFpbCxcbiAgICBtZW1iZXJzOiBkYXRhLm1lbWJlcnMsXG4gICAgcHVibGlzaGVkQXQ6Zm9ybWF0KHBhcnNlSVNPKGRhdGEucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5Jywge2xvY2FsZTpwdEJSIH0pLFxuICAgIGR1cmF0aW9uOiBOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSxcbiAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGRhdGEuZmlsZS5kdXJhdGlvbikpLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgIHVybDogZGF0YS5maWxlLnVybCxcblxuICB9O1xuXG5cbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBlcGlzb2RlLFxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvcmFzIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/episodes/[slug].tsx\n");

/***/ })

})