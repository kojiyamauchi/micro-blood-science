/******/ ;(function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ) // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './base/core.js')
  )
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './base/core.js':
      /*!**********************!*\
  !*** ./base/core.js ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        eval(
          "\n\nvar _emergence = __webpack_require__(/*! emergence.js */ \"./node_modules/emergence.js/src/emergence.js\");\n\nvar _emergence2 = _interopRequireDefault(_emergence);\n\nvar _modalVideo = __webpack_require__(/*! modal-video */ \"./node_modules/modal-video/lib/index.js\");\n\nvar _modalVideo2 = _interopRequireDefault(_modalVideo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Import Modules.\n//import addFlag from './modules/settings/addFlag'\n//import eventDefault from './modules/settings/eventDefault'\n//import introductions from './modules/introductions/introductions'\n//import checkScroll from './modules/scroll/checkScroll'\n//import anchorLink from './modules/scroll/anchorLink'\n//import floatings from './modules/floatings/floatings'\n//import mailValidation from './modules/mail/mailValidation'\n//import message from './modules/mail/message'\n\n// emergence.js Init.\n// Import Package Modules.\n_emergence2.default.init({\n  reset: false\n});\n\n// Created Modal Video Instance.\nnew _modalVideo2.default('.js-modal-video');\n\n// Require All Functions.\n//addFlag()\n//eventDefault()\n//introductions()\n//checkScroll()\n//anchorLink()\n//floatings()\n//mailValidation()\n//message()\n\n//# sourceURL=webpack:///./base/core.js?"
        )

        /***/
      },

    /***/ './node_modules/custom-event-polyfill/custom-event-polyfill.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/custom-event-polyfill/custom-event-polyfill.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          "// Polyfill for creating CustomEvents on IE9/10/11\n\n// code pulled from:\n// https://github.com/d4tocchini/customevent-polyfill\n// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill\n\ntry {\n    var ce = new window.CustomEvent('test');\n    ce.preventDefault();\n    if (ce.defaultPrevented !== true) {\n        // IE has problems with .preventDefault() on custom events\n        // http://stackoverflow.com/questions/23349191\n        throw new Error('Could not prevent default');\n    }\n} catch(e) {\n  var CustomEvent = function(event, params) {\n    var evt, origPrevent;\n    params = params || {\n      bubbles: false,\n      cancelable: false,\n      detail: undefined\n    };\n\n    evt = document.createEvent(\"CustomEvent\");\n    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n    origPrevent = evt.preventDefault;\n    evt.preventDefault = function () {\n      origPrevent.call(this);\n      try {\n        Object.defineProperty(this, 'defaultPrevented', {\n          get: function () {\n            return true;\n          }\n        });\n      } catch(e) {\n        this.defaultPrevented = true;\n      }\n    };\n    return evt;\n  };\n\n  CustomEvent.prototype = window.Event.prototype;\n  window.CustomEvent = CustomEvent; // expose definition to window\n}\n\n\n//# sourceURL=webpack:///./node_modules/custom-event-polyfill/custom-event-polyfill.js?"
        )

        /***/
      },

    /***/ './node_modules/emergence.js/src/emergence.js':
      /*!****************************************************!*\
  !*** ./node_modules/emergence.js/src/emergence.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          "var __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {\n  // AMD\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n      return factory(root);\n    }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(this, function(root) {\n\n  'use strict';\n\n  var emergence = {};\n  var poll, container, throttle, reset, handheld, elemCushion, offsetTop, offsetRight, offsetBottom, offsetLeft;\n  var callback = function() {};\n\n  // Browser feature test to include any browser APIs required for >= IE8\n  // @return {bool} true if supported, otherwise false\n  var cutsTheMustard = function() {\n    return 'querySelectorAll' in document ? true : false;\n  };\n\n  // Checks if user is on a handheld\n  // @return {bool} true if it's a handheld, otherwise false\n  var isHandheld = function() {\n    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(\n      navigator.userAgent\n    );\n  };\n\n  // Get the offset of a DOM Element\n  // @param {DOMElement} elem the container or element\n  // @return {int} the top, left, width and height values in pixels\n  var getElemOffset = function(elem) {\n\n    // Width and height of container or element\n    var w = elem.offsetWidth;\n    var h = elem.offsetHeight;\n\n    // Default top and left position of container or element\n    var topPos = 0;\n    var leftPos = 0;\n\n    // Get total distance of container or element to document's top and left origin\n    do {\n      if (!isNaN(elem.offsetTop)) {\n        topPos += elem.offsetTop;\n      }\n      if (!isNaN(elem.offsetLeft)) {\n        leftPos += elem.offsetLeft;\n      }\n    } while ((elem = elem.offsetParent) !== null);\n\n    // Return dimensions and position\n    return {\n      width: w,\n      height: h,\n      top: topPos,\n      left: leftPos\n    };\n  };\n\n  // Get the custom container size if provided, otherwise the documents\n  // @return {int} the width and height in pixels\n  var getContainerSize = function(container) {\n    var w, h;\n\n    // If custom container is provided in options\n    // Else use window or document\n    if (container !== window) {\n      w = container.clientWidth;\n      h = container.clientHeight;\n    } else {\n      w = window.innerWidth || document.documentElement.clientWidth;\n      h = window.innerHeight || document.documentElement.clientHeight;\n    }\n\n    return {\n      width: w,\n      height: h\n    };\n  };\n\n  // Get the X and Y scroll positions\n  // @return {int} the X and Y values in pixels\n  var getContainerScroll = function(container) {\n\n    // If custom container is provided in options\n    // Else use window or document\n    if (container !== window) {\n      return {\n        x: container.scrollLeft + getElemOffset(container).left,\n        y: container.scrollTop + getElemOffset(container).top\n      };\n    } else {\n      return {\n        x: window.pageXOffset || document.documentElement.scrollLeft,\n        y: window.pageYOffset || document.documentElement.scrollTop\n      };\n    }\n  };\n\n  // Check if element's closest parent is hidden (display: none)\n  // @param {DOMElement} elem the element\n  // @return {bool} true if hidden, false otherwise\n  var isHidden = function(elem) {\n    return elem.offsetParent === null;\n  };\n\n  // Check if element is visible\n  // @param {DOMElement} elem the element\n  var isVisible = function(elem) {\n\n    // Discontinue if element's closest parent is hidden\n    if (isHidden(elem)) {\n      return false;\n    }\n\n    // Get information from element and container\n    var elemOffset = getElemOffset(elem);\n    var containerSize = getContainerSize(container);\n    var containerScroll = getContainerScroll(container);\n\n    // Determine element size\n    var elemWidth = elemOffset.width;\n    var elemHeight = elemOffset.height;\n\n    // Determine element position from rect points\n    var elemTop = elemOffset.top;\n    var elemLeft = elemOffset.left;\n    var elemBottom = elemTop + elemHeight;\n    var elemRight = elemLeft + elemWidth;\n\n    // Determine boundaries of container and element\n    // @return {bool} true if element is found within boundaries, otherwise false\n    var checkBoundaries = function() {\n\n      // Determine element boundaries including custom cushion\n      var eTop = elemTop + elemHeight * elemCushion;\n      var eRight = elemRight - elemWidth * elemCushion;\n      var eBottom = elemBottom - elemHeight * elemCushion;\n      var eLeft = elemLeft + elemWidth * elemCushion;\n\n      // Determine container boundaries including custom offset\n      var cTop = containerScroll.y + offsetTop;\n      var cRight = containerScroll.x - offsetRight + containerSize.width;\n      var cBottom = containerScroll.y - offsetBottom + containerSize.height;\n      var cLeft = containerScroll.x + offsetLeft;\n\n      return (eTop < cBottom && eBottom > cTop && eLeft < cRight && eRight > cLeft);\n    };\n\n    return checkBoundaries();\n  };\n\n  // Engage emergence through a throttling method for performance\n  var emergenceThrottle = function() {\n    if (!!poll) {\n      return;\n    }\n    clearTimeout(poll);\n    poll = setTimeout(function() {\n      emergence.engage();\n      poll = null;\n    }, throttle);\n  };\n\n  // Initialize emergence with options, do feature test and create event listeners\n  // @param {Object} options Custom settings\n  emergence.init = function(options) {\n    options = options || {};\n\n    // Function to return an integer\n    var optionInt = function(option, fallback) {\n      return parseInt(option || fallback, 10);\n    };\n\n    // Function to return a floating point number\n    var optionFloat = function(option, fallback) {\n      return parseFloat(option || fallback);\n    };\n\n    // Default options\n    container = options.container || window; // window or document by default\n    reset = typeof options.reset !== 'undefined' ? options.reset : true; // true by default\n    handheld = typeof options.handheld !== 'undefined' ? options.handheld : true; // true by default\n    throttle = optionInt(options.throttle, 250); // 250 by default\n    elemCushion = optionFloat(options.elemCushion, 0.15); // 0.15 by default\n    offsetTop = optionInt(options.offsetTop, 0); // 0 by default\n    offsetRight = optionInt(options.offsetRight, 0); // 0 by default\n    offsetBottom = optionInt(options.offsetBottom, 0); // 0 by default\n    offsetLeft = optionInt(options.offsetLeft, 0); // 0 by default\n    callback = options.callback || callback;\n\n    // If browser doesn't pass feature test\n    if (!cutsTheMustard()) {\n\n      // Provide message in console.log\n      console.log('Emergence.js is not supported in this browser.');\n\n    }\n    // If this is handheld device AND handheld option is true\n    // OR not a handheld device\n    else if ((isHandheld() && handheld) || !isHandheld()) {\n\n      // Add '.emergence' class to document for conditional CSS\n      document.documentElement.className += ' emergence';\n\n      // If browser supports addEventListener\n      // Else use attachEvent\n      if (window.addEventListener) {\n\n        // Add event listeners for load, scroll and resize events\n        window.addEventListener('load', emergenceThrottle, false);\n        container.addEventListener('scroll', emergenceThrottle, false);\n        container.addEventListener('resize', emergenceThrottle, false);\n\n      } else {\n\n        // Attach events for legacy load method, scroll and resize events\n        document.attachEvent('onreadystatechange', function() {\n          if (document.readyState === 'complete') { emergenceThrottle(); }\n        });\n        container.attachEvent('onscroll', emergenceThrottle);\n        container.attachEvent('onresize', emergenceThrottle);\n\n      }\n    }\n  };\n\n  // Engage emergence\n  emergence.engage = function() {\n    var nodes = document.querySelectorAll('[data-emergence]');\n    var length = nodes.length;\n    var elem;\n\n    // Loop through objects with data-emergence attribute\n    for (var i = 0; i < length; i++) {\n      elem = nodes[i];\n\n      // If element is visible\n      if (isVisible(elem)) {\n\n        // Change the state of the attribute to 'visible'\n        elem.setAttribute('data-emergence', 'visible');\n\n        // Hack to repaint attribute in IE8\n        elem.className = elem.className;\n\n        // Callback for when element is visible\n        callback(elem, 'visible');\n\n      } else if (reset === true) {\n\n        // Else if element is hidden and reset\n        // Change the state of the attribute to 'hidden'\n        elem.setAttribute('data-emergence', 'hidden');\n\n        // Hack to repaint attribute in IE8\n        elem.className = elem.className;\n\n        // Create callback\n        callback(elem, 'reset');\n\n      } else if (reset === false) {\n\n        // Else if element is hidden and NOT reset\n        // Create callback\n        callback(elem, 'noreset');\n\n      }\n    }\n    \n    // If no data-emergence attributes are found\n    // Disengage emergence\n    if (!length) {\n      emergence.disengage();\n    }\n  };\n\n  // Disengage emergence\n  emergence.disengage = function() {\n\n    // If browser supports removeEventListener\n    // Else use detachEvent\n    if (window.removeEventListener) {\n\n      // Remove event listeners scroll and resize events\n      container.removeEventListener('scroll', emergenceThrottle, false);\n      container.removeEventListener('resize', emergenceThrottle, false);\n\n    } else {\n\n      // Detach scroll and resize events\n      container.detachEvent('onscroll', emergenceThrottle);\n      container.detachEvent('onresize', emergenceThrottle);\n\n    }\n\n    // Clear timeout from throttle\n    clearTimeout(poll);\n  };\n\n  return emergence;\n});\n\n\n//# sourceURL=webpack:///./node_modules/emergence.js/src/emergence.js?"
        )

        /***/
      },

    /***/ './node_modules/es6-object-assign/index.js':
      /*!*************************************************!*\
  !*** ./node_modules/es6-object-assign/index.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        eval(
          "/**\n * Code refactored from Mozilla Developer Network:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign\n */\n\n\n\nfunction assign(target, firstSource) {\n  if (target === undefined || target === null) {\n    throw new TypeError('Cannot convert first argument to object');\n  }\n\n  var to = Object(target);\n  for (var i = 1; i < arguments.length; i++) {\n    var nextSource = arguments[i];\n    if (nextSource === undefined || nextSource === null) {\n      continue;\n    }\n\n    var keysArray = Object.keys(Object(nextSource));\n    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {\n      var nextKey = keysArray[nextIndex];\n      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);\n      if (desc !== undefined && desc.enumerable) {\n        to[nextKey] = nextSource[nextKey];\n      }\n    }\n  }\n  return to;\n}\n\nfunction polyfill() {\n  if (!Object.assign) {\n    Object.defineProperty(Object, 'assign', {\n      enumerable: false,\n      configurable: true,\n      writable: true,\n      value: assign\n    });\n  }\n}\n\nmodule.exports = {\n  assign: assign,\n  polyfill: polyfill\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-object-assign/index.js?"
        )

        /***/
      },

    /***/ './node_modules/modal-video/lib/core/index.js':
      /*!****************************************************!*\
  !*** ./node_modules/modal-video/lib/core/index.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        eval(
          "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! custom-event-polyfill */ \"./node_modules/custom-event-polyfill/custom-event-polyfill.js\");\n\nvar _util = __webpack_require__(/*! ../lib/util */ \"./node_modules/modal-video/lib/lib/util.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar assign = __webpack_require__(/*! es6-object-assign */ \"./node_modules/es6-object-assign/index.js\").assign;\n\nvar defaults = {\n  channel: 'youtube',\n  facebook: {},\n  youtube: {\n    autoplay: 1,\n    cc_load_policy: 1,\n    color: null,\n    controls: 1,\n    disablekb: 0,\n    enablejsapi: 0,\n    end: null,\n    fs: 1,\n    h1: null,\n    iv_load_policy: 1,\n    list: null,\n    listType: null,\n    loop: 0,\n    modestbranding: null,\n    origin: null,\n    playlist: null,\n    playsinline: null,\n    rel: 0,\n    showinfo: 1,\n    start: 0,\n    wmode: 'transparent',\n    theme: 'dark',\n    nocookie: false\n  },\n  ratio: '16:9',\n  vimeo: {\n    api: false,\n    autopause: true,\n    autoplay: true,\n    byline: true,\n    callback: null,\n    color: null,\n    height: null,\n    loop: false,\n    maxheight: null,\n    maxwidth: null,\n    player_id: null,\n    portrait: true,\n    title: true,\n    width: null,\n    xhtml: false\n  },\n  allowFullScreen: true,\n  animationSpeed: 300,\n  classNames: {\n    modalVideo: 'modal-video',\n    modalVideoClose: 'modal-video-close',\n    modalVideoBody: 'modal-video-body',\n    modalVideoInner: 'modal-video-inner',\n    modalVideoIframeWrap: 'modal-video-movie-wrap',\n    modalVideoCloseBtn: 'modal-video-close-btn'\n  },\n  aria: {\n    openMessage: 'You just openned the modal video',\n    dismissBtnMessage: 'Close the modal by clicking here'\n  }\n};\n\nvar ModalVideo = function () {\n  function ModalVideo(ele, option) {\n    var _this = this;\n\n    _classCallCheck(this, ModalVideo);\n\n    var opt = assign({}, defaults, option);\n    var selectors = typeof ele === 'string' ? document.querySelectorAll(ele) : ele;\n    var body = document.querySelector('body');\n    var classNames = opt.classNames;\n    var speed = opt.animationSpeed;\n    [].forEach.call(selectors, function (selector) {\n      selector.addEventListener('click', function (event) {\n        if (selector.tagName === 'A') {\n          event.preventDefault();\n        }\n        var videoId = selector.dataset.videoId;\n        var channel = selector.dataset.channel || opt.channel;\n        var id = (0, _util.getUniqId)();\n        var videoUrl = selector.dataset.videoUrl || _this.getVideoUrl(opt, channel, videoId);\n        var html = _this.getHtml(opt, videoUrl, id);\n        (0, _util.append)(body, html);\n        var modal = document.getElementById(id);\n        var btn = modal.querySelector('.js-modal-video-dismiss-btn');\n        modal.focus();\n        modal.addEventListener('click', function () {\n          (0, _util.addClass)(modal, classNames.modalVideoClose);\n          setTimeout(function () {\n            (0, _util.remove)(modal);\n            selector.focus();\n          }, speed);\n        });\n        modal.addEventListener('keydown', function (e) {\n          if (e.which === 9) {\n            e.preventDefault();\n            if (document.activeElement === modal) {\n              btn.focus();\n            } else {\n              modal.setAttribute('aria-label', '');\n              modal.focus();\n            }\n          }\n        });\n        btn.addEventListener('click', function () {\n          (0, _util.triggerEvent)(modal, 'click');\n        });\n      });\n    });\n  }\n\n  _createClass(ModalVideo, [{\n    key: 'getPadding',\n    value: function getPadding(ratio) {\n      var arr = ratio.split(':');\n      var width = Number(arr[0]);\n      var height = Number(arr[1]);\n      var padding = height * 100 / width;\n      return padding + '%';\n    }\n  }, {\n    key: 'getQueryString',\n    value: function getQueryString(obj) {\n      var url = '';\n      Object.keys(obj).forEach(function (key) {\n        url += key + '=' + obj[key] + '&';\n      });\n      return url.substr(0, url.length - 1);\n    }\n  }, {\n    key: 'getVideoUrl',\n    value: function getVideoUrl(opt, channel, videoId) {\n      if (channel === 'youtube') {\n        return this.getYoutubeUrl(opt.youtube, videoId);\n      } else if (channel === 'vimeo') {\n        return this.getVimeoUrl(opt.vimeo, videoId);\n      } else if (channel === 'facebook') {\n        return this.getFacebookUrl(opt.facebook, videoId);\n      }\n      return '';\n    }\n  }, {\n    key: 'getVimeoUrl',\n    value: function getVimeoUrl(vimeo, videoId) {\n      var query = this.getQueryString(vimeo);\n      return '//player.vimeo.com/video/' + videoId + '?' + query;\n    }\n  }, {\n    key: 'getYoutubeUrl',\n    value: function getYoutubeUrl(youtube, videoId) {\n      var query = this.getQueryString(youtube);\n      if (youtube.nocookie === true) {\n        return '//www.youtube-nocookie.com/embed/' + videoId + '?' + query;\n      }\n\n      return '//www.youtube.com/embed/' + videoId + '?' + query;\n    }\n  }, {\n    key: 'getFacebookUrl',\n    value: function getFacebookUrl(facebook, videoId) {\n      return '//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/' + videoId + '&' + this.getQueryString(facebook);\n    }\n  }, {\n    key: 'getHtml',\n    value: function getHtml(opt, videoUrl, id) {\n      var padding = this.getPadding(opt.ratio);\n      var classNames = opt.classNames;\n      return '\\n      <div class=\"' + classNames.modalVideo + '\" tabindex=\"-1\" role=\"dialog\" aria-label=\"' + opt.aria.openMessage + '\" id=\"' + id + '\">\\n        <div class=\"' + classNames.modalVideoBody + '\">\\n          <div class=\"' + classNames.modalVideoInner + '\">\\n            <div class=\"' + classNames.modalVideoIframeWrap + '\" style=\"padding-bottom:' + padding + '\">\\n              <button class=\"' + classNames.modalVideoCloseBtn + ' js-modal-video-dismiss-btn\" aria-label=\"' + opt.aria.dismissBtnMessage + '\"></button>\\n              <iframe width=\\'460\\' height=\\'230\\' src=\"' + videoUrl + '\" frameborder=\\'0\\' allowfullscreen=' + opt.allowFullScreen + ' tabindex=\"-1\"/>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    ';\n    }\n  }]);\n\n  return ModalVideo;\n}();\n\nexports.default = ModalVideo;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/modal-video/lib/core/index.js?"
        )

        /***/
      },

    /***/ './node_modules/modal-video/lib/index.js':
      /*!***********************************************!*\
  !*** ./node_modules/modal-video/lib/index.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        eval(
          '\n\nmodule.exports = __webpack_require__(/*! ./core/ */ "./node_modules/modal-video/lib/core/index.js");\n\n//# sourceURL=webpack:///./node_modules/modal-video/lib/index.js?'
        )

        /***/
      },

    /***/ './node_modules/modal-video/lib/lib/util.js':
      /*!**************************************************!*\
  !*** ./node_modules/modal-video/lib/lib/util.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        eval(
          "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar append = exports.append = function append(element, string) {\n  var div = document.createElement('div');\n  div.innerHTML = string;\n  while (div.children.length > 0) {\n    element.appendChild(div.children[0]);\n  }\n};\n\nvar getUniqId = exports.getUniqId = function getUniqId() {\n  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();\n};\n\nvar remove = exports.remove = function remove(element) {\n  if (element && element.parentNode) {\n    element.parentNode.removeChild(element);\n  }\n};\n\nvar addClass = exports.addClass = function addClass(element, className) {\n  if (element.classList) {\n    element.classList.add(className);\n  } else {\n    element.className += ' ' + className;\n  }\n};\n\nvar triggerEvent = exports.triggerEvent = function triggerEvent(el, eventName, options) {\n  var event = void 0;\n  if (window.CustomEvent) {\n    event = new CustomEvent(eventName, { cancelable: true });\n  } else {\n    event = document.createEvent('CustomEvent');\n    event.initCustomEvent(eventName, false, false, options);\n  }\n  el.dispatchEvent(event);\n};\n\n//# sourceURL=webpack:///./node_modules/modal-video/lib/lib/util.js?"
        )

        /***/
      }

    /******/
  }
)
