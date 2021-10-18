"use strict";
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./node_modules/@mui/material/Box/Box.js":
/*!***********************************************!*\
  !*** ./node_modules/@mui/material/Box/Box.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ "./node_modules/@mui/material/styles/index.js");


const defaultTheme = (0,_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)();
/**
 * @ignore - do not document.
 */

const Box = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.createBox)({
  defaultTheme
});
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./node_modules/@mui/material/Box/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Box/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./node_modules/@mui/material/Box/Box.js");


/***/ }),

/***/ "./node_modules/@mui/material/Grid/Grid.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Grid/Grid.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRowGap": function() { return /* binding */ generateRowGap; },
/* harmony export */   "generateColumnGap": function() { return /* binding */ generateColumnGap; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/index.js");
/* harmony import */ var _utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/requirePropFactory */ "./node_modules/@mui/material/utils/requirePropFactory.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _GridContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GridContext */ "./node_modules/@mui/material/Grid/GridContext.js");
/* harmony import */ var _gridClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gridClasses */ "./node_modules/@mui/material/Grid/gridClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


const _excluded = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "lg", "md", "rowSpacing", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"];
// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/












function getOffset(val) {
  const parse = parseFloat(val);
  return `${parse}${String(val).replace(String(parse), '') || 'px'}`;
}

function generateGrid(globalStyles, theme, breakpoint, ownerState) {
  const size = ownerState[breakpoint];

  if (!size) {
    return;
  }

  let styles = {};

  if (size === true) {
    // For the auto layouting
    styles = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%'
    };
  } else if (size === 'auto') {
    styles = {
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: 'none',
      width: 'auto'
    };
  } else {
    const columnsBreakpointValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_6__.unstable_resolveBreakpointValues)({
      values: ownerState.columns,
      base: theme.breakpoints.values
    }); // Keep 7 significant numbers.

    const width = `${Math.round(size / columnsBreakpointValues[breakpoint] * 10e7) / 10e5}%`;
    let more = {};

    if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
      const themeSpacing = theme.spacing(ownerState.columnSpacing);

      if (themeSpacing !== '0px') {
        const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
        more = {
          flexBasis: fullWidth,
          maxWidth: fullWidth
        };
      }
    } // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41


    styles = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    }, more);
  } // No need for a media query for the first size.


  if (theme.breakpoints.values[breakpoint] === 0) {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateDirection({
  theme,
  ownerState
}) {
  return (0,_mui_system__WEBPACK_IMPORTED_MODULE_6__.handleBreakpoints)({
    theme
  }, ownerState.direction, propValue => {
    const output = {
      flexDirection: propValue
    };

    if (propValue.indexOf('column') === 0) {
      output[`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_7__.default.item}`] = {
        maxWidth: 'none'
      };
    }

    return output;
  });
}

function generateRowGap({
  theme,
  ownerState
}) {
  const {
    container,
    rowSpacing
  } = ownerState;
  let styles = {};

  if (container && rowSpacing !== 0) {
    styles = (0,_mui_system__WEBPACK_IMPORTED_MODULE_6__.handleBreakpoints)({
      theme
    }, rowSpacing, propValue => {
      const themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== '0px') {
        return {
          marginTop: `-${getOffset(themeSpacing)}`,
          [`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_7__.default.item}`]: {
            paddingTop: getOffset(themeSpacing)
          }
        };
      }

      return {};
    });
  }

  return styles;
}
function generateColumnGap({
  theme,
  ownerState
}) {
  const {
    container,
    columnSpacing
  } = ownerState;
  let styles = {};

  if (container && columnSpacing !== 0) {
    styles = (0,_mui_system__WEBPACK_IMPORTED_MODULE_6__.handleBreakpoints)({
      theme
    }, columnSpacing, propValue => {
      const themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== '0px') {
        return {
          width: `calc(100% + ${getOffset(themeSpacing)})`,
          marginLeft: `-${getOffset(themeSpacing)}`,
          [`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_7__.default.item}`]: {
            paddingLeft: getOffset(themeSpacing)
          }
        };
      }

      return {};
    });
  }

  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',

const GridRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__.default)('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      container,
      direction,
      item,
      lg,
      md,
      sm,
      spacing,
      wrap,
      xl,
      xs,
      zeroMinWidth
    } = props.ownerState;
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, container && spacing !== 0 && styles[`spacing-xs-${String(spacing)}`], direction !== 'row' && styles[`direction-xs-${String(direction)}`], wrap !== 'wrap' && styles[`wrap-xs-${String(wrap)}`], xs !== false && styles[`grid-xs-${String(xs)}`], sm !== false && styles[`grid-sm-${String(sm)}`], md !== false && styles[`grid-md-${String(md)}`], lg !== false && styles[`grid-lg-${String(lg)}`], xl !== false && styles[`grid-xl-${String(xl)}`]];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
  boxSizing: 'border-box'
}, ownerState.container && {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
}, ownerState.item && {
  margin: 0 // For instance, it's useful when used with a `figure` element.

}, ownerState.zeroMinWidth && {
  minWidth: 0
}, ownerState.wrap === 'nowrap' && {
  flexWrap: 'nowrap'
}, ownerState.wrap === 'reverse' && {
  flexWrap: 'wrap-reverse'
}), generateDirection, generateRowGap, generateColumnGap, ({
  theme,
  ownerState
}) => theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
  // Use side effect over immutability for better performance.
  generateGrid(globalStyles, theme, breakpoint, ownerState);
  return globalStyles;
}, {}));

const useUtilityClasses = ownerState => {
  const {
    classes,
    container,
    direction,
    item,
    lg,
    md,
    sm,
    spacing,
    wrap,
    xl,
    xs,
    zeroMinWidth
  } = ownerState;
  const slots = {
    root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth', container && spacing !== 0 && `spacing-xs-${String(spacing)}`, direction !== 'row' && `direction-xs-${String(direction)}`, wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, xs !== false && `grid-xs-${String(xs)}`, sm !== false && `grid-sm-${String(sm)}`, md !== false && `grid-md-${String(md)}`, lg !== false && `grid-lg-${String(lg)}`, xl !== false && `grid-xl-${String(xl)}`]
  };
  return (0,_mui_core__WEBPACK_IMPORTED_MODULE_9__.unstable_composeClasses)(slots, _gridClasses__WEBPACK_IMPORTED_MODULE_7__.getGridUtilityClass, classes);
};

const Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Grid(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__.default)({
    props: inProps,
    name: 'MuiGrid'
  });
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_6__.unstable_extendSxProp)(themeProps);

  const {
    className,
    columns: columnsProp = 12,
    columnSpacing: columnSpacingProp,
    component = 'div',
    container = false,
    direction = 'row',
    item = false,
    lg = false,
    md = false,
    rowSpacing: rowSpacingProp,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, _excluded);

  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columns = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_GridContext__WEBPACK_IMPORTED_MODULE_11__.default) || columnsProp;

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
    columns,
    container,
    direction,
    item,
    lg,
    md,
    sm,
    rowSpacing,
    columnSpacing,
    wrap,
    xl,
    xs,
    zeroMinWidth
  });

  const classes = useUtilityClasses(ownerState);

  const wrapChild = element => columns !== 12 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GridContext__WEBPACK_IMPORTED_MODULE_11__.default.Provider, {
    value: columns,
    children: element
  }) : element;

  return wrapChild( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(GridRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ownerState: ownerState,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    as: component,
    ref: ref
  }, other)));
});
 true ? Grid.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The number of columns.
   * @default 12
   */
  columns: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]),

  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row']), prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),

  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),

  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['nowrap', 'wrap-reverse', 'wrap']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   * @default false
   */
  xl: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;

if (true) {
  const requireProp = (0,_utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_12__.default)('Grid', Grid); // eslint-disable-next-line no-useless-concat

  Grid['propTypes' + ''] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, Grid.propTypes, {
    direction: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('item')
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./node_modules/@mui/material/Grid/GridContext.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Grid/GridContext.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

const GridContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  GridContext.displayName = 'GridContext';
}

/* harmony default export */ __webpack_exports__["default"] = (GridContext);

/***/ }),

/***/ "./node_modules/@mui/material/Grid/gridClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Grid/gridClasses.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGridUtilityClass": function() { return /* binding */ getGridUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/index.js");

function getGridUtilityClass(slot) {
  return (0,_mui_core__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClass)('MuiGrid', slot);
}
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridClasses = (0,_mui_core__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth', // spacings
...SPACINGS.map(spacing => `spacing-xs-${spacing}`), // direction values
...DIRECTIONS.map(direction => `direction-xs-${direction}`), // wrap values
...WRAPS.map(wrap => `wrap-xs-${wrap}`), // grid sizes for all breakpoints
...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);
/* harmony default export */ __webpack_exports__["default"] = (gridClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Grid/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@mui/material/Grid/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "gridClasses": function() { return /* reexport safe */ _gridClasses__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _gridClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gridClasses */ "./node_modules/@mui/material/Grid/gridClasses.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gridClasses__WEBPACK_IMPORTED_MODULE_1__) if(["default","gridClasses"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _gridClasses__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

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
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
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
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().root),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
          sx: {
            width: '100%'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
            container: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
              item: true,
              lg: 4,
              md: 4,
              sm: 12,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_PortfolioCard__WEBPACK_IMPORTED_MODULE_2__.default, {
                src: _img_ElectricAir_PNG__WEBPACK_IMPORTED_MODULE_3__.default,
                alt: 'Electric Air Img',
                company: 'Electric Air',
                link: 'www.electricair.co.nz'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), isMobile ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 36
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLmI3YzEzZDA1NzYyOGVlODZiMjgxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDeEMscUJBQXFCLG9EQUFXO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHNEQUFTO0FBQ3JCO0FBQ0EsQ0FBQztBQUNELCtEQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWa0Y7QUFDMUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUNJO0FBQ1g7QUFDNEg7QUFDOUU7QUFDVDtBQUN2QjtBQUNjO0FBQ1o7QUFDeUI7QUFDakI7O0FBRWhEO0FBQ0E7QUFDQSxZQUFZLE1BQU0sRUFBRSwrQ0FBK0M7QUFDbkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0NBQW9DLDZFQUF1QjtBQUMzRDtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSLHFCQUFxQixxRUFBcUU7QUFDMUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxPQUFPLElBQUksd0JBQXdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBLGFBQWEsMkVBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxTQUFTLDhEQUFpQjtBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsc0RBQWdCLENB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bC9Cb3gvQm94LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9HcmlkL0dyaWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL0dyaWQvR3JpZENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL0dyaWQvZ3JpZENsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL0dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVCb3ggfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJy4uL3N0eWxlcyc7XG5jb25zdCBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuLyoqXG4gKiBAaWdub3JlIC0gZG8gbm90IGRvY3VtZW50LlxuICovXG5cbmNvbnN0IEJveCA9IGNyZWF0ZUJveCh7XG4gIGRlZmF1bHRUaGVtZVxufSk7XG5leHBvcnQgZGVmYXVsdCBCb3g7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcImNsYXNzTmFtZVwiLCBcImNvbHVtbnNcIiwgXCJjb2x1bW5TcGFjaW5nXCIsIFwiY29tcG9uZW50XCIsIFwiY29udGFpbmVyXCIsIFwiZGlyZWN0aW9uXCIsIFwiaXRlbVwiLCBcImxnXCIsIFwibWRcIiwgXCJyb3dTcGFjaW5nXCIsIFwic21cIiwgXCJzcGFjaW5nXCIsIFwid3JhcFwiLCBcInhsXCIsIFwieHNcIiwgXCJ6ZXJvTWluV2lkdGhcIl07XG4vLyBBIGdyaWQgY29tcG9uZW50IHVzaW5nIHRoZSBmb2xsb3dpbmcgbGlicyBhcyBpbnNwaXJhdGlvbi5cbi8vXG4vLyBGb3IgdGhlIGltcGxlbWVudGF0aW9uOlxuLy8gLSBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjMvbGF5b3V0L2dyaWQvXG4vLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlzdG9mZXJqb3NlcGgvZmxleGJveGdyaWQvYmxvYi9tYXN0ZXIvc3JjL2Nzcy9mbGV4Ym94Z3JpZC5jc3Ncbi8vIC0gaHR0cHM6Ly9naXRodWIuY29tL3JveWxlZTA3MDQvcmVhY3QtZmxleGJveC1ncmlkXG4vLyAtIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhcmpzLm9yZy9sYXRlc3QvbGF5b3V0L2ludHJvZHVjdGlvblxuLy9cbi8vIEZvbGxvdyB0aGlzIGZsZXhib3ggR3VpZGUgdG8gYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHVuZGVybHlpbmcgbW9kZWw6XG4vLyAtIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL2EtZ3VpZGUtdG8tZmxleGJveC9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHVuc3RhYmxlX2V4dGVuZFN4UHJvcCBhcyBleHRlbmRTeFByb3AsIGhhbmRsZUJyZWFrcG9pbnRzLCB1bnN0YWJsZV9yZXNvbHZlQnJlYWtwb2ludFZhbHVlcyBhcyByZXNvbHZlQnJlYWtwb2ludFZhbHVlcyB9IGZyb20gJ0BtdWkvc3lzdGVtJztcbmltcG9ydCB7IHVuc3RhYmxlX2NvbXBvc2VDbGFzc2VzIGFzIGNvbXBvc2VDbGFzc2VzIH0gZnJvbSAnQG11aS9jb3JlJztcbmltcG9ydCByZXF1aXJlUHJvcEZhY3RvcnkgZnJvbSAnLi4vdXRpbHMvcmVxdWlyZVByb3BGYWN0b3J5JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3N0eWxlZCc7XG5pbXBvcnQgdXNlVGhlbWVQcm9wcyBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWVQcm9wcyc7XG5pbXBvcnQgR3JpZENvbnRleHQgZnJvbSAnLi9HcmlkQ29udGV4dCc7XG5pbXBvcnQgZ3JpZENsYXNzZXMsIHsgZ2V0R3JpZFV0aWxpdHlDbGFzcyB9IGZyb20gJy4vZ3JpZENsYXNzZXMnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcblxuZnVuY3Rpb24gZ2V0T2Zmc2V0KHZhbCkge1xuICBjb25zdCBwYXJzZSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGAke3BhcnNlfSR7U3RyaW5nKHZhbCkucmVwbGFjZShTdHJpbmcocGFyc2UpLCAnJykgfHwgJ3B4J31gO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUdyaWQoZ2xvYmFsU3R5bGVzLCB0aGVtZSwgYnJlYWtwb2ludCwgb3duZXJTdGF0ZSkge1xuICBjb25zdCBzaXplID0gb3duZXJTdGF0ZVticmVha3BvaW50XTtcblxuICBpZiAoIXNpemUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgc3R5bGVzID0ge307XG5cbiAgaWYgKHNpemUgPT09IHRydWUpIHtcbiAgICAvLyBGb3IgdGhlIGF1dG8gbGF5b3V0aW5nXG4gICAgc3R5bGVzID0ge1xuICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgZmxleEdyb3c6IDEsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfTtcbiAgfSBlbHNlIGlmIChzaXplID09PSAnYXV0bycpIHtcbiAgICBzdHlsZXMgPSB7XG4gICAgICBmbGV4QmFzaXM6ICdhdXRvJyxcbiAgICAgIGZsZXhHcm93OiAwLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIG1heFdpZHRoOiAnbm9uZScsXG4gICAgICB3aWR0aDogJ2F1dG8nXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjb2x1bW5zQnJlYWtwb2ludFZhbHVlcyA9IHJlc29sdmVCcmVha3BvaW50VmFsdWVzKHtcbiAgICAgIHZhbHVlczogb3duZXJTdGF0ZS5jb2x1bW5zLFxuICAgICAgYmFzZTogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzXG4gICAgfSk7IC8vIEtlZXAgNyBzaWduaWZpY2FudCBudW1iZXJzLlxuXG4gICAgY29uc3Qgd2lkdGggPSBgJHtNYXRoLnJvdW5kKHNpemUgLyBjb2x1bW5zQnJlYWtwb2ludFZhbHVlc1ticmVha3BvaW50XSAqIDEwZTcpIC8gMTBlNX0lYDtcbiAgICBsZXQgbW9yZSA9IHt9O1xuXG4gICAgaWYgKG93bmVyU3RhdGUuY29udGFpbmVyICYmIG93bmVyU3RhdGUuaXRlbSAmJiBvd25lclN0YXRlLmNvbHVtblNwYWNpbmcgIT09IDApIHtcbiAgICAgIGNvbnN0IHRoZW1lU3BhY2luZyA9IHRoZW1lLnNwYWNpbmcob3duZXJTdGF0ZS5jb2x1bW5TcGFjaW5nKTtcblxuICAgICAgaWYgKHRoZW1lU3BhY2luZyAhPT0gJzBweCcpIHtcbiAgICAgICAgY29uc3QgZnVsbFdpZHRoID0gYGNhbGMoJHt3aWR0aH0gKyAke2dldE9mZnNldCh0aGVtZVNwYWNpbmcpfSlgO1xuICAgICAgICBtb3JlID0ge1xuICAgICAgICAgIGZsZXhCYXNpczogZnVsbFdpZHRoLFxuICAgICAgICAgIG1heFdpZHRoOiBmdWxsV2lkdGhcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IC8vIENsb3NlIHRvIHRoZSBib290c3RyYXAgaW1wbGVtZW50YXRpb246XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvOGZjY2FhMjQzOWU5N2VjNzJhNGI3ZGM0MmNjYzFmNjQ5NzkwYWRiMC9zY3NzL21peGlucy9fZ3JpZC5zY3NzI0w0MVxuXG5cbiAgICBzdHlsZXMgPSBfZXh0ZW5kcyh7XG4gICAgICBmbGV4QmFzaXM6IHdpZHRoLFxuICAgICAgZmxleEdyb3c6IDAsXG4gICAgICBtYXhXaWR0aDogd2lkdGhcbiAgICB9LCBtb3JlKTtcbiAgfSAvLyBObyBuZWVkIGZvciBhIG1lZGlhIHF1ZXJ5IGZvciB0aGUgZmlyc3Qgc2l6ZS5cblxuXG4gIGlmICh0aGVtZS5icmVha3BvaW50cy52YWx1ZXNbYnJlYWtwb2ludF0gPT09IDApIHtcbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFN0eWxlcywgc3R5bGVzKTtcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWxTdHlsZXNbdGhlbWUuYnJlYWtwb2ludHMudXAoYnJlYWtwb2ludCldID0gc3R5bGVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGlyZWN0aW9uKHtcbiAgdGhlbWUsXG4gIG93bmVyU3RhdGVcbn0pIHtcbiAgcmV0dXJuIGhhbmRsZUJyZWFrcG9pbnRzKHtcbiAgICB0aGVtZVxuICB9LCBvd25lclN0YXRlLmRpcmVjdGlvbiwgcHJvcFZhbHVlID0+IHtcbiAgICBjb25zdCBvdXRwdXQgPSB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiBwcm9wVmFsdWVcbiAgICB9O1xuXG4gICAgaWYgKHByb3BWYWx1ZS5pbmRleE9mKCdjb2x1bW4nKSA9PT0gMCkge1xuICAgICAgb3V0cHV0W2AmID4gLiR7Z3JpZENsYXNzZXMuaXRlbX1gXSA9IHtcbiAgICAgICAgbWF4V2lkdGg6ICdub25lJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93R2FwKHtcbiAgdGhlbWUsXG4gIG93bmVyU3RhdGVcbn0pIHtcbiAgY29uc3Qge1xuICAgIGNvbnRhaW5lcixcbiAgICByb3dTcGFjaW5nXG4gIH0gPSBvd25lclN0YXRlO1xuICBsZXQgc3R5bGVzID0ge307XG5cbiAgaWYgKGNvbnRhaW5lciAmJiByb3dTcGFjaW5nICE9PSAwKSB7XG4gICAgc3R5bGVzID0gaGFuZGxlQnJlYWtwb2ludHMoe1xuICAgICAgdGhlbWVcbiAgICB9LCByb3dTcGFjaW5nLCBwcm9wVmFsdWUgPT4ge1xuICAgICAgY29uc3QgdGhlbWVTcGFjaW5nID0gdGhlbWUuc3BhY2luZyhwcm9wVmFsdWUpO1xuXG4gICAgICBpZiAodGhlbWVTcGFjaW5nICE9PSAnMHB4Jykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hcmdpblRvcDogYC0ke2dldE9mZnNldCh0aGVtZVNwYWNpbmcpfWAsXG4gICAgICAgICAgW2AmID4gLiR7Z3JpZENsYXNzZXMuaXRlbX1gXToge1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogZ2V0T2Zmc2V0KHRoZW1lU3BhY2luZylcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb2x1bW5HYXAoe1xuICB0aGVtZSxcbiAgb3duZXJTdGF0ZVxufSkge1xuICBjb25zdCB7XG4gICAgY29udGFpbmVyLFxuICAgIGNvbHVtblNwYWNpbmdcbiAgfSA9IG93bmVyU3RhdGU7XG4gIGxldCBzdHlsZXMgPSB7fTtcblxuICBpZiAoY29udGFpbmVyICYmIGNvbHVtblNwYWNpbmcgIT09IDApIHtcbiAgICBzdHlsZXMgPSBoYW5kbGVCcmVha3BvaW50cyh7XG4gICAgICB0aGVtZVxuICAgIH0sIGNvbHVtblNwYWNpbmcsIHByb3BWYWx1ZSA9PiB7XG4gICAgICBjb25zdCB0aGVtZVNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nKHByb3BWYWx1ZSk7XG5cbiAgICAgIGlmICh0aGVtZVNwYWNpbmcgIT09ICcwcHgnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAke2dldE9mZnNldCh0aGVtZVNwYWNpbmcpfSlgLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IGAtJHtnZXRPZmZzZXQodGhlbWVTcGFjaW5nKX1gLFxuICAgICAgICAgIFtgJiA+IC4ke2dyaWRDbGFzc2VzLml0ZW19YF06IHtcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBnZXRPZmZzZXQodGhlbWVTcGFjaW5nKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHt9O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn0gLy8gRGVmYXVsdCBDU1MgdmFsdWVzXG4vLyBmbGV4OiAnMCAxIGF1dG8nLFxuLy8gZmxleERpcmVjdGlvbjogJ3JvdycsXG4vLyBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4vLyBmbGV4V3JhcDogJ25vd3JhcCcsXG4vLyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXG5jb25zdCBHcmlkUm9vdCA9IHN0eWxlZCgnZGl2Jywge1xuICBuYW1lOiAnTXVpR3JpZCcsXG4gIHNsb3Q6ICdSb290JyxcbiAgb3ZlcnJpZGVzUmVzb2x2ZXI6IChwcm9wcywgc3R5bGVzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgaXRlbSxcbiAgICAgIGxnLFxuICAgICAgbWQsXG4gICAgICBzbSxcbiAgICAgIHNwYWNpbmcsXG4gICAgICB3cmFwLFxuICAgICAgeGwsXG4gICAgICB4cyxcbiAgICAgIHplcm9NaW5XaWR0aFxuICAgIH0gPSBwcm9wcy5vd25lclN0YXRlO1xuICAgIHJldHVybiBbc3R5bGVzLnJvb3QsIGNvbnRhaW5lciAmJiBzdHlsZXMuY29udGFpbmVyLCBpdGVtICYmIHN0eWxlcy5pdGVtLCB6ZXJvTWluV2lkdGggJiYgc3R5bGVzLnplcm9NaW5XaWR0aCwgY29udGFpbmVyICYmIHNwYWNpbmcgIT09IDAgJiYgc3R5bGVzW2BzcGFjaW5nLXhzLSR7U3RyaW5nKHNwYWNpbmcpfWBdLCBkaXJlY3Rpb24gIT09ICdyb3cnICYmIHN0eWxlc1tgZGlyZWN0aW9uLXhzLSR7U3RyaW5nKGRpcmVjdGlvbil9YF0sIHdyYXAgIT09ICd3cmFwJyAmJiBzdHlsZXNbYHdyYXAteHMtJHtTdHJpbmcod3JhcCl9YF0sIHhzICE9PSBmYWxzZSAmJiBzdHlsZXNbYGdyaWQteHMtJHtTdHJpbmcoeHMpfWBdLCBzbSAhPT0gZmFsc2UgJiYgc3R5bGVzW2BncmlkLXNtLSR7U3RyaW5nKHNtKX1gXSwgbWQgIT09IGZhbHNlICYmIHN0eWxlc1tgZ3JpZC1tZC0ke1N0cmluZyhtZCl9YF0sIGxnICE9PSBmYWxzZSAmJiBzdHlsZXNbYGdyaWQtbGctJHtTdHJpbmcobGcpfWBdLCB4bCAhPT0gZmFsc2UgJiYgc3R5bGVzW2BncmlkLXhsLSR7U3RyaW5nKHhsKX1gXV07XG4gIH1cbn0pKCh7XG4gIG93bmVyU3RhdGVcbn0pID0+IF9leHRlbmRzKHtcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbn0sIG93bmVyU3RhdGUuY29udGFpbmVyICYmIHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4V3JhcDogJ3dyYXAnLFxuICB3aWR0aDogJzEwMCUnXG59LCBvd25lclN0YXRlLml0ZW0gJiYge1xuICBtYXJnaW46IDAgLy8gRm9yIGluc3RhbmNlLCBpdCdzIHVzZWZ1bCB3aGVuIHVzZWQgd2l0aCBhIGBmaWd1cmVgIGVsZW1lbnQuXG5cbn0sIG93bmVyU3RhdGUuemVyb01pbldpZHRoICYmIHtcbiAgbWluV2lkdGg6IDBcbn0sIG93bmVyU3RhdGUud3JhcCA9PT0gJ25vd3JhcCcgJiYge1xuICBmbGV4V3JhcDogJ25vd3JhcCdcbn0sIG93bmVyU3RhdGUud3JhcCA9PT0gJ3JldmVyc2UnICYmIHtcbiAgZmxleFdyYXA6ICd3cmFwLXJldmVyc2UnXG59KSwgZ2VuZXJhdGVEaXJlY3Rpb24sIGdlbmVyYXRlUm93R2FwLCBnZW5lcmF0ZUNvbHVtbkdhcCwgKHtcbiAgdGhlbWUsXG4gIG93bmVyU3RhdGVcbn0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLmtleXMucmVkdWNlKChnbG9iYWxTdHlsZXMsIGJyZWFrcG9pbnQpID0+IHtcbiAgLy8gVXNlIHNpZGUgZWZmZWN0IG92ZXIgaW1tdXRhYmlsaXR5IGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gIGdlbmVyYXRlR3JpZChnbG9iYWxTdHlsZXMsIHRoZW1lLCBicmVha3BvaW50LCBvd25lclN0YXRlKTtcbiAgcmV0dXJuIGdsb2JhbFN0eWxlcztcbn0sIHt9KSk7XG5cbmNvbnN0IHVzZVV0aWxpdHlDbGFzc2VzID0gb3duZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzLFxuICAgIGNvbnRhaW5lcixcbiAgICBkaXJlY3Rpb24sXG4gICAgaXRlbSxcbiAgICBsZyxcbiAgICBtZCxcbiAgICBzbSxcbiAgICBzcGFjaW5nLFxuICAgIHdyYXAsXG4gICAgeGwsXG4gICAgeHMsXG4gICAgemVyb01pbldpZHRoXG4gIH0gPSBvd25lclN0YXRlO1xuICBjb25zdCBzbG90cyA9IHtcbiAgICByb290OiBbJ3Jvb3QnLCBjb250YWluZXIgJiYgJ2NvbnRhaW5lcicsIGl0ZW0gJiYgJ2l0ZW0nLCB6ZXJvTWluV2lkdGggJiYgJ3plcm9NaW5XaWR0aCcsIGNvbnRhaW5lciAmJiBzcGFjaW5nICE9PSAwICYmIGBzcGFjaW5nLXhzLSR7U3RyaW5nKHNwYWNpbmcpfWAsIGRpcmVjdGlvbiAhPT0gJ3JvdycgJiYgYGRpcmVjdGlvbi14cy0ke1N0cmluZyhkaXJlY3Rpb24pfWAsIHdyYXAgIT09ICd3cmFwJyAmJiBgd3JhcC14cy0ke1N0cmluZyh3cmFwKX1gLCB4cyAhPT0gZmFsc2UgJiYgYGdyaWQteHMtJHtTdHJpbmcoeHMpfWAsIHNtICE9PSBmYWxzZSAmJiBgZ3JpZC1zbS0ke1N0cmluZyhzbSl9YCwgbWQgIT09IGZhbHNlICYmIGBncmlkLW1kLSR7U3RyaW5nKG1kKX1gLCBsZyAhPT0gZmFsc2UgJiYgYGdyaWQtbGctJHtTdHJpbmcobGcpfWAsIHhsICE9PSBmYWxzZSAmJiBgZ3JpZC14bC0ke1N0cmluZyh4bCl9YF1cbiAgfTtcbiAgcmV0dXJuIGNvbXBvc2VDbGFzc2VzKHNsb3RzLCBnZXRHcmlkVXRpbGl0eUNsYXNzLCBjbGFzc2VzKTtcbn07XG5cbmNvbnN0IEdyaWQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBHcmlkKGluUHJvcHMsIHJlZikge1xuICBjb25zdCB0aGVtZVByb3BzID0gdXNlVGhlbWVQcm9wcyh7XG4gICAgcHJvcHM6IGluUHJvcHMsXG4gICAgbmFtZTogJ011aUdyaWQnXG4gIH0pO1xuICBjb25zdCBwcm9wcyA9IGV4dGVuZFN4UHJvcCh0aGVtZVByb3BzKTtcblxuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbHVtbnM6IGNvbHVtbnNQcm9wID0gMTIsXG4gICAgY29sdW1uU3BhY2luZzogY29sdW1uU3BhY2luZ1Byb3AsXG4gICAgY29tcG9uZW50ID0gJ2RpdicsXG4gICAgY29udGFpbmVyID0gZmFsc2UsXG4gICAgZGlyZWN0aW9uID0gJ3JvdycsXG4gICAgaXRlbSA9IGZhbHNlLFxuICAgIGxnID0gZmFsc2UsXG4gICAgbWQgPSBmYWxzZSxcbiAgICByb3dTcGFjaW5nOiByb3dTcGFjaW5nUHJvcCxcbiAgICBzbSA9IGZhbHNlLFxuICAgIHNwYWNpbmcgPSAwLFxuICAgIHdyYXAgPSAnd3JhcCcsXG4gICAgeGwgPSBmYWxzZSxcbiAgICB4cyA9IGZhbHNlLFxuICAgIHplcm9NaW5XaWR0aCA9IGZhbHNlXG4gIH0gPSBwcm9wcyxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICBjb25zdCByb3dTcGFjaW5nID0gcm93U3BhY2luZ1Byb3AgfHwgc3BhY2luZztcbiAgY29uc3QgY29sdW1uU3BhY2luZyA9IGNvbHVtblNwYWNpbmdQcm9wIHx8IHNwYWNpbmc7XG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VDb250ZXh0KEdyaWRDb250ZXh0KSB8fCBjb2x1bW5zUHJvcDtcblxuICBjb25zdCBvd25lclN0YXRlID0gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgY29sdW1ucyxcbiAgICBjb250YWluZXIsXG4gICAgZGlyZWN0aW9uLFxuICAgIGl0ZW0sXG4gICAgbGcsXG4gICAgbWQsXG4gICAgc20sXG4gICAgcm93U3BhY2luZyxcbiAgICBjb2x1bW5TcGFjaW5nLFxuICAgIHdyYXAsXG4gICAgeGwsXG4gICAgeHMsXG4gICAgemVyb01pbldpZHRoXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VVdGlsaXR5Q2xhc3Nlcyhvd25lclN0YXRlKTtcblxuICBjb25zdCB3cmFwQ2hpbGQgPSBlbGVtZW50ID0+IGNvbHVtbnMgIT09IDEyID8gLyojX19QVVJFX18qL19qc3goR3JpZENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29sdW1ucyxcbiAgICBjaGlsZHJlbjogZWxlbWVudFxuICB9KSA6IGVsZW1lbnQ7XG5cbiAgcmV0dXJuIHdyYXBDaGlsZCggLyojX19QVVJFX18qL19qc3goR3JpZFJvb3QsIF9leHRlbmRzKHtcbiAgICBvd25lclN0YXRlOiBvd25lclN0YXRlLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgYXM6IGNvbXBvbmVudCxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gR3JpZC5wcm9wVHlwZXNcbi8qIHJlbW92ZS1wcm9wdHlwZXMgKi9cbj0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMuXG4gICAqIEBkZWZhdWx0IDEyXG4gICAqL1xuICBjb2x1bW5zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBob3Jpem9udGFsIHNwYWNlIGJldHdlZW4gdGhlIHR5cGUgYGl0ZW1gIGNvbXBvbmVudHMuXG4gICAqIEl0IG92ZXJyaWRlcyB0aGUgdmFsdWUgb2YgdGhlIGBzcGFjaW5nYCBwcm9wLlxuICAgKi9cbiAgY29sdW1uU3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSB0aGUgZmxleCAqY29udGFpbmVyKiBiZWhhdmlvci5cbiAgICogWW91IHNob3VsZCBiZSB3cmFwcGluZyAqaXRlbXMqIHdpdGggYSAqY29udGFpbmVyKi5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0IGlzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqIEBkZWZhdWx0ICdyb3cnXG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbicsICdyb3ctcmV2ZXJzZScsICdyb3cnXSksIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbicsICdyb3ctcmV2ZXJzZScsICdyb3cnXSkpLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgdGhlIGZsZXggKml0ZW0qIGJlaGF2aW9yLlxuICAgKiBZb3Ugc2hvdWxkIGJlIHdyYXBwaW5nICppdGVtcyogd2l0aCBhICpjb250YWluZXIqLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYGxnYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zIGlmIG5vdCBvdmVycmlkZGVuLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgbGc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksIFByb3BUeXBlcy5ib29sXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYG1kYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zIGlmIG5vdCBvdmVycmlkZGVuLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgbWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksIFByb3BUeXBlcy5ib29sXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHZlcnRpY2FsIHNwYWNlIGJldHdlZW4gdGhlIHR5cGUgYGl0ZW1gIGNvbXBvbmVudHMuXG4gICAqIEl0IG92ZXJyaWRlcyB0aGUgdmFsdWUgb2YgdGhlIGBzcGFjaW5nYCBwcm9wLlxuICAgKi9cbiAgcm93U3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGBzbWAgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucyBpZiBub3Qgb3ZlcnJpZGRlbi5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydhdXRvJywgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0eXBlIGBpdGVtYCBjb21wb25lbnRzLlxuICAgKiBJdCBjYW4gb25seSBiZSB1c2VkIG9uIGEgdHlwZSBgY29udGFpbmVyYCBjb21wb25lbnQuXG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogVGhlIHN5c3RlbSBwcm9wIHRoYXQgYWxsb3dzIGRlZmluaW5nIHN5c3RlbSBvdmVycmlkZXMgYXMgd2VsbCBhcyBhZGRpdGlvbmFsIENTUyBzdHlsZXMuXG4gICAqL1xuICBzeDogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGZsZXgtd3JhcGAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgYWxsIHNjcmVlbiBzaXplcy5cbiAgICogQGRlZmF1bHQgJ3dyYXAnXG4gICAqL1xuICB3cmFwOiBQcm9wVHlwZXMub25lT2YoWydub3dyYXAnLCAnd3JhcC1yZXZlcnNlJywgJ3dyYXAnXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYHhsYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgeGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksIFByb3BUeXBlcy5ib29sXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciBhbGwgdGhlIHNjcmVlbiBzaXplcyB3aXRoIHRoZSBsb3dlc3QgcHJpb3JpdHkuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB4czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYXV0bycsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdKSwgUHJvcFR5cGVzLmJvb2xdKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBpdCBzZXRzIGBtaW4td2lkdGg6IDBgIG9uIHRoZSBpdGVtLlxuICAgKiBSZWZlciB0byB0aGUgbGltaXRhdGlvbnMgc2VjdGlvbiBvZiB0aGUgZG9jdW1lbnRhdGlvbiB0byBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgdXNlIGNhc2UuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB6ZXJvTWluV2lkdGg6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBjb25zdCByZXF1aXJlUHJvcCA9IHJlcXVpcmVQcm9wRmFjdG9yeSgnR3JpZCcsIEdyaWQpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jb25jYXRcblxuICBHcmlkWydwcm9wVHlwZXMnICsgJyddID0gX2V4dGVuZHMoe30sIEdyaWQucHJvcFR5cGVzLCB7XG4gICAgZGlyZWN0aW9uOiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAgbGc6IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgbWQ6IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgc206IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgc3BhY2luZzogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIHdyYXA6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICB4czogcmVxdWlyZVByb3AoJ2l0ZW0nKSxcbiAgICB6ZXJvTWluV2lkdGg6IHJlcXVpcmVQcm9wKCdpdGVtJylcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmNvbnN0IEdyaWRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgR3JpZENvbnRleHQuZGlzcGxheU5hbWUgPSAnR3JpZENvbnRleHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkQ29udGV4dDsiLCJpbXBvcnQgeyBnZW5lcmF0ZVV0aWxpdHlDbGFzcywgZ2VuZXJhdGVVdGlsaXR5Q2xhc3NlcyB9IGZyb20gJ0BtdWkvY29yZSc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JpZFV0aWxpdHlDbGFzcyhzbG90KSB7XG4gIHJldHVybiBnZW5lcmF0ZVV0aWxpdHlDbGFzcygnTXVpR3JpZCcsIHNsb3QpO1xufVxuY29uc3QgU1BBQ0lOR1MgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuY29uc3QgRElSRUNUSU9OUyA9IFsnY29sdW1uLXJldmVyc2UnLCAnY29sdW1uJywgJ3Jvdy1yZXZlcnNlJywgJ3JvdyddO1xuY29uc3QgV1JBUFMgPSBbJ25vd3JhcCcsICd3cmFwLXJldmVyc2UnLCAnd3JhcCddO1xuY29uc3QgR1JJRF9TSVpFUyA9IFsnYXV0bycsIHRydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdO1xuY29uc3QgZ3JpZENsYXNzZXMgPSBnZW5lcmF0ZVV0aWxpdHlDbGFzc2VzKCdNdWlHcmlkJywgWydyb290JywgJ2NvbnRhaW5lcicsICdpdGVtJywgJ3plcm9NaW5XaWR0aCcsIC8vIHNwYWNpbmdzXG4uLi5TUEFDSU5HUy5tYXAoc3BhY2luZyA9PiBgc3BhY2luZy14cy0ke3NwYWNpbmd9YCksIC8vIGRpcmVjdGlvbiB2YWx1ZXNcbi4uLkRJUkVDVElPTlMubWFwKGRpcmVjdGlvbiA9PiBgZGlyZWN0aW9uLXhzLSR7ZGlyZWN0aW9ufWApLCAvLyB3cmFwIHZhbHVlc1xuLi4uV1JBUFMubWFwKHdyYXAgPT4gYHdyYXAteHMtJHt3cmFwfWApLCAvLyBncmlkIHNpemVzIGZvciBhbGwgYnJlYWtwb2ludHNcbi4uLkdSSURfU0laRVMubWFwKHNpemUgPT4gYGdyaWQteHMtJHtzaXplfWApLCAuLi5HUklEX1NJWkVTLm1hcChzaXplID0+IGBncmlkLXNtLSR7c2l6ZX1gKSwgLi4uR1JJRF9TSVpFUy5tYXAoc2l6ZSA9PiBgZ3JpZC1tZC0ke3NpemV9YCksIC4uLkdSSURfU0laRVMubWFwKHNpemUgPT4gYGdyaWQtbGctJHtzaXplfWApLCAuLi5HUklEX1NJWkVTLm1hcChzaXplID0+IGBncmlkLXhsLSR7c2l6ZX1gKV0pO1xuZXhwb3J0IGRlZmF1bHQgZ3JpZENsYXNzZXM7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vR3JpZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdyaWRDbGFzc2VzIH0gZnJvbSAnLi9ncmlkQ2xhc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL2dyaWRDbGFzc2VzJzsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLmNzcydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcclxuaW1wb3J0IFBvcnRmb2xpb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3J0Zm9saW9DYXJkJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBFbGVjdHJpY0FpciBmcm9tICcuLi9pbWcvRWxlY3RyaWNBaXIuUE5HJ1xyXG5cclxuY29uc3QgcG9ydGZvbGlvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1ldGEgdGl0bGU9J1BhbG1Ub3AgfCBQb3J0Zm9saW8nIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW9DYXJkIHNyYz17RWxlY3RyaWNBaXJ9IGFsdD17J0VsZWN0cmljIEFpciBJbWcnfSBjb21wYW55PXsnRWxlY3RyaWMgQWlyJ30gbGluaz17J3d3dy5lbGVjdHJpY2Fpci5jby5ueid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/IG51bGwgOiA8Rm9vdGVyIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9ydGZvbGlvXHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlVGhlbWUiLCJGb290ZXIiLCJNZXRhIiwiUG9ydGZvbGlvQ2FyZCIsIkdyaWQiLCJCb3giLCJFbGVjdHJpY0FpciIsInBvcnRmb2xpbyIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJyb290IiwiY29udGFpbmVyIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9