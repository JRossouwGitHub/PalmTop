"use strict";
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Layout.module.css */ "./styles/Layout.module.css");
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_PortfolioCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PortfolioCard */ "./components/PortfolioCard.js");
/* harmony import */ var _img_ElectricAir_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/ElectricAir.PNG */ "./img/ElectricAir.PNG");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\pages\\portfolio.js",
    _this = undefined,
    _s = $RefreshSig$();











var portfolio = function portfolio() {
  _s();

  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  var isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default)(theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "PalmTop | Portfolio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().root),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_PortfolioCard__WEBPACK_IMPORTED_MODULE_2__.default, {
          src: _img_ElectricAir_PNG__WEBPACK_IMPORTED_MODULE_3__.default,
          alt: 'Electric Air Img',
          company: 'Electric Air',
          link: 'www.electricair.co.nz'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), isMobile ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 36
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(portfolio, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default];
});

/* harmony default export */ __webpack_exports__["default"] = (portfolio);

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


/***/ }),

/***/ "./img/ElectricAir.PNG":
/*!*****************************!*\
  !*** ./img/ElectricAir.PNG ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/img/ElectricAir.c121736e773491c38736dc1fcf286afe.PNG","height":940,"width":1879});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLjRlMTg3ZGY0NGY3NTg0OTVmYzI4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixNQUFNQyxLQUFLLEdBQUdOLDhEQUFRLEVBQXRCO0FBQ0EsTUFBTU8sUUFBUSxHQUFHUixvRUFBYSxDQUFDTyxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FBOUI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQU0sV0FBSyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUVYLHVFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsNEVBQWhCO0FBQUEsK0JBQ0ksOERBQUMsOERBQUQ7QUFBZSxhQUFHLEVBQUVNLHlEQUFwQjtBQUFpQyxhQUFHLEVBQUUsa0JBQXRDO0FBQTBELGlCQUFPLEVBQUUsY0FBbkU7QUFBbUYsY0FBSSxFQUFFO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFJS0csUUFBUSxHQUFHLElBQUgsZ0JBQVUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLGtCQURKO0FBV0gsQ0FmRDs7R0FBTUY7VUFDWUwsNERBQ0dEOzs7QUFlckIsK0RBQWVNLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkEsK0RBQWUsQ0FBQywyR0FBMkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvLmpzIiwid2VicGFjazovL19OX0UvLi9pbWcvRWxlY3RyaWNBaXIuUE5HIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbXVpL21hdGVyaWFsL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJ1xyXG5pbXBvcnQgUG9ydGZvbGlvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1BvcnRmb2xpb0NhcmQnO1xyXG5pbXBvcnQgRWxlY3RyaWNBaXIgZnJvbSAnLi4vaW1nL0VsZWN0cmljQWlyLlBORydcclxuXHJcbmNvbnN0IHBvcnRmb2xpbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZXRhIHRpdGxlPSdQYWxtVG9wIHwgUG9ydGZvbGlvJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW9DYXJkIHNyYz17RWxlY3RyaWNBaXJ9IGFsdD17J0VsZWN0cmljIEFpciBJbWcnfSBjb21wYW55PXsnRWxlY3RyaWMgQWlyJ30gbGluaz17J3d3dy5lbGVjdHJpY2Fpci5jby5ueid9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/IG51bGwgOiA8Rm9vdGVyIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9ydGZvbGlvXHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWcvRWxlY3RyaWNBaXIuYzEyMTczNmU3NzM0OTFjMzg3MzZkYzFmY2YyODZhZmUuUE5HXCIsXCJoZWlnaHRcIjo5NDAsXCJ3aWR0aFwiOjE4Nzl9OyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlVGhlbWUiLCJGb290ZXIiLCJNZXRhIiwiUG9ydGZvbGlvQ2FyZCIsIkVsZWN0cmljQWlyIiwicG9ydGZvbGlvIiwidGhlbWUiLCJpc01vYmlsZSIsImJyZWFrcG9pbnRzIiwiZG93biIsInJvb3QiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9