(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFileToolbarMenu"] = factory(require("vue"));
	else
		root["VueFileToolbarMenu"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aCallable(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "03dd":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("eac5"),
    nativeKeys = __webpack_require__("57a5");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__("fc6a");
var $getOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "07c7":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "0875":
/***/ (function(module, exports) {

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

module.exports = iteratorToArray;


/***/ }),

/***/ "0b07":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("34ac"),
    getValue = __webpack_require__("3698");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d24":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e"),
    stubFalse = __webpack_require__("07c7");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "107c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "126d":
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__("6da8"),
    hasUnicode = __webpack_require__("aaec"),
    unicodeToArray = __webpack_require__("d094");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1368":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("da03");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = exec.call(R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return regexpExec.call(R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};


/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1cec":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~toString(requireObjectCoercible(this))
      .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "253c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "266a":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("7948");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "2670":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarMenu.vue?vue&type=template&id=0b0941d8

var _hoisted_1 = {
  class: "bar-menu"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "extended-hover-zone"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "bar-menu-items",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      width: $props.width + 'px',
      minWidth: $props.width + 'px',
      maxHeight: $props.height + 'px',
      overflow: $props.height ? 'auto' : 'visible'
    })
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.menu, function (item, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($options.get_component(item.is)), {
      item: item,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(item.class),
      id: item.id,
      key: 'menu-' + index
    }, null, 8, ["item", "class", "id"]);
  }), 128))], 4)]);
}
// CONCATENATED MODULE: ./src/Bar/BarMenu.vue?vue&type=template&id=0b0941d8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarMenuItem.vue?vue&type=template&id=0ae8a65c

var BarMenuItemvue_type_template_id_0ae8a65c_hoisted_1 = ["title"];
var BarMenuItemvue_type_template_id_0ae8a65c_hoisted_2 = {
  key: 0,
  class: "material-icons icon"
};
var _hoisted_3 = {
  key: 1,
  class: "emoji"
};
var _hoisted_4 = {
  key: 2,
  class: "label"
};
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  key: 4,
  class: "hotkey"
};
var _hoisted_7 = ["innerHTML"];
var _hoisted_8 = {
  key: 6,
  class: "material-icons chevron"
};
function BarMenuItemvue_type_template_id_0ae8a65c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["bar-menu-item", {
      disabled: $props.item.disabled,
      active: $props.item.active
    }]),
    onMousedown: _cache[0] || (_cache[0] = function (e) {
      return e.preventDefault();
    }),
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.click && $options.click.apply($options, arguments);
    }),
    title: $props.item.title,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      height: $props.item.height + 'px'
    })
  }, [$props.item.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", BarMenuItemvue_type_template_id_0ae8a65c_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.item.icon), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.emoji ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.get_emoji($props.item.emoji)), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.text ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.item.text), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.html ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 3,
    class: "label",
    innerHTML: $props.item.html
  }, null, 8, _hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.hotkey ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.hotkey), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.menu && $props.item.custom_chevron ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 5,
    class: "chevron",
    innerHTML: $props.item.custom_chevron
  }, null, 8, _hoisted_7)) : $props.item.menu ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_8, "chevron_right")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.menu ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($options.get_component($props.item.menu)), {
    key: 7,
    ref: "menu",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menu", $props.item.menu_class]),
    menu: $props.item.menu,
    id: $props.item.menu_id,
    width: $props.item.menu_width,
    height: $props.item.menu_height
  }, null, 8, ["menu", "class", "id", "width", "height"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 46, BarMenuItemvue_type_template_id_0ae8a65c_hoisted_1);
}
// CONCATENATED MODULE: ./src/Bar/BarMenuItem.vue?vue&type=template&id=0ae8a65c

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/node-emoji/index.js
var node_emoji = __webpack_require__("b90b");
var node_emoji_default = /*#__PURE__*/__webpack_require__.n(node_emoji);

// EXTERNAL MODULE: ./src/Bar/imports/bar-hotkey-manager.js + 1 modules
var bar_hotkey_manager = __webpack_require__("de35");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarMenuItem.vue?vue&type=script&lang=js









/* harmony default export */ var BarMenuItemvue_type_script_lang_js = ({
  mixins: [bar_hotkey_manager["a" /* default */]],
  components: {
    BarMenu: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineAsyncComponent"])(function () {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "2670"));
    }) // because of circular reference

  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    click: function click(e) {
      if (this.item.click && !this.item.disabled) this.item.click(e);else if (!this.$refs.menu || !e.composedPath || !e.composedPath().includes(this.$refs.menu.$el)) {
        e.stopPropagation(); // prevent menu close for touch devices
      }
    },
    get_emoji: function get_emoji(emoji_name) {
      return node_emoji_default.a.get(emoji_name);
    },
    get_component: function get_component(is) {
      if (is && !Array.isArray(is) && Object(esm_typeof["a" /* default */])(is) == "object") return is; // if component
      else return "bar-menu";
    }
  }
});
// CONCATENATED MODULE: ./src/Bar/BarMenuItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/Bar/BarMenuItem.vue



BarMenuItemvue_type_script_lang_js.render = BarMenuItemvue_type_template_id_0ae8a65c_render

/* harmony default export */ var BarMenuItem = (BarMenuItemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarMenuSeparator.vue?vue&type=template&id=4ba03b66

var BarMenuSeparatorvue_type_template_id_4ba03b66_hoisted_1 = {
  class: "bar-menu-separator"
};
function BarMenuSeparatorvue_type_template_id_4ba03b66_render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BarMenuSeparatorvue_type_template_id_4ba03b66_hoisted_1);
}
// CONCATENATED MODULE: ./src/Bar/BarMenuSeparator.vue?vue&type=template&id=4ba03b66

// CONCATENATED MODULE: ./src/Bar/BarMenuSeparator.vue

const script = {}
script.render = BarMenuSeparatorvue_type_template_id_4ba03b66_render

/* harmony default export */ var BarMenuSeparator = (script);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarMenu.vue?vue&type=script&lang=js




/* harmony default export */ var BarMenuvue_type_script_lang_js = ({
  components: {
    BarMenuItem: BarMenuItem,
    BarMenuSeparator: BarMenuSeparator
  },
  props: {
    menu: {
      type: Array,
      required: true
    },
    width: Number,
    height: Number
  },
  methods: {
    get_component: function get_component(is) {
      if (Object(esm_typeof["a" /* default */])(is) == "object") return is;else if (typeof is == "string") return 'bar-menu-' + is;else return 'bar-menu-item';
    }
  }
});
// CONCATENATED MODULE: ./src/Bar/BarMenu.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/Bar/BarMenu.vue



BarMenuvue_type_script_lang_js.render = render

/* harmony default export */ var BarMenu = __webpack_exports__["default"] = (BarMenuvue_type_script_lang_js);

/***/ }),

/***/ "2895":
/***/ (function(module, exports, __webpack_require__) {

/*jslint node: true*/
var toArray = __webpack_require__("4d90");
var emojiByName = __webpack_require__("f9ea");

"use strict";

/**
 * regex to parse emoji in a string - finds emoji, e.g. :coffee:
 */
var emojiNameRegex = /:([a-zA-Z0-9_\-\+]+):/g;

/**
 * regex to trim whitespace
 * use instead of String.prototype.trim() for IE8 support
 */
var trimSpaceRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

/**
 * Removes colons on either side
 * of the string if present
 * @param  {string} str
 * @return {string}
 */
function stripColons (str) {
  var colonIndex = str.indexOf(':');
  if (colonIndex > -1) {
    // :emoji: (http://www.emoji-cheat-sheet.com/)
    if (colonIndex === str.length - 1) {
      str = str.substring(0, colonIndex);
      return stripColons(str);
    } else {
      str = str.substr(colonIndex + 1);
      return stripColons(str);
    }
  }

  return str;
}

/**
 * Adds colons to either side
 * of the string
 * @param {string} str
 * @return {string}
 */
function wrapColons (str) {
  return (typeof str === 'string' && str.length > 0) ? ':' + str + ':' : str;
}

/**
 * Ensure that the word is wrapped in colons
 * by only adding them, if they are not there.
 * @param {string} str
 * @return {string}
 */
function ensureColons (str) {
  return (typeof str === 'string' && str[0] !== ':') ? wrapColons(str) : str;
}

// Non spacing mark, some emoticons have them. It's the 'Variant Form',
// which provides more information so that emoticons can be rendered as
// more colorful graphics. FE0E is a unicode text version, where as FE0F
// should be rendered as a graphical version. The code gracefully degrades.
var NON_SPACING_MARK = String.fromCharCode(65039); // 65039 - '️' - 0xFE0F;
var nonSpacingRegex = new RegExp(NON_SPACING_MARK, 'g')

// Remove the non-spacing-mark from the code, never send a stripped version
// to the client, as it kills graphical emoticons.
function stripNSB (code) {
  return code.replace(nonSpacingRegex, '');
};

// Reversed hash table, where as emojiByName contains a { heart: '❤' }
// dictionary emojiByCode contains { ❤: 'heart' }. The codes are normalized
// to the text version.
var emojiByCode = Object.keys(emojiByName).reduce(function(h,k) {
  h[stripNSB(emojiByName[k])] = k;
  return h;
}, {});

/**
 * Emoji namespace
 */
var Emoji = {
  emoji: emojiByName,
};

/**
 * get emoji code from name. return emoji code back if code is passed in.
 * @param  {string} emoji
 * @return {string}
 */
Emoji._get = function _get (emoji) {
  if (emojiByCode[stripNSB(emoji)]) {
    return emoji;
  } else if (emojiByName.hasOwnProperty(emoji)) {
    return emojiByName[emoji];
  }

  return ensureColons(emoji);
};

/**
 * get emoji code from :emoji: string or name
 * @param  {string} emoji
 * @return {string}
 */
Emoji.get = function get (emoji) {
  emoji = stripColons(emoji);

  return Emoji._get(emoji);
};

/**
 * find the emoji by either code or name
 * @param {string} nameOrCode The emoji to find, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji.find = function find (nameOrCode) {
  return Emoji.findByName(nameOrCode) || Emoji.findByCode(nameOrCode);
};

/**
 * find the emoji by name
 * @param {string} name The emoji to find either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji.findByName = function findByName (name) {
  var stripped = stripColons(name);
  var emoji = emojiByName[stripped];

  return emoji ? ({ emoji: emoji, key: stripped }) : undefined;
};

/**
 * find the emoji by code (emoji)
 * @param {string} code The emoji to find; for example `☕` or `☔`
 * @return {object}
 */
Emoji.findByCode = function findByCode (code) {
  var stripped = stripNSB(code);
  var name = emojiByCode[stripped];

  // lookup emoji to ensure the Variant Form is returned
  return name ? ({ emoji: emojiByName[name], key: name }) : undefined;
};


/**
 * Check if an emoji is known by this library
 * @param {string} nameOrCode The emoji to validate, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji.hasEmoji = function hasEmoji (nameOrCode) {
  return Emoji.hasEmojiByName(nameOrCode) || Emoji.hasEmojiByCode(nameOrCode);
};

/**
 * Check if an emoji with given name is known by this library
 * @param {string} name The emoji to validate either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji.hasEmojiByName = function hasEmojiByName (name) {
  var result = Emoji.findByName(name);
  return !!result && result.key === stripColons(name);
};

/**
 * Check if a given emoji is known by this library
 * @param {string} code The emoji to validate; for example `☕` or `☔`
 * @return {object}
 */
Emoji.hasEmojiByCode = function hasEmojiByCode (code) {
  var result = Emoji.findByCode(code);
  return !!result && stripNSB(result.emoji) === stripNSB(code);
};

/**
 * get emoji name from code
 * @param  {string} emoji
 * @param  {boolean} includeColons should the result include the ::
 * @return {string}
 */
Emoji.which = function which (emoji_code, includeColons) {
  var code = stripNSB(emoji_code);
  var word = emojiByCode[code];

  return includeColons ? wrapColons(word) : word;
};

/**
 * emojify a string (replace :emoji: with an emoji)
 * @param  {string} str
 * @param  {function} on_missing (gets emoji name without :: and returns a proper emoji if no emoji was found)
 * @param  {function} format (wrap the returned emoji in a custom element)
 * @return {string}
 */
Emoji.emojify = function emojify (str, on_missing, format) {
  if (!str) return '';

  return str.split(emojiNameRegex) // parse emoji via regex
            .map(function parseEmoji(s, i) {
              // every second element is an emoji, e.g. "test :fast_forward:" -> [ "test ", "fast_forward" ]
              if (i % 2 === 0) return s;
              var emoji = Emoji._get(s);
              var isMissing = emoji.indexOf(':') > -1;

              if (isMissing && typeof on_missing === 'function') {
                return on_missing(s);
              }

              if (!isMissing && typeof format === 'function') {
                return format(emoji, s);
              }

              return emoji;
            })
            .join('') // convert back to string
  ;
};

/**
 * return a random emoji
 * @return {string}
 */
Emoji.random = function random () {
  var emojiKeys = Object.keys(emojiByName);
  var randomIndex = Math.floor(Math.random() * emojiKeys.length);
  var key = emojiKeys[randomIndex];
  var emoji = Emoji._get(key);
  return { key: key, emoji: emoji };
}

/**
 *  return an collection of potential emoji matches
 *  @param {string} str
 *  @return {Array.<Object>}
 */
Emoji.search = function search (str) {
  var emojiKeys = Object.keys(emojiByName);
  var matcher = stripColons(str)
  var matchingKeys = emojiKeys.filter(function(key) {
    return key.toString().indexOf(matcher) === 0;
  });
  return matchingKeys.map(function(key) {
    return {
      key: key,
      emoji: Emoji._get(key),
    };
  });
}

/**
 * unemojify a string (replace emoji with :emoji:)
 * @param  {string} str
 * @return {string}
 */
Emoji.unemojify = function unemojify (str) {
  if (!str) return '';
  var words = toArray(str);

  return words.map(function(word) {
    return Emoji.which(word, true) || word;
  }).join('');
};

/**
 * replace emojis with replacement value
 * @param {string} str
 * @param {function|string} the string or callback function to replace the emoji with
 * @param {boolean} should trailing whitespaces be cleaned? Defaults false
 * @return {string}
 */
Emoji.replace = function replace (str, replacement, cleanSpaces) {
  if (!str) return '';

  var replace = typeof replacement === 'function' ? replacement : function() { return replacement; };
  var words = toArray(str);

  var replaced = words.map(function(word, idx) {
    var emoji = Emoji.findByCode(word);

    if (emoji && cleanSpaces && words[idx + 1] === ' ') {
      words[idx + 1] = '';
    }

    return emoji ? replace(emoji) : word;
  }).join('');

  return cleanSpaces ? replaced.replace(trimSpaceRegex, '') : replaced;
};


/**
 * remove all emojis from a string
 * @param {string} str
 * @return {string}
 */
Emoji.strip = function strip (str) {
  return Emoji.replace(str, '', true);
};

module.exports = Emoji;


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "30c9":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isLength = __webpack_require__("b218");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "34ac":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isMasked = __webpack_require__("1368"),
    isObject = __webpack_require__("1a8c"),
    toSource = __webpack_require__("dc57");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "3698":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "39ff":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var toString = __webpack_require__("577e");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "3ff1":
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__("266a"),
    keys = __webpack_require__("ec69");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "4024":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return script; });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var clamp_1 = clamp;

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}

var clamp$1 = clamp_1;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_throttle = throttle;

var throttle$1 = lodash_throttle;

var script = {
  name: 'Saturation',
  props: {
    value: Object,
  },
  computed: {
    colors() {
      return this.value;
    },
    bgColor() {
      return `hsl(${this.colors.hsv.h}, 100%, 50%)`;
    },
    pointerTop() {
      return `${(-(this.colors.hsv.v * 100) + 1) + 100}%`;
    },
    pointerLeft() {
      return `${this.colors.hsv.s * 100}%`;
    },
  },
  methods: {
    throttle: throttle$1((fn, data) => {
      fn(data);
    }, 20,
    {
      leading: true,
      trailing: false,
    }),
    handleChange(e, skip) {
      !skip && e.preventDefault();
      const { container } = this.$refs;
      if (!container) {
        // for some edge cases, container may not exist. see #220
        return;
      }
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      const yOffset = container.getBoundingClientRect().top + window.pageYOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      const left = clamp$1(pageX - xOffset, 0, containerWidth);
      const top = clamp$1(pageY - yOffset, 0, containerHeight);
      const saturation = left / containerWidth;
      const bright = clamp$1(-(top / containerHeight) + 1, 0, 1);

      this.throttle(this.onChange, {
        h: this.colors.hsv.h,
        s: saturation,
        v: bright,
        a: this.colors.hsv.a,
        source: 'hsva',
      });
    },
    onChange(param) {
      this.$emit('change', param);
    },
    handleMouseDown(e) {
      // this.handleChange(e, true)
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp(e) {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    },
  },
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "4051":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "42a2":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("b5a7"),
    Map = __webpack_require__("79bc"),
    Promise = __webpack_require__("1cec"),
    Set = __webpack_require__("c869"),
    WeakMap = __webpack_require__("39ff"),
    baseGetTag = __webpack_require__("3729"),
    toSource = __webpack_require__("dc57");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "4359":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "43f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4d90":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    copyArray = __webpack_require__("4359"),
    getTag = __webpack_require__("42a2"),
    isArrayLike = __webpack_require__("30c9"),
    isString = __webpack_require__("e2a0"),
    iteratorToArray = __webpack_require__("0875"),
    mapToArray = __webpack_require__("edfa"),
    setToArray = __webpack_require__("ac41"),
    stringToArray = __webpack_require__("126d"),
    values = __webpack_require__("3ff1");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

module.exports = toArray;


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "50d8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "5135":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var fails = __webpack_require__("d039");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getMethod = __webpack_require__("dc4a");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");
var wellKnownSymbol = __webpack_require__("b622");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = toString(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "53ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d28b");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);






function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "57a5":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var has = __webpack_require__("5135");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = has(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "6450":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_BarButtonColor_vue_vue_type_style_index_0_id_f094c3d0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4051");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_BarButtonColor_vue_vue_type_style_index_0_id_f094c3d0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_BarButtonColor_vue_vue_type_style_index_0_id_f094c3d0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.codePointAt` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6747":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("f5df");
var getBuiltIn = __webpack_require__("d066");
var inspectSource = __webpack_require__("8925");

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6da8":
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var has = __webpack_require__("5135");
var createNonEnumerableProperty = __webpack_require__("9112");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!has(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6fcd":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("50d8"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isIndex = __webpack_require__("c098"),
    isTypedArray = __webpack_require__("73ac");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "73ac":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("743f"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "743f":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isLength = __webpack_require__("b218"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7948":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "79bc":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var FunctionName = __webpack_require__("5e77");
var isCallable = __webpack_require__("1626");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "91e9":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var toString = __webpack_require__("577e");
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");
var create = __webpack_require__("7c73");
var getInternalState = __webpack_require__("69f3").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = str.slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9520":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObject = __webpack_require__("1a8c");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "99d3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("585a");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

exports.UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var $toString = __webpack_require__("577e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  var valueOf = $Symbol[PROTOTYPE].valueOf;
  redefine($Symbol[PROTOTYPE], TO_PRIMITIVE, function () {
    return valueOf.apply(this, arguments);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a6bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Bar_vue_vue_type_style_index_0_id_50936cc6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("43f0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Bar_vue_vue_type_style_index_0_id_50936cc6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Bar_vue_vue_type_style_index_0_id_50936cc6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var isSymbol = __webpack_require__("d9b5");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a number');
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "aaec":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ac41":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b047":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var FUNCTION_NAME_EXISTS = __webpack_require__("5e77").EXISTS;
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b218":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "b5a7":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "b90b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2895");

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c098":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c789":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c869":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d094":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d370":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("253c"),
    isObjectLike = __webpack_require__("1310");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var getBuiltIn = __webpack_require__("d066");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "da03":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "dc57":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "de35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/hotkeys-js/dist/hotkeys.esm.js
/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */

var isff = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0 : false; // 绑定事件

function addEvent(object, event, method) {
  if (object.addEventListener) {
    object.addEventListener(event, method, false);
  } else if (object.attachEvent) {
    object.attachEvent("on".concat(event), function () {
      method(window.event);
    });
  }
} // 修饰键转换成对应的键码


function getMods(modifier, key) {
  var mods = key.slice(0, key.length - 1);

  for (var i = 0; i < mods.length; i++) {
    mods[i] = modifier[mods[i].toLowerCase()];
  }

  return mods;
} // 处理传的key字符串转换成数组


function getKeys(key) {
  if (typeof key !== 'string') key = '';
  key = key.replace(/\s/g, ''); // 匹配任何空白字符,包括空格、制表符、换页符等等

  var keys = key.split(','); // 同时设置多个快捷键，以','分割

  var index = keys.lastIndexOf(''); // 快捷键可能包含','，需特殊处理

  for (; index >= 0;) {
    keys[index - 1] += ',';
    keys.splice(index, 1);
    index = keys.lastIndexOf('');
  }

  return keys;
} // 比较修饰键的数组


function compareArray(a1, a2) {
  var arr1 = a1.length >= a2.length ? a1 : a2;
  var arr2 = a1.length >= a2.length ? a2 : a1;
  var isIndex = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) isIndex = false;
  }

  return isIndex;
}

var _keyMap = {
  backspace: 8,
  tab: 9,
  clear: 12,
  enter: 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  '⇪': 20,
  ',': 188,
  '.': 190,
  '/': 191,
  '`': 192,
  '-': isff ? 173 : 189,
  '=': isff ? 61 : 187,
  ';': isff ? 59 : 186,
  '\'': 222,
  '[': 219,
  ']': 221,
  '\\': 220
}; // Modifier Keys

var _modifier = {
  // shiftKey
  '⇧': 16,
  shift: 16,
  // altKey
  '⌥': 18,
  alt: 18,
  option: 18,
  // ctrlKey
  '⌃': 17,
  ctrl: 17,
  control: 17,
  // metaKey
  '⌘': 91,
  cmd: 91,
  command: 91
};
var modifierMap = {
  16: 'shiftKey',
  18: 'altKey',
  17: 'ctrlKey',
  91: 'metaKey',
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
};
var _mods = {
  16: false,
  18: false,
  17: false,
  91: false
};
var _handlers = {}; // F1~F12 special key

for (var k = 1; k < 20; k++) {
  _keyMap["f".concat(k)] = 111 + k;
}

var _downKeys = []; // 记录摁下的绑定键

var _scope = 'all'; // 默认热键范围

var elementHasBindEvent = []; // 已绑定事件的节点记录
// 返回键码

var code = function code(x) {
  return _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);
}; // 设置获取当前范围（默认为'所有'）


function setScope(scope) {
  _scope = scope || 'all';
} // 获取当前范围


function getScope() {
  return _scope || 'all';
} // 获取摁下绑定键的键值


function getPressedKeyCodes() {
  return _downKeys.slice(0);
} // 表单控件控件判断 返回 Boolean
// hotkey is effective only when filter return true


function filter(event) {
  var target = event.target || event.srcElement;
  var tagName = target.tagName;
  var flag = true; // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>

  if (target.isContentEditable || (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') && !target.readOnly) {
    flag = false;
  }

  return flag;
} // 判断摁下的键是否为某个键，返回true或者false


function isPressed(keyCode) {
  if (typeof keyCode === 'string') {
    keyCode = code(keyCode); // 转换成键码
  }

  return _downKeys.indexOf(keyCode) !== -1;
} // 循环删除handlers中的所有 scope(范围)


function deleteScope(scope, newScope) {
  var handlers;
  var i; // 没有指定scope，获取scope

  if (!scope) scope = getScope();

  for (var key in _handlers) {
    if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
      handlers = _handlers[key];

      for (i = 0; i < handlers.length;) {
        if (handlers[i].scope === scope) handlers.splice(i, 1);else i++;
      }
    }
  } // 如果scope被删除，将scope重置为all


  if (getScope() === scope) setScope(newScope || 'all');
} // 清除修饰键


function clearModifier(event) {
  var key = event.keyCode || event.which || event.charCode;

  var i = _downKeys.indexOf(key); // 从列表中清除按压过的键


  if (i >= 0) {
    _downKeys.splice(i, 1);
  } // 特殊处理 cmmand 键，在 cmmand 组合快捷键 keyup 只执行一次的问题


  if (event.key && event.key.toLowerCase() === 'meta') {
    _downKeys.splice(0, _downKeys.length);
  } // 修饰键 shiftKey altKey ctrlKey (command||metaKey) 清除


  if (key === 93 || key === 224) key = 91;

  if (key in _mods) {
    _mods[key] = false; // 将修饰键重置为false

    for (var k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = false;
    }
  }
}

function unbind(keysInfo) {
  // unbind(), unbind all keys
  if (!keysInfo) {
    Object.keys(_handlers).forEach(function (key) {
      return delete _handlers[key];
    });
  } else if (Array.isArray(keysInfo)) {
    // support like : unbind([{key: 'ctrl+a', scope: 's1'}, {key: 'ctrl-a', scope: 's2', splitKey: '-'}])
    keysInfo.forEach(function (info) {
      if (info.key) eachUnbind(info);
    });
  } else if (typeof keysInfo === 'object') {
    // support like unbind({key: 'ctrl+a, ctrl+b', scope:'abc'})
    if (keysInfo.key) eachUnbind(keysInfo);
  } else if (typeof keysInfo === 'string') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // support old method
    // eslint-disable-line
    var scope = args[0],
        method = args[1];

    if (typeof scope === 'function') {
      method = scope;
      scope = '';
    }

    eachUnbind({
      key: keysInfo,
      scope: scope,
      method: method,
      splitKey: '+'
    });
  }
} // 解除绑定某个范围的快捷键


var eachUnbind = function eachUnbind(_ref) {
  var key = _ref.key,
      scope = _ref.scope,
      method = _ref.method,
      _ref$splitKey = _ref.splitKey,
      splitKey = _ref$splitKey === void 0 ? '+' : _ref$splitKey;
  var multipleKeys = getKeys(key);
  multipleKeys.forEach(function (originKey) {
    var unbindKeys = originKey.split(splitKey);
    var len = unbindKeys.length;
    var lastKey = unbindKeys[len - 1];
    var keyCode = lastKey === '*' ? '*' : code(lastKey);
    if (!_handlers[keyCode]) return; // 判断是否传入范围，没有就获取范围

    if (!scope) scope = getScope();
    var mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
    _handlers[keyCode] = _handlers[keyCode].map(function (record) {
      // 通过函数判断，是否解除绑定，函数相等直接返回
      var isMatchingMethod = method ? record.method === method : true;

      if (isMatchingMethod && record.scope === scope && compareArray(record.mods, mods)) {
        return {};
      }

      return record;
    });
  });
}; // 对监听对应快捷键的回调函数进行处理


function eventHandler(event, handler, scope) {
  var modifiersMatch; // 看它是否在当前范围

  if (handler.scope === scope || handler.scope === 'all') {
    // 检查是否匹配修饰符（如果有返回true）
    modifiersMatch = handler.mods.length > 0;

    for (var y in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, y)) {
        if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) {
          modifiersMatch = false;
        }
      }
    } // 调用处理程序，如果是修饰键不做处理


    if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === '*') {
      if (handler.method(event, handler) === false) {
        if (event.preventDefault) event.preventDefault();else event.returnValue = false;
        if (event.stopPropagation) event.stopPropagation();
        if (event.cancelBubble) event.cancelBubble = true;
      }
    }
  }
} // 处理keydown事件


function dispatch(event) {
  var asterisk = _handlers['*'];
  var key = event.keyCode || event.which || event.charCode; // 表单控件过滤 默认表单控件不触发快捷键

  if (!hotkeys.filter.call(this, event)) return; // Gecko(Firefox)的command键值224，在Webkit(Chrome)中保持一致
  // Webkit左右 command 键值不一样

  if (key === 93 || key === 224) key = 91;
  /**
   * Collect bound keys
   * If an Input Method Editor is processing key input and the event is keydown, return 229.
   * https://stackoverflow.com/questions/25043934/is-it-ok-to-ignore-keydown-events-with-keycode-229
   * http://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
   */

  if (_downKeys.indexOf(key) === -1 && key !== 229) _downKeys.push(key);
  /**
   * Jest test cases are required.
   * ===============================
   */

  ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function (keyName) {
    var keyNum = modifierMap[keyName];

    if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
      _downKeys.push(keyNum);
    } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
      _downKeys.splice(_downKeys.indexOf(keyNum), 1);
    } else if (keyName === 'metaKey' && event[keyName] && _downKeys.length === 3) {
      /**
       * Fix if Command is pressed:
       * ===============================
       */
      if (!(event.ctrlKey || event.shiftKey || event.altKey)) {
        _downKeys = _downKeys.slice(_downKeys.indexOf(keyNum));
      }
    }
  });
  /**
   * -------------------------------
   */

  if (key in _mods) {
    _mods[key] = true; // 将特殊字符的key注册到 hotkeys 上

    for (var k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = true;
    }

    if (!asterisk) return;
  } // 将 modifierMap 里面的修饰键绑定到 event 中


  for (var e in _mods) {
    if (Object.prototype.hasOwnProperty.call(_mods, e)) {
      _mods[e] = event[modifierMap[e]];
    }
  }
  /**
   * https://github.com/jaywcjlove/hotkeys/pull/129
   * This solves the issue in Firefox on Windows where hotkeys corresponding to special characters would not trigger.
   * An example of this is ctrl+alt+m on a Swedish keyboard which is used to type μ.
   * Browser support: https://caniuse.com/#feat=keyboardevent-getmodifierstate
   */


  if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState('AltGraph')) {
    if (_downKeys.indexOf(17) === -1) {
      _downKeys.push(17);
    }

    if (_downKeys.indexOf(18) === -1) {
      _downKeys.push(18);
    }

    _mods[17] = true;
    _mods[18] = true;
  } // 获取范围 默认为 `all`


  var scope = getScope(); // 对任何快捷键都需要做的处理

  if (asterisk) {
    for (var i = 0; i < asterisk.length; i++) {
      if (asterisk[i].scope === scope && (event.type === 'keydown' && asterisk[i].keydown || event.type === 'keyup' && asterisk[i].keyup)) {
        eventHandler(event, asterisk[i], scope);
      }
    }
  } // key 不在 _handlers 中返回


  if (!(key in _handlers)) return;

  for (var _i = 0; _i < _handlers[key].length; _i++) {
    if (event.type === 'keydown' && _handlers[key][_i].keydown || event.type === 'keyup' && _handlers[key][_i].keyup) {
      if (_handlers[key][_i].key) {
        var record = _handlers[key][_i];
        var splitKey = record.splitKey;
        var keyShortcut = record.key.split(splitKey);
        var _downKeysCurrent = []; // 记录当前按键键值

        for (var a = 0; a < keyShortcut.length; a++) {
          _downKeysCurrent.push(code(keyShortcut[a]));
        }

        if (_downKeysCurrent.sort().join('') === _downKeys.sort().join('')) {
          // 找到处理内容
          eventHandler(event, record, scope);
        }
      }
    }
  }
} // 判断 element 是否已经绑定事件


function isElementBind(element) {
  return elementHasBindEvent.indexOf(element) > -1;
}

function hotkeys(key, option, method) {
  _downKeys = [];
  var keys = getKeys(key); // 需要处理的快捷键列表

  var mods = [];
  var scope = 'all'; // scope默认为all，所有范围都有效

  var element = document; // 快捷键事件绑定节点

  var i = 0;
  var keyup = false;
  var keydown = true;
  var splitKey = '+'; // 对为设定范围的判断

  if (method === undefined && typeof option === 'function') {
    method = option;
  }

  if (Object.prototype.toString.call(option) === '[object Object]') {
    if (option.scope) scope = option.scope; // eslint-disable-line

    if (option.element) element = option.element; // eslint-disable-line

    if (option.keyup) keyup = option.keyup; // eslint-disable-line

    if (option.keydown !== undefined) keydown = option.keydown; // eslint-disable-line

    if (typeof option.splitKey === 'string') splitKey = option.splitKey; // eslint-disable-line
  }

  if (typeof option === 'string') scope = option; // 对于每个快捷键进行处理

  for (; i < keys.length; i++) {
    key = keys[i].split(splitKey); // 按键列表

    mods = []; // 如果是组合快捷键取得组合快捷键

    if (key.length > 1) mods = getMods(_modifier, key); // 将非修饰键转化为键码

    key = key[key.length - 1];
    key = key === '*' ? '*' : code(key); // *表示匹配所有快捷键
    // 判断key是否在_handlers中，不在就赋一个空数组

    if (!(key in _handlers)) _handlers[key] = [];

    _handlers[key].push({
      keyup: keyup,
      keydown: keydown,
      scope: scope,
      mods: mods,
      shortcut: keys[i],
      method: method,
      key: keys[i],
      splitKey: splitKey
    });
  } // 在全局document上设置快捷键


  if (typeof element !== 'undefined' && !isElementBind(element) && window) {
    elementHasBindEvent.push(element);
    addEvent(element, 'keydown', function (e) {
      dispatch(e);
    });
    addEvent(window, 'focus', function () {
      _downKeys = [];
    });
    addEvent(element, 'keyup', function (e) {
      dispatch(e);
      clearModifier(e);
    });
  }
}

var _api = {
  setScope: setScope,
  getScope: getScope,
  deleteScope: deleteScope,
  getPressedKeyCodes: getPressedKeyCodes,
  isPressed: isPressed,
  filter: filter,
  unbind: unbind
};

for (var a in _api) {
  if (Object.prototype.hasOwnProperty.call(_api, a)) {
    hotkeys[a] = _api[a];
  }
}

if (typeof window !== 'undefined') {
  var _hotkeys = window.hotkeys;

  hotkeys.noConflict = function (deep) {
    if (deep && window.hotkeys === hotkeys) {
      window.hotkeys = _hotkeys;
    }

    return hotkeys;
  };

  window.hotkeys = hotkeys;
}

/* harmony default export */ var hotkeys_esm = (hotkeys);

// CONCATENATED MODULE: ./src/Bar/imports/bar-hotkey-manager.js





hotkeys_esm.filter = function () {
  return true;
}; // allow hotkeys from every element


/* harmony default export */ var bar_hotkey_manager = __webpack_exports__["a"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isMacLike: function isMacLike() {
      return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    },
    hotkey: function hotkey() {
      var s = this.item.hotkey;
      if (typeof s != "string") return false;
      s = s.toUpperCase();
      s = s.replace(/(shift|⇧)\+/ig, this.isMacLike ? "⇧" : "Shift+");
      s = s.replace(/(control|ctrl|⌃)\+/ig, this.isMacLike ? "⌃" : "Ctrl+");
      s = s.replace(/(option|alt|⌥)\+/ig, this.isMacLike ? "⌥" : "Alt+");
      s = s.replace(/(cmd|command|⌘)\+/ig, this.isMacLike ? "⌘" : "Cmd+");
      return s;
    }
  },
  methods: {
    update_hotkey: function update_hotkey(new_hotkey, old_hotkey) {
      if (old_hotkey) hotkeys_esm.unbind(old_hotkey, this.hotkey_fn);
      if (new_hotkey) hotkeys_esm(new_hotkey, this.hotkey_fn);
    },
    hotkey_fn: function hotkey_fn(event, handler) {
      event.preventDefault();
      if (this.item.click && !this.item.disabled) this.item.click(event, handler);
    }
  },
  watch: {
    "item.hotkey": {
      handler: "update_hotkey",
      immediate: true
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.item.hotkey) hotkeys_esm.unbind(this.item.hotkey, this.hotkey_fn);
  }
});

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var nativeSymbol = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = nativeSymbol ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (has(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2a0":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isArray = __webpack_require__("6747"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "eac5":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "ec69":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeys = __webpack_require__("03dd"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "edfa":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f9ea":
/***/ (function(module) {

module.exports = JSON.parse("{\"100\":\"💯\",\"1234\":\"🔢\",\"umbrella_with_rain_drops\":\"☔\",\"coffee\":\"☕\",\"aries\":\"♈\",\"taurus\":\"♉\",\"sagittarius\":\"♐\",\"capricorn\":\"♑\",\"aquarius\":\"♒\",\"pisces\":\"♓\",\"anchor\":\"⚓\",\"white_check_mark\":\"✅\",\"sparkles\":\"✨\",\"question\":\"❓\",\"grey_question\":\"❔\",\"grey_exclamation\":\"❕\",\"exclamation\":\"❗\",\"heavy_exclamation_mark\":\"❗\",\"heavy_plus_sign\":\"➕\",\"heavy_minus_sign\":\"➖\",\"heavy_division_sign\":\"➗\",\"hash\":\"#️⃣\",\"keycap_star\":\"*️⃣\",\"zero\":\"0️⃣\",\"one\":\"1️⃣\",\"two\":\"2️⃣\",\"three\":\"3️⃣\",\"four\":\"4️⃣\",\"five\":\"5️⃣\",\"six\":\"6️⃣\",\"seven\":\"7️⃣\",\"eight\":\"8️⃣\",\"nine\":\"9️⃣\",\"copyright\":\"©️\",\"registered\":\"®️\",\"mahjong\":\"🀄\",\"black_joker\":\"🃏\",\"a\":\"🅰️\",\"b\":\"🅱️\",\"o2\":\"🅾️\",\"parking\":\"🅿️\",\"ab\":\"🆎\",\"cl\":\"🆑\",\"cool\":\"🆒\",\"free\":\"🆓\",\"id\":\"🆔\",\"new\":\"🆕\",\"ng\":\"🆖\",\"ok\":\"🆗\",\"sos\":\"🆘\",\"up\":\"🆙\",\"vs\":\"🆚\",\"flag-ac\":\"🇦🇨\",\"flag-ad\":\"🇦🇩\",\"flag-ae\":\"🇦🇪\",\"flag-af\":\"🇦🇫\",\"flag-ag\":\"🇦🇬\",\"flag-ai\":\"🇦🇮\",\"flag-al\":\"🇦🇱\",\"flag-am\":\"🇦🇲\",\"flag-ao\":\"🇦🇴\",\"flag-aq\":\"🇦🇶\",\"flag-ar\":\"🇦🇷\",\"flag-as\":\"🇦🇸\",\"flag-at\":\"🇦🇹\",\"flag-au\":\"🇦🇺\",\"flag-aw\":\"🇦🇼\",\"flag-ax\":\"🇦🇽\",\"flag-az\":\"🇦🇿\",\"flag-ba\":\"🇧🇦\",\"flag-bb\":\"🇧🇧\",\"flag-bd\":\"🇧🇩\",\"flag-be\":\"🇧🇪\",\"flag-bf\":\"🇧🇫\",\"flag-bg\":\"🇧🇬\",\"flag-bh\":\"🇧🇭\",\"flag-bi\":\"🇧🇮\",\"flag-bj\":\"🇧🇯\",\"flag-bl\":\"🇧🇱\",\"flag-bm\":\"🇧🇲\",\"flag-bn\":\"🇧🇳\",\"flag-bo\":\"🇧🇴\",\"flag-bq\":\"🇧🇶\",\"flag-br\":\"🇧🇷\",\"flag-bs\":\"🇧🇸\",\"flag-bt\":\"🇧🇹\",\"flag-bv\":\"🇧🇻\",\"flag-bw\":\"🇧🇼\",\"flag-by\":\"🇧🇾\",\"flag-bz\":\"🇧🇿\",\"flag-ca\":\"🇨🇦\",\"flag-cc\":\"🇨🇨\",\"flag-cd\":\"🇨🇩\",\"flag-cf\":\"🇨🇫\",\"flag-cg\":\"🇨🇬\",\"flag-ch\":\"🇨🇭\",\"flag-ci\":\"🇨🇮\",\"flag-ck\":\"🇨🇰\",\"flag-cl\":\"🇨🇱\",\"flag-cm\":\"🇨🇲\",\"cn\":\"🇨🇳\",\"flag-cn\":\"🇨🇳\",\"flag-co\":\"🇨🇴\",\"flag-cp\":\"🇨🇵\",\"flag-cr\":\"🇨🇷\",\"flag-cu\":\"🇨🇺\",\"flag-cv\":\"🇨🇻\",\"flag-cw\":\"🇨🇼\",\"flag-cx\":\"🇨🇽\",\"flag-cy\":\"🇨🇾\",\"flag-cz\":\"🇨🇿\",\"de\":\"🇩🇪\",\"flag-de\":\"🇩🇪\",\"flag-dg\":\"🇩🇬\",\"flag-dj\":\"🇩🇯\",\"flag-dk\":\"🇩🇰\",\"flag-dm\":\"🇩🇲\",\"flag-do\":\"🇩🇴\",\"flag-dz\":\"🇩🇿\",\"flag-ea\":\"🇪🇦\",\"flag-ec\":\"🇪🇨\",\"flag-ee\":\"🇪🇪\",\"flag-eg\":\"🇪🇬\",\"flag-eh\":\"🇪🇭\",\"flag-er\":\"🇪🇷\",\"es\":\"🇪🇸\",\"flag-es\":\"🇪🇸\",\"flag-et\":\"🇪🇹\",\"flag-eu\":\"🇪🇺\",\"flag-fi\":\"🇫🇮\",\"flag-fj\":\"🇫🇯\",\"flag-fk\":\"🇫🇰\",\"flag-fm\":\"🇫🇲\",\"flag-fo\":\"🇫🇴\",\"fr\":\"🇫🇷\",\"flag-fr\":\"🇫🇷\",\"flag-ga\":\"🇬🇦\",\"gb\":\"🇬🇧\",\"uk\":\"🇬🇧\",\"flag-gb\":\"🇬🇧\",\"flag-gd\":\"🇬🇩\",\"flag-ge\":\"🇬🇪\",\"flag-gf\":\"🇬🇫\",\"flag-gg\":\"🇬🇬\",\"flag-gh\":\"🇬🇭\",\"flag-gi\":\"🇬🇮\",\"flag-gl\":\"🇬🇱\",\"flag-gm\":\"🇬🇲\",\"flag-gn\":\"🇬🇳\",\"flag-gp\":\"🇬🇵\",\"flag-gq\":\"🇬🇶\",\"flag-gr\":\"🇬🇷\",\"flag-gs\":\"🇬🇸\",\"flag-gt\":\"🇬🇹\",\"flag-gu\":\"🇬🇺\",\"flag-gw\":\"🇬🇼\",\"flag-gy\":\"🇬🇾\",\"flag-hk\":\"🇭🇰\",\"flag-hm\":\"🇭🇲\",\"flag-hn\":\"🇭🇳\",\"flag-hr\":\"🇭🇷\",\"flag-ht\":\"🇭🇹\",\"flag-hu\":\"🇭🇺\",\"flag-ic\":\"🇮🇨\",\"flag-id\":\"🇮🇩\",\"flag-ie\":\"🇮🇪\",\"flag-il\":\"🇮🇱\",\"flag-im\":\"🇮🇲\",\"flag-in\":\"🇮🇳\",\"flag-io\":\"🇮🇴\",\"flag-iq\":\"🇮🇶\",\"flag-ir\":\"🇮🇷\",\"flag-is\":\"🇮🇸\",\"it\":\"🇮🇹\",\"flag-it\":\"🇮🇹\",\"flag-je\":\"🇯🇪\",\"flag-jm\":\"🇯🇲\",\"flag-jo\":\"🇯🇴\",\"jp\":\"🇯🇵\",\"flag-jp\":\"🇯🇵\",\"flag-ke\":\"🇰🇪\",\"flag-kg\":\"🇰🇬\",\"flag-kh\":\"🇰🇭\",\"flag-ki\":\"🇰🇮\",\"flag-km\":\"🇰🇲\",\"flag-kn\":\"🇰🇳\",\"flag-kp\":\"🇰🇵\",\"kr\":\"🇰🇷\",\"flag-kr\":\"🇰🇷\",\"flag-kw\":\"🇰🇼\",\"flag-ky\":\"🇰🇾\",\"flag-kz\":\"🇰🇿\",\"flag-la\":\"🇱🇦\",\"flag-lb\":\"🇱🇧\",\"flag-lc\":\"🇱🇨\",\"flag-li\":\"🇱🇮\",\"flag-lk\":\"🇱🇰\",\"flag-lr\":\"🇱🇷\",\"flag-ls\":\"🇱🇸\",\"flag-lt\":\"🇱🇹\",\"flag-lu\":\"🇱🇺\",\"flag-lv\":\"🇱🇻\",\"flag-ly\":\"🇱🇾\",\"flag-ma\":\"🇲🇦\",\"flag-mc\":\"🇲🇨\",\"flag-md\":\"🇲🇩\",\"flag-me\":\"🇲🇪\",\"flag-mf\":\"🇲🇫\",\"flag-mg\":\"🇲🇬\",\"flag-mh\":\"🇲🇭\",\"flag-mk\":\"🇲🇰\",\"flag-ml\":\"🇲🇱\",\"flag-mm\":\"🇲🇲\",\"flag-mn\":\"🇲🇳\",\"flag-mo\":\"🇲🇴\",\"flag-mp\":\"🇲🇵\",\"flag-mq\":\"🇲🇶\",\"flag-mr\":\"🇲🇷\",\"flag-ms\":\"🇲🇸\",\"flag-mt\":\"🇲🇹\",\"flag-mu\":\"🇲🇺\",\"flag-mv\":\"🇲🇻\",\"flag-mw\":\"🇲🇼\",\"flag-mx\":\"🇲🇽\",\"flag-my\":\"🇲🇾\",\"flag-mz\":\"🇲🇿\",\"flag-na\":\"🇳🇦\",\"flag-nc\":\"🇳🇨\",\"flag-ne\":\"🇳🇪\",\"flag-nf\":\"🇳🇫\",\"flag-ng\":\"🇳🇬\",\"flag-ni\":\"🇳🇮\",\"flag-nl\":\"🇳🇱\",\"flag-no\":\"🇳🇴\",\"flag-np\":\"🇳🇵\",\"flag-nr\":\"🇳🇷\",\"flag-nu\":\"🇳🇺\",\"flag-nz\":\"🇳🇿\",\"flag-om\":\"🇴🇲\",\"flag-pa\":\"🇵🇦\",\"flag-pe\":\"🇵🇪\",\"flag-pf\":\"🇵🇫\",\"flag-pg\":\"🇵🇬\",\"flag-ph\":\"🇵🇭\",\"flag-pk\":\"🇵🇰\",\"flag-pl\":\"🇵🇱\",\"flag-pm\":\"🇵🇲\",\"flag-pn\":\"🇵🇳\",\"flag-pr\":\"🇵🇷\",\"flag-ps\":\"🇵🇸\",\"flag-pt\":\"🇵🇹\",\"flag-pw\":\"🇵🇼\",\"flag-py\":\"🇵🇾\",\"flag-qa\":\"🇶🇦\",\"flag-re\":\"🇷🇪\",\"flag-ro\":\"🇷🇴\",\"flag-rs\":\"🇷🇸\",\"ru\":\"🇷🇺\",\"flag-ru\":\"🇷🇺\",\"flag-rw\":\"🇷🇼\",\"flag-sa\":\"🇸🇦\",\"flag-sb\":\"🇸🇧\",\"flag-sc\":\"🇸🇨\",\"flag-sd\":\"🇸🇩\",\"flag-se\":\"🇸🇪\",\"flag-sg\":\"🇸🇬\",\"flag-sh\":\"🇸🇭\",\"flag-si\":\"🇸🇮\",\"flag-sj\":\"🇸🇯\",\"flag-sk\":\"🇸🇰\",\"flag-sl\":\"🇸🇱\",\"flag-sm\":\"🇸🇲\",\"flag-sn\":\"🇸🇳\",\"flag-so\":\"🇸🇴\",\"flag-sr\":\"🇸🇷\",\"flag-ss\":\"🇸🇸\",\"flag-st\":\"🇸🇹\",\"flag-sv\":\"🇸🇻\",\"flag-sx\":\"🇸🇽\",\"flag-sy\":\"🇸🇾\",\"flag-sz\":\"🇸🇿\",\"flag-ta\":\"🇹🇦\",\"flag-tc\":\"🇹🇨\",\"flag-td\":\"🇹🇩\",\"flag-tf\":\"🇹🇫\",\"flag-tg\":\"🇹🇬\",\"flag-th\":\"🇹🇭\",\"flag-tj\":\"🇹🇯\",\"flag-tk\":\"🇹🇰\",\"flag-tl\":\"🇹🇱\",\"flag-tm\":\"🇹🇲\",\"flag-tn\":\"🇹🇳\",\"flag-to\":\"🇹🇴\",\"flag-tr\":\"🇹🇷\",\"flag-tt\":\"🇹🇹\",\"flag-tv\":\"🇹🇻\",\"flag-tw\":\"🇹🇼\",\"flag-tz\":\"🇹🇿\",\"flag-ua\":\"🇺🇦\",\"flag-ug\":\"🇺🇬\",\"flag-um\":\"🇺🇲\",\"flag-un\":\"🇺🇳\",\"us\":\"🇺🇸\",\"flag-us\":\"🇺🇸\",\"flag-uy\":\"🇺🇾\",\"flag-uz\":\"🇺🇿\",\"flag-va\":\"🇻🇦\",\"flag-vc\":\"🇻🇨\",\"flag-ve\":\"🇻🇪\",\"flag-vg\":\"🇻🇬\",\"flag-vi\":\"🇻🇮\",\"flag-vn\":\"🇻🇳\",\"flag-vu\":\"🇻🇺\",\"flag-wf\":\"🇼🇫\",\"flag-ws\":\"🇼🇸\",\"flag-xk\":\"🇽🇰\",\"flag-ye\":\"🇾🇪\",\"flag-yt\":\"🇾🇹\",\"flag-za\":\"🇿🇦\",\"flag-zm\":\"🇿🇲\",\"flag-zw\":\"🇿🇼\",\"koko\":\"🈁\",\"sa\":\"🈂️\",\"u7121\":\"🈚\",\"u6307\":\"🈯\",\"u7981\":\"🈲\",\"u7a7a\":\"🈳\",\"u5408\":\"🈴\",\"u6e80\":\"🈵\",\"u6709\":\"🈶\",\"u6708\":\"🈷️\",\"u7533\":\"🈸\",\"u5272\":\"🈹\",\"u55b6\":\"🈺\",\"ideograph_advantage\":\"🉐\",\"accept\":\"🉑\",\"cyclone\":\"🌀\",\"foggy\":\"🌁\",\"closed_umbrella\":\"🌂\",\"night_with_stars\":\"🌃\",\"sunrise_over_mountains\":\"🌄\",\"sunrise\":\"🌅\",\"city_sunset\":\"🌆\",\"city_sunrise\":\"🌇\",\"rainbow\":\"🌈\",\"bridge_at_night\":\"🌉\",\"ocean\":\"🌊\",\"volcano\":\"🌋\",\"milky_way\":\"🌌\",\"earth_africa\":\"🌍\",\"earth_americas\":\"🌎\",\"earth_asia\":\"🌏\",\"globe_with_meridians\":\"🌐\",\"new_moon\":\"🌑\",\"waxing_crescent_moon\":\"🌒\",\"first_quarter_moon\":\"🌓\",\"moon\":\"🌔\",\"waxing_gibbous_moon\":\"🌔\",\"full_moon\":\"🌕\",\"waning_gibbous_moon\":\"🌖\",\"last_quarter_moon\":\"🌗\",\"waning_crescent_moon\":\"🌘\",\"crescent_moon\":\"🌙\",\"new_moon_with_face\":\"🌚\",\"first_quarter_moon_with_face\":\"🌛\",\"last_quarter_moon_with_face\":\"🌜\",\"full_moon_with_face\":\"🌝\",\"sun_with_face\":\"🌞\",\"star2\":\"🌟\",\"stars\":\"🌠\",\"thermometer\":\"🌡️\",\"mostly_sunny\":\"🌤️\",\"sun_small_cloud\":\"🌤️\",\"barely_sunny\":\"🌥️\",\"sun_behind_cloud\":\"🌥️\",\"partly_sunny_rain\":\"🌦️\",\"sun_behind_rain_cloud\":\"🌦️\",\"rain_cloud\":\"🌧️\",\"snow_cloud\":\"🌨️\",\"lightning\":\"🌩️\",\"lightning_cloud\":\"🌩️\",\"tornado\":\"🌪️\",\"tornado_cloud\":\"🌪️\",\"fog\":\"🌫️\",\"wind_blowing_face\":\"🌬️\",\"hotdog\":\"🌭\",\"taco\":\"🌮\",\"burrito\":\"🌯\",\"chestnut\":\"🌰\",\"seedling\":\"🌱\",\"evergreen_tree\":\"🌲\",\"deciduous_tree\":\"🌳\",\"palm_tree\":\"🌴\",\"cactus\":\"🌵\",\"hot_pepper\":\"🌶️\",\"tulip\":\"🌷\",\"cherry_blossom\":\"🌸\",\"rose\":\"🌹\",\"hibiscus\":\"🌺\",\"sunflower\":\"🌻\",\"blossom\":\"🌼\",\"corn\":\"🌽\",\"ear_of_rice\":\"🌾\",\"herb\":\"🌿\",\"four_leaf_clover\":\"🍀\",\"maple_leaf\":\"🍁\",\"fallen_leaf\":\"🍂\",\"leaves\":\"🍃\",\"mushroom\":\"🍄\",\"tomato\":\"🍅\",\"eggplant\":\"🍆\",\"grapes\":\"🍇\",\"melon\":\"🍈\",\"watermelon\":\"🍉\",\"tangerine\":\"🍊\",\"lemon\":\"🍋\",\"banana\":\"🍌\",\"pineapple\":\"🍍\",\"apple\":\"🍎\",\"green_apple\":\"🍏\",\"pear\":\"🍐\",\"peach\":\"🍑\",\"cherries\":\"🍒\",\"strawberry\":\"🍓\",\"hamburger\":\"🍔\",\"pizza\":\"🍕\",\"meat_on_bone\":\"🍖\",\"poultry_leg\":\"🍗\",\"rice_cracker\":\"🍘\",\"rice_ball\":\"🍙\",\"rice\":\"🍚\",\"curry\":\"🍛\",\"ramen\":\"🍜\",\"spaghetti\":\"🍝\",\"bread\":\"🍞\",\"fries\":\"🍟\",\"sweet_potato\":\"🍠\",\"dango\":\"🍡\",\"oden\":\"🍢\",\"sushi\":\"🍣\",\"fried_shrimp\":\"🍤\",\"fish_cake\":\"🍥\",\"icecream\":\"🍦\",\"shaved_ice\":\"🍧\",\"ice_cream\":\"🍨\",\"doughnut\":\"🍩\",\"cookie\":\"🍪\",\"chocolate_bar\":\"🍫\",\"candy\":\"🍬\",\"lollipop\":\"🍭\",\"custard\":\"🍮\",\"honey_pot\":\"🍯\",\"cake\":\"🍰\",\"bento\":\"🍱\",\"stew\":\"🍲\",\"fried_egg\":\"🍳\",\"cooking\":\"🍳\",\"fork_and_knife\":\"🍴\",\"tea\":\"🍵\",\"sake\":\"🍶\",\"wine_glass\":\"🍷\",\"cocktail\":\"🍸\",\"tropical_drink\":\"🍹\",\"beer\":\"🍺\",\"beers\":\"🍻\",\"baby_bottle\":\"🍼\",\"knife_fork_plate\":\"🍽️\",\"champagne\":\"🍾\",\"popcorn\":\"🍿\",\"ribbon\":\"🎀\",\"gift\":\"🎁\",\"birthday\":\"🎂\",\"jack_o_lantern\":\"🎃\",\"christmas_tree\":\"🎄\",\"santa\":\"🎅\",\"fireworks\":\"🎆\",\"sparkler\":\"🎇\",\"balloon\":\"🎈\",\"tada\":\"🎉\",\"confetti_ball\":\"🎊\",\"tanabata_tree\":\"🎋\",\"crossed_flags\":\"🎌\",\"bamboo\":\"🎍\",\"dolls\":\"🎎\",\"flags\":\"🎏\",\"wind_chime\":\"🎐\",\"rice_scene\":\"🎑\",\"school_satchel\":\"🎒\",\"mortar_board\":\"🎓\",\"medal\":\"🎖️\",\"reminder_ribbon\":\"🎗️\",\"studio_microphone\":\"🎙️\",\"level_slider\":\"🎚️\",\"control_knobs\":\"🎛️\",\"film_frames\":\"🎞️\",\"admission_tickets\":\"🎟️\",\"carousel_horse\":\"🎠\",\"ferris_wheel\":\"🎡\",\"roller_coaster\":\"🎢\",\"fishing_pole_and_fish\":\"🎣\",\"microphone\":\"🎤\",\"movie_camera\":\"🎥\",\"cinema\":\"🎦\",\"headphones\":\"🎧\",\"art\":\"🎨\",\"tophat\":\"🎩\",\"circus_tent\":\"🎪\",\"ticket\":\"🎫\",\"clapper\":\"🎬\",\"performing_arts\":\"🎭\",\"video_game\":\"🎮\",\"dart\":\"🎯\",\"slot_machine\":\"🎰\",\"8ball\":\"🎱\",\"game_die\":\"🎲\",\"bowling\":\"🎳\",\"flower_playing_cards\":\"🎴\",\"musical_note\":\"🎵\",\"notes\":\"🎶\",\"saxophone\":\"🎷\",\"guitar\":\"🎸\",\"musical_keyboard\":\"🎹\",\"trumpet\":\"🎺\",\"violin\":\"🎻\",\"musical_score\":\"🎼\",\"running_shirt_with_sash\":\"🎽\",\"tennis\":\"🎾\",\"ski\":\"🎿\",\"basketball\":\"🏀\",\"checkered_flag\":\"🏁\",\"snowboarder\":\"🏂\",\"woman-running\":\"🏃‍♀️\",\"man-running\":\"🏃‍♂️\",\"runner\":\"🏃‍♂️\",\"running\":\"🏃‍♂️\",\"woman-surfing\":\"🏄‍♀️\",\"man-surfing\":\"🏄‍♂️\",\"surfer\":\"🏄‍♂️\",\"sports_medal\":\"🏅\",\"trophy\":\"🏆\",\"horse_racing\":\"🏇\",\"football\":\"🏈\",\"rugby_football\":\"🏉\",\"woman-swimming\":\"🏊‍♀️\",\"man-swimming\":\"🏊‍♂️\",\"swimmer\":\"🏊‍♂️\",\"woman-lifting-weights\":\"🏋️‍♀️\",\"man-lifting-weights\":\"🏋️‍♂️\",\"weight_lifter\":\"🏋️‍♂️\",\"woman-golfing\":\"🏌️‍♀️\",\"man-golfing\":\"🏌️‍♂️\",\"golfer\":\"🏌️‍♂️\",\"racing_motorcycle\":\"🏍️\",\"racing_car\":\"🏎️\",\"cricket_bat_and_ball\":\"🏏\",\"volleyball\":\"🏐\",\"field_hockey_stick_and_ball\":\"🏑\",\"ice_hockey_stick_and_puck\":\"🏒\",\"table_tennis_paddle_and_ball\":\"🏓\",\"snow_capped_mountain\":\"🏔️\",\"camping\":\"🏕️\",\"beach_with_umbrella\":\"🏖️\",\"building_construction\":\"🏗️\",\"house_buildings\":\"🏘️\",\"cityscape\":\"🏙️\",\"derelict_house_building\":\"🏚️\",\"classical_building\":\"🏛️\",\"desert\":\"🏜️\",\"desert_island\":\"🏝️\",\"national_park\":\"🏞️\",\"stadium\":\"🏟️\",\"house\":\"🏠\",\"house_with_garden\":\"🏡\",\"office\":\"🏢\",\"post_office\":\"🏣\",\"european_post_office\":\"🏤\",\"hospital\":\"🏥\",\"bank\":\"🏦\",\"atm\":\"🏧\",\"hotel\":\"🏨\",\"love_hotel\":\"🏩\",\"convenience_store\":\"🏪\",\"school\":\"🏫\",\"department_store\":\"🏬\",\"factory\":\"🏭\",\"izakaya_lantern\":\"🏮\",\"lantern\":\"🏮\",\"japanese_castle\":\"🏯\",\"european_castle\":\"🏰\",\"rainbow-flag\":\"🏳️‍🌈\",\"transgender_flag\":\"🏳️‍⚧️\",\"waving_white_flag\":\"🏳️\",\"pirate_flag\":\"🏴‍☠️\",\"flag-england\":\"🏴󠁧󠁢󠁥󠁮󠁧󠁿\",\"flag-scotland\":\"🏴󠁧󠁢󠁳󠁣󠁴󠁿\",\"flag-wales\":\"🏴󠁧󠁢󠁷󠁬󠁳󠁿\",\"waving_black_flag\":\"🏴\",\"rosette\":\"🏵️\",\"label\":\"🏷️\",\"badminton_racquet_and_shuttlecock\":\"🏸\",\"bow_and_arrow\":\"🏹\",\"amphora\":\"🏺\",\"skin-tone-2\":\"🏻\",\"skin-tone-3\":\"🏼\",\"skin-tone-4\":\"🏽\",\"skin-tone-5\":\"🏾\",\"skin-tone-6\":\"🏿\",\"rat\":\"🐀\",\"mouse2\":\"🐁\",\"ox\":\"🐂\",\"water_buffalo\":\"🐃\",\"cow2\":\"🐄\",\"tiger2\":\"🐅\",\"leopard\":\"🐆\",\"rabbit2\":\"🐇\",\"black_cat\":\"🐈‍⬛\",\"cat2\":\"🐈\",\"dragon\":\"🐉\",\"crocodile\":\"🐊\",\"whale2\":\"🐋\",\"snail\":\"🐌\",\"snake\":\"🐍\",\"racehorse\":\"🐎\",\"ram\":\"🐏\",\"goat\":\"🐐\",\"sheep\":\"🐑\",\"monkey\":\"🐒\",\"rooster\":\"🐓\",\"chicken\":\"🐔\",\"service_dog\":\"🐕‍🦺\",\"dog2\":\"🐕\",\"pig2\":\"🐖\",\"boar\":\"🐗\",\"elephant\":\"🐘\",\"octopus\":\"🐙\",\"shell\":\"🐚\",\"bug\":\"🐛\",\"ant\":\"🐜\",\"bee\":\"🐝\",\"honeybee\":\"🐝\",\"ladybug\":\"🐞\",\"lady_beetle\":\"🐞\",\"fish\":\"🐟\",\"tropical_fish\":\"🐠\",\"blowfish\":\"🐡\",\"turtle\":\"🐢\",\"hatching_chick\":\"🐣\",\"baby_chick\":\"🐤\",\"hatched_chick\":\"🐥\",\"bird\":\"🐦\",\"penguin\":\"🐧\",\"koala\":\"🐨\",\"poodle\":\"🐩\",\"dromedary_camel\":\"🐪\",\"camel\":\"🐫\",\"dolphin\":\"🐬\",\"flipper\":\"🐬\",\"mouse\":\"🐭\",\"cow\":\"🐮\",\"tiger\":\"🐯\",\"rabbit\":\"🐰\",\"cat\":\"🐱\",\"dragon_face\":\"🐲\",\"whale\":\"🐳\",\"horse\":\"🐴\",\"monkey_face\":\"🐵\",\"dog\":\"🐶\",\"pig\":\"🐷\",\"frog\":\"🐸\",\"hamster\":\"🐹\",\"wolf\":\"🐺\",\"polar_bear\":\"🐻‍❄️\",\"bear\":\"🐻\",\"panda_face\":\"🐼\",\"pig_nose\":\"🐽\",\"feet\":\"🐾\",\"paw_prints\":\"🐾\",\"chipmunk\":\"🐿️\",\"eyes\":\"👀\",\"eye-in-speech-bubble\":\"👁️‍🗨️\",\"eye\":\"👁️\",\"ear\":\"👂\",\"nose\":\"👃\",\"lips\":\"👄\",\"tongue\":\"👅\",\"point_up_2\":\"👆\",\"point_down\":\"👇\",\"point_left\":\"👈\",\"point_right\":\"👉\",\"facepunch\":\"👊\",\"punch\":\"👊\",\"wave\":\"👋\",\"ok_hand\":\"👌\",\"+1\":\"👍\",\"thumbsup\":\"👍\",\"-1\":\"👎\",\"thumbsdown\":\"👎\",\"clap\":\"👏\",\"open_hands\":\"👐\",\"crown\":\"👑\",\"womans_hat\":\"👒\",\"eyeglasses\":\"👓\",\"necktie\":\"👔\",\"shirt\":\"👕\",\"tshirt\":\"👕\",\"jeans\":\"👖\",\"dress\":\"👗\",\"kimono\":\"👘\",\"bikini\":\"👙\",\"womans_clothes\":\"👚\",\"purse\":\"👛\",\"handbag\":\"👜\",\"pouch\":\"👝\",\"mans_shoe\":\"👞\",\"shoe\":\"👞\",\"athletic_shoe\":\"👟\",\"high_heel\":\"👠\",\"sandal\":\"👡\",\"boot\":\"👢\",\"footprints\":\"👣\",\"bust_in_silhouette\":\"👤\",\"busts_in_silhouette\":\"👥\",\"boy\":\"👦\",\"girl\":\"👧\",\"male-farmer\":\"👨‍🌾\",\"male-cook\":\"👨‍🍳\",\"man_feeding_baby\":\"👨‍🍼\",\"male-student\":\"👨‍🎓\",\"male-singer\":\"👨‍🎤\",\"male-artist\":\"👨‍🎨\",\"male-teacher\":\"👨‍🏫\",\"male-factory-worker\":\"👨‍🏭\",\"man-boy-boy\":\"👨‍👦‍👦\",\"man-boy\":\"👨‍👦\",\"man-girl-boy\":\"👨‍👧‍👦\",\"man-girl-girl\":\"👨‍👧‍👧\",\"man-girl\":\"👨‍👧\",\"man-man-boy\":\"👨‍👨‍👦\",\"man-man-boy-boy\":\"👨‍👨‍👦‍👦\",\"man-man-girl\":\"👨‍👨‍👧\",\"man-man-girl-boy\":\"👨‍👨‍👧‍👦\",\"man-man-girl-girl\":\"👨‍👨‍👧‍👧\",\"man-woman-boy\":\"👨‍👩‍👦\",\"family\":\"👨‍👩‍👦\",\"man-woman-boy-boy\":\"👨‍👩‍👦‍👦\",\"man-woman-girl\":\"👨‍👩‍👧\",\"man-woman-girl-boy\":\"👨‍👩‍👧‍👦\",\"man-woman-girl-girl\":\"👨‍👩‍👧‍👧\",\"male-technologist\":\"👨‍💻\",\"male-office-worker\":\"👨‍💼\",\"male-mechanic\":\"👨‍🔧\",\"male-scientist\":\"👨‍🔬\",\"male-astronaut\":\"👨‍🚀\",\"male-firefighter\":\"👨‍🚒\",\"man_with_probing_cane\":\"👨‍🦯\",\"red_haired_man\":\"👨‍🦰\",\"curly_haired_man\":\"👨‍🦱\",\"bald_man\":\"👨‍🦲\",\"white_haired_man\":\"👨‍🦳\",\"man_in_motorized_wheelchair\":\"👨‍🦼\",\"man_in_manual_wheelchair\":\"👨‍🦽\",\"male-doctor\":\"👨‍⚕️\",\"male-judge\":\"👨‍⚖️\",\"male-pilot\":\"👨‍✈️\",\"man-heart-man\":\"👨‍❤️‍👨\",\"man-kiss-man\":\"👨‍❤️‍💋‍👨\",\"man\":\"👨\",\"female-farmer\":\"👩‍🌾\",\"female-cook\":\"👩‍🍳\",\"woman_feeding_baby\":\"👩‍🍼\",\"female-student\":\"👩‍🎓\",\"female-singer\":\"👩‍🎤\",\"female-artist\":\"👩‍🎨\",\"female-teacher\":\"👩‍🏫\",\"female-factory-worker\":\"👩‍🏭\",\"woman-boy-boy\":\"👩‍👦‍👦\",\"woman-boy\":\"👩‍👦\",\"woman-girl-boy\":\"👩‍👧‍👦\",\"woman-girl-girl\":\"👩‍👧‍👧\",\"woman-girl\":\"👩‍👧\",\"woman-woman-boy\":\"👩‍👩‍👦\",\"woman-woman-boy-boy\":\"👩‍👩‍👦‍👦\",\"woman-woman-girl\":\"👩‍👩‍👧\",\"woman-woman-girl-boy\":\"👩‍👩‍👧‍👦\",\"woman-woman-girl-girl\":\"👩‍👩‍👧‍👧\",\"female-technologist\":\"👩‍💻\",\"female-office-worker\":\"👩‍💼\",\"female-mechanic\":\"👩‍🔧\",\"female-scientist\":\"👩‍🔬\",\"female-astronaut\":\"👩‍🚀\",\"female-firefighter\":\"👩‍🚒\",\"woman_with_probing_cane\":\"👩‍🦯\",\"red_haired_woman\":\"👩‍🦰\",\"curly_haired_woman\":\"👩‍🦱\",\"bald_woman\":\"👩‍🦲\",\"white_haired_woman\":\"👩‍🦳\",\"woman_in_motorized_wheelchair\":\"👩‍🦼\",\"woman_in_manual_wheelchair\":\"👩‍🦽\",\"female-doctor\":\"👩‍⚕️\",\"female-judge\":\"👩‍⚖️\",\"female-pilot\":\"👩‍✈️\",\"woman-heart-man\":\"👩‍❤️‍👨\",\"woman-heart-woman\":\"👩‍❤️‍👩\",\"woman-kiss-man\":\"👩‍❤️‍💋‍👨\",\"woman-kiss-woman\":\"👩‍❤️‍💋‍👩\",\"woman\":\"👩\",\"man_and_woman_holding_hands\":\"👫\",\"woman_and_man_holding_hands\":\"👫\",\"couple\":\"👫\",\"two_men_holding_hands\":\"👬\",\"men_holding_hands\":\"👬\",\"two_women_holding_hands\":\"👭\",\"women_holding_hands\":\"👭\",\"female-police-officer\":\"👮‍♀️\",\"male-police-officer\":\"👮‍♂️\",\"cop\":\"👮‍♂️\",\"women-with-bunny-ears-partying\":\"👯‍♀️\",\"woman-with-bunny-ears-partying\":\"👯‍♀️\",\"dancers\":\"👯‍♀️\",\"men-with-bunny-ears-partying\":\"👯‍♂️\",\"man-with-bunny-ears-partying\":\"👯‍♂️\",\"woman_with_veil\":\"👰‍♀️\",\"man_with_veil\":\"👰‍♂️\",\"bride_with_veil\":\"👰\",\"blond-haired-woman\":\"👱‍♀️\",\"blond-haired-man\":\"👱‍♂️\",\"person_with_blond_hair\":\"👱‍♂️\",\"man_with_gua_pi_mao\":\"👲\",\"woman-wearing-turban\":\"👳‍♀️\",\"man-wearing-turban\":\"👳‍♂️\",\"man_with_turban\":\"👳‍♂️\",\"older_man\":\"👴\",\"older_woman\":\"👵\",\"baby\":\"👶\",\"female-construction-worker\":\"👷‍♀️\",\"male-construction-worker\":\"👷‍♂️\",\"construction_worker\":\"👷‍♂️\",\"princess\":\"👸\",\"japanese_ogre\":\"👹\",\"japanese_goblin\":\"👺\",\"ghost\":\"👻\",\"angel\":\"👼\",\"alien\":\"👽\",\"space_invader\":\"👾\",\"imp\":\"👿\",\"skull\":\"💀\",\"woman-tipping-hand\":\"💁‍♀️\",\"information_desk_person\":\"💁‍♀️\",\"man-tipping-hand\":\"💁‍♂️\",\"female-guard\":\"💂‍♀️\",\"male-guard\":\"💂‍♂️\",\"guardsman\":\"💂‍♂️\",\"dancer\":\"💃\",\"lipstick\":\"💄\",\"nail_care\":\"💅\",\"woman-getting-massage\":\"💆‍♀️\",\"massage\":\"💆‍♀️\",\"man-getting-massage\":\"💆‍♂️\",\"woman-getting-haircut\":\"💇‍♀️\",\"haircut\":\"💇‍♀️\",\"man-getting-haircut\":\"💇‍♂️\",\"barber\":\"💈\",\"syringe\":\"💉\",\"pill\":\"💊\",\"kiss\":\"💋\",\"love_letter\":\"💌\",\"ring\":\"💍\",\"gem\":\"💎\",\"couplekiss\":\"💏\",\"bouquet\":\"💐\",\"couple_with_heart\":\"💑\",\"wedding\":\"💒\",\"heartbeat\":\"💓\",\"broken_heart\":\"💔\",\"two_hearts\":\"💕\",\"sparkling_heart\":\"💖\",\"heartpulse\":\"💗\",\"cupid\":\"💘\",\"blue_heart\":\"💙\",\"green_heart\":\"💚\",\"yellow_heart\":\"💛\",\"purple_heart\":\"💜\",\"gift_heart\":\"💝\",\"revolving_hearts\":\"💞\",\"heart_decoration\":\"💟\",\"diamond_shape_with_a_dot_inside\":\"💠\",\"bulb\":\"💡\",\"anger\":\"💢\",\"bomb\":\"💣\",\"zzz\":\"💤\",\"boom\":\"💥\",\"collision\":\"💥\",\"sweat_drops\":\"💦\",\"droplet\":\"💧\",\"dash\":\"💨\",\"hankey\":\"💩\",\"poop\":\"💩\",\"shit\":\"💩\",\"muscle\":\"💪\",\"dizzy\":\"💫\",\"speech_balloon\":\"💬\",\"thought_balloon\":\"💭\",\"white_flower\":\"💮\",\"moneybag\":\"💰\",\"currency_exchange\":\"💱\",\"heavy_dollar_sign\":\"💲\",\"credit_card\":\"💳\",\"yen\":\"💴\",\"dollar\":\"💵\",\"euro\":\"💶\",\"pound\":\"💷\",\"money_with_wings\":\"💸\",\"chart\":\"💹\",\"seat\":\"💺\",\"computer\":\"💻\",\"briefcase\":\"💼\",\"minidisc\":\"💽\",\"floppy_disk\":\"💾\",\"cd\":\"💿\",\"dvd\":\"📀\",\"file_folder\":\"📁\",\"open_file_folder\":\"📂\",\"page_with_curl\":\"📃\",\"page_facing_up\":\"📄\",\"date\":\"📅\",\"calendar\":\"📆\",\"card_index\":\"📇\",\"chart_with_upwards_trend\":\"📈\",\"chart_with_downwards_trend\":\"📉\",\"bar_chart\":\"📊\",\"clipboard\":\"📋\",\"pushpin\":\"📌\",\"round_pushpin\":\"📍\",\"paperclip\":\"📎\",\"straight_ruler\":\"📏\",\"triangular_ruler\":\"📐\",\"bookmark_tabs\":\"📑\",\"ledger\":\"📒\",\"notebook\":\"📓\",\"notebook_with_decorative_cover\":\"📔\",\"closed_book\":\"📕\",\"book\":\"📖\",\"open_book\":\"📖\",\"green_book\":\"📗\",\"blue_book\":\"📘\",\"orange_book\":\"📙\",\"books\":\"📚\",\"name_badge\":\"📛\",\"scroll\":\"📜\",\"memo\":\"📝\",\"pencil\":\"📝\",\"telephone_receiver\":\"📞\",\"pager\":\"📟\",\"fax\":\"📠\",\"satellite_antenna\":\"📡\",\"loudspeaker\":\"📢\",\"mega\":\"📣\",\"outbox_tray\":\"📤\",\"inbox_tray\":\"📥\",\"package\":\"📦\",\"e-mail\":\"📧\",\"incoming_envelope\":\"📨\",\"envelope_with_arrow\":\"📩\",\"mailbox_closed\":\"📪\",\"mailbox\":\"📫\",\"mailbox_with_mail\":\"📬\",\"mailbox_with_no_mail\":\"📭\",\"postbox\":\"📮\",\"postal_horn\":\"📯\",\"newspaper\":\"📰\",\"iphone\":\"📱\",\"calling\":\"📲\",\"vibration_mode\":\"📳\",\"mobile_phone_off\":\"📴\",\"no_mobile_phones\":\"📵\",\"signal_strength\":\"📶\",\"camera\":\"📷\",\"camera_with_flash\":\"📸\",\"video_camera\":\"📹\",\"tv\":\"📺\",\"radio\":\"📻\",\"vhs\":\"📼\",\"film_projector\":\"📽️\",\"prayer_beads\":\"📿\",\"twisted_rightwards_arrows\":\"🔀\",\"repeat\":\"🔁\",\"repeat_one\":\"🔂\",\"arrows_clockwise\":\"🔃\",\"arrows_counterclockwise\":\"🔄\",\"low_brightness\":\"🔅\",\"high_brightness\":\"🔆\",\"mute\":\"🔇\",\"speaker\":\"🔈\",\"sound\":\"🔉\",\"loud_sound\":\"🔊\",\"battery\":\"🔋\",\"electric_plug\":\"🔌\",\"mag\":\"🔍\",\"mag_right\":\"🔎\",\"lock_with_ink_pen\":\"🔏\",\"closed_lock_with_key\":\"🔐\",\"key\":\"🔑\",\"lock\":\"🔒\",\"unlock\":\"🔓\",\"bell\":\"🔔\",\"no_bell\":\"🔕\",\"bookmark\":\"🔖\",\"link\":\"🔗\",\"radio_button\":\"🔘\",\"back\":\"🔙\",\"end\":\"🔚\",\"on\":\"🔛\",\"soon\":\"🔜\",\"top\":\"🔝\",\"underage\":\"🔞\",\"keycap_ten\":\"🔟\",\"capital_abcd\":\"🔠\",\"abcd\":\"🔡\",\"symbols\":\"🔣\",\"abc\":\"🔤\",\"fire\":\"🔥\",\"flashlight\":\"🔦\",\"wrench\":\"🔧\",\"hammer\":\"🔨\",\"nut_and_bolt\":\"🔩\",\"hocho\":\"🔪\",\"knife\":\"🔪\",\"gun\":\"🔫\",\"microscope\":\"🔬\",\"telescope\":\"🔭\",\"crystal_ball\":\"🔮\",\"six_pointed_star\":\"🔯\",\"beginner\":\"🔰\",\"trident\":\"🔱\",\"black_square_button\":\"🔲\",\"white_square_button\":\"🔳\",\"red_circle\":\"🔴\",\"large_blue_circle\":\"🔵\",\"large_orange_diamond\":\"🔶\",\"large_blue_diamond\":\"🔷\",\"small_orange_diamond\":\"🔸\",\"small_blue_diamond\":\"🔹\",\"small_red_triangle\":\"🔺\",\"small_red_triangle_down\":\"🔻\",\"arrow_up_small\":\"🔼\",\"arrow_down_small\":\"🔽\",\"om_symbol\":\"🕉️\",\"dove_of_peace\":\"🕊️\",\"kaaba\":\"🕋\",\"mosque\":\"🕌\",\"synagogue\":\"🕍\",\"menorah_with_nine_branches\":\"🕎\",\"clock1\":\"🕐\",\"clock2\":\"🕑\",\"clock3\":\"🕒\",\"clock4\":\"🕓\",\"clock5\":\"🕔\",\"clock6\":\"🕕\",\"clock7\":\"🕖\",\"clock8\":\"🕗\",\"clock9\":\"🕘\",\"clock10\":\"🕙\",\"clock11\":\"🕚\",\"clock12\":\"🕛\",\"clock130\":\"🕜\",\"clock230\":\"🕝\",\"clock330\":\"🕞\",\"clock430\":\"🕟\",\"clock530\":\"🕠\",\"clock630\":\"🕡\",\"clock730\":\"🕢\",\"clock830\":\"🕣\",\"clock930\":\"🕤\",\"clock1030\":\"🕥\",\"clock1130\":\"🕦\",\"clock1230\":\"🕧\",\"candle\":\"🕯️\",\"mantelpiece_clock\":\"🕰️\",\"hole\":\"🕳️\",\"man_in_business_suit_levitating\":\"🕴️\",\"female-detective\":\"🕵️‍♀️\",\"male-detective\":\"🕵️‍♂️\",\"sleuth_or_spy\":\"🕵️‍♂️\",\"dark_sunglasses\":\"🕶️\",\"spider\":\"🕷️\",\"spider_web\":\"🕸️\",\"joystick\":\"🕹️\",\"man_dancing\":\"🕺\",\"linked_paperclips\":\"🖇️\",\"lower_left_ballpoint_pen\":\"🖊️\",\"lower_left_fountain_pen\":\"🖋️\",\"lower_left_paintbrush\":\"🖌️\",\"lower_left_crayon\":\"🖍️\",\"raised_hand_with_fingers_splayed\":\"🖐️\",\"middle_finger\":\"🖕\",\"reversed_hand_with_middle_finger_extended\":\"🖕\",\"spock-hand\":\"🖖\",\"black_heart\":\"🖤\",\"desktop_computer\":\"🖥️\",\"printer\":\"🖨️\",\"three_button_mouse\":\"🖱️\",\"trackball\":\"🖲️\",\"frame_with_picture\":\"🖼️\",\"card_index_dividers\":\"🗂️\",\"card_file_box\":\"🗃️\",\"file_cabinet\":\"🗄️\",\"wastebasket\":\"🗑️\",\"spiral_note_pad\":\"🗒️\",\"spiral_calendar_pad\":\"🗓️\",\"compression\":\"🗜️\",\"old_key\":\"🗝️\",\"rolled_up_newspaper\":\"🗞️\",\"dagger_knife\":\"🗡️\",\"speaking_head_in_silhouette\":\"🗣️\",\"left_speech_bubble\":\"🗨️\",\"right_anger_bubble\":\"🗯️\",\"ballot_box_with_ballot\":\"🗳️\",\"world_map\":\"🗺️\",\"mount_fuji\":\"🗻\",\"tokyo_tower\":\"🗼\",\"statue_of_liberty\":\"🗽\",\"japan\":\"🗾\",\"moyai\":\"🗿\",\"grinning\":\"😀\",\"grin\":\"😁\",\"joy\":\"😂\",\"smiley\":\"😃\",\"smile\":\"😄\",\"sweat_smile\":\"😅\",\"laughing\":\"😆\",\"satisfied\":\"😆\",\"innocent\":\"😇\",\"smiling_imp\":\"😈\",\"wink\":\"😉\",\"blush\":\"😊\",\"yum\":\"😋\",\"relieved\":\"😌\",\"heart_eyes\":\"😍\",\"sunglasses\":\"😎\",\"smirk\":\"😏\",\"neutral_face\":\"😐\",\"expressionless\":\"😑\",\"unamused\":\"😒\",\"sweat\":\"😓\",\"pensive\":\"😔\",\"confused\":\"😕\",\"confounded\":\"😖\",\"kissing\":\"😗\",\"kissing_heart\":\"😘\",\"kissing_smiling_eyes\":\"😙\",\"kissing_closed_eyes\":\"😚\",\"stuck_out_tongue\":\"😛\",\"stuck_out_tongue_winking_eye\":\"😜\",\"stuck_out_tongue_closed_eyes\":\"😝\",\"disappointed\":\"😞\",\"worried\":\"😟\",\"angry\":\"😠\",\"rage\":\"😡\",\"cry\":\"😢\",\"persevere\":\"😣\",\"triumph\":\"😤\",\"disappointed_relieved\":\"😥\",\"frowning\":\"😦\",\"anguished\":\"😧\",\"fearful\":\"😨\",\"weary\":\"😩\",\"sleepy\":\"😪\",\"tired_face\":\"😫\",\"grimacing\":\"😬\",\"sob\":\"😭\",\"face_exhaling\":\"😮‍💨\",\"open_mouth\":\"😮\",\"hushed\":\"😯\",\"cold_sweat\":\"😰\",\"scream\":\"😱\",\"astonished\":\"😲\",\"flushed\":\"😳\",\"sleeping\":\"😴\",\"face_with_spiral_eyes\":\"😵‍💫\",\"dizzy_face\":\"😵\",\"face_in_clouds\":\"😶‍🌫️\",\"no_mouth\":\"😶\",\"mask\":\"😷\",\"smile_cat\":\"😸\",\"joy_cat\":\"😹\",\"smiley_cat\":\"😺\",\"heart_eyes_cat\":\"😻\",\"smirk_cat\":\"😼\",\"kissing_cat\":\"😽\",\"pouting_cat\":\"😾\",\"crying_cat_face\":\"😿\",\"scream_cat\":\"🙀\",\"slightly_frowning_face\":\"🙁\",\"slightly_smiling_face\":\"🙂\",\"upside_down_face\":\"🙃\",\"face_with_rolling_eyes\":\"🙄\",\"woman-gesturing-no\":\"🙅‍♀️\",\"no_good\":\"🙅‍♀️\",\"man-gesturing-no\":\"🙅‍♂️\",\"woman-gesturing-ok\":\"🙆‍♀️\",\"ok_woman\":\"🙆‍♀️\",\"man-gesturing-ok\":\"🙆‍♂️\",\"woman-bowing\":\"🙇‍♀️\",\"man-bowing\":\"🙇‍♂️\",\"bow\":\"🙇‍♂️\",\"see_no_evil\":\"🙈\",\"hear_no_evil\":\"🙉\",\"speak_no_evil\":\"🙊\",\"woman-raising-hand\":\"🙋‍♀️\",\"raising_hand\":\"🙋‍♀️\",\"man-raising-hand\":\"🙋‍♂️\",\"raised_hands\":\"🙌\",\"woman-frowning\":\"🙍‍♀️\",\"person_frowning\":\"🙍‍♀️\",\"man-frowning\":\"🙍‍♂️\",\"woman-pouting\":\"🙎‍♀️\",\"person_with_pouting_face\":\"🙎‍♀️\",\"man-pouting\":\"🙎‍♂️\",\"pray\":\"🙏\",\"rocket\":\"🚀\",\"helicopter\":\"🚁\",\"steam_locomotive\":\"🚂\",\"railway_car\":\"🚃\",\"bullettrain_side\":\"🚄\",\"bullettrain_front\":\"🚅\",\"train2\":\"🚆\",\"metro\":\"🚇\",\"light_rail\":\"🚈\",\"station\":\"🚉\",\"tram\":\"🚊\",\"train\":\"🚋\",\"bus\":\"🚌\",\"oncoming_bus\":\"🚍\",\"trolleybus\":\"🚎\",\"busstop\":\"🚏\",\"minibus\":\"🚐\",\"ambulance\":\"🚑\",\"fire_engine\":\"🚒\",\"police_car\":\"🚓\",\"oncoming_police_car\":\"🚔\",\"taxi\":\"🚕\",\"oncoming_taxi\":\"🚖\",\"car\":\"🚗\",\"red_car\":\"🚗\",\"oncoming_automobile\":\"🚘\",\"blue_car\":\"🚙\",\"truck\":\"🚚\",\"articulated_lorry\":\"🚛\",\"tractor\":\"🚜\",\"monorail\":\"🚝\",\"mountain_railway\":\"🚞\",\"suspension_railway\":\"🚟\",\"mountain_cableway\":\"🚠\",\"aerial_tramway\":\"🚡\",\"ship\":\"🚢\",\"woman-rowing-boat\":\"🚣‍♀️\",\"man-rowing-boat\":\"🚣‍♂️\",\"rowboat\":\"🚣‍♂️\",\"speedboat\":\"🚤\",\"traffic_light\":\"🚥\",\"vertical_traffic_light\":\"🚦\",\"construction\":\"🚧\",\"rotating_light\":\"🚨\",\"triangular_flag_on_post\":\"🚩\",\"door\":\"🚪\",\"no_entry_sign\":\"🚫\",\"smoking\":\"🚬\",\"no_smoking\":\"🚭\",\"put_litter_in_its_place\":\"🚮\",\"do_not_litter\":\"🚯\",\"potable_water\":\"🚰\",\"non-potable_water\":\"🚱\",\"bike\":\"🚲\",\"no_bicycles\":\"🚳\",\"woman-biking\":\"🚴‍♀️\",\"man-biking\":\"🚴‍♂️\",\"bicyclist\":\"🚴‍♂️\",\"woman-mountain-biking\":\"🚵‍♀️\",\"man-mountain-biking\":\"🚵‍♂️\",\"mountain_bicyclist\":\"🚵‍♂️\",\"woman-walking\":\"🚶‍♀️\",\"man-walking\":\"🚶‍♂️\",\"walking\":\"🚶‍♂️\",\"no_pedestrians\":\"🚷\",\"children_crossing\":\"🚸\",\"mens\":\"🚹\",\"womens\":\"🚺\",\"restroom\":\"🚻\",\"baby_symbol\":\"🚼\",\"toilet\":\"🚽\",\"wc\":\"🚾\",\"shower\":\"🚿\",\"bath\":\"🛀\",\"bathtub\":\"🛁\",\"passport_control\":\"🛂\",\"customs\":\"🛃\",\"baggage_claim\":\"🛄\",\"left_luggage\":\"🛅\",\"couch_and_lamp\":\"🛋️\",\"sleeping_accommodation\":\"🛌\",\"shopping_bags\":\"🛍️\",\"bellhop_bell\":\"🛎️\",\"bed\":\"🛏️\",\"place_of_worship\":\"🛐\",\"octagonal_sign\":\"🛑\",\"shopping_trolley\":\"🛒\",\"hindu_temple\":\"🛕\",\"hut\":\"🛖\",\"elevator\":\"🛗\",\"hammer_and_wrench\":\"🛠️\",\"shield\":\"🛡️\",\"oil_drum\":\"🛢️\",\"motorway\":\"🛣️\",\"railway_track\":\"🛤️\",\"motor_boat\":\"🛥️\",\"small_airplane\":\"🛩️\",\"airplane_departure\":\"🛫\",\"airplane_arriving\":\"🛬\",\"satellite\":\"🛰️\",\"passenger_ship\":\"🛳️\",\"scooter\":\"🛴\",\"motor_scooter\":\"🛵\",\"canoe\":\"🛶\",\"sled\":\"🛷\",\"flying_saucer\":\"🛸\",\"skateboard\":\"🛹\",\"auto_rickshaw\":\"🛺\",\"pickup_truck\":\"🛻\",\"roller_skate\":\"🛼\",\"large_orange_circle\":\"🟠\",\"large_yellow_circle\":\"🟡\",\"large_green_circle\":\"🟢\",\"large_purple_circle\":\"🟣\",\"large_brown_circle\":\"🟤\",\"large_red_square\":\"🟥\",\"large_blue_square\":\"🟦\",\"large_orange_square\":\"🟧\",\"large_yellow_square\":\"🟨\",\"large_green_square\":\"🟩\",\"large_purple_square\":\"🟪\",\"large_brown_square\":\"🟫\",\"pinched_fingers\":\"🤌\",\"white_heart\":\"🤍\",\"brown_heart\":\"🤎\",\"pinching_hand\":\"🤏\",\"zipper_mouth_face\":\"🤐\",\"money_mouth_face\":\"🤑\",\"face_with_thermometer\":\"🤒\",\"nerd_face\":\"🤓\",\"thinking_face\":\"🤔\",\"face_with_head_bandage\":\"🤕\",\"robot_face\":\"🤖\",\"hugging_face\":\"🤗\",\"the_horns\":\"🤘\",\"sign_of_the_horns\":\"🤘\",\"call_me_hand\":\"🤙\",\"raised_back_of_hand\":\"🤚\",\"left-facing_fist\":\"🤛\",\"right-facing_fist\":\"🤜\",\"handshake\":\"🤝\",\"crossed_fingers\":\"🤞\",\"hand_with_index_and_middle_fingers_crossed\":\"🤞\",\"i_love_you_hand_sign\":\"🤟\",\"face_with_cowboy_hat\":\"🤠\",\"clown_face\":\"🤡\",\"nauseated_face\":\"🤢\",\"rolling_on_the_floor_laughing\":\"🤣\",\"drooling_face\":\"🤤\",\"lying_face\":\"🤥\",\"woman-facepalming\":\"🤦‍♀️\",\"man-facepalming\":\"🤦‍♂️\",\"face_palm\":\"🤦\",\"sneezing_face\":\"🤧\",\"face_with_raised_eyebrow\":\"🤨\",\"face_with_one_eyebrow_raised\":\"🤨\",\"star-struck\":\"🤩\",\"grinning_face_with_star_eyes\":\"🤩\",\"zany_face\":\"🤪\",\"grinning_face_with_one_large_and_one_small_eye\":\"🤪\",\"shushing_face\":\"🤫\",\"face_with_finger_covering_closed_lips\":\"🤫\",\"face_with_symbols_on_mouth\":\"🤬\",\"serious_face_with_symbols_covering_mouth\":\"🤬\",\"face_with_hand_over_mouth\":\"🤭\",\"smiling_face_with_smiling_eyes_and_hand_covering_mouth\":\"🤭\",\"face_vomiting\":\"🤮\",\"face_with_open_mouth_vomiting\":\"🤮\",\"exploding_head\":\"🤯\",\"shocked_face_with_exploding_head\":\"🤯\",\"pregnant_woman\":\"🤰\",\"breast-feeding\":\"🤱\",\"palms_up_together\":\"🤲\",\"selfie\":\"🤳\",\"prince\":\"🤴\",\"woman_in_tuxedo\":\"🤵‍♀️\",\"man_in_tuxedo\":\"🤵‍♂️\",\"person_in_tuxedo\":\"🤵\",\"mrs_claus\":\"🤶\",\"mother_christmas\":\"🤶\",\"woman-shrugging\":\"🤷‍♀️\",\"man-shrugging\":\"🤷‍♂️\",\"shrug\":\"🤷\",\"woman-cartwheeling\":\"🤸‍♀️\",\"man-cartwheeling\":\"🤸‍♂️\",\"person_doing_cartwheel\":\"🤸\",\"woman-juggling\":\"🤹‍♀️\",\"man-juggling\":\"🤹‍♂️\",\"juggling\":\"🤹\",\"fencer\":\"🤺\",\"woman-wrestling\":\"🤼‍♀️\",\"man-wrestling\":\"🤼‍♂️\",\"wrestlers\":\"🤼\",\"woman-playing-water-polo\":\"🤽‍♀️\",\"man-playing-water-polo\":\"🤽‍♂️\",\"water_polo\":\"🤽\",\"woman-playing-handball\":\"🤾‍♀️\",\"man-playing-handball\":\"🤾‍♂️\",\"handball\":\"🤾\",\"diving_mask\":\"🤿\",\"wilted_flower\":\"🥀\",\"drum_with_drumsticks\":\"🥁\",\"clinking_glasses\":\"🥂\",\"tumbler_glass\":\"🥃\",\"spoon\":\"🥄\",\"goal_net\":\"🥅\",\"first_place_medal\":\"🥇\",\"second_place_medal\":\"🥈\",\"third_place_medal\":\"🥉\",\"boxing_glove\":\"🥊\",\"martial_arts_uniform\":\"🥋\",\"curling_stone\":\"🥌\",\"lacrosse\":\"🥍\",\"softball\":\"🥎\",\"flying_disc\":\"🥏\",\"croissant\":\"🥐\",\"avocado\":\"🥑\",\"cucumber\":\"🥒\",\"bacon\":\"🥓\",\"potato\":\"🥔\",\"carrot\":\"🥕\",\"baguette_bread\":\"🥖\",\"green_salad\":\"🥗\",\"shallow_pan_of_food\":\"🥘\",\"stuffed_flatbread\":\"🥙\",\"egg\":\"🥚\",\"glass_of_milk\":\"🥛\",\"peanuts\":\"🥜\",\"kiwifruit\":\"🥝\",\"pancakes\":\"🥞\",\"dumpling\":\"🥟\",\"fortune_cookie\":\"🥠\",\"takeout_box\":\"🥡\",\"chopsticks\":\"🥢\",\"bowl_with_spoon\":\"🥣\",\"cup_with_straw\":\"🥤\",\"coconut\":\"🥥\",\"broccoli\":\"🥦\",\"pie\":\"🥧\",\"pretzel\":\"🥨\",\"cut_of_meat\":\"🥩\",\"sandwich\":\"🥪\",\"canned_food\":\"🥫\",\"leafy_green\":\"🥬\",\"mango\":\"🥭\",\"moon_cake\":\"🥮\",\"bagel\":\"🥯\",\"smiling_face_with_3_hearts\":\"🥰\",\"yawning_face\":\"🥱\",\"smiling_face_with_tear\":\"🥲\",\"partying_face\":\"🥳\",\"woozy_face\":\"🥴\",\"hot_face\":\"🥵\",\"cold_face\":\"🥶\",\"ninja\":\"🥷\",\"disguised_face\":\"🥸\",\"pleading_face\":\"🥺\",\"sari\":\"🥻\",\"lab_coat\":\"🥼\",\"goggles\":\"🥽\",\"hiking_boot\":\"🥾\",\"womans_flat_shoe\":\"🥿\",\"crab\":\"🦀\",\"lion_face\":\"🦁\",\"scorpion\":\"🦂\",\"turkey\":\"🦃\",\"unicorn_face\":\"🦄\",\"eagle\":\"🦅\",\"duck\":\"🦆\",\"bat\":\"🦇\",\"shark\":\"🦈\",\"owl\":\"🦉\",\"fox_face\":\"🦊\",\"butterfly\":\"🦋\",\"deer\":\"🦌\",\"gorilla\":\"🦍\",\"lizard\":\"🦎\",\"rhinoceros\":\"🦏\",\"shrimp\":\"🦐\",\"squid\":\"🦑\",\"giraffe_face\":\"🦒\",\"zebra_face\":\"🦓\",\"hedgehog\":\"🦔\",\"sauropod\":\"🦕\",\"t-rex\":\"🦖\",\"cricket\":\"🦗\",\"kangaroo\":\"🦘\",\"llama\":\"🦙\",\"peacock\":\"🦚\",\"hippopotamus\":\"🦛\",\"parrot\":\"🦜\",\"raccoon\":\"🦝\",\"lobster\":\"🦞\",\"mosquito\":\"🦟\",\"microbe\":\"🦠\",\"badger\":\"🦡\",\"swan\":\"🦢\",\"mammoth\":\"🦣\",\"dodo\":\"🦤\",\"sloth\":\"🦥\",\"otter\":\"🦦\",\"orangutan\":\"🦧\",\"skunk\":\"🦨\",\"flamingo\":\"🦩\",\"oyster\":\"🦪\",\"beaver\":\"🦫\",\"bison\":\"🦬\",\"seal\":\"🦭\",\"guide_dog\":\"🦮\",\"probing_cane\":\"🦯\",\"bone\":\"🦴\",\"leg\":\"🦵\",\"foot\":\"🦶\",\"tooth\":\"🦷\",\"female_superhero\":\"🦸‍♀️\",\"male_superhero\":\"🦸‍♂️\",\"superhero\":\"🦸\",\"female_supervillain\":\"🦹‍♀️\",\"male_supervillain\":\"🦹‍♂️\",\"supervillain\":\"🦹\",\"safety_vest\":\"🦺\",\"ear_with_hearing_aid\":\"🦻\",\"motorized_wheelchair\":\"🦼\",\"manual_wheelchair\":\"🦽\",\"mechanical_arm\":\"🦾\",\"mechanical_leg\":\"🦿\",\"cheese_wedge\":\"🧀\",\"cupcake\":\"🧁\",\"salt\":\"🧂\",\"beverage_box\":\"🧃\",\"garlic\":\"🧄\",\"onion\":\"🧅\",\"falafel\":\"🧆\",\"waffle\":\"🧇\",\"butter\":\"🧈\",\"mate_drink\":\"🧉\",\"ice_cube\":\"🧊\",\"bubble_tea\":\"🧋\",\"woman_standing\":\"🧍‍♀️\",\"man_standing\":\"🧍‍♂️\",\"standing_person\":\"🧍\",\"woman_kneeling\":\"🧎‍♀️\",\"man_kneeling\":\"🧎‍♂️\",\"kneeling_person\":\"🧎\",\"deaf_woman\":\"🧏‍♀️\",\"deaf_man\":\"🧏‍♂️\",\"deaf_person\":\"🧏\",\"face_with_monocle\":\"🧐\",\"farmer\":\"🧑‍🌾\",\"cook\":\"🧑‍🍳\",\"person_feeding_baby\":\"🧑‍🍼\",\"mx_claus\":\"🧑‍🎄\",\"student\":\"🧑‍🎓\",\"singer\":\"🧑‍🎤\",\"artist\":\"🧑‍🎨\",\"teacher\":\"🧑‍🏫\",\"factory_worker\":\"🧑‍🏭\",\"technologist\":\"🧑‍💻\",\"office_worker\":\"🧑‍💼\",\"mechanic\":\"🧑‍🔧\",\"scientist\":\"🧑‍🔬\",\"astronaut\":\"🧑‍🚀\",\"firefighter\":\"🧑‍🚒\",\"people_holding_hands\":\"🧑‍🤝‍🧑\",\"person_with_probing_cane\":\"🧑‍🦯\",\"red_haired_person\":\"🧑‍🦰\",\"curly_haired_person\":\"🧑‍🦱\",\"bald_person\":\"🧑‍🦲\",\"white_haired_person\":\"🧑‍🦳\",\"person_in_motorized_wheelchair\":\"🧑‍🦼\",\"person_in_manual_wheelchair\":\"🧑‍🦽\",\"health_worker\":\"🧑‍⚕️\",\"judge\":\"🧑‍⚖️\",\"pilot\":\"🧑‍✈️\",\"adult\":\"🧑\",\"child\":\"🧒\",\"older_adult\":\"🧓\",\"woman_with_beard\":\"🧔‍♀️\",\"man_with_beard\":\"🧔‍♂️\",\"bearded_person\":\"🧔\",\"person_with_headscarf\":\"🧕\",\"woman_in_steamy_room\":\"🧖‍♀️\",\"man_in_steamy_room\":\"🧖‍♂️\",\"person_in_steamy_room\":\"🧖‍♂️\",\"woman_climbing\":\"🧗‍♀️\",\"person_climbing\":\"🧗‍♀️\",\"man_climbing\":\"🧗‍♂️\",\"woman_in_lotus_position\":\"🧘‍♀️\",\"person_in_lotus_position\":\"🧘‍♀️\",\"man_in_lotus_position\":\"🧘‍♂️\",\"female_mage\":\"🧙‍♀️\",\"mage\":\"🧙‍♀️\",\"male_mage\":\"🧙‍♂️\",\"female_fairy\":\"🧚‍♀️\",\"fairy\":\"🧚‍♀️\",\"male_fairy\":\"🧚‍♂️\",\"female_vampire\":\"🧛‍♀️\",\"vampire\":\"🧛‍♀️\",\"male_vampire\":\"🧛‍♂️\",\"mermaid\":\"🧜‍♀️\",\"merman\":\"🧜‍♂️\",\"merperson\":\"🧜‍♂️\",\"female_elf\":\"🧝‍♀️\",\"male_elf\":\"🧝‍♂️\",\"elf\":\"🧝‍♂️\",\"female_genie\":\"🧞‍♀️\",\"male_genie\":\"🧞‍♂️\",\"genie\":\"🧞‍♂️\",\"female_zombie\":\"🧟‍♀️\",\"male_zombie\":\"🧟‍♂️\",\"zombie\":\"🧟‍♂️\",\"brain\":\"🧠\",\"orange_heart\":\"🧡\",\"billed_cap\":\"🧢\",\"scarf\":\"🧣\",\"gloves\":\"🧤\",\"coat\":\"🧥\",\"socks\":\"🧦\",\"red_envelope\":\"🧧\",\"firecracker\":\"🧨\",\"jigsaw\":\"🧩\",\"test_tube\":\"🧪\",\"petri_dish\":\"🧫\",\"dna\":\"🧬\",\"compass\":\"🧭\",\"abacus\":\"🧮\",\"fire_extinguisher\":\"🧯\",\"toolbox\":\"🧰\",\"bricks\":\"🧱\",\"magnet\":\"🧲\",\"luggage\":\"🧳\",\"lotion_bottle\":\"🧴\",\"thread\":\"🧵\",\"yarn\":\"🧶\",\"safety_pin\":\"🧷\",\"teddy_bear\":\"🧸\",\"broom\":\"🧹\",\"basket\":\"🧺\",\"roll_of_paper\":\"🧻\",\"soap\":\"🧼\",\"sponge\":\"🧽\",\"receipt\":\"🧾\",\"nazar_amulet\":\"🧿\",\"ballet_shoes\":\"🩰\",\"one-piece_swimsuit\":\"🩱\",\"briefs\":\"🩲\",\"shorts\":\"🩳\",\"thong_sandal\":\"🩴\",\"drop_of_blood\":\"🩸\",\"adhesive_bandage\":\"🩹\",\"stethoscope\":\"🩺\",\"yo-yo\":\"🪀\",\"kite\":\"🪁\",\"parachute\":\"🪂\",\"boomerang\":\"🪃\",\"magic_wand\":\"🪄\",\"pinata\":\"🪅\",\"nesting_dolls\":\"🪆\",\"ringed_planet\":\"🪐\",\"chair\":\"🪑\",\"razor\":\"🪒\",\"axe\":\"🪓\",\"diya_lamp\":\"🪔\",\"banjo\":\"🪕\",\"military_helmet\":\"🪖\",\"accordion\":\"🪗\",\"long_drum\":\"🪘\",\"coin\":\"🪙\",\"carpentry_saw\":\"🪚\",\"screwdriver\":\"🪛\",\"ladder\":\"🪜\",\"hook\":\"🪝\",\"mirror\":\"🪞\",\"window\":\"🪟\",\"plunger\":\"🪠\",\"sewing_needle\":\"🪡\",\"knot\":\"🪢\",\"bucket\":\"🪣\",\"mouse_trap\":\"🪤\",\"toothbrush\":\"🪥\",\"headstone\":\"🪦\",\"placard\":\"🪧\",\"rock\":\"🪨\",\"fly\":\"🪰\",\"worm\":\"🪱\",\"beetle\":\"🪲\",\"cockroach\":\"🪳\",\"potted_plant\":\"🪴\",\"wood\":\"🪵\",\"feather\":\"🪶\",\"anatomical_heart\":\"🫀\",\"lungs\":\"🫁\",\"people_hugging\":\"🫂\",\"blueberries\":\"🫐\",\"bell_pepper\":\"🫑\",\"olive\":\"🫒\",\"flatbread\":\"🫓\",\"tamale\":\"🫔\",\"fondue\":\"🫕\",\"teapot\":\"🫖\",\"bangbang\":\"‼️\",\"interrobang\":\"⁉️\",\"tm\":\"™️\",\"information_source\":\"ℹ️\",\"left_right_arrow\":\"↔️\",\"arrow_up_down\":\"↕️\",\"arrow_upper_left\":\"↖️\",\"arrow_upper_right\":\"↗️\",\"arrow_lower_right\":\"↘️\",\"arrow_lower_left\":\"↙️\",\"leftwards_arrow_with_hook\":\"↩️\",\"arrow_right_hook\":\"↪️\",\"watch\":\"⌚\",\"hourglass\":\"⌛\",\"keyboard\":\"⌨️\",\"eject\":\"⏏️\",\"fast_forward\":\"⏩\",\"rewind\":\"⏪\",\"arrow_double_up\":\"⏫\",\"arrow_double_down\":\"⏬\",\"black_right_pointing_double_triangle_with_vertical_bar\":\"⏭️\",\"black_left_pointing_double_triangle_with_vertical_bar\":\"⏮️\",\"black_right_pointing_triangle_with_double_vertical_bar\":\"⏯️\",\"alarm_clock\":\"⏰\",\"stopwatch\":\"⏱️\",\"timer_clock\":\"⏲️\",\"hourglass_flowing_sand\":\"⏳\",\"double_vertical_bar\":\"⏸️\",\"black_square_for_stop\":\"⏹️\",\"black_circle_for_record\":\"⏺️\",\"m\":\"Ⓜ️\",\"black_small_square\":\"▪️\",\"white_small_square\":\"▫️\",\"arrow_forward\":\"▶️\",\"arrow_backward\":\"◀️\",\"white_medium_square\":\"◻️\",\"black_medium_square\":\"◼️\",\"white_medium_small_square\":\"◽\",\"black_medium_small_square\":\"◾\",\"sunny\":\"☀️\",\"cloud\":\"☁️\",\"umbrella\":\"☂️\",\"snowman\":\"☃️\",\"comet\":\"☄️\",\"phone\":\"☎️\",\"telephone\":\"☎️\",\"ballot_box_with_check\":\"☑️\",\"shamrock\":\"☘️\",\"point_up\":\"☝️\",\"skull_and_crossbones\":\"☠️\",\"radioactive_sign\":\"☢️\",\"biohazard_sign\":\"☣️\",\"orthodox_cross\":\"☦️\",\"star_and_crescent\":\"☪️\",\"peace_symbol\":\"☮️\",\"yin_yang\":\"☯️\",\"wheel_of_dharma\":\"☸️\",\"white_frowning_face\":\"☹️\",\"relaxed\":\"☺️\",\"female_sign\":\"♀️\",\"male_sign\":\"♂️\",\"gemini\":\"♊\",\"cancer\":\"♋\",\"leo\":\"♌\",\"virgo\":\"♍\",\"libra\":\"♎\",\"scorpius\":\"♏\",\"chess_pawn\":\"♟️\",\"spades\":\"♠️\",\"clubs\":\"♣️\",\"hearts\":\"♥️\",\"diamonds\":\"♦️\",\"hotsprings\":\"♨️\",\"recycle\":\"♻️\",\"infinity\":\"♾️\",\"wheelchair\":\"♿\",\"hammer_and_pick\":\"⚒️\",\"crossed_swords\":\"⚔️\",\"medical_symbol\":\"⚕️\",\"staff_of_aesculapius\":\"⚕️\",\"scales\":\"⚖️\",\"alembic\":\"⚗️\",\"gear\":\"⚙️\",\"atom_symbol\":\"⚛️\",\"fleur_de_lis\":\"⚜️\",\"warning\":\"⚠️\",\"zap\":\"⚡\",\"transgender_symbol\":\"⚧️\",\"white_circle\":\"⚪\",\"black_circle\":\"⚫\",\"coffin\":\"⚰️\",\"funeral_urn\":\"⚱️\",\"soccer\":\"⚽\",\"baseball\":\"⚾\",\"snowman_without_snow\":\"⛄\",\"partly_sunny\":\"⛅\",\"thunder_cloud_and_rain\":\"⛈️\",\"ophiuchus\":\"⛎\",\"pick\":\"⛏️\",\"helmet_with_white_cross\":\"⛑️\",\"chains\":\"⛓️\",\"no_entry\":\"⛔\",\"shinto_shrine\":\"⛩️\",\"church\":\"⛪\",\"mountain\":\"⛰️\",\"umbrella_on_ground\":\"⛱️\",\"fountain\":\"⛲\",\"golf\":\"⛳\",\"ferry\":\"⛴️\",\"boat\":\"⛵\",\"sailboat\":\"⛵\",\"skier\":\"⛷️\",\"ice_skate\":\"⛸️\",\"woman-bouncing-ball\":\"⛹️‍♀️\",\"man-bouncing-ball\":\"⛹️‍♂️\",\"person_with_ball\":\"⛹️‍♂️\",\"tent\":\"⛺\",\"fuelpump\":\"⛽\",\"scissors\":\"✂️\",\"airplane\":\"✈️\",\"email\":\"✉️\",\"envelope\":\"✉️\",\"fist\":\"✊\",\"hand\":\"✋\",\"raised_hand\":\"✋\",\"v\":\"✌️\",\"writing_hand\":\"✍️\",\"pencil2\":\"✏️\",\"black_nib\":\"✒️\",\"heavy_check_mark\":\"✔️\",\"heavy_multiplication_x\":\"✖️\",\"latin_cross\":\"✝️\",\"star_of_david\":\"✡️\",\"eight_spoked_asterisk\":\"✳️\",\"eight_pointed_black_star\":\"✴️\",\"snowflake\":\"❄️\",\"sparkle\":\"❇️\",\"x\":\"❌\",\"negative_squared_cross_mark\":\"❎\",\"heavy_heart_exclamation_mark_ornament\":\"❣️\",\"heart_on_fire\":\"❤️‍🔥\",\"mending_heart\":\"❤️‍🩹\",\"heart\":\"❤️\",\"arrow_right\":\"➡️\",\"curly_loop\":\"➰\",\"loop\":\"➿\",\"arrow_heading_up\":\"⤴️\",\"arrow_heading_down\":\"⤵️\",\"arrow_left\":\"⬅️\",\"arrow_up\":\"⬆️\",\"arrow_down\":\"⬇️\",\"black_large_square\":\"⬛\",\"white_large_square\":\"⬜\",\"star\":\"⭐\",\"o\":\"⭕\",\"wavy_dash\":\"〰️\",\"part_alternation_mark\":\"〽️\",\"congratulations\":\"㊗️\",\"secret\":\"㊙️\"}");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/Bar.vue?vue&type=template&id=50936cc6&scoped=true


var Barvue_type_template_id_50936cc6_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-50936cc6"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var _hoisted_1 = {
  class: "bar"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.content, function (item, item_idx) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($options.get_component(item.is)), {
      key: 'bar-item-' + item_idx,
      item: item,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(item.class),
      id: item.id,
      is_open: $data.menu_open,
      ref: function ref(el) {
        return Object.defineProperty(item, '_el', {
          value: el,
          writable: true
        });
      },
      onClick: function onClick($event) {
        return $options.toggle_menu(item, $event);
      }
    }, null, 8, ["item", "class", "id", "is_open", "onClick"]);
  }), 128))]);
}
// CONCATENATED MODULE: ./src/Bar/Bar.vue?vue&type=template&id=50936cc6&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarButtonGeneric.vue?vue&type=template&id=b32e5bd0

var BarButtonGenericvue_type_template_id_b32e5bd0_hoisted_1 = ["title"];
var _hoisted_2 = {
  key: 0,
  class: "material-icons icon"
};
var _hoisted_3 = {
  key: 1,
  class: "emoji"
};
var _hoisted_4 = {
  key: 2,
  class: "label"
};
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  key: 4,
  class: "material-icons chevron"
};
var _hoisted_7 = ["innerHTML"];
function BarButtonGenericvue_type_template_id_b32e5bd0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["bar-button", $options.button_class]),
    title: $options.title,
    onMousedown: _cache[0] || (_cache[0] = function (e) {
      return e.preventDefault();
    }),
    onClick: _cache[1] || (_cache[1] = function (e) {
      return $props.item.click && !$props.item.disabled ? $props.item.click(e) : e.stopPropagation();
    })
  }, [$props.item.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.item.icon), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.emoji ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.get_emoji($props.item.emoji)), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.text ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.item.text), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.html ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 3,
    class: "label",
    innerHTML: $props.item.html
  }, null, 8, _hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.chevron === true ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_6, "expand_more")) : $props.item.chevron ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 5,
    class: "chevron",
    innerHTML: $props.item.chevron
  }, null, 8, _hoisted_7)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.item.menu ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($options.get_component($props.item.menu)), {
    key: 6,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menu", $props.item.menu_class]),
    menu: $props.item.menu,
    id: $props.item.menu_id,
    width: $props.item.menu_width,
    height: $props.item.menu_height
  }, null, 8, ["menu", "class", "id", "width", "height"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 42, BarButtonGenericvue_type_template_id_b32e5bd0_hoisted_1);
}
// CONCATENATED MODULE: ./src/Bar/BarButtonGeneric.vue?vue&type=template&id=b32e5bd0

// EXTERNAL MODULE: ./node_modules/node-emoji/index.js
var node_emoji = __webpack_require__("b90b");
var node_emoji_default = /*#__PURE__*/__webpack_require__.n(node_emoji);

// EXTERNAL MODULE: ./src/Bar/BarMenu.vue + 12 modules
var BarMenu = __webpack_require__("2670");

// EXTERNAL MODULE: ./src/Bar/imports/bar-hotkey-manager.js + 1 modules
var bar_hotkey_manager = __webpack_require__("de35");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarButtonGeneric.vue?vue&type=script&lang=js




/* harmony default export */ var BarButtonGenericvue_type_script_lang_js = ({
  mixins: [bar_hotkey_manager["a" /* default */]],
  components: {
    BarMenu: BarMenu["default"]
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    is_open: Boolean
  },
  computed: {
    is_menu: function is_menu() {
      return this.item.menu ? true : false;
    },
    button_class: function button_class() {
      var open = this.is_open && this.is_menu;
      var active = this.item.active;
      var disabled = this.item.disabled;
      return {
        open: open,
        active: active,
        disabled: disabled
      };
    },
    title: function title() {
      if (this.item.title) {
        var title = this.item.title;
        if (this.hotkey) title += " (" + this.hotkey + ")";
        return title;
      } else return false;
    }
  },
  methods: {
    get_emoji: function get_emoji(emoji_name) {
      return node_emoji_default.a.get(emoji_name);
    },
    get_component: function get_component(is) {
      if (is && !Array.isArray(is) && Object(esm_typeof["a" /* default */])(is) == "object") return is; // if component
      else return "bar-menu";
    }
  }
});
// CONCATENATED MODULE: ./src/Bar/BarButtonGeneric.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/Bar/BarButtonGeneric.vue



BarButtonGenericvue_type_script_lang_js.render = BarButtonGenericvue_type_template_id_b32e5bd0_render

/* harmony default export */ var BarButtonGeneric = (BarButtonGenericvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarButtonColor.vue?vue&type=template&id=f094c3d0&scoped=true


var BarButtonColorvue_type_template_id_f094c3d0_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-f094c3d0"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var BarButtonColorvue_type_template_id_f094c3d0_scoped_true_hoisted_1 = ["title"];
var BarButtonColorvue_type_template_id_f094c3d0_scoped_true_hoisted_2 = ["id"];
function BarButtonColorvue_type_template_id_f094c3d0_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["bar-button", _ctx.button_class]),
    title: _ctx.title,
    onMousedown: _cache[2] || (_cache[2] = function () {
      return $options.mousedown_handler && $options.mousedown_handler.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "color-square",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      'background-color': $options.css_color
    })
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menu", _ctx.item.menu_class]),
    id: _ctx.item.menu_id,
    onClick: _cache[1] || (_cache[1] = function (e) {
      return _ctx.item.stay_open ? e.stopPropagation() : true;
    })
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])(_ctx.item.type || 'compact'), {
    modelValue: $data.color,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.color = $event;
    })
  }, null, 8, ["modelValue"]))], 10, BarButtonColorvue_type_template_id_f094c3d0_scoped_true_hoisted_2)], 42, BarButtonColorvue_type_template_id_f094c3d0_scoped_true_hoisted_1);
}
// CONCATENATED MODULE: ./src/Bar/BarButtonColor.vue?vue&type=template&id=f094c3d0&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/mixin/color.js
var tinycolor$1 = {exports: {}};

(function (module) {
// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if (module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else {
    window.tinycolor = tinycolor;
}

})(Math);
}(tinycolor$1));

var tinycolor = tinycolor$1.exports;

function _colorChange(data, oldHue) {
  const alpha = data && data.a;
  let color;

  // hsl is better than hex between conversions
  if (data && data.hsl) {
    color = tinycolor(data.hsl);
  } else if (data && data.hex && data.hex.length > 0) {
    color = tinycolor(data.hex);
  } else if (data && data.hsv) {
    color = tinycolor(data.hsv);
  } else if (data && data.rgba) {
    color = tinycolor(data.rgba);
  } else if (data && data.rgb) {
    color = tinycolor(data.rgb);
  } else {
    color = tinycolor(data);
  }

  if (color && (color._a === undefined || color._a === null)) {
    color.setAlpha(alpha || 1);
  }

  const hsl = color.toHsl();
  const hsv = color.toHsv();

  if (hsl.s === 0) {
    hsv.h = hsl.h = data.h || (data.hsl && data.hsl.h) || oldHue || 0;
  }

  /* --- comment this block to fix #109, may cause #25 again --- */
  // when the hsv.v is less than 0.0164 (base on test)
  // because of possible loss of precision
  // the result of hue and saturation would be miscalculated
  // if (hsv.v < 0.0164) {
  //   hsv.h = data.h || (data.hsv && data.hsv.h) || 0
  //   hsv.s = data.s || (data.hsv && data.hsv.s) || 0
  // }

  // if (hsl.l < 0.01) {
  //   hsl.h = data.h || (data.hsl && data.hsl.h) || 0
  //   hsl.s = data.s || (data.hsl && data.hsl.s) || 0
  // }
  /* ------ */

  return {
    hsl,
    hex: color.toHexString().toUpperCase(),
    hex8: color.toHex8String().toUpperCase(),
    rgba: color.toRgb(),
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source,
    a: data.a || color.getAlpha(),
  };
}

var colorMixin = {
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: ['modelValue'],
  data() {
    return {
      val: _colorChange(this.modelValue),
    };
  },
  computed: {
    colors: {
      get() {
        return this.val;
      },
      set(newVal) {
        this.val = newVal;
        this.$emit('update:modelValue', newVal);
      },
    },
  },
  watch: {
    modelValue(newVal) {
      this.val = _colorChange(newVal);
    },
  },
  methods: {
    colorChange(data, oldHue) {
      this.oldHue = this.colors.hsl.h;
      this.colors = _colorChange(data, oldHue || this.oldHue);
    },
    isValidHex(hex) {
      return tinycolor(hex).isValid();
    },
    simpleCheckForValidColor(data) {
      const keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
      let checked = 0;
      let passed = 0;

      for (let i = 0; i < keysToCheck.length; i++) {
        const letter = keysToCheck[i];
        if (data[letter]) {
          checked++;
          if (!isNaN(data[letter])) {
            passed++;
          }
        }
      }

      if (checked === passed) {
        return data;
      }
    },
    paletteUpperCase(palette) {
      return palette.map((c) => c.toUpperCase());
    },
    isTransparent(color) {
      return tinycolor(color).getAlpha() === 0;
    },
  },
};



// EXTERNAL MODULE: ./node_modules/@ckpack/vue-color/libs/saturation.vue_vue&type=script&lang-21393dc5.js
var saturation_vue_vue_type_script_lang_21393dc5 = __webpack_require__("4024");

// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/hue.vue_vue&type=script&lang-4075118c.js
var script = {
  name: 'Hue',
  props: {
    value: Object,
    direction: {
      type: String,
      // [horizontal | vertical]
      default: 'horizontal',
    },
  },
  data() {
    return {
      oldHue: 0,
      pullDirection: '',
    };
  },
  computed: {
    colors() {
      const { h } = this.value.hsl;
      if (h !== 0 && h - this.oldHue > 0) this.pullDirection = 'right';
      if (h !== 0 && h - this.oldHue < 0) this.pullDirection = 'left';
      this.oldHue = h;

      return this.value;
    },
    directionClass() {
      return {
        'vc-hue--horizontal': this.direction === 'horizontal',
        'vc-hue--vertical': this.direction === 'vertical',
      };
    },
    pointerTop() {
      if (this.direction === 'vertical') {
        if (this.colors.hsl.h === 0 && this.pullDirection === 'right') return 0;
        return `${-((this.colors.hsl.h * 100) / 360) + 100}%`;
      }
      return 0;
    },
    pointerLeft() {
      if (this.direction === 'vertical') {
        return 0;
      }
      if (this.colors.hsl.h === 0 && this.pullDirection === 'right') return '100%';
      return `${(this.colors.hsl.h * 100) / 360}%`;
    },
  },
  methods: {
    handleChange(e, skip) {
      !skip && e.preventDefault();

      const { container } = this.$refs;
      if (!container) {
        // for some edge cases, container may not exist. see #220
        return;
      }
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      const yOffset = container.getBoundingClientRect().top + window.pageYOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      const left = pageX - xOffset;
      const top = pageY - yOffset;

      let h;
      let percent;

      if (this.direction === 'vertical') {
        if (top < 0) {
          h = 360;
        } else if (top > containerHeight) {
          h = 0;
        } else {
          percent = -(top * 100 / containerHeight) + 100;
          h = (360 * percent / 100);
        }

        if (this.colors.hsl.h !== h) {
          this.$emit('change', {
            h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: this.colors.hsl.a,
            source: 'hsl',
          });
        }
      } else {
        if (left < 0) {
          h = 0;
        } else if (left > containerWidth) {
          h = 360;
        } else {
          percent = left * 100 / containerWidth;
          h = (360 * percent / 100);
        }

        if (this.colors.hsl.h !== h) {
          this.$emit('change', {
            h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: this.colors.hsl.a,
            source: 'hsl',
          });
        }
      }
    },
    handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp(e) {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    },
  },
};



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/editable-input.vue_vue&type=script&lang-2fa3c262.js
var editable_input_vue_vue_type_script_lang_2fa3c262_script = {
  name: 'editableInput',
  props: {
    label: String,
    labelText: String,
    desc: String,
    value: [String, Number],
    max: Number,
    min: Number,
    arrowOffset: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(v) {
        // TODO: min
        if (!(this.max === undefined) && +v > this.max) {
          this.$refs.input.value = this.max;
        } else {
          return v;
        }
      },
    },
    labelId() {
      return `input__label__${this.label}__${Math.random().toString().slice(2, 5)}`;
    },
    labelSpanText() {
      return this.labelText || this.label;
    },
  },
  methods: {
    update(e) {
      this.handleChange(e.target.value);
    },
    handleChange(newVal) {
      const data = {};
      data[this.label] = newVal;
      if (data.hex === undefined && data['#'] === undefined) {
        this.$emit('change', data);
      } else if (newVal.length > 5) {
        this.$emit('change', data);
      }
    },
    // **** unused
    // handleBlur (e) {
    //   console.log(e)
    // },
    handleKeyDown(e) {
      let { val } = this;
      const number = Number(val);

      if (number) {
        const amount = this.arrowOffset || 1;

        // Up
        if (e.keyCode === 38) {
          val = number + amount;
          this.handleChange(val);
          e.preventDefault();
        }

        // Down
        if (e.keyCode === 40) {
          val = number - amount;
          this.handleChange(val);
          e.preventDefault();
        }
      }
    },
    // **** unused
    // handleDrag (e) {
    //   console.log(e)
    // },
    // handleMouseDown (e) {
    //   console.log(e)
    // }
  },
};



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/style-inject.es-1f59c1d0.js
function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/checkboard-becfb723.js



const _checkboardCache = {};

var checkboard_becfb723_script = {
  name: 'Checkboard',
  props: {
    size: {
      type: [Number, String],
      default: 8,
    },
    white: {
      type: String,
      default: '#fff',
    },
    grey: {
      type: String,
      default: '#e6e6e6',
    },
  },
  computed: {
    bgStyle() {
      return {
        'background-image': `url(${getCheckboard(this.white, this.grey, this.size)})`,
      };
    },
  },
};

/**
 * get base 64 data by canvas
 *
 * @param {String} c1 hex color
 * @param {String} c2 hex color
 * @param {Number} size
 */

function renderCheckboard(c1, c2, size) {
  // Dont Render On Server
  if (typeof document === 'undefined') {
    return null;
  }
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size * 2;
  const ctx = canvas.getContext('2d');
  // If no context can be found, return early.
  if (!ctx) {
    return null;
  }
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

/**
 * get checkboard base data and cache
 *
 * @param {String} c1 hex color
 * @param {String} c2 hex color
 * @param {Number} size
 */

function getCheckboard(c1, c2, size) {
  const key = `${c1},${c2},${size}`;

  if (_checkboardCache[key]) {
    return _checkboardCache[key];
  }
  const checkboard = renderCheckboard(c1, c2, size);
  _checkboardCache[key] = checkboard;
  return checkboard;
}

function checkboard_becfb723_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: "vc-checkerboard",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.bgStyle)
  }, null, 4 /* STYLE */))
}

var css_248z = ".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}";
styleInject(css_248z);

checkboard_becfb723_script.render = checkboard_becfb723_render;
checkboard_becfb723_script.__file = "src/components/checkboard/checkboard.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/alpha.vue_vue&type=script&lang-2d93adbb.js


var alpha_vue_vue_type_script_lang_2d93adbb_script = {
  name: 'Alpha',
  props: {
    value: Object,
    onChange: Function,
  },
  components: {
    checkboard: checkboard_becfb723_script,
  },
  computed: {
    colors() {
      return this.value;
    },
    gradientColor() {
      const { rgba } = this.colors;
      const rgbStr = [rgba.r, rgba.g, rgba.b].join(',');
      return `linear-gradient(to right, rgba(${rgbStr}, 0) 0%, rgba(${rgbStr}, 1) 100%)`;
    },
  },
  methods: {
    handleChange(e, skip) {
      !skip && e.preventDefault();
      const { container } = this.$refs;
      if (!container) {
        // for some edge cases, container may not exist. see #220
        return;
      }
      const containerWidth = container.clientWidth;

      const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const left = pageX - xOffset;

      let a;
      if (left < 0) {
        a = 0;
      } else if (left > containerWidth) {
        a = 1;
      } else {
        a = Math.round(left * 100 / containerWidth) / 100;
      }

      if (this.colors.a !== a) {
        this.$emit('change', {
          h: this.colors.hsl.h,
          s: this.colors.hsl.s,
          l: this.colors.hsl.l,
          a,
          source: 'rgba',
        });
      }
    },
    handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    },
  },
};



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/chrome-5d1f1dd6.js












var chrome_5d1f1dd6_script = {
  name: 'Chrome',
  mixins: [colorMixin],
  props: {
    disableAlpha: {
      type: Boolean,
      default: false,
    },
    disableFields: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    saturation: saturation_vue_vue_type_script_lang_21393dc5["a" /* s */],
    hue: script,
    alpha: alpha_vue_vue_type_script_lang_2d93adbb_script,
    'ed-in': editable_input_vue_vue_type_script_lang_2fa3c262_script,
    checkboard: checkboard_becfb723_script,
  },
  data() {
    return {
      fieldsIndex: 0,
      highlight: false,
    };
  },
  computed: {
    hsl() {
      const { h, s, l } = this.colors.hsl;
      return {
        h: h.toFixed(),
        s: `${(s * 100).toFixed()}%`,
        l: `${(l * 100).toFixed()}%`,
      };
    },
    activeColor() {
      const { rgba } = this.colors;
      return `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(',')})`;
    },
    hasAlpha() {
      return this.colors.a < 1;
    },
  },
  methods: {
    childChange(data) {
      this.colorChange(data);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        this.isValidHex(data.hex) && this.colorChange({
          hex: data.hex,
          source: 'hex',
        });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: 'rgba',
        });
      } else if (data.h || data.s || data.l) {
        const s = data.s ? (data.s.replace('%', '') / 100) : this.colors.hsl.s;
        const l = data.l ? (data.l.replace('%', '') / 100) : this.colors.hsl.l;

        this.colorChange({
          h: data.h || this.colors.hsl.h,
          s,
          l,
          source: 'hsl',
        });
      }
    },
    toggleViews() {
      if (this.fieldsIndex >= 2) {
        this.fieldsIndex = 0;
        return;
      }
      this.fieldsIndex++;
    },
    showHighlight() {
      this.highlight = true;
    },
    hideHighlight() {
      this.highlight = false;
    },
  },
};

const chrome_5d1f1dd6_hoisted_1 = { class: "vc-chrome-saturation-wrap" };
const chrome_5d1f1dd6_hoisted_2 = { class: "vc-chrome-body" };
const chrome_5d1f1dd6_hoisted_3 = { class: "vc-chrome-controls" };
const chrome_5d1f1dd6_hoisted_4 = { class: "vc-chrome-color-wrap" };
const chrome_5d1f1dd6_hoisted_5 = ["aria-label"];
const chrome_5d1f1dd6_hoisted_6 = { class: "vc-chrome-sliders" };
const chrome_5d1f1dd6_hoisted_7 = { class: "vc-chrome-hue-wrap" };
const _hoisted_8 = {
  key: 0,
  class: "vc-chrome-alpha-wrap"
};
const _hoisted_9 = {
  key: 0,
  class: "vc-chrome-fields-wrap"
};
const _hoisted_10 = { class: "vc-chrome-fields" };
const _hoisted_11 = { class: "vc-chrome-field" };
const _hoisted_12 = { class: "vc-chrome-fields" };
const _hoisted_13 = { class: "vc-chrome-field" };
const _hoisted_14 = { class: "vc-chrome-field" };
const _hoisted_15 = { class: "vc-chrome-field" };
const _hoisted_16 = {
  key: 0,
  class: "vc-chrome-field"
};
const _hoisted_17 = { class: "vc-chrome-fields" };
const _hoisted_18 = { class: "vc-chrome-field" };
const _hoisted_19 = { class: "vc-chrome-field" };
const _hoisted_20 = { class: "vc-chrome-field" };
const _hoisted_21 = {
  key: 0,
  class: "vc-chrome-field"
};
const _hoisted_22 = { class: "vc-chrome-toggle-icon" };
const _hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", {
  fill: "#333",
  d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1 /* HOISTED */);
const _hoisted_24 = [
  _hoisted_23
];
const _hoisted_25 = { class: "vc-chrome-toggle-icon-highlight" };

function chrome_5d1f1dd6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_saturation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("saturation");
  const _component_checkboard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("checkboard");
  const _component_hue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("hue");
  const _component_alpha = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("alpha");
  const _component_ed_in = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ed-in");

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    role: "application",
    "aria-label": "Chrome color picker",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['vc-chrome', $props.disableAlpha ? 'vc-chrome__disable-alpha' : ''])
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chrome_5d1f1dd6_hoisted_1, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_saturation, {
        value: _ctx.colors,
        onChange: $options.childChange
      }, null, 8 /* PROPS */, ["value", "onChange"])
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chrome_5d1f1dd6_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chrome_5d1f1dd6_hoisted_3, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chrome_5d1f1dd6_hoisted_4, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
            "aria-label": `current color is ${_ctx.colors.hex}`,
            class: "vc-chrome-active-color",
            style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: $options.activeColor})
          }, null, 12 /* STYLE, PROPS */, chrome_5d1f1dd6_hoisted_5),
          (!$props.disableAlpha)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_checkboard, { key: 0 }))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
        ]),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chrome_5d1f1dd6_hoisted_6, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chrome_5d1f1dd6_hoisted_7, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_hue, {
              value: _ctx.colors,
              onChange: $options.childChange
            }, null, 8 /* PROPS */, ["value", "onChange"])
          ]),
          (!$props.disableAlpha)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_8, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_alpha, {
                  value: _ctx.colors,
                  onChange: $options.childChange
                }, null, 8 /* PROPS */, ["value", "onChange"])
              ]))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
        ])
      ]),
      (!$props.disableFields)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_9, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" hex "),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_11, [
                (!$options.hasAlpha)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ed_in, {
                      key: 0,
                      label: "hex",
                      value: _ctx.colors.hex,
                      onChange: $options.inputChange
                    }, null, 8 /* PROPS */, ["value", "onChange"]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
                ($options.hasAlpha)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ed_in, {
                      key: 1,
                      label: "hex",
                      value: _ctx.colors.hex8,
                      onChange: $options.inputChange
                    }, null, 8 /* PROPS */, ["value", "onChange"]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
              ])
            ], 512 /* NEED_PATCH */), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $data.fieldsIndex === 0]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_12, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" rgba "),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_13, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "r",
                  value: _ctx.colors.rgba.r,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"])
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_14, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "g",
                  value: _ctx.colors.rgba.g,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"])
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_15, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "b",
                  value: _ctx.colors.rgba.b,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"])
              ]),
              (!$props.disableAlpha)
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_16, [
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                      label: "a",
                      value: _ctx.colors.a,
                      "arrow-offset": 0.01,
                      max: 1,
                      onChange: $options.inputChange
                    }, null, 8 /* PROPS */, ["value", "arrow-offset", "onChange"])
                  ]))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
            ], 512 /* NEED_PATCH */), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $data.fieldsIndex === 1]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_17, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" hsla "),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_18, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "h",
                  value: $options.hsl.h,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"])
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_19, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "s",
                  value: $options.hsl.s,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"])
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_20, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "l",
                  value: $options.hsl.l,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"])
              ]),
              (!$props.disableAlpha)
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_21, [
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                      label: "a",
                      value: _ctx.colors.a,
                      "arrow-offset": 0.01,
                      max: 1,
                      onChange: $options.inputChange
                    }, null, 8 /* PROPS */, ["value", "arrow-offset", "onChange"])
                  ]))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
            ], 512 /* NEED_PATCH */), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $data.fieldsIndex === 2]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" btn "),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
              class: "vc-chrome-toggle-btn",
              role: "button",
              "aria-label": "Change another color definition",
              onClick: _cache[3] || (_cache[3] = (...args) => ($options.toggleViews && $options.toggleViews(...args)))
            }, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_22, [
                (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", {
                  style: {"width":"24px","height":"24px"},
                  viewBox: "0 0 24 24",
                  onMouseover: _cache[0] || (_cache[0] = (...args) => ($options.showHighlight && $options.showHighlight(...args))),
                  onMouseenter: _cache[1] || (_cache[1] = (...args) => ($options.showHighlight && $options.showHighlight(...args))),
                  onMouseout: _cache[2] || (_cache[2] = (...args) => ($options.hideHighlight && $options.hideHighlight(...args)))
                }, _hoisted_24, 32 /* HYDRATE_EVENTS */))
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_25, null, 512 /* NEED_PATCH */), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $data.highlight]
              ])
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" btn ")
          ]))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
    ])
  ], 2 /* CLASS */))
}

var chrome_5d1f1dd6_css_248z = ".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}";
styleInject(chrome_5d1f1dd6_css_248z);

chrome_5d1f1dd6_script.render = chrome_5d1f1dd6_render;
chrome_5d1f1dd6_script.__file = "src/components/chrome/chrome.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/compact-939a0aae.js




const defaultColors = [
  '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
  '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
  '#333333', '#808080', '#CCCCCC', '#D33115', '#E27300', '#FCC400',
  '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
  '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
  '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E',
];

var compact_939a0aae_script = {
  name: 'Compact',
  mixins: [colorMixin],
  props: {
    palette: {
      type: Array,
      default() {
        return defaultColors;
      },
    },
  },
  computed: {
    pick() {
      return this.colors.hex.toUpperCase();
    },
  },
  methods: {
    handlerClick(c) {
      this.colorChange({
        hex: c,
        source: 'hex',
      });
    },
  },
};

const compact_939a0aae_hoisted_1 = {
  role: "application",
  "aria-label": "Compact color picker",
  class: "vc-compact"
};
const compact_939a0aae_hoisted_2 = {
  class: "vc-compact-colors",
  role: "listbox"
};
const compact_939a0aae_hoisted_3 = ["aria-label", "aria-selected", "onClick"];
const compact_939a0aae_hoisted_4 = { class: "vc-compact-dot" };

function compact_939a0aae_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", compact_939a0aae_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", compact_939a0aae_hoisted_2, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.paletteUpperCase($props.palette), (c) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
          role: "option",
          "aria-label": 'color:' + c,
          "aria-selected": c === $options.pick,
          class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vc-compact-color-item", {'vc-compact-color-item--white': c === '#FFFFFF' }]),
          key: c,
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: c}),
          onClick: $event => ($options.handlerClick(c))
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", compact_939a0aae_hoisted_4, null, 512 /* NEED_PATCH */), [
            [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], c === $options.pick]
          ])
        ], 14 /* CLASS, STYLE, PROPS */, compact_939a0aae_hoisted_3))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

var compact_939a0aae_css_248z = ".vc-compact{background-color:#fff;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);box-sizing:border-box;padding-left:5px;padding-top:5px;width:245px}.vc-compact-colors{margin:0;overflow:hidden;padding:0}.vc-compact-color-item{cursor:pointer;float:left;height:15px;list-style:none;margin-bottom:5px;margin-right:5px;position:relative;width:15px}.vc-compact-color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vc-compact-color-item--white .vc-compact-dot{background:#000}.vc-compact-dot{background:#fff;border-radius:50%;bottom:5px;left:5px;opacity:1;position:absolute;right:5px;top:5px}";
styleInject(compact_939a0aae_css_248z);

compact_939a0aae_script.render = compact_939a0aae_render;
compact_939a0aae_script.__file = "src/components/compact/compact.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/grayscale-9405cceb.js




const grayscale_9405cceb_defaultColors = [
  '#FFFFFF', '#F2F2F2', '#E6E6E6', '#D9D9D9', '#CCCCCC', '#BFBFBF', '#B3B3B3',
  '#A6A6A6', '#999999', '#8C8C8C', '#808080', '#737373', '#666666', '#595959',
  '#4D4D4D', '#404040', '#333333', '#262626', '#0D0D0D', '#000000',
];

var grayscale_9405cceb_script = {
  name: 'Grayscale',
  mixins: [colorMixin],
  props: {
    palette: {
      type: Array,
      default() {
        return grayscale_9405cceb_defaultColors;
      },
    },
  },
  components: {

  },
  computed: {
    pick() {
      return this.colors.hex.toUpperCase();
    },
  },
  methods: {
    handlerClick(c) {
      this.colorChange({
        hex: c,
        source: 'hex',
      });
    },
  },
};

const grayscale_9405cceb_hoisted_1 = {
  role: "application",
  "aria-label": "Grayscale color picker",
  class: "vc-grayscale"
};
const grayscale_9405cceb_hoisted_2 = {
  class: "vc-grayscale-colors",
  role: "listbox"
};
const grayscale_9405cceb_hoisted_3 = ["aria-label", "aria-selected", "onClick"];
const grayscale_9405cceb_hoisted_4 = { class: "vc-grayscale-dot" };

function grayscale_9405cceb_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", grayscale_9405cceb_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", grayscale_9405cceb_hoisted_2, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.paletteUpperCase($props.palette), (c) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
          role: "option",
          "aria-label": 'Color:' + c,
          "aria-selected": c === $options.pick,
          key: c,
          class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vc-grayscale-color-item", {'vc-grayscale-color-item--white': c == '#FFFFFF'}]),
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: c}),
          onClick: $event => ($options.handlerClick(c))
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", grayscale_9405cceb_hoisted_4, null, 512 /* NEED_PATCH */), [
            [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], c === $options.pick]
          ])
        ], 14 /* CLASS, STYLE, PROPS */, grayscale_9405cceb_hoisted_3))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

var grayscale_9405cceb_css_248z = ".vc-grayscale{background-color:#fff;border-radius:2px;box-shadow:0 2px 15px rgba(0,0,0,.12),0 2px 10px rgba(0,0,0,.16);width:125px}.vc-grayscale-colors{border-radius:2px;margin:0;overflow:hidden;padding:0}.vc-grayscale-color-item{cursor:pointer;float:left;height:25px;list-style:none;position:relative;width:25px}.vc-grayscale-color-item--white .vc-grayscale-dot{background:#000}.vc-grayscale-dot{background:#fff;border-radius:50%;height:6px;left:50%;margin:-3px 0 0 -2px;opacity:1;position:absolute;top:50%;width:6px}";
styleInject(grayscale_9405cceb_css_248z);

grayscale_9405cceb_script.render = grayscale_9405cceb_render;
grayscale_9405cceb_script.__file = "src/components/grayscale/grayscale.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/material-c7e5e70f.js





var material_c7e5e70f_script = {
  name: 'Material',
  mixins: [colorMixin],
  components: {
    'ed-in': editable_input_vue_vue_type_script_lang_2fa3c262_script,
  },
  methods: {
    onChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        this.isValidHex(data.hex) && this.colorChange({
          hex: data.hex,
          source: 'hex',
        });
      } else if (data.r || data.g || data.b) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: 'rgba',
        });
      }
    },
  },
};

const material_c7e5e70f_hoisted_1 = {
  role: "application",
  "aria-label": "Material color picker",
  class: "vc-material"
};
const material_c7e5e70f_hoisted_2 = { class: "vc-material-split" };
const material_c7e5e70f_hoisted_3 = { class: "vc-material-third" };
const material_c7e5e70f_hoisted_4 = { class: "vc-material-third" };
const material_c7e5e70f_hoisted_5 = { class: "vc-material-third" };

function material_c7e5e70f_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ed_in = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ed-in");

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", material_c7e5e70f_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
      class: "vc-material-hex",
      label: "hex",
      value: _ctx.colors.hex,
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ borderColor: _ctx.colors.hex }),
      onChange: $options.onChange
    }, null, 8 /* PROPS */, ["value", "style", "onChange"]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", material_c7e5e70f_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", material_c7e5e70f_hoisted_3, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
          label: "r",
          value: _ctx.colors.rgba.r,
          onChange: $options.onChange
        }, null, 8 /* PROPS */, ["value", "onChange"])
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", material_c7e5e70f_hoisted_4, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
          label: "g",
          value: _ctx.colors.rgba.g,
          onChange: $options.onChange
        }, null, 8 /* PROPS */, ["value", "onChange"])
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", material_c7e5e70f_hoisted_5, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
          label: "b",
          value: _ctx.colors.rgba.b,
          onChange: $options.onChange
        }, null, 8 /* PROPS */, ["value", "onChange"])
      ])
    ])
  ]))
}

var material_c7e5e70f_css_248z = ".vc-material{background-color:#fff;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);font-family:Roboto;height:98px;padding:16px;position:relative;width:98px}.vc-material .vc-input__input{color:#333;font-size:15px;height:30px;margin-top:12px;width:100%}.vc-material .vc-input__label{color:#999;font-size:11px;left:0;position:absolute;text-transform:capitalize;top:0}.vc-material-hex{border-bottom-style:solid;border-bottom-width:2px}.vc-material-split{display:flex;margin-right:-10px;padding-top:11px}.vc-material-third{flex:1;padding-right:10px}";
styleInject(material_c7e5e70f_css_248z);

material_c7e5e70f_script.render = material_c7e5e70f_render;
material_c7e5e70f_script.__file = "src/components/material/material.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/photoshop-ced2b1e7.js







var photoshop_ced2b1e7_script = {
  name: 'Photoshop',
  mixins: [colorMixin],
  props: {
    head: {
      type: String,
      default: 'Color Picker',
    },
    disableFields: {
      type: Boolean,
      default: false,
    },
    hasResetButton: {
      type: Boolean,
      default: false,
    },
    acceptLabel: {
      type: String,
      default: 'OK',
    },
    cancelLabel: {
      type: String,
      default: 'Cancel',
    },
    resetLabel: {
      type: String,
      default: 'Reset',
    },
    newLabel: {
      type: String,
      default: 'new',
    },
    currentLabel: {
      type: String,
      default: 'current',
    },
  },
  components: {
    saturation: saturation_vue_vue_type_script_lang_21393dc5["a" /* s */],
    hue: script,
    'ed-in': editable_input_vue_vue_type_script_lang_2fa3c262_script,
  },
  data() {
    return {
      currentColor: '#FFF',
    };
  },
  computed: {
    hsv() {
      const { hsv } = this.colors;
      return {
        h: hsv.h.toFixed(),
        s: (hsv.s * 100).toFixed(),
        v: (hsv.v * 100).toFixed(),
      };
    },
    hex() {
      const { hex } = this.colors;
      return hex && hex.replace('#', '');
    },
  },
  created() {
    this.currentColor = this.colors.hex;
  },
  methods: {
    childChange(data) {
      this.colorChange(data);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data['#']) {
        this.isValidHex(data['#']) && this.colorChange({
          hex: data['#'],
          source: 'hex',
        });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: 'rgba',
        });
      } else if (data.h || data.s || data.v) {
        this.colorChange({
          h: data.h || this.colors.hsv.h,
          s: (data.s / 100) || this.colors.hsv.s,
          v: (data.v / 100) || this.colors.hsv.v,
          source: 'hsv',
        });
      }
    },
    clickCurrentColor() {
      this.colorChange({
        hex: this.currentColor,
        source: 'hex',
      });
    },
    handleAccept() {
      this.$emit('ok');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleReset() {
      this.$emit('reset');
    },
  },

};

const photoshop_ced2b1e7_hoisted_1 = {
  role: "heading",
  class: "vc-ps-head"
};
const photoshop_ced2b1e7_hoisted_2 = { class: "vc-ps-body" };
const photoshop_ced2b1e7_hoisted_3 = { class: "vc-ps-saturation-wrap" };
const photoshop_ced2b1e7_hoisted_4 = { class: "vc-ps-hue-wrap" };
const photoshop_ced2b1e7_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-ps-hue-pointer" }, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "vc-ps-hue-pointer--left" }),
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "vc-ps-hue-pointer--right" })
], -1 /* HOISTED */);
const photoshop_ced2b1e7_hoisted_6 = { class: "vc-ps-previews" };
const photoshop_ced2b1e7_hoisted_7 = { class: "vc-ps-previews__label" };
const photoshop_ced2b1e7_hoisted_8 = { class: "vc-ps-previews__swatches" };
const photoshop_ced2b1e7_hoisted_9 = ["aria-label"];
const photoshop_ced2b1e7_hoisted_10 = ["aria-label"];
const photoshop_ced2b1e7_hoisted_11 = { class: "vc-ps-previews__label" };
const photoshop_ced2b1e7_hoisted_12 = {
  key: 0,
  class: "vc-ps-actions"
};
const photoshop_ced2b1e7_hoisted_13 = ["aria-label"];
const photoshop_ced2b1e7_hoisted_14 = ["aria-label"];
const photoshop_ced2b1e7_hoisted_15 = { class: "vc-ps-fields" };
const photoshop_ced2b1e7_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-ps-fields__divider" }, null, -1 /* HOISTED */);
const photoshop_ced2b1e7_hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-ps-fields__divider" }, null, -1 /* HOISTED */);

function photoshop_ced2b1e7_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_saturation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("saturation");
  const _component_hue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("hue");
  const _component_ed_in = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ed-in");

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    role: "application",
    "aria-label": "PhotoShop color picker",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['vc-photoshop', $props.disableFields ? 'vc-photoshop__disable-fields' : ''])
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.head), 1 /* TEXT */),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_3, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_saturation, {
          value: _ctx.colors,
          onChange: $options.childChange
        }, null, 8 /* PROPS */, ["value", "onChange"])
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_4, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_hue, {
          value: _ctx.colors,
          onChange: $options.childChange,
          direction: "vertical"
        }, {
          default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
            photoshop_ced2b1e7_hoisted_5
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["value", "onChange"])
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['vc-ps-controls', $props.disableFields ? 'vc-ps-controls__disable-fields' : ''])
      }, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_6, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.newLabel), 1 /* TEXT */),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_8, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
              class: "vc-ps-previews__pr-color",
              "aria-label": `New color is ${_ctx.colors.hex}`,
              style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: _ctx.colors.hex})
            }, null, 12 /* STYLE, PROPS */, photoshop_ced2b1e7_hoisted_9),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
              class: "vc-ps-previews__pr-color",
              "aria-label": `Current color is ${$data.currentColor}`,
              style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: $data.currentColor}),
              onClick: _cache[0] || (_cache[0] = (...args) => ($options.clickCurrentColor && $options.clickCurrentColor(...args)))
            }, null, 12 /* STYLE, PROPS */, photoshop_ced2b1e7_hoisted_10)
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.currentLabel), 1 /* TEXT */)
        ]),
        (!$props.disableFields)
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", photoshop_ced2b1e7_hoisted_12, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                class: "vc-ps-ac-btn",
                role: "button",
                "aria-label": $props.acceptLabel,
                onClick: _cache[1] || (_cache[1] = (...args) => ($options.handleAccept && $options.handleAccept(...args)))
              }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.acceptLabel), 9 /* TEXT, PROPS */, photoshop_ced2b1e7_hoisted_13),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                class: "vc-ps-ac-btn",
                role: "button",
                "aria-label": $props.cancelLabel,
                onClick: _cache[2] || (_cache[2] = (...args) => ($options.handleCancel && $options.handleCancel(...args)))
              }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.cancelLabel), 9 /* TEXT, PROPS */, photoshop_ced2b1e7_hoisted_14),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshop_ced2b1e7_hoisted_15, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" hsla "),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "h",
                  desc: "°",
                  value: $options.hsv.h,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "s",
                  desc: "%",
                  value: $options.hsv.s,
                  max: 100,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "v",
                  desc: "%",
                  value: $options.hsv.v,
                  max: 100,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"]),
                photoshop_ced2b1e7_hoisted_16,
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" rgba "),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "r",
                  value: _ctx.colors.rgba.r,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "g",
                  value: _ctx.colors.rgba.g,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "b",
                  value: _ctx.colors.rgba.b,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"]),
                photoshop_ced2b1e7_hoisted_17,
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" hex "),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "#",
                  class: "vc-ps-fields__hex",
                  value: $options.hex,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "onChange"])
              ]),
              ($props.hasResetButton)
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                    key: 0,
                    class: "vc-ps-ac-btn",
                    "aria-label": "reset",
                    onClick: _cache[3] || (_cache[3] = (...args) => ($options.handleReset && $options.handleReset(...args)))
                  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.resetLabel), 1 /* TEXT */))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
            ]))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
      ], 2 /* CLASS */)
    ])
  ], 2 /* CLASS */))
}

var photoshop_ced2b1e7_css_248z = ".vc-photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;font-family:Roboto;width:513px}.vc-photoshop__disable-fields{width:390px}.vc-ps-head{background-image:linear-gradient(-180deg,#f0f0f0,#d4d4d4);border-bottom:1px solid #b1b1b1;border-radius:4px 4px 0 0;box-shadow:inset 0 1px 0 0 rgba(255,255,255,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);color:#4d4d4d;font-size:13px;height:23px;line-height:24px;text-align:center}.vc-ps-body{display:flex;padding:15px}.vc-ps-saturation-wrap{border:2px solid #b3b3b3;border-bottom-color:#f0f0f0;height:256px;overflow:hidden;position:relative;width:256px}.vc-ps-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-ps-hue-wrap{border:2px solid #b3b3b3;border-bottom-color:#f0f0f0;height:256px;margin-left:10px;width:19px}.vc-ps-hue-pointer,.vc-ps-hue-wrap{position:relative}.vc-ps-hue-pointer--left,.vc-ps-hue-pointer--right{border-color:transparent transparent transparent #555;border-style:solid;border-width:5px 0 5px 8px;height:0;position:absolute;width:0}.vc-ps-hue-pointer--left:after,.vc-ps-hue-pointer--right:after{border-color:transparent transparent transparent #fff;border-style:solid;border-width:4px 0 4px 6px;content:\"\";height:0;left:1px;position:absolute;top:1px;transform:translate(-8px,-5px);width:0}.vc-ps-hue-pointer--left{transform:translate(-13px,-4px)}.vc-ps-hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vc-ps-controls{display:flex;margin-left:10px;width:180px}.vc-ps-controls__disable-fields{width:auto}.vc-ps-actions{flex:1;margin-left:20px}.vc-ps-ac-btn{background-image:linear-gradient(-180deg,#fff,#e6e6e6);border:1px solid #878787;border-radius:2px;box-shadow:0 1px 0 0 #eaeaea;color:#000;cursor:pointer;font-size:14px;height:20px;line-height:20px;margin-bottom:10px;text-align:center}.vc-ps-previews{width:60px}.vc-ps-previews__swatches{border:1px solid #b3b3b3;border-bottom-color:#f0f0f0;margin-bottom:2px;margin-top:1px}.vc-ps-previews__pr-color{box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000;height:34px}.vc-ps-previews__label{color:#000;font-size:14px;text-align:center}.vc-ps-fields{padding-bottom:9px;padding-top:5px;position:relative;width:80px}.vc-ps-fields .vc-input__input{border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;font-size:13px;height:18px;margin-bottom:5px;margin-left:40%;margin-right:10px;padding-left:3px;width:40%}.vc-ps-fields .vc-input__desc,.vc-ps-fields .vc-input__label{font-size:13px;height:18px;line-height:22px;position:absolute;text-transform:uppercase;top:0}.vc-ps-fields .vc-input__label{left:0;width:34px}.vc-ps-fields .vc-input__desc{right:0;width:0}.vc-ps-fields__divider{height:5px}.vc-ps-fields__hex .vc-input__input{border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;font-size:13px;height:18px;margin-bottom:6px;margin-left:20%;padding-left:3px;width:80%}.vc-ps-fields__hex .vc-input__label{font-size:13px;height:18px;left:0;line-height:22px;position:absolute;text-transform:uppercase;top:0;width:14px}";
styleInject(photoshop_ced2b1e7_css_248z);

photoshop_ced2b1e7_script.render = photoshop_ced2b1e7_render;
photoshop_ced2b1e7_script.__file = "src/components/photoshop/photoshop.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/sketch-a5dac205.js









const presetColors = [
  '#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321',
  '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2',
  '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF',
  'rgba(0,0,0,0)',
];

var sketch_a5dac205_script = {
  name: 'Sketch',
  mixins: [colorMixin],
  components: {
    saturation: saturation_vue_vue_type_script_lang_21393dc5["a" /* s */],
    hue: script,
    alpha: alpha_vue_vue_type_script_lang_2d93adbb_script,
    'ed-in': editable_input_vue_vue_type_script_lang_2fa3c262_script,
    checkboard: checkboard_becfb723_script,
  },
  props: {
    presetColors: {
      type: Array,
      default() {
        return presetColors;
      },
    },
    disableAlpha: {
      type: Boolean,
      default: false,
    },
    disableFields: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hex() {
      let hex;
      if (this.colors.a < 1) {
        hex = this.colors.hex8;
      } else {
        hex = this.colors.hex;
      }
      return hex.replace('#', '');
    },
    activeColor() {
      const { rgba } = this.colors;
      return `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(',')})`;
    },
  },
  methods: {
    handlePreset(c) {
      this.colorChange({
        hex: c,
        source: 'hex',
      });
    },
    childChange(data) {
      this.colorChange(data);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        this.isValidHex(data.hex) && this.colorChange({
          hex: data.hex,
          source: 'hex',
        });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: 'rgba',
        });
      }
    },
  },
};

const sketch_a5dac205_hoisted_1 = { class: "vc-sketch-saturation-wrap" };
const sketch_a5dac205_hoisted_2 = { class: "vc-sketch-controls" };
const sketch_a5dac205_hoisted_3 = { class: "vc-sketch-sliders" };
const sketch_a5dac205_hoisted_4 = { class: "vc-sketch-hue-wrap" };
const sketch_a5dac205_hoisted_5 = {
  key: 0,
  class: "vc-sketch-alpha-wrap"
};
const sketch_a5dac205_hoisted_6 = { class: "vc-sketch-color-wrap" };
const sketch_a5dac205_hoisted_7 = ["aria-label"];
const sketch_a5dac205_hoisted_8 = {
  key: 0,
  class: "vc-sketch-field"
};
const sketch_a5dac205_hoisted_9 = { class: "vc-sketch-field--double" };
const sketch_a5dac205_hoisted_10 = { class: "vc-sketch-field--single" };
const sketch_a5dac205_hoisted_11 = { class: "vc-sketch-field--single" };
const sketch_a5dac205_hoisted_12 = { class: "vc-sketch-field--single" };
const sketch_a5dac205_hoisted_13 = {
  key: 0,
  class: "vc-sketch-field--single"
};
const sketch_a5dac205_hoisted_14 = {
  class: "vc-sketch-presets",
  role: "group",
  "aria-label": "A color preset, pick one to set as current color"
};
const sketch_a5dac205_hoisted_15 = ["aria-label", "onClick"];
const sketch_a5dac205_hoisted_16 = ["aria-label", "onClick"];

function sketch_a5dac205_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_saturation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("saturation");
  const _component_hue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("hue");
  const _component_alpha = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("alpha");
  const _component_checkboard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("checkboard");
  const _component_ed_in = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ed-in");

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    role: "application",
    "aria-label": "Sketch color picker",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['vc-sketch', $props.disableAlpha ? 'vc-sketch__disable-alpha' : ''])
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_1, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_saturation, {
        value: _ctx.colors,
        onChange: $options.childChange
      }, null, 8 /* PROPS */, ["value", "onChange"])
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_3, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_4, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_hue, {
            value: _ctx.colors,
            onChange: $options.childChange
          }, null, 8 /* PROPS */, ["value", "onChange"])
        ]),
        (!$props.disableAlpha)
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", sketch_a5dac205_hoisted_5, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_alpha, {
                value: _ctx.colors,
                onChange: $options.childChange
              }, null, 8 /* PROPS */, ["value", "onChange"])
            ]))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_6, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
          "aria-label": `Current color is ${$options.activeColor}`,
          class: "vc-sketch-active-color",
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: $options.activeColor})
        }, null, 12 /* STYLE, PROPS */, sketch_a5dac205_hoisted_7),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_checkboard)
      ])
    ]),
    (!$props.disableFields)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", sketch_a5dac205_hoisted_8, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])(" rgba "),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_9, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
              label: "hex",
              value: $options.hex,
              onChange: $options.inputChange
            }, null, 8 /* PROPS */, ["value", "onChange"])
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_10, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
              label: "r",
              value: _ctx.colors.rgba.r,
              onChange: $options.inputChange
            }, null, 8 /* PROPS */, ["value", "onChange"])
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_11, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
              label: "g",
              value: _ctx.colors.rgba.g,
              onChange: $options.inputChange
            }, null, 8 /* PROPS */, ["value", "onChange"])
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_12, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
              label: "b",
              value: _ctx.colors.rgba.b,
              onChange: $options.inputChange
            }, null, 8 /* PROPS */, ["value", "onChange"])
          ]),
          (!$props.disableAlpha)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", sketch_a5dac205_hoisted_13, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "a",
                  value: _ctx.colors.a,
                  "arrow-offset": 0.01,
                  max: 1,
                  onChange: $options.inputChange
                }, null, 8 /* PROPS */, ["value", "arrow-offset", "onChange"])
              ]))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketch_a5dac205_hoisted_14, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.presetColors, (c) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [
          (!_ctx.isTransparent(c))
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                key: `!${c}`,
                class: "vc-sketch-presets-color",
                "aria-label": 'Color:' + c,
                style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: c}),
                onClick: $event => ($options.handlePreset(c))
              }, null, 12 /* STYLE, PROPS */, sketch_a5dac205_hoisted_15))
            : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                key: c,
                "aria-label": 'Color:' + c,
                class: "vc-sketch-presets-color",
                onClick: $event => ($options.handlePreset(c))
              }, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_checkboard)
              ], 8 /* PROPS */, sketch_a5dac205_hoisted_16))
        ], 64 /* STABLE_FRAGMENT */))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ], 2 /* CLASS */))
}

var sketch_a5dac205_css_248z = ".vc-sketch{background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;padding:10px 10px 0;position:relative;width:200px}.vc-sketch-saturation-wrap{overflow:hidden;padding-bottom:75%;position:relative;width:100%}.vc-sketch-controls{display:flex}.vc-sketch-sliders{flex:1;padding:4px 0}.vc-sketch-sliders .vc-alpha-gradient,.vc-sketch-sliders .vc-hue{border-radius:2px}.vc-sketch-alpha-wrap,.vc-sketch-hue-wrap{height:10px;position:relative}.vc-sketch-alpha-wrap{margin-top:4px;overflow:hidden}.vc-sketch-color-wrap{border-radius:3px;height:24px;margin-left:4px;margin-top:4px;position:relative;width:24px}.vc-sketch-active-color{border-radius:2px;bottom:0;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);left:0;position:absolute;right:0;top:0;z-index:2}.vc-sketch-color-wrap .vc-checkerboard{background-size:auto}.vc-sketch-field{display:flex;padding-top:4px}.vc-sketch-field .vc-input__input{border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px;padding:4px 0 3px 10%;width:90%}.vc-sketch-field .vc-input__label{color:#222;display:block;font-size:11px;padding-bottom:4px;padding-top:3px;text-align:center;text-transform:capitalize}.vc-sketch-field--single{flex:1;padding-left:6px}.vc-sketch-field--double{flex:2}.vc-sketch-presets{border-top:1px solid #eee;margin-left:-10px;margin-right:-10px;padding-left:10px;padding-top:10px}.vc-sketch-presets-color{cursor:pointer;display:inline-block;height:16px;margin:0 10px 10px 0;overflow:hidden;position:relative;vertical-align:top;width:16px}.vc-sketch-presets-color,.vc-sketch-presets-color .vc-checkerboard{border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vc-sketch__disable-alpha .vc-sketch-color-wrap{height:10px}";
styleInject(sketch_a5dac205_css_248z);

sketch_a5dac205_script.render = sketch_a5dac205_render;
sketch_a5dac205_script.__file = "src/components/sketch/sketch.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/slider-6ea781df.js





const DEFAULT_SATURATION = 0.5;

var slider_6ea781df_script = {
  name: 'Slider',
  mixins: [colorMixin],
  props: {
    swatches: {
      type: Array,
      default() {
        // also accepts: ['.80', '.65', '.50', '.35', '.20']
        return [
          { s: DEFAULT_SATURATION, l: 0.8 },
          { s: DEFAULT_SATURATION, l: 0.65 },
          { s: DEFAULT_SATURATION, l: 0.5 },
          { s: DEFAULT_SATURATION, l: 0.35 },
          { s: DEFAULT_SATURATION, l: 0.2 },
        ];
      },
    },
  },
  components: {
    hue: script,
  },
  computed: {
    normalizedSwatches() {
      const { swatches } = this;
      return swatches.map((swatch) => {
        // to be compatible with another data format ['.80', '.65', '.50', '.35', '.20']
        if (typeof swatch !== 'object') {
          return {
            s: DEFAULT_SATURATION,
            l: swatch,
          };
        }
        return swatch;
      });
    },
  },
  methods: {
    isActive(swatch, index) {
      const { hsl } = this.colors;
      if (hsl.l === 1 && swatch.l === 1) {
        return true;
      }
      if (hsl.l === 0 && swatch.l === 0) {
        return true;
      }
      return (
        Math.abs(hsl.l - swatch.l) < 0.01 && Math.abs(hsl.s - swatch.s) < 0.01
      );
    },
    hueChange(data) {
      this.colorChange(data);
    },
    handleSwClick(index, swatch) {
      this.colorChange({
        h: this.colors.hsl.h,
        s: swatch.s,
        l: swatch.l,
        source: 'hsl',
      });
    },
  },
};

const slider_6ea781df_hoisted_1 = {
  role: "application",
  "aria-label": "Slider color picker",
  class: "vc-slider"
};
const slider_6ea781df_hoisted_2 = { class: "vc-slider-hue-warp" };
const slider_6ea781df_hoisted_3 = {
  class: "vc-slider-swatches",
  role: "group"
};
const slider_6ea781df_hoisted_4 = ["data-index", "aria-label", "onClick"];

function slider_6ea781df_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("hue");

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", slider_6ea781df_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", slider_6ea781df_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_hue, {
        value: _ctx.colors,
        onChange: $options.hueChange
      }, null, 8 /* PROPS */, ["value", "onChange"])
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", slider_6ea781df_hoisted_3, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.normalizedSwatches, (swatch, index) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
          class: "vc-slider-swatch",
          key: index,
          "data-index": index,
          "aria-label": 'color:' + _ctx.colors.hex,
          role: "button",
          onClick: $event => ($options.handleSwClick(index, swatch))
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
            class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vc-slider-swatch-picker", {'vc-slider-swatch-picker--active': $options.isActive(swatch, index), 'vc-slider-swatch-picker--white': swatch.l === 1}]),
            style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: 'hsl(' + _ctx.colors.hsl.h + ', ' + swatch.s * 100 + '%, ' + swatch.l * 100 + '%)'})
          }, null, 6 /* CLASS, STYLE */)
        ], 8 /* PROPS */, slider_6ea781df_hoisted_4))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

var slider_6ea781df_css_248z = ".vc-slider{position:relative;width:410px}.vc-slider-hue-warp{height:12px;position:relative}.vc-slider-hue-warp .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:14px;transform:translate(-7px,-2px);width:14px}.vc-slider-swatches{display:flex;margin-top:20px}.vc-slider-swatch{flex:1;margin-right:1px;width:20%}.vc-slider-swatch:first-child{margin-right:1px}.vc-slider-swatch:first-child .vc-slider-swatch-picker{border-radius:2px 0 0 2px}.vc-slider-swatch:last-child{margin-right:0}.vc-slider-swatch:last-child .vc-slider-swatch-picker{border-radius:0 2px 2px 0}.vc-slider-swatch-picker{cursor:pointer;height:12px}.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active{border-radius:3.6px/2px;transform:scaleY(1.8)}.vc-slider-swatch-picker--white{box-shadow:inset 0 0 0 1px #ddd}.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white{box-shadow:inset 0 0 0 .6px #ddd}";
styleInject(slider_6ea781df_css_248z);

slider_6ea781df_script.render = slider_6ea781df_render;
slider_6ea781df_script.__file = "src/components/slider/slider.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/swatches-4592a1a4.js




var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

var material = {
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
};

const colorMap = [
  'red', 'pink', 'purple', 'deepPurple',
  'indigo', 'blue', 'lightBlue', 'cyan',
  'teal', 'green', 'lightGreen', 'lime',
  'yellow', 'amber', 'orange', 'deepOrange',
  'brown', 'blueGrey', 'black',
];
const colorLevel = ['900', '700', '500', '300', '100'];
const swatches_4592a1a4_defaultColors = (() => {
  const colors = [];
  colorMap.forEach((type) => {
    let typeColor = [];
    if (type.toLowerCase() === 'black' || type.toLowerCase() === 'white') {
      typeColor = typeColor.concat(['#000000', '#FFFFFF']);
    } else {
      colorLevel.forEach((level) => {
        const color = material[type][level];
        typeColor.push(color.toUpperCase());
      });
    }
    colors.push(typeColor);
  });
  return colors;
})();

var swatches_4592a1a4_script = {
  name: 'Swatches',
  mixins: [colorMixin],
  props: {
    palette: {
      type: Array,
      default() {
        return swatches_4592a1a4_defaultColors;
      },
    },
  },
  computed: {
    pick() {
      return this.colors.hex;
    },
  },
  methods: {
    equal(color) {
      return color.toLowerCase() === this.colors.hex.toLowerCase();
    },
    handlerClick(c) {
      this.colorChange({
        hex: c,
        source: 'hex',
      });
    },
  },

};

const swatches_4592a1a4_hoisted_1 = ["data-pick"];
const swatches_4592a1a4_hoisted_2 = {
  class: "vc-swatches-box",
  role: "listbox"
};
const swatches_4592a1a4_hoisted_3 = ["aria-label", "aria-selected", "data-color", "onClick"];
const swatches_4592a1a4_hoisted_4 = { class: "vc-swatches-pick" };
const swatches_4592a1a4_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", {
  style: {"width":"24px","height":"24px"},
  viewBox: "0 0 24 24"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
], -1 /* HOISTED */);
const swatches_4592a1a4_hoisted_6 = [
  swatches_4592a1a4_hoisted_5
];

function swatches_4592a1a4_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    role: "application",
    "aria-label": "Swatches color picker",
    class: "vc-swatches",
    "data-pick": $options.pick
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", swatches_4592a1a4_hoisted_2, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.palette, (group, $idx) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
          class: "vc-swatches-color-group",
          key: $idx
        }, [
          (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(group, (c) => {
            return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
              class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['vc-swatches-color-it', {'vc-swatches-color--white': c === '#FFFFFF' }]),
              role: "option",
              "aria-label": 'Color:' + c,
              "aria-selected": $options.equal(c),
              key: c,
              "data-color": c,
              style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({background: c}),
              onClick: $event => ($options.handlerClick(c))
            }, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", swatches_4592a1a4_hoisted_4, swatches_4592a1a4_hoisted_6, 512 /* NEED_PATCH */), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $options.equal(c)]
              ])
            ], 14 /* CLASS, STYLE, PROPS */, swatches_4592a1a4_hoisted_3))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 8 /* PROPS */, swatches_4592a1a4_hoisted_1))
}

var swatches_4592a1a4_css_248z = ".vc-swatches{background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);height:240px;overflow-y:scroll;width:320px}.vc-swatches-box{overflow:hidden;padding:16px 0 6px 16px}.vc-swatches-color-group{float:left;margin-right:10px;padding-bottom:10px;width:40px}.vc-swatches-color-it{background:#880e4f;-ms-border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-o-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;border-radius:2px 2px 0 0;box-sizing:border-box;cursor:pointer;height:24px;margin-bottom:1px;overflow:hidden;width:40px}.vc-swatches-color--white{border:1px solid #ddd}.vc-swatches-pick{fill:#fff;display:block;margin-left:8px}.vc-swatches-color--white .vc-swatches-pick{fill:#333}";
styleInject(swatches_4592a1a4_css_248z);

swatches_4592a1a4_script.render = swatches_4592a1a4_render;
swatches_4592a1a4_script.__file = "src/components/swatches/swatches.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/twitter-1481a12e.js





const twitter_1481a12e_defaultColors = [
  '#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3',
  '#EB144C', '#F78DA7', '#9900EF',
];

var twitter_1481a12e_script = {
  name: 'Twitter',
  mixins: [colorMixin],
  components: {
    editableInput: editable_input_vue_vue_type_script_lang_2fa3c262_script,
  },
  props: {
    width: {
      type: [String, Number],
      default: 276,
    },
    defaultColors: {
      type: Array,
      default() {
        return twitter_1481a12e_defaultColors;
      },
    },
    triangle: {
      default: 'top-left',
      validator(value) {
        return ['hide', 'top-left', 'top-right'].includes(value);
      },
    },
  },
  computed: {
    hsv() {
      const { hsv } = this.colors;
      return {
        h: hsv.h.toFixed(),
        s: (hsv.s * 100).toFixed(),
        v: (hsv.v * 100).toFixed(),
      };
    },
    hex() {
      const { hex } = this.colors;
      return hex && hex.replace('#', '');
    },
  },
  methods: {
    equal(color) {
      return color.toLowerCase() === this.colors.hex.toLowerCase();
    },
    handlerClick(color) {
      this.colorChange({
        hex: color,
        source: 'hex',
      });
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data['#']) {
        this.isValidHex(data['#']) && this.colorChange({
          hex: data['#'],
          source: 'hex',
        });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: 'rgba',
        });
      } else if (data.h || data.s || data.v) {
        this.colorChange({
          h: data.h || this.colors.hsv.h,
          s: (data.s / 100) || this.colors.hsv.s,
          v: (data.v / 100) || this.colors.hsv.v,
          source: 'hsv',
        });
      }
    },
  },
};

const twitter_1481a12e_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-twitter-triangle-shadow" }, null, -1 /* HOISTED */);
const twitter_1481a12e_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-twitter-triangle" }, null, -1 /* HOISTED */);
const twitter_1481a12e_hoisted_3 = { class: "vc-twitter-body" };
const twitter_1481a12e_hoisted_4 = ["onClick"];
const twitter_1481a12e_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-twitter-hash" }, "#", -1 /* HOISTED */);
const twitter_1481a12e_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-twitter-clear" }, null, -1 /* HOISTED */);

function twitter_1481a12e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_editable_input = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("editable-input");

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vc-twitter", {
      'vc-twitter-hide-triangle ': $props.triangle === 'hide',
      'vc-twitter-top-left-triangle ': $props.triangle === 'top-left',
      'vc-twitter-top-right-triangle ': $props.triangle === 'top-right',
    }]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      width: typeof $props.width === 'number' ? `${$props.width}px` : $props.width
    })
  }, [
    twitter_1481a12e_hoisted_1,
    twitter_1481a12e_hoisted_2,
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", twitter_1481a12e_hoisted_3, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.defaultColors, (color, index) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
          class: "vc-twitter-swatch",
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          background: color,
          boxShadow: `0 0 4px ${ $options.equal(color) ? color : 'transparent' }`,
        }),
          key: index,
          onClick: $event => ($options.handlerClick(color))
        }, null, 12 /* STYLE, PROPS */, twitter_1481a12e_hoisted_4))
      }), 128 /* KEYED_FRAGMENT */)),
      twitter_1481a12e_hoisted_5,
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_editable_input, {
        label: "#",
        value: $options.hex,
        onChange: $options.inputChange
      }, null, 8 /* PROPS */, ["value", "onChange"]),
      twitter_1481a12e_hoisted_6
    ])
  ], 6 /* CLASS, STYLE */))
}

var twitter_1481a12e_css_248z = ".vc-twitter{background:#fff;border:0 solid rgba(0,0,0,.25);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.25);position:relative}.vc-twitter-triangle{border-color:transparent transparent #fff}.vc-twitter-triangle,.vc-twitter-triangle-shadow{border-style:solid;border-width:0 9px 10px;height:0;position:absolute;width:0}.vc-twitter-triangle-shadow{border-color:transparent transparent rgba(0,0,0,.1)}.vc-twitter-body{padding:15px 9px 9px 15px}.vc-twitter .vc-editable-input{position:relative}.vc-twitter .vc-editable-input input{border:0;border-radius:0 4px 4px 0;box-shadow:inset 0 0 0 1px #f0f0f0;box-sizing:content-box;color:#666;float:left;font-size:14px;height:28px;outline:none;padding:1px 1px 1px 8px;width:100px}.vc-twitter .vc-editable-input span{display:none}.vc-twitter-hash{align-items:center;background:#f0f0f0;border-radius:4px 0 0 4px;color:#98a1a4;display:flex;float:left;height:30px;justify-content:center;width:30px}.vc-twitter-swatch{border-radius:4px;cursor:pointer;float:left;height:30px;margin:0 6px 6px 0;outline:none;position:relative;width:30px}.vc-twitter-clear{clear:both}.vc-twitter-hide-triangle .vc-twitter-triangle,.vc-twitter-hide-triangle .vc-twitter-triangle-shadow{display:none}.vc-twitter-top-left-triangle .vc-twitter-triangle{left:12px;top:-10px}.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{left:12px;top:-11px}.vc-twitter-top-right-triangle .vc-twitter-triangle{right:12px;top:-10px}.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{right:12px;top:-11px}";
styleInject(twitter_1481a12e_css_248z);

twitter_1481a12e_script.render = twitter_1481a12e_render;
twitter_1481a12e_script.__file = "src/components/twitter/twitter.vue";



// CONCATENATED MODULE: ./node_modules/@ckpack/vue-color/libs/components.js




































/* Do not modify the automatically generated code */

const components = [
  alpha_vue_vue_type_script_lang_2d93adbb_script,
  checkboard_becfb723_script,
  chrome_5d1f1dd6_script,
  compact_939a0aae_script,
  editable_input_vue_vue_type_script_lang_2fa3c262_script,
  grayscale_9405cceb_script,
  script,
  material_c7e5e70f_script,
  photoshop_ced2b1e7_script,
  saturation_vue_vue_type_script_lang_21393dc5["a" /* s */],
  sketch_a5dac205_script,
  slider_6ea781df_script,
  swatches_4592a1a4_script,
  twitter_1481a12e_script,
];



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarButtonColor.vue?vue&type=script&lang=js



/* harmony default export */ var BarButtonColorvue_type_script_lang_js = ({
  mixins: [BarButtonGeneric],
  components: components.reduce(function (acc, cur) {
    acc[cur.name] = cur;
    return acc;
  }, {}),
  data: function data() {
    return {
      color: this.item.color
    };
  },
  computed: {
    is_menu: function is_menu() {
      return true;
    },
    css_color: function css_color() {
      return this.color.hex8 || this.color || "#000";
    }
  },
  methods: {
    mousedown_handler: function mousedown_handler(e) {
      // prevent loosing current text selection, unless the user clicks on an <input> of the color box
      if (e.target.tagName.toLowerCase() != 'input') e.preventDefault();
    }
  },
  watch: {
    "item.color": function itemColor(item_color) {
      if (this.color != item_color) {
        this._prevent_next_color_update = true;
        this.color = item_color;
      }
    },
    color: function color(new_color) {
      if (this.item.update_color && !this._prevent_next_color_update) {
        this.item.update_color(new_color);
      }

      this._prevent_next_color_update = false;
    }
  }
});
// CONCATENATED MODULE: ./src/Bar/BarButtonColor.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/Bar/BarButtonColor.vue?vue&type=style&index=0&id=f094c3d0&scoped=true&lang=css
var BarButtonColorvue_type_style_index_0_id_f094c3d0_scoped_true_lang_css = __webpack_require__("6450");

// CONCATENATED MODULE: ./src/Bar/BarButtonColor.vue





BarButtonColorvue_type_script_lang_js.render = BarButtonColorvue_type_template_id_f094c3d0_scoped_true_render
BarButtonColorvue_type_script_lang_js.__scopeId = "data-v-f094c3d0"

/* harmony default export */ var BarButtonColor = (BarButtonColorvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarSeparator.vue?vue&type=template&id=e81e3406

var BarSeparatorvue_type_template_id_e81e3406_hoisted_1 = {
  class: "bar-separator"
};
function BarSeparatorvue_type_template_id_e81e3406_render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BarSeparatorvue_type_template_id_e81e3406_hoisted_1);
}
// CONCATENATED MODULE: ./src/Bar/BarSeparator.vue?vue&type=template&id=e81e3406

// CONCATENATED MODULE: ./src/Bar/BarSeparator.vue

const BarSeparator_script = {}
BarSeparator_script.render = BarSeparatorvue_type_template_id_e81e3406_render

/* harmony default export */ var BarSeparator = (BarSeparator_script);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/BarSpacer.vue?vue&type=template&id=61af09ed

var BarSpacervue_type_template_id_61af09ed_hoisted_1 = {
  class: "bar-spacer"
};
function BarSpacervue_type_template_id_61af09ed_render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BarSpacervue_type_template_id_61af09ed_hoisted_1);
}
// CONCATENATED MODULE: ./src/Bar/BarSpacer.vue?vue&type=template&id=61af09ed

// CONCATENATED MODULE: ./src/Bar/BarSpacer.vue

const BarSpacer_script = {}
BarSpacer_script.render = BarSpacervue_type_template_id_61af09ed_render

/* harmony default export */ var BarSpacer = (BarSpacer_script);
// EXTERNAL MODULE: ./node_modules/material-icons/iconfont/material-icons.css
var material_icons = __webpack_require__("c789");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Bar/Bar.vue?vue&type=script&lang=js






/* harmony default export */ var Barvue_type_script_lang_js = ({
  components: {
    BarButtonGeneric: BarButtonGeneric,
    BarButtonColor: BarButtonColor,
    BarSeparator: BarSeparator,
    BarSpacer: BarSpacer
  },
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      menu_open: false
    };
  },
  methods: {
    clickaway: function clickaway(e) {
      if (!this.$el.contains(e.target)) this.menu_open = false;
    },
    toggle_menu: function toggle_menu(item, event) {
      event.stopPropagation();
      var touch = event.sourceCapabilities && event.sourceCapabilities.firesTouchEvents;
      this.menu_open = item._el.is_menu && !item.disabled ? touch ? true : !this.menu_open : false;
    },
    get_component: function get_component(is) {
      if (is && !Array.isArray(is) && Object(esm_typeof["a" /* default */])(is) == "object") return is; // if component
      else if (typeof is == "string") return "bar-" + is;else return "bar-button-generic";
    }
  },
  mounted: function mounted() {
    document.addEventListener("click", this.clickaway);
  },
  beforeUnmount: function beforeUnmount() {
    document.removeEventListener("click", this.clickaway);
  }
});
// CONCATENATED MODULE: ./src/Bar/Bar.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/Bar/Bar.vue?vue&type=style&index=0&id=50936cc6&lang=scss&scoped=true
var Barvue_type_style_index_0_id_50936cc6_lang_scss_scoped_true = __webpack_require__("a6bf");

// CONCATENATED MODULE: ./src/Bar/Bar.vue





Barvue_type_script_lang_js.render = render
Barvue_type_script_lang_js.__scopeId = "data-v-50936cc6"

/* harmony default export */ var Bar = (Barvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Bar);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=VueFileToolbarMenu.umd.js.map