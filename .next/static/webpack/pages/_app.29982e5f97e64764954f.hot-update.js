webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var audioRef = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"PlayerContext\"]),\n      episodeList = _useContext.episodeList,\n      currentEpisodeIndex = _useContext.currentEpisodeIndex,\n      isPlaying = _useContext.isPlaying,\n      togglePlay = _useContext.togglePlay;\n\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Tocando agora \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"episode.title\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 12\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,\n          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              backgroundColor: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        src: episode.url,\n        autoPlay: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 14\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 18\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 18\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar proxima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 14\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Player, \"uKlwi95W9y67kvQIPnk6HHQQy7k=\");\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlQ29udGV4dCIsIlBsYXllckNvbnRleHQiLCJlcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJ0b2dnbGVQbGF5IiwiZXBpc29kZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsImN1cnJlbnRFcGlzb2RlIiwidGh1bWJuYWlsIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJwcm9ncmVzcyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsInVybCIsImJ1dHRvbnMiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRU8sU0FBU0EsTUFBVCxHQUFpQjtBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUVDLDRDQUFoQjs7QUFEd0Isb0JBUW5CQyx3REFBVSxDQUFFQyxxRUFBRixDQVJTO0FBQUEsTUFJdEJDLFdBSnNCLGVBSXRCQSxXQUpzQjtBQUFBLE1BS3RCQyxtQkFMc0IsZUFLdEJBLG1CQUxzQjtBQUFBLE1BTXRCQyxTQU5zQixlQU10QkEsU0FOc0I7QUFBQSxNQU90QkMsVUFQc0IsZUFPdEJBLFVBUHNCOztBQVV4QixNQUFNQyxPQUFPLEdBQUdKLFdBQVcsQ0FBQ0MsbUJBQUQsQ0FBM0I7QUFFRSxzQkFDSTtBQUFLLGFBQVMsRUFBRUksMERBQU0sQ0FBQ0MsZUFBdkI7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFDLGNBQVQ7QUFBd0IsV0FBRyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFB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QUE7QUFBQTtBQUFBLGdCQVBILGVBa0JHO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0Isa0JBQVEsRUFBRSxDQUFDRSxPQUFqQztBQUFBLGlDQUNDO0FBQUssZUFBRyxFQUFDLGdCQUFUO0FBQTBCLGVBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkgsZUFxQkc7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixrQkFBUSxFQUFFLENBQUNBLE9BQWpDO0FBQUEsaUNBQ0M7QUFBSyxlQUFHLEVBQUMsYUFBVDtBQUF1QixlQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4RUQ7O0dBMUZlVCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcblxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IFBsYXllckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKXtcbmNvbnN0IGF1ZGlvUmVmPSB1c2VSZWZcblxuY29uc3Qge1xuICBlcGlzb2RlTGlzdCxcbiAgY3VycmVudEVwaXNvZGVJbmRleCxcbiAgaXNQbGF5aW5nLFxuICB0b2dnbGVQbGF5XG4gfSA9IHVzZUNvbnRleHQgKFBsYXllckNvbnRleHQpXG5cbmNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+IFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBhZ29yYVwiIC8+XG4gICAgICAgICAgPHN0cm9uZz5Ub2NhbmRvIGFnb3JhIDwvc3Ryb25nPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICB7IGVwaXNvZGUgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgd2lkdGg9ezU5Mn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs1OTJ9XG4gICAgICAgICAgICAgIHNyYz0ge2VwaXNvZGUudGh1bWJuYWlsfSBcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIiBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHN0cm9uZz5lcGlzb2RlLnRpdGxlPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxuICAgICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICApIH1cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGUgPyBzdHlsZXMuZW1wdHkgOiAnJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgPHNwYW4+MDA6MDA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XG4gICAgICAgICAgICAgIHtlcGlzb2RlID8gKFxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICB0cmFja1N0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwNGQzNjEnIH19XG4gICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5Zjc1ZmYnIH19XG4gICAgICAgICAgICAgICAgaGFuZGxlU3R5bGU9e3sgYm9yZGVyQ29sb3I6ICcjMDRkMzYxJywgYm9yZGVyV2lkdGg6NCB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0vPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj4wMDowMDwvc3Bhbj5cbiAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgeyBlcGlzb2RlICYmKFxuICAgICAgICAgICAgIDxhdWRpb1xuICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudXJsfVxuICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICl9XG5cblxuICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZX0gPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIi8+XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1wcmV2aW91cy5zdmdcIiBhbHQ9XCJUb2NhciBhbnRlcmlvclwiLz5cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufSBcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsgaXNQbGF5aW5nXG4gICAgICAgICAgICAgICA/IDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlRvY2FyXCIvPiBcbiAgICAgICAgICAgICAgIDogPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhclwiLz59XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIHByb3hpbWFcIi8+XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGV0aXJcIi8+XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PiBcbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

})