webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  function playNext() {\n    var nextEpisodeIndex = currentEpisodeIndex + 1;\n\n    if (nextEpisodeIndex < episodeList.length) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (currentEpisodeIndex > 0) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      isPlaying: isPlaying,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"LrQXJ4YCuKXOoMsmvRtpeyylJ9U=\");\n\n_c = PlayerContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsInBsYXlOZXh0IiwibmV4dEVwaXNvZGVJbmRleCIsImxlbmd0aCIsInBsYXlQcmV2aW91cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DO0FBTUEsU0FBU0MscUJBQVQsT0FBdUU7QUFBQTs7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDOztBQUFBLGtCQUN0Q0Msc0RBQVEsQ0FBQyxFQUFELENBRDhCO0FBQUEsTUFDckVDLFdBRHFFO0FBQUEsTUFDeERDLGNBRHdEOztBQUFBLG1CQUV0QkYsc0RBQVEsQ0FBQyxDQUFELENBRmM7QUFBQSxNQUVyRUcsbUJBRnFFO0FBQUEsTUFFaERDLHNCQUZnRDs7QUFBQSxtQkFHMUNKLHNEQUFRLENBQUMsS0FBRCxDQUhrQztBQUFBLE1BR3JFSyxTQUhxRTtBQUFBLE1BRzFEQyxZQUgwRDs7QUFLNUUsV0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQWlDO0FBQy9CTixrQkFBYyxDQUFDLENBQUNNLE9BQUQsQ0FBRCxDQUFkO0FBQ0FKLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFSCxXQUFTRyxRQUFULENBQWtCQyxJQUFsQixFQUFvQ0MsS0FBcEMsRUFBbUQ7QUFDakRULGtCQUFjLENBQUNRLElBQUQsQ0FBZDtBQUNBTiwwQkFBc0IsQ0FBQ08sS0FBRCxDQUF0QjtBQUNBTCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVEOztBQUVDLFdBQVNNLFVBQVQsR0FBcUI7QUFDbkJOLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0Q7O0FBRUQsV0FBU1EsZUFBVCxDQUF5QkMsS0FBekIsRUFBd0M7QUFDdENSLGdCQUFZLENBQUNRLEtBQUQsQ0FBWjtBQUNEOztBQUVELFdBQVNDLFFBQVQsR0FBb0I7QUFDbEIsUUFBTUMsZ0JBQWdCLEdBQUdiLG1CQUFtQixHQUFHLENBQS9DOztBQUdBLFFBQUlhLGdCQUFnQixHQUFHZixXQUFXLENBQUNnQixNQUFuQyxFQUEyQztBQUN6Q2IsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTZSxZQUFULEdBQXdCO0FBQ3RCLFFBQUlmLG1CQUFtQixHQUFHLENBQTFCLEVBQTRCO0FBQzFCQyw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDtBQUVGOztBQUVELHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0EsU0FBSyxFQUFFO0FBQ0xGLGlCQUFXLEVBQVhBLFdBREs7QUFFTEUseUJBQW1CLEVBQW5CQSxtQkFGSztBQUdMSSxVQUFJLEVBQUpBLElBSEs7QUFJTEUsY0FBUSxFQUFSQSxRQUpLO0FBS0xNLGNBQVEsRUFBUkEsUUFMSztBQU1MVixlQUFTLEVBQVRBLFNBTks7QUFPTE8sZ0JBQVUsRUFBVkEsVUFQSztBQVFMQyxxQkFBZSxFQUFmQTtBQVJLLEtBRFA7QUFBQSxjQVlDZDtBQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0ExRGVELHFCOztLQUFBQSxxQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9QbGF5ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lbWJlcnM6IHN0cmluZztcbiAgICB0aHVtYm5haWw6IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHVybDogc3RyaW5nO1xufTtcblxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcbiAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyOyBcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xuICBwbGF5OihlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xuICBwbGF5TGlzdDoobGlzdDogRXBpc29kZVtdLCBpbmRleDpudW1iZXIpID0+IHZvaWQ7XG4gIHNldFBsYXlpbmdTdGF0ZTogKGVwaXNvZGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHRvZ2dsZVBsYXk6KCkgPT4gdm9pZDtcblxufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlICkge1xuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cblxuZnVuY3Rpb24gcGxheUxpc3QobGlzdCA6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xuICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gIHNldElzUGxheWluZyh0cnVlKTtcblxufVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6Ym9vbGVhbikge1xuICAgIHNldElzUGxheWluZyhzdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICBjb25zdCBuZXh0RXBpc29kZUluZGV4ID0gY3VycmVudEVwaXNvZGVJbmRleCArIDE7XG5cbiAgICAgXG4gICAgaWYgKG5leHRFcGlzb2RlSW5kZXggPCBlcGlzb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICBpZiAoY3VycmVudEVwaXNvZGVJbmRleCA+IDApe1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7ICBcbiAgICB9XG4gICAgXG4gIH1cbiAgIFxuICByZXR1cm4gKFxuICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIFxuICAgIHZhbHVlPXt7XG4gICAgICBlcGlzb2RlTGlzdCwgXG4gICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgICAgcGxheSxcbiAgICAgIHBsYXlMaXN0LFxuICAgICAgcGxheU5leHQsXG4gICAgICBpc1BsYXlpbmcsIFxuICAgICAgdG9nZ2xlUGxheSwgXG4gICAgICBzZXRQbGF5aW5nU3RhdGVcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})