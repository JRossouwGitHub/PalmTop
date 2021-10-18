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
          onClick: function onClick() {
            return setOpen(!open);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default().enlargeImg),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: src,
              alt: alt,
              width: 1000,
              height: 500
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, _this)
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
          lineNumber: 41,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: (_styles_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_6___default().link),
        href: link,
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 81
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLjQwZDQ1NGU2N2Q3ZDA2MjkxMDJjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQStCO0FBQUE7O0FBQUEsTUFBN0JDLEdBQTZCLFFBQTdCQSxHQUE2QjtBQUFBLE1BQXhCQyxHQUF3QixRQUF4QkEsR0FBd0I7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUNqRCx3QkFBd0JULDJDQUFBLENBQWUsS0FBZixDQUF4QjtBQUFBO0FBQUEsTUFBT1csSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsTUFBTUMsS0FBSyxHQUFHVCw4REFBUSxFQUF0QjtBQUNBLE1BQU1VLFFBQVEsR0FBR1gsb0VBQWEsQ0FBQ1UsS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELENBQTlCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVmLCtFQUFoQjtBQUFBLGNBQ0thLFFBQVEsZ0JBQUk7QUFBQSw2QkFDVDtBQUFHLGlCQUFTLEVBQUViLDBFQUFkO0FBQW9DLFlBQUksRUFBRVEsSUFBMUM7QUFBZ0QsY0FBTSxFQUFDLFFBQXZEO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFUix5RUFBaEI7QUFBQSxpQ0FDSSw4REFBQyxtREFBRDtBQUNJLGVBQUcsRUFBRUssR0FEVDtBQUVJLGVBQUcsRUFBRUMsR0FGVDtBQUdJLGlCQUFLLEVBQUUsR0FIWDtBQUlJLGtCQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVNJO0FBQUEsb0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUyxxQkFBSixnQkFZRDtBQUFBLGlCQUNIRyxJQUFJLGdCQUFJO0FBQUEsK0JBQ0w7QUFBSyxtQkFBUyxFQUFFViw2RUFBaEI7QUFBeUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNVyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUEsV0FBbEQ7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUVWLGdGQUFoQjtBQUFBLG1DQUNJLDhEQUFDLG1EQUFEO0FBQ0ksaUJBQUcsRUFBRUssR0FEVDtBQUVJLGlCQUFHLEVBQUVDLEdBRlQ7QUFHSSxtQkFBSyxFQUFFLElBSFg7QUFJSSxvQkFBTSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREssdUJBQUosR0FXRSxJQVpILGVBYUo7QUFBSyxpQkFBUyxFQUFFTix5RUFBaEI7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUNJLGFBQUcsRUFBRUssR0FEVDtBQUVJLGFBQUcsRUFBRUMsR0FGVDtBQUdJLGVBQUssRUFBRSxHQUhYO0FBSUksZ0JBQU0sRUFBRSxHQUpaO0FBS0ksaUJBQU8sRUFBRTtBQUFBLG1CQUFNSyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUE7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJJLGVBc0JKO0FBQUcsaUJBQVMsRUFBRVYsMEVBQWQ7QUFBb0MsWUFBSSxFQUFFUSxJQUExQztBQUFnRCxjQUFNLEVBQUMsUUFBdkQ7QUFBQSwrQkFBZ0U7QUFBQSxvQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Qkk7QUFBQTtBQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdDSCxDQTlDRDs7R0FBTUg7VUFHWUQsNERBQ0dEOzs7S0FKZkU7QUFnRE4sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3J0Zm9saW9DYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzUG9ydGZvbGlvIGZyb20gJy4uL3N0eWxlcy9Qb3J0Zm9saW8ubW9kdWxlLmNzcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvQ2FyZCA9ICh7c3JjLCBhbHQsIGNvbXBhbnksIGxpbmt9KSA9PiB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzUG9ydGZvbGlvLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtpc01vYmlsZSA/ICg8PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXNQb3J0Zm9saW8ubGlua30gaHJlZj17bGlua30gdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNQb3J0Zm9saW8uaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTc1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2NvbXBhbnl9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC8+KSA6ICg8PlxyXG4gICAgICAgICAgICAgICAge29wZW4gPyAoPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzUG9ydGZvbGlvLmVubGFyZ2V9IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5lbmxhcmdlSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+KSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzUG9ydGZvbGlvLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1BvcnRmb2xpby5saW5rfSBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuayc+PGgzPntjb21wYW55fTwvaDM+PC9hPlxyXG4gICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9DYXJkXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlc1BvcnRmb2xpbyIsIkltYWdlIiwidXNlTWVkaWFRdWVyeSIsInVzZVRoZW1lIiwiUG9ydGZvbGlvQ2FyZCIsInNyYyIsImFsdCIsImNvbXBhbnkiLCJsaW5rIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJjb250YWluZXIiLCJpbWciLCJlbmxhcmdlIiwiZW5sYXJnZUltZyJdLCJzb3VyY2VSb290IjoiIn0=