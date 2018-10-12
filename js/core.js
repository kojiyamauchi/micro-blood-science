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
          "\n\nvar _emergence = __webpack_require__(/*! emergence.js */ \"./node_modules/emergence.js/src/emergence.js\");\n\nvar _emergence2 = _interopRequireDefault(_emergence);\n\nvar _modalVideo = __webpack_require__(/*! modal-video */ \"./node_modules/modal-video/lib/index.js\");\n\nvar _modalVideo2 = _interopRequireDefault(_modalVideo);\n\nvar _App = __webpack_require__(/*! @/base/modules/App */ \"./base/modules/App.ts\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _SetStates = __webpack_require__(/*! @/base/modules/state/SetStates */ \"./base/modules/state/SetStates.ts\");\n\nvar _SetStates2 = _interopRequireDefault(_SetStates);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Created Instance.\n\n\n// Import Modules.\n/*\n\n core.js\n\n*/\n\n// Import Package Modules.\nvar modalVideo = new _modalVideo2.default('.js-modal-video'); // eslint-disable-line no-unused-vars\nvar app = new _App2.default();\nvar setStates = new _SetStates2.default();\n\n// Initial.\n_emergence2.default.init({ reset: false });\napp.init();\n\n// DOM Content Loaded.\nwindow.addEventListener('DOMContentLoaded', function () {\n  // No Method.\n});\n\n// Load.\nwindow.addEventListener('load', function () {\n  // Call Load Method. When Window Reload, Fetch State of View.\n  app.load(setStates.getWidth);\n});\n\n// Resize.\nwindow.addEventListener('resize', function () {\n  // Set View State.\n  setStates.setWidth = document.body.clientWidth;\n  // Call Resize Method. When Window Resize, Fetch State of View.\n  app.resize(setStates.getWidth);\n});\n\n// Scroll.\nwindow.addEventListener('scroll', function () {\n  // Set View State.\n  setStates.setScroll = [window.innerHeight, document.querySelector('.fn-angle-down'), document.querySelector('.fn-area-about').getBoundingClientRect().top, document.querySelector('.fn-area-member').getBoundingClientRect().top, document.querySelector('.fn-footer').getBoundingClientRect().top];\n  // Call Scroll Method. When Window Scroll, Fetch State of View.\n  app.scroll(setStates.getScroll);\n});\n\n//# sourceURL=webpack:///./base/core.js?"
        )

        /***/
      },

    /***/ './base/modules/App.ts':
      /*!*****************************!*\
  !*** ./base/modules/App.ts ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_modules_introductions_Introductions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/base/modules/introductions/Introductions */ "./base/modules/introductions/Introductions.ts");\n/* harmony import */ var _base_modules_settings_EventDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/base/modules/settings/EventDefault */ "./base/modules/settings/EventDefault.ts");\n/* harmony import */ var _base_modules_scroll_AnchorLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/base/modules/scroll/AnchorLink */ "./base/modules/scroll/AnchorLink.ts");\n/* harmony import */ var _base_modules_floatings_Floatings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/base/modules/floatings/Floatings */ "./base/modules/floatings/Floatings.ts");\n/* harmony import */ var _base_modules_mail_MailValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/base/modules/mail/MailValidation */ "./base/modules/mail/MailValidation.ts");\n/* harmony import */ var _base_modules_mail_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/base/modules/mail/Message */ "./base/modules/mail/Message.ts");\n/* harmony import */ var _base_modules_settings_AddFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/base/modules/settings/AddFlag */ "./base/modules/settings/AddFlag.ts");\n/* harmony import */ var _base_modules_scroll_CheckScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/base/modules/scroll/CheckScroll */ "./base/modules/scroll/CheckScroll.ts");\n/*\n\n App.ts\n\n*/\n// Import Modules.\n\n\n\n\n\n\n\n\nvar App = /** @class */ (function () {\n    function App() {\n        this.introductions = new _base_modules_introductions_Introductions__WEBPACK_IMPORTED_MODULE_0__["default"]();\n        this.eventDefault = new _base_modules_settings_EventDefault__WEBPACK_IMPORTED_MODULE_1__["default"]();\n        this.anchorLink = new _base_modules_scroll_AnchorLink__WEBPACK_IMPORTED_MODULE_2__["default"]();\n        this.floatings = new _base_modules_floatings_Floatings__WEBPACK_IMPORTED_MODULE_3__["default"]();\n        this.mailValidation = new _base_modules_mail_MailValidation__WEBPACK_IMPORTED_MODULE_4__["default"]();\n        this.message = new _base_modules_mail_Message__WEBPACK_IMPORTED_MODULE_5__["default"]();\n        this.addFlag = new _base_modules_settings_AddFlag__WEBPACK_IMPORTED_MODULE_6__["default"]();\n        this.checkScroll = new _base_modules_scroll_CheckScroll__WEBPACK_IMPORTED_MODULE_7__["default"]();\n    }\n    App.prototype.init = function () {\n        this.introductions.callIntro();\n        this.eventDefault.callCore();\n        this.anchorLink.callCore();\n        this.floatings.callCore();\n        this.mailValidation.callCore();\n        this.message.callCore();\n    };\n    App.prototype.domContentLoaded = function () {\n        // No Method.\n    };\n    App.prototype.load = function (getWidthState) {\n        this.addFlag.branches(getWidthState);\n    };\n    App.prototype.resize = function (getWidthState) {\n        this.addFlag.branches(getWidthState);\n    };\n    App.prototype.scroll = function (getScrollState) {\n        this.checkScroll.branches(getScrollState);\n    };\n    return App;\n}());\n/* harmony default export */ __webpack_exports__["default"] = (App);\n\n\n//# sourceURL=webpack:///./base/modules/App.ts?'
        )

        /***/
      },

    /***/ './base/modules/floatings/Floatings.ts':
      /*!*********************************************!*\
  !*** ./base/modules/floatings/Floatings.ts ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jump.js */ \"./node_modules/jump.js/dist/jump.module.js\");\n/*\n\n Floatings.ts\n\n*/\n// Import Package Modules.\n\nvar Floatings = /** @class */ (function () {\n    function Floatings() {\n        this.flagTarget = document.body;\n        this.floatingTranslate = document.querySelector('.fn-button-floating-translate');\n        this.targetTranslate = document.querySelector('.link-translate-wrapper');\n        this.floatingPageTop = document.querySelector('.fn-button-floating-page-top');\n    }\n    Floatings.prototype.callCore = function () {\n        var _this = this;\n        this.floatingTranslate.addEventListener('click', function (event) {\n            event.stopPropagation();\n            _this.targetTranslate.classList.toggle('is-active');\n        });\n        this.floatingTranslate.addEventListener('mouseover', function () {\n            var flagDevice = _this.flagTarget.classList.contains('sp');\n            if (!flagDevice) {\n                _this.targetTranslate.classList.add('is-active');\n            }\n        });\n        this.floatingTranslate.addEventListener('mouseout', function () {\n            var flagDevice = _this.flagTarget.classList.contains('sp');\n            if (!flagDevice) {\n                _this.targetTranslate.classList.remove('is-active');\n            }\n        });\n        this.floatingPageTop.addEventListener('click', function () {\n            var clsCheck = _this.floatingPageTop.classList.contains('is-scroll-top');\n            if (clsCheck) {\n                Object(jump_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.fn-scroll-top');\n            }\n        });\n    };\n    return Floatings;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Floatings);\n\n\n//# sourceURL=webpack:///./base/modules/floatings/Floatings.ts?"
        )

        /***/
      },

    /***/ './base/modules/introductions/Introductions.ts':
      /*!*****************************************************!*\
  !*** ./base/modules/introductions/Introductions.ts ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/*\n\n Introductions.ts\n\n*/\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar Introductions = /** @class */ (function () {\n    function Introductions() {\n        this.flagTarget = document.body;\n        this.flagEN = this.flagTarget.classList.contains('en');\n        this.flagCN = this.flagTarget.classList.contains('cn');\n        this.heading02 = document.querySelectorAll('.fn-txt-heading02-1');\n        this.lettersBG = document.querySelectorAll('.fn-letters-inner');\n        this.lettersPC = document.querySelectorAll('.fn-txt-letters-pc');\n        this.lettersSP = document.querySelectorAll('.fn-txt-letters-sp');\n        this.floating = document.querySelectorAll('.fn-button-floating');\n    }\n    // Intro1, Displayed Heading Functions.\n    Introductions.prototype.intro01 = function () {\n        var _this = this;\n        // Core Function.\n        var coreFunction = function (delay) {\n            Array.from(_this.heading02).map(function (info, index) {\n                setTimeout(function () {\n                    info.classList.add('is-active');\n                }, index * delay);\n            });\n        };\n        // Branches.\n        if (this.flagEN) {\n            coreFunction(15);\n        }\n        else if (this.flagCN) {\n            coreFunction(30);\n        }\n        else {\n            coreFunction(30);\n        }\n    };\n    // Intro2, Displayed Letters Background Functions.\n    Introductions.prototype.intro02 = function () {\n        var _this = this;\n        // Core Function.\n        var coreFunction = function (delay) {\n            Array.from(_this.lettersBG).map(function (info) {\n                setTimeout(function () {\n                    info.classList.add('is-active');\n                }, delay);\n            });\n        };\n        // Branches.\n        if (this.flagEN) {\n            coreFunction(525);\n        }\n        else if (this.flagCN) {\n            coreFunction(700);\n        }\n        else {\n            coreFunction(800);\n        }\n    };\n    // Intro3, Displayed Letters Functions.\n    Introductions.prototype.intro03 = function () {\n        var _this = this;\n        // Core Function.\n        var coreFunction = function (delayPC, delaySP, delayWrapper) {\n            setTimeout(function () {\n                Array.from(_this.lettersPC).map(function (info, index) {\n                    setTimeout(function () {\n                        info.classList.add('is-active');\n                    }, index * delayPC);\n                });\n                Array.from(_this.lettersSP).map(function (info, index) {\n                    setTimeout(function () {\n                        info.classList.add('is-active');\n                    }, index * delaySP);\n                });\n            }, delayWrapper);\n        };\n        // Branches.\n        if (this.flagEN) {\n            coreFunction(30, 30, 1000);\n        }\n        else if (this.flagCN) {\n            coreFunction(40, 40, 1250);\n        }\n        else {\n            coreFunction(40, 40, 1250);\n        }\n    };\n    // Intro4, Displayed Floating Button Functions.\n    Introductions.prototype.intro04 = function () {\n        var _this = this;\n        // When Before Start Introduction04, Check Device.\n        var flagDevice = this.flagTarget.classList.contains('sp');\n        // Core Function.\n        var coreFunction = function (delay) {\n            Array.from(_this.floating).map(function (info) {\n                setTimeout(function () {\n                    info.classList.add('is-active');\n                }, delay);\n            });\n        };\n        // Branches.\n        if (this.flagEN) {\n            if (flagDevice) {\n                coreFunction(9500);\n            }\n            else {\n                coreFunction(14500);\n            }\n        }\n        else if (this.flagCN) {\n            if (flagDevice) {\n                coreFunction(7375);\n            }\n            else {\n                coreFunction(7500);\n            }\n        }\n        else {\n            if (flagDevice) {\n                coreFunction(6500);\n            }\n            else {\n                coreFunction(9500);\n            }\n        }\n    };\n    // Concatenate Intro & Await Intro.\n    Introductions.prototype.concatenateIntro = function () {\n        var _this = this;\n        var awaitIntro = function () { return __awaiter(_this, void 0, void 0, function () {\n            var awaitIntro01, awaitIntro02, awaitIntro03, awaitIntro04;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.intro01()];\n                    case 1:\n                        awaitIntro01 = _a.sent();\n                        return [4 /*yield*/, this.intro02()];\n                    case 2:\n                        awaitIntro02 = _a.sent();\n                        return [4 /*yield*/, this.intro03()];\n                    case 3:\n                        awaitIntro03 = _a.sent();\n                        return [4 /*yield*/, this.intro04()];\n                    case 4:\n                        awaitIntro04 = _a.sent();\n                        return [2 /*return*/, [awaitIntro01, awaitIntro02, awaitIntro03, awaitIntro04]];\n                }\n            });\n        }); };\n        return awaitIntro();\n    };\n    // Call Intro.\n    Introductions.prototype.callIntro = function () {\n        var _this = this;\n        setTimeout(function () {\n            _this.concatenateIntro();\n        }, 1250);\n    };\n    return Introductions;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Introductions);\n\n\n//# sourceURL=webpack:///./base/modules/introductions/Introductions.ts?"
        )

        /***/
      },

    /***/ './base/modules/mail/MailValidation.ts':
      /*!*********************************************!*\
  !*** ./base/modules/mail/MailValidation.ts ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/*\n\n MailValidation.ts\n\n*/\nvar MailValidation = /** @class */ (function () {\n    function MailValidation() {\n        this.button = document.querySelector('.fn-submit');\n        this.holder = document.querySelector('.fn-form-label');\n        this.txtfield = document.querySelector('.fn-txtfield');\n        this.target = document.querySelector('.fn-mail-val');\n        this.targetValue = '';\n        this.validation = /^[A-Za-z0-9]+[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,}$/;\n        this.inTxt01 = \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\u3092\\u78BA\\u8A8D\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\\u3002\";\n        this.inTxt02 = \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\u3092\\u5165\\u529B\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\\u3002\";\n        this.inTxtEN01 = \"Please comfirm in your email address\";\n        this.inTxtEN02 = \"Please fill in your email address\";\n        this.inTxtCN01 = \"\\u8BF7\\u68C0\\u67E5\\u60A8\\u7684\\u90AE\\u7BB1\\u5730\\u5740\\u3002\";\n        this.inTxtCN02 = \"\\u8BF7\\u8F93\\u5165\\u60A8\\u7684\\u90AE\\u7BB1\\u5730\\u5740\\u3002\";\n        this.flagTarget = document.body;\n        this.flagEN = this.flagTarget.classList.contains('en');\n        this.flagCN = this.flagTarget.classList.contains('cn');\n    }\n    MailValidation.prototype.branches = function (event) {\n        if (!this.targetValue.match(this.validation)) {\n            this.holder.textContent = this.flagEN\n                ? this.inTxtEN01\n                : this.flagCN\n                    ? this.inTxtCN01\n                    : this.inTxt01;\n            this.txtfield.classList.add('is-disabled02');\n            event.preventDefault();\n        }\n        if (this.targetValue === '') {\n            this.holder.textContent = this.flagEN\n                ? this.inTxtEN02\n                : this.flagCN\n                    ? this.inTxtCN02\n                    : this.inTxt02;\n            this.txtfield.classList.add('is-disabled02');\n            event.preventDefault();\n        }\n    };\n    MailValidation.prototype.callCore = function () {\n        var _this = this;\n        this.button.addEventListener('click', function () {\n            _this.targetValue = _this.target.value;\n            _this.branches(event);\n        });\n    };\n    return MailValidation;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailValidation);\n\n\n//# sourceURL=webpack:///./base/modules/mail/MailValidation.ts?"
        )

        /***/
      },

    /***/ './base/modules/mail/Message.ts':
      /*!**************************************!*\
  !*** ./base/modules/mail/Message.ts ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/*\n\n Message.ts\n\n*/\nvar Message = /** @class */ (function () {\n    function Message() {\n        this.getURL = window.location.hash;\n        this.target = document.querySelector('.fn-thanks-message');\n        this.searchWord = \"#completed_mail\";\n    }\n    Message.prototype.callCore = function () {\n        var _this = this;\n        if (this.getURL.indexOf(this.searchWord) > -1) {\n            this.target.classList.add('is-active');\n            window.history.replaceState(null, null, ' ');\n            setTimeout(function () {\n                _this.target.classList.remove('is-active');\n            }, 5000);\n        }\n    };\n    return Message;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n\n//# sourceURL=webpack:///./base/modules/mail/Message.ts?"
        )

        /***/
      },

    /***/ './base/modules/scroll/AnchorLink.ts':
      /*!*******************************************!*\
  !*** ./base/modules/scroll/AnchorLink.ts ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jump.js */ "./node_modules/jump.js/dist/jump.module.js");\n/*\n\n AnchorLink.ts\n\n*/\n// Import Package Modules.\n\nvar AnchorLink = /** @class */ (function () {\n    function AnchorLink() {\n        this.target = document.querySelectorAll(\'.fn-anchor\');\n    }\n    AnchorLink.prototype.callCore = function () {\n        Array.from(this.target).map(function (info) {\n            info.onclick = function (event) {\n                var getAnchor = info.dataset.anchor;\n                Object(jump_js__WEBPACK_IMPORTED_MODULE_0__["default"])("." + getAnchor);\n                event.preventDefault();\n            };\n        });\n    };\n    return AnchorLink;\n}());\n/* harmony default export */ __webpack_exports__["default"] = (AnchorLink);\n\n\n//# sourceURL=webpack:///./base/modules/scroll/AnchorLink.ts?'
        )

        /***/
      },

    /***/ './base/modules/scroll/CheckScroll.ts':
      /*!********************************************!*\
  !*** ./base/modules/scroll/CheckScroll.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/*\n\n CheckScroll.ts\n\n*/\nvar CheckScroll = /** @class */ (function () {\n    function CheckScroll() {\n        this.target01 = document.querySelector('.fn-button-floating-translate');\n        this.target02 = document.querySelector('.fn-button-floating-page-top');\n        this.target03 = document.querySelector('.fn-txt-scoll');\n        this.target04 = document.querySelector('.fn-anchor-link01');\n        this.target05 = document.querySelector('.fn-anchor-link02');\n    }\n    CheckScroll.prototype.branches = function (getScrollState) {\n        if (getScrollState[4] < getScrollState[0]) {\n            this.target01.classList.add('is-page-top');\n            this.target02.classList.add('is-scroll-top');\n            this.target02.classList.add('is-page-top');\n            this.target03.innerText = \"Page Top\";\n            getScrollState[1].classList.remove('fa-angle-double-down');\n            getScrollState[1].classList.add('fa-angle-double-up');\n        }\n        else {\n            this.target01.classList.remove('is-page-top');\n            this.target02.classList.remove('is-scroll-top');\n            this.target02.classList.remove('is-page-top');\n            this.target03.innerText = \"Scroll\";\n            getScrollState[1].classList.remove('fa-angle-double-up');\n            getScrollState[1].classList.add('fa-angle-double-down');\n        }\n        if (getScrollState[2] <= 0 && getScrollState[3] > 0) {\n            this.target04.classList.add('is-current');\n        }\n        else {\n            this.target04.classList.remove('is-current');\n        }\n        if (getScrollState[3] <= 0) {\n            this.target05.classList.add('is-current');\n        }\n        else {\n            this.target05.classList.remove('is-current');\n        }\n    };\n    return CheckScroll;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckScroll);\n\n\n//# sourceURL=webpack:///./base/modules/scroll/CheckScroll.ts?"
        )

        /***/
      },

    /***/ './base/modules/settings/AddFlag.ts':
      /*!******************************************!*\
  !*** ./base/modules/settings/AddFlag.ts ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/*\n\n AddFlag.ts\n\n*/\nvar AddFlag = /** @class */ (function () {\n    function AddFlag() {\n        this.target = document.body;\n        this.BP = 768;\n    }\n    AddFlag.prototype.branches = function (getWidthState) {\n        if (getWidthState >= this.BP) {\n            this.target.classList.add('pc');\n            this.target.classList.remove('sp');\n        }\n        else if (getWidthState < this.BP) {\n            this.target.classList.add('sp');\n            this.target.classList.remove('pc');\n        }\n    };\n    return AddFlag;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFlag);\n\n\n//# sourceURL=webpack:///./base/modules/settings/AddFlag.ts?"
        )

        /***/
      },

    /***/ './base/modules/settings/EventDefault.ts':
      /*!***********************************************!*\
  !*** ./base/modules/settings/EventDefault.ts ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/*\n\n EventDefault.ts\n\n*/\nvar EventDefault = /** @class */ (function () {\n    function EventDefault() {\n        this.target01 = document.querySelector('.fn-movie01');\n        this.target02 = document.querySelector('.fn-movie02');\n    }\n    EventDefault.prototype.clickEvent = function (event) {\n        event.preventDefault();\n    };\n    EventDefault.prototype.callCore = function () {\n        this.target01.addEventListener('click', this.clickEvent, false);\n        this.target02.addEventListener('click', this.clickEvent, false);\n    };\n    return EventDefault;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDefault);\n\n\n//# sourceURL=webpack:///./base/modules/settings/EventDefault.ts?"
        )

        /***/
      },

    /***/ './base/modules/state/SetStates.ts':
      /*!*****************************************!*\
  !*** ./base/modules/state/SetStates.ts ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/*\n\n SetStates.ts\n\n*/\nvar SetStates = /** @class */ (function () {\n    function SetStates() {\n        this.BW = document.body.clientWidth;\n        this.WH = window.innerHeight;\n        this.scrollState01 = document.querySelector(\'.fn-angle-down\');\n        this.scrollState02 = document\n            .querySelector(\'.fn-area-about\')\n            .getBoundingClientRect().top;\n        this.scrollState03 = document\n            .querySelector(\'.fn-area-member\')\n            .getBoundingClientRect().top;\n        this.scrollState04 = document\n            .querySelector(\'.fn-footer\')\n            .getBoundingClientRect().top;\n    }\n    Object.defineProperty(SetStates.prototype, "setWidth", {\n        set: function (setWidthState) {\n            this.BW = setWidthState;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(SetStates.prototype, "setScroll", {\n        set: function (setScrollState) {\n            this.WH = setScrollState[0];\n            this.scrollState01 = setScrollState[1];\n            this.scrollState02 = setScrollState[2];\n            this.scrollState03 = setScrollState[3];\n            this.scrollState04 = setScrollState[4];\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(SetStates.prototype, "getWidth", {\n        get: function () {\n            return this.BW;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(SetStates.prototype, "getScroll", {\n        get: function () {\n            return [\n                this.WH,\n                this.scrollState01,\n                this.scrollState02,\n                this.scrollState03,\n                this.scrollState04\n            ];\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return SetStates;\n}());\n/* harmony default export */ __webpack_exports__["default"] = (SetStates);\n\n\n//# sourceURL=webpack:///./base/modules/state/SetStates.ts?'
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

    /***/ './node_modules/jump.js/dist/jump.module.js':
      /*!**************************************************!*\
  !*** ./node_modules/jump.js/dist/jump.module.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n// Robert Penner's easeInOutQuad\n\n// find the rest of his easing functions here: http://robertpenner.com/easing/\n// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js\n\nvar easeInOutQuad = function easeInOutQuad(t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * t * t + b;\n  t--;\n  return -c / 2 * (t * (t - 2) - 1) + b;\n};\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\nvar jumper = function jumper() {\n  // private variable cache\n  // no variables are created during a jump, preventing memory leaks\n\n  var element = void 0; // element to scroll to                   (node)\n\n  var start = void 0; // where scroll starts                    (px)\n  var stop = void 0; // where scroll stops                     (px)\n\n  var offset = void 0; // adjustment from the stop position      (px)\n  var easing = void 0; // easing function                        (function)\n  var a11y = void 0; // accessibility support flag             (boolean)\n\n  var distance = void 0; // distance of scroll                     (px)\n  var duration = void 0; // scroll duration                        (ms)\n\n  var timeStart = void 0; // time scroll started                    (ms)\n  var timeElapsed = void 0; // time spent scrolling thus far          (ms)\n\n  var next = void 0; // next scroll position                   (px)\n\n  var callback = void 0; // to call when done scrolling            (function)\n\n  // scroll position helper\n\n  function location() {\n    return window.scrollY || window.pageYOffset;\n  }\n\n  // element offset helper\n\n  function top(element) {\n    return element.getBoundingClientRect().top + start;\n  }\n\n  // rAF loop helper\n\n  function loop(timeCurrent) {\n    // store time scroll started, if not started already\n    if (!timeStart) {\n      timeStart = timeCurrent;\n    }\n\n    // determine time spent scrolling so far\n    timeElapsed = timeCurrent - timeStart;\n\n    // calculate next scroll position\n    next = easing(timeElapsed, start, distance, duration);\n\n    // scroll to it\n    window.scrollTo(0, next);\n\n    // check progress\n    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop\n    : done(); // scrolling is done\n  }\n\n  // scroll finished helper\n\n  function done() {\n    // account for rAF time rounding inaccuracies\n    window.scrollTo(0, start + distance);\n\n    // if scrolling to an element, and accessibility is enabled\n    if (element && a11y) {\n      // add tabindex indicating programmatic focus\n      element.setAttribute('tabindex', '-1');\n\n      // focus the element\n      element.focus();\n    }\n\n    // if it exists, fire the callback\n    if (typeof callback === 'function') {\n      callback();\n    }\n\n    // reset time for next jump\n    timeStart = false;\n  }\n\n  // API\n\n  function jump(target) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    // resolve options, or use defaults\n    duration = options.duration || 1000;\n    offset = options.offset || 0;\n    callback = options.callback; // \"undefined\" is a suitable default, and won't be called\n    easing = options.easing || easeInOutQuad;\n    a11y = options.a11y || false;\n\n    // cache starting position\n    start = location();\n\n    // resolve target\n    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {\n      // scroll from current position\n      case 'number':\n        element = undefined; // no element to scroll to\n        a11y = false; // make sure accessibility is off\n        stop = start + target;\n        break;\n\n      // scroll to element (node)\n      // bounding rect is relative to the viewport\n      case 'object':\n        element = target;\n        stop = top(element);\n        break;\n\n      // scroll to element (selector)\n      // bounding rect is relative to the viewport\n      case 'string':\n        element = document.querySelector(target);\n        stop = top(element);\n        break;\n    }\n\n    // resolve scroll distance, accounting for offset\n    distance = stop - start + offset;\n\n    // resolve duration\n    switch (_typeof(options.duration)) {\n      // number in ms\n      case 'number':\n        duration = options.duration;\n        break;\n\n      // function passed the distance of the scroll\n      case 'function':\n        duration = options.duration(distance);\n        break;\n    }\n\n    // start the loop\n    window.requestAnimationFrame(loop);\n  }\n\n  // expose only the jump method\n  return jump;\n};\n\n// export singleton\n\nvar singleton = jumper();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (singleton);\n\n\n//# sourceURL=webpack:///./node_modules/jump.js/dist/jump.module.js?"
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
