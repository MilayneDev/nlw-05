webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/pages/episodes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/episodes/[slug].tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Episode; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../episode.module.scss */ \"./src/pages/episode.module.scss\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/pages/episodes/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Episode(_ref) {\n  _s();\n\n  var episode = _ref.episode;\n\n  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"])(),\n      play = _usePlayer.play;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.episode,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_document__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [episode.title, \" | Podcastr\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 12\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.thumbnailContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/arrow-left.svg\",\n            alt: \"Voltar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 20\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 700,\n        height: 160,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: function onClick() {\n          return play(episode);\n        },\n        children: [\"                 \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/play.svg\",\n          alt: \"Tocar epis\\xF3dio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 87\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 18\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.publishedAd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.durationAsString\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,\n      dangerouslySetInnerHTML: {\n        __html: episode.description\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 10\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Episode, \"mptMREsNBTdRfLLVAN69g5qilFU=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"]];\n});\n\n_c = Episode;\n\nvar _c;\n\n$RefreshReg$(_c, \"Episode\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3g/ZjgyMSJdLCJuYW1lcyI6WyJFcGlzb2RlIiwiZXBpc29kZSIsInVzZVBsYXllciIsInBsYXkiLCJzdHlsZXMiLCJ0aXRsZSIsInRodW1ibmFpbENvbnRhaW5lciIsInRodW1ibmFpbCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBZCIsImR1cmF0aW9uQXNTdHJpbmciLCJkZXNjcmlwdGlvbiIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFFQztBQU1EO0FBQ0E7O0FBbUJlLFNBQVNBLE9BQVQsT0FBMEM7QUFBQTs7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCOztBQUFBLG1CQUNyQ0MseUVBQVMsRUFENEI7QUFBQSxNQUM5Q0MsSUFEOEMsY0FDOUNBLElBRDhDOztBQUdwRCxzQkFDRztBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0gsT0FBdkI7QUFBQSw0QkFDQSxxRUFBQyxvREFBRDtBQUFBLDZCQUNHO0FBQUEsbUJBQVFBLE9BQU8sQ0FBQ0ksS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBS0k7QUFBSyxlQUFTLEVBQUVELDJEQUFNLENBQUNFLGtCQUF2QjtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDQTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsaUNBQ0c7QUFBSyxlQUFHLEVBQUMsaUJBQVQ7QUFBMkIsZUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUkscUVBQUMsaURBQUQ7QUFDQyxhQUFLLEVBQUUsR0FEUjtBQUVDLGNBQU0sRUFBRSxHQUZUO0FBR0MsV0FBRyxFQUFFTCxPQUFPLENBQUNNLFNBSGQ7QUFJQyxpQkFBUyxFQUFDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBWUs7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUU7QUFBQSxpQkFBTUosSUFBSSxDQUFDRixPQUFELENBQVY7QUFBQSxTQUEvQjtBQUFBLHFEQUFxRTtBQUFLLGFBQUcsRUFBQyxXQUFUO0FBQXFCLGFBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQXFCSTtBQUFBLDhCQUNJO0FBQUEsa0JBQUtBLE9BQU8sQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFPSixPQUFPLENBQUNPO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQSxrQkFBT1AsT0FBTyxDQUFDUTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUEsa0JBQU9SLE9BQU8sQ0FBQ1M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJKLGVBNEJDO0FBQ0csZUFBUyxFQUFFTiwyREFBTSxDQUFDTyxXQURyQjtBQUVHLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBQ1gsT0FBTyxDQUFDVTtBQUFqQjtBQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBcUNKOztHQXhDdUJYLE87VUFDSkUsaUU7OztLQURJRixPIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuIGltcG9ydCBIZWFkICBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCB7R2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0JztcblxuaW1wb3J0IHthcGl9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7IFxuaW1wb3J0IHtjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmd9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vZXBpc29kZS5tb2R1bGUuc2Nzcyc7IFxuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5cblxudHlwZSBFcGlzb2RlID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB0aHVtYm5haWw6IHN0cmluZztcbiAgICBtZW1iZXJzOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICBkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcHVibGlzaGVkQWQ6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBFcGlzb2RlUHJvcHMgPSB7IFxuICAgIGVwaXNvZGU6IEVwaXNvZGU7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXBpc29kZSh7ZXBpc29kZX06IEVwaXNvZGVQcm9wcykge1xuICAgY29uc3QgeyBwbGF5IH0gPSB1c2VQbGF5ZXIoKTtcblxuICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgPHRpdGxlPntlcGlzb2RlLnRpdGxlfSB8IFBvZGNhc3RyPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGh1bWJuYWlsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiVm9sdGFyXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgIHdpZHRoPXs3MDB9IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE2MH0gXG4gICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9ICBcbiAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAvPiAgICAgIFxuICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBwbGF5KGVwaXNvZGUpfT4gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc8OzZGlvXCIvPlxuICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoMT57ZXBpc29kZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZEFkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj4gXG4gICAgICAgICAgICA8L2hlYWRlcj5cbiBcbiAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDplcGlzb2RlLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLHtcbiAgICAgICAgcGFyYW1zOntcbiAgICAgICAgX2xpbWl0OiAxMixcbiAgICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuICAgICAgICBfb3JkZXI6ICdkZXNjJ1xuICAgICAgfVxuICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChlcGlzb2RlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBzbHVnOiBlcGlzb2RlLmlkXG4gICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xuICAgIH1cbiAgICAvLyBpbmNyZW1lbnRhciBzdGF0aWMgcmVnZW5lcmF0aW9uXG59XG4gIFxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBjdHgucGFyYW1zO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoYC9lcGlzb2Rlcy8ke3NsdWd9YClcblxuICBjb25zdCBlcGlzb2RlID0gIHtcbiAgICBpZDogZGF0YS5pZCxcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICB0aHVtYm5haWw6IGRhdGEudGh1bWJuYWlsLFxuICAgIG1lbWJlcnM6IGRhdGEubWVtYmVycyxcbiAgICBwdWJsaXNoZWRBdDpmb3JtYXQocGFyc2VJU08oZGF0YS5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7bG9jYWxlOnB0QlIgfSksXG4gICAgZHVyYXRpb246IE51bWJlcihkYXRhLmZpbGUuZHVyYXRpb24pLFxuICAgIGR1cmF0aW9uQXNTdHJpbmc6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSksXG4gICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgdXJsOiBkYXRhLmZpbGUudXJsLFxuXG4gIH07XG5cblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGVwaXNvZGUsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCwgLy8gMjQgaG9yYXMgXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/episodes/[slug].tsx\n");

/***/ })

})