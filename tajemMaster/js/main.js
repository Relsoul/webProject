/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by soul on 2016/3/22.
	 */

	var $ = __webpack_require__(1);

	var Nav = function () {
	    function Nav(elem) {
	        _classCallCheck(this, Nav);

	        this.navElem = $(elem.navElem);
	        this.setLocationNav(elem.locationElem);
	        this.bindEvents();
	    }

	    _createClass(Nav, [{
	        key: "setLocationNav",
	        value: function setLocationNav(locationElem) {
	            var _this = this;

	            this.LocationElem = [];
	            locationElem.forEach(function (e, i) {
	                _this.LocationElem.push({ top: _this.getTop(e), name: e, height: $(e).height() });
	            });
	        }
	    }, {
	        key: "getTop",
	        value: function getTop(elem) {
	            return $(elem).position().top;
	        }
	    }, {
	        key: "bindEvents",
	        value: function bindEvents() {
	            var _this2 = this;

	            this.navElem.on("click", "a", function (e) {
	                var index = _this2.navElem.find("li").index($(e.target).parent("li"));
	                _this2.goLocation(index);
	                return false;
	            });
	            $(window).on("scroll", function (e) {
	                var windowTop = $(window).scrollTop();
	                if (windowTop >= 120) {
	                    if (_this2.navElem.attr("class").indexOf("float-nav") <= -1) {
	                        _this2.navElem.addClass("float-nav");
	                    }
	                    var index = _this2.windowTopIndex(windowTop);
	                    _this2.setNavClass(index);
	                } else {
	                    $(_this2.navElem).find(".nav-list").show();
	                    _this2.navElem.removeClass("float-nav");
	                }
	            });
	        }
	    }, {
	        key: "setNavClass",
	        value: function setNavClass(index) {
	            this.navElem.find("li").siblings().removeClass("nav-current");
	            this.navElem.find("li").eq(index).addClass("nav-current");
	        }
	    }, {
	        key: "goLocation",
	        value: function goLocation(index) {
	            //$(window).scrollTop(1000)
	            $("html,body").stop().animate({
	                scrollTop: this.LocationElem[index].top
	            }, 500);
	            return false;
	        }
	    }, {
	        key: "windowTopIndex",
	        value: function windowTopIndex(scroll) {
	            var _index = void 0;
	            for (var i = 0; i <= this.LocationElem.length; i++) {
	                var e = this.LocationElem[i];
	                if (scroll + 20 <= e.top + e.height) {
	                    _index = i;
	                    break;
	                }
	            }
	            return _index;
	        }
	    }]);

	    return Nav;
	}();

	var nav = new Nav({
	    navElem: "nav",
	    locationElem: ["header", ".second-screen", ".fourth-screen", ".fifth-screen", ".sixth-screen", ".seventh-screen", ".eighth-screen"]
	});

	$(".open-btn").on("click", function () {
	    var isopen = true;
	    return function () {
	        if (isopen) {
	            $(".nav-list").show(500);
	            isopen = !isopen;
	        } else {
	            $(".nav-list").hide(500);
	            isopen = !isopen;
	        }
	    };
	}());

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);