"use strict";
self["webpackHotUpdate_N_E"]("pages/services",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Footer.module.css */ "./styles/Footer.module.css");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Facebook */ "./node_modules/@mui/icons-material/Facebook.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\components\\Footer.js",
    _this = undefined,
    _s = $RefreshSig$();








var Footer = function Footer() {
  _s();

  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  var isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__.default)(theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),
    children: ["\xA9 Copyright 2021, PalmTop.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 20
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://www.facebook.com/PalmTop-101941725590593",
      target: "_blank",
      children: !isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
          fontSize: "large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this)
      }, void 0, false) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(Footer, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuYWY5NzE2NWFjNGI0YzBkMGQxMTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLEtBQUssR0FBR0gsOERBQVEsRUFBdEI7QUFDQSxNQUFNSSxRQUFRLEdBQUdMLG9FQUFhLENBQUNJLEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5QjtBQUVBLHNCQUNJO0FBQVEsYUFBUyxFQUFFUix5RUFBbkI7QUFBQSw2REFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosb0JBRVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZYLGVBR0k7QUFBRyxVQUFJLEVBQUMsa0RBQVI7QUFBMkQsWUFBTSxFQUFDLFFBQWxFO0FBQUEsZ0JBQ0ssQ0FBQ00sUUFBRCxnQkFBYTtBQUFBLCtCQUNWLDhEQUFDLGlFQUFEO0FBQWMsbUJBQVMsRUFBRU4sdUVBQXpCO0FBQXNDLGtCQUFRLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURVLHVCQUFiLEdBRU07QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQWZEOztHQUFNSTtVQUNZRiw0REFDR0Q7OztLQUZmRztBQWlCTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYWNlYm9vayc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQgMjAyMSwgUGFsbVRvcC5cclxuICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1BhbG1Ub3AtMTAxOTQxNzI1NTkwNTkzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICB7IWlzTW9iaWxlID8gKDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBmb250U2l6ZT0nbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz4pIDogbnVsbH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZU1lZGlhUXVlcnkiLCJ1c2VUaGVtZSIsIkZhY2Vib29rSWNvbiIsIkZvb3RlciIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJmb290ZXIiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==