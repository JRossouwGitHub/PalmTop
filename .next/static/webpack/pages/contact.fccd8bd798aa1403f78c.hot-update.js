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

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Layout.module.css */ "./styles/Layout.module.css");
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\pages\\contact.js",
    _this = undefined,
    _s = $RefreshSig$();









var contact = function contact() {
  _s();

  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  var isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default)(theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "PalmTop | Contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().root),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(contact, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default];
});

/* harmony default export */ __webpack_exports__["default"] = (contact);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5mY2NkOGJkNzk4YWExNDAzZjc4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDMEM7QUFDcEc7QUFDQTtBQUMrRDtBQUNoRDtBQUNmLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Q7QUFDQSxJQUFJO0FBQ0osZ0JBQWdCLGdHQUE2Qjs7QUFFN0MsZ0JBQWdCLDJFQUFRLEdBQUc7QUFDM0I7QUFDQSxHQUFHLEdBQUc7OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHOztBQUVOLGtCQUFrQiwwREFBYSxzQkFBc0I7O0FBRXJELHNCQUFzQiw4REFBaUIsNkJBQTZCO0FBQ3BFO0FBQ0EsaUJBQWlCLDJFQUFRO0FBQ3pCLHlCQUF5QjtBQUN6QixhQUFhLDJFQUFRO0FBQ3JCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsZ0NBQWdDLDJFQUFRO0FBQ3hDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osc0JBQXNCLGdHQUE2Qjs7QUFFbkQ7QUFDQSxrQkFBa0IsMkVBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGdUM7QUFDQztBQUN6QjtBQUNmLFNBQVMscURBQVcsQ0FBQyxxREFBUztBQUM5QjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNOQSx3QkFBd0I7O0FBRVQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFTztBQUNQO0FBQ0EsRUFBRTs7QUFFSztBQUNQO0FBQ0EsRUFBRTtBQUNGOztBQUVPO0FBQ1A7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07OztBQUdOOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVEsdUJBQXVCO0FBQzVDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esc0JBQXNCLElBQUksRUFBRSxLQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsV0FBVztBQUMzQyx3QkFBd0Isa0NBQWtDLEVBQUUsS0FBSztBQUNqRTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUh5RDtBQUNxRztBQUN2RjtBQUNtQjtBQUNqQztBQUNtQztBQUNyQjtBQUNoQjtBQUNOO0FBQ1U7QUFDZDtBQUNZO0FBQ0U7QUFDUixDQUFDO0FBQ3BEOztBQUVxRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQndCO0FBQzlEO0FBQ2Ysa0JBQWtCLEtBQXFDO0FBQ3ZEO0FBQ0EsaUZBQWlGLENBQTBCO0FBQzNHOzs7Ozs7Ozs7Ozs7Ozs7O0FDTDBEO0FBQ21CO0FBQ3VCO0FBQ3JGLHFEQUFxRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSixnQkFBZ0IsMkVBQVEsR0FBRzs7QUFFM0IscUJBQXFCLDJFQUFRLEdBQUc7QUFDaEMsdUNBQXVDO0FBQ3ZDOztBQUVBLGtCQUFrQix3REFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLFNBQVMscURBQVU7QUFDbkIsc0JBQXNCLEtBQXFDO0FBQzNELHNDQUFzQyxDQUF5QjtBQUMvRDs7QUFFQSxTQUFTLHFEQUFVO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQix3REFBYTtBQUN4QztBQUNBLGNBQWMsbURBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQSwwQkFBMEIsMkVBQVEsR0FBRyxTQUFTLDZEQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFK0I7QUFDMEI7QUFDZjtBQUMzQjtBQUNmLGdCQUFnQixxREFBYyxDQUFDLGtEQUFZOztBQUUzQyxNQUFNLElBQXFDO0FBQzNDO0FBQ0EsSUFBSSxnREFBbUI7QUFDdkI7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaNkU7QUFDOUQ7QUFDZixrQkFBa0IsS0FBcUM7QUFDdkQ7QUFDQSxpRkFBaUYsQ0FBMEI7QUFDM0c7Ozs7Ozs7Ozs7Ozs7O0FDTDZFO0FBQzlEO0FBQ2Ysa0JBQWtCLEtBQXFDO0FBQ3ZEO0FBQ0EsaUZBQWlGLENBQTBCO0FBQzNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMK0I7QUFDaUQ7QUFDckI7QUFDM0Q7QUFDQTtBQUNBOztBQUVlLCtDQUErQztBQUM5RCxnQkFBZ0IsbUVBQVEsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLDBEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDJDQUFjO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGlFQUFpQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILE1BQU0sSUFBcUM7QUFDM0M7QUFDQSxJQUFJLGdEQUFtQjtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxLQUFLLEdBQUdKLDhEQUFRLEVBQXRCO0FBQ0EsTUFBTUssUUFBUSxHQUFHTixvRUFBYSxDQUFDSyxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FBOUI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQU0sV0FBSyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUVULHVFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsNEVBQWhCO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQVdILENBZkQ7O0dBQU1LO1VBQ1lILDREQUNHRDs7O0FBZXJCLCtEQUFlSSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9hZGFwdFY0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9jc3NVdGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy93aXRoVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3VzZU1lZGlhUXVlcnkvdXNlTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1wiZGVmYXVsdFByb3BzXCIsIFwibWl4aW5zXCIsIFwib3ZlcnJpZGVzXCIsIFwicGFsZXR0ZVwiLCBcInByb3BzXCIsIFwic3R5bGVPdmVycmlkZXNcIl0sXG4gICAgICBfZXhjbHVkZWQyID0gW1widHlwZVwiLCBcIm1vZGVcIl07XG5pbXBvcnQgeyBjcmVhdGVCcmVha3BvaW50cywgY3JlYXRlU3BhY2luZyB9IGZyb20gJ0BtdWkvc3lzdGVtJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkYXB0VjRUaGVtZShpbnB1dFRoZW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS53YXJuKFsnTVVJOiBhZGFwdFY0VGhlbWUoKSBpcyBkZXByZWNhdGVkLicsICdGb2xsb3cgdGhlIHVwZ3JhZGUgZ3VpZGUgb24gaHR0cHM6Ly9tdWkuY29tL3IvbWlncmF0aW9uLXY0I3RoZW1lLiddLmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBkZWZhdWx0UHJvcHMgPSB7fSxcbiAgICBtaXhpbnMgPSB7fSxcbiAgICBvdmVycmlkZXMgPSB7fSxcbiAgICBwYWxldHRlID0ge30sXG4gICAgcHJvcHMgPSB7fSxcbiAgICBzdHlsZU92ZXJyaWRlcyA9IHt9XG4gIH0gPSBpbnB1dFRoZW1lLFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKGlucHV0VGhlbWUsIF9leGNsdWRlZCk7XG5cbiAgY29uc3QgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgb3RoZXIsIHtcbiAgICBjb21wb25lbnRzOiB7fVxuICB9KTsgLy8gZGVmYXVsdCBwcm9wc1xuXG5cbiAgT2JqZWN0LmtleXMoZGVmYXVsdFByb3BzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50VmFsdWUgPSB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gfHwge307XG4gICAgY29tcG9uZW50VmFsdWUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzW2NvbXBvbmVudF07XG4gICAgdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdID0gY29tcG9uZW50VmFsdWU7XG4gIH0pO1xuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFZhbHVlID0gdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdIHx8IHt9O1xuICAgIGNvbXBvbmVudFZhbHVlLmRlZmF1bHRQcm9wcyA9IHByb3BzW2NvbXBvbmVudF07XG4gICAgdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdID0gY29tcG9uZW50VmFsdWU7XG4gIH0pOyAvLyBjc3Mgb3ZlcnJpZGVzXG5cbiAgT2JqZWN0LmtleXMoc3R5bGVPdmVycmlkZXMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRWYWx1ZSA9IHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSB8fCB7fTtcbiAgICBjb21wb25lbnRWYWx1ZS5zdHlsZU92ZXJyaWRlcyA9IHN0eWxlT3ZlcnJpZGVzW2NvbXBvbmVudF07XG4gICAgdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdID0gY29tcG9uZW50VmFsdWU7XG4gIH0pO1xuICBPYmplY3Qua2V5cyhvdmVycmlkZXMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRWYWx1ZSA9IHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSB8fCB7fTtcbiAgICBjb21wb25lbnRWYWx1ZS5zdHlsZU92ZXJyaWRlcyA9IG92ZXJyaWRlc1tjb21wb25lbnRdO1xuICAgIHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSA9IGNvbXBvbmVudFZhbHVlO1xuICB9KTsgLy8gdGhlbWUuc3BhY2luZ1xuXG4gIHRoZW1lLnNwYWNpbmcgPSBjcmVhdGVTcGFjaW5nKGlucHV0VGhlbWUuc3BhY2luZyk7IC8vIHRoZW1lLm1peGlucy5ndXR0ZXJzXG5cbiAgY29uc3QgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyhpbnB1dFRoZW1lLmJyZWFrcG9pbnRzIHx8IHt9KTtcbiAgY29uc3Qgc3BhY2luZyA9IHRoZW1lLnNwYWNpbmc7XG4gIHRoZW1lLm1peGlucyA9IF9leHRlbmRzKHtcbiAgICBndXR0ZXJzOiAoc3R5bGVzID0ge30pID0+IHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDIpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMilcbiAgICAgIH0sIHN0eWxlcywge1xuICAgICAgICBbYnJlYWtwb2ludHMudXAoJ3NtJyldOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDMpXG4gICAgICAgIH0sIHN0eWxlc1ticmVha3BvaW50cy51cCgnc20nKV0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIG1peGlucyk7XG5cbiAgY29uc3Qge1xuICAgIHR5cGU6IHR5cGVJbnB1dCxcbiAgICBtb2RlOiBtb2RlSW5wdXRcbiAgfSA9IHBhbGV0dGUsXG4gICAgICAgIHBhbGV0dGVSZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocGFsZXR0ZSwgX2V4Y2x1ZGVkMik7XG5cbiAgY29uc3QgZmluYWxNb2RlID0gbW9kZUlucHV0IHx8IHR5cGVJbnB1dCB8fCAnbGlnaHQnO1xuICB0aGVtZS5wYWxldHRlID0gX2V4dGVuZHMoe1xuICAgIC8vIHRoZW1lLnBhbGV0dGUudGV4dC5oaW50XG4gICAgdGV4dDoge1xuICAgICAgaGludDogZmluYWxNb2RlID09PSAnZGFyaycgPyAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyA6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICAgIH0sXG4gICAgbW9kZTogZmluYWxNb2RlLFxuICAgIHR5cGU6IGZpbmFsTW9kZVxuICB9LCBwYWxldHRlUmVzdCk7XG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVUaGVtZSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU11aVN0cmljdE1vZGVUaGVtZShvcHRpb25zLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGVUaGVtZShkZWVwbWVyZ2Uoe1xuICAgIHVuc3RhYmxlX3N0cmljdE1vZGU6IHRydWVcbiAgfSwgb3B0aW9ucyksIC4uLmFyZ3MpO1xufSIsImxldCB3YXJuZWRPbmNlID0gZmFsc2U7IC8vIFRvIHJlbW92ZSBpbiB2NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gIGlmICghd2FybmVkT25jZSkge1xuICAgIGNvbnNvbGUud2FybihbJ01VSTogY3JlYXRlU3R5bGVzIGZyb20gQG11aS9tYXRlcmlhbC9zdHlsZXMgaXMgZGVwcmVjYXRlZC4nLCAnUGxlYXNlIHVzZSBAbXVpL3N0eWxlcy9jcmVhdGVTdHlsZXMnXS5qb2luKCdcXG4nKSk7XG4gICAgd2FybmVkT25jZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufSIsImV4cG9ydCBmdW5jdGlvbiBpc1VuaXRsZXNzKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcocGFyc2VGbG9hdCh2YWx1ZSkpLmxlbmd0aCA9PT0gU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59IC8vIFBvcnRlZCBmcm9tIENvbXBhc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Db21wYXNzL2NvbXBhc3MvYmxvYi9tYXN0ZXIvY29yZS9zdHlsZXNoZWV0cy9jb21wYXNzL3R5cG9ncmFwaHkvX3VuaXRzLnNjc3Ncbi8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXQoaW5wdXQpIHtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCkubWF0Y2goL1tcXGQuXFwtK10qXFxzKiguKikvKVsxXSB8fCAnJztcbn0gLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRsZXNzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5pdGxlc3MobGVuZ3RoKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KGxlbmd0aCk7XG59IC8vIENvbnZlcnQgYW55IENTUyA8bGVuZ3RoPiBvciA8cGVyY2VudGFnZT4gdmFsdWUgdG8gYW55IGFub3RoZXIuXG4vLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9LeWxlQU1hdGhld3MvY29udmVydC1jc3MtbGVuZ3RoXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVuZ3RoKGJhc2VGb250U2l6ZSkge1xuICByZXR1cm4gKGxlbmd0aCwgdG9Vbml0KSA9PiB7XG4gICAgY29uc3QgZnJvbVVuaXQgPSBnZXRVbml0KGxlbmd0aCk7IC8vIE9wdGltaXplIGZvciBjYXNlcyB3aGVyZSBgZnJvbWAgYW5kIGB0b2AgdW5pdHMgYXJlIGFjY2lkZW50YWxseSB0aGUgc2FtZS5cblxuICAgIGlmIChmcm9tVW5pdCA9PT0gdG9Vbml0KSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0gLy8gQ29udmVydCBpbnB1dCBsZW5ndGggdG8gcGl4ZWxzLlxuXG5cbiAgICBsZXQgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCk7XG5cbiAgICBpZiAoZnJvbVVuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmIChmcm9tVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAoZnJvbVVuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfVxuICAgIH0gLy8gQ29udmVydCBsZW5ndGggaW4gcGl4ZWxzIHRvIHRoZSBvdXRwdXQgdW5pdFxuXG5cbiAgICBsZXQgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGg7XG5cbiAgICBpZiAodG9Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAodG9Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmICh0b1VuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChvdXRwdXRMZW5ndGgudG9GaXhlZCg1KSkgKyB0b1VuaXQ7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gYWxpZ25Qcm9wZXJ0eSh7XG4gIHNpemUsXG4gIGdyaWRcbn0pIHtcbiAgY29uc3Qgc2l6ZUJlbG93ID0gc2l6ZSAtIHNpemUgJSBncmlkO1xuICBjb25zdCBzaXplQWJvdmUgPSBzaXplQmVsb3cgKyBncmlkO1xuICByZXR1cm4gc2l6ZSAtIHNpemVCZWxvdyA8IHNpemVBYm92ZSAtIHNpemUgPyBzaXplQmVsb3cgOiBzaXplQWJvdmU7XG59IC8vIGZvbnRHcmlkIGZpbmRzIGEgbWluaW1hbCBncmlkIChpbiByZW0pIGZvciB0aGUgZm9udFNpemUgdmFsdWVzIHNvIHRoYXQgdGhlXG4vLyBsaW5lSGVpZ2h0IGZhbGxzIHVuZGVyIGEgeCBwaXhlbHMgZ3JpZCwgNHB4IGluIHRoZSBjYXNlIG9mIE1hdGVyaWFsIERlc2lnbixcbi8vIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHJlbGF0aXZlIGxpbmUgaGVpZ2h0XG5cbmV4cG9ydCBmdW5jdGlvbiBmb250R3JpZCh7XG4gIGxpbmVIZWlnaHQsXG4gIHBpeGVscyxcbiAgaHRtbEZvbnRTaXplXG59KSB7XG4gIHJldHVybiBwaXhlbHMgLyAobGluZUhlaWdodCAqIGh0bWxGb250U2l6ZSk7XG59XG4vKipcbiAqIGdlbmVyYXRlIGEgcmVzcG9uc2l2ZSB2ZXJzaW9uIG9mIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5XG4gKiBAZXhhbXBsZVxuICogcmVzcG9uc2l2ZVByb3BlcnR5KHtcbiAqICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXG4gKiAgIG1pbjogMTUsXG4gKiAgIG1heDogMjAsXG4gKiAgIHVuaXQ6ICdweCcsXG4gKiAgIGJyZWFrcG9pbnRzOiBbMzAwLCA2MDBdLFxuICogfSlcbiAqXG4gKiAvLyB0aGlzIHJldHVybnNcbiAqXG4gKiB7XG4gKiAgIGZvbnRTaXplOiAnMTVweCcsXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDozMDBweCknOiB7XG4gKiAgICAgZm9udFNpemU6ICcxNy41cHgnLFxuICogICB9LFxuICogICAnQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpJzoge1xuICogICAgIGZvbnRTaXplOiAnMjBweCcsXG4gKiAgIH0sXG4gKiB9XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNzc1Byb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSB0byBiZSBtYWRlIHJlc3BvbnNpdmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWluIC0gVGhlIHNtYWxsZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWF4IC0gVGhlIGxhcmdlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMudW5pdF0gLSBUaGUgdW5pdCB0byBiZSB1c2VkIGZvciB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge0FycmF5Lm51bWJlcn0gW3BhcmFtcy5icmVha3BvaW50c10gIC0gQW4gYXJyYXkgb2YgYnJlYWtwb2ludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLmFsaWduU3RlcF0gLSBSb3VuZCBzY2FsZWQgdmFsdWUgdG8gZmFsbCB1bmRlciB0aGlzIGdyaWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IHJlc3BvbnNpdmUgc3R5bGVzIGZvciB7cGFyYW1zLmNzc1Byb3BlcnR5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvcGVydHkoe1xuICBjc3NQcm9wZXJ0eSxcbiAgbWluLFxuICBtYXgsXG4gIHVuaXQgPSAncmVtJyxcbiAgYnJlYWtwb2ludHMgPSBbNjAwLCA5MDAsIDEyMDBdLFxuICB0cmFuc2Zvcm0gPSBudWxsXG59KSB7XG4gIGNvbnN0IG91dHB1dCA9IHtcbiAgICBbY3NzUHJvcGVydHldOiBgJHttaW59JHt1bml0fWBcbiAgfTtcbiAgY29uc3QgZmFjdG9yID0gKG1heCAtIG1pbikgLyBicmVha3BvaW50c1ticmVha3BvaW50cy5sZW5ndGggLSAxXTtcbiAgYnJlYWtwb2ludHMuZm9yRWFjaChicmVha3BvaW50ID0+IHtcbiAgICBsZXQgdmFsdWUgPSBtaW4gKyBmYWN0b3IgKiBicmVha3BvaW50O1xuXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIG91dHB1dFtgQG1lZGlhIChtaW4td2lkdGg6JHticmVha3BvaW50fXB4KWBdID0ge1xuICAgICAgW2Nzc1Byb3BlcnR5XTogYCR7TWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwKSAvIDEwMDAwfSR7dW5pdH1gXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGFwdFY0VGhlbWUgfSBmcm9tICcuL2FkYXB0VjRUaGVtZSc7XG5leHBvcnQgeyBoZXhUb1JnYiwgcmdiVG9IZXgsIGhzbFRvUmdiLCBkZWNvbXBvc2VDb2xvciwgcmVjb21wb3NlQ29sb3IsIGdldENvbnRyYXN0UmF0aW8sIGdldEx1bWluYW5jZSwgZW1waGFzaXplLCBhbHBoYSwgZGFya2VuLCBsaWdodGVuIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVUaGVtZSwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVTdHlsZXMgfSBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5leHBvcnQgeyBnZXRVbml0IGFzIHVuc3RhYmxlX2dldFVuaXQsIHRvVW5pdGxlc3MgYXMgdW5zdGFibGVfdG9Vbml0bGVzcyB9IGZyb20gJy4vY3NzVXRpbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnLi9yZXNwb25zaXZlRm9udFNpemVzJztcbmV4cG9ydCB7IGR1cmF0aW9uLCBlYXNpbmcgfSBmcm9tICcuL2NyZWF0ZVRyYW5zaXRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGhlbWUgfSBmcm9tICcuL3VzZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGhlbWVQcm9wcyB9IGZyb20gJy4vdXNlVGhlbWVQcm9wcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlZCB9IGZyb20gJy4vc3R5bGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXhwZXJpbWVudGFsU3R5bGVkIH0gZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmV4cG9ydCB7IFN0eWxlZEVuZ2luZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9zeXN0ZW0nOyAvLyBUaGUgbGVnYWN5IHV0aWxpdGllcyBmcm9tIEBtdWkvc3R5bGVzXG4vLyBUaGVzZSBhcmUganVzdCBlbXB0eSBmdW5jdGlvbnMgdGhhdCB0aHJvd3Mgd2hlbiBpbnZva2VkXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFrZVN0eWxlcyB9IGZyb20gJy4vbWFrZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhTdHlsZXMgfSBmcm9tICcuL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL3dpdGhUaGVtZSc7IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG11aS91dGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVN0eWxlcygpIHtcbiAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGBNVUk6IG1ha2VTdHlsZXMgaXMgbm90IGxvbmdlciBleHBvcnRlZCBmcm9tIEBtdWkvbWF0ZXJpYWwvc3R5bGVzLlxuWW91IGhhdmUgdG8gaW1wb3J0IGl0IGZyb20gQG11aS9zdHlsZXMuXG5TZWUgaHR0cHM6Ly9tdWkuY29tL3IvbWlncmF0aW9uLXY0LyNtYXRlcmlhbC11aS1jb3JlLXN0eWxlcyBmb3IgbW9yZSBkZXRhaWxzLmAgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDE0KSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBpc1VuaXRsZXNzLCBjb252ZXJ0TGVuZ3RoLCByZXNwb25zaXZlUHJvcGVydHksIGFsaWduUHJvcGVydHksIGZvbnRHcmlkIH0gZnJvbSAnLi9jc3NVdGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNwb25zaXZlRm9udFNpemVzKHRoZW1lSW5wdXQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgYnJlYWtwb2ludHMgPSBbJ3NtJywgJ21kJywgJ2xnJ10sXG4gICAgZGlzYWJsZUFsaWduID0gZmFsc2UsXG4gICAgZmFjdG9yID0gMixcbiAgICB2YXJpYW50cyA9IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MicsICdjYXB0aW9uJywgJ2J1dHRvbicsICdvdmVybGluZSddXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHRoZW1lID0gX2V4dGVuZHMoe30sIHRoZW1lSW5wdXQpO1xuXG4gIHRoZW1lLnR5cG9ncmFwaHkgPSBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeSk7XG4gIGNvbnN0IHR5cG9ncmFwaHkgPSB0aGVtZS50eXBvZ3JhcGh5OyAvLyBDb252ZXJ0IGJldHdlZW4gY3NzIGxlbmd0aHMgZS5nLiBlbS0+cHggb3IgcHgtPnJlbVxuICAvLyBTZXQgdGhlIGJhc2VGb250U2l6ZSBmb3IgeW91ciBwcm9qZWN0LiBEZWZhdWx0cyB0byAxNnB4IChhbHNvIHRoZSBicm93c2VyIGRlZmF1bHQpLlxuXG4gIGNvbnN0IGNvbnZlcnQgPSBjb252ZXJ0TGVuZ3RoKHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplKTtcbiAgY29uc3QgYnJlYWtwb2ludFZhbHVlcyA9IGJyZWFrcG9pbnRzLm1hcCh4ID0+IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1t4XSk7XG4gIHZhcmlhbnRzLmZvckVhY2godmFyaWFudCA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSB0eXBvZ3JhcGh5W3ZhcmlhbnRdO1xuICAgIGNvbnN0IHJlbUZvbnRTaXplID0gcGFyc2VGbG9hdChjb252ZXJ0KHN0eWxlLmZvbnRTaXplLCAncmVtJykpO1xuXG4gICAgaWYgKHJlbUZvbnRTaXplIDw9IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXhGb250U2l6ZSA9IHJlbUZvbnRTaXplO1xuICAgIGNvbnN0IG1pbkZvbnRTaXplID0gMSArIChtYXhGb250U2l6ZSAtIDEpIC8gZmFjdG9yO1xuICAgIGxldCB7XG4gICAgICBsaW5lSGVpZ2h0XG4gICAgfSA9IHN0eWxlO1xuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpICYmICFkaXNhYmxlQWxpZ24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBgTVVJOiBVbnN1cHBvcnRlZCBub24tdW5pdGxlc3MgbGluZSBoZWlnaHQgd2l0aCBncmlkIGFsaWdubWVudC5cblVzZSB1bml0bGVzcyBsaW5lIGhlaWdodHMgaW5zdGVhZC5gIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg2KSk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpKSB7XG4gICAgICAvLyBtYWtlIGl0IHVuaXRsZXNzXG4gICAgICBsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChjb252ZXJ0KGxpbmVIZWlnaHQsICdyZW0nKSkgLyBwYXJzZUZsb2F0KHJlbUZvbnRTaXplKTtcbiAgICB9XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGlmICghZGlzYWJsZUFsaWduKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB2YWx1ZSA9PiBhbGlnblByb3BlcnR5KHtcbiAgICAgICAgc2l6ZTogdmFsdWUsXG4gICAgICAgIGdyaWQ6IGZvbnRHcmlkKHtcbiAgICAgICAgICBwaXhlbHM6IDQsXG4gICAgICAgICAgbGluZUhlaWdodCxcbiAgICAgICAgICBodG1sRm9udFNpemU6IHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0eXBvZ3JhcGh5W3ZhcmlhbnRdID0gX2V4dGVuZHMoe30sIHN0eWxlLCByZXNwb25zaXZlUHJvcGVydHkoe1xuICAgICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXG4gICAgICBtaW46IG1pbkZvbnRTaXplLFxuICAgICAgbWF4OiBtYXhGb250U2l6ZSxcbiAgICAgIHVuaXQ6ICdyZW0nLFxuICAgICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRWYWx1ZXMsXG4gICAgICB0cmFuc2Zvcm1cbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGhlbWUgYXMgdXNlVGhlbWVTeXN0ZW0gfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lU3lzdGVtKGRlZmF1bHRUaGVtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbXVpL3V0aWxzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoU3R5bGVzKCkge1xuICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gYE1VSTogd2l0aFN0eWxlcyBpcyBub3QgbG9uZ2VyIGV4cG9ydGVkIGZyb20gQG11aS9tYXRlcmlhbC9zdHlsZXMuXG5Zb3UgaGF2ZSB0byBpbXBvcnQgaXQgZnJvbSBAbXVpL3N0eWxlcy5cblNlZSBodHRwczovL211aS5jb20vci9taWdyYXRpb24tdjQvI21hdGVyaWFsLXVpLWNvcmUtc3R5bGVzIGZvciBtb3JlIGRldGFpbHMuYCA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMTUpKTtcbn0iLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbXVpL3V0aWxzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoVGhlbWUoKSB7XG4gIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBgTVVJOiB3aXRoVGhlbWUgaXMgbm90IGxvbmdlciBleHBvcnRlZCBmcm9tIEBtdWkvbWF0ZXJpYWwvc3R5bGVzLlxuWW91IGhhdmUgdG8gaW1wb3J0IGl0IGZyb20gQG11aS9zdHlsZXMuXG5TZWUgaHR0cHM6Ly9tdWkuY29tL3IvbWlncmF0aW9uLXY0LyNtYXRlcmlhbC11aS1jb3JlLXN0eWxlcyBmb3IgbW9yZSBkZXRhaWxzLmAgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDE2KSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0VGhlbWVQcm9wcywgdXNlVGhlbWVXaXRob3V0RGVmYXVsdCBhcyB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvc3lzdGVtJztcbmltcG9ydCB1c2VFbmhhbmNlZEVmZmVjdCBmcm9tICcuLi91dGlscy91c2VFbmhhbmNlZEVmZmVjdCc7XG4vKipcbiAqIEBkZXByZWNhdGVkIE5vdCB1c2VkIGludGVybmFsbHkuIFVzZSBgTWVkaWFRdWVyeUxpc3RFdmVudGAgZnJvbSBsaWIuZG9tLmQudHMgaW5zdGVhZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNZWRpYVF1ZXJ5KHF1ZXJ5SW5wdXQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7IC8vIFdhaXQgZm9yIGpzZG9tIHRvIHN1cHBvcnQgdGhlIG1hdGNoIG1lZGlhIGZlYXR1cmUuXG4gIC8vIEFsbCB0aGUgYnJvd3NlcnMgTVVJIHN1cHBvcnQgaGF2ZSB0aGlzIGJ1aWx0LWluLlxuICAvLyBUaGlzIGRlZmVuc2l2ZSBjaGVjayBpcyBoZXJlIGZvciBzaW1wbGljaXR5LlxuICAvLyBNb3N0IG9mIHRoZSB0aW1lLCB0aGUgbWF0Y2ggbWVkaWEgbG9naWMgaXNuJ3QgY2VudHJhbCB0byBwZW9wbGUgdGVzdHMuXG5cbiAgY29uc3Qgc3VwcG9ydE1hdGNoTWVkaWEgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEgIT09ICd1bmRlZmluZWQnO1xuICBjb25zdCB7XG4gICAgZGVmYXVsdE1hdGNoZXMgPSBmYWxzZSxcbiAgICBtYXRjaE1lZGlhID0gc3VwcG9ydE1hdGNoTWVkaWEgPyB3aW5kb3cubWF0Y2hNZWRpYSA6IG51bGwsXG4gICAgbm9Tc3IgPSBmYWxzZSxcbiAgICBzc3JNYXRjaE1lZGlhID0gbnVsbFxuICB9ID0gZ2V0VGhlbWVQcm9wcyh7XG4gICAgbmFtZTogJ011aVVzZU1lZGlhUXVlcnknLFxuICAgIHByb3BzOiBvcHRpb25zLFxuICAgIHRoZW1lXG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeUlucHV0ID09PSAnZnVuY3Rpb24nICYmIHRoZW1lID09PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTVVJOiBUaGUgYHF1ZXJ5YCBhcmd1bWVudCBwcm92aWRlZCBpcyBpbnZhbGlkLicsICdZb3UgYXJlIHByb3ZpZGluZyBhIGZ1bmN0aW9uIHdpdGhvdXQgYSB0aGVtZSBpbiB0aGUgY29udGV4dC4nLCAnT25lIG9mIHRoZSBwYXJlbnQgZWxlbWVudHMgbmVlZHMgdG8gdXNlIGEgVGhlbWVQcm92aWRlci4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHF1ZXJ5ID0gdHlwZW9mIHF1ZXJ5SW5wdXQgPT09ICdmdW5jdGlvbicgPyBxdWVyeUlucHV0KHRoZW1lKSA6IHF1ZXJ5SW5wdXQ7XG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXkBtZWRpYSggPykvbSwgJycpO1xuICBjb25zdCBbbWF0Y2gsIHNldE1hdGNoXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAobm9Tc3IgJiYgc3VwcG9ydE1hdGNoTWVkaWEpIHtcbiAgICAgIHJldHVybiBtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH1cblxuICAgIGlmIChzc3JNYXRjaE1lZGlhKSB7XG4gICAgICByZXR1cm4gc3NyTWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9IC8vIE9uY2UgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLCB3ZSByZWx5IG9uIHRoZVxuICAgIC8vIGV2ZW50IGxpc3RlbmVycyB0byByZXR1cm4gdGhlIGNvcnJlY3QgbWF0Y2hlcyB2YWx1ZS5cblxuXG4gICAgcmV0dXJuIGRlZmF1bHRNYXRjaGVzO1xuICB9KTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBhY3RpdmUgPSB0cnVlO1xuXG4gICAgaWYgKCFzdXBwb3J0TWF0Y2hNZWRpYSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUxpc3QgPSBtYXRjaE1lZGlhKHF1ZXJ5KTtcblxuICAgIGNvbnN0IHVwZGF0ZU1hdGNoID0gKCkgPT4ge1xuICAgICAgLy8gV29ya2Fyb3VuZCBTYWZhcmkgd3JvbmcgaW1wbGVtZW50YXRpb24gb2YgbWF0Y2hNZWRpYVxuICAgICAgLy8gVE9ETyBjYW4gd2UgcmVtb3ZlIGl0P1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvcHVsbC8xNzMxNSNpc3N1ZWNvbW1lbnQtNTI4Mjg2Njc3XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIHNldE1hdGNoKHF1ZXJ5TGlzdC5tYXRjaGVzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdXBkYXRlTWF0Y2goKTtcbiAgICBxdWVyeUxpc3QuYWRkTGlzdGVuZXIodXBkYXRlTWF0Y2gpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgIHF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcih1cGRhdGVNYXRjaCk7XG4gICAgfTtcbiAgfSwgW3F1ZXJ5LCBtYXRjaE1lZGlhLCBzdXBwb3J0TWF0Y2hNZWRpYV0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh7XG4gICAgICBxdWVyeSxcbiAgICAgIG1hdGNoXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2g7XG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL01ldGEnXHJcblxyXG5jb25zdCBjb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1ldGEgdGl0bGU9J1BhbG1Ub3AgfCBDb250YWN0JyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Db250YWN0PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlTWVkaWFRdWVyeSIsInVzZVRoZW1lIiwiRm9vdGVyIiwiTWV0YSIsImNvbnRhY3QiLCJ0aGVtZSIsImlzTW9iaWxlIiwiYnJlYWtwb2ludHMiLCJkb3duIiwicm9vdCIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=