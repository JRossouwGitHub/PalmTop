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
    children: isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),
        href: link,
        target: "_blank",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4___default().img),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: src,
            alt: alt,
            width: 350,
            height: 175
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4___default().img),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: src,
          alt: alt,
          width: 400,
          height: 200
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),
        href: link,
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 81
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLjQ3OTBlYzQyNTk3YzA0ODAyMmU5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBK0I7QUFBQTs7QUFBQSxNQUE3QkMsR0FBNkIsUUFBN0JBLEdBQTZCO0FBQUEsTUFBeEJDLEdBQXdCLFFBQXhCQSxHQUF3QjtBQUFBLE1BQW5CQyxPQUFtQixRQUFuQkEsT0FBbUI7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDakQsTUFBTUMsS0FBSyxHQUFHTiw4REFBUSxFQUF0QjtBQUNBLE1BQU1PLFFBQVEsR0FBR1Isb0VBQWEsQ0FBQ08sS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELENBQTlCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVaLCtFQUFoQjtBQUFBLGNBQ0tVLFFBQVEsZ0JBQUk7QUFBQSw2QkFDVDtBQUFHLGlCQUFTLEVBQUVWLDBFQUFkO0FBQW9DLFlBQUksRUFBRVEsSUFBMUM7QUFBZ0QsY0FBTSxFQUFDLFFBQXZEO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFUix5RUFBaEI7QUFBQSxpQ0FDSSw4REFBQyxtREFBRDtBQUNJLGVBQUcsRUFBRUssR0FEVDtBQUVJLGVBQUcsRUFBRUMsR0FGVDtBQUdJLGlCQUFLLEVBQUUsR0FIWDtBQUlJLGtCQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVNJO0FBQUEsb0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUyxxQkFBSixnQkFZRDtBQUFBLDhCQUNKO0FBQUssaUJBQVMsRUFBRVAseUVBQWhCO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFDSSxhQUFHLEVBQUVLLEdBRFQ7QUFFSSxhQUFHLEVBQUVDLEdBRlQ7QUFHSSxlQUFLLEVBQUUsR0FIWDtBQUlJLGdCQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURJLGVBU0o7QUFBRyxpQkFBUyxFQUFFTiwwRUFBZDtBQUFvQyxZQUFJLEVBQUVRLElBQTFDO0FBQWdELGNBQU0sRUFBQyxRQUF2RDtBQUFBLCtCQUFnRTtBQUFBLG9CQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRJO0FBQUE7QUFiWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEyQkgsQ0EvQkQ7O0dBQU1IO1VBQ1lELDREQUNHRDs7O0tBRmZFO0FBaUNOLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9ydGZvbGlvQ2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzUG9ydGZvbGlvIGZyb20gJy4uL3N0eWxlcy9Qb3J0Zm9saW8ubW9kdWxlLmNzcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvQ2FyZCA9ICh7c3JjLCBhbHQsIGNvbXBhbnksIGxpbmt9KSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzUG9ydGZvbGlvLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtpc01vYmlsZSA/ICg8PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXNQb3J0Zm9saW8ubGlua30gaHJlZj17bGlua30gdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNQb3J0Zm9saW8uaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTc1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2NvbXBhbnl9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC8+KSA6ICg8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5saW5rfSBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuayc+PGgzPntjb21wYW55fTwvaDM+PC9hPlxyXG4gICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9DYXJkXHJcbiJdLCJuYW1lcyI6WyJzdHlsZXNQb3J0Zm9saW8iLCJJbWFnZSIsInVzZU1lZGlhUXVlcnkiLCJ1c2VUaGVtZSIsIlBvcnRmb2xpb0NhcmQiLCJzcmMiLCJhbHQiLCJjb21wYW55IiwibGluayIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJjb250YWluZXIiLCJpbWciXSwic291cmNlUm9vdCI6IiJ9