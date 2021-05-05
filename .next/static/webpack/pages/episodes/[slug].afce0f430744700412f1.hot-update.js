webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/thamyrismila/Documentos/Projetos/nlw05/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (isShuffling) {} else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      toggleShuffle: toggleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"YSXWY8OfLfVxd5To+FHcHi+GAY0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImxlbmd0aCIsInBsYXlOZXh0IiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUF1RTtBQUFBOztBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7O0FBQUEsa0JBQ3RDQyxzREFBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUNyRUMsV0FEcUU7QUFBQSxNQUN4REMsY0FEd0Q7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLENBQUQsQ0FGYztBQUFBLE1BRXJFRyxtQkFGcUU7QUFBQSxNQUVoREMsc0JBRmdEOztBQUFBLG1CQUcxQ0osc0RBQVEsQ0FBQyxLQUFELENBSGtDO0FBQUEsTUFHckVLLFNBSHFFO0FBQUEsTUFHMURDLFlBSDBEOztBQUFBLG1CQUkxQ04sc0RBQVEsQ0FBQyxLQUFELENBSmtDO0FBQUEsTUFJckVPLFNBSnFFO0FBQUEsTUFJMURDLFlBSjBEOztBQUFBLG1CQUt0Q1Isc0RBQVEsQ0FBQyxLQUFELENBTDhCO0FBQUEsTUFLckVTLFdBTHFFO0FBQUEsTUFLeERDLGNBTHdEOztBQVE1RSxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBaUM7QUFDL0JWLGtCQUFjLENBQUMsQ0FBQ1UsT0FBRCxDQUFELENBQWQ7QUFDQVIsMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUVILFdBQVNPLFFBQVQsQ0FBa0JDLElBQWxCLEVBQW9DQyxLQUFwQyxFQUFtRDtBQUNqRGIsa0JBQWMsQ0FBQ1ksSUFBRCxDQUFkO0FBQ0FWLDBCQUFzQixDQUFDVyxLQUFELENBQXRCO0FBQ0FULGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBRUQ7O0FBRUMsV0FBU1UsVUFBVCxHQUFxQjtBQUNuQlYsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDRDs7QUFFRCxXQUFTWSxVQUFULEdBQXFCO0FBQ25CVCxnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUVELFdBQVNXLGFBQVQsR0FBd0I7QUFDdEJSLGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0Q7O0FBRUQsV0FBU1UsZUFBVCxDQUF5QkMsS0FBekIsRUFBd0M7QUFDdENkLGdCQUFZLENBQUNjLEtBQUQsQ0FBWjtBQUNEOztBQUVELE1BQU1DLFdBQVcsR0FBR2xCLG1CQUFtQixHQUFHLENBQTFDO0FBQ0EsTUFBTW1CLE9BQU8sR0FBSW5CLG1CQUFtQixHQUFHLENBQXZCLEdBQTRCRixXQUFXLENBQUNzQixNQUF4RDs7QUFFQSxXQUFTQyxRQUFULEdBQW9CO0FBQ2xCLFFBQUlmLFdBQUosRUFBaUIsQ0FFaEIsQ0FGRCxNQUVRLElBQUlhLE9BQUosRUFBWTtBQUNsQmxCLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU3NCLFlBQVQsR0FBd0I7QUFDdEIsUUFBSUosV0FBSixFQUFnQjtBQUNkakIsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0Q7QUFFRjs7QUFFRCxzQkFDRSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUNBLFNBQUssRUFBRTtBQUNMRixpQkFBVyxFQUFYQSxXQURLO0FBRUxFLHlCQUFtQixFQUFuQkEsbUJBRks7QUFHTFEsVUFBSSxFQUFKQSxJQUhLO0FBSUxFLGNBQVEsRUFBUkEsUUFKSztBQUtMVyxjQUFRLEVBQVJBLFFBTEs7QUFNTEMsa0JBQVksRUFBWkEsWUFOSztBQU9McEIsZUFBUyxFQUFUQSxTQVBLO0FBUUxFLGVBQVMsRUFBVEEsU0FSSztBQVNMRSxpQkFBVyxFQUFYQSxXQVRLO0FBVUxPLGdCQUFVLEVBQVZBLFVBVks7QUFXTEcscUJBQWUsRUFBZkEsZUFYSztBQVlMRyxhQUFPLEVBQVBBLE9BWks7QUFhTEQsaUJBQVcsRUFBWEEsV0FiSztBQWNMSixnQkFBVSxFQUFWQSxVQWRLO0FBZUxDLG1CQUFhLEVBQWJBO0FBZkssS0FEUDtBQUFBLGNBbUJDbkI7QUFuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQTlFZUQscUI7O0tBQUFBLHFCO0FBZ0ZULElBQU00QixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzdCLFNBQU9DLHdEQUFVLENBQUMvQixhQUFELENBQWpCO0FBQ0QsQ0FGTTs7SUFBTThCLFMiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvUGxheWVyQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZW1iZXJzOiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbn07XG5cbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XG4gIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XG4gIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjsgXG4gIGlzUGxheWluZzogYm9vbGVhbjtcbiAgaXNMb29waW5nOiBib29sZWFuO1xuICBpc1NodWZmbGluZzogYm9vbGVhbjtcbiAgcGxheTooZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcbiAgcGxheUxpc3Q6KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKSA9PiB2b2lkO1xuICBzZXRQbGF5aW5nU3RhdGU6IChlcGlzb2RlOiBib29sZWFuKSA9PiB2b2lkO1xuICB0b2dnbGVQbGF5OigpID0+IHZvaWQ7ICBcbiAgdG9nZ2xlTG9vcCA6KCkgPT4gdm9pZDtcbiAgdG9nZ2xlU2h1ZmZsZTooKSA9PiB2b2lkOyAgICBcbiAgcGxheU5leHQ6KCkgPT4gdm9pZDtcbiAgcGxheVByZXZpb3VzOigpID0+IHZvaWQ7XG4gIGhhc05leHQ6IGJvb2xlYW47XG4gIGhhc1ByZXZpb3VzOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1NodWZmbGluZywgc2V0SXNTaHVmZmxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuXG4gIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSApIHtcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICB9XG5cbmZ1bmN0aW9uIHBsYXlMaXN0KGxpc3QgOiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcbiAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG5cbn1cblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5KCl7XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpe1xuICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKXtcbiAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOmJvb2xlYW4pIHtcbiAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xuICB9XG5cbiAgY29uc3QgaGFzUHJldmlvdXMgPSBjdXJyZW50RXBpc29kZUluZGV4ID4gMDtcbiAgY29uc3QgaGFzTmV4dCA9IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBlcGlzb2RlTGlzdC5sZW5ndGggXG5cbiAgZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgaWYgKGlzU2h1ZmZsaW5nKSB7XG4gICAgICAgXG4gICAgfSBlbHNlICBpZiAoaGFzTmV4dCl7ICBcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICBpZiAoaGFzUHJldmlvdXMpe1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7ICBcbiAgICB9XG4gICAgXG4gIH1cbiAgIFxuICByZXR1cm4gKFxuICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIFxuICAgIHZhbHVlPXt7XG4gICAgICBlcGlzb2RlTGlzdCwgXG4gICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgICAgcGxheSxcbiAgICAgIHBsYXlMaXN0LFxuICAgICAgcGxheU5leHQsXG4gICAgICBwbGF5UHJldmlvdXMsXG4gICAgICBpc1BsYXlpbmcsXG4gICAgICBpc0xvb3BpbmcsXG4gICAgICBpc1NodWZmbGluZyxcbiAgICAgIHRvZ2dsZVBsYXksIFxuICAgICAgc2V0UGxheWluZ1N0YXRlLFxuICAgICAgaGFzTmV4dCxcbiAgICAgIGhhc1ByZXZpb3VzLFxuICAgICAgdG9nZ2xlTG9vcCxcbiAgICAgIHRvZ2dsZVNodWZmbGVcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBsYXllciA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})