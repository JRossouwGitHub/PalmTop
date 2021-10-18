"use strict";
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./components/PortfolioCard.js":
/*!*************************************!*\
  !*** ./components/PortfolioCard.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Portfolio.module.css */ "./styles/Portfolio.module.css");
/* harmony import */ var _styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\components\\PortfolioCard.js",
    _this = undefined,
    _s = $RefreshSig$();








var PortfolioCard = function PortfolioCard(_ref) {
  _s();

  var src = _ref.src,
      alt = _ref.alt,
      company = _ref.company,
      link = _ref.link;
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  var isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__.default)(theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4___default().img),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: src,
          alt: alt,
          width: 400,
          height: 200
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),
        href: link,
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 81
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(PortfolioCard, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = PortfolioCard;
/* harmony default export */ __webpack_exports__["default"] = (PortfolioCard);

var _c;

$RefreshReg$(_c, "PortfolioCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLmMxY2IwNThhNzNmMDNhZjJlNWU3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBK0I7QUFBQTs7QUFBQSxNQUE3QkMsR0FBNkIsUUFBN0JBLEdBQTZCO0FBQUEsTUFBeEJDLEdBQXdCLFFBQXhCQSxHQUF3QjtBQUFBLE1BQW5CQyxPQUFtQixRQUFuQkEsT0FBbUI7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDakQsTUFBTUMsS0FBSyxHQUFHTiw4REFBUSxFQUF0QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Isb0VBQWEsQ0FBQ08sS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELENBQTlCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVaLCtFQUFoQjtBQUFBLGNBQ0tVLFFBQVEsZ0JBQUksNklBQUosZ0JBQWM7QUFBQSw4QkFDbkI7QUFBSyxpQkFBUyxFQUFFVix5RUFBaEI7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUNJLGFBQUcsRUFBRUssR0FEVDtBQUVJLGFBQUcsRUFBRUMsR0FGVDtBQUdJLGVBQUssRUFBRSxHQUhYO0FBSUksZ0JBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG1CLGVBU25CO0FBQUcsaUJBQVMsRUFBRU4sMEVBQWQ7QUFBb0MsWUFBSSxFQUFFUSxJQUExQztBQUFnRCxjQUFNLEVBQUMsUUFBdkQ7QUFBQSwrQkFBZ0U7QUFBQSxvQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUbUI7QUFBQTtBQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQW5CRDs7R0FBTUg7VUFDWUQsNERBQ0dEOzs7S0FGZkU7QUFxQk4sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3J0Zm9saW9DYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXNQb3J0Zm9saW8gZnJvbSAnLi4vc3R5bGVzL1BvcnRmb2xpby5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG5jb25zdCBQb3J0Zm9saW9DYXJkID0gKHtzcmMsIGFsdCwgY29tcGFueSwgbGlua30pID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNQb3J0Zm9saW8uY29udGFpbmVyfT5cclxuICAgICAgICAgICAge2lzTW9iaWxlID8gKDw+PC8+KSA6ICg8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5saW5rfSBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuayc+PGgzPntjb21wYW55fTwvaDM+PC9hPlxyXG4gICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9DYXJkXHJcbiJdLCJuYW1lcyI6WyJzdHlsZXNQb3J0Zm9saW8iLCJJbWFnZSIsInVzZU1lZGlhUXVlcnkiLCJ1c2VUaGVtZSIsIlBvcnRmb2xpb0NhcmQiLCJzcmMiLCJhbHQiLCJjb21wYW55IiwibGluayIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJjb250YWluZXIiLCJpbWciXSwic291cmNlUm9vdCI6IiJ9