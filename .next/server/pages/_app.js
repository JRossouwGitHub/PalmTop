(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\components\\Footer.js";


const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    children: "\xA9 Copyright 2021, PalmTop."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollToTop */ "./components/ScrollToTop.js");
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Fab */ "@mui/material/Fab");
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "@mui/icons-material/KeyboardArrowUp");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\components\\Layout.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Layout = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ScrollToTop__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Fab__WEBPACK_IMPORTED_MODULE_3___default()), {
        color: "secondary",
        size: "small",
        "aria-label": "scroll back to top",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_MenuRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/MenuRounded */ "@mui/icons-material/MenuRounded");
/* harmony import */ var _mui_icons_material_MenuRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MenuRounded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\components\\NavBar.js";








const NavBar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
      sx: {
        flexGrow: 1
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0___default()), {
        position: "static",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), {
          id: "back-to-top-anchor",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            sx: {
              mr: 2
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_icons_material_MenuRounded__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
            variant: "h6",
            component: "div",
            sx: {
              flexGrow: 1
            },
            children: "News"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./components/ScrollToTop.js":
/*!***********************************!*\
  !*** ./components/ScrollToTop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/useScrollTrigger */ "@mui/material/useScrollTrigger");
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Zoom */ "@mui/material/Zoom");
/* harmony import */ var _mui_material_Zoom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Zoom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\components\\ScrollToTop.js";







const ScrollToTop = props => {
  const {
    children,
    window
  } = props; // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  const trigger = _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default()({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((_mui_material_Zoom__WEBPACK_IMPORTED_MODULE_3___default()), {
      in: trigger,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        onClick: handleClick,
        role: "presentation",
        sx: {
          position: 'fixed',
          bottom: 16,
          right: 16
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

ScrollToTop.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().element.isRequired),

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // This default export is required in a new `pages/_app.js` file.


function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@mui/icons-material/KeyboardArrowUp":
/*!******************************************************!*\
  !*** external "@mui/icons-material/KeyboardArrowUp" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/KeyboardArrowUp");

/***/ }),

/***/ "@mui/icons-material/MenuRounded":
/*!**************************************************!*\
  !*** external "@mui/icons-material/MenuRounded" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/MenuRounded");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Fab":
/*!************************************!*\
  !*** external "@mui/material/Fab" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Fab");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/Zoom":
/*!*************************************!*\
  !*** external "@mui/material/Zoom" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Zoom");

/***/ }),

/***/ "@mui/material/useScrollTrigger":
/*!*************************************************!*\
  !*** external "@mui/material/useScrollTrigger" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useScrollTrigger");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL3dlYnNpdGUvLi9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vY29tcG9uZW50cy9TY3JvbGxUb1RvcC5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93VXBcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51Um91bmRlZFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0JveFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0ZhYlwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1pvb21cIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC91c2VTY3JvbGxUcmlnZ2VyXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IDIwMjEsIFBhbG1Ub3AuXHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgU2Nyb2xsVG9Ub3AgZnJvbSAnLi9TY3JvbGxUb1RvcCdcclxuaW1wb3J0IEZhYiBmcm9tICdAbXVpL21hdGVyaWFsL0ZhYic7XHJcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwJztcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgIDxTY3JvbGxUb1RvcCB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgPEZhYiBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJzY3JvbGwgYmFjayB0byB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsVG9Ub3A+XHJcbiAgICAgICAgICAgIDxtYWluPnsgcHJvcHMuY2hpbGRyZW4gfTwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVJvdW5kZWQnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyIGlkPVwiYmFjay10by10b3AtYW5jaG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVSb3VuZGVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tICdAbXVpL21hdGVyaWFsL3VzZVNjcm9sbFRyaWdnZXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuXHJcbmltcG9ydCBab29tIGZyb20gJ0BtdWkvbWF0ZXJpYWwvWm9vbSc7XHJcblxyXG5jb25zdCBTY3JvbGxUb1RvcCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgd2luZG93IH0gPSBwcm9wcztcclxuICAgIC8vIE5vdGUgdGhhdCB5b3Ugbm9ybWFsbHkgd29uJ3QgbmVlZCB0byBzZXQgdGhlIHdpbmRvdyByZWYgYXMgdXNlU2Nyb2xsVHJpZ2dlclxyXG4gICAgLy8gd2lsbCBkZWZhdWx0IHRvIHdpbmRvdy5cclxuICAgIC8vIFRoaXMgaXMgb25seSBiZWluZyBzZXQgaGVyZSBiZWNhdXNlIHRoZSBkZW1vIGlzIGluIGFuIGlmcmFtZS5cclxuICAgIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgICAgICB0YXJnZXQ6IHdpbmRvdyA/IHdpbmRvdygpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgICAgIHRocmVzaG9sZDogMTAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBhbmNob3IgPSAoZXZlbnQudGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJyNiYWNrLXRvLXRvcC1hbmNob3InLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChhbmNob3IpIHtcclxuICAgICAgICBhbmNob3Iuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgIGJsb2NrOiAnY2VudGVyJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Wm9vbSBpbj17dHJpZ2dlcn0+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblNjcm9sbFRvVG9wLnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3RlZCBieSB0aGUgZG9jdW1lbnRhdGlvbiB0byB3b3JrIGluIGFuIGlmcmFtZS5cclxuICAgICAqIFlvdSB3b24ndCBuZWVkIGl0IG9uIHlvdXIgcHJvamVjdC5cclxuICAgICAqL1xyXG4gICAgd2luZG93OiBQcm9wVHlwZXMuZnVuYyxcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9Ub3BcclxuIiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuXHJcbi8vIFRoaXMgZGVmYXVsdCBleHBvcnQgaXMgcmVxdWlyZWQgaW4gYSBuZXcgYHBhZ2VzL19hcHAuanNgIGZpbGUuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9GYWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9ab29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvdXNlU2Nyb2xsVHJpZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiRm9vdGVyIiwiTmF2QmFyIiwiU2Nyb2xsVG9Ub3AiLCJGYWIiLCJLZXlib2FyZEFycm93VXBJY29uIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiSWNvbkJ1dHRvbiIsIk1lbnVSb3VuZGVkSWNvbiIsImZsZXhHcm93IiwibXIiLCJQcm9wVHlwZXMiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiWm9vbSIsIndpbmRvdyIsInRyaWdnZXIiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJhbmNob3IiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsInByb3BUeXBlcyIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==