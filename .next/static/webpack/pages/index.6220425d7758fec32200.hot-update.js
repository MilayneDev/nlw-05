webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffLing = _useState5[0],\n      setIsShuffLing = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toggleShuffle() {\n    setIsShuffling(!isShu);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      isLooping: isLooping,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"DAWdT4Dk0spmsMC2DQKwzEYPb9Y=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZkxpbmciLCJzZXRJc1NodWZmTGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRJc1NodWZmbGluZyIsImlzU2h1Iiwic2V0UGxheWluZ1N0YXRlIiwic3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsInVzZVBsYXllciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DO0FBTUEsU0FBU0MscUJBQVQsT0FBdUU7QUFBQTs7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDOztBQUFBLGtCQUN0Q0Msc0RBQVEsQ0FBQyxFQUFELENBRDhCO0FBQUEsTUFDckVDLFdBRHFFO0FBQUEsTUFDeERDLGNBRHdEOztBQUFBLG1CQUV0QkYsc0RBQVEsQ0FBQyxDQUFELENBRmM7QUFBQSxNQUVyRUcsbUJBRnFFO0FBQUEsTUFFaERDLHNCQUZnRDs7QUFBQSxtQkFHMUNKLHNEQUFRLENBQUMsS0FBRCxDQUhrQztBQUFBLE1BR3JFSyxTQUhxRTtBQUFBLE1BRzFEQyxZQUgwRDs7QUFBQSxtQkFJMUNOLHNEQUFRLENBQUMsS0FBRCxDQUprQztBQUFBLE1BSXJFTyxTQUpxRTtBQUFBLE1BSTFEQyxZQUowRDs7QUFBQSxtQkFLdENSLHNEQUFRLENBQUMsS0FBRCxDQUw4QjtBQUFBLE1BS3JFUyxXQUxxRTtBQUFBLE1BS3hEQyxjQUx3RDs7QUFRNUUsV0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQWlDO0FBQy9CVixrQkFBYyxDQUFDLENBQUNVLE9BQUQsQ0FBRCxDQUFkO0FBQ0FSLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFSCxXQUFTTyxRQUFULENBQWtCQyxJQUFsQixFQUFvQ0MsS0FBcEMsRUFBbUQ7QUFDakRiLGtCQUFjLENBQUNZLElBQUQsQ0FBZDtBQUNBViwwQkFBc0IsQ0FBQ1csS0FBRCxDQUF0QjtBQUNBVCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVEOztBQUVDLFdBQVNVLFVBQVQsR0FBcUI7QUFDbkJWLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0Q7O0FBRUQsV0FBU1ksVUFBVCxHQUFxQjtBQUNuQlQsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDRDs7QUFFRCxXQUFTVyxhQUFULEdBQXdCO0FBQ3RCQyxrQkFBYyxDQUFDLENBQUNDLEtBQUYsQ0FBZDtBQUNEOztBQUVELFdBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXdDO0FBQ3RDaEIsZ0JBQVksQ0FBQ2dCLEtBQUQsQ0FBWjtBQUNEOztBQUVELE1BQU1DLFdBQVcsR0FBR3BCLG1CQUFtQixHQUFHLENBQTFDO0FBQ0EsTUFBTXFCLE9BQU8sR0FBSXJCLG1CQUFtQixHQUFHLENBQXZCLEdBQTRCRixXQUFXLENBQUN3QixNQUF4RDs7QUFFQSxXQUFTQyxRQUFULEdBQW9CO0FBQ2pCLFFBQUlGLE9BQUosRUFBWTtBQUNYcEIsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTd0IsWUFBVCxHQUF3QjtBQUN0QixRQUFJSixXQUFKLEVBQWdCO0FBQ2RuQiw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDtBQUVGOztBQUVELHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0EsU0FBSyxFQUFFO0FBQ0xGLGlCQUFXLEVBQVhBLFdBREs7QUFFTEUseUJBQW1CLEVBQW5CQSxtQkFGSztBQUdMUSxVQUFJLEVBQUpBLElBSEs7QUFJTEUsY0FBUSxFQUFSQSxRQUpLO0FBS0xhLGNBQVEsRUFBUkEsUUFMSztBQU1MQyxrQkFBWSxFQUFaQSxZQU5LO0FBT0x0QixlQUFTLEVBQVRBLFNBUEs7QUFRTEUsZUFBUyxFQUFUQSxTQVJLO0FBU0xTLGdCQUFVLEVBQVZBLFVBVEs7QUFVTEsscUJBQWUsRUFBZkEsZUFWSztBQVdMRyxhQUFPLEVBQVBBLE9BWEs7QUFZTEQsaUJBQVcsRUFBWEEsV0FaSztBQWFMTixnQkFBVSxFQUFWQTtBQWJLLEtBRFA7QUFBQSxjQWlCQ2xCO0FBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0ExRWVELHFCOztLQUFBQSxxQjtBQTRFVCxJQUFNOEIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUM3QixTQUFPQyx3REFBVSxDQUFDakMsYUFBRCxDQUFqQjtBQUNELENBRk07O0lBQU1nQyxTIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBFcGlzb2RlID0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59O1xuXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7IFxuICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gIGlzTG9vcGluZzogYm9vbGVhbjtcbiAgcGxheTooZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcbiAgcGxheUxpc3Q6KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKSA9PiB2b2lkO1xuICBzZXRQbGF5aW5nU3RhdGU6IChlcGlzb2RlOiBib29sZWFuKSA9PiB2b2lkO1xuICB0b2dnbGVQbGF5OigpID0+IHZvaWQ7ICBcbiAgdG9nZ2xlTG9vcCA6KCkgPT4gdm9pZDsgIFxuICBwbGF5TmV4dDooKSA9PiB2b2lkO1xuICBwbGF5UHJldmlvdXM6KCkgPT4gdm9pZDtcbiAgaGFzTmV4dDogYm9vbGVhbjtcbiAgaGFzUHJldmlvdXM6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU2h1ZmZMaW5nLCBzZXRJc1NodWZmTGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gXG5cbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlICkge1xuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cblxuZnVuY3Rpb24gcGxheUxpc3QobGlzdCA6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xuICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gIHNldElzUGxheWluZyh0cnVlKTtcblxufVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVMb29wKCl7XG4gICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZSgpe1xuICAgIHNldElzU2h1ZmZsaW5nKCFpc1NodSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6Ym9vbGVhbikge1xuICAgIHNldElzUGxheWluZyhzdGF0ZSk7XG4gIH1cblxuICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuICBjb25zdCBoYXNOZXh0ID0gKGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKSA8IGVwaXNvZGVMaXN0Lmxlbmd0aCBcblxuICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICAgaWYgKGhhc05leHQpeyAgXG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5UHJldmlvdXMoKSB7XG4gICAgaWYgKGhhc1ByZXZpb3VzKXtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCAtIDEpOyAgXG4gICAgfVxuICAgIFxuICB9XG4gICBcbiAgcmV0dXJuIChcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciBcbiAgICB2YWx1ZT17e1xuICAgICAgZXBpc29kZUxpc3QsIFxuICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcbiAgICAgIHBsYXksXG4gICAgICBwbGF5TGlzdCxcbiAgICAgIHBsYXlOZXh0LFxuICAgICAgcGxheVByZXZpb3VzLFxuICAgICAgaXNQbGF5aW5nLFxuICAgICAgaXNMb29waW5nLFxuICAgICAgdG9nZ2xlUGxheSwgXG4gICAgICBzZXRQbGF5aW5nU3RhdGUsXG4gICAgICBoYXNOZXh0LFxuICAgICAgaGFzUHJldmlvdXMsXG4gICAgICB0b2dnbGVMb29wLFxuICAgIH19XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})