webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ \"./src/utils/convertDurationToTimeString.ts\");\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var _episode$duration;\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"])(),\n      episodeList = _usePlayer.episodeList,\n      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,\n      isPlaying = _usePlayer.isPlaying,\n      isLooping = _usePlayer.isLooping,\n      isShuffling = _usePlayer.isShuffling,\n      togglePlay = _usePlayer.togglePlay,\n      toggleLoop = _usePlayer.toggleLoop,\n      toggleShuffle = _usePlayer.toggleShuffle,\n      setPlayingState = _usePlayer.setPlayingState,\n      playNext = _usePlayer.playNext,\n      playPrevious = _usePlayer.playPrevious,\n      hasNext = _usePlayer.hasNext,\n      hasPrevious = _usePlayer.hasPrevious;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!audioRef.current) {\n      return;\n    }\n\n    if (isPlaying) {\n      audioRef.current.play();\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n\n  function setupProgressListener() {\n    audioRef.current.currentTime = 0;\n    audioRef.current.addEventListener('timeupdate', function () {\n      setProgress(Math.floor(audioRef.current.currentTime));\n    });\n  }\n\n  function handleSeek(amount) {\n    audioRef.current.currentTime = amount;\n  }\n\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Tocando agora \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 12\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__[\"convertDurationToTimeString\"])(progress)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,\n          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            max: episode.duration,\n            value: progress,\n            onChange: handleSeek,\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              backgroundColor: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__[\"convertDurationToTimeString\"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 11\n      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        loop: isLooping,\n        autoPlay: true,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(false);\n        },\n        onLoadMetadata: setupProgressListener\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 14\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode || episodeList.length == 1,\n          onClick: toggleShuffle,\n          className: isShuffling ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode || !hasPrevious,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 18\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 18\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode || !hasNext,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar proxima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 14\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          onClick: toggleLoop,\n          className: isLooping ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Player, \"0mqaaDaxZJgjratVyC7Pew3n7wI=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"]];\n});\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidXNlUGxheWVyIiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwiaXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJzZXR1cFByb2dyZXNzTGlzdGVuZXIiLCJjdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJNYXRoIiwiZmxvb3IiLCJoYW5kbGVTZWVrIiwiYW1vdW50IiwiZXBpc29kZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsImN1cnJlbnRFcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJtZW1iZXJzIiwiZW1wdHlQbGF5ZXIiLCJlbXB0eSIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsInNsaWRlciIsImR1cmF0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImVtcHR5U2xpZGVyIiwidXJsIiwiYnV0dG9ucyIsImxlbmd0aCIsImlzQWN0aXZlIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFFQyxvREFBTSxDQUFtQixJQUFuQixDQUF0Qjs7QUFE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QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSCxlQXVCRztBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUVPLFFBQS9CO0FBQXlDLGtCQUFRLEVBQUUsQ0FBQ2UsT0FBRCxJQUFZLENBQUNiLE9BQWhFO0FBQUEsaUNBQ0M7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCSCxlQTBCRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsa0JBQVEsRUFBRSxDQUFDYSxPQUZiO0FBR0UsaUJBQU8sRUFBRWxCLFVBSFg7QUFJRSxtQkFBUyxFQUFFSCxTQUFTLEdBQUdzQiwwREFBTSxDQUFDa0IsUUFBVixHQUFxQixFQUozQztBQUFBLGlDQU9FO0FBQUssZUFBRyxFQUFDLGFBQVQ7QUFBdUIsZUFBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUdEOztHQWxKZWxELE07VUFrQlhNLGlFOzs7S0FsQldOLE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xuXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJztcblxuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpe1xuY29uc3QgYXVkaW9SZWY9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcbmNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG5cbmNvbnN0IHtcbiAgZXBpc29kZUxpc3QsXG4gIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gIGlzUGxheWluZyxcbiAgaXNMb29waW5nLFxuICBpc1NodWZmbGluZyxcbiAgdG9nZ2xlUGxheSxcbiAgdG9nZ2xlTG9vcCxcbiAgdG9nZ2xlU2h1ZmZsZSxcbiAgc2V0UGxheWluZ1N0YXRlLFxuICBwbGF5TmV4dCxcbiAgcGxheVByZXZpb3VzLFxuICBoYXNOZXh0LFxuICBoYXNQcmV2aW91c1xuIH0gPSB1c2VQbGF5ZXIoKTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgIGlmIChpc1BsYXlpbmcpe1xuICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgIH0gZWxzZSB7XG4gICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgIH1cbn0sIFtpc1BsYXlpbmddKVxuXG5mdW5jdGlvbiBzZXR1cFByb2dyZXNzTGlzdGVuZXIoKSB7XG4gICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDtcblxuICAgYXVkaW9SZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICBzZXRQcm9ncmVzcyhNYXRoLmZsb29yKGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUpKTsgXG4gICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VlayAoYW1vdW50OiBudW1iZXIpIHtcbiAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IGFtb3VudDtcbiAgXG5cbn1cblxuXG5jb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF1cblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PiBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5aW5nLnN2Z1wiIGFsdD1cIlRvY2FuZG8gYWdvcmFcIiAvPlxuICAgICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSA8L3N0cm9uZz5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgeyBlcGlzb2RlID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxuICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgIHdpZHRoPXs1OTJ9XG4gICAgICAgICAgICAgIGhlaWdodD17NTkyfVxuICAgICAgICAgICAgICBzcmM9IHtlcGlzb2RlLnRodW1ibmFpbH0gXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxuICAgICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICApIH1cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGUgPyBzdHlsZXMuZW1wdHkgOiAnJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgPHNwYW4+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhwcm9ncmVzcyl9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAgICB7ZXBpc29kZSA/IChcbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgbWF4PXtlcGlzb2RlLmR1cmF0aW9ufVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9ncmVzc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2Vla31cbiAgICAgICAgICAgICAgICB0cmFja1N0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwNGQzNjEnIH19XG4gICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5Zjc1ZmYnIH19XG4gICAgICAgICAgICAgICAgaGFuZGxlU3R5bGU9e3sgYm9yZGVyQ29sb3I6ICcjMDRkMzYxJywgYm9yZGVyV2lkdGg6NCB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0vPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKGVwaXNvZGU/LmR1cmF0aW9uID8/IDApfTwvc3Bhbj5cbiAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgeyBlcGlzb2RlICYmKFxuICAgICAgICAgICAgIDxhdWRpb1xuICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudXJsfVxuICAgICAgICAgICAgICByZWY9e2F1ZGlvUmVmfVxuICAgICAgICAgICAgICBsb29wPXtpc0xvb3Bpbmd9XG4gICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgIG9uUGxheT17KCkgPT4gc2V0UGxheWluZ1N0YXRlKHRydWUpfVxuICAgICAgICAgICAgICBvblBhdXNlPXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUoZmFsc2UpfVxuICAgICAgICAgICAgICBvbkxvYWRNZXRhZGF0YT0ge3NldHVwUHJvZ3Jlc3NMaXN0ZW5lcn1cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICApfSBcblxuXG4gICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgZXBpc29kZUxpc3QubGVuZ3RoID09IDF9IFxuICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNodWZmbGV9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPSB7aXNTaHVmZmxpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiLz5cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5UHJldmlvdXN9IGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzUHJldmlvdXMgfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1wcmV2aW91cy5zdmdcIiBhbHQ9XCJUb2NhciBhbnRlcmlvclwiLz5cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufSBcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsgaXNQbGF5aW5nXG4gICAgICAgICAgICAgICA/IDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlRvY2FyXCIvPiBcbiAgICAgICAgICAgICAgIDogPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhclwiLz59XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cGxheU5leHR9IGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzTmV4dH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJUb2NhciBwcm94aW1hXCIvPlxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTG9vcH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0xvb3BpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiLz5cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+IFxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

})