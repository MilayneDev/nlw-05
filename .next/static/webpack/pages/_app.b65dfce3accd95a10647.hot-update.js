webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"PlayerContext\"]),\n      episodeList = _useContext.episodeList,\n      currentEpisodeIndex = _useContext.currentEpisodeIndex,\n      isPlaying = _useContext.isPlaying,\n      togglePlay = _useContext.togglePlay,\n      setPlayingState = _useContext.setPlayingState;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!audioRef.current) {\n      return;\n    }\n\n    if (isPlaying) {\n      audioRef.current.play();\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Tocando agora \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"episode.title\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 12\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,\n          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              backgroundColor: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        autoPlay: true,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(true);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 14\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 18\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 18\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar proxima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 14\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Player, \"VH9xIIH+WZZG1ZQxiWWHzwK5cQo=\");\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlQ29udGV4dCIsIlBsYXllckNvbnRleHQiLCJlcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJ0b2dnbGVQbGF5Iiwic2V0UGxheWluZ1N0YXRlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsIm1lbWJlcnMiLCJlbXB0eVBsYXllciIsImVtcHR5IiwicHJvZ3Jlc3MiLCJzbGlkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZW1wdHlTbGlkZXIiLCJ1cmwiLCJidXR0b25zIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVPLFNBQVNBLE1BQVQsR0FBaUI7QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFFQyxvREFBTSxDQUFtQixJQUFuQixDQUF0Qjs7QUFEd0Isb0JBU25CQyx3REFBVSxDQUFFQyxxRUFBRixDQVRTO0FBQUEsTUFJdEJDLFdBSnNCLGVBSXRCQSxXQUpzQjtBQUFBLE1BS3RCQyxtQkFMc0IsZUFLdEJBLG1CQUxzQjtBQUFBLE1BTXRCQyxTQU5zQixlQU10QkEsU0FOc0I7QUFBQSxNQU90QkMsVUFQc0IsZUFPdEJBLFVBUHNCO0FBQUEsTUFRdEJDLGVBUnNCLGVBUXRCQSxlQVJzQjs7QUFXeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ1QsUUFBUSxDQUFDVSxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0Q7O0FBRUEsUUFBSUosU0FBSixFQUFjO0FB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QTNHZWQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BsYXllci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcblxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IFBsYXllckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKXtcbmNvbnN0IGF1ZGlvUmVmPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XG5cbmNvbnN0IHtcbiAgZXBpc29kZUxpc3QsXG4gIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gIGlzUGxheWluZyxcbiAgdG9nZ2xlUGxheSxcbiAgc2V0UGxheWluZ1N0YXRlXG4gfSA9IHVzZUNvbnRleHQgKFBsYXllckNvbnRleHQpXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmICghYXVkaW9SZWYuY3VycmVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICBpZiAoaXNQbGF5aW5nKXtcbiAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG4gICB9IGVsc2Uge1xuICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XG4gICB9XG59LCBbaXNQbGF5aW5nXSlcblxuXG5jb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF1cblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PiBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5aW5nLnN2Z1wiIGFsdD1cIlRvY2FuZG8gYWdvcmFcIiAvPlxuICAgICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSA8L3N0cm9uZz5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgeyBlcGlzb2RlID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxuICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgIHdpZHRoPXs1OTJ9XG4gICAgICAgICAgICAgIGhlaWdodD17NTkyfVxuICAgICAgICAgICAgICBzcmM9IHtlcGlzb2RlLnRodW1ibmFpbH0gXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzdHJvbmc+ZXBpc29kZS50aXRsZTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5UGxheWVyfT5cbiAgICAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgKSB9XG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9eyFlcGlzb2RlID8gc3R5bGVzLmVtcHR5IDogJyd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAgICB7ZXBpc29kZSA/IChcbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDRkMzYxJyB9fVxuICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJyB9fVxuICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7IGJvcmRlckNvbG9yOiAnIzA0ZDM2MScsIGJvcmRlcldpZHRoOjQgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlTbGlkZXJ9Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4+MDA6MDA8L3NwYW4+XG4gICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIHsgZXBpc29kZSAmJihcbiAgICAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cbiAgICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cbiAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgb25QbGF5PXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgIG9uUGF1c2U9eygpID0+IHNldFBsYXlpbmdTdGF0ZSh0cnVlKX1cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICApfVxuXG5cbiAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9ID5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgYW50ZXJpb3JcIi8+XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn0gXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7IGlzUGxheWluZ1xuICAgICAgICAgICAgICAgPyA8aW1nIHNyYz1cIi9wYXVzZS5zdmdcIiBhbHQ9XCJUb2NhclwiLz4gXG4gICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXJcIi8+fVxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJUb2NhciBwcm94aW1hXCIvPlxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3JlcGVhdC5zdmdcIiBhbHQ9XCJSZXBldGlyXCIvPlxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj4gXG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

})