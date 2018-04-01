/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks

  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)
  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)
  var easing = void 0; // easing function                        (function)
  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)
  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)
  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)

  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  }

  // element offset helper

  function top(element) {
    return element.getBoundingClientRect().top + start;
  }

  // rAF loop helper

  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    }

    // determine time spent scrolling so far
    timeElapsed = timeCurrent - timeStart;

    // calculate next scroll position
    next = easing(timeElapsed, start, distance, duration);

    // scroll to it
    window.scrollTo(0, next);

    // check progress
    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  }

  // scroll finished helper

  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance);

    // if scrolling to an element, and accessibility is enabled
    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1');

      // focus the element
      element.focus();
    }

    // if it exists, fire the callback
    if (typeof callback === 'function') {
      callback();
    }

    // reset time for next jump
    timeStart = false;
  }

  // API

  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // resolve options, or use defaults
    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;

    // cache starting position
    start = location();

    // resolve target
    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to
        a11y = false; // make sure accessibility is off
        stop = start + target;
        break;

      // scroll to element (node)
      // bounding rect is relative to the viewport
      case 'object':
        element = target;
        stop = top(element);
        break;

      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // resolve duration
    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;

      // function passed the distance of the scroll
      case 'function':
        duration = options.duration(distance);
        break;
    }

    // start the loop
    window.requestAnimationFrame(loop);
  }

  // expose only the jump method
  return jump;
};

// export singleton

var singleton = jumper();

/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Import Jump.js.

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jump = __webpack_require__(0);

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Clicked Floating Button Functions.
var floatings = function floatings() {
  var flagTarget = document.body;
  var floatingTranslate = document.querySelector('.fn-button-floating-translate');
  var targetTranslate = document.querySelector('.link-translate-wrapper');
  var floatingPageTop = document.querySelector('.fn-button-floating-page-top');
  floatingTranslate.addEventListener('click', function (event) {
    event.stopPropagation();
    targetTranslate.classList.toggle('is-active');
  });
  floatingTranslate.addEventListener('mouseover', function () {
    var flagDevice = flagTarget.classList.contains('sp');
    if (!flagDevice) {
      targetTranslate.classList.add('is-active');
    }
  });
  floatingTranslate.addEventListener('mouseout', function () {
    var flagDevice = flagTarget.classList.contains('sp');
    if (!flagDevice) {
      targetTranslate.classList.remove('is-active');
    }
  });
  floatingPageTop.addEventListener('click', function () {
    var clsCheck = floatingPageTop.classList.contains('is-scroll-top');
    if (clsCheck) {
      (0, _jump2.default)('.fn-scroll-top');
    }
  });
};exports.default = floatings;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Introduction Functions.

Object.defineProperty(exports, "__esModule", {
  value: true
});
var introductions = function introductions() {

  var flagTarget = document.body;
  var flagEN = flagTarget.classList.contains('en');
  var flagCN = flagTarget.classList.contains('cn');

  // Displayed Heading Functions.
  var intro01 = function intro01(callBack) {
    var target = document.querySelectorAll('.fn-txt-heading02-1');
    var tLen = target.length;
    if (flagEN) {
      var _loop = function _loop(i) {
        setTimeout(function () {
          target[i].classList.add('is-active');
        }, i * 15);
      };

      for (var i = 0; i < tLen; i++) {
        _loop(i);
      }
      callBack();
    } else if (flagCN) {
      var _loop2 = function _loop2(i) {
        setTimeout(function () {
          target[i].classList.add('is-active');
        }, i * 30);
      };

      for (var i = 0; i < tLen; i++) {
        _loop2(i);
      }
      callBack();
    } else {
      var _loop3 = function _loop3(i) {
        setTimeout(function () {
          target[i].classList.add('is-active');
        }, i * 30);
      };

      for (var i = 0; i < tLen; i++) {
        _loop3(i);
      }
      callBack();
    }
  };

  // Displayed Letters Background Functions.
  var intro02 = function intro02(callBack) {
    var target = document.querySelectorAll('.fn-letters-inner');
    var tLen = target.length;
    if (flagEN) {
      setTimeout(function () {
        for (var i = 0; i < tLen; i++) {
          target[i].classList.add('is-active');
        }
        callBack();
      }, 525);
    } else if (flagCN) {
      setTimeout(function () {
        for (var i = 0; i < tLen; i++) {
          target[i].classList.add('is-active');
        }
        callBack();
      }, 700);
    } else {
      setTimeout(function () {
        for (var i = 0; i < tLen; i++) {
          target[i].classList.add('is-active');
        }
        callBack();
      }, 800);
    }
  };

  // Displayed Letters Functions.
  var intro03 = function intro03(callBack) {
    var target01 = document.querySelectorAll('.fn-txt-letters-pc');
    var tLen01 = target01.length;
    var target02 = document.querySelectorAll('.fn-txt-letters-sp');
    var tLen02 = target02.length;
    if (flagEN) {
      setTimeout(function () {
        var _loop4 = function _loop4(i) {
          setTimeout(function () {
            target01[i].classList.add('is-active');
          }, i * 30);
        };

        for (var i = 0; i < tLen01; i++) {
          _loop4(i);
        }

        var _loop5 = function _loop5(i) {
          setTimeout(function () {
            target02[i].classList.add('is-active');
          }, i * 30);
        };

        for (var i = 0; i < tLen02; i++) {
          _loop5(i);
        }
        callBack();
      }, 850);
    } else if (flagCN) {
      setTimeout(function () {
        var _loop6 = function _loop6(i) {
          setTimeout(function () {
            target01[i].classList.add('is-active');
          }, i * 40);
        };

        for (var i = 0; i < tLen01; i++) {
          _loop6(i);
        }

        var _loop7 = function _loop7(i) {
          setTimeout(function () {
            target02[i].classList.add('is-active');
          }, i * 40);
        };

        for (var i = 0; i < tLen02; i++) {
          _loop7(i);
        }
        callBack();
      }, 850);
    } else {
      setTimeout(function () {
        var _loop8 = function _loop8(i) {
          setTimeout(function () {
            target01[i].classList.add('is-active');
          }, i * 40);
        };

        for (var i = 0; i < tLen01; i++) {
          _loop8(i);
        }

        var _loop9 = function _loop9(i) {
          setTimeout(function () {
            target02[i].classList.add('is-active');
          }, i * 40);
        };

        for (var i = 0; i < tLen02; i++) {
          _loop9(i);
        }
        callBack();
      }, 850);
    }
  };

  // Displayed Floating Button Functions.
  var intro04 = function intro04() {
    var target = document.querySelectorAll('.fn-button-floating');
    var targetLen = target.length;
    var flagDevice = flagTarget.classList.contains('sp');
    if (flagEN) {
      if (flagDevice) {
        setTimeout(function () {
          for (var i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active');
          }
        }, 8500);
      } else {
        setTimeout(function () {
          for (var i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active');
          }
        }, 13500);
      }
    } else if (flagCN) {
      if (flagDevice) {
        setTimeout(function () {
          for (var i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active');
          }
        }, 6125);
      } else {
        setTimeout(function () {
          for (var i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active');
          }
        }, 6125);
      }
    } else {
      if (flagDevice) {
        setTimeout(function () {
          for (var i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active');
          }
        }, 5250);
      } else {
        setTimeout(function () {
          for (var i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active');
          }
        }, 8100);
      }
    }
  };

  // Concatenate All Functions.
  setTimeout(function () {
    intro01(intro02.bind(null, intro03.bind(null, intro04.bind(null))));
  }, 1250);
};

exports.default = introductions;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Mail Validation.

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mailValidation = function mailValidation() {
  var button = document.querySelector('.fn-submit');
  var holder = document.querySelector('.fn-form-label');
  var txtfield = document.querySelector('.fn-txtfield');
  var target = document.querySelector('.fn-mail-val');
  var validation = /^[A-Za-z0-9]+[\w\.-]+@[\w\.-]+\.\w{2,}$/;
  var inTxt01 = '\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
  var inTxt02 = '\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
  var inTxtEN01 = 'Please comfirm in your email address';
  var inTxtEN02 = 'Please fill in your email address';
  var inTxtCN01 = '\u8BF7\u68C0\u67E5\u60A8\u7684\u90AE\u7BB1\u5730\u5740\u3002';
  var inTxtCN02 = '\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1\u5730\u5740\u3002';
  var flagTarget = document.body;
  var flagEN = flagTarget.classList.contains('en');
  var flagCN = flagTarget.classList.contains('cn');
  var coreFunc = function coreFunc(event) {
    var val = target.value;
    if (!val.match(validation)) {
      holder.innerText = flagEN ? inTxtEN01 : flagCN ? inTxtCN01 : inTxt01;
      txtfield.classList.add('is-disabled02');
      event.preventDefault();
    }
    if (val === '') {
      holder.innerText = flagEN ? inTxtEN02 : flagCN ? inTxtCN02 : inTxt02;
      txtfield.classList.add('is-disabled02');
      event.preventDefault();
    }
  };
  button.addEventListener('click', coreFunc, false);
};

exports.default = mailValidation;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thanks Message Functions.

Object.defineProperty(exports, "__esModule", {
  value: true
});
var message = function message() {
  var getURL = window.location.hash;
  var target = document.querySelector('.fn-thanks-message');
  var searchWord = '#completed_mail';
  if (getURL.indexOf(searchWord) > -1) {
    target.classList.add('is-active');
    window.history.replaceState(null, null, ' ');
    setTimeout(function () {
      target.classList.remove('is-active');
    }, 5000);
  }
};

exports.default = message;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Import Jump.js.

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jump = __webpack_require__(0);

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Anchor Link Scroll Functions.
var anchorLink = function anchorLink() {
  var target = document.querySelectorAll('.fn-anchor');
  var targetLen = target.length;

  var _loop = function _loop(i) {
    target[i].onclick = function (event) {
      var getAnchor = target[i].dataset.anchor;
      (0, _jump2.default)('.' + getAnchor);
      event.preventDefault();
    };
  };

  for (var i = 0; i < targetLen; i++) {
    _loop(i);
  }
};exports.default = anchorLink;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Around Scroll Functions.

Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkScroll = function checkScroll() {
  var coreFunc = function coreFunc() {
    var target01 = document.querySelector('.fn-button-floating-translate');
    var target02 = document.querySelector('.fn-button-floating-page-top');
    var target03 = document.querySelector('.fn-txt-scoll');
    var target04 = document.querySelector('.fn-angle-down');
    var target05 = document.querySelector('.fn-area-about');
    var target06 = document.querySelector('.fn-area-member');
    var target07 = document.querySelector('.fn-footer');
    var target08 = document.querySelector('.fn-anchor-link01');
    var target09 = document.querySelector('.fn-anchor-link02');
    var t05Offset = target05.getBoundingClientRect();
    var t06Offset = target06.getBoundingClientRect();
    var t07Offset = target07.getBoundingClientRect();
    var WH = window.innerHeight;
    if (t07Offset.top < WH) {
      target01.classList.add('is-page-top');
      target02.classList.add('is-scroll-top');
      target02.classList.add('is-page-top');
      target03.innerText = 'Page Top';
      target04.classList.remove('fa-angle-double-down');
      target04.classList.add('fa-angle-double-up');
    } else {
      target01.classList.remove('is-page-top');
      target02.classList.remove('is-scroll-top');
      target02.classList.remove('is-page-top');
      target03.innerText = 'Scroll';
      target04.classList.remove('fa-angle-double-up');
      target04.classList.add('fa-angle-double-down');
    }
    if (t05Offset.top <= 0 && t06Offset.top > 0) {
      target08.classList.add('is-current');
    } else {
      target08.classList.remove('is-current');
    }
    if (t06Offset.top <= 0) {
      target09.classList.add('is-current');
    } else {
      target09.classList.remove('is-current');
    }
  };
  window.addEventListener('scroll', coreFunc, false);
};

exports.default = checkScroll;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Add Flag on Body Functions.

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addFlag = function addFlag() {
  var target = document.body;
  var BP = 768;
  var coreFunc = function coreFunc() {
    var WW = window.innerWidth;
    if (WW >= BP) {
      target.classList.add('pc');
      target.classList.remove('sp');
    } else if (WW < BP) {
      target.classList.add('sp');
      target.classList.remove('pc');
    }
  };
  window.addEventListener('load', coreFunc, false);
  window.addEventListener('resize', coreFunc, false);
};

exports.default = addFlag;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Moive Contents Click Event Default Functions.

Object.defineProperty(exports, "__esModule", {
  value: true
});
var eventDefault = function eventDefault() {
  var target01 = document.querySelector('.fn-movie01');
  var target02 = document.querySelector('.fn-movie02');
  var coreFunc = function coreFunc(event) {
    event.preventDefault();
  };
  target01.addEventListener('click', coreFunc, false);
  target02.addEventListener('click', coreFunc, false);
};

exports.default = eventDefault;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  // AMD
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return factory(root);
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node.js or CommonJS
    module.exports = factory;
  } else {
    // Browser globals
    root.emergence = factory(root);
  }
})(this, function(root) {

  'use strict';

  var emergence = {};
  var poll, container, throttle, reset, handheld, elemCushion, offsetTop, offsetRight, offsetBottom, offsetLeft;
  var callback = function() {};

  // Browser feature test to include any browser APIs required for >= IE8
  // @return {bool} true if supported, otherwise false
  var cutsTheMustard = function() {
    return 'querySelectorAll' in document ? true : false;
  };

  // Checks if user is on a handheld
  // @return {bool} true if it's a handheld, otherwise false
  var isHandheld = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(
      navigator.userAgent
    );
  };

  // Get the offset of a DOM Element
  // @param {DOMElement} elem the container or element
  // @return {int} the top, left, width and height values in pixels
  var getElemOffset = function(elem) {

    // Width and height of container or element
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;

    // Default top and left position of container or element
    var topPos = 0;
    var leftPos = 0;

    // Get total distance of container or element to document's top and left origin
    do {
      if (!isNaN(elem.offsetTop)) {
        topPos += elem.offsetTop;
      }
      if (!isNaN(elem.offsetLeft)) {
        leftPos += elem.offsetLeft;
      }
    } while ((elem = elem.offsetParent) !== null);

    // Return dimensions and position
    return {
      width: w,
      height: h,
      top: topPos,
      left: leftPos
    };
  };

  // Get the custom container size if provided, otherwise the documents
  // @return {int} the width and height in pixels
  var getContainerSize = function(container) {
    var w, h;

    // If custom container is provided in options
    // Else use window or document
    if (container !== window) {
      w = container.clientWidth;
      h = container.clientHeight;
    } else {
      w = window.innerWidth || document.documentElement.clientWidth;
      h = window.innerHeight || document.documentElement.clientHeight;
    }

    return {
      width: w,
      height: h
    };
  };

  // Get the X and Y scroll positions
  // @return {int} the X and Y values in pixels
  var getContainerScroll = function(container) {

    // If custom container is provided in options
    // Else use window or document
    if (container !== window) {
      return {
        x: container.scrollLeft + getElemOffset(container).left,
        y: container.scrollTop + getElemOffset(container).top
      };
    } else {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
  };

  // Check if element's closest parent is hidden (display: none)
  // @param {DOMElement} elem the element
  // @return {bool} true if hidden, false otherwise
  var isHidden = function(elem) {
    return elem.offsetParent === null;
  };

  // Check if element is visible
  // @param {DOMElement} elem the element
  var isVisible = function(elem) {

    // Discontinue if element's closest parent is hidden
    if (isHidden(elem)) {
      return false;
    }

    // Get information from element and container
    var elemOffset = getElemOffset(elem);
    var containerSize = getContainerSize(container);
    var containerScroll = getContainerScroll(container);

    // Determine element size
    var elemWidth = elemOffset.width;
    var elemHeight = elemOffset.height;

    // Determine element position from rect points
    var elemTop = elemOffset.top;
    var elemLeft = elemOffset.left;
    var elemBottom = elemTop + elemHeight;
    var elemRight = elemLeft + elemWidth;

    // Determine boundaries of container and element
    // @return {bool} true if element is found within boundaries, otherwise false
    var checkBoundaries = function() {

      // Determine element boundaries including custom cushion
      var eTop = elemTop + elemHeight * elemCushion;
      var eRight = elemRight - elemWidth * elemCushion;
      var eBottom = elemBottom - elemHeight * elemCushion;
      var eLeft = elemLeft + elemWidth * elemCushion;

      // Determine container boundaries including custom offset
      var cTop = containerScroll.y + offsetTop;
      var cRight = containerScroll.x - offsetRight + containerSize.width;
      var cBottom = containerScroll.y - offsetBottom + containerSize.height;
      var cLeft = containerScroll.x + offsetLeft;

      return (eTop < cBottom && eBottom > cTop && eLeft < cRight && eRight > cLeft);
    };

    return checkBoundaries();
  };

  // Engage emergence through a throttling method for performance
  var emergenceThrottle = function() {
    if (!!poll) {
      return;
    }
    clearTimeout(poll);
    poll = setTimeout(function() {
      emergence.engage();
      poll = null;
    }, throttle);
  };

  // Initialize emergence with options, do feature test and create event listeners
  // @param {Object} options Custom settings
  emergence.init = function(options) {
    options = options || {};

    // Function to return an integer
    var optionInt = function(option, fallback) {
      return parseInt(option || fallback, 10);
    };

    // Function to return a floating point number
    var optionFloat = function(option, fallback) {
      return parseFloat(option || fallback);
    };

    // Default options
    container = options.container || window; // window or document by default
    reset = typeof options.reset !== 'undefined' ? options.reset : true; // true by default
    handheld = typeof options.handheld !== 'undefined' ? options.handheld : true; // true by default
    throttle = optionInt(options.throttle, 250); // 250 by default
    elemCushion = optionFloat(options.elemCushion, 0.15); // 0.15 by default
    offsetTop = optionInt(options.offsetTop, 0); // 0 by default
    offsetRight = optionInt(options.offsetRight, 0); // 0 by default
    offsetBottom = optionInt(options.offsetBottom, 0); // 0 by default
    offsetLeft = optionInt(options.offsetLeft, 0); // 0 by default
    callback = options.callback || callback;

    // If browser doesn't pass feature test
    if (!cutsTheMustard()) {

      // Provide message in console.log
      console.log('Emergence.js is not supported in this browser.');

    }
    // If this is handheld device AND handheld option is true
    // OR not a handheld device
    else if ((isHandheld() && handheld) || !isHandheld()) {

      // Add '.emergence' class to document for conditional CSS
      document.documentElement.className += ' emergence';

      // If browser supports addEventListener
      // Else use attachEvent
      if (window.addEventListener) {

        // Add event listeners for load, scroll and resize events
        window.addEventListener('load', emergenceThrottle, false);
        container.addEventListener('scroll', emergenceThrottle, false);
        container.addEventListener('resize', emergenceThrottle, false);

      } else {

        // Attach events for legacy load method, scroll and resize events
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState === 'complete') { emergenceThrottle(); }
        });
        container.attachEvent('onscroll', emergenceThrottle);
        container.attachEvent('onresize', emergenceThrottle);

      }
    }
  };

  // Engage emergence
  emergence.engage = function() {
    var nodes = document.querySelectorAll('[data-emergence]');
    var length = nodes.length;
    var elem;

    // Loop through objects with data-emergence attribute
    for (var i = 0; i < length; i++) {
      elem = nodes[i];

      // If element is visible
      if (isVisible(elem)) {

        // Change the state of the attribute to 'visible'
        elem.setAttribute('data-emergence', 'visible');

        // Hack to repaint attribute in IE8
        elem.className = elem.className;

        // Callback for when element is visible
        callback(elem, 'visible');

      } else if (reset === true) {

        // Else if element is hidden and reset
        // Change the state of the attribute to 'hidden'
        elem.setAttribute('data-emergence', 'hidden');

        // Hack to repaint attribute in IE8
        elem.className = elem.className;

        // Create callback
        callback(elem, 'reset');

      } else if (reset === false) {

        // Else if element is hidden and NOT reset
        // Create callback
        callback(elem, 'noreset');

      }
    }
    
    // If no data-emergence attributes are found
    // Disengage emergence
    if (!length) {
      emergence.disengage();
    }
  };

  // Disengage emergence
  emergence.disengage = function() {

    // If browser supports removeEventListener
    // Else use detachEvent
    if (window.removeEventListener) {

      // Remove event listeners scroll and resize events
      container.removeEventListener('scroll', emergenceThrottle, false);
      container.removeEventListener('resize', emergenceThrottle, false);

    } else {

      // Detach scroll and resize events
      container.detachEvent('onscroll', emergenceThrottle);
      container.detachEvent('onresize', emergenceThrottle);

    }

    // Clear timeout from throttle
    clearTimeout(poll);
  };

  return emergence;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(13);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Import Package Modules.

var _emergence = __webpack_require__(9);

var _emergence2 = _interopRequireDefault(_emergence);

var _modalVideo = __webpack_require__(10);

var _modalVideo2 = _interopRequireDefault(_modalVideo);

var _addFlag = __webpack_require__(7);

var _addFlag2 = _interopRequireDefault(_addFlag);

var _eventDefault = __webpack_require__(8);

var _eventDefault2 = _interopRequireDefault(_eventDefault);

var _introductions = __webpack_require__(2);

var _introductions2 = _interopRequireDefault(_introductions);

var _checkScroll = __webpack_require__(6);

var _checkScroll2 = _interopRequireDefault(_checkScroll);

var _anchorLink = __webpack_require__(5);

var _anchorLink2 = _interopRequireDefault(_anchorLink);

var _floatings = __webpack_require__(1);

var _floatings2 = _interopRequireDefault(_floatings);

var _mailValidation = __webpack_require__(3);

var _mailValidation2 = _interopRequireDefault(_mailValidation);

var _message = __webpack_require__(4);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// emergence.js Init.


// Import Modules.
_emergence2.default.init({ reset: false });

// Created Modal Video Instance.
new _modalVideo2.default('.js-modal-video');

// Require All Functions.
(0, _addFlag2.default)();
(0, _eventDefault2.default)();
(0, _introductions2.default)();
(0, _checkScroll2.default)();
(0, _anchorLink2.default)();
(0, _floatings2.default)();
(0, _mailValidation2.default)();
(0, _message2.default)();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assign = __webpack_require__(12).assign;

var defaults = {
  channel: 'youtube',
  youtube: {
    autoplay: 1,
    cc_load_policy: 1,
    color: null,
    controls: 1,
    disablekb: 0,
    enablejsapi: 0,
    end: null,
    fs: 1,
    h1: null,
    iv_load_policy: 1,
    list: null,
    listType: null,
    loop: 0,
    modestbranding: null,
    origin: null,
    playlist: null,
    playsinline: null,
    rel: 0,
    showinfo: 1,
    start: 0,
    wmode: 'transparent',
    theme: 'dark',
    nocookie: false
  },
  ratio: '16:9',
  vimeo: {
    api: false,
    autopause: true,
    autoplay: true,
    byline: true,
    callback: null,
    color: null,
    height: null,
    loop: false,
    maxheight: null,
    maxwidth: null,
    player_id: null,
    portrait: true,
    title: true,
    width: null,
    xhtml: false
  },
  allowFullScreen: true,
  animationSpeed: 300,
  classNames: {
    modalVideo: 'modal-video',
    modalVideoClose: 'modal-video-close',
    modalVideoBody: 'modal-video-body',
    modalVideoInner: 'modal-video-inner',
    modalVideoIframeWrap: 'modal-video-movie-wrap',
    modalVideoCloseBtn: 'modal-video-close-btn'
  },
  aria: {
    openMessage: 'You just openned the modal video',
    dismissBtnMessage: 'Close the modal by clicking here'
  }
};

var ModalVideo = function () {
  function ModalVideo(ele, option) {
    var _this = this;

    _classCallCheck(this, ModalVideo);

    var opt = assign({}, defaults, option);
    var selectors = typeof ele === 'string' ? document.querySelectorAll(ele) : ele;
    var body = document.querySelector('body');
    var classNames = opt.classNames;
    var speed = opt.animationSpeed;
    [].forEach.call(selectors, function (selector) {
      selector.addEventListener('click', function () {
        var videoId = selector.dataset.videoId;
        var channel = selector.dataset.channel || opt.channel;
        var id = (0, _util.getUniqId)();
        var videoUrl = _this.getVideoUrl(opt, channel, videoId);
        var html = _this.getHtml(opt, videoUrl, id);
        (0, _util.append)(body, html);
        var modal = document.querySelector('#' + id);
        var btn = modal.querySelector('.js-modal-video-dismiss-btn');
        modal.focus();
        modal.addEventListener('click', function () {
          (0, _util.addClass)(modal, classNames.modalVideoClose);
          setTimeout(function () {
            (0, _util.remove)(modal);
            selector.focus();
          }, speed);
        });
        modal.addEventListener('keydown', function (e) {
          if (e.which === 9) {
            e.preventDefault();
            if (document.activeElement === modal) {
              btn.focus();
            } else {
              modal.setAttribute('aria-label', '');
              modal.focus();
            }
          }
        });
        btn.addEventListener('click', function () {
          (0, _util.triggerEvent)(modal, 'click');
        });
      });
    });
  }

  _createClass(ModalVideo, [{
    key: 'getPadding',
    value: function getPadding(ratio) {
      var arr = ratio.split(':');
      var width = Number(arr[0]);
      var height = Number(arr[1]);
      var padding = height * 100 / width;
      return padding + '%';
    }
  }, {
    key: 'getQueryString',
    value: function getQueryString(obj) {
      var url = '';
      Object.keys(obj).forEach(function (key) {
        url += key + '=' + obj[key] + '&';
      });
      return url.substr(0, url.length - 1);
    }
  }, {
    key: 'getVideoUrl',
    value: function getVideoUrl(opt, channel, videoId) {
      if (channel === 'youtube') {
        return this.getYoutubeUrl(opt.youtube, videoId);
      } else if (channel === 'vimeo') {
        return this.getVimeoUrl(opt.vimeo, videoId);
      }
      return '';
    }
  }, {
    key: 'getVimeoUrl',
    value: function getVimeoUrl(vimeo, videoId) {
      var query = this.getQueryString(vimeo);
      return '//player.vimeo.com/video/' + videoId + '?' + query;
    }
  }, {
    key: 'getYoutubeUrl',
    value: function getYoutubeUrl(youtube, videoId) {
      var query = this.getQueryString(youtube);
      if (youtube.nocookie === true) {
        return '//www.youtube-nocookie.com/embed/' + videoId + '?' + query;
      }

      return '//www.youtube.com/embed/' + videoId + '?' + query;
    }
  }, {
    key: 'getHtml',
    value: function getHtml(opt, videoUrl, id) {
      var padding = this.getPadding(opt.ratio);
      var classNames = opt.classNames;
      return '\n      <div class="' + classNames.modalVideo + '" tabindex="-1" role="dialog" aria-label="' + opt.aria.openMessage + '" id="' + id + '">\n        <div class="' + classNames.modalVideoBody + '">\n          <div class="' + classNames.modalVideoInner + '">\n            <div class="' + classNames.modalVideoIframeWrap + '" style="padding-bottom:' + padding + '">\n              <button class="' + classNames.modalVideoCloseBtn + ' js-modal-video-dismiss-btn" aria-label="' + opt.aria.dismissBtnMessage + '"></button>\n              <iframe width=\'460\' height=\'230\' src="' + videoUrl + '" frameborder=\'0\' allowfullscreen=' + opt.allowFullScreen + ' tabindex="-1"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    ';
    }
  }]);

  return ModalVideo;
}();

exports.default = ModalVideo;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var append = exports.append = function append(element, string) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(string, 'text/html');
  element.appendChild(doc.querySelector('body').childNodes[0]);
};

var prepend = exports.prepend = function prepend(element, string) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(string, 'text/html');
  element.insertBefore(doc.querySelector('body').childNodes[0], element.firstChild);
};

var getUniqId = exports.getUniqId = function getUniqId() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
};

var remove = exports.remove = function remove(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

var addClass = exports.addClass = function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
};

var triggerEvent = exports.triggerEvent = function triggerEvent(el, eventName, options) {
  var event = void 0;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, { cancelable: true });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, false, false, options);
  }
  el.dispatchEvent(event);
};

/***/ })
/******/ ]);