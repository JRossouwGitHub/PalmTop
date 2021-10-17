"use strict";
self["webpackHotUpdate_N_E"]("pages/portfolio",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLmNkZDYyZWQxMjMwNzYyZDdiOTA4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUMwQztBQUNwRztBQUNBO0FBQytEO0FBQ2hEO0FBQ2YsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZDtBQUNBLElBQUk7QUFDSixnQkFBZ0IsZ0dBQTZCOztBQUU3QyxnQkFBZ0IsMkVBQVEsR0FBRztBQUMzQjtBQUNBLEdBQUcsR0FBRzs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7O0FBRU4sa0JBQWtCLDBEQUFhLHNCQUFzQjs7QUFFckQsc0JBQXNCLDhEQUFpQiw2QkFBNkI7QUFDcEU7QUFDQSxpQkFBaUIsMkVBQVE7QUFDekIseUJBQXlCO0FBQ3pCLGFBQWEsMkVBQVE7QUFDckI7QUFDQTtBQUNBLE9BQU87QUFDUCxnQ0FBZ0MsMkVBQVE7QUFDeEM7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixzQkFBc0IsZ0dBQTZCOztBQUVuRDtBQUNBLGtCQUFrQiwyRUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZ1QztBQUNDO0FBQ3pCO0FBQ2YsU0FBUyxxREFBVyxDQUFDLHFEQUFTO0FBQzlCO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ05BLHdCQUF3Qjs7QUFF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VztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRlgsZUFHSTtBQUFHLFVBQUksRUFBQyxrREFBUjtBQUEyRCxZQUFNLEVBQUMsUUFBbEU7QUFBQSw2QkFDSSw4REFBQyxpRUFBRDtBQUFjLGlCQUFTLEVBQUVBLHVFQUF6QjtBQUFzQyxnQkFBUSxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQWJEOztHQUFNSTtVQUNZRiw0REFDR0Q7OztLQUZmRztBQWVOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9hZGFwdFY0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9jc3NVdGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy93aXRoVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3VzZU1lZGlhUXVlcnkvdXNlTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcImRlZmF1bHRQcm9wc1wiLCBcIm1peGluc1wiLCBcIm92ZXJyaWRlc1wiLCBcInBhbGV0dGVcIiwgXCJwcm9wc1wiLCBcInN0eWxlT3ZlcnJpZGVzXCJdLFxuICAgICAgX2V4Y2x1ZGVkMiA9IFtcInR5cGVcIiwgXCJtb2RlXCJdO1xuaW1wb3J0IHsgY3JlYXRlQnJlYWtwb2ludHMsIGNyZWF0ZVNwYWNpbmcgfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGFwdFY0VGhlbWUoaW5wdXRUaGVtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUud2FybihbJ01VSTogYWRhcHRWNFRoZW1lKCkgaXMgZGVwcmVjYXRlZC4nLCAnRm9sbG93IHRoZSB1cGdyYWRlIGd1aWRlIG9uIGh0dHBzOi8vbXVpLmNvbS9yL21pZ3JhdGlvbi12NCN0aGVtZS4nXS5qb2luKCdcXG4nKSk7XG4gIH1cblxuICBjb25zdCB7XG4gICAgZGVmYXVsdFByb3BzID0ge30sXG4gICAgbWl4aW5zID0ge30sXG4gICAgb3ZlcnJpZGVzID0ge30sXG4gICAgcGFsZXR0ZSA9IHt9LFxuICAgIHByb3BzID0ge30sXG4gICAgc3R5bGVPdmVycmlkZXMgPSB7fVxuICB9ID0gaW5wdXRUaGVtZSxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShpbnB1dFRoZW1lLCBfZXhjbHVkZWQpO1xuXG4gIGNvbnN0IHRoZW1lID0gX2V4dGVuZHMoe30sIG90aGVyLCB7XG4gICAgY29tcG9uZW50czoge31cbiAgfSk7IC8vIGRlZmF1bHQgcHJvcHNcblxuXG4gIE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wcykuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFZhbHVlID0gdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdIHx8IHt9O1xuICAgIGNvbXBvbmVudFZhbHVlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1tjb21wb25lbnRdO1xuICAgIHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSA9IGNvbXBvbmVudFZhbHVlO1xuICB9KTtcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRWYWx1ZSA9IHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSB8fCB7fTtcbiAgICBjb21wb25lbnRWYWx1ZS5kZWZhdWx0UHJvcHMgPSBwcm9wc1tjb21wb25lbnRdO1xuICAgIHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSA9IGNvbXBvbmVudFZhbHVlO1xuICB9KTsgLy8gY3NzIG92ZXJyaWRlc1xuXG4gIE9iamVjdC5rZXlzKHN0eWxlT3ZlcnJpZGVzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50VmFsdWUgPSB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gfHwge307XG4gICAgY29tcG9uZW50VmFsdWUuc3R5bGVPdmVycmlkZXMgPSBzdHlsZU92ZXJyaWRlc1tjb21wb25lbnRdO1xuICAgIHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSA9IGNvbXBvbmVudFZhbHVlO1xuICB9KTtcbiAgT2JqZWN0LmtleXMob3ZlcnJpZGVzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50VmFsdWUgPSB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gfHwge307XG4gICAgY29tcG9uZW50VmFsdWUuc3R5bGVPdmVycmlkZXMgPSBvdmVycmlkZXNbY29tcG9uZW50XTtcbiAgICB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gPSBjb21wb25lbnRWYWx1ZTtcbiAgfSk7IC8vIHRoZW1lLnNwYWNpbmdcblxuICB0aGVtZS5zcGFjaW5nID0gY3JlYXRlU3BhY2luZyhpbnB1dFRoZW1lLnNwYWNpbmcpOyAvLyB0aGVtZS5taXhpbnMuZ3V0dGVyc1xuXG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoaW5wdXRUaGVtZS5icmVha3BvaW50cyB8fCB7fSk7XG4gIGNvbnN0IHNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nO1xuICB0aGVtZS5taXhpbnMgPSBfZXh0ZW5kcyh7XG4gICAgZ3V0dGVyczogKHN0eWxlcyA9IHt9KSA9PiB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygyKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDIpXG4gICAgICB9LCBzdHlsZXMsIHtcbiAgICAgICAgW2JyZWFrcG9pbnRzLnVwKCdzbScpXTogX2V4dGVuZHMoe1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKVxuICAgICAgICB9LCBzdHlsZXNbYnJlYWtwb2ludHMudXAoJ3NtJyldKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBtaXhpbnMpO1xuXG4gIGNvbnN0IHtcbiAgICB0eXBlOiB0eXBlSW5wdXQsXG4gICAgbW9kZTogbW9kZUlucHV0XG4gIH0gPSBwYWxldHRlLFxuICAgICAgICBwYWxldHRlUmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHBhbGV0dGUsIF9leGNsdWRlZDIpO1xuXG4gIGNvbnN0IGZpbmFsTW9kZSA9IG1vZGVJbnB1dCB8fCB0eXBlSW5wdXQgfHwgJ2xpZ2h0JztcbiAgdGhlbWUucGFsZXR0ZSA9IF9leHRlbmRzKHtcbiAgICAvLyB0aGVtZS5wYWxldHRlLnRleHQuaGludFxuICAgIHRleHQ6IHtcbiAgICAgIGhpbnQ6IGZpbmFsTW9kZSA9PT0gJ2RhcmsnID8gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScgOiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgICB9LFxuICAgIG1vZGU6IGZpbmFsTW9kZSxcbiAgICB0eXBlOiBmaW5hbE1vZGVcbiAgfSwgcGFsZXR0ZVJlc3QpO1xuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlVGhlbWUgZnJvbSAnLi9jcmVhdGVUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUob3B0aW9ucywgLi4uYXJncykge1xuICByZXR1cm4gY3JlYXRlVGhlbWUoZGVlcG1lcmdlKHtcbiAgICB1bnN0YWJsZV9zdHJpY3RNb2RlOiB0cnVlXG4gIH0sIG9wdGlvbnMpLCAuLi5hcmdzKTtcbn0iLCJsZXQgd2FybmVkT25jZSA9IGZhbHNlOyAvLyBUbyByZW1vdmUgaW4gdjZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICBjb25zb2xlLndhcm4oWydNVUk6IGNyZWF0ZVN0eWxlcyBmcm9tIEBtdWkvbWF0ZXJpYWwvc3R5bGVzIGlzIGRlcHJlY2F0ZWQuJywgJ1BsZWFzZSB1c2UgQG11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJ10uam9pbignXFxuJykpO1xuICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNVbml0bGVzcyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHBhcnNlRmxvYXQodmFsdWUpKS5sZW5ndGggPT09IFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufSAvLyBQb3J0ZWQgZnJvbSBDb21wYXNzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vQ29tcGFzcy9jb21wYXNzL2Jsb2IvbWFzdGVyL2NvcmUvc3R5bGVzaGVldHMvY29tcGFzcy90eXBvZ3JhcGh5L191bml0cy5zY3NzXG4vLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQpLm1hdGNoKC9bXFxkLlxcLStdKlxccyooLiopLylbMV0gfHwgJyc7XG59IC8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0bGVzc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXRsZXNzKGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChsZW5ndGgpO1xufSAvLyBDb252ZXJ0IGFueSBDU1MgPGxlbmd0aD4gb3IgPHBlcmNlbnRhZ2U+IHZhbHVlIHRvIGFueSBhbm90aGVyLlxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vS3lsZUFNYXRoZXdzL2NvbnZlcnQtY3NzLWxlbmd0aFxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlbmd0aChiYXNlRm9udFNpemUpIHtcbiAgcmV0dXJuIChsZW5ndGgsIHRvVW5pdCkgPT4ge1xuICAgIGNvbnN0IGZyb21Vbml0ID0gZ2V0VW5pdChsZW5ndGgpOyAvLyBPcHRpbWl6ZSBmb3IgY2FzZXMgd2hlcmUgYGZyb21gIGFuZCBgdG9gIHVuaXRzIGFyZSBhY2NpZGVudGFsbHkgdGhlIHNhbWUuXG5cbiAgICBpZiAoZnJvbVVuaXQgPT09IHRvVW5pdCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9IC8vIENvbnZlcnQgaW5wdXQgbGVuZ3RoIHRvIHBpeGVscy5cblxuXG4gICAgbGV0IHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpO1xuXG4gICAgaWYgKGZyb21Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAoZnJvbVVuaXQgPT09ICdlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZyb21Vbml0ID09PSAncmVtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH1cbiAgICB9IC8vIENvbnZlcnQgbGVuZ3RoIGluIHBpeGVscyB0byB0aGUgb3V0cHV0IHVuaXRcblxuXG4gICAgbGV0IG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoO1xuXG4gICAgaWYgKHRvVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKHRvVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAodG9Vbml0ID09PSAncmVtJykge1xuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQob3V0cHV0TGVuZ3RoLnRvRml4ZWQoNSkpICsgdG9Vbml0O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduUHJvcGVydHkoe1xuICBzaXplLFxuICBncmlkXG59KSB7XG4gIGNvbnN0IHNpemVCZWxvdyA9IHNpemUgLSBzaXplICUgZ3JpZDtcbiAgY29uc3Qgc2l6ZUFib3ZlID0gc2l6ZUJlbG93ICsgZ3JpZDtcbiAgcmV0dXJuIHNpemUgLSBzaXplQmVsb3cgPCBzaXplQWJvdmUgLSBzaXplID8gc2l6ZUJlbG93IDogc2l6ZUFib3ZlO1xufSAvLyBmb250R3JpZCBmaW5kcyBhIG1pbmltYWwgZ3JpZCAoaW4gcmVtKSBmb3IgdGhlIGZvbnRTaXplIHZhbHVlcyBzbyB0aGF0IHRoZVxuLy8gbGluZUhlaWdodCBmYWxscyB1bmRlciBhIHggcGl4ZWxzIGdyaWQsIDRweCBpbiB0aGUgY2FzZSBvZiBNYXRlcmlhbCBEZXNpZ24sXG4vLyB3aXRob3V0IGNoYW5naW5nIHRoZSByZWxhdGl2ZSBsaW5lIGhlaWdodFxuXG5leHBvcnQgZnVuY3Rpb24gZm9udEdyaWQoe1xuICBsaW5lSGVpZ2h0LFxuICBwaXhlbHMsXG4gIGh0bWxGb250U2l6ZVxufSkge1xuICByZXR1cm4gcGl4ZWxzIC8gKGxpbmVIZWlnaHQgKiBodG1sRm9udFNpemUpO1xufVxuLyoqXG4gKiBnZW5lcmF0ZSBhIHJlc3BvbnNpdmUgdmVyc2lvbiBvZiBhIGdpdmVuIENTUyBwcm9wZXJ0eVxuICogQGV4YW1wbGVcbiAqIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gKiAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICogICBtaW46IDE1LFxuICogICBtYXg6IDIwLFxuICogICB1bml0OiAncHgnLFxuICogICBicmVha3BvaW50czogWzMwMCwgNjAwXSxcbiAqIH0pXG4gKlxuICogLy8gdGhpcyByZXR1cm5zXG4gKlxuICoge1xuICogICBmb250U2l6ZTogJzE1cHgnLFxuICogICAnQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpJzoge1xuICogICAgIGZvbnRTaXplOiAnMTcuNXB4JyxcbiAqICAgfSxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjYwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzIwcHgnLFxuICogICB9LFxuICogfVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jc3NQcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgdG8gYmUgbWFkZSByZXNwb25zaXZlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLm1pbiAtIFRoZSBzbWFsbGVzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLm1heCAtIFRoZSBsYXJnZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLnVuaXRdIC0gVGhlIHVuaXQgdG8gYmUgdXNlZCBmb3IgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtBcnJheS5udW1iZXJ9IFtwYXJhbXMuYnJlYWtwb2ludHNdICAtIEFuIGFycmF5IG9mIGJyZWFrcG9pbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5hbGlnblN0ZXBdIC0gUm91bmQgc2NhbGVkIHZhbHVlIHRvIGZhbGwgdW5kZXIgdGhpcyBncmlkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSByZXNwb25zaXZlIHN0eWxlcyBmb3Ige3BhcmFtcy5jc3NQcm9wZXJ0eX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZVByb3BlcnR5KHtcbiAgY3NzUHJvcGVydHksXG4gIG1pbixcbiAgbWF4LFxuICB1bml0ID0gJ3JlbScsXG4gIGJyZWFrcG9pbnRzID0gWzYwMCwgOTAwLCAxMjAwXSxcbiAgdHJhbnNmb3JtID0gbnVsbFxufSkge1xuICBjb25zdCBvdXRwdXQgPSB7XG4gICAgW2Nzc1Byb3BlcnR5XTogYCR7bWlufSR7dW5pdH1gXG4gIH07XG4gIGNvbnN0IGZhY3RvciA9IChtYXggLSBtaW4pIC8gYnJlYWtwb2ludHNbYnJlYWtwb2ludHMubGVuZ3RoIC0gMV07XG4gIGJyZWFrcG9pbnRzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XG4gICAgbGV0IHZhbHVlID0gbWluICsgZmFjdG9yICogYnJlYWtwb2ludDtcblxuICAgIGlmICh0cmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvdXRwdXRbYEBtZWRpYSAobWluLXdpZHRoOiR7YnJlYWtwb2ludH1weClgXSA9IHtcbiAgICAgIFtjc3NQcm9wZXJ0eV06IGAke01hdGgucm91bmQodmFsdWUgKiAxMDAwMCkgLyAxMDAwMH0ke3VuaXR9YFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYWRhcHRWNFRoZW1lIH0gZnJvbSAnLi9hZGFwdFY0VGhlbWUnO1xuZXhwb3J0IHsgaGV4VG9SZ2IsIHJnYlRvSGV4LCBoc2xUb1JnYiwgZGVjb21wb3NlQ29sb3IsIHJlY29tcG9zZUNvbG9yLCBnZXRDb250cmFzdFJhdGlvLCBnZXRMdW1pbmFuY2UsIGVtcGhhc2l6ZSwgYWxwaGEsIGRhcmtlbiwgbGlnaHRlbiB9IGZyb20gJ0BtdWkvc3lzdGVtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlVGhlbWUsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSB9IGZyb20gJy4vY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlU3R5bGVzIH0gZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuZXhwb3J0IHsgZ2V0VW5pdCBhcyB1bnN0YWJsZV9nZXRVbml0LCB0b1VuaXRsZXNzIGFzIHVuc3RhYmxlX3RvVW5pdGxlc3MgfSBmcm9tICcuL2Nzc1V0aWxzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzcG9uc2l2ZUZvbnRTaXplcyB9IGZyb20gJy4vcmVzcG9uc2l2ZUZvbnRTaXplcyc7XG5leHBvcnQgeyBkdXJhdGlvbiwgZWFzaW5nIH0gZnJvbSAnLi9jcmVhdGVUcmFuc2l0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lIH0gZnJvbSAnLi91c2VUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lUHJvcHMgfSBmcm9tICcuL3VzZVRoZW1lUHJvcHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHlsZWQgfSBmcm9tICcuL3N0eWxlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4cGVyaW1lbnRhbFN0eWxlZCB9IGZyb20gJy4vc3R5bGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGhlbWVQcm92aWRlciB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5leHBvcnQgeyBTdHlsZWRFbmdpbmVQcm92aWRlciB9IGZyb20gJ0BtdWkvc3lzdGVtJzsgLy8gVGhlIGxlZ2FjeSB1dGlsaXRpZXMgZnJvbSBAbXVpL3N0eWxlc1xuLy8gVGhlc2UgYXJlIGp1c3QgZW1wdHkgZnVuY3Rpb25zIHRoYXQgdGhyb3dzIHdoZW4gaW52b2tlZFxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ha2VTdHlsZXMgfSBmcm9tICcuL21ha2VTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoU3R5bGVzIH0gZnJvbSAnLi93aXRoU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFRoZW1lIH0gZnJvbSAnLi93aXRoVGhlbWUnOyIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtdWkvdXRpbHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VTdHlsZXMoKSB7XG4gIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBgTVVJOiBtYWtlU3R5bGVzIGlzIG5vdCBsb25nZXIgZXhwb3J0ZWQgZnJvbSBAbXVpL21hdGVyaWFsL3N0eWxlcy5cbllvdSBoYXZlIHRvIGltcG9ydCBpdCBmcm9tIEBtdWkvc3R5bGVzLlxuU2VlIGh0dHBzOi8vbXVpLmNvbS9yL21pZ3JhdGlvbi12NC8jbWF0ZXJpYWwtdWktY29yZS1zdHlsZXMgZm9yIG1vcmUgZGV0YWlscy5gIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgxNCkpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG11aS91dGlsc1wiO1xuaW1wb3J0IHsgaXNVbml0bGVzcywgY29udmVydExlbmd0aCwgcmVzcG9uc2l2ZVByb3BlcnR5LCBhbGlnblByb3BlcnR5LCBmb250R3JpZCB9IGZyb20gJy4vY3NzVXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZUlucHV0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGJyZWFrcG9pbnRzID0gWydzbScsICdtZCcsICdsZyddLFxuICAgIGRpc2FibGVBbGlnbiA9IGZhbHNlLFxuICAgIGZhY3RvciA9IDIsXG4gICAgdmFyaWFudHMgPSBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3N1YnRpdGxlMScsICdzdWJ0aXRsZTInLCAnYm9keTEnLCAnYm9keTInLCAnY2FwdGlvbicsICdidXR0b24nLCAnb3ZlcmxpbmUnXVxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCB0aGVtZSA9IF9leHRlbmRzKHt9LCB0aGVtZUlucHV0KTtcblxuICB0aGVtZS50eXBvZ3JhcGh5ID0gX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkpO1xuICBjb25zdCB0eXBvZ3JhcGh5ID0gdGhlbWUudHlwb2dyYXBoeTsgLy8gQ29udmVydCBiZXR3ZWVuIGNzcyBsZW5ndGhzIGUuZy4gZW0tPnB4IG9yIHB4LT5yZW1cbiAgLy8gU2V0IHRoZSBiYXNlRm9udFNpemUgZm9yIHlvdXIgcHJvamVjdC4gRGVmYXVsdHMgdG8gMTZweCAoYWxzbyB0aGUgYnJvd3NlciBkZWZhdWx0KS5cblxuICBjb25zdCBjb252ZXJ0ID0gY29udmVydExlbmd0aCh0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRWYWx1ZXMgPSBicmVha3BvaW50cy5tYXAoeCA9PiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNbeF0pO1xuICB2YXJpYW50cy5mb3JFYWNoKHZhcmlhbnQgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gdHlwb2dyYXBoeVt2YXJpYW50XTtcbiAgICBjb25zdCByZW1Gb250U2l6ZSA9IHBhcnNlRmxvYXQoY29udmVydChzdHlsZS5mb250U2l6ZSwgJ3JlbScpKTtcblxuICAgIGlmIChyZW1Gb250U2l6ZSA8PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWF4Rm9udFNpemUgPSByZW1Gb250U2l6ZTtcbiAgICBjb25zdCBtaW5Gb250U2l6ZSA9IDEgKyAobWF4Rm9udFNpemUgLSAxKSAvIGZhY3RvcjtcbiAgICBsZXQge1xuICAgICAgbGluZUhlaWdodFxuICAgIH0gPSBzdHlsZTtcblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSAmJiAhZGlzYWJsZUFsaWduKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gYE1VSTogVW5zdXBwb3J0ZWQgbm9uLXVuaXRsZXNzIGxpbmUgaGVpZ2h0IHdpdGggZ3JpZCBhbGlnbm1lbnQuXG5Vc2UgdW5pdGxlc3MgbGluZSBoZWlnaHRzIGluc3RlYWQuYCA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNikpO1xuICAgIH1cblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSkge1xuICAgICAgLy8gbWFrZSBpdCB1bml0bGVzc1xuICAgICAgbGluZUhlaWdodCA9IHBhcnNlRmxvYXQoY29udmVydChsaW5lSGVpZ2h0LCAncmVtJykpIC8gcGFyc2VGbG9hdChyZW1Gb250U2l6ZSk7XG4gICAgfVxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBpZiAoIWRpc2FibGVBbGlnbikge1xuICAgICAgdHJhbnNmb3JtID0gdmFsdWUgPT4gYWxpZ25Qcm9wZXJ0eSh7XG4gICAgICAgIHNpemU6IHZhbHVlLFxuICAgICAgICBncmlkOiBmb250R3JpZCh7XG4gICAgICAgICAgcGl4ZWxzOiA0LFxuICAgICAgICAgIGxpbmVIZWlnaHQsXG4gICAgICAgICAgaHRtbEZvbnRTaXplOiB0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHlwb2dyYXBoeVt2YXJpYW50XSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgcmVzcG9uc2l2ZVByb3BlcnR5KHtcbiAgICAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICAgICAgbWluOiBtaW5Gb250U2l6ZSxcbiAgICAgIG1heDogbWF4Rm9udFNpemUsXG4gICAgICB1bml0OiAncmVtJyxcbiAgICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50VmFsdWVzLFxuICAgICAgdHJhbnNmb3JtXG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHRoZW1lO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRoZW1lIGFzIHVzZVRoZW1lU3lzdGVtIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZVN5c3RlbShkZWZhdWx0VGhlbWUpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG11aS91dGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFN0eWxlcygpIHtcbiAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGBNVUk6IHdpdGhTdHlsZXMgaXMgbm90IGxvbmdlciBleHBvcnRlZCBmcm9tIEBtdWkvbWF0ZXJpYWwvc3R5bGVzLlxuWW91IGhhdmUgdG8gaW1wb3J0IGl0IGZyb20gQG11aS9zdHlsZXMuXG5TZWUgaHR0cHM6Ly9tdWkuY29tL3IvbWlncmF0aW9uLXY0LyNtYXRlcmlhbC11aS1jb3JlLXN0eWxlcyBmb3IgbW9yZSBkZXRhaWxzLmAgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDE1KSk7XG59IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG11aS91dGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFRoZW1lKCkge1xuICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gYE1VSTogd2l0aFRoZW1lIGlzIG5vdCBsb25nZXIgZXhwb3J0ZWQgZnJvbSBAbXVpL21hdGVyaWFsL3N0eWxlcy5cbllvdSBoYXZlIHRvIGltcG9ydCBpdCBmcm9tIEBtdWkvc3R5bGVzLlxuU2VlIGh0dHBzOi8vbXVpLmNvbS9yL21pZ3JhdGlvbi12NC8jbWF0ZXJpYWwtdWktY29yZS1zdHlsZXMgZm9yIG1vcmUgZGV0YWlscy5gIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgxNikpO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFRoZW1lUHJvcHMsIHVzZVRoZW1lV2l0aG91dERlZmF1bHQgYXMgdXNlVGhlbWUgfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5pbXBvcnQgdXNlRW5oYW5jZWRFZmZlY3QgZnJvbSAnLi4vdXRpbHMvdXNlRW5oYW5jZWRFZmZlY3QnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBOb3QgdXNlZCBpbnRlcm5hbGx5LiBVc2UgYE1lZGlhUXVlcnlMaXN0RXZlbnRgIGZyb20gbGliLmRvbS5kLnRzIGluc3RlYWQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWVkaWFRdWVyeShxdWVyeUlucHV0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpOyAvLyBXYWl0IGZvciBqc2RvbSB0byBzdXBwb3J0IHRoZSBtYXRjaCBtZWRpYSBmZWF0dXJlLlxuICAvLyBBbGwgdGhlIGJyb3dzZXJzIE1VSSBzdXBwb3J0IGhhdmUgdGhpcyBidWlsdC1pbi5cbiAgLy8gVGhpcyBkZWZlbnNpdmUgY2hlY2sgaXMgaGVyZSBmb3Igc2ltcGxpY2l0eS5cbiAgLy8gTW9zdCBvZiB0aGUgdGltZSwgdGhlIG1hdGNoIG1lZGlhIGxvZ2ljIGlzbid0IGNlbnRyYWwgdG8gcGVvcGxlIHRlc3RzLlxuXG4gIGNvbnN0IHN1cHBvcnRNYXRjaE1lZGlhID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSAndW5kZWZpbmVkJztcbiAgY29uc3Qge1xuICAgIGRlZmF1bHRNYXRjaGVzID0gZmFsc2UsXG4gICAgbWF0Y2hNZWRpYSA9IHN1cHBvcnRNYXRjaE1lZGlhID8gd2luZG93Lm1hdGNoTWVkaWEgOiBudWxsLFxuICAgIG5vU3NyID0gZmFsc2UsXG4gICAgc3NyTWF0Y2hNZWRpYSA9IG51bGxcbiAgfSA9IGdldFRoZW1lUHJvcHMoe1xuICAgIG5hbWU6ICdNdWlVc2VNZWRpYVF1ZXJ5JyxcbiAgICBwcm9wczogb3B0aW9ucyxcbiAgICB0aGVtZVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcXVlcnlJbnB1dCA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGVtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ01VSTogVGhlIGBxdWVyeWAgYXJndW1lbnQgcHJvdmlkZWQgaXMgaW52YWxpZC4nLCAnWW91IGFyZSBwcm92aWRpbmcgYSBmdW5jdGlvbiB3aXRob3V0IGEgdGhlbWUgaW4gdGhlIGNvbnRleHQuJywgJ09uZSBvZiB0aGUgcGFyZW50IGVsZW1lbnRzIG5lZWRzIHRvIHVzZSBhIFRoZW1lUHJvdmlkZXIuJ10uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBxdWVyeSA9IHR5cGVvZiBxdWVyeUlucHV0ID09PSAnZnVuY3Rpb24nID8gcXVlcnlJbnB1dCh0aGVtZSkgOiBxdWVyeUlucHV0O1xuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL15AbWVkaWEoID8pL20sICcnKTtcbiAgY29uc3QgW21hdGNoLCBzZXRNYXRjaF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKG5vU3NyICYmIHN1cHBvcnRNYXRjaE1lZGlhKSB7XG4gICAgICByZXR1cm4gbWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9XG5cbiAgICBpZiAoc3NyTWF0Y2hNZWRpYSkge1xuICAgICAgcmV0dXJuIHNzck1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgfSAvLyBPbmNlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgd2UgcmVseSBvbiB0aGVcbiAgICAvLyBldmVudCBsaXN0ZW5lcnMgdG8gcmV0dXJuIHRoZSBjb3JyZWN0IG1hdGNoZXMgdmFsdWUuXG5cblxuICAgIHJldHVybiBkZWZhdWx0TWF0Y2hlcztcbiAgfSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYWN0aXZlID0gdHJ1ZTtcblxuICAgIGlmICghc3VwcG9ydE1hdGNoTWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlMaXN0ID0gbWF0Y2hNZWRpYShxdWVyeSk7XG5cbiAgICBjb25zdCB1cGRhdGVNYXRjaCA9ICgpID0+IHtcbiAgICAgIC8vIFdvcmthcm91bmQgU2FmYXJpIHdyb25nIGltcGxlbWVudGF0aW9uIG9mIG1hdGNoTWVkaWFcbiAgICAgIC8vIFRPRE8gY2FuIHdlIHJlbW92ZSBpdD9cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL3B1bGwvMTczMTUjaXNzdWVjb21tZW50LTUyODI4NjY3N1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBzZXRNYXRjaChxdWVyeUxpc3QubWF0Y2hlcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVwZGF0ZU1hdGNoKCk7XG4gICAgcXVlcnlMaXN0LmFkZExpc3RlbmVyKHVwZGF0ZU1hdGNoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICBxdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIodXBkYXRlTWF0Y2gpO1xuICAgIH07XG4gIH0sIFtxdWVyeSwgbWF0Y2hNZWRpYSwgc3VwcG9ydE1hdGNoTWVkaWFdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoe1xuICAgICAgcXVlcnksXG4gICAgICBtYXRjaFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoO1xufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbXVpL21hdGVyaWFsL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0ZhY2Vib29rJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQgMjAyMSwgUGFsbVRvcC5cclxuICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1BhbG1Ub3AtMTAxOTQxNzI1NTkwNTkzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IGZvbnRTaXplPSdsYXJnZScgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZU1lZGlhUXVlcnkiLCJ1c2VUaGVtZSIsIkZhY2Vib29rSWNvbiIsIkZvb3RlciIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJmb290ZXIiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==