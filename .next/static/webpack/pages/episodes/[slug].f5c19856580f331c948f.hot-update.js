webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffLing = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toggleShuffle() {\n    setIsShuffLing(!isShuffLing);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      toggleShuffle: toggleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"FKulwjrJ/LMi3Oq/nTzQt9v+YuA=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmTGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJpc1NodWZmTGluZyIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBMkJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLFNBQVNDLHFCQUFULE9BQXVFO0FBQUE7O0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1Qzs7QUFBQSxrQkFDdENDLHNEQUFRLENBQUMsRUFBRCxDQUQ4QjtBQUFBLE1BQ3JFQyxXQURxRTtBQUFBLE1BQ3hEQyxjQUR3RDs7QUFBQSxtQkFFdEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZjO0FBQUEsTUFFckVHLG1CQUZxRTtBQUFBLE1BRWhEQyxzQkFGZ0Q7O0FBQUEsbUJBRzFDSixzREFBUSxDQUFDLEtBQUQsQ0FIa0M7QUFBQSxNQUdyRUssU0FIcUU7QUFBQSxNQUcxREMsWUFIMEQ7O0FBQUEsbUJBSTFDTixzREFBUSxDQUFDLEtBQUQsQ0FKa0M7QUFBQSxNQUlyRU8sU0FKcUU7QUFBQSxNQUkxREMsWUFKMEQ7O0FBQUEsbUJBS3RDUixzREFBUSxDQUFDLEtBQUQsQ0FMOEI7QUFBQSxNQUtyRVMsV0FMcUU7QUFBQSxNQUt4REMsY0FMd0Q7O0FBUTVFLFdBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUFpQztBQUMvQlYsa0JBQWMsQ0FBQyxDQUFDVSxPQUFELENBQUQsQ0FBZDtBQUNBUiwwQkFBc0IsQ0FBQyxDQUFELENBQXRCO0FBQ0FFLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7O0FBRUgsV0FBU08sUUFBVCxDQUFrQkMsSUFBbEIsRUFBb0NDLEtBQXBDLEVBQW1EO0FBQ2pEYixrQkFBYyxDQUFDWSxJQUFELENBQWQ7QUFDQVYsMEJBQXNCLENBQUNXLEtBQUQsQ0FBdEI7QUFDQVQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFFRDs7QUFFQyxXQUFTVSxVQUFULEdBQXFCO0FBQ25CVixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUVELFdBQVNZLFVBQVQsR0FBcUI7QUFDbkJULGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0Q7O0FBRUQsV0FBU1csYUFBVCxHQUF3QjtBQUN0QlIsa0JBQWMsQ0FBQyxDQUFDUyxXQUFGLENBQWQ7QUFDRDs7QUFFRCxXQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUF3QztBQUN0Q2YsZ0JBQVksQ0FBQ2UsS0FBRCxDQUFaO0FBQ0Q7O0FBRUQsTUFBTUMsV0FBVyxHQUFHbkIsbUJBQW1CLEdBQUcsQ0FBMUM7QUFDQSxNQUFNb0IsT0FBTyxHQUFJcEIsbUJBQW1CLEdBQUcsQ0FBdkIsR0FBNEJGLFdBQVcsQ0FBQ3VCLE1BQXhEOztBQUVBLFdBQVNDLFFBQVQsR0FBb0I7QUFDakIsUUFBSUYsT0FBSixFQUFZO0FBQ1huQiw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDtBQUNGOztBQUVELFdBQVN1QixZQUFULEdBQXdCO0FBQ3RCLFFBQUlKLFdBQUosRUFBZ0I7QUFDZGxCLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNEO0FBRUY7O0FBRUQsc0JBQ0UscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFDQSxTQUFLLEVBQUU7QUFDTEYsaUJBQVcsRUFBWEEsV0FESztBQUVMRSx5QkFBbUIsRUFBbkJBLG1CQUZLO0FBR0xRLFVBQUksRUFBSkEsSUFISztBQUlMRSxjQUFRLEVBQVJBLFFBSks7QUFLTFksY0FBUSxFQUFSQSxRQUxLO0FBTUxDLGtCQUFZLEVBQVpBLFlBTks7QUFPTHJCLGVBQVMsRUFBVEEsU0FQSztBQVFMRSxlQUFTLEVBQVRBLFNBUks7QUFTTEUsaUJBQVcsRUFBWEEsV0FUSztBQVVMTyxnQkFBVSxFQUFWQSxVQVZLO0FBV0xJLHFCQUFlLEVBQWZBLGVBWEs7QUFZTEcsYUFBTyxFQUFQQSxPQVpLO0FBYUxELGlCQUFXLEVBQVhBLFdBYks7QUFjTEwsZ0JBQVUsRUFBVkEsVUFkSztBQWVMQyxtQkFBYSxFQUFiQTtBQWZLLEtBRFA7QUFBQSxjQW1CQ25CO0FBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7R0E1RWVELHFCOztLQUFBQSxxQjtBQThFVCxJQUFNNkIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUM3QixTQUFPQyx3REFBVSxDQUFDaEMsYUFBRCxDQUFqQjtBQUNELENBRk07O0lBQU0rQixTIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBFcGlzb2RlID0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59O1xuXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7IFxuICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gIGlzTG9vcGluZzogYm9vbGVhbjtcbiAgcGxheTooZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcbiAgcGxheUxpc3Q6KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKSA9PiB2b2lkO1xuICBzZXRQbGF5aW5nU3RhdGU6IChlcGlzb2RlOiBib29sZWFuKSA9PiB2b2lkO1xuICB0b2dnbGVQbGF5OigpID0+IHZvaWQ7ICBcbiAgdG9nZ2xlTG9vcCA6KCkgPT4gdm9pZDtcbiAgdG9nZ2xlU2h1ZmZsZTooKSA9PiB2b2lkOyAgICBcbiAgcGxheU5leHQ6KCkgPT4gdm9pZDtcbiAgcGxheVByZXZpb3VzOigpID0+IHZvaWQ7XG4gIGhhc05leHQ6IGJvb2xlYW47XG4gIGhhc1ByZXZpb3VzOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1NodWZmbGluZywgc2V0SXNTaHVmZkxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuXG4gIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSApIHtcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICB9XG5cbmZ1bmN0aW9uIHBsYXlMaXN0KGxpc3QgOiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcbiAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG5cbn1cblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5KCl7XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpe1xuICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKXtcbiAgICBzZXRJc1NodWZmTGluZyghaXNTaHVmZkxpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOmJvb2xlYW4pIHtcbiAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xuICB9XG5cbiAgY29uc3QgaGFzUHJldmlvdXMgPSBjdXJyZW50RXBpc29kZUluZGV4ID4gMDtcbiAgY29uc3QgaGFzTmV4dCA9IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBlcGlzb2RlTGlzdC5sZW5ndGggXG5cbiAgZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgIGlmIChoYXNOZXh0KXsgIFxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xuICAgIGlmIChoYXNQcmV2aW91cyl7XG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKTsgIFxuICAgIH1cbiAgICBcbiAgfVxuICAgXG4gIHJldHVybiAoXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXG4gICAgdmFsdWU9e3tcbiAgICAgIGVwaXNvZGVMaXN0LCBcbiAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gICAgICBwbGF5LFxuICAgICAgcGxheUxpc3QsXG4gICAgICBwbGF5TmV4dCxcbiAgICAgIHBsYXlQcmV2aW91cyxcbiAgICAgIGlzUGxheWluZyxcbiAgICAgIGlzTG9vcGluZyxcbiAgICAgIGlzU2h1ZmZsaW5nLFxuICAgICAgdG9nZ2xlUGxheSwgXG4gICAgICBzZXRQbGF5aW5nU3RhdGUsXG4gICAgICBoYXNOZXh0LFxuICAgICAgaGFzUHJldmlvdXMsXG4gICAgICB0b2dnbGVMb29wLFxuICAgICAgdG9nZ2xlU2h1ZmZsZVxuICAgIH19XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ }),

/***/ "./src/pages/episodes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/episodes/[slug].tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Episode; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../episode.module.scss */ \"./src/pages/episode.module.scss\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/pages/episodes/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Episode(_ref) {\n  _s();\n\n  var episode = _ref.episode;\n\n  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__[\"usePlayer\"])(),\n      play = _usePlayer.play;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.episode,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.thumbnailContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/arrow-left.svg\",\n            alt: \"Voltar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 20\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 700,\n        height: 160,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: function onClick() {\n          return play(episode);\n        },\n        children: [\"                 \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/play.svg\",\n          alt: \"Tocar epis\\xF3dio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 87\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 18\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.publishedAd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.durationAsString\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,\n      dangerouslySetInnerHTML: {\n        __html: episode.description\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 10\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Episode, \"mptMREsNBTdRfLLVAN69g5qilFU=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__[\"usePlayer\"]];\n});\n\n_c = Episode;\n\nvar _c;\n\n$RefreshReg$(_c, \"Episode\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3g/ZjgyMSJdLCJuYW1lcyI6WyJFcGlzb2RlIiwiZXBpc29kZSIsInVzZVBsYXllciIsInBsYXkiLCJzdHlsZXMiLCJ0aHVtYm5haWxDb250YWluZXIiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBZCIsImR1cmF0aW9uQXNTdHJpbmciLCJkZXNjcmlwdGlvbiIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBT0E7QUFDQTs7QUFrQmUsU0FBU0EsT0FBVCxPQUEwQztBQUFBOztBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7O0FBQUEsbUJBQ3JDQyx5RUFBUyxFQUQ0QjtBQUFBLE1BQzlDQyxJQUQ4QyxjQUM5Q0EsSUFEOEM7O0FBR3BELHNCQUNHO0FBQUssYUFBUyxFQUFFQywyREFBTSxDQUFDSCxPQUF2QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFRywyREFBTSxDQUFDQyxrQkFBdkI7QUFBQSw4QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0E7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBLGlDQUNHO0FBQUssZUFBRyxFQUFDLGlCQUFUO0FBQTJCLGVBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU1JLHFFQUFDLGlEQUFEO0FBQ0MsYUFBSyxFQUFFLEdBRFI7QUFFQyxjQUFNLEVBQUUsR0FGVDtBQUdDLFdBQUcsRUFBRUosT0FBTyxDQUFDSyxTQUhkO0FBSUMsaUJBQVMsRUFBQztBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQVlLO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFO0FBQUEsaUJBQU1ILElBQUksQ0FBQ0YsT0FBRCxDQUFWO0FBQUEsU0FBL0I7QUFBQSxxREFBcUU7QUFBSyxhQUFHLEVBQUMsV0FBVDtBQUFxQixhQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFpQkk7QUFBQSw4QkFDSTtBQUFBLGtCQUFLQSxPQUFPLENBQUNNO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxrQkFBT04sT0FBTyxDQUFDTztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUEsa0JBQU9QLE9BQU8sQ0FBQ1E7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSTtBQUFBLGtCQUFPUixPQUFPLENBQUNTO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixlQXdCQztBQUNHLGVBQVMsRUFBRU4sMkRBQU0sQ0FBQ08sV0FEckI7QUFFRyw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUNYLE9BQU8sQ0FBQ1U7QUFBakI7QUFGNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQWlDSjs7R0FwQ3VCWCxPO1VBQ0pFLGlFOzs7S0FESUYsTyIsImZpbGUiOiIuL3NyYy9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTT30gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcicgXG5pbXBvcnQge0dldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wc30gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCB7YXBpfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknOyBcbmltcG9ydCB7Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nfSBmcm9tICcuLi8uLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2VwaXNvZGUubW9kdWxlLnNjc3MnOyBcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICAgIG1lbWJlcnM6IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBwdWJsaXNoZWRBZDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIEVwaXNvZGVQcm9wcyA9IHsgXG4gICAgZXBpc29kZTogRXBpc29kZTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcGlzb2RlKHtlcGlzb2RlfTogRXBpc29kZVByb3BzKSB7XG4gICBjb25zdCB7IHBsYXkgfSA9IHVzZVBsYXllcigpO1xuXG4gICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cIlZvbHRhclwiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICB3aWR0aD17NzAwfSBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNjB9IFxuICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfSAgXG4gICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgLz4gICAgICBcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcGxheShlcGlzb2RlKX0+ICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyIGVwaXPDs2Rpb1wiLz5cbiAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aDE+e2VwaXNvZGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3NwYW4+IFxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gXG4gICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ZXBpc29kZS5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocz0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJyx7XG4gICAgICAgIHBhcmFtczp7XG4gICAgICAgIF9saW1pdDogMTIsXG4gICAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcbiAgICAgICAgX29yZGVyOiAnZGVzYydcbiAgICAgIH1cbiAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgc2x1ZzogZXBpc29kZS5pZFxuICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZydcbiAgICB9XG4gICAgLy8gaW5jcmVtZW50YXIgc3RhdGljIHJlZ2VuZXJhdGlvblxufVxuICBcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY3R4LnBhcmFtcztcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KGAvZXBpc29kZXMvJHtzbHVnfWApXG5cbiAgY29uc3QgZXBpc29kZSA9ICB7XG4gICAgaWQ6IGRhdGEuaWQsXG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgdGh1bWJuYWlsOiBkYXRhLnRodW1ibmFpbCxcbiAgICBtZW1iZXJzOiBkYXRhLm1lbWJlcnMsXG4gICAgcHVibGlzaGVkQXQ6Zm9ybWF0KHBhcnNlSVNPKGRhdGEucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5Jywge2xvY2FsZTpwdEJSIH0pLFxuICAgIGR1cmF0aW9uOiBOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSxcbiAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGRhdGEuZmlsZS5kdXJhdGlvbikpLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgIHVybDogZGF0YS5maWxlLnVybCxcblxuICB9O1xuXG5cbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBlcGlzb2RlLFxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvcmFzIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/episodes/[slug].tsx\n");

/***/ })

})