"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Layout.module.css */ "./styles/Layout.module.css");
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Index.module.css */ "./styles/Index.module.css");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Desktop\\Palm Top\\Website\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var index = function index() {
  _s();

  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  var isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__.default)(theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().root),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
          sx: {
            width: '100%'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
            container: true,
            rowSpacing: 1,
            columnSpacing: {
              xs: 1,
              sm: 2,
              md: 3
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
              item: true,
              xs: 6,
              children: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
              item: true,
              xs: 6,
              children: "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
              item: true,
              xs: 6,
              children: "3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
              item: true,
              xs: 6,
              children: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), isMobile ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 32
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_s(index, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__.default];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGMzOWVkYjRhODg5YTM1NGM5OTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUN4QyxxQkFBcUIsb0RBQVc7QUFDaEM7QUFDQTtBQUNBOztBQUVBLFlBQVksc0RBQVM7QUFDckI7QUFDQSxDQUFDO0FBQ0QsK0RBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZrRjtBQUMxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQ0k7QUFDWDtBQUM0SDtBQUM5RTtBQUNUO0FBQ3ZCO0FBQ2M7QUFDWjtBQUN5QjtBQUNqQjs7QUFFaEQ7QUFDQTtBQUNBLFlBQVksTUFBTSxFQUFFLCtDQUErQztBQUNuRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQ0FBb0MsNkVBQXVCO0FBQzNEO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVIscUJBQXFCLHFFQUFxRTtBQUMxRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLE9BQU8sSUFBSSx3QkFBd0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0EsYUFBYSwyRUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFNBQVMsOERBQWlCO0FBQzFCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixzREFBZ0IsQ0FBQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBLGFBQWEsOERBQWlCO0FBQzlCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pELG1CQUFtQixzREFBZ0IsQ0FBQztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBLGFBQWEsOERBQWlCO0FBQzlCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0JBQXdCO0FBQ3hELDBCQUEwQix3QkFBd0I7QUFDbEQsbUJBQW1CLHNEQUFnQixDQUFDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixxS0FBcUssZ0JBQWdCLGtEQUFrRCxrQkFBa0IseUNBQXlDLGFBQWEsc0NBQXNDLFdBQVcsc0NBQXNDLFdBQVcsc0NBQXNDLFdBQVcsc0NBQXNDLFdBQVcsc0NBQXNDLFdBQVc7QUFDcGlCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyxLQUFLLDJFQUFRO0FBQ2Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EseUlBQXlJLGdCQUFnQiwwQ0FBMEMsa0JBQWtCLGlDQUFpQyxhQUFhLDhCQUE4QixXQUFXLDhCQUE4QixXQUFXLDhCQUE4QixXQUFXLDhCQUE4QixXQUFXLDhCQUE4QixXQUFXO0FBQ2hkO0FBQ0EsU0FBUyxrRUFBYyxRQUFRLDZEQUFtQjtBQUNsRDs7QUFFQSwwQkFBMEIsNkNBQWdCO0FBQzFDLHFCQUFxQiwrREFBYTtBQUNsQztBQUNBO0FBQ0EsR0FBRztBQUNILGdCQUFnQixrRUFBWTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixnQkFBZ0IsZ0dBQTZCOztBQUU3QztBQUNBO0FBQ0Esa0JBQWtCLDZDQUFnQixDQUFDLGtEQUFXOztBQUU5QyxxQkFBcUIsMkVBQVEsR0FBRztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsNkRBQTZELHNEQUFJLENBQUMsMkRBQW9CO0FBQ3RGO0FBQ0E7QUFDQSxHQUFHOztBQUVILGlDQUFpQyxzREFBSSxXQUFXLDJFQUFRO0FBQ3hEO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxLQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBYzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsV0FBVywwREFBZ0I7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQWdCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQW1CLEVBQUUseURBQWlCLENBQUMsMERBQWdCLEdBQUcsMERBQWdCLEVBQUUsMERBQWdCOztBQUV2RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyREFBbUIsRUFBRSx5REFBaUIsQ0FBQywyREFBbUIsRUFBRSwwREFBZ0IsRUFBRSwwREFBZ0IsS0FBSywwREFBZ0IsRUFBRSwwREFBZ0IsRUFBRSwwREFBZ0I7O0FBRXhLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrREFBcUI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdEQUFjOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyREFBbUIsRUFBRSx1REFBZSxzREFBc0QseURBQWlCLENBQUMsdURBQWUsdURBQXVELDBEQUFnQjs7QUFFL007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQWM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUFtQixFQUFFLHVEQUFlLG1EQUFtRCx3REFBYzs7QUFFM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQW1CLEVBQUUsdURBQWUsbURBQW1ELHdEQUFjOztBQUUzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkRBQW1CLEVBQUUseURBQWlCLENBQUMsMkRBQW1CLEVBQUUsMERBQWdCLEVBQUUsMERBQWdCLEtBQUssMERBQWdCLEVBQUUsMERBQWdCLEVBQUUsMERBQWdCOztBQUVySztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBbUIsRUFBRSx1REFBZSxtREFBbUQsd0RBQWM7O0FBRTNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFtQixFQUFFLHlEQUFpQixDQUFDLDJEQUFtQixFQUFFLDBEQUFnQixFQUFFLDBEQUFnQixLQUFLLDBEQUFnQixFQUFFLDBEQUFnQixFQUFFLDBEQUFnQjs7QUFFbEs7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwREFBZ0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFlOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBbUIsRUFBRSx1REFBZSxtREFBbUQsd0RBQWM7O0FBRTNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUFtQixFQUFFLHVEQUFlLG1EQUFtRCx3REFBYzs7QUFFM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBYztBQUM5QixFQUFFLEVBQUUsQ0FBTTs7QUFFVixJQUFJLElBQXFDO0FBQ3pDLHNCQUFzQixtRUFBa0IsZ0JBQWdCOztBQUV4RCwyQkFBMkIsMkVBQVEsR0FBRztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLCtEQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7QUN0Y1k7QUFDL0I7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxnREFBbUI7O0FBRXBELElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSwrREFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNYK0M7QUFDbEU7QUFDUCxTQUFTLCtEQUFvQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFzQjtBQUMxQyx5Q0FBeUMsUUFBUTtBQUNqRCwrQ0FBK0MsVUFBVTtBQUN6RCxnQ0FBZ0MsS0FBSztBQUNyQyxxQ0FBcUMsS0FBSyx5Q0FBeUMsS0FBSyx5Q0FBeUMsS0FBSyx5Q0FBeUMsS0FBSyx5Q0FBeUMsS0FBSztBQUNsTywrREFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JPO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2hCLE1BQU1DLEtBQUssR0FBR0wsOERBQVEsRUFBdEI7QUFDQSxNQUFNTSxRQUFRLEdBQUdQLG9FQUFhLENBQUNNLEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5QjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFWCx1RUFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUEsNEVBQWhCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFQyx5RUFBaEI7QUFBQSwrQkFDQSw4REFBQyxzREFBRDtBQUFLLFlBQUUsRUFBRTtBQUFFYyxZQUFBQSxLQUFLLEVBQUU7QUFBVCxXQUFUO0FBQUEsaUNBQ0ksOERBQUMsdURBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQWdCLHNCQUFVLEVBQUUsQ0FBNUI7QUFBK0IseUJBQWEsRUFBRTtBQUFFQyxjQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxjQUFBQSxFQUFFLEVBQUUsQ0FBYjtBQUFnQkMsY0FBQUEsRUFBRSxFQUFFO0FBQXBCLGFBQTlDO0FBQUEsb0NBQ0ksOERBQUMsdURBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBSUksOERBQUMsdURBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBT0ksOERBQUMsdURBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBVUksOERBQUMsdURBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBcUJLVCxRQUFRLEdBQUcsSUFBSCxnQkFBVSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlCSCxDQTdCRDs7R0FBTUY7VUFDWUosNERBQ0dEOzs7QUE2QnJCLCtEQUFlSyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL0JveC9Cb3guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL0dyaWQvR3JpZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvR3JpZC9HcmlkQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvR3JpZC9ncmlkQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvR3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQm94IH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICcuLi9zdHlsZXMnO1xuY29uc3QgZGVmYXVsdFRoZW1lID0gY3JlYXRlVGhlbWUoKTtcbi8qKlxuICogQGlnbm9yZSAtIGRvIG5vdCBkb2N1bWVudC5cbiAqL1xuXG5jb25zdCBCb3ggPSBjcmVhdGVCb3goe1xuICBkZWZhdWx0VGhlbWVcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQm94OyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5jb25zdCBfZXhjbHVkZWQgPSBbXCJjbGFzc05hbWVcIiwgXCJjb2x1bW5zXCIsIFwiY29sdW1uU3BhY2luZ1wiLCBcImNvbXBvbmVudFwiLCBcImNvbnRhaW5lclwiLCBcImRpcmVjdGlvblwiLCBcIml0ZW1cIiwgXCJsZ1wiLCBcIm1kXCIsIFwicm93U3BhY2luZ1wiLCBcInNtXCIsIFwic3BhY2luZ1wiLCBcIndyYXBcIiwgXCJ4bFwiLCBcInhzXCIsIFwiemVyb01pbldpZHRoXCJdO1xuLy8gQSBncmlkIGNvbXBvbmVudCB1c2luZyB0aGUgZm9sbG93aW5nIGxpYnMgYXMgaW5zcGlyYXRpb24uXG4vL1xuLy8gRm9yIHRoZSBpbXBsZW1lbnRhdGlvbjpcbi8vIC0gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC4zL2xheW91dC9ncmlkL1xuLy8gLSBodHRwczovL2dpdGh1Yi5jb20va3Jpc3RvZmVyam9zZXBoL2ZsZXhib3hncmlkL2Jsb2IvbWFzdGVyL3NyYy9jc3MvZmxleGJveGdyaWQuY3NzXG4vLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9yb3lsZWUwNzA0L3JlYWN0LWZsZXhib3gtZ3JpZFxuLy8gLSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXJqcy5vcmcvbGF0ZXN0L2xheW91dC9pbnRyb2R1Y3Rpb25cbi8vXG4vLyBGb2xsb3cgdGhpcyBmbGV4Ym94IEd1aWRlIHRvIGJldHRlciB1bmRlcnN0YW5kIHRoZSB1bmRlcmx5aW5nIG1vZGVsOlxuLy8gLSBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9hLWd1aWRlLXRvLWZsZXhib3gvXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB1bnN0YWJsZV9leHRlbmRTeFByb3AgYXMgZXh0ZW5kU3hQcm9wLCBoYW5kbGVCcmVha3BvaW50cywgdW5zdGFibGVfcmVzb2x2ZUJyZWFrcG9pbnRWYWx1ZXMgYXMgcmVzb2x2ZUJyZWFrcG9pbnRWYWx1ZXMgfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5pbXBvcnQgeyB1bnN0YWJsZV9jb21wb3NlQ2xhc3NlcyBhcyBjb21wb3NlQ2xhc3NlcyB9IGZyb20gJ0BtdWkvY29yZSc7XG5pbXBvcnQgcmVxdWlyZVByb3BGYWN0b3J5IGZyb20gJy4uL3V0aWxzL3JlcXVpcmVQcm9wRmFjdG9yeSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlcy9zdHlsZWQnO1xuaW1wb3J0IHVzZVRoZW1lUHJvcHMgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lUHJvcHMnO1xuaW1wb3J0IEdyaWRDb250ZXh0IGZyb20gJy4vR3JpZENvbnRleHQnO1xuaW1wb3J0IGdyaWRDbGFzc2VzLCB7IGdldEdyaWRVdGlsaXR5Q2xhc3MgfSBmcm9tICcuL2dyaWRDbGFzc2VzJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5cbmZ1bmN0aW9uIGdldE9mZnNldCh2YWwpIHtcbiAgY29uc3QgcGFyc2UgPSBwYXJzZUZsb2F0KHZhbCk7XG4gIHJldHVybiBgJHtwYXJzZX0ke1N0cmluZyh2YWwpLnJlcGxhY2UoU3RyaW5nKHBhcnNlKSwgJycpIHx8ICdweCd9YDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKGdsb2JhbFN0eWxlcywgdGhlbWUsIGJyZWFrcG9pbnQsIG93bmVyU3RhdGUpIHtcbiAgY29uc3Qgc2l6ZSA9IG93bmVyU3RhdGVbYnJlYWtwb2ludF07XG5cbiAgaWYgKCFzaXplKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gIGlmIChzaXplID09PSB0cnVlKSB7XG4gICAgLy8gRm9yIHRoZSBhdXRvIGxheW91dGluZ1xuICAgIHN0eWxlcyA9IHtcbiAgICAgIGZsZXhCYXNpczogMCxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH07XG4gIH0gZWxzZSBpZiAoc2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgc3R5bGVzID0ge1xuICAgICAgZmxleEJhc2lzOiAnYXV0bycsXG4gICAgICBmbGV4R3JvdzogMCxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBtYXhXaWR0aDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICdhdXRvJ1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY29sdW1uc0JyZWFrcG9pbnRWYWx1ZXMgPSByZXNvbHZlQnJlYWtwb2ludFZhbHVlcyh7XG4gICAgICB2YWx1ZXM6IG93bmVyU3RhdGUuY29sdW1ucyxcbiAgICAgIGJhc2U6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1xuICAgIH0pOyAvLyBLZWVwIDcgc2lnbmlmaWNhbnQgbnVtYmVycy5cblxuICAgIGNvbnN0IHdpZHRoID0gYCR7TWF0aC5yb3VuZChzaXplIC8gY29sdW1uc0JyZWFrcG9pbnRWYWx1ZXNbYnJlYWtwb2ludF0gKiAxMGU3KSAvIDEwZTV9JWA7XG4gICAgbGV0IG1vcmUgPSB7fTtcblxuICAgIGlmIChvd25lclN0YXRlLmNvbnRhaW5lciAmJiBvd25lclN0YXRlLml0ZW0gJiYgb3duZXJTdGF0ZS5jb2x1bW5TcGFjaW5nICE9PSAwKSB7XG4gICAgICBjb25zdCB0aGVtZVNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nKG93bmVyU3RhdGUuY29sdW1uU3BhY2luZyk7XG5cbiAgICAgIGlmICh0aGVtZVNwYWNpbmcgIT09ICcwcHgnKSB7XG4gICAgICAgIGNvbnN0IGZ1bGxXaWR0aCA9IGBjYWxjKCR7d2lkdGh9ICsgJHtnZXRPZmZzZXQodGhlbWVTcGFjaW5nKX0pYDtcbiAgICAgICAgbW9yZSA9IHtcbiAgICAgICAgICBmbGV4QmFzaXM6IGZ1bGxXaWR0aCxcbiAgICAgICAgICBtYXhXaWR0aDogZnVsbFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSAvLyBDbG9zZSB0byB0aGUgYm9vdHN0cmFwIGltcGxlbWVudGF0aW9uOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzhmY2NhYTI0MzllOTdlYzcyYTRiN2RjNDJjY2MxZjY0OTc5MGFkYjAvc2Nzcy9taXhpbnMvX2dyaWQuc2NzcyNMNDFcblxuXG4gICAgc3R5bGVzID0gX2V4dGVuZHMoe1xuICAgICAgZmxleEJhc2lzOiB3aWR0aCxcbiAgICAgIGZsZXhHcm93OiAwLFxuICAgICAgbWF4V2lkdGg6IHdpZHRoXG4gICAgfSwgbW9yZSk7XG4gIH0gLy8gTm8gbmVlZCBmb3IgYSBtZWRpYSBxdWVyeSBmb3IgdGhlIGZpcnN0IHNpemUuXG5cblxuICBpZiAodGhlbWUuYnJlYWtwb2ludHMudmFsdWVzW2JyZWFrcG9pbnRdID09PSAwKSB7XG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxTdHlsZXMsIHN0eWxlcyk7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsU3R5bGVzW3RoZW1lLmJyZWFrcG9pbnRzLnVwKGJyZWFrcG9pbnQpXSA9IHN0eWxlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURpcmVjdGlvbih7XG4gIHRoZW1lLFxuICBvd25lclN0YXRlXG59KSB7XG4gIHJldHVybiBoYW5kbGVCcmVha3BvaW50cyh7XG4gICAgdGhlbWVcbiAgfSwgb3duZXJTdGF0ZS5kaXJlY3Rpb24sIHByb3BWYWx1ZSA9PiB7XG4gICAgY29uc3Qgb3V0cHV0ID0ge1xuICAgICAgZmxleERpcmVjdGlvbjogcHJvcFZhbHVlXG4gICAgfTtcblxuICAgIGlmIChwcm9wVmFsdWUuaW5kZXhPZignY29sdW1uJykgPT09IDApIHtcbiAgICAgIG91dHB1dFtgJiA+IC4ke2dyaWRDbGFzc2VzLml0ZW19YF0gPSB7XG4gICAgICAgIG1heFdpZHRoOiAnbm9uZSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJvd0dhcCh7XG4gIHRoZW1lLFxuICBvd25lclN0YXRlXG59KSB7XG4gIGNvbnN0IHtcbiAgICBjb250YWluZXIsXG4gICAgcm93U3BhY2luZ1xuICB9ID0gb3duZXJTdGF0ZTtcbiAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gIGlmIChjb250YWluZXIgJiYgcm93U3BhY2luZyAhPT0gMCkge1xuICAgIHN0eWxlcyA9IGhhbmRsZUJyZWFrcG9pbnRzKHtcbiAgICAgIHRoZW1lXG4gICAgfSwgcm93U3BhY2luZywgcHJvcFZhbHVlID0+IHtcbiAgICAgIGNvbnN0IHRoZW1lU3BhY2luZyA9IHRoZW1lLnNwYWNpbmcocHJvcFZhbHVlKTtcblxuICAgICAgaWYgKHRoZW1lU3BhY2luZyAhPT0gJzBweCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYXJnaW5Ub3A6IGAtJHtnZXRPZmZzZXQodGhlbWVTcGFjaW5nKX1gLFxuICAgICAgICAgIFtgJiA+IC4ke2dyaWRDbGFzc2VzLml0ZW19YF06IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGdldE9mZnNldCh0aGVtZVNwYWNpbmcpXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29sdW1uR2FwKHtcbiAgdGhlbWUsXG4gIG93bmVyU3RhdGVcbn0pIHtcbiAgY29uc3Qge1xuICAgIGNvbnRhaW5lcixcbiAgICBjb2x1bW5TcGFjaW5nXG4gIH0gPSBvd25lclN0YXRlO1xuICBsZXQgc3R5bGVzID0ge307XG5cbiAgaWYgKGNvbnRhaW5lciAmJiBjb2x1bW5TcGFjaW5nICE9PSAwKSB7XG4gICAgc3R5bGVzID0gaGFuZGxlQnJlYWtwb2ludHMoe1xuICAgICAgdGhlbWVcbiAgICB9LCBjb2x1bW5TcGFjaW5nLCBwcm9wVmFsdWUgPT4ge1xuICAgICAgY29uc3QgdGhlbWVTcGFjaW5nID0gdGhlbWUuc3BhY2luZyhwcm9wVmFsdWUpO1xuXG4gICAgICBpZiAodGhlbWVTcGFjaW5nICE9PSAnMHB4Jykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICsgJHtnZXRPZmZzZXQodGhlbWVTcGFjaW5nKX0pYCxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBgLSR7Z2V0T2Zmc2V0KHRoZW1lU3BhY2luZyl9YCxcbiAgICAgICAgICBbYCYgPiAuJHtncmlkQ2xhc3Nlcy5pdGVtfWBdOiB7XG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogZ2V0T2Zmc2V0KHRoZW1lU3BhY2luZylcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59IC8vIERlZmF1bHQgQ1NTIHZhbHVlc1xuLy8gZmxleDogJzAgMSBhdXRvJyxcbi8vIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuLy8gYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuLy8gZmxleFdyYXA6ICdub3dyYXAnLFxuLy8ganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcblxuY29uc3QgR3JpZFJvb3QgPSBzdHlsZWQoJ2RpdicsIHtcbiAgbmFtZTogJ011aUdyaWQnLFxuICBzbG90OiAnUm9vdCcsXG4gIG92ZXJyaWRlc1Jlc29sdmVyOiAocHJvcHMsIHN0eWxlcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIGl0ZW0sXG4gICAgICBsZyxcbiAgICAgIG1kLFxuICAgICAgc20sXG4gICAgICBzcGFjaW5nLFxuICAgICAgd3JhcCxcbiAgICAgIHhsLFxuICAgICAgeHMsXG4gICAgICB6ZXJvTWluV2lkdGhcbiAgICB9ID0gcHJvcHMub3duZXJTdGF0ZTtcbiAgICByZXR1cm4gW3N0eWxlcy5yb290LCBjb250YWluZXIgJiYgc3R5bGVzLmNvbnRhaW5lciwgaXRlbSAmJiBzdHlsZXMuaXRlbSwgemVyb01pbldpZHRoICYmIHN0eWxlcy56ZXJvTWluV2lkdGgsIGNvbnRhaW5lciAmJiBzcGFjaW5nICE9PSAwICYmIHN0eWxlc1tgc3BhY2luZy14cy0ke1N0cmluZyhzcGFjaW5nKX1gXSwgZGlyZWN0aW9uICE9PSAncm93JyAmJiBzdHlsZXNbYGRpcmVjdGlvbi14cy0ke1N0cmluZyhkaXJlY3Rpb24pfWBdLCB3cmFwICE9PSAnd3JhcCcgJiYgc3R5bGVzW2B3cmFwLXhzLSR7U3RyaW5nKHdyYXApfWBdLCB4cyAhPT0gZmFsc2UgJiYgc3R5bGVzW2BncmlkLXhzLSR7U3RyaW5nKHhzKX1gXSwgc20gIT09IGZhbHNlICYmIHN0eWxlc1tgZ3JpZC1zbS0ke1N0cmluZyhzbSl9YF0sIG1kICE9PSBmYWxzZSAmJiBzdHlsZXNbYGdyaWQtbWQtJHtTdHJpbmcobWQpfWBdLCBsZyAhPT0gZmFsc2UgJiYgc3R5bGVzW2BncmlkLWxnLSR7U3RyaW5nKGxnKX1gXSwgeGwgIT09IGZhbHNlICYmIHN0eWxlc1tgZ3JpZC14bC0ke1N0cmluZyh4bCl9YF1dO1xuICB9XG59KSgoe1xuICBvd25lclN0YXRlXG59KSA9PiBfZXh0ZW5kcyh7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG59LCBvd25lclN0YXRlLmNvbnRhaW5lciAmJiB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleFdyYXA6ICd3cmFwJyxcbiAgd2lkdGg6ICcxMDAlJ1xufSwgb3duZXJTdGF0ZS5pdGVtICYmIHtcbiAgbWFyZ2luOiAwIC8vIEZvciBpbnN0YW5jZSwgaXQncyB1c2VmdWwgd2hlbiB1c2VkIHdpdGggYSBgZmlndXJlYCBlbGVtZW50LlxuXG59LCBvd25lclN0YXRlLnplcm9NaW5XaWR0aCAmJiB7XG4gIG1pbldpZHRoOiAwXG59LCBvd25lclN0YXRlLndyYXAgPT09ICdub3dyYXAnICYmIHtcbiAgZmxleFdyYXA6ICdub3dyYXAnXG59LCBvd25lclN0YXRlLndyYXAgPT09ICdyZXZlcnNlJyAmJiB7XG4gIGZsZXhXcmFwOiAnd3JhcC1yZXZlcnNlJ1xufSksIGdlbmVyYXRlRGlyZWN0aW9uLCBnZW5lcmF0ZVJvd0dhcCwgZ2VuZXJhdGVDb2x1bW5HYXAsICh7XG4gIHRoZW1lLFxuICBvd25lclN0YXRlXG59KSA9PiB0aGVtZS5icmVha3BvaW50cy5rZXlzLnJlZHVjZSgoZ2xvYmFsU3R5bGVzLCBicmVha3BvaW50KSA9PiB7XG4gIC8vIFVzZSBzaWRlIGVmZmVjdCBvdmVyIGltbXV0YWJpbGl0eSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICBnZW5lcmF0ZUdyaWQoZ2xvYmFsU3R5bGVzLCB0aGVtZSwgYnJlYWtwb2ludCwgb3duZXJTdGF0ZSk7XG4gIHJldHVybiBnbG9iYWxTdHlsZXM7XG59LCB7fSkpO1xuXG5jb25zdCB1c2VVdGlsaXR5Q2xhc3NlcyA9IG93bmVyU3RhdGUgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBjb250YWluZXIsXG4gICAgZGlyZWN0aW9uLFxuICAgIGl0ZW0sXG4gICAgbGcsXG4gICAgbWQsXG4gICAgc20sXG4gICAgc3BhY2luZyxcbiAgICB3cmFwLFxuICAgIHhsLFxuICAgIHhzLFxuICAgIHplcm9NaW5XaWR0aFxuICB9ID0gb3duZXJTdGF0ZTtcbiAgY29uc3Qgc2xvdHMgPSB7XG4gICAgcm9vdDogWydyb290JywgY29udGFpbmVyICYmICdjb250YWluZXInLCBpdGVtICYmICdpdGVtJywgemVyb01pbldpZHRoICYmICd6ZXJvTWluV2lkdGgnLCBjb250YWluZXIgJiYgc3BhY2luZyAhPT0gMCAmJiBgc3BhY2luZy14cy0ke1N0cmluZyhzcGFjaW5nKX1gLCBkaXJlY3Rpb24gIT09ICdyb3cnICYmIGBkaXJlY3Rpb24teHMtJHtTdHJpbmcoZGlyZWN0aW9uKX1gLCB3cmFwICE9PSAnd3JhcCcgJiYgYHdyYXAteHMtJHtTdHJpbmcod3JhcCl9YCwgeHMgIT09IGZhbHNlICYmIGBncmlkLXhzLSR7U3RyaW5nKHhzKX1gLCBzbSAhPT0gZmFsc2UgJiYgYGdyaWQtc20tJHtTdHJpbmcoc20pfWAsIG1kICE9PSBmYWxzZSAmJiBgZ3JpZC1tZC0ke1N0cmluZyhtZCl9YCwgbGcgIT09IGZhbHNlICYmIGBncmlkLWxnLSR7U3RyaW5nKGxnKX1gLCB4bCAhPT0gZmFsc2UgJiYgYGdyaWQteGwtJHtTdHJpbmcoeGwpfWBdXG4gIH07XG4gIHJldHVybiBjb21wb3NlQ2xhc3NlcyhzbG90cywgZ2V0R3JpZFV0aWxpdHlDbGFzcywgY2xhc3Nlcyk7XG59O1xuXG5jb25zdCBHcmlkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gR3JpZChpblByb3BzLCByZWYpIHtcbiAgY29uc3QgdGhlbWVQcm9wcyA9IHVzZVRoZW1lUHJvcHMoe1xuICAgIHByb3BzOiBpblByb3BzLFxuICAgIG5hbWU6ICdNdWlHcmlkJ1xuICB9KTtcbiAgY29uc3QgcHJvcHMgPSBleHRlbmRTeFByb3AodGhlbWVQcm9wcyk7XG5cbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb2x1bW5zOiBjb2x1bW5zUHJvcCA9IDEyLFxuICAgIGNvbHVtblNwYWNpbmc6IGNvbHVtblNwYWNpbmdQcm9wLFxuICAgIGNvbXBvbmVudCA9ICdkaXYnLFxuICAgIGNvbnRhaW5lciA9IGZhbHNlLFxuICAgIGRpcmVjdGlvbiA9ICdyb3cnLFxuICAgIGl0ZW0gPSBmYWxzZSxcbiAgICBsZyA9IGZhbHNlLFxuICAgIG1kID0gZmFsc2UsXG4gICAgcm93U3BhY2luZzogcm93U3BhY2luZ1Byb3AsXG4gICAgc20gPSBmYWxzZSxcbiAgICBzcGFjaW5nID0gMCxcbiAgICB3cmFwID0gJ3dyYXAnLFxuICAgIHhsID0gZmFsc2UsXG4gICAgeHMgPSBmYWxzZSxcbiAgICB6ZXJvTWluV2lkdGggPSBmYWxzZVxuICB9ID0gcHJvcHMsXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgY29uc3Qgcm93U3BhY2luZyA9IHJvd1NwYWNpbmdQcm9wIHx8IHNwYWNpbmc7XG4gIGNvbnN0IGNvbHVtblNwYWNpbmcgPSBjb2x1bW5TcGFjaW5nUHJvcCB8fCBzcGFjaW5nO1xuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlQ29udGV4dChHcmlkQ29udGV4dCkgfHwgY29sdW1uc1Byb3A7XG5cbiAgY29uc3Qgb3duZXJTdGF0ZSA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNvbHVtbnMsXG4gICAgY29udGFpbmVyLFxuICAgIGRpcmVjdGlvbixcbiAgICBpdGVtLFxuICAgIGxnLFxuICAgIG1kLFxuICAgIHNtLFxuICAgIHJvd1NwYWNpbmcsXG4gICAgY29sdW1uU3BhY2luZyxcbiAgICB3cmFwLFxuICAgIHhsLFxuICAgIHhzLFxuICAgIHplcm9NaW5XaWR0aFxuICB9KTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlVXRpbGl0eUNsYXNzZXMob3duZXJTdGF0ZSk7XG5cbiAgY29uc3Qgd3JhcENoaWxkID0gZWxlbWVudCA9PiBjb2x1bW5zICE9PSAxMiA/IC8qI19fUFVSRV9fKi9fanN4KEdyaWRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbHVtbnMsXG4gICAgY2hpbGRyZW46IGVsZW1lbnRcbiAgfSkgOiBlbGVtZW50O1xuXG4gIHJldHVybiB3cmFwQ2hpbGQoIC8qI19fUFVSRV9fKi9fanN4KEdyaWRSb290LCBfZXh0ZW5kcyh7XG4gICAgb3duZXJTdGF0ZTogb3duZXJTdGF0ZSxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIGFzOiBjb21wb25lbnQsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEdyaWQucHJvcFR5cGVzXG4vKiByZW1vdmUtcHJvcHR5cGVzICovXG49IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zLlxuICAgKiBAZGVmYXVsdCAxMlxuICAgKi9cbiAgY29sdW1uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vYmplY3RdKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgaG9yaXpvbnRhbCBzcGFjZSBiZXR3ZWVuIHRoZSB0eXBlIGBpdGVtYCBjb21wb25lbnRzLlxuICAgKiBJdCBvdmVycmlkZXMgdGhlIHZhbHVlIG9mIHRoZSBgc3BhY2luZ2AgcHJvcC5cbiAgICovXG4gIGNvbHVtblNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgdGhlIGZsZXggKmNvbnRhaW5lciogYmVoYXZpb3IuXG4gICAqIFlvdSBzaG91bGQgYmUgd3JhcHBpbmcgKml0ZW1zKiB3aXRoIGEgKmNvbnRhaW5lciouXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgZmxleC1kaXJlY3Rpb25gIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCBpcyBhcHBsaWVkIGZvciBhbGwgc2NyZWVuIHNpemVzLlxuICAgKiBAZGVmYXVsdCAncm93J1xuICAgKi9cbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydjb2x1bW4tcmV2ZXJzZScsICdjb2x1bW4nLCAncm93LXJldmVyc2UnLCAncm93J10pLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoWydjb2x1bW4tcmV2ZXJzZScsICdjb2x1bW4nLCAncm93LXJldmVyc2UnLCAncm93J10pKSwgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIHRoZSBmbGV4ICppdGVtKiBiZWhhdmlvci5cbiAgICogWW91IHNob3VsZCBiZSB3cmFwcGluZyAqaXRlbXMqIHdpdGggYSAqY29udGFpbmVyKi5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGBsZ2AgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucyBpZiBub3Qgb3ZlcnJpZGRlbi5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGxnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydhdXRvJywgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGBtZGAgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucyBpZiBub3Qgb3ZlcnJpZGRlbi5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIG1kOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydhdXRvJywgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSB2ZXJ0aWNhbCBzcGFjZSBiZXR3ZWVuIHRoZSB0eXBlIGBpdGVtYCBjb21wb25lbnRzLlxuICAgKiBJdCBvdmVycmlkZXMgdGhlIHZhbHVlIG9mIHRoZSBgc3BhY2luZ2AgcHJvcC5cbiAgICovXG4gIHJvd1NwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzIHRoZSBjb21wb25lbnQgaXMgZ29pbmcgdG8gdXNlLlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIHRoZSBgc21gIGJyZWFrcG9pbnQgYW5kIHdpZGVyIHNjcmVlbnMgaWYgbm90IG92ZXJyaWRkZW4uXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBzbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYXV0bycsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdKSwgUHJvcFR5cGVzLmJvb2xdKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdHlwZSBgaXRlbWAgY29tcG9uZW50cy5cbiAgICogSXQgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIHR5cGUgYGNvbnRhaW5lcmAgY29tcG9uZW50LlxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBzcGFjaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkpLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFRoZSBzeXN0ZW0gcHJvcCB0aGF0IGFsbG93cyBkZWZpbmluZyBzeXN0ZW0gb3ZlcnJpZGVzIGFzIHdlbGwgYXMgYWRkaXRpb25hbCBDU1Mgc3R5bGVzLlxuICAgKi9cbiAgc3g6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBmbGV4LXdyYXBgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqIEBkZWZhdWx0ICd3cmFwJ1xuICAgKi9cbiAgd3JhcDogUHJvcFR5cGVzLm9uZU9mKFsnbm93cmFwJywgJ3dyYXAtcmV2ZXJzZScsICd3cmFwJ10pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGB4bGAgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucy5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydhdXRvJywgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgYWxsIHRoZSBzY3JlZW4gc2l6ZXMgd2l0aCB0aGUgbG93ZXN0IHByaW9yaXR5LlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgeHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksIFByb3BUeXBlcy5ib29sXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaXQgc2V0cyBgbWluLXdpZHRoOiAwYCBvbiB0aGUgaXRlbS5cbiAgICogUmVmZXIgdG8gdGhlIGxpbWl0YXRpb25zIHNlY3Rpb24gb2YgdGhlIGRvY3VtZW50YXRpb24gdG8gYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHVzZSBjYXNlLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgemVyb01pbldpZHRoOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgY29uc3QgcmVxdWlyZVByb3AgPSByZXF1aXJlUHJvcEZhY3RvcnkoJ0dyaWQnLCBHcmlkKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG5cbiAgR3JpZFsncHJvcFR5cGVzJyArICcnXSA9IF9leHRlbmRzKHt9LCBHcmlkLnByb3BUeXBlcywge1xuICAgIGRpcmVjdGlvbjogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIGxnOiByZXF1aXJlUHJvcCgnaXRlbScpLFxuICAgIG1kOiByZXF1aXJlUHJvcCgnaXRlbScpLFxuICAgIHNtOiByZXF1aXJlUHJvcCgnaXRlbScpLFxuICAgIHNwYWNpbmc6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICB3cmFwOiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAgeHM6IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgemVyb01pbldpZHRoOiByZXF1aXJlUHJvcCgnaXRlbScpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5jb25zdCBHcmlkQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEdyaWRDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0dyaWRDb250ZXh0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZENvbnRleHQ7IiwiaW1wb3J0IHsgZ2VuZXJhdGVVdGlsaXR5Q2xhc3MsIGdlbmVyYXRlVXRpbGl0eUNsYXNzZXMgfSBmcm9tICdAbXVpL2NvcmUnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdyaWRVdGlsaXR5Q2xhc3Moc2xvdCkge1xuICByZXR1cm4gZ2VuZXJhdGVVdGlsaXR5Q2xhc3MoJ011aUdyaWQnLCBzbG90KTtcbn1cbmNvbnN0IFNQQUNJTkdTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbmNvbnN0IERJUkVDVElPTlMgPSBbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbicsICdyb3ctcmV2ZXJzZScsICdyb3cnXTtcbmNvbnN0IFdSQVBTID0gWydub3dyYXAnLCAnd3JhcC1yZXZlcnNlJywgJ3dyYXAnXTtcbmNvbnN0IEdSSURfU0laRVMgPSBbJ2F1dG8nLCB0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXTtcbmNvbnN0IGdyaWRDbGFzc2VzID0gZ2VuZXJhdGVVdGlsaXR5Q2xhc3NlcygnTXVpR3JpZCcsIFsncm9vdCcsICdjb250YWluZXInLCAnaXRlbScsICd6ZXJvTWluV2lkdGgnLCAvLyBzcGFjaW5nc1xuLi4uU1BBQ0lOR1MubWFwKHNwYWNpbmcgPT4gYHNwYWNpbmcteHMtJHtzcGFjaW5nfWApLCAvLyBkaXJlY3Rpb24gdmFsdWVzXG4uLi5ESVJFQ1RJT05TLm1hcChkaXJlY3Rpb24gPT4gYGRpcmVjdGlvbi14cy0ke2RpcmVjdGlvbn1gKSwgLy8gd3JhcCB2YWx1ZXNcbi4uLldSQVBTLm1hcCh3cmFwID0+IGB3cmFwLXhzLSR7d3JhcH1gKSwgLy8gZ3JpZCBzaXplcyBmb3IgYWxsIGJyZWFrcG9pbnRzXG4uLi5HUklEX1NJWkVTLm1hcChzaXplID0+IGBncmlkLXhzLSR7c2l6ZX1gKSwgLi4uR1JJRF9TSVpFUy5tYXAoc2l6ZSA9PiBgZ3JpZC1zbS0ke3NpemV9YCksIC4uLkdSSURfU0laRVMubWFwKHNpemUgPT4gYGdyaWQtbWQtJHtzaXplfWApLCAuLi5HUklEX1NJWkVTLm1hcChzaXplID0+IGBncmlkLWxnLSR7c2l6ZX1gKSwgLi4uR1JJRF9TSVpFUy5tYXAoc2l6ZSA9PiBgZ3JpZC14bC0ke3NpemV9YCldKTtcbmV4cG9ydCBkZWZhdWx0IGdyaWRDbGFzc2VzOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dyaWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBncmlkQ2xhc3NlcyB9IGZyb20gJy4vZ3JpZENsYXNzZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ncmlkQ2xhc3Nlcyc7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBzdHlsZXNJbmRleCBmcm9tICcuLi9zdHlsZXMvSW5kZXgubW9kdWxlLmNzcydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzSW5kZXguY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHJvd1NwYWNpbmc9ezF9IGNvbHVtblNwYWNpbmc9e3sgeHM6IDEsIHNtOiAyLCBtZDogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzTW9iaWxlID8gbnVsbCA6IDxGb290ZXIgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzdHlsZXNJbmRleCIsInVzZU1lZGlhUXVlcnkiLCJ1c2VUaGVtZSIsIkZvb3RlciIsIkdyaWQiLCJCb3giLCJpbmRleCIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJyb290IiwiY29udGFpbmVyIiwiY29udGVudCIsIndpZHRoIiwieHMiLCJzbSIsIm1kIl0sInNvdXJjZVJvb3QiOiIifQ==