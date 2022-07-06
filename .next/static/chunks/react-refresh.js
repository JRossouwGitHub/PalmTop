// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-refresh"],{

/***/ "./node_modules/@next/react-refresh-utils/internal/helpers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@next/react-refresh-utils/internal/helpers.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * MIT License
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// This file is copied from the Metro JavaScript bundler, with minor tweaks for
// webpack 4 compatibility.
//
// https://github.com/facebook/metro/blob/d6b9685c730d0d63577db40f41369157f28dfa3a/packages/metro/src/lib/polyfills/require.js
const runtime_1 = __importDefault(__webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js"));
function isSafeExport(key) {
    return (key === '__esModule' ||
        key === '__N_SSG' ||
        key === '__N_SSP' ||
        // TODO: remove this key from page config instead of allow listing it
        key === 'config');
}
function registerExportsForReactRefresh(moduleExports, moduleID) {
    runtime_1.default.register(moduleExports, moduleID + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return;
    }
    for (var key in moduleExports) {
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        var typeID = moduleID + ' %exports% ' + key;
        runtime_1.default.register(exportValue, typeID);
    }
}
function isReactRefreshBoundary(moduleExports) {
    if (runtime_1.default.isLikelyComponentType(moduleExports)) {
        return true;
    }
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        return false;
    }
    var hasExports = false;
    var areAllExportsComponents = true;
    for (var key in moduleExports) {
        hasExports = true;
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        if (!runtime_1.default.isLikelyComponentType(exportValue)) {
            areAllExportsComponents = false;
        }
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) {
        return true;
    }
    for (var i = 0; i < nextSignature.length; i++) {
        if (prevSignature[i] !== nextSignature[i]) {
            return true;
        }
    }
    return false;
}
function getRefreshBoundarySignature(moduleExports) {
    var signature = [];
    signature.push(runtime_1.default.getFamilyByType(moduleExports));
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return signature;
    }
    for (var key in moduleExports) {
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        signature.push(key);
        signature.push(runtime_1.default.getFamilyByType(exportValue));
    }
    return signature;
}
var isUpdateScheduled = false;
function scheduleUpdate() {
    if (isUpdateScheduled) {
        return;
    }
    function canApplyUpdate() {
        return module.hot.status() === 'idle';
    }
    isUpdateScheduled = true;
    setTimeout(function () {
        isUpdateScheduled = false;
        // Only trigger refresh if the webpack HMR state is idle
        if (canApplyUpdate()) {
            try {
                runtime_1.default.performReactRefresh();
            }
            catch (err) {
                console.warn('Warning: Failed to re-render. We will retry on the next Fast Refresh event.\n' +
                    err);
            }
            return;
        }
        return scheduleUpdate();
    }, 30);
}
// Needs to be compatible with IE11
exports.default = {
    registerExportsForReactRefresh: registerExportsForReactRefresh,
    isReactRefreshBoundary: isReactRefreshBoundary,
    shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,
    getRefreshBoundarySignature: getRefreshBoundarySignature,
    scheduleUpdate: scheduleUpdate,
};
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@next/react-refresh-utils/runtime.js":
/*!***********************************************************!*\
  !*** ./node_modules/@next/react-refresh-utils/runtime.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const runtime_1 = __importDefault(__webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js"));
const helpers_1 = __importDefault(__webpack_require__(/*! ./internal/helpers */ "./node_modules/@next/react-refresh-utils/internal/helpers.js"));
// Hook into ReactDOM initialization
runtime_1.default.injectIntoGlobalHook(self);
// Register global helpers
self.$RefreshHelpers$ = helpers_1.default;
// Register a helper for module execution interception
self.$RefreshInterceptModuleExecution$ = function (webpackModuleId) {
    var prevRefreshReg = self.$RefreshReg$;
    var prevRefreshSig = self.$RefreshSig$;
    self.$RefreshReg$ = function (type, id) {
        runtime_1.default.register(type, webpackModuleId + ' ' + id);
    };
    self.$RefreshSig$ = runtime_1.default.createSignatureFunctionForTransform;
    // Modeled after `useEffect` cleanup pattern:
    // https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    return function () {
        self.$RefreshReg$ = prevRefreshReg;
        self.$RefreshSig$ = prevRefreshSig;
    };
};
//# sourceMappingURL=runtime.js.map

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React vundefined
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_RESPONDER_TYPE = 0xead6;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_RESPONDER_TYPE = symbolFor('react.responder');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
// It's OK to reference families, but use WeakMap/Set for types.

var allFamiliesByID = new Map();
var allFamiliesByType = new PossiblyWeakMap();
var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
// that have actually been edited here. This keeps checks fast.
// $FlowIssue

var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
// It is an array of [Family, NextType] tuples.

var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.

var helpersByRendererID = new Map();
var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.

var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.

var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
// It needs to be weak because we do this even for roots that failed to mount.
// If there is no WeakMap, we won't attempt to do retrying.
// $FlowIssue

var rootElements = // $FlowIssue
typeof WeakMap === 'function' ? new WeakMap() : null;
var isPerformingRefresh = false;

function computeFullKey(signature) {
  if (signature.fullKey !== null) {
    return signature.fullKey;
  }

  var fullKey = signature.ownKey;
  var hooks;

  try {
    hooks = signature.getCustomHooks();
  } catch (err) {
    // This can happen in an edge case, e.g. if expression like Foo.useSomething
    // depends on Foo which is lazily initialized during rendering.
    // In that case just assume we'll have to remount.
    signature.forceReset = true;
    signature.fullKey = fullKey;
    return fullKey;
  }

  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];

    if (typeof hook !== 'function') {
      // Something's wrong. Assume we need to remount.
      signature.forceReset = true;
      signature.fullKey = fullKey;
      return fullKey;
    }

    var nestedHookSignature = allSignaturesByType.get(hook);

    if (nestedHookSignature === undefined) {
      // No signature means Hook wasn't in the source code, e.g. in a library.
      // We'll skip it because we can assume it won't change during this session.
      continue;
    }

    var nestedHookKey = computeFullKey(nestedHookSignature);

    if (nestedHookSignature.forceReset) {
      signature.forceReset = true;
    }

    fullKey += '\n---\n' + nestedHookKey;
  }

  signature.fullKey = fullKey;
  return fullKey;
}

function haveEqualSignatures(prevType, nextType) {
  var prevSignature = allSignaturesByType.get(prevType);
  var nextSignature = allSignaturesByType.get(nextType);

  if (prevSignature === undefined && nextSignature === undefined) {
    return true;
  }

  if (prevSignature === undefined || nextSignature === undefined) {
    return false;
  }

  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
    return false;
  }

  if (nextSignature.forceReset) {
    return false;
  }

  return true;
}

function isReactClass(type) {
  return type.prototype && type.prototype.isReactComponent;
}

function canPreserveStateBetween(prevType, nextType) {
  if (isReactClass(prevType) || isReactClass(nextType)) {
    return false;
  }

  if (haveEqualSignatures(prevType, nextType)) {
    return true;
  }

  return false;
}

function resolveFamily(type) {
  // Only check updated types to keep lookups fast.
  return updatedFamiliesByType.get(type);
} // If we didn't care about IE11, we could use new Map/Set(iterable).


function cloneMap(map) {
  var clone = new Map();
  map.forEach(function (value, key) {
    clone.set(key, value);
  });
  return clone;
}

function cloneSet(set) {
  var clone = new Set();
  set.forEach(function (value) {
    clone.add(value);
  });
  return clone;
}

function performReactRefresh() {

  if (pendingUpdates.length === 0) {
    return null;
  }

  if (isPerformingRefresh) {
    return null;
  }

  isPerformingRefresh = true;

  try {
    var staleFamilies = new Set();
    var updatedFamilies = new Set();
    var updates = pendingUpdates;
    pendingUpdates = [];
    updates.forEach(function (_ref) {
      var family = _ref[0],
          nextType = _ref[1];
      // Now that we got a real edit, we can create associations
      // that will be read by the React reconciler.
      var prevType = family.current;
      updatedFamiliesByType.set(prevType, family);
      updatedFamiliesByType.set(nextType, family);
      family.current = nextType; // Determine whether this should be a re-render or a re-mount.

      if (canPreserveStateBetween(prevType, nextType)) {
        updatedFamilies.add(family);
      } else {
        staleFamilies.add(family);
      }
    }); // TODO: rename these fields to something more meaningful.

    var update = {
      updatedFamilies: updatedFamilies,
      // Families that will re-render preserving state
      staleFamilies: staleFamilies // Families that will be remounted

    };
    helpersByRendererID.forEach(function (helpers) {
      // Even if there are no roots, set the handler on first update.
      // This ensures that if *new* roots are mounted, they'll use the resolve handler.
      helpers.setRefreshHandler(resolveFamily);
    });
    var didError = false;
    var firstError = null; // We snapshot maps and sets that are mutated during commits.
    // If we don't do this, there is a risk they will be mutated while
    // we iterate over them. For example, trying to recover a failed root
    // may cause another root to be added to the failed list -- an infinite loop.

    var failedRootsSnapshot = cloneSet(failedRoots);
    var mountedRootsSnapshot = cloneSet(mountedRoots);
    var helpersByRootSnapshot = cloneMap(helpersByRoot);
    failedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!failedRoots.has(root)) {// No longer failed.
      }

      if (rootElements === null) {
        return;
      }

      if (!rootElements.has(root)) {
        return;
      }

      var element = rootElements.get(root);

      try {
        helpers.scheduleRoot(root, element);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });
    mountedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!mountedRoots.has(root)) {// No longer mounted.
      }

      try {
        helpers.scheduleRefresh(root, update);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });

    if (didError) {
      throw firstError;
    }

    return update;
  } finally {
    isPerformingRefresh = false;
  }
}
function register(type, id) {
  {
    if (type === null) {
      return;
    }

    if (typeof type !== 'function' && typeof type !== 'object') {
      return;
    } // This can happen in an edge case, e.g. if we register
    // return value of a HOC but it returns a cached component.
    // Ignore anything but the first registration for each type.


    if (allFamiliesByType.has(type)) {
      return;
    } // Create family or remember to update it.
    // None of this bookkeeping affects reconciliation
    // until the first performReactRefresh() call above.


    var family = allFamiliesByID.get(id);

    if (family === undefined) {
      family = {
        current: type
      };
      allFamiliesByID.set(id, family);
    } else {
      pendingUpdates.push([family, type]);
    }

    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.

    if (typeof type === 'object' && type !== null) {
      switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          register(type.render, id + '$render');
          break;

        case REACT_MEMO_TYPE:
          register(type.type, id + '$type');
          break;
      }
    }
  }
}
function setSignature(type, key) {
  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;

  {
    allSignaturesByType.set(type, {
      forceReset: forceReset,
      ownKey: key,
      fullKey: null,
      getCustomHooks: getCustomHooks || function () {
        return [];
      }
    });
  }
} // This is lazily called during first render for a type.
// It captures Hook list at that time so inline requires don't break comparisons.

function collectCustomHooksForSignature(type) {
  {
    var signature = allSignaturesByType.get(type);

    if (signature !== undefined) {
      computeFullKey(signature);
    }
  }
}
function getFamilyByID(id) {
  {
    return allFamiliesByID.get(id);
  }
}
function getFamilyByType(type) {
  {
    return allFamiliesByType.get(type);
  }
}
function findAffectedHostInstances(families) {
  {
    var affectedInstances = new Set();
    mountedRoots.forEach(function (root) {
      var helpers = helpersByRoot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
      instancesForRoot.forEach(function (inst) {
        affectedInstances.add(inst);
      });
    });
    return affectedInstances;
  }
}
function injectIntoGlobalHook(globalObject) {
  {
    // For React Native, the global hook will be set up by require('react-devtools-core').
    // That code will run before us. So we need to monkeypatch functions on existing hook.
    // For React Web, the global hook will be set up by the extension.
    // This will also run before us.
    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (hook === undefined) {
      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
      // Note that in this case it's important that renderer code runs *after* this method call.
      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
      var nextID = 0;
      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
        renderers: new Map(),
        supportsFiber: true,
        inject: function (injected) {
          return nextID++;
        },
        onScheduleFiberRoot: function (id, root, children) {},
        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},
        onCommitFiberUnmount: function () {}
      };
    } // Here, we just want to get a reference to scheduleRefresh.


    var oldInject = hook.inject;

    hook.inject = function (injected) {
      var id = oldInject.apply(this, arguments);

      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }

      return id;
    }; // Do the same for any already injected roots.
    // This is useful if ReactDOM has already been initialized.
    // https://github.com/facebook/react/issues/17626


    hook.renderers.forEach(function (injected, id) {
      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }
    }); // We also want to track currently mounted roots.

    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;

    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};

    hook.onScheduleFiberRoot = function (id, root, children) {
      if (!isPerformingRefresh) {
        // If it was intentionally scheduled, don't attempt to restore.
        // This includes intentionally scheduled unmounts.
        failedRoots.delete(root);

        if (rootElements !== null) {
          rootElements.set(root, children);
        }
      }

      return oldOnScheduleFiberRoot.apply(this, arguments);
    };

    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
      var helpers = helpersByRendererID.get(id);

      if (helpers === undefined) {
        return;
      }

      helpersByRoot.set(root, helpers);
      var current = root.current;
      var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
      // This logic is copy-pasted from similar logic in the DevTools backend.
      // If this breaks with some refactoring, you'll want to update DevTools too.

      if (alternate !== null) {
        var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
        var isMounted = current.memoizedState != null && current.memoizedState.element != null;

        if (!wasMounted && isMounted) {
          // Mount a new root.
          mountedRoots.add(root);
          failedRoots.delete(root);
        } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {
          // Unmount an existing root.
          mountedRoots.delete(root);

          if (didError) {
            // We'll remount it on future edits.
            failedRoots.add(root);
          } else {
            helpersByRoot.delete(root);
          }
        } else if (!wasMounted && !isMounted) {
          if (didError) {
            // We'll remount it on future edits.
            failedRoots.add(root);
          }
        }
      } else {
        // Mount a new root.
        mountedRoots.add(root);
      }

      return oldOnCommitFiberRoot.apply(this, arguments);
    };
  }
}
function hasUnrecoverableErrors() {
  // TODO: delete this after removing dependency in RN.
  return false;
} // Exposed for testing.

function _getMountedRootCount() {
  {
    return mountedRoots.size;
  }
} // This is a wrapper over more primitive functions for setting signature.
// Signatures let us decide whether the Hook order has changed on refresh.
//
// This function is intended to be used as a transform target, e.g.:
// var _s = createSignatureFunctionForTransform()
//
// function Hello() {
//   const [foo, setFoo] = useState(0);
//   const value = useCustomHook();
//   _s(); /* Second call triggers collecting the custom Hook list.
//          * This doesn't happen during the module evaluation because we
//          * don't want to change the module order with inline requires.
//          * Next calls are noops. */
//   return <h1>Hi</h1>;
// }
//
// /* First call specifies the signature: */
// _s(
//   Hello,
//   'useState{[foo, setFoo]}(0)',
//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
// );

function createSignatureFunctionForTransform() {
  {
    // We'll fill in the signature in two steps.
    // First, we'll know the signature itself. This happens outside the component.
    // Then, we'll know the references to custom Hooks. This happens inside the component.
    // After that, the returned function will be a fast path no-op.
    var status = 'needsSignature';
    var savedType;
    var hasCustomHooks;
    return function (type, key, forceReset, getCustomHooks) {
      switch (status) {
        case 'needsSignature':
          if (type !== undefined) {
            // If we received an argument, this is the initial registration call.
            savedType = type;
            hasCustomHooks = typeof getCustomHooks === 'function';
            setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.

            status = 'needsCustomHooks';
          }

          break;

        case 'needsCustomHooks':
          if (hasCustomHooks) {
            collectCustomHooksForSignature(savedType);
          }

          status = 'resolved';
          break;
      }

      return type;
    };
  }
}
function isLikelyComponentType(type) {
  {
    switch (typeof type) {
      case 'function':
        {
          // First, deal with classes.
          if (type.prototype != null) {
            if (type.prototype.isReactComponent) {
              // React class.
              return true;
            }

            var ownNames = Object.getOwnPropertyNames(type.prototype);

            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
              // This looks like a class.
              return false;
            } // eslint-disable-next-line no-proto


            if (type.prototype.__proto__ !== Object.prototype) {
              // It has a superclass.
              return false;
            } // Pass through.
            // This looks like a regular function with empty prototype.

          } // For plain functions and arrows, use name as a heuristic.


          var name = type.name || type.displayName;
          return typeof name === 'string' && /^[A-Z]/.test(name);
        }

      case 'object':
        {
          if (type != null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
              case REACT_MEMO_TYPE:
                // Definitely React components.
                return true;

              default:
                return false;
            }
          }

          return false;
        }

      default:
        {
          return false;
        }
    }
  }
}

exports._getMountedRootCount = _getMountedRootCount;
exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
exports.findAffectedHostInstances = findAffectedHostInstances;
exports.getFamilyByID = getFamilyByID;
exports.getFamilyByType = getFamilyByType;
exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
exports.injectIntoGlobalHook = injectIntoGlobalHook;
exports.isLikelyComponentType = isLikelyComponentType;
exports.performReactRefresh = performReactRefresh;
exports.register = register;
exports.setSignature = setSignature;
  })();
}


/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/@next/react-refresh-utils/runtime.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1yZWZyZXNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHNFQUF1QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlJYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtDQUFrQyxtQkFBTyxDQUFDLHNFQUF1QjtBQUNqRSxrQ0FBa0MsbUJBQU8sQ0FBQyx3RkFBb0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZEQUE2RDtBQUM3RCwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvQ0FBb0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixzQ0FBc0M7QUFDdEMsMkNBQTJDO0FBQzNDLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbHFCYTtBQUNiO0FBQ0EsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLCtKQUFzRTtBQUN4RSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG5leHQvcmVhY3QtcmVmcmVzaC11dGlscy9pbnRlcm5hbC9oZWxwZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG5leHQvcmVhY3QtcmVmcmVzaC11dGlscy9ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIFRoaXMgZmlsZSBpcyBjb3BpZWQgZnJvbSB0aGUgTWV0cm8gSmF2YVNjcmlwdCBidW5kbGVyLCB3aXRoIG1pbm9yIHR3ZWFrcyBmb3Jcbi8vIHdlYnBhY2sgNCBjb21wYXRpYmlsaXR5LlxuLy9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9tZXRyby9ibG9iL2Q2Yjk2ODVjNzMwZDBkNjM1NzdkYjQwZjQxMzY5MTU3ZjI4ZGZhM2EvcGFja2FnZXMvbWV0cm8vc3JjL2xpYi9wb2x5ZmlsbHMvcmVxdWlyZS5qc1xuY29uc3QgcnVudGltZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO1xuZnVuY3Rpb24gaXNTYWZlRXhwb3J0KGtleSkge1xuICAgIHJldHVybiAoa2V5ID09PSAnX19lc01vZHVsZScgfHxcbiAgICAgICAga2V5ID09PSAnX19OX1NTRycgfHxcbiAgICAgICAga2V5ID09PSAnX19OX1NTUCcgfHxcbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMga2V5IGZyb20gcGFnZSBjb25maWcgaW5zdGVhZCBvZiBhbGxvdyBsaXN0aW5nIGl0XG4gICAgICAgIGtleSA9PT0gJ2NvbmZpZycpO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlEKSB7XG4gICAgcnVudGltZV8xLmRlZmF1bHQucmVnaXN0ZXIobW9kdWxlRXhwb3J0cywgbW9kdWxlSUQgKyAnICVleHBvcnRzJScpO1xuICAgIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgICAgIC8vIChUaGlzIGlzIGltcG9ydGFudCBmb3IgbGVnYWN5IGVudmlyb25tZW50cy4pXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgICAgaWYgKGlzU2FmZUV4cG9ydChrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgICAgIHZhciB0eXBlSUQgPSBtb2R1bGVJRCArICcgJWV4cG9ydHMlICcgKyBrZXk7XG4gICAgICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnJlZ2lzdGVyKGV4cG9ydFZhbHVlLCB0eXBlSUQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzUmVhY3RSZWZyZXNoQm91bmRhcnkobW9kdWxlRXhwb3J0cykge1xuICAgIGlmIChydW50aW1lXzEuZGVmYXVsdC5pc0xpa2VseUNvbXBvbmVudFR5cGUobW9kdWxlRXhwb3J0cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGhhc0V4cG9ydHMgPSBmYWxzZTtcbiAgICB2YXIgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSB0cnVlO1xuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGhhc0V4cG9ydHMgPSB0cnVlO1xuICAgICAgICBpZiAoaXNTYWZlRXhwb3J0KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgaWYgKCFydW50aW1lXzEuZGVmYXVsdC5pc0xpa2VseUNvbXBvbmVudFR5cGUoZXhwb3J0VmFsdWUpKSB7XG4gICAgICAgICAgICBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoYXNFeHBvcnRzICYmIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzO1xufVxuZnVuY3Rpb24gc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5KHByZXZFeHBvcnRzLCBuZXh0RXhwb3J0cykge1xuICAgIHZhciBwcmV2U2lnbmF0dXJlID0gZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKHByZXZFeHBvcnRzKTtcbiAgICB2YXIgbmV4dFNpZ25hdHVyZSA9IGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShuZXh0RXhwb3J0cyk7XG4gICAgaWYgKHByZXZTaWduYXR1cmUubGVuZ3RoICE9PSBuZXh0U2lnbmF0dXJlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0U2lnbmF0dXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcmV2U2lnbmF0dXJlW2ldICE9PSBuZXh0U2lnbmF0dXJlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobW9kdWxlRXhwb3J0cykge1xuICAgIHZhciBzaWduYXR1cmUgPSBbXTtcbiAgICBzaWduYXR1cmUucHVzaChydW50aW1lXzEuZGVmYXVsdC5nZXRGYW1pbHlCeVR5cGUobW9kdWxlRXhwb3J0cykpO1xuICAgIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgICAgIC8vIChUaGlzIGlzIGltcG9ydGFudCBmb3IgbGVnYWN5IGVudmlyb25tZW50cy4pXG4gICAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgICAgICBzaWduYXR1cmUucHVzaChrZXkpO1xuICAgICAgICBzaWduYXR1cmUucHVzaChydW50aW1lXzEuZGVmYXVsdC5nZXRGYW1pbHlCeVR5cGUoZXhwb3J0VmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cbnZhciBpc1VwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVVcGRhdGUoKSB7XG4gICAgaWYgKGlzVXBkYXRlU2NoZWR1bGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSc7XG4gICAgfVxuICAgIGlzVXBkYXRlU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gT25seSB0cmlnZ2VyIHJlZnJlc2ggaWYgdGhlIHdlYnBhY2sgSE1SIHN0YXRlIGlzIGlkbGVcbiAgICAgICAgaWYgKGNhbkFwcGx5VXBkYXRlKCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcnVudGltZV8xLmRlZmF1bHQucGVyZm9ybVJlYWN0UmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogRmFpbGVkIHRvIHJlLXJlbmRlci4gV2Ugd2lsbCByZXRyeSBvbiB0aGUgbmV4dCBGYXN0IFJlZnJlc2ggZXZlbnQuXFxuJyArXG4gICAgICAgICAgICAgICAgICAgIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlVXBkYXRlKCk7XG4gICAgfSwgMzApO1xufVxuLy8gTmVlZHMgdG8gYmUgY29tcGF0aWJsZSB3aXRoIElFMTFcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2g6IHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaCxcbiAgICBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5OiBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5LFxuICAgIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeTogc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5LFxuICAgIGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZTogZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlLFxuICAgIHNjaGVkdWxlVXBkYXRlOiBzY2hlZHVsZVVwZGF0ZSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWxwZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcnVudGltZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO1xuY29uc3QgaGVscGVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2ludGVybmFsL2hlbHBlcnNcIikpO1xuLy8gSG9vayBpbnRvIFJlYWN0RE9NIGluaXRpYWxpemF0aW9uXG5ydW50aW1lXzEuZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayhzZWxmKTtcbi8vIFJlZ2lzdGVyIGdsb2JhbCBoZWxwZXJzXG5zZWxmLiRSZWZyZXNoSGVscGVycyQgPSBoZWxwZXJzXzEuZGVmYXVsdDtcbi8vIFJlZ2lzdGVyIGEgaGVscGVyIGZvciBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdGlvblxuc2VsZi4kUmVmcmVzaEludGVyY2VwdE1vZHVsZUV4ZWN1dGlvbiQgPSBmdW5jdGlvbiAod2VicGFja01vZHVsZUlkKSB7XG4gICAgdmFyIHByZXZSZWZyZXNoUmVnID0gc2VsZi4kUmVmcmVzaFJlZyQ7XG4gICAgdmFyIHByZXZSZWZyZXNoU2lnID0gc2VsZi4kUmVmcmVzaFNpZyQ7XG4gICAgc2VsZi4kUmVmcmVzaFJlZyQgPSBmdW5jdGlvbiAodHlwZSwgaWQpIHtcbiAgICAgICAgcnVudGltZV8xLmRlZmF1bHQucmVnaXN0ZXIodHlwZSwgd2VicGFja01vZHVsZUlkICsgJyAnICsgaWQpO1xuICAgIH07XG4gICAgc2VsZi4kUmVmcmVzaFNpZyQgPSBydW50aW1lXzEuZGVmYXVsdC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybTtcbiAgICAvLyBNb2RlbGVkIGFmdGVyIGB1c2VFZmZlY3RgIGNsZWFudXAgcGF0dGVybjpcbiAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtZWZmZWN0Lmh0bWwjZWZmZWN0cy13aXRoLWNsZWFudXBcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLiRSZWZyZXNoUmVnJCA9IHByZXZSZWZyZXNoUmVnO1xuICAgICAgICBzZWxmLiRSZWZyZXNoU2lnJCA9IHByZXZSZWZyZXNoU2lnO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnVudGltZS5qcy5tYXAiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdnVuZGVmaW5lZFxyXG4gKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcclxuICpcclxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vLyBBVFRFTlRJT05cclxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxyXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXHJcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXHJcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cclxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcclxudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xyXG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcclxudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XHJcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xyXG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcclxudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcclxudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XHJcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xyXG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xyXG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xyXG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xyXG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcclxudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xyXG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcclxudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gMHhlYWQ2O1xyXG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcclxudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xyXG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XHJcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcclxudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcclxuXHJcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcclxuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcclxuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcclxuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XHJcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcclxuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xyXG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XHJcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcclxuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcclxuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xyXG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XHJcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XHJcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XHJcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XHJcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcclxuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XHJcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcclxuICBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucmVzcG9uZGVyJyk7XHJcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcclxuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XHJcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcclxuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XHJcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XHJcbn1cclxuXHJcbnZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7IC8vIFdlIG5ldmVyIHJlbW92ZSB0aGVzZSBhc3NvY2lhdGlvbnMuXHJcbi8vIEl0J3MgT0sgdG8gcmVmZXJlbmNlIGZhbWlsaWVzLCBidXQgdXNlIFdlYWtNYXAvU2V0IGZvciB0eXBlcy5cclxuXHJcbnZhciBhbGxGYW1pbGllc0J5SUQgPSBuZXcgTWFwKCk7XHJcbnZhciBhbGxGYW1pbGllc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcclxudmFyIGFsbFNpZ25hdHVyZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgV2Vha01hcCBpcyByZWFkIGJ5IFJlYWN0LCBzbyB3ZSBvbmx5IHB1dCBmYW1pbGllc1xyXG4vLyB0aGF0IGhhdmUgYWN0dWFsbHkgYmVlbiBlZGl0ZWQgaGVyZS4gVGhpcyBrZWVwcyBjaGVja3MgZmFzdC5cclxuLy8gJEZsb3dJc3N1ZVxyXG5cclxudmFyIHVwZGF0ZWRGYW1pbGllc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTsgLy8gVGhpcyBpcyBjbGVhcmVkIG9uIGV2ZXJ5IHBlcmZvcm1SZWFjdFJlZnJlc2goKSBjYWxsLlxyXG4vLyBJdCBpcyBhbiBhcnJheSBvZiBbRmFtaWx5LCBOZXh0VHlwZV0gdHVwbGVzLlxyXG5cclxudmFyIHBlbmRpbmdVcGRhdGVzID0gW107IC8vIFRoaXMgaXMgaW5qZWN0ZWQgYnkgdGhlIHJlbmRlcmVyIHZpYSBEZXZUb29scyBnbG9iYWwgaG9vay5cclxuXHJcbnZhciBoZWxwZXJzQnlSZW5kZXJlcklEID0gbmV3IE1hcCgpO1xyXG52YXIgaGVscGVyc0J5Um9vdCA9IG5ldyBNYXAoKTsgLy8gV2Uga2VlcCB0cmFjayBvZiBtb3VudGVkIHJvb3RzIHNvIHdlIGNhbiBzY2hlZHVsZSB1cGRhdGVzLlxyXG5cclxudmFyIG1vdW50ZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSWYgYSByb290IGNhcHR1cmVzIGFuIGVycm9yLCB3ZSByZW1lbWJlciBpdCBzbyB3ZSBjYW4gcmV0cnkgb24gZWRpdC5cclxuXHJcbnZhciBmYWlsZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSW4gZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBXZWFrTWFwLCB3ZSBhbHNvIHJlbWVtYmVyIHRoZSBsYXN0IGVsZW1lbnQgZm9yIGV2ZXJ5IHJvb3QuXHJcbi8vIEl0IG5lZWRzIHRvIGJlIHdlYWsgYmVjYXVzZSB3ZSBkbyB0aGlzIGV2ZW4gZm9yIHJvb3RzIHRoYXQgZmFpbGVkIHRvIG1vdW50LlxyXG4vLyBJZiB0aGVyZSBpcyBubyBXZWFrTWFwLCB3ZSB3b24ndCBhdHRlbXB0IHRvIGRvIHJldHJ5aW5nLlxyXG4vLyAkRmxvd0lzc3VlXHJcblxyXG52YXIgcm9vdEVsZW1lbnRzID0gLy8gJEZsb3dJc3N1ZVxyXG50eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBXZWFrTWFwKCkgOiBudWxsO1xyXG52YXIgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gY29tcHV0ZUZ1bGxLZXkoc2lnbmF0dXJlKSB7XHJcbiAgaWYgKHNpZ25hdHVyZS5mdWxsS2V5ICE9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gc2lnbmF0dXJlLmZ1bGxLZXk7XHJcbiAgfVxyXG5cclxuICB2YXIgZnVsbEtleSA9IHNpZ25hdHVyZS5vd25LZXk7XHJcbiAgdmFyIGhvb2tzO1xyXG5cclxuICB0cnkge1xyXG4gICAgaG9va3MgPSBzaWduYXR1cmUuZ2V0Q3VzdG9tSG9va3MoKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBhbiBlZGdlIGNhc2UsIGUuZy4gaWYgZXhwcmVzc2lvbiBsaWtlIEZvby51c2VTb21ldGhpbmdcclxuICAgIC8vIGRlcGVuZHMgb24gRm9vIHdoaWNoIGlzIGxhemlseSBpbml0aWFsaXplZCBkdXJpbmcgcmVuZGVyaW5nLlxyXG4gICAgLy8gSW4gdGhhdCBjYXNlIGp1c3QgYXNzdW1lIHdlJ2xsIGhhdmUgdG8gcmVtb3VudC5cclxuICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcclxuICAgIHNpZ25hdHVyZS5mdWxsS2V5ID0gZnVsbEtleTtcclxuICAgIHJldHVybiBmdWxsS2V5O1xyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGhvb2sgPSBob29rc1tpXTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGhvb2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgLy8gU29tZXRoaW5nJ3Mgd3JvbmcuIEFzc3VtZSB3ZSBuZWVkIHRvIHJlbW91bnQuXHJcbiAgICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcclxuICAgICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xyXG4gICAgICByZXR1cm4gZnVsbEtleTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmVzdGVkSG9va1NpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KGhvb2spO1xyXG5cclxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gTm8gc2lnbmF0dXJlIG1lYW5zIEhvb2sgd2Fzbid0IGluIHRoZSBzb3VyY2UgY29kZSwgZS5nLiBpbiBhIGxpYnJhcnkuXHJcbiAgICAgIC8vIFdlJ2xsIHNraXAgaXQgYmVjYXVzZSB3ZSBjYW4gYXNzdW1lIGl0IHdvbid0IGNoYW5nZSBkdXJpbmcgdGhpcyBzZXNzaW9uLlxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmVzdGVkSG9va0tleSA9IGNvbXB1dGVGdWxsS2V5KG5lc3RlZEhvb2tTaWduYXR1cmUpO1xyXG5cclxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlLmZvcmNlUmVzZXQpIHtcclxuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bGxLZXkgKz0gJ1xcbi0tLVxcbicgKyBuZXN0ZWRIb29rS2V5O1xyXG4gIH1cclxuXHJcbiAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xyXG4gIHJldHVybiBmdWxsS2V5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkge1xyXG4gIHZhciBwcmV2U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQocHJldlR5cGUpO1xyXG4gIHZhciBuZXh0U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQobmV4dFR5cGUpO1xyXG5cclxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkICYmIG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXB1dGVGdWxsS2V5KHByZXZTaWduYXR1cmUpICE9PSBjb21wdXRlRnVsbEtleShuZXh0U2lnbmF0dXJlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5leHRTaWduYXR1cmUuZm9yY2VSZXNldCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhY3RDbGFzcyh0eXBlKSB7XHJcbiAgcmV0dXJuIHR5cGUucHJvdG90eXBlICYmIHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhblByZXNlcnZlU3RhdGVCZXR3ZWVuKHByZXZUeXBlLCBuZXh0VHlwZSkge1xyXG4gIGlmIChpc1JlYWN0Q2xhc3MocHJldlR5cGUpIHx8IGlzUmVhY3RDbGFzcyhuZXh0VHlwZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlRmFtaWx5KHR5cGUpIHtcclxuICAvLyBPbmx5IGNoZWNrIHVwZGF0ZWQgdHlwZXMgdG8ga2VlcCBsb29rdXBzIGZhc3QuXHJcbiAgcmV0dXJuIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XHJcbn0gLy8gSWYgd2UgZGlkbid0IGNhcmUgYWJvdXQgSUUxMSwgd2UgY291bGQgdXNlIG5ldyBNYXAvU2V0KGl0ZXJhYmxlKS5cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9uZU1hcChtYXApIHtcclxuICB2YXIgY2xvbmUgPSBuZXcgTWFwKCk7XHJcbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgIGNsb25lLnNldChrZXksIHZhbHVlKTtcclxuICB9KTtcclxuICByZXR1cm4gY2xvbmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lU2V0KHNldCkge1xyXG4gIHZhciBjbG9uZSA9IG5ldyBTZXQoKTtcclxuICBzZXQuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIGNsb25lLmFkZCh2YWx1ZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsb25lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtUmVhY3RSZWZyZXNoKCkge1xyXG5cclxuICBpZiAocGVuZGluZ1VwZGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmIChpc1BlcmZvcm1pbmdSZWZyZXNoKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSB0cnVlO1xyXG5cclxuICB0cnkge1xyXG4gICAgdmFyIHN0YWxlRmFtaWxpZXMgPSBuZXcgU2V0KCk7XHJcbiAgICB2YXIgdXBkYXRlZEZhbWlsaWVzID0gbmV3IFNldCgpO1xyXG4gICAgdmFyIHVwZGF0ZXMgPSBwZW5kaW5nVXBkYXRlcztcclxuICAgIHBlbmRpbmdVcGRhdGVzID0gW107XHJcbiAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcclxuICAgICAgdmFyIGZhbWlseSA9IF9yZWZbMF0sXHJcbiAgICAgICAgICBuZXh0VHlwZSA9IF9yZWZbMV07XHJcbiAgICAgIC8vIE5vdyB0aGF0IHdlIGdvdCBhIHJlYWwgZWRpdCwgd2UgY2FuIGNyZWF0ZSBhc3NvY2lhdGlvbnNcclxuICAgICAgLy8gdGhhdCB3aWxsIGJlIHJlYWQgYnkgdGhlIFJlYWN0IHJlY29uY2lsZXIuXHJcbiAgICAgIHZhciBwcmV2VHlwZSA9IGZhbWlseS5jdXJyZW50O1xyXG4gICAgICB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuc2V0KHByZXZUeXBlLCBmYW1pbHkpO1xyXG4gICAgICB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuc2V0KG5leHRUeXBlLCBmYW1pbHkpO1xyXG4gICAgICBmYW1pbHkuY3VycmVudCA9IG5leHRUeXBlOyAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGlzIHNob3VsZCBiZSBhIHJlLXJlbmRlciBvciBhIHJlLW1vdW50LlxyXG5cclxuICAgICAgaWYgKGNhblByZXNlcnZlU3RhdGVCZXR3ZWVuKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcclxuICAgICAgICB1cGRhdGVkRmFtaWxpZXMuYWRkKGZhbWlseSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhbGVGYW1pbGllcy5hZGQoZmFtaWx5KTtcclxuICAgICAgfVxyXG4gICAgfSk7IC8vIFRPRE86IHJlbmFtZSB0aGVzZSBmaWVsZHMgdG8gc29tZXRoaW5nIG1vcmUgbWVhbmluZ2Z1bC5cclxuXHJcbiAgICB2YXIgdXBkYXRlID0ge1xyXG4gICAgICB1cGRhdGVkRmFtaWxpZXM6IHVwZGF0ZWRGYW1pbGllcyxcclxuICAgICAgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIHJlLXJlbmRlciBwcmVzZXJ2aW5nIHN0YXRlXHJcbiAgICAgIHN0YWxlRmFtaWxpZXM6IHN0YWxlRmFtaWxpZXMgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIGJlIHJlbW91bnRlZFxyXG5cclxuICAgIH07XHJcbiAgICBoZWxwZXJzQnlSZW5kZXJlcklELmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcnMpIHtcclxuICAgICAgLy8gRXZlbiBpZiB0aGVyZSBhcmUgbm8gcm9vdHMsIHNldCB0aGUgaGFuZGxlciBvbiBmaXJzdCB1cGRhdGUuXHJcbiAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGF0IGlmICpuZXcqIHJvb3RzIGFyZSBtb3VudGVkLCB0aGV5J2xsIHVzZSB0aGUgcmVzb2x2ZSBoYW5kbGVyLlxyXG4gICAgICBoZWxwZXJzLnNldFJlZnJlc2hIYW5kbGVyKHJlc29sdmVGYW1pbHkpO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgZGlkRXJyb3IgPSBmYWxzZTtcclxuICAgIHZhciBmaXJzdEVycm9yID0gbnVsbDsgLy8gV2Ugc25hcHNob3QgbWFwcyBhbmQgc2V0cyB0aGF0IGFyZSBtdXRhdGVkIGR1cmluZyBjb21taXRzLlxyXG4gICAgLy8gSWYgd2UgZG9uJ3QgZG8gdGhpcywgdGhlcmUgaXMgYSByaXNrIHRoZXkgd2lsbCBiZSBtdXRhdGVkIHdoaWxlXHJcbiAgICAvLyB3ZSBpdGVyYXRlIG92ZXIgdGhlbS4gRm9yIGV4YW1wbGUsIHRyeWluZyB0byByZWNvdmVyIGEgZmFpbGVkIHJvb3RcclxuICAgIC8vIG1heSBjYXVzZSBhbm90aGVyIHJvb3QgdG8gYmUgYWRkZWQgdG8gdGhlIGZhaWxlZCBsaXN0IC0tIGFuIGluZmluaXRlIGxvb3AuXHJcblxyXG4gICAgdmFyIGZhaWxlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChmYWlsZWRSb290cyk7XHJcbiAgICB2YXIgbW91bnRlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChtb3VudGVkUm9vdHMpO1xyXG4gICAgdmFyIGhlbHBlcnNCeVJvb3RTbmFwc2hvdCA9IGNsb25lTWFwKGhlbHBlcnNCeVJvb3QpO1xyXG4gICAgZmFpbGVkUm9vdHNTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XHJcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcclxuXHJcbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWZhaWxlZFJvb3RzLmhhcyhyb290KSkgey8vIE5vIGxvbmdlciBmYWlsZWQuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyb290RWxlbWVudHMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghcm9vdEVsZW1lbnRzLmhhcyhyb290KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGVsZW1lbnQgPSByb290RWxlbWVudHMuZ2V0KHJvb3QpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlUm9vdChyb290LCBlbGVtZW50KTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgaWYgKCFkaWRFcnJvcikge1xyXG4gICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgZmlyc3RFcnJvciA9IGVycjtcclxuICAgICAgICB9IC8vIEtlZXAgdHJ5aW5nIG90aGVyIHJvb3RzLlxyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBtb3VudGVkUm9vdHNTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XHJcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcclxuXHJcbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIW1vdW50ZWRSb290cy5oYXMocm9vdCkpIHsvLyBObyBsb25nZXIgbW91bnRlZC5cclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlUmVmcmVzaChyb290LCB1cGRhdGUpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoIWRpZEVycm9yKSB7XHJcbiAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICBmaXJzdEVycm9yID0gZXJyO1xyXG4gICAgICAgIH0gLy8gS2VlcCB0cnlpbmcgb3RoZXIgcm9vdHMuXHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZGlkRXJyb3IpIHtcclxuICAgICAgdGhyb3cgZmlyc3RFcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXBkYXRlO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBpc1BlcmZvcm1pbmdSZWZyZXNoID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyKHR5cGUsIGlkKSB7XHJcbiAge1xyXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdHlwZSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIHdlIHJlZ2lzdGVyXHJcbiAgICAvLyByZXR1cm4gdmFsdWUgb2YgYSBIT0MgYnV0IGl0IHJldHVybnMgYSBjYWNoZWQgY29tcG9uZW50LlxyXG4gICAgLy8gSWdub3JlIGFueXRoaW5nIGJ1dCB0aGUgZmlyc3QgcmVnaXN0cmF0aW9uIGZvciBlYWNoIHR5cGUuXHJcblxyXG5cclxuICAgIGlmIChhbGxGYW1pbGllc0J5VHlwZS5oYXModHlwZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSAvLyBDcmVhdGUgZmFtaWx5IG9yIHJlbWVtYmVyIHRvIHVwZGF0ZSBpdC5cclxuICAgIC8vIE5vbmUgb2YgdGhpcyBib29ra2VlcGluZyBhZmZlY3RzIHJlY29uY2lsaWF0aW9uXHJcbiAgICAvLyB1bnRpbCB0aGUgZmlyc3QgcGVyZm9ybVJlYWN0UmVmcmVzaCgpIGNhbGwgYWJvdmUuXHJcblxyXG5cclxuICAgIHZhciBmYW1pbHkgPSBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcclxuXHJcbiAgICBpZiAoZmFtaWx5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZmFtaWx5ID0ge1xyXG4gICAgICAgIGN1cnJlbnQ6IHR5cGVcclxuICAgICAgfTtcclxuICAgICAgYWxsRmFtaWxpZXNCeUlELnNldChpZCwgZmFtaWx5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBlbmRpbmdVcGRhdGVzLnB1c2goW2ZhbWlseSwgdHlwZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbEZhbWlsaWVzQnlUeXBlLnNldCh0eXBlLCBmYW1pbHkpOyAvLyBWaXNpdCBpbm5lciB0eXBlcyBiZWNhdXNlIHdlIG1pZ2h0IG5vdCBoYXZlIHJlZ2lzdGVyZWQgdGhlbS5cclxuXHJcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcclxuICAgICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XHJcbiAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxyXG4gICAgICAgICAgcmVnaXN0ZXIodHlwZS5yZW5kZXIsIGlkICsgJyRyZW5kZXInKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcclxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUudHlwZSwgaWQgKyAnJHR5cGUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldFNpZ25hdHVyZSh0eXBlLCBrZXkpIHtcclxuICB2YXIgZm9yY2VSZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XHJcbiAgdmFyIGdldEN1c3RvbUhvb2tzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XHJcblxyXG4gIHtcclxuICAgIGFsbFNpZ25hdHVyZXNCeVR5cGUuc2V0KHR5cGUsIHtcclxuICAgICAgZm9yY2VSZXNldDogZm9yY2VSZXNldCxcclxuICAgICAgb3duS2V5OiBrZXksXHJcbiAgICAgIGZ1bGxLZXk6IG51bGwsXHJcbiAgICAgIGdldEN1c3RvbUhvb2tzOiBnZXRDdXN0b21Ib29rcyB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0gLy8gVGhpcyBpcyBsYXppbHkgY2FsbGVkIGR1cmluZyBmaXJzdCByZW5kZXIgZm9yIGEgdHlwZS5cclxuLy8gSXQgY2FwdHVyZXMgSG9vayBsaXN0IGF0IHRoYXQgdGltZSBzbyBpbmxpbmUgcmVxdWlyZXMgZG9uJ3QgYnJlYWsgY29tcGFyaXNvbnMuXHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUodHlwZSkge1xyXG4gIHtcclxuICAgIHZhciBzaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldCh0eXBlKTtcclxuXHJcbiAgICBpZiAoc2lnbmF0dXJlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29tcHV0ZUZ1bGxLZXkoc2lnbmF0dXJlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0RmFtaWx5QnlJRChpZCkge1xyXG4gIHtcclxuICAgIHJldHVybiBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0RmFtaWx5QnlUeXBlKHR5cGUpIHtcclxuICB7XHJcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeVR5cGUuZ2V0KHR5cGUpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzKGZhbWlsaWVzKSB7XHJcbiAge1xyXG4gICAgdmFyIGFmZmVjdGVkSW5zdGFuY2VzID0gbmV3IFNldCgpO1xyXG4gICAgbW91bnRlZFJvb3RzLmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcclxuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290LmdldChyb290KTtcclxuXHJcbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgaW5zdGFuY2VzRm9yUm9vdCA9IGhlbHBlcnMuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKHJvb3QsIGZhbWlsaWVzKTtcclxuICAgICAgaW5zdGFuY2VzRm9yUm9vdC5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0KSB7XHJcbiAgICAgICAgYWZmZWN0ZWRJbnN0YW5jZXMuYWRkKGluc3QpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFmZmVjdGVkSW5zdGFuY2VzO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBpbmplY3RJbnRvR2xvYmFsSG9vayhnbG9iYWxPYmplY3QpIHtcclxuICB7XHJcbiAgICAvLyBGb3IgUmVhY3QgTmF0aXZlLCB0aGUgZ2xvYmFsIGhvb2sgd2lsbCBiZSBzZXQgdXAgYnkgcmVxdWlyZSgncmVhY3QtZGV2dG9vbHMtY29yZScpLlxyXG4gICAgLy8gVGhhdCBjb2RlIHdpbGwgcnVuIGJlZm9yZSB1cy4gU28gd2UgbmVlZCB0byBtb25rZXlwYXRjaCBmdW5jdGlvbnMgb24gZXhpc3RpbmcgaG9vay5cclxuICAgIC8vIEZvciBSZWFjdCBXZWIsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSB0aGUgZXh0ZW5zaW9uLlxyXG4gICAgLy8gVGhpcyB3aWxsIGFsc28gcnVuIGJlZm9yZSB1cy5cclxuICAgIHZhciBob29rID0gZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcclxuXHJcbiAgICBpZiAoaG9vayA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZXJlIGlzIG5vIERldlRvb2xzIGV4dGVuc2lvbiwgd2UnbGwgbmVlZCB0byBzZXQgdXAgdGhlIGdsb2JhbCBob29rIG91cnNlbHZlcy5cclxuICAgICAgLy8gTm90ZSB0aGF0IGluIHRoaXMgY2FzZSBpdCdzIGltcG9ydGFudCB0aGF0IHJlbmRlcmVyIGNvZGUgcnVucyAqYWZ0ZXIqIHRoaXMgbWV0aG9kIGNhbGwuXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdGhlIHJlbmRlcmVyIHdpbGwgdGhpbmsgdGhhdCB0aGVyZSBpcyBubyBnbG9iYWwgaG9vaywgYW5kIHdvbid0IGRvIHRoZSBpbmplY3Rpb24uXHJcbiAgICAgIHZhciBuZXh0SUQgPSAwO1xyXG4gICAgICBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID0gaG9vayA9IHtcclxuICAgICAgICByZW5kZXJlcnM6IG5ldyBNYXAoKSxcclxuICAgICAgICBzdXBwb3J0c0ZpYmVyOiB0cnVlLFxyXG4gICAgICAgIGluamVjdDogZnVuY3Rpb24gKGluamVjdGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV4dElEKys7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNjaGVkdWxlRmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7fSxcclxuICAgICAgICBvbkNvbW1pdEZpYmVyUm9vdDogZnVuY3Rpb24gKGlkLCByb290LCBtYXliZVByaW9yaXR5TGV2ZWwsIGRpZEVycm9yKSB7fSxcclxuICAgICAgICBvbkNvbW1pdEZpYmVyVW5tb3VudDogZnVuY3Rpb24gKCkge31cclxuICAgICAgfTtcclxuICAgIH0gLy8gSGVyZSwgd2UganVzdCB3YW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byBzY2hlZHVsZVJlZnJlc2guXHJcblxyXG5cclxuICAgIHZhciBvbGRJbmplY3QgPSBob29rLmluamVjdDtcclxuXHJcbiAgICBob29rLmluamVjdCA9IGZ1bmN0aW9uIChpbmplY3RlZCkge1xyXG4gICAgICB2YXIgaWQgPSBvbGRJbmplY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgaW5qZWN0ZWQuc2NoZWR1bGVSZWZyZXNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBpbmplY3RlZC5zZXRSZWZyZXNoSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIFRoaXMgdmVyc2lvbiBzdXBwb3J0cyBSZWFjdCBSZWZyZXNoLlxyXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBpZDtcclxuICAgIH07IC8vIERvIHRoZSBzYW1lIGZvciBhbnkgYWxyZWFkeSBpbmplY3RlZCByb290cy5cclxuICAgIC8vIFRoaXMgaXMgdXNlZnVsIGlmIFJlYWN0RE9NIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE3NjI2XHJcblxyXG5cclxuICAgIGhvb2sucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24gKGluamVjdGVkLCBpZCkge1xyXG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBUaGlzIHZlcnNpb24gc3VwcG9ydHMgUmVhY3QgUmVmcmVzaC5cclxuICAgICAgICBoZWxwZXJzQnlSZW5kZXJlcklELnNldChpZCwgaW5qZWN0ZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTsgLy8gV2UgYWxzbyB3YW50IHRvIHRyYWNrIGN1cnJlbnRseSBtb3VudGVkIHJvb3RzLlxyXG5cclxuICAgIHZhciBvbGRPbkNvbW1pdEZpYmVyUm9vdCA9IGhvb2sub25Db21taXRGaWJlclJvb3Q7XHJcblxyXG4gICAgdmFyIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QgPSBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgfHwgZnVuY3Rpb24gKCkge307XHJcblxyXG4gICAgaG9vay5vblNjaGVkdWxlRmliZXJSb290ID0gZnVuY3Rpb24gKGlkLCByb290LCBjaGlsZHJlbikge1xyXG4gICAgICBpZiAoIWlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcclxuICAgICAgICAvLyBJZiBpdCB3YXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQsIGRvbid0IGF0dGVtcHQgdG8gcmVzdG9yZS5cclxuICAgICAgICAvLyBUaGlzIGluY2x1ZGVzIGludGVudGlvbmFsbHkgc2NoZWR1bGVkIHVubW91bnRzLlxyXG4gICAgICAgIGZhaWxlZFJvb3RzLmRlbGV0ZShyb290KTtcclxuXHJcbiAgICAgICAgaWYgKHJvb3RFbGVtZW50cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgcm9vdEVsZW1lbnRzLnNldChyb290LCBjaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gb2xkT25TY2hlZHVsZUZpYmVyUm9vdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBob29rLm9uQ29tbWl0RmliZXJSb290ID0gZnVuY3Rpb24gKGlkLCByb290LCBtYXliZVByaW9yaXR5TGV2ZWwsIGRpZEVycm9yKSB7XHJcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5UmVuZGVyZXJJRC5nZXQoaWQpO1xyXG5cclxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaGVscGVyc0J5Um9vdC5zZXQocm9vdCwgaGVscGVycyk7XHJcbiAgICAgIHZhciBjdXJyZW50ID0gcm9vdC5jdXJyZW50O1xyXG4gICAgICB2YXIgYWx0ZXJuYXRlID0gY3VycmVudC5hbHRlcm5hdGU7IC8vIFdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyByb290IGhhcyBqdXN0ICh1biltb3VudGVkLlxyXG4gICAgICAvLyBUaGlzIGxvZ2ljIGlzIGNvcHktcGFzdGVkIGZyb20gc2ltaWxhciBsb2dpYyBpbiB0aGUgRGV2VG9vbHMgYmFja2VuZC5cclxuICAgICAgLy8gSWYgdGhpcyBicmVha3Mgd2l0aCBzb21lIHJlZmFjdG9yaW5nLCB5b3UnbGwgd2FudCB0byB1cGRhdGUgRGV2VG9vbHMgdG9vLlxyXG5cclxuICAgICAgaWYgKGFsdGVybmF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHZhciB3YXNNb3VudGVkID0gYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XHJcbiAgICAgICAgdmFyIGlzTW91bnRlZCA9IGN1cnJlbnQubWVtb2l6ZWRTdGF0ZSAhPSBudWxsICYmIGN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghd2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIHtcclxuICAgICAgICAgIC8vIE1vdW50IGEgbmV3IHJvb3QuXHJcbiAgICAgICAgICBtb3VudGVkUm9vdHMuYWRkKHJvb3QpO1xyXG4gICAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIDsgZWxzZSBpZiAod2FzTW91bnRlZCAmJiAhaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICAvLyBVbm1vdW50IGFuIGV4aXN0aW5nIHJvb3QuXHJcbiAgICAgICAgICBtb3VudGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xyXG5cclxuICAgICAgICAgIGlmIChkaWRFcnJvcikge1xyXG4gICAgICAgICAgICAvLyBXZSdsbCByZW1vdW50IGl0IG9uIGZ1dHVyZSBlZGl0cy5cclxuICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVscGVyc0J5Um9vdC5kZWxldGUocm9vdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICghd2FzTW91bnRlZCAmJiAhaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gV2UnbGwgcmVtb3VudCBpdCBvbiBmdXR1cmUgZWRpdHMuXHJcbiAgICAgICAgICAgIGZhaWxlZFJvb3RzLmFkZChyb290KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cclxuICAgICAgICBtb3VudGVkUm9vdHMuYWRkKHJvb3QpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gb2xkT25Db21taXRGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhc1VucmVjb3ZlcmFibGVFcnJvcnMoKSB7XHJcbiAgLy8gVE9ETzogZGVsZXRlIHRoaXMgYWZ0ZXIgcmVtb3ZpbmcgZGVwZW5kZW5jeSBpbiBSTi5cclxuICByZXR1cm4gZmFsc2U7XHJcbn0gLy8gRXhwb3NlZCBmb3IgdGVzdGluZy5cclxuXHJcbmZ1bmN0aW9uIF9nZXRNb3VudGVkUm9vdENvdW50KCkge1xyXG4gIHtcclxuICAgIHJldHVybiBtb3VudGVkUm9vdHMuc2l6ZTtcclxuICB9XHJcbn0gLy8gVGhpcyBpcyBhIHdyYXBwZXIgb3ZlciBtb3JlIHByaW1pdGl2ZSBmdW5jdGlvbnMgZm9yIHNldHRpbmcgc2lnbmF0dXJlLlxyXG4vLyBTaWduYXR1cmVzIGxldCB1cyBkZWNpZGUgd2hldGhlciB0aGUgSG9vayBvcmRlciBoYXMgY2hhbmdlZCBvbiByZWZyZXNoLlxyXG4vL1xyXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgYXMgYSB0cmFuc2Zvcm0gdGFyZ2V0LCBlLmcuOlxyXG4vLyB2YXIgX3MgPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpXHJcbi8vXHJcbi8vIGZ1bmN0aW9uIEhlbGxvKCkge1xyXG4vLyAgIGNvbnN0IFtmb28sIHNldEZvb10gPSB1c2VTdGF0ZSgwKTtcclxuLy8gICBjb25zdCB2YWx1ZSA9IHVzZUN1c3RvbUhvb2soKTtcclxuLy8gICBfcygpOyAvKiBTZWNvbmQgY2FsbCB0cmlnZ2VycyBjb2xsZWN0aW5nIHRoZSBjdXN0b20gSG9vayBsaXN0LlxyXG4vLyAgICAgICAgICAqIFRoaXMgZG9lc24ndCBoYXBwZW4gZHVyaW5nIHRoZSBtb2R1bGUgZXZhbHVhdGlvbiBiZWNhdXNlIHdlXHJcbi8vICAgICAgICAgICogZG9uJ3Qgd2FudCB0byBjaGFuZ2UgdGhlIG1vZHVsZSBvcmRlciB3aXRoIGlubGluZSByZXF1aXJlcy5cclxuLy8gICAgICAgICAgKiBOZXh0IGNhbGxzIGFyZSBub29wcy4gKi9cclxuLy8gICByZXR1cm4gPGgxPkhpPC9oMT47XHJcbi8vIH1cclxuLy9cclxuLy8gLyogRmlyc3QgY2FsbCBzcGVjaWZpZXMgdGhlIHNpZ25hdHVyZTogKi9cclxuLy8gX3MoXHJcbi8vICAgSGVsbG8sXHJcbi8vICAgJ3VzZVN0YXRle1tmb28sIHNldEZvb119KDApJyxcclxuLy8gICAoKSA9PiBbdXNlQ3VzdG9tSG9va10sIC8qIExhenkgdG8gYXZvaWQgdHJpZ2dlcmluZyBpbmxpbmUgcmVxdWlyZXMgKi9cclxuLy8gKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKCkge1xyXG4gIHtcclxuICAgIC8vIFdlJ2xsIGZpbGwgaW4gdGhlIHNpZ25hdHVyZSBpbiB0d28gc3RlcHMuXHJcbiAgICAvLyBGaXJzdCwgd2UnbGwga25vdyB0aGUgc2lnbmF0dXJlIGl0c2VsZi4gVGhpcyBoYXBwZW5zIG91dHNpZGUgdGhlIGNvbXBvbmVudC5cclxuICAgIC8vIFRoZW4sIHdlJ2xsIGtub3cgdGhlIHJlZmVyZW5jZXMgdG8gY3VzdG9tIEhvb2tzLiBUaGlzIGhhcHBlbnMgaW5zaWRlIHRoZSBjb21wb25lbnQuXHJcbiAgICAvLyBBZnRlciB0aGF0LCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbCBiZSBhIGZhc3QgcGF0aCBuby1vcC5cclxuICAgIHZhciBzdGF0dXMgPSAnbmVlZHNTaWduYXR1cmUnO1xyXG4gICAgdmFyIHNhdmVkVHlwZTtcclxuICAgIHZhciBoYXNDdXN0b21Ib29rcztcclxuICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcykge1xyXG4gICAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgJ25lZWRzU2lnbmF0dXJlJzpcclxuICAgICAgICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gSWYgd2UgcmVjZWl2ZWQgYW4gYXJndW1lbnQsIHRoaXMgaXMgdGhlIGluaXRpYWwgcmVnaXN0cmF0aW9uIGNhbGwuXHJcbiAgICAgICAgICAgIHNhdmVkVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIGhhc0N1c3RvbUhvb2tzID0gdHlwZW9mIGdldEN1c3RvbUhvb2tzID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgICAgICBzZXRTaWduYXR1cmUodHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7IC8vIFRoZSBuZXh0IGNhbGwgd2UgZXhwZWN0IGlzIGZyb20gaW5zaWRlIGEgZnVuY3Rpb24sIHRvIGZpbGwgaW4gdGhlIGN1c3RvbSBIb29rcy5cclxuXHJcbiAgICAgICAgICAgIHN0YXR1cyA9ICduZWVkc0N1c3RvbUhvb2tzJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbmVlZHNDdXN0b21Ib29rcyc6XHJcbiAgICAgICAgICBpZiAoaGFzQ3VzdG9tSG9va3MpIHtcclxuICAgICAgICAgICAgY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlKHNhdmVkVHlwZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3RhdHVzID0gJ3Jlc29sdmVkJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHlwZTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzTGlrZWx5Q29tcG9uZW50VHlwZSh0eXBlKSB7XHJcbiAge1xyXG4gICAgc3dpdGNoICh0eXBlb2YgdHlwZSkge1xyXG4gICAgICBjYXNlICdmdW5jdGlvbic6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gRmlyc3QsIGRlYWwgd2l0aCBjbGFzc2VzLlxyXG4gICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAvLyBSZWFjdCBjbGFzcy5cclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG93bk5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModHlwZS5wcm90b3R5cGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG93bk5hbWVzLmxlbmd0aCA+IDEgfHwgb3duTmFtZXNbMF0gIT09ICdjb25zdHJ1Y3RvcicpIHtcclxuICAgICAgICAgICAgICAvLyBUaGlzIGxvb2tzIGxpa2UgYSBjbGFzcy5cclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICAgIC8vIEl0IGhhcyBhIHN1cGVyY2xhc3MuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IC8vIFBhc3MgdGhyb3VnaC5cclxuICAgICAgICAgICAgLy8gVGhpcyBsb29rcyBsaWtlIGEgcmVndWxhciBmdW5jdGlvbiB3aXRoIGVtcHR5IHByb3RvdHlwZS5cclxuXHJcbiAgICAgICAgICB9IC8vIEZvciBwbGFpbiBmdW5jdGlvbnMgYW5kIGFycm93cywgdXNlIG5hbWUgYXMgYSBoZXVyaXN0aWMuXHJcblxyXG5cclxuICAgICAgICAgIHZhciBuYW1lID0gdHlwZS5uYW1lIHx8IHR5cGUuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIC9eW0EtWl0vLnRlc3QobmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAodHlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xyXG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcclxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcclxuICAgICAgICAgICAgICAgIC8vIERlZmluaXRlbHkgUmVhY3QgY29tcG9uZW50cy5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydHMuX2dldE1vdW50ZWRSb290Q291bnQgPSBfZ2V0TW91bnRlZFJvb3RDb3VudDtcclxuZXhwb3J0cy5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUgPSBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU7XHJcbmV4cG9ydHMuY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0gPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybTtcclxuZXhwb3J0cy5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzID0gZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcztcclxuZXhwb3J0cy5nZXRGYW1pbHlCeUlEID0gZ2V0RmFtaWx5QnlJRDtcclxuZXhwb3J0cy5nZXRGYW1pbHlCeVR5cGUgPSBnZXRGYW1pbHlCeVR5cGU7XHJcbmV4cG9ydHMuaGFzVW5yZWNvdmVyYWJsZUVycm9ycyA9IGhhc1VucmVjb3ZlcmFibGVFcnJvcnM7XHJcbmV4cG9ydHMuaW5qZWN0SW50b0dsb2JhbEhvb2sgPSBpbmplY3RJbnRvR2xvYmFsSG9vaztcclxuZXhwb3J0cy5pc0xpa2VseUNvbXBvbmVudFR5cGUgPSBpc0xpa2VseUNvbXBvbmVudFR5cGU7XHJcbmV4cG9ydHMucGVyZm9ybVJlYWN0UmVmcmVzaCA9IHBlcmZvcm1SZWFjdFJlZnJlc2g7XHJcbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlcjtcclxuZXhwb3J0cy5zZXRTaWduYXR1cmUgPSBzZXRTaWduYXR1cmU7XHJcbiAgfSkoKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=