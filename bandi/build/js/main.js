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

	var _header = __webpack_require__(1);

	var _header2 = _interopRequireDefault(_header);

	var _features = __webpack_require__(13);

	var _features2 = _interopRequireDefault(_features);

	var _work = __webpack_require__(18);

	var _work2 = _interopRequireDefault(_work);

	var _team = __webpack_require__(34);

	var _team2 = _interopRequireDefault(_team);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by soul on 2016/3/26.
	 */

	/*let child=new class extends Vue {
	    constructor(){
	        super();
	        this.template="#nav-list";
	        this.props=["items"];
	        this.methods={
	            notify(){
	                alert(1)
	            }
	        }
	    }

	};*/

	/*let child=Vue.extend();*/

	new Vue({
	    el: "body",
	    components: {
	        HeaderNav: _header2.default,
	        Features: _features2.default,
	        Work: _work2.default,
	        Team: _team2.default
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev\\js\\header\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Project\\soul\\webProject\\bandi\\dev\\js\\header\\header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _headerNavList = __webpack_require__(7);

	var _headerNavList2 = _interopRequireDefault(_headerNavList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            msg: 'hello vue',
	            h1: "Meet Brandi!",
	            h3: {
	                highlight: "/creative",
	                text: "one page template"
	            },
	            p: "We are a tearn of professionals"
	        };
	    },

	    components: {
	        HeaderNavList: _headerNavList2.default
	    }
	};
	// </script>
	//
	// <template id="header">
	//     <header class="nav-bg">
	//         <div class="wrap-center">
	//             <nav class="clearfix">
	//                 <div class="logo">
	//                     <img src="" alt="">
	//                     <p></p>
	//                 </div>
	//                 <header-nav-list></header-nav-list>
	//             </nav>
	//             <div class="header-text">
	//                 <h1>{{h1}}</h1>
	//                 <h2><span>{{h3.highlight}}</span>{{h3.text}}</h2>
	//                 <p><span class="borderLine"></span>{{p}} <span class="borderLine"></span></p>
	//             </div>
	//             <ul class="header-share">
	//                 <li class="icon"></li>
	//                 <li class="icon"></li>
	//                 <li class="icon"></li>
	//                 <li class="icon"></li>
	//             </ul>
	//         </div>
	//     </header>
	// </template>
	// <style >
	//
	// </style>
	//
	//
	// <script>

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(8)
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev\\js\\header\\header-nav-list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Project\\soul\\webProject\\bandi\\dev\\js\\header\\header-nav-list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header-nav-list.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header-nav-list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template id="nav-list">
	//     <ul class="nav-list">
	//         <li v-for="item in items" v-on:click="notify">{{item}}</li>
	//     </ul>
	// </template>
	// <style>
	//
	// </style>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            items: ["Home", "Features", "Works", "Team", "Contact"]
	        };
	    },

	    methods: {
	        notify: function notify() {
	            alert(1);
	        }
	    }
	};
	// </script>

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"nav-list\">\n    <li v-for=\"item in items\" v-on:click=\"notify\">{{item}}</li>\n</ul>\n";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"nav-bg\">\n    <div class=\"wrap-center\">\n        <nav class=\"clearfix\">\n            <div class=\"logo\">\n                <img src=\"xxxHTMLLINKxxx0.99979419680312280.32696785358712077xxx\" alt=\"\">\n                <p></p>\n            </div>\n            <header-nav-list></header-nav-list>\n        </nav>\n        <div class=\"header-text\">\n            <h1>{{h1}}</h1>\n            <h2><span>{{h3.highlight}}</span>{{h3.text}}</h2>\n            <p><span class=\"borderLine\"></span>{{p}} <span class=\"borderLine\"></span></p>\n        </div>\n        <ul class=\"header-share\">\n            <li class=\"icon\"></li>\n            <li class=\"icon\"></li>\n            <li class=\"icon\"></li>\n            <li class=\"icon\"></li>\n        </ul>\n    </div>\n</header>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(14)
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev\\js\\features\\features.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Project\\soul\\webProject\\bandi\\dev\\js\\features\\features.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./features.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./features.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//    <div class="features">
	//        <div class="wrap-center">
	//             <h1 class="">FEATURES</h1>
	//            <div class="icon love-icon"></div>
	//            <ul class="features-list">
	//                <li v-for="item in items">
	//                    <div class="features-left">
	//                        <img :src="item.imgSrc" alt="">
	//                    </div>
	//                    <div class="features-right">
	//                         <h3>{{item.h3}}</h3>
	//                        <p>{{item.p}}</p>
	//                    </div>
	//                </li>
	//            </ul>
	//        </div>
	//    </div>
	// </template>
	// <style>
	//
	//
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            items: [{
	                imgSrc: "build/images/branding.png",
	                h3: "Branding",
	                p: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
	            }, {
	                imgSrc: "build/images/development.png",
	                h3: "Development",
	                p: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
	            }, {
	                imgSrc: "build/images/consult.png",
	                h3: "Consulting",
	                p: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
	            }]
	        };
	    },

	    components: {}
	};
	// </script>

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"features\">\n    <div class=\"wrap-center\">\n         <h1 class=\"\">FEATURES</h1>\n        <div class=\"icon love-icon\"></div>\n        <ul class=\"features-list\">\n            <li v-for=\"item in items\">\n                <div class=\"features-left\">\n                    <img :src=\"item.imgSrc\" alt=\"\">\n                </div>\n                <div class=\"features-right\">\n                     <h3>{{item.h3}}</h3>\n                    <p>{{item.p}}</p>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(19)
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev\\js\\work\\work.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Project\\soul\\webProject\\bandi\\dev\\js\\work\\work.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./work.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./work.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _workTab = __webpack_require__(22);

	var _workTab2 = _interopRequireDefault(_workTab);

	var _workImgGallery = __webpack_require__(27);

	var _workImgGallery2 = _interopRequireDefault(_workImgGallery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="work">
	//         <div class="wrap-center">
	//             <h1 class="base-color">WORK</h1>
	//             <div class="icon love-icon"></div>
	//             <p class="base-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
	//             <work-tab></work-tab>
	//         </div>
	//         <work-img-gallery></work-img-gallery>
	//     </div>
	// </template>
	// <style>
	//
	//
	//
	//
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            msg: 'hello vue'
	        };
	    },

	    components: {
	        WorkTab: _workTab2.default,
	        WorkImgGallery: _workImgGallery2.default
	    }
	};

	// </script>

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev\\js\\work\\work-tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Project\\soul\\webProject\\bandi\\dev\\js\\work\\work-tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./work-tab.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./work-tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <ul class="work-tab-list">
	//         <li v-for="(index,item) in items" :class="index==0?'work-current':''" >{{item}}</li>
	//     </ul>
	// </template>
	// <style>
	//
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            items: ["All", "Branding", "Web", "Logo Design", "Photography"]
	        };
	    },

	    components: {}
	};
	// </script>

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"work-tab-list\">\n    <li v-for=\"(index,item) in items\" :class=\"index==0?'work-current':''\" >{{item}}</li>\n</ul>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(28)
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev\\js\\work\\work-imgGallery.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Project\\soul\\webProject\\bandi\\dev\\js\\work\\work-imgGallery.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./work-imgGallery.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./work-imgGallery.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hover = __webpack_require__(31);

	console.log(18, _hover.Hover); // <template>
	//     <ul class="work-gallery">
	//         <li v-for="item in items" @mouseover="greet($event,item.dataP,item.dataH3)" :data-p="item.dataP" :data-h3="item.dataH3"><img :src="item.imgSrc" alt=""></li>
	//     </ul>
	//     <div class="work-gallery-hover" >
	//         <div class="work-gallery-content">
	//             <div class="icon icon-work-eye"></div>
	//             <h3>{{dataP}}</h3>
	//             <p>{{dataH3}}</p>
	//         </div>
	//     </div>
	// </template>
	// <style>
	//
	// </style>
	// <script>

	exports.default = {
	    data: function data() {
	        return {
	            items: [{ imgSrc: "build/images/img-gallery-1.jpg", dataP: "111", dataH3: "222333" }, { imgSrc: "build/images/img-gallery-2.jpg", dataP: "111", dataH3: "222333" }, { imgSrc: "build/images/img-gallery-3.jpg", dataP: "111", dataH3: "222333" }, { imgSrc: "build/images/img-gallery-4.jpg", dataP: "111", dataH3: "222333" }, { imgSrc: "build/images/img-gallery-5.jpg", dataP: "111", dataH3: "222333" }, { imgSrc: "build/images/img-gallery-6.jpg", dataP: "111", dataH3: "222333" }, { imgSrc: "build/images/img-gallery-7.jpg", dataP: "111", dataH3: "222333" }, { imgSrc: "build/images/img-gallery-8.jpg", dataP: "111", dataH3: "222333" }],
	            dataP: "",
	            dataH3: ""
	        };
	    },

	    methods: {
	        greet: (0, _hover.Hover)(".work-gallery-hover", function (data) {
	            this.dataP = data[0];
	            this.dataH3 = data[1];
	            //console.log($(".work-gallery-hover"))
	        })
	    }
	};
	// </script>

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	var Hover = function Hover(elem, func) {
	        return function (event) {
	                if (screen.width <= 600) {
	                        return false;
	                }
	                var $target = $(event.target);
	                var offset = $target.position();
	                $(elem).width($target.width());
	                $(elem).height($target.height());
	                $(elem).css({ top: offset.top, left: offset.left });
	                $(elem).show();

	                for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                        data[_key - 1] = arguments[_key];
	                }

	                func.call(this, data);
	        };
	};

	exports.Hover = Hover;

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"work-gallery\">\n    <li v-for=\"item in items\" @mouseover=\"greet($event,item.dataP,item.dataH3)\" :data-p=\"item.dataP\" :data-h3=\"item.dataH3\"><img :src=\"item.imgSrc\" alt=\"\"></li>\n</ul>\n<div class=\"work-gallery-hover\" >\n    <div class=\"work-gallery-content\">\n        <div class=\"icon icon-work-eye\"></div>\n        <h3>{{dataP}}</h3>\n        <p>{{dataH3}}</p>\n    </div>\n</div>\n";

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"work\">\n    <div class=\"wrap-center\">\n        <h1 class=\"base-color\">WORK</h1>\n        <div class=\"icon love-icon\"></div>\n        <p class=\"base-p\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>\n        <work-tab></work-tab>\n    </div>\n    <work-img-gallery></work-img-gallery>\n</div>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev\\js\\team\\team.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Project\\soul\\webProject\\bandi\\dev\\js\\team\\team.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./team.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./team.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="team">
	//         <div class="wrap-center">
	//             <h1 class="base-color">MEET OUR TEAM</h1>
	//             <div class="icon love-icon"></div>
	//             <p class="base-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
	//
	//         </div>
	//     </div>
	// </template>
	// <style>
	//
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            msg: 'hello vue'
	        };
	    },

	    components: {}
	};
	// </script>

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"team\">\n    <div class=\"wrap-center\">\n        <h1 class=\"base-color\">MEET OUR TEAM</h1>\n        <div class=\"icon love-icon\"></div>\n        <p class=\"base-p\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>\n\n    </div>\n</div>\n";

/***/ }
/******/ ]);