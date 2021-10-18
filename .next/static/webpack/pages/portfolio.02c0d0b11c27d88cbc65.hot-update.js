"use strict";
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./components/PortfolioCard.js":
/*!*************************************!*\
  !*** ./components/PortfolioCard.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Desktop_Palm_Top_Website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Portfolio.module.css */ "./styles/Portfolio.module.css");
/* harmony import */ var _styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState2 = (0,E_Desktop_Palm_Top_Website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  var isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.default)(theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default().link),
        href: link,
        target: "_blank",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: src,
            alt: alt,
            width: 350,
            height: 175
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default().enlarge),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: src,
            alt: alt,
            width: 400,
            height: 200,
            onClick: function onClick() {
              return setOpen(!open);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this)
      }, void 0, false) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: src,
          alt: alt,
          width: 400,
          height: 200,
          onClick: function onClick() {
            return setOpen(!open);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default().link),
        href: link,
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 81
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_s(PortfolioCard, "CBxX7x1lZ/E6DKUlvAZHUWQNqo0=", false, function () {
  return [_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLjAyYzBkMGIxMWMyN2Q4OGNiYzY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQStCO0FBQUE7O0FBQUEsTUFBN0JDLEdBQTZCLFFBQTdCQSxHQUE2QjtBQUFBLE1BQXhCQyxHQUF3QixRQUF4QkEsR0FBd0I7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUNqRCx3QkFBd0JULDJDQUFBLENBQWUsS0FBZixDQUF4QjtBQUFBO0FBQUEsTUFBT1csSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsTUFBTUMsS0FBSyxHQUFHVCw4REFBUSxFQUF0QjtBQUNBLE1BQU1VLFFBQVEsR0FBR1gsb0VBQWEsQ0FBQ1UsS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELENBQTlCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVmLCtFQUFoQjtBQUFBLGNBQ0thLFFBQVEsZ0JBQUk7QUFBQSw2QkFDVDtBQUFHLGlCQUFTLEVBQUViLDBFQUFkO0FBQW9DLFlBQUksRUFBRVEsSUFBMUM7QUFBZ0QsY0FBTSxFQUFDLFFBQXZEO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFUix5RUFBaEI7QUFBQSxpQ0FDSSw4REFBQyxtREFBRDtBQUNJLGVBQUcsRUFBRUssR0FEVDtBQUVJLGVBQUcsRUFBRUMsR0FGVDtBQUdJLGlCQUFLLEVBQUUsR0FIWDtBQUlJLGtCQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVNJO0FBQUEsb0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUyxxQkFBSixnQkFZRDtBQUFBLGlCQUNIRyxJQUFJLGdCQUFJO0FBQUEsK0JBQ0w7QUFBSyxtQkFBUyxFQUFFViw2RUFBaEI7QUFBQSxpQ0FDSSw4REFBQyxtREFBRDtBQUNJLGVBQUcsRUFBRUssR0FEVDtBQUVJLGVBQUcsRUFBRUMsR0FGVDtBQUdJLGlCQUFLLEVBQUUsR0FIWDtBQUlJLGtCQUFNLEVBQUUsR0FKWjtBQUtJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUssT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESyx1QkFBSixHQVVFLElBWEgsZUFZSjtBQUFLLGlCQUFTLEVBQUVWLHlFQUFoQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQ0ksYUFBRyxFQUFFSyxHQURUO0FBRUksYUFBRyxFQUFFQyxHQUZUO0FBR0ksZUFBSyxFQUFFLEdBSFg7QUFJSSxnQkFBTSxFQUFFLEdBSlo7QUFLSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1LLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQTtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkksZUFxQko7QUFBRyxpQkFBUyxFQUFFViwwRUFBZDtBQUFvQyxZQUFJLEVBQUVRLElBQTFDO0FBQWdELGNBQU0sRUFBQyxRQUF2RDtBQUFBLCtCQUFnRTtBQUFBLG9CQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSTtBQUFBO0FBYlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUNILENBN0NEOztHQUFNSDtVQUdZRCw0REFDR0Q7OztLQUpmRTtBQStDTiwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BvcnRmb2xpb0NhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXNQb3J0Zm9saW8gZnJvbSAnLi4vc3R5bGVzL1BvcnRmb2xpby5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG5jb25zdCBQb3J0Zm9saW9DYXJkID0gKHtzcmMsIGFsdCwgY29tcGFueSwgbGlua30pID0+IHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNQb3J0Zm9saW8uY29udGFpbmVyfT5cclxuICAgICAgICAgICAge2lzTW9iaWxlID8gKDw+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5saW5rfSBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57Y29tcGFueX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8Lz4pIDogKDw+XHJcbiAgICAgICAgICAgICAgICB7b3BlbiA/ICg8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNQb3J0Zm9saW8uZW5sYXJnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPikgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXNQb3J0Zm9saW8ubGlua30gaHJlZj17bGlua30gdGFyZ2V0PSdfYmxhbmsnPjxoMz57Y29tcGFueX08L2gzPjwvYT5cclxuICAgICAgICAgICAgPC8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvQ2FyZFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXNQb3J0Zm9saW8iLCJJbWFnZSIsInVzZU1lZGlhUXVlcnkiLCJ1c2VUaGVtZSIsIlBvcnRmb2xpb0NhcmQiLCJzcmMiLCJhbHQiLCJjb21wYW55IiwibGluayIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJ0aGVtZSIsImlzTW9iaWxlIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiY29udGFpbmVyIiwiaW1nIiwiZW5sYXJnZSJdLCJzb3VyY2VSb290IjoiIn0=