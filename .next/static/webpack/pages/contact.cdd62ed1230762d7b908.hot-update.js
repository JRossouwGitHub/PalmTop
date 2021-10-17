"use strict";
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./node_modules/@mui/material/styles/ThemeProvider.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/styles/ThemeProvider.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider; }
/* harmony export */ });
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");


/***/ }),

/***/ "./node_modules/@mui/material/styles/adaptV4Theme.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/material/styles/adaptV4Theme.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ adaptV4Theme; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");


const _excluded = ["defaultProps", "mixins", "overrides", "palette", "props", "styleOverrides"],
      _excluded2 = ["type", "mode"];

function adaptV4Theme(inputTheme) {
  if (true) {
    console.warn(['MUI: adaptV4Theme() is deprecated.', 'Follow the upgrade guide on https://mui.com/r/migration-v4#theme.'].join('\n'));
  }

  const {
    defaultProps = {},
    mixins = {},
    overrides = {},
    palette = {},
    props = {},
    styleOverrides = {}
  } = inputTheme,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(inputTheme, _excluded);

  const theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, other, {
    components: {}
  }); // default props


  Object.keys(defaultProps).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = defaultProps[component];
    theme.components[component] = componentValue;
  });
  Object.keys(props).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = props[component];
    theme.components[component] = componentValue;
  }); // css overrides

  Object.keys(styleOverrides).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = styleOverrides[component];
    theme.components[component] = componentValue;
  });
  Object.keys(overrides).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = overrides[component];
    theme.components[component] = componentValue;
  }); // theme.spacing

  theme.spacing = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.createSpacing)(inputTheme.spacing); // theme.mixins.gutters

  const breakpoints = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.createBreakpoints)(inputTheme.breakpoints || {});
  const spacing = theme.spacing;
  theme.mixins = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    gutters: (styles = {}) => {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, {
        [breakpoints.up('sm')]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up('sm')])
      });
    }
  }, mixins);

  const {
    type: typeInput,
    mode: modeInput
  } = palette,
        paletteRest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(palette, _excluded2);

  const finalMode = modeInput || typeInput || 'light';
  theme.palette = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // theme.palette.text.hint
    text: {
      hint: finalMode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)'
    },
    mode: finalMode,
    type: finalMode
  }, paletteRest);
  return theme;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/createMuiStrictModeTheme.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mui/material/styles/createMuiStrictModeTheme.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMuiStrictModeTheme; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@mui/material/styles/createTheme.js");


function createMuiStrictModeTheme(options, ...args) {
  return (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)((0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)({
    unstable_strictMode: true
  }, options), ...args);
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/createStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/material/styles/createStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStyles; }
/* harmony export */ });
let warnedOnce = false; // To remove in v6

function createStyles(styles) {
  if (!warnedOnce) {
    console.warn(['MUI: createStyles from @mui/material/styles is deprecated.', 'Please use @mui/styles/createStyles'].join('\n'));
    warnedOnce = true;
  }

  return styles;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/cssUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/styles/cssUtils.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": function() { return /* binding */ isUnitless; },
/* harmony export */   "getUnit": function() { return /* binding */ getUnit; },
/* harmony export */   "toUnitless": function() { return /* binding */ toUnitless; },
/* harmony export */   "convertLength": function() { return /* binding */ convertLength; },
/* harmony export */   "alignProperty": function() { return /* binding */ alignProperty; },
/* harmony export */   "fontGrid": function() { return /* binding */ fontGrid; },
/* harmony export */   "responsiveProperty": function() { return /* binding */ responsiveProperty; }
/* harmony export */ });
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return (length, toUnit) => {
    const fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    let pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      }
    } // Convert length in pixels to the output unit


    let outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = 'rem',
  breakpoints = [600, 900, 1200],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(breakpoint => {
    let value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
    };
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/material/styles/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adaptV4Theme": function() { return /* reexport safe */ _adaptV4Theme__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "hexToRgb": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.hexToRgb; },
/* harmony export */   "rgbToHex": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.rgbToHex; },
/* harmony export */   "hslToRgb": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.hslToRgb; },
/* harmony export */   "decomposeColor": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.decomposeColor; },
/* harmony export */   "recomposeColor": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.recomposeColor; },
/* harmony export */   "getContrastRatio": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.getContrastRatio; },
/* harmony export */   "getLuminance": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.getLuminance; },
/* harmony export */   "emphasize": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.emphasize; },
/* harmony export */   "alpha": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.alpha; },
/* harmony export */   "darken": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.darken; },
/* harmony export */   "lighten": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.lighten; },
/* harmony export */   "createTheme": function() { return /* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createMuiTheme": function() { return /* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_2__.createMuiTheme; },
/* harmony export */   "unstable_createMuiStrictModeTheme": function() { return /* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "createStyles": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "unstable_getUnit": function() { return /* reexport safe */ _cssUtils__WEBPACK_IMPORTED_MODULE_5__.getUnit; },
/* harmony export */   "unstable_toUnitless": function() { return /* reexport safe */ _cssUtils__WEBPACK_IMPORTED_MODULE_5__.toUnitless; },
/* harmony export */   "responsiveFontSizes": function() { return /* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "duration": function() { return /* reexport safe */ _createTransitions__WEBPACK_IMPORTED_MODULE_7__.duration; },
/* harmony export */   "easing": function() { return /* reexport safe */ _createTransitions__WEBPACK_IMPORTED_MODULE_7__.easing; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "useThemeProps": function() { return /* reexport safe */ _useThemeProps__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "styled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "experimentalStyled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "StyledEngineProvider": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.StyledEngineProvider; },
/* harmony export */   "makeStyles": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "withStyles": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_14__.default; }
/* harmony export */ });
/* harmony import */ var _adaptV4Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adaptV4Theme */ "./node_modules/@mui/material/styles/adaptV4Theme.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@mui/material/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@mui/material/styles/createStyles.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@mui/material/styles/cssUtils.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@mui/material/styles/responsiveFontSizes.js");
/* harmony import */ var _createTransitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createTransitions */ "./node_modules/@mui/material/styles/createTransitions.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@mui/material/styles/makeStyles.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@mui/material/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@mui/material/styles/withTheme.js");













 // The legacy utilities from @mui/styles
// These are just empty functions that throws when invoked





/***/ }),

/***/ "./node_modules/@mui/material/styles/makeStyles.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/styles/makeStyles.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ makeStyles; }
/* harmony export */ });

function makeStyles() {
  throw new Error( true ? `MUI: makeStyles is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#material-ui-core-styles for more details.` : 0);
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/responsiveFontSizes.js":
/*!******************************************************************!*\
  !*** ./node_modules/@mui/material/styles/responsiveFontSizes.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ responsiveFontSizes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@mui/material/styles/cssUtils.js");



function responsiveFontSizes(themeInput, options = {}) {
  const {
    breakpoints = ['sm', 'md', 'lg'],
    disableAlign = false,
    factor = 2,
    variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline']
  } = options;

  const theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  const typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  const convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.convertLength)(typography.htmlFontSize);
  const breakpointValues = breakpoints.map(x => theme.breakpoints.values[x]);
  variants.forEach(variant => {
    const style = typography[variant];
    const remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    const maxFontSize = remFontSize;
    const minFontSize = 1 + (maxFontSize - 1) / factor;
    let {
      lineHeight
    } = style;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    let transform = null;

    if (!disableAlign) {
      transform = value => (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.alignProperty)({
        size: value,
        grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.fontGrid)({
          pixels: 4,
          lineHeight,
          htmlFontSize: typography.htmlFontSize
        })
      });
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/useTheme.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/styles/useTheme.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@mui/material/styles/defaultTheme.js");



function useTheme() {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.useTheme)(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/withStyles.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/styles/withStyles.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withStyles; }
/* harmony export */ });

function withStyles() {
  throw new Error( true ? `MUI: withStyles is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#material-ui-core-styles for more details.` : 0);
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/withTheme.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/styles/withTheme.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withTheme; }
/* harmony export */ });

function withTheme() {
  throw new Error( true ? `MUI: withTheme is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#material-ui-core-styles for more details.` : 0);
}

/***/ }),

/***/ "./node_modules/@mui/material/useMediaQuery/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/material/useMediaQuery/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");


/***/ }),

/***/ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useMediaQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var _utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useEnhancedEffect */ "./node_modules/@mui/material/utils/useEnhancedEffect.js");



/**
 * @deprecated Not used internally. Use `MediaQueryListEvent` from lib.dom.d.ts instead.
 */

function useMediaQuery(queryInput, options = {}) {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.useThemeWithoutDefault)(); // Wait for jsdom to support the match media feature.
  // All the browsers MUI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    noSsr = false,
    ssrMatchMedia = null
  } = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.getThemeProps)({
    name: 'MuiUseMediaQuery',
    props: options,
    theme
  });

  if (true) {
    if (typeof queryInput === 'function' && theme === null) {
      console.error(['MUI: The `query` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
    }
  }

  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, '');
  const [match, setMatch] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  });
  (0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_2__.default)(() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = matchMedia(query);

    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue({
      query,
      match
    });
  }

  return match;
}

/***/ }),

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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
        fontSize: "large"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5jZGQ2MmVkMTIzMDc2MmQ3YjkwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDMEM7QUFDcEc7QUFDQTtBQUMrRDtBQUNoRDtBQUNmLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Q7QUFDQSxJQUFJO0FBQ0osZ0JBQWdCLGdHQUE2Qjs7QUFFN0MsZ0JBQWdCLDJFQUFRLEdBQUc7QUFDM0I7QUFDQSxHQUFHLEdBQUc7OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHOztBQUVOLGtCQUFrQiwwREFBYSxzQkFBc0I7O0FBRXJELHNCQUFzQiw4REFBaUIsNkJBQTZCO0FBQ3BFO0FBQ0EsaUJBQWlCLDJFQUFRO0FBQ3pCLHlCQUF5QjtBQUN6QixhQUFhLDJFQUFRO0FBQ3JCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsZ0NBQWdDLDJFQUFRO0FBQ3hDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osc0JBQXNCLGdHQUE2Qjs7QUFFbkQ7QUFDQSxrQkFBa0IsMkVBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGdUM7QUFDQztBQUN6QjtBQUNmLFNBQVMscURBQVcsQ0FBQyxxREFBUztBQUM5QjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNOQSx3QkFBd0I7O0FBRVQ7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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZYLGVBR0k7QUFBRyxVQUFJLEVBQUMsa0RBQVI7QUFBMkQsWUFBTSxFQUFDLFFBQWxFO0FBQUEsNkJBQ0ksOERBQUMsaUVBQUQ7QUFBYyxpQkFBUyxFQUFFQSx1RUFBekI7QUFBc0MsZ0JBQVEsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBU0gsQ0FiRDs7R0FBTUk7VUFDWUYsNERBQ0dEOzs7S0FGZkc7QUFlTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvYWRhcHRWNFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvY3JlYXRlU3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvY3NzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL21ha2VTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9yZXNwb25zaXZlRm9udFNpemVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvdXNlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy93aXRoU3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvd2l0aFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5L3VzZU1lZGlhUXVlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5jb25zdCBfZXhjbHVkZWQgPSBbXCJkZWZhdWx0UHJvcHNcIiwgXCJtaXhpbnNcIiwgXCJvdmVycmlkZXNcIiwgXCJwYWxldHRlXCIsIFwicHJvcHNcIiwgXCJzdHlsZU92ZXJyaWRlc1wiXSxcbiAgICAgIF9leGNsdWRlZDIgPSBbXCJ0eXBlXCIsIFwibW9kZVwiXTtcbmltcG9ydCB7IGNyZWF0ZUJyZWFrcG9pbnRzLCBjcmVhdGVTcGFjaW5nIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRhcHRWNFRoZW1lKGlucHV0VGhlbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLndhcm4oWydNVUk6IGFkYXB0VjRUaGVtZSgpIGlzIGRlcHJlY2F0ZWQuJywgJ0ZvbGxvdyB0aGUgdXBncmFkZSBndWlkZSBvbiBodHRwczovL211aS5jb20vci9taWdyYXRpb24tdjQjdGhlbWUuJ10uam9pbignXFxuJykpO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGRlZmF1bHRQcm9wcyA9IHt9LFxuICAgIG1peGlucyA9IHt9LFxuICAgIG92ZXJyaWRlcyA9IHt9LFxuICAgIHBhbGV0dGUgPSB7fSxcbiAgICBwcm9wcyA9IHt9LFxuICAgIHN0eWxlT3ZlcnJpZGVzID0ge31cbiAgfSA9IGlucHV0VGhlbWUsXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoaW5wdXRUaGVtZSwgX2V4Y2x1ZGVkKTtcblxuICBjb25zdCB0aGVtZSA9IF9leHRlbmRzKHt9LCBvdGhlciwge1xuICAgIGNvbXBvbmVudHM6IHt9XG4gIH0pOyAvLyBkZWZhdWx0IHByb3BzXG5cblxuICBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRWYWx1ZSA9IHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSB8fCB7fTtcbiAgICBjb21wb25lbnRWYWx1ZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNbY29tcG9uZW50XTtcbiAgICB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gPSBjb21wb25lbnRWYWx1ZTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50VmFsdWUgPSB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gfHwge307XG4gICAgY29tcG9uZW50VmFsdWUuZGVmYXVsdFByb3BzID0gcHJvcHNbY29tcG9uZW50XTtcbiAgICB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gPSBjb21wb25lbnRWYWx1ZTtcbiAgfSk7IC8vIGNzcyBvdmVycmlkZXNcblxuICBPYmplY3Qua2V5cyhzdHlsZU92ZXJyaWRlcykuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFZhbHVlID0gdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdIHx8IHt9O1xuICAgIGNvbXBvbmVudFZhbHVlLnN0eWxlT3ZlcnJpZGVzID0gc3R5bGVPdmVycmlkZXNbY29tcG9uZW50XTtcbiAgICB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gPSBjb21wb25lbnRWYWx1ZTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKG92ZXJyaWRlcykuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFZhbHVlID0gdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdIHx8IHt9O1xuICAgIGNvbXBvbmVudFZhbHVlLnN0eWxlT3ZlcnJpZGVzID0gb3ZlcnJpZGVzW2NvbXBvbmVudF07XG4gICAgdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdID0gY29tcG9uZW50VmFsdWU7XG4gIH0pOyAvLyB0aGVtZS5zcGFjaW5nXG5cbiAgdGhlbWUuc3BhY2luZyA9IGNyZWF0ZVNwYWNpbmcoaW5wdXRUaGVtZS5zcGFjaW5nKTsgLy8gdGhlbWUubWl4aW5zLmd1dHRlcnNcblxuICBjb25zdCBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKGlucHV0VGhlbWUuYnJlYWtwb2ludHMgfHwge30pO1xuICBjb25zdCBzcGFjaW5nID0gdGhlbWUuc3BhY2luZztcbiAgdGhlbWUubWl4aW5zID0gX2V4dGVuZHMoe1xuICAgIGd1dHRlcnM6IChzdHlsZXMgPSB7fSkgPT4ge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMiksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygyKVxuICAgICAgfSwgc3R5bGVzLCB7XG4gICAgICAgIFticmVha3BvaW50cy51cCgnc20nKV06IF9leHRlbmRzKHtcbiAgICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMylcbiAgICAgICAgfSwgc3R5bGVzW2JyZWFrcG9pbnRzLnVwKCdzbScpXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgbWl4aW5zKTtcblxuICBjb25zdCB7XG4gICAgdHlwZTogdHlwZUlucHV0LFxuICAgIG1vZGU6IG1vZGVJbnB1dFxuICB9ID0gcGFsZXR0ZSxcbiAgICAgICAgcGFsZXR0ZVJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwYWxldHRlLCBfZXhjbHVkZWQyKTtcblxuICBjb25zdCBmaW5hbE1vZGUgPSBtb2RlSW5wdXQgfHwgdHlwZUlucHV0IHx8ICdsaWdodCc7XG4gIHRoZW1lLnBhbGV0dGUgPSBfZXh0ZW5kcyh7XG4gICAgLy8gdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcbiAgICB0ZXh0OiB7XG4gICAgICBoaW50OiBmaW5hbE1vZGUgPT09ICdkYXJrJyA/ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknIDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gICAgfSxcbiAgICBtb2RlOiBmaW5hbE1vZGUsXG4gICAgdHlwZTogZmluYWxNb2RlXG4gIH0sIHBhbGV0dGVSZXN0KTtcbiAgcmV0dXJuIHRoZW1lO1xufSIsImltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lKG9wdGlvbnMsIC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZVRoZW1lKGRlZXBtZXJnZSh7XG4gICAgdW5zdGFibGVfc3RyaWN0TW9kZTogdHJ1ZVxuICB9LCBvcHRpb25zKSwgLi4uYXJncyk7XG59IiwibGV0IHdhcm5lZE9uY2UgPSBmYWxzZTsgLy8gVG8gcmVtb3ZlIGluIHY2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgY29uc29sZS53YXJuKFsnTVVJOiBjcmVhdGVTdHlsZXMgZnJvbSBAbXVpL21hdGVyaWFsL3N0eWxlcyBpcyBkZXByZWNhdGVkLicsICdQbGVhc2UgdXNlIEBtdWkvc3R5bGVzL2NyZWF0ZVN0eWxlcyddLmpvaW4oJ1xcbicpKTtcbiAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzVW5pdGxlc3ModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKSkubGVuZ3RoID09PSBTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn0gLy8gUG9ydGVkIGZyb20gQ29tcGFzc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0NvbXBhc3MvY29tcGFzcy9ibG9iL21hc3Rlci9jb3JlL3N0eWxlc2hlZXRzL2NvbXBhc3MvdHlwb2dyYXBoeS9fdW5pdHMuc2Nzc1xuLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdChpbnB1dCkge1xuICByZXR1cm4gU3RyaW5nKGlucHV0KS5tYXRjaCgvW1xcZC5cXC0rXSpcXHMqKC4qKS8pWzFdIHx8ICcnO1xufSAvLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdGxlc3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml0bGVzcyhsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobGVuZ3RoKTtcbn0gLy8gQ29udmVydCBhbnkgQ1NTIDxsZW5ndGg+IG9yIDxwZXJjZW50YWdlPiB2YWx1ZSB0byBhbnkgYW5vdGhlci5cbi8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0t5bGVBTWF0aGV3cy9jb252ZXJ0LWNzcy1sZW5ndGhcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZW5ndGgoYmFzZUZvbnRTaXplKSB7XG4gIHJldHVybiAobGVuZ3RoLCB0b1VuaXQpID0+IHtcbiAgICBjb25zdCBmcm9tVW5pdCA9IGdldFVuaXQobGVuZ3RoKTsgLy8gT3B0aW1pemUgZm9yIGNhc2VzIHdoZXJlIGBmcm9tYCBhbmQgYHRvYCB1bml0cyBhcmUgYWNjaWRlbnRhbGx5IHRoZSBzYW1lLlxuXG4gICAgaWYgKGZyb21Vbml0ID09PSB0b1VuaXQpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSAvLyBDb252ZXJ0IGlucHV0IGxlbmd0aCB0byBwaXhlbHMuXG5cblxuICAgIGxldCBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKTtcblxuICAgIGlmIChmcm9tVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKGZyb21Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmIChmcm9tVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9XG4gICAgfSAvLyBDb252ZXJ0IGxlbmd0aCBpbiBwaXhlbHMgdG8gdGhlIG91dHB1dCB1bml0XG5cblxuICAgIGxldCBvdXRwdXRMZW5ndGggPSBweExlbmd0aDtcblxuICAgIGlmICh0b1VuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmICh0b1VuaXQgPT09ICdlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KG91dHB1dExlbmd0aC50b0ZpeGVkKDUpKSArIHRvVW5pdDtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbGlnblByb3BlcnR5KHtcbiAgc2l6ZSxcbiAgZ3JpZFxufSkge1xuICBjb25zdCBzaXplQmVsb3cgPSBzaXplIC0gc2l6ZSAlIGdyaWQ7XG4gIGNvbnN0IHNpemVBYm92ZSA9IHNpemVCZWxvdyArIGdyaWQ7XG4gIHJldHVybiBzaXplIC0gc2l6ZUJlbG93IDwgc2l6ZUFib3ZlIC0gc2l6ZSA/IHNpemVCZWxvdyA6IHNpemVBYm92ZTtcbn0gLy8gZm9udEdyaWQgZmluZHMgYSBtaW5pbWFsIGdyaWQgKGluIHJlbSkgZm9yIHRoZSBmb250U2l6ZSB2YWx1ZXMgc28gdGhhdCB0aGVcbi8vIGxpbmVIZWlnaHQgZmFsbHMgdW5kZXIgYSB4IHBpeGVscyBncmlkLCA0cHggaW4gdGhlIGNhc2Ugb2YgTWF0ZXJpYWwgRGVzaWduLFxuLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgcmVsYXRpdmUgbGluZSBoZWlnaHRcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRHcmlkKHtcbiAgbGluZUhlaWdodCxcbiAgcGl4ZWxzLFxuICBodG1sRm9udFNpemVcbn0pIHtcbiAgcmV0dXJuIHBpeGVscyAvIChsaW5lSGVpZ2h0ICogaHRtbEZvbnRTaXplKTtcbn1cbi8qKlxuICogZ2VuZXJhdGUgYSByZXNwb25zaXZlIHZlcnNpb24gb2YgYSBnaXZlbiBDU1MgcHJvcGVydHlcbiAqIEBleGFtcGxlXG4gKiByZXNwb25zaXZlUHJvcGVydHkoe1xuICogICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAqICAgbWluOiAxNSxcbiAqICAgbWF4OiAyMCxcbiAqICAgdW5pdDogJ3B4JyxcbiAqICAgYnJlYWtwb2ludHM6IFszMDAsIDYwMF0sXG4gKiB9KVxuICpcbiAqIC8vIHRoaXMgcmV0dXJuc1xuICpcbiAqIHtcbiAqICAgZm9udFNpemU6ICcxNXB4JyxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjMwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzE3LjVweCcsXG4gKiAgIH0sXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDo2MDBweCknOiB7XG4gKiAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAqICAgfSxcbiAqIH1cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY3NzUHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IHRvIGJlIG1hZGUgcmVzcG9uc2l2ZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5taW4gLSBUaGUgc21hbGxlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5tYXggLSBUaGUgbGFyZ2VzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy51bml0XSAtIFRoZSB1bml0IHRvIGJlIHVzZWQgZm9yIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7QXJyYXkubnVtYmVyfSBbcGFyYW1zLmJyZWFrcG9pbnRzXSAgLSBBbiBhcnJheSBvZiBicmVha3BvaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMuYWxpZ25TdGVwXSAtIFJvdW5kIHNjYWxlZCB2YWx1ZSB0byBmYWxsIHVuZGVyIHRoaXMgZ3JpZFxuICogQHJldHVybnMge09iamVjdH0gcmVzcG9uc2l2ZSBzdHlsZXMgZm9yIHtwYXJhbXMuY3NzUHJvcGVydHl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gIGNzc1Byb3BlcnR5LFxuICBtaW4sXG4gIG1heCxcbiAgdW5pdCA9ICdyZW0nLFxuICBicmVha3BvaW50cyA9IFs2MDAsIDkwMCwgMTIwMF0sXG4gIHRyYW5zZm9ybSA9IG51bGxcbn0pIHtcbiAgY29uc3Qgb3V0cHV0ID0ge1xuICAgIFtjc3NQcm9wZXJ0eV06IGAke21pbn0ke3VuaXR9YFxuICB9O1xuICBjb25zdCBmYWN0b3IgPSAobWF4IC0gbWluKSAvIGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRzLmxlbmd0aCAtIDFdO1xuICBicmVha3BvaW50cy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG1pbiArIGZhY3RvciAqIGJyZWFrcG9pbnQ7XG5cbiAgICBpZiAodHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb3V0cHV0W2BAbWVkaWEgKG1pbi13aWR0aDoke2JyZWFrcG9pbnR9cHgpYF0gPSB7XG4gICAgICBbY3NzUHJvcGVydHldOiBgJHtNYXRoLnJvdW5kKHZhbHVlICogMTAwMDApIC8gMTAwMDB9JHt1bml0fWBcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFkYXB0VjRUaGVtZSB9IGZyb20gJy4vYWRhcHRWNFRoZW1lJztcbmV4cG9ydCB7IGhleFRvUmdiLCByZ2JUb0hleCwgaHNsVG9SZ2IsIGRlY29tcG9zZUNvbG9yLCByZWNvbXBvc2VDb2xvciwgZ2V0Q29udHJhc3RSYXRpbywgZ2V0THVtaW5hbmNlLCBlbXBoYXNpemUsIGFscGhhLCBkYXJrZW4sIGxpZ2h0ZW4gfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVRoZW1lLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJy4vY3JlYXRlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUgfSBmcm9tICcuL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVN0eWxlcyB9IGZyb20gJy4vY3JlYXRlU3R5bGVzJztcbmV4cG9ydCB7IGdldFVuaXQgYXMgdW5zdGFibGVfZ2V0VW5pdCwgdG9Vbml0bGVzcyBhcyB1bnN0YWJsZV90b1VuaXRsZXNzIH0gZnJvbSAnLi9jc3NVdGlscyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICcuL3Jlc3BvbnNpdmVGb250U2l6ZXMnO1xuZXhwb3J0IHsgZHVyYXRpb24sIGVhc2luZyB9IGZyb20gJy4vY3JlYXRlVHJhbnNpdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaGVtZSB9IGZyb20gJy4vdXNlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaGVtZVByb3BzIH0gZnJvbSAnLi91c2VUaGVtZVByb3BzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVkIH0gZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBleHBlcmltZW50YWxTdHlsZWQgfSBmcm9tICcuL3N0eWxlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuZXhwb3J0IHsgU3R5bGVkRW5naW5lUHJvdmlkZXIgfSBmcm9tICdAbXVpL3N5c3RlbSc7IC8vIFRoZSBsZWdhY3kgdXRpbGl0aWVzIGZyb20gQG11aS9zdHlsZXNcbi8vIFRoZXNlIGFyZSBqdXN0IGVtcHR5IGZ1bmN0aW9ucyB0aGF0IHRocm93cyB3aGVuIGludm9rZWRcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYWtlU3R5bGVzIH0gZnJvbSAnLi9tYWtlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFN0eWxlcyB9IGZyb20gJy4vd2l0aFN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vd2l0aFRoZW1lJzsiLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbXVpL3V0aWxzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlU3R5bGVzKCkge1xuICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gYE1VSTogbWFrZVN0eWxlcyBpcyBub3QgbG9uZ2VyIGV4cG9ydGVkIGZyb20gQG11aS9tYXRlcmlhbC9zdHlsZXMuXG5Zb3UgaGF2ZSB0byBpbXBvcnQgaXQgZnJvbSBAbXVpL3N0eWxlcy5cblNlZSBodHRwczovL211aS5jb20vci9taWdyYXRpb24tdjQvI21hdGVyaWFsLXVpLWNvcmUtc3R5bGVzIGZvciBtb3JlIGRldGFpbHMuYCA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMTQpKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGlzVW5pdGxlc3MsIGNvbnZlcnRMZW5ndGgsIHJlc3BvbnNpdmVQcm9wZXJ0eSwgYWxpZ25Qcm9wZXJ0eSwgZm9udEdyaWQgfSBmcm9tICcuL2Nzc1V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWVJbnB1dCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBicmVha3BvaW50cyA9IFsnc20nLCAnbWQnLCAnbGcnXSxcbiAgICBkaXNhYmxlQWxpZ24gPSBmYWxzZSxcbiAgICBmYWN0b3IgPSAyLFxuICAgIHZhcmlhbnRzID0gWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJywgJ2NhcHRpb24nLCAnYnV0dG9uJywgJ292ZXJsaW5lJ11cbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgdGhlbWVJbnB1dCk7XG5cbiAgdGhlbWUudHlwb2dyYXBoeSA9IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5KTtcbiAgY29uc3QgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7IC8vIENvbnZlcnQgYmV0d2VlbiBjc3MgbGVuZ3RocyBlLmcuIGVtLT5weCBvciBweC0+cmVtXG4gIC8vIFNldCB0aGUgYmFzZUZvbnRTaXplIGZvciB5b3VyIHByb2plY3QuIERlZmF1bHRzIHRvIDE2cHggKGFsc28gdGhlIGJyb3dzZXIgZGVmYXVsdCkuXG5cbiAgY29uc3QgY29udmVydCA9IGNvbnZlcnRMZW5ndGgodHlwb2dyYXBoeS5odG1sRm9udFNpemUpO1xuICBjb25zdCBicmVha3BvaW50VmFsdWVzID0gYnJlYWtwb2ludHMubWFwKHggPT4gdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzW3hdKTtcbiAgdmFyaWFudHMuZm9yRWFjaCh2YXJpYW50ID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHR5cG9ncmFwaHlbdmFyaWFudF07XG4gICAgY29uc3QgcmVtRm9udFNpemUgPSBwYXJzZUZsb2F0KGNvbnZlcnQoc3R5bGUuZm9udFNpemUsICdyZW0nKSk7XG5cbiAgICBpZiAocmVtRm9udFNpemUgPD0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1heEZvbnRTaXplID0gcmVtRm9udFNpemU7XG4gICAgY29uc3QgbWluRm9udFNpemUgPSAxICsgKG1heEZvbnRTaXplIC0gMSkgLyBmYWN0b3I7XG4gICAgbGV0IHtcbiAgICAgIGxpbmVIZWlnaHRcbiAgICB9ID0gc3R5bGU7XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkgJiYgIWRpc2FibGVBbGlnbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGBNVUk6IFVuc3VwcG9ydGVkIG5vbi11bml0bGVzcyBsaW5lIGhlaWdodCB3aXRoIGdyaWQgYWxpZ25tZW50LlxuVXNlIHVuaXRsZXNzIGxpbmUgaGVpZ2h0cyBpbnN0ZWFkLmAgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDYpKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkpIHtcbiAgICAgIC8vIG1ha2UgaXQgdW5pdGxlc3NcbiAgICAgIGxpbmVIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbnZlcnQobGluZUhlaWdodCwgJ3JlbScpKSAvIHBhcnNlRmxvYXQocmVtRm9udFNpemUpO1xuICAgIH1cblxuICAgIGxldCB0cmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgaWYgKCFkaXNhYmxlQWxpZ24pIHtcbiAgICAgIHRyYW5zZm9ybSA9IHZhbHVlID0+IGFsaWduUHJvcGVydHkoe1xuICAgICAgICBzaXplOiB2YWx1ZSxcbiAgICAgICAgZ3JpZDogZm9udEdyaWQoe1xuICAgICAgICAgIHBpeGVsczogNCxcbiAgICAgICAgICBsaW5lSGVpZ2h0LFxuICAgICAgICAgIGh0bWxGb250U2l6ZTogdHlwb2dyYXBoeS5odG1sRm9udFNpemVcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHR5cG9ncmFwaHlbdmFyaWFudF0gPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gICAgICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICAgIG1pbjogbWluRm9udFNpemUsXG4gICAgICBtYXg6IG1heEZvbnRTaXplLFxuICAgICAgdW5pdDogJ3JlbScsXG4gICAgICBicmVha3BvaW50czogYnJlYWtwb2ludFZhbHVlcyxcbiAgICAgIHRyYW5zZm9ybVxuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUaGVtZSBhcyB1c2VUaGVtZVN5c3RlbSB9IGZyb20gJ0BtdWkvc3lzdGVtJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWVTeXN0ZW0oZGVmYXVsdFRoZW1lKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUodGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW1lO1xufSIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtdWkvdXRpbHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhTdHlsZXMoKSB7XG4gIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBgTVVJOiB3aXRoU3R5bGVzIGlzIG5vdCBsb25nZXIgZXhwb3J0ZWQgZnJvbSBAbXVpL21hdGVyaWFsL3N0eWxlcy5cbllvdSBoYXZlIHRvIGltcG9ydCBpdCBmcm9tIEBtdWkvc3R5bGVzLlxuU2VlIGh0dHBzOi8vbXVpLmNvbS9yL21pZ3JhdGlvbi12NC8jbWF0ZXJpYWwtdWktY29yZS1zdHlsZXMgZm9yIG1vcmUgZGV0YWlscy5gIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgxNSkpO1xufSIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtdWkvdXRpbHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhUaGVtZSgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGBNVUk6IHdpdGhUaGVtZSBpcyBub3QgbG9uZ2VyIGV4cG9ydGVkIGZyb20gQG11aS9tYXRlcmlhbC9zdHlsZXMuXG5Zb3UgaGF2ZSB0byBpbXBvcnQgaXQgZnJvbSBAbXVpL3N0eWxlcy5cblNlZSBodHRwczovL211aS5jb20vci9taWdyYXRpb24tdjQvI21hdGVyaWFsLXVpLWNvcmUtc3R5bGVzIGZvciBtb3JlIGRldGFpbHMuYCA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMTYpKTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRUaGVtZVByb3BzLCB1c2VUaGVtZVdpdGhvdXREZWZhdWx0IGFzIHVzZVRoZW1lIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuaW1wb3J0IHVzZUVuaGFuY2VkRWZmZWN0IGZyb20gJy4uL3V0aWxzL3VzZUVuaGFuY2VkRWZmZWN0Jztcbi8qKlxuICogQGRlcHJlY2F0ZWQgTm90IHVzZWQgaW50ZXJuYWxseS4gVXNlIGBNZWRpYVF1ZXJ5TGlzdEV2ZW50YCBmcm9tIGxpYi5kb20uZC50cyBpbnN0ZWFkLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1lZGlhUXVlcnkocXVlcnlJbnB1dCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTsgLy8gV2FpdCBmb3IganNkb20gdG8gc3VwcG9ydCB0aGUgbWF0Y2ggbWVkaWEgZmVhdHVyZS5cbiAgLy8gQWxsIHRoZSBicm93c2VycyBNVUkgc3VwcG9ydCBoYXZlIHRoaXMgYnVpbHQtaW4uXG4gIC8vIFRoaXMgZGVmZW5zaXZlIGNoZWNrIGlzIGhlcmUgZm9yIHNpbXBsaWNpdHkuXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUsIHRoZSBtYXRjaCBtZWRpYSBsb2dpYyBpc24ndCBjZW50cmFsIHRvIHBlb3BsZSB0ZXN0cy5cblxuICBjb25zdCBzdXBwb3J0TWF0Y2hNZWRpYSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubWF0Y2hNZWRpYSAhPT0gJ3VuZGVmaW5lZCc7XG4gIGNvbnN0IHtcbiAgICBkZWZhdWx0TWF0Y2hlcyA9IGZhbHNlLFxuICAgIG1hdGNoTWVkaWEgPSBzdXBwb3J0TWF0Y2hNZWRpYSA/IHdpbmRvdy5tYXRjaE1lZGlhIDogbnVsbCxcbiAgICBub1NzciA9IGZhbHNlLFxuICAgIHNzck1hdGNoTWVkaWEgPSBudWxsXG4gIH0gPSBnZXRUaGVtZVByb3BzKHtcbiAgICBuYW1lOiAnTXVpVXNlTWVkaWFRdWVyeScsXG4gICAgcHJvcHM6IG9wdGlvbnMsXG4gICAgdGhlbWVcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5SW5wdXQgPT09ICdmdW5jdGlvbicgJiYgdGhlbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNVUk6IFRoZSBgcXVlcnlgIGFyZ3VtZW50IHByb3ZpZGVkIGlzIGludmFsaWQuJywgJ1lvdSBhcmUgcHJvdmlkaW5nIGEgZnVuY3Rpb24gd2l0aG91dCBhIHRoZW1lIGluIHRoZSBjb250ZXh0LicsICdPbmUgb2YgdGhlIHBhcmVudCBlbGVtZW50cyBuZWVkcyB0byB1c2UgYSBUaGVtZVByb3ZpZGVyLiddLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcXVlcnkgPSB0eXBlb2YgcXVlcnlJbnB1dCA9PT0gJ2Z1bmN0aW9uJyA/IHF1ZXJ5SW5wdXQodGhlbWUpIDogcXVlcnlJbnB1dDtcbiAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9eQG1lZGlhKCA/KS9tLCAnJyk7XG4gIGNvbnN0IFttYXRjaCwgc2V0TWF0Y2hdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmIChub1NzciAmJiBzdXBwb3J0TWF0Y2hNZWRpYSkge1xuICAgICAgcmV0dXJuIG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgfVxuXG4gICAgaWYgKHNzck1hdGNoTWVkaWEpIHtcbiAgICAgIHJldHVybiBzc3JNYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH0gLy8gT25jZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQsIHdlIHJlbHkgb24gdGhlXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzIHRvIHJldHVybiB0aGUgY29ycmVjdCBtYXRjaGVzIHZhbHVlLlxuXG5cbiAgICByZXR1cm4gZGVmYXVsdE1hdGNoZXM7XG4gIH0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAoIXN1cHBvcnRNYXRjaE1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IG1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgY29uc3QgdXBkYXRlTWF0Y2ggPSAoKSA9PiB7XG4gICAgICAvLyBXb3JrYXJvdW5kIFNhZmFyaSB3cm9uZyBpbXBsZW1lbnRhdGlvbiBvZiBtYXRjaE1lZGlhXG4gICAgICAvLyBUT0RPIGNhbiB3ZSByZW1vdmUgaXQ/XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS9wdWxsLzE3MzE1I2lzc3VlY29tbWVudC01MjgyODY2NzdcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgc2V0TWF0Y2gocXVlcnlMaXN0Lm1hdGNoZXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVNYXRjaCgpO1xuICAgIHF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih1cGRhdGVNYXRjaCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgcXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKHVwZGF0ZU1hdGNoKTtcbiAgICB9O1xuICB9LCBbcXVlcnksIG1hdGNoTWVkaWEsIHN1cHBvcnRNYXRjaE1lZGlhXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHtcbiAgICAgIHF1ZXJ5LFxuICAgICAgbWF0Y2hcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaDtcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYWNlYm9vayc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IDIwMjEsIFBhbG1Ub3AuXHJcbiAgICAgICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9QYWxtVG9wLTEwMTk0MTcyNTU5MDU5M1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBmb250U2l6ZT0nbGFyZ2UnIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlVGhlbWUiLCJGYWNlYm9va0ljb24iLCJGb290ZXIiLCJ0aGVtZSIsImlzTW9iaWxlIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiZm9vdGVyIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=