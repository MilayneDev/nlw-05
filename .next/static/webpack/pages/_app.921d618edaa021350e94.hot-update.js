webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ \"./src/utils/convertDurationToTimeString.ts\");\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var _episode$duration;\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"])(),\n      episodeList = _usePlayer.episodeList,\n      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,\n      isPlaying = _usePlayer.isPlaying,\n      isLooping = _usePlayer.isLooping,\n      isShuffling = _usePlayer.isShuffling,\n      togglePlay = _usePlayer.togglePlay,\n      toggleLoop = _usePlayer.toggleLoop,\n      toggleShuffle = _usePlayer.toggleShuffle,\n      setPlayingState = _usePlayer.setPlayingState,\n      playNext = _usePlayer.playNext,\n      playPrevious = _usePlayer.playPrevious,\n      hasNext = _usePlayer.hasNext,\n      hasPrevious = _usePlayer.hasPrevious;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!audioRef.current) {\n      return;\n    }\n\n    if (isPlaying) {\n      audioRef.current.play();\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n\n  function setupProgressListener() {\n    audioRef.current.currentTime = 0;\n    audioRef.current.addEventListener('timeupdate', function (event) {\n      setProgress(audioRef.current.currr);\n    });\n  }\n\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Tocando agora \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 12\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__[\"convertDurationToTimeString\"])(progress)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,\n          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              backgroundColor: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__[\"convertDurationToTimeString\"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        loop: isLooping,\n        autoPlay: true,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(false);\n        },\n        onLoadMetadata: setupProgressListener\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 14\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode || episodeList.length == 1,\n          onClick: toggleShuffle,\n          className: isShuffling ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode || !hasPrevious,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 18\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 18\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode || !hasNext,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar proxima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          onClick: toggleLoop,\n          className: isLooping ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Player, \"0mqaaDaxZJgjratVyC7Pew3n7wI=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"]];\n});\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidXNlUGxheWVyIiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwiaXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJzZXR1cFByb2dyZXNzTGlzdGVuZXIiLCJjdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImN1cnJyIiwiZXBpc29kZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsImN1cnJlbnRFcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJtZW1iZXJzIiwiZW1wdHlQbGF5ZXIiLCJlbXB0eSIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsImR1cmF0aW9uIiwidXJsIiwiYnV0dG9ucyIsImxlbmd0aCIsImlzQWN0aXZlIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFFQyxvREFBTSxDQUFtQixJQUFuQixDQUF0Qjs7QUFEd0Isa0JBRVFDLHNEQUFRLENBQUMs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QUFBO0FBQUEsZ0JBdkJILGVBMEJFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxrQkFBUSxFQUFFLENBQUNXLE9BRmI7QUFHRSxpQkFBTyxFQUFFaEIsVUFIWDtBQUlFLG1CQUFTLEVBQUVILFNBQVMsR0FBR29CLDBEQUFNLENBQUNrQixRQUFWLEdBQXFCLEVBSjNDO0FBQUEsaUNBT0U7QUFBSyxlQUFHLEVBQUMsYUFBVDtBQUF1QixlQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4RkQ7O0dBekllaEQsTTtVQWtCWE0saUU7OztLQWxCV04sTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BsYXllci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JjLXNsaWRlcic7XG5cbmltcG9ydCAncmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MnO1xuXG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCl7XG5jb25zdCBhdWRpb1JlZj0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcblxuY29uc3Qge1xuICBlcGlzb2RlTGlzdCxcbiAgY3VycmVudEVwaXNvZGVJbmRleCxcbiAgaXNQbGF5aW5nLFxuICBpc0xvb3BpbmcsXG4gIGlzU2h1ZmZsaW5nLFxuICB0b2dnbGVQbGF5LFxuICB0b2dnbGVMb29wLFxuICB0b2dnbGVTaHVmZmxlLFxuICBzZXRQbGF5aW5nU3RhdGUsXG4gIHBsYXlOZXh0LFxuICBwbGF5UHJldmlvdXMsXG4gIGhhc05leHQsXG4gIGhhc1ByZXZpb3VzXG4gfSA9IHVzZVBsYXllcigpO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAgaWYgKGlzUGxheWluZyl7XG4gICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICAgfSBlbHNlIHtcbiAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuICAgfVxufSwgW2lzUGxheWluZ10pXG5cbmZ1bmN0aW9uIHNldHVwUHJvZ3Jlc3NMaXN0ZW5lcigpIHtcbiAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xuXG4gICBhdWRpb1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBldmVudCA9PiB7XG4gICAgIHNldFByb2dyZXNzKGF1ZGlvUmVmLmN1cnJlbnQuY3VycnIpXG4gICB9KTtcbn1cblxuXG5jb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF1cblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PiBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5aW5nLnN2Z1wiIGFsdD1cIlRvY2FuZG8gYWdvcmFcIiAvPlxuICAgICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSA8L3N0cm9uZz5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgeyBlcGlzb2RlID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxuICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgIHdpZHRoPXs1OTJ9XG4gICAgICAgICAgICAgIGhlaWdodD17NTkyfVxuICAgICAgICAgICAgICBzcmM9IHtlcGlzb2RlLnRodW1ibmFpbH0gXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxuICAgICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICApIH1cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGUgPyBzdHlsZXMuZW1wdHkgOiAnJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgPHNwYW4+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhwcm9ncmVzcyl9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAgICB7ZXBpc29kZSA/IChcbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDRkMzYxJyB9fVxuICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJyB9fVxuICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7IGJvcmRlckNvbG9yOiAnIzA0ZDM2MScsIGJvcmRlcldpZHRoOjQgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlTbGlkZXJ9Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhlcGlzb2RlPy5kdXJhdGlvbiA/PyAwKX08L3NwYW4+XG4gICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIHsgZXBpc29kZSAmJihcbiAgICAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cbiAgICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cbiAgICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxuICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICBvblBsYXk9eygpID0+IHNldFBsYXlpbmdTdGF0ZSh0cnVlKX1cbiAgICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0UGxheWluZ1N0YXRlKGZhbHNlKX1cbiAgICAgICAgICAgICAgb25Mb2FkTWV0YWRhdGE9IHtzZXR1cFByb2dyZXNzTGlzdGVuZXJ9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgKX1cblxuXG4gICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgZXBpc29kZUxpc3QubGVuZ3RoID09IDF9IFxuICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNodWZmbGV9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPSB7aXNTaHVmZmxpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiLz5cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5UHJldmlvdXN9IGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzUHJldmlvdXMgfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1wcmV2aW91cy5zdmdcIiBhbHQ9XCJUb2NhciBhbnRlcmlvclwiLz5cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufSBcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsgaXNQbGF5aW5nXG4gICAgICAgICAgICAgICA/IDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlRvY2FyXCIvPiBcbiAgICAgICAgICAgICAgIDogPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhclwiLz59XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cGxheU5leHR9IGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzTmV4dH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJUb2NhciBwcm94aW1hXCIvPlxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTG9vcH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0xvb3BpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiLz5cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+IFxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

})