webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ \"./src/utils/convertDurationToTimeString.ts\");\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var _episode$duration;\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"])(),\n      episodeList = _usePlayer.episodeList,\n      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,\n      isPlaying = _usePlayer.isPlaying,\n      isLooping = _usePlayer.isLooping,\n      isShuffling = _usePlayer.isShuffling,\n      togglePlay = _usePlayer.togglePlay,\n      toggleLoop = _usePlayer.toggleLoop,\n      toggleShuffle = _usePlayer.toggleShuffle,\n      setPlayingState = _usePlayer.setPlayingState,\n      playNext = _usePlayer.playNext,\n      playPrevious = _usePlayer.playPrevious,\n      hasNext = _usePlayer.hasNext,\n      hasPrevious = _usePlayer.hasPrevious;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!audioRef.current) {\n      return;\n    }\n\n    if (isPlaying) {\n      audioRef.current.play();\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n\n  function setupProgressListener() {\n    audioRef.current.currentTime = 0;\n    audioRef.current.addEventListener('timeupdate', function () {\n      setProgress(Math.floor(audioRef.current.currentTime));\n    });\n  }\n\n  function handleSeek(amount) {\n    audioRef.current.currentTime = amount;\n    setProgress();\n  }\n\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Tocando agora \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 12\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__[\"convertDurationToTimeString\"])(progress)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,\n          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            max: episode.duration,\n            value: progress,\n            onChange: handleSeek,\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              backgroundColor: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__[\"convertDurationToTimeString\"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 11\n      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        loop: isLooping,\n        autoPlay: true,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(false);\n        },\n        onLoadMetadata: setupProgressListener\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 14\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode || episodeList.length == 1,\n          onClick: toggleShuffle,\n          className: isShuffling ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode || !hasPrevious,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 18\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 18\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode || !hasNext,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar proxima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          onClick: toggleLoop,\n          className: isLooping ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Player, \"0mqaaDaxZJgjratVyC7Pew3n7wI=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"]];\n});\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidXNlUGxheWVyIiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwiaXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJzZXR1cFByb2dyZXNzTGlzdGVuZXIiLCJjdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJNYXRoIiwiZmxvb3IiLCJoYW5kbGVTZWVrIiwiYW1vdW50IiwiZXBpc29kZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsImN1cnJlbnRFcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJtZW1iZXJzIiwiZW1wdHlQbGF5ZXIiLCJlbXB0eSIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsInNsaWRlciIsImR1cmF0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImVtcHR5U2xpZGVyIiwidXJsIiwiYnV0dG9ucyIsImxlbmd0aCIsImlzQWN0aXZlIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFFQyxvREFBTSxDQUFtQixJQUFuQixDQUF0Qjs7QUFE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QUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkgsZUF1Qkc7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFFTyxRQUEvQjtBQUF5QyxrQkFBUSxFQUFFLENBQUNlLE9BQUQsSUFBWSxDQUFDYixPQUFoRTtBQUFBLGlDQUNDO0FBQUssZUFBRyxFQUFDLGdCQUFUO0FBQTBCLGVBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkgsZUEwQkU7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFRLEVBQUUsQ0FBQ2EsT0FGYjtBQUdFLGlCQUFPLEVBQUVsQixVQUhYO0FBSUUsbUJBQVMsRUFBRUgsU0FBUyxHQUFHc0IsMERBQU0sQ0FBQ2tCLFFBQVYsR0FBcUIsRUFKM0M7QUFBQSxpQ0FPRTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlHRDs7R0FsSmVsRCxNO1VBa0JYTSxpRTs7O0tBbEJXTixNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcblxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKXtcbmNvbnN0IGF1ZGlvUmVmPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XG5jb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuXG5jb25zdCB7XG4gIGVwaXNvZGVMaXN0LFxuICBjdXJyZW50RXBpc29kZUluZGV4LFxuICBpc1BsYXlpbmcsXG4gIGlzTG9vcGluZyxcbiAgaXNTaHVmZmxpbmcsXG4gIHRvZ2dsZVBsYXksXG4gIHRvZ2dsZUxvb3AsXG4gIHRvZ2dsZVNodWZmbGUsXG4gIHNldFBsYXlpbmdTdGF0ZSxcbiAgcGxheU5leHQsXG4gIHBsYXlQcmV2aW91cyxcbiAgaGFzTmV4dCxcbiAgaGFzUHJldmlvdXNcbiB9ID0gdXNlUGxheWVyKCk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmICghYXVkaW9SZWYuY3VycmVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICBpZiAoaXNQbGF5aW5nKXtcbiAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG4gICB9IGVsc2Uge1xuICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XG4gICB9XG59LCBbaXNQbGF5aW5nXSlcblxuZnVuY3Rpb24gc2V0dXBQcm9ncmVzc0xpc3RlbmVyKCkge1xuICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IDA7XG5cbiAgIGF1ZGlvUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpID0+IHtcbiAgICAgc2V0UHJvZ3Jlc3MoTWF0aC5mbG9vcihhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lKSk7IFxuICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlZWsgKGFtb3VudDogbnVtYmVyKSB7XG4gIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSBhbW91bnQ7XG4gIHNldFByb2dyZXNzKClcblxufVxuXG5cbmNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+IFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBhZ29yYVwiIC8+XG4gICAgICAgICAgPHN0cm9uZz5Ub2NhbmRvIGFnb3JhIDwvc3Ryb25nPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICB7IGVwaXNvZGUgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgd2lkdGg9ezU5Mn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs1OTJ9XG4gICAgICAgICAgICAgIHNyYz0ge2VwaXNvZGUudGh1bWJuYWlsfSBcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIiBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHN0cm9uZz57ZXBpc29kZS50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVBsYXllcn0+XG4gICAgICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICkgfVxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXshZXBpc29kZSA/IHN0eWxlcy5lbXB0eSA6ICcnfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5wcm9ncmVzc30+XG4gICAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKHByb2dyZXNzKX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XG4gICAgICAgICAgICAgIHtlcGlzb2RlID8gKFxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICBtYXg9e2VwaXNvZGUuZHVyYXRpb259XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2dyZXNzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWVrfVxuICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzA0ZDM2MScgfX1cbiAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzlmNzVmZicgfX1cbiAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZT17eyBib3JkZXJDb2xvcjogJyMwNGQzNjEnLCBib3JkZXJXaWR0aDo0IH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5U2xpZGVyfS8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPntjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoZXBpc29kZT8uZHVyYXRpb24gPz8gMCl9PC9zcGFuPlxuICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICB7IGVwaXNvZGUgJiYoXG4gICAgICAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgICAgIHNyYz17ZXBpc29kZS51cmx9XG4gICAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XG4gICAgICAgICAgICAgIGxvb3A9e2lzTG9vcGluZ31cbiAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgb25QbGF5PXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgIG9uUGF1c2U9eygpID0+IHNldFBsYXlpbmdTdGF0ZShmYWxzZSl9XG4gICAgICAgICAgICAgIG9uTG9hZE1ldGFkYXRhPSB7c2V0dXBQcm9ncmVzc0xpc3RlbmVyfVxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICl9IFxuXG5cbiAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZSB8fCBlcGlzb2RlTGlzdC5sZW5ndGggPT0gMX0gXG4gICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2h1ZmZsZX1cbiAgICAgICAgICAgICBjbGFzc05hbWU9IHtpc1NodWZmbGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnfVxuICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlQcmV2aW91c30gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNQcmV2aW91cyB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIGFudGVyaW9yXCIvPlxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259IFxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyBpc1BsYXlpbmdcbiAgICAgICAgICAgICAgID8gPGltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwiVG9jYXJcIi8+IFxuICAgICAgICAgICAgICAgOiA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyXCIvPn1cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5TmV4dH0gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNOZXh0fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIHByb3hpbWFcIi8+XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29wfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzTG9vcGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnfVxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3JlcGVhdC5zdmdcIiBhbHQ9XCJSZXBldGlyXCIvPlxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj4gXG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

})