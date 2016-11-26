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

	'use strict';

	var _dom = __webpack_require__(1);

	var _dom2 = _interopRequireDefault(_dom);

	var _HeaderHi = __webpack_require__(2);

	var _Renderer = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var myRenderer = new _Renderer.Renderer((0, _dom2.default)(
	  'div',
	  { className: 'text' },
	  (0, _dom2.default)(
	    _HeaderHi.HeaderHi,
	    { className: 'headerHi' },
	    (0, _dom2.default)(
	      'div',
	      { className: 'hidiv' },
	      'h/.i'
	    )
	  )
	), document.body);

	myRenderer.render();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = dom;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tag = function () {
	  function Tag(target, attributes, children) {
	    _classCallCheck(this, Tag);

	    if (!target) {
	      throw new Error("<TagName> cannot be null");
	    }
	    this.attributes = attributes || {};
	    this.children = children;
	    if (typeof target === 'string') {
	      this.tagName = target;
	    } else {
	      this.domObject = new target(attributes);
	      this.tagName = 'div';
	    }
	  }

	  _createClass(Tag, [{
	    key: 'render',
	    value: function render() {
	      if (this.domObject) {
	        this.domObject.children = this.children;
	        this.children = this.domObject.render();
	      }
	      return this;
	    }
	  }]);

	  return Tag;
	}();

	function dom(tagName, attributes) {
	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }

	  return new Tag(tagName, attributes, children);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HeaderHi = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dom = __webpack_require__(1);

	var _dom2 = _interopRequireDefault(_dom);

	var _Component2 = __webpack_require__(3);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderHi = exports.HeaderHi = function (_Component) {
	  _inherits(HeaderHi, _Component);

	  function HeaderHi() {
	    _classCallCheck(this, HeaderHi);

	    return _possibleConstructorReturn(this, (HeaderHi.__proto__ || Object.getPrototypeOf(HeaderHi)).apply(this, arguments));
	  }

	  _createClass(HeaderHi, [{
	    key: 'render',
	    value: function render() {
	      return (0, _dom2.default)(
	        'div',
	        null,
	        'Head',
	        (0, _dom2.default)(
	          'div',
	          null,
	          (0, _dom2.default)(
	            'pre',
	            null,
	            this.children
	          ),
	          'e'
	        ),
	        'rHi'
	      );
	    }
	  }]);

	  return HeaderHi;
	}(_Component3.default);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dom = __webpack_require__(1);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	  function Component() {
	    _classCallCheck(this, Component);
	  }

	  _createClass(Component, [{
	    key: 'render',
	    value: function render() {
	      throw new Error('Render needs to be overridden');
	    }
	  }]);

	  return Component;
	}();

	exports.default = Component;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Renderer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component = __webpack_require__(3);

	var _flatishMap = __webpack_require__(5);

	var _flatishMap2 = _interopRequireDefault(_flatishMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var keyMapping = {
	  className: 'class',
	  style: function style(el, arg) {
	    el.style = arg;
	  }
	};

	var Renderer = exports.Renderer = function () {
	  function Renderer(root, rootDOM) {
	    _classCallCheck(this, Renderer);

	    this.root = root;
	    this.rootDOM = rootDOM;
	  }

	  _createClass(Renderer, [{
	    key: 'createElement',
	    value: function createElement(node, mountPoint) {
	      var el = document.createElement(node.tagName);
	      Object.keys(node.attributes).forEach(function (key) {
	        var keyAttr = keyMapping[key] || key;
	        var keyVal = node.attributes[key];
	        if (typeof keyAttr === 'function') {
	          keyAttr(node, keyVal);
	        } else {
	          el.setAttribute(keyAttr, keyVal);
	        }
	      });
	      return el;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      this.rootDOM.innerHTML = '';
	      var els = this.buildDOM(this.root);
	      (0, _flatishMap2.default)(els, function (el) {
	        _this.rootDOM.appendChild(el);
	      });
	    }
	  }, {
	    key: 'displayRenderedNode',
	    value: function displayRenderedNode(node) {
	      var _this2 = this;

	      var nel = this.createElement(node);
	      (0, _flatishMap2.default)(node.children, function (els) {
	        (0, _flatishMap2.default)(_this2.buildDOM(els), function (el) {
	          return nel.appendChild(el);
	        });
	      });
	      return nel;
	    }
	  }, {
	    key: 'buildDOM',
	    value: function buildDOM(node) {
	      var _this3 = this;

	      console.log(node);
	      if (typeof node === 'string') {
	        return document.createTextNode(node);
	      }
	      var out = (0, _flatishMap2.default)(node, function (nodePart) {
	        return _this3.displayRenderedNode(nodePart.render());
	      });
	      return out;
	    }
	  }]);

	  return Renderer;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flatishMap;
	function flatishMap(ary, cb) {
	  if (Array.isArray(ary)) {
	    return ary.map(cb);
	  } else {
	    return cb(ary);
	  }
	}

/***/ }
/******/ ]);