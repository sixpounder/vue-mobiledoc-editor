(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vueMobiledocEditor"] = factory(require("vue"));
	else
		root["vueMobiledocEditor"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_48__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(1)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 2 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_titlelize__ = __webpack_require__(14);


var button = function button(h, ctx, clickAction) {
  return h(
    'button',
    {
      'class': 'mobiledoc-button',
      attrs: { id: 'mobiledoc-' + ctx.type + '-button'
      },
      on: {
        'click': clickAction
      }
    },
    [ctx.label, ctx.$slots.default]
  );
};

/* harmony default export */ exports["a"] = {
  props: {
    type: { type: String, required: true },
    label: { type: String },

    tag: { type: String },

    prompt: { type: Object },

    name: { type: String },
    text: { type: String, default: function _default() {
        return '';
      } },
    payload: { type: Object, default: function _default() {} },

    editMode: { type: Boolean, default: function _default() {
        return true;
      } }
  },

  inject: ['editorVm'],

  render: function render(h) {
    var _this = this;

    var editorVm = this.editorVm;
    var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_titlelize__["a" /* default */])(this.type);
    if (type === 'Markup') {
      if (!this.tag) throw new Error('Markup buttons require a \'tag\' prop');
      return button(h, this, function () {
        return editorVm.toggleMarkup(_this.tag);
      });
    } else if (type === 'Section') {
      if (!this.tag) throw new Error('Section buttons require a \'tag\' prop');
      return button(h, this, function () {
        return editorVm.toggleSection(_this.tag);
      });
    } else if (type === 'Link') {
      return button(h, this, function () {
        return editorVm.toggleLink();
      });
    } else if (type === 'Atom') {
      if (!this.name) throw new Error('Atom buttons require a \'name\' prop');
      var name = this.name,
          text = this.text,
          payload = this.payload;

      return button(h, this, function () {
        return editorVm.addAtom(name, text, payload);
      });
    } else if (type === 'Card') {
      if (!this.name) throw new Error('Card buttons require a \'name\' prop');
      var _name = this.name,
          _payload = this.payload,
          editMode = this.editMode;

      return button(h, this, function () {
        return editorVm.addCard(_name, _payload, editMode);
      });
    } else throw new Error('The button ' + type + ' does not exist');
  }
};

/***/ },
/* 5 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 8 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(7)
  , defined = __webpack_require__(6);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__ = __webpack_require__(4);


/* harmony default export */ exports["a"] = {
  functional: true,

  render: function render(h) {
    return h(
      'div',
      {
        attrs: { id: 'mobiledoc-toolbar' }
      },
      [h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'markup', tag: 'strong' }
        },
        [' B ']
      ), h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'markup', tag: 'em' }
        },
        [' I ']
      ), h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'link' }
        },
        [' Link ']
      ), h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'section', tag: 'h1' }
        },
        [' H1 ']
      ), h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'section', tag: 'h2' }
        },
        [' H2 ']
      ), h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'section', tag: 'ul' }
        },
        [' UL ']
      ), h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'section', tag: 'ol' }
        },
        [' OL ']
      ), h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'section', tag: 'blockquote' }
        },
        [' Blockquote ']
      ), h(
        __WEBPACK_IMPORTED_MODULE_0__MobiledocButton__["a" /* default */],
        {
          attrs: { type: 'section', tag: 'pull-quote' }
        },
        [' Pullquote ']
      ), h(
        'slot',
        null,
        []
      )]
    );
  }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony export (immutable) */ exports["a"] = compToCard;



function renderCard(comp) {
  var isEditing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var CompCard = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(comp);

  return function createCard(_ref) {
    var env = _ref.env,
        options = _ref.options,
        payload = _ref.payload;

    var targetNode = document.createElement('div');

    var cardVm = void 0;
    env.didRender(function () {
      payload = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, payload);

      var propsData = { env: env, payload: payload, options: options, isEditing: isEditing };

      cardVm = new CompCard({ propsData: propsData }).$mount();
      targetNode.appendChild(cardVm.$el);
    });

    env.onTeardown(function () {
      cardVm.$destroy();
    });

    return targetNode;
  };
}

function compToCard(component, name) {
  if (!name && typeof component.name === 'undefined') {
    throw new Error("Can't create card, no name defined: " + component);
  }

  return {
    name: name || component.name,
    type: 'dom',
    component: component,
    render: renderCard(component),
    edit: renderCard(component, true)
  };
}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EMPTY_MOBILEDOC; });
var EMPTY_MOBILEDOC = {
  version: '0.3.0',
  markups: [],
  atoms: [],
  cards: [],
  sections: []
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export capitalize */
/* unused harmony export camelize */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelize(str) {
  return str.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
}

/* harmony default export */ exports["a"] = function (str) {
  return capitalize(camelize(str));
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobiledoc_kit__ = __webpack_require__(45);




/* harmony default export */ exports["default"] = {
  provide: function provide() {
    return {
      editorVm: this.editorVm
    };
  },


  props: {
    mobiledoc: { type: Object, default: function _default() {} },
    atoms: { type: Array, default: function _default() {
        return [];
      } },
    cards: { type: Array, default: function _default() {
        return [];
      } },
    placeholder: { type: String, default: function _default() {
        return '';
      } },
    autofocus: { type: Boolean, default: function _default() {
        return true;
      } },
    spellCheck: { type: Boolean, default: function _default() {
        return true;
      } },
    serializeVersion: { type: String, default: function _default() {
        return '0.3.0';
      } },
    cardOptions: { type: Object, default: function _default() {} },
    enableEditing: { type: Boolean, default: function _default() {
        return true;
      } }
  },

  data: function data() {
    return {
      editor: {},
      activeMarkupTags: [],
      activeSectionTags: [],
      canEdit: this.enableEditing
    };
  },


  computed: {
    editorOptions: function editorOptions() {
      return {
        autofocus: this.autofocus,
        spellcheck: this.spellcheck,
        placeholder: this.placeholder,
        serializeVersion: this.serializeVersion,
        mobiledoc: this.mobiledoc,
        atoms: this.atoms,
        cards: this.cards,
        cardOptions: this.cardOptions
      };
    },
    editorVm: function editorVm() {
      var _this = this;

      return {
        editor: function editor() {
          return _this.editor;
        },
        canEdit: function canEdit() {
          return _this.canEdit;
        },
        activeMarkupTags: this.activeMarkupTags,
        activeSectionTags: this.activeSectionTags,
        toggleMarkup: this.toggleMarkup,
        toggleSection: this.toggleSection,
        toggleLink: this.toggleLink,
        toggleEditMode: this.toggleEditMode,
        addAtom: this.addAtom,
        addCard: this.addCard
      };
    },
    isEditable: function isEditable() {
      var editor = this.editor;

      return editor ? editor.isEditable : this.enableEditing;
    }
  },

  watch: {
    isEditable: function isEditable() {
      this.canEdit = this.isEditable;
    }
  },

  beforeMount: function beforeMount() {
    this._initEditorWithEventEmitters();
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$once('mounted', function () {
      return _this2._renderEditorPost();
    });
    this.$emit('mounted');
  },


  methods: {
    toggleMarkup: function toggleMarkup(tag) {
      this.editor.toggleMarkup(tag);
    },
    toggleSection: function toggleSection(tag) {
      this.editor.toggleSection(tag);
    },
    toggleLink: function toggleLink() {
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'a';

      if (!this.editor.hasCursor()) return;else if (this.editor.hasActiveMarkup(tag)) this.editor.toggleMarkup(tag);else __WEBPACK_IMPORTED_MODULE_0_mobiledoc_kit__["a" /* UI */].toggleLink(this.editor);
    },
    addAtom: function addAtom(name) {
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.editor.insertAtom(name, text, payload);
    },
    addCard: function addCard(name) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var editMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this.editor.insertCard(name, payload, editMode);
    },
    toggleEditMode: function toggleEditMode() {
      this.isEditable ? this.editor.disableEditing() : this.editor.enableEditing();
    },
    _initEditorWithEventEmitters: function _initEditorWithEventEmitters() {
      var _this3 = this;

      this.$emit('willCreateEditor');

      this.editor = new __WEBPACK_IMPORTED_MODULE_0_mobiledoc_kit__["b" /* Editor */](this.editorOptions);

      if (this.enableEditing === false) this.toggleEditMode();

      this.$emit('didCreateEditor', this.editor);

      this.editor.inputModeDidChange(function () {
        _this3._updateActiveMarkupTags();
        _this3._updateActiveSectionTags();
      });

      this.editor.postDidChange(function () {
        var mobiledoc = _this3.editor.serialize(_this3.serializeVersion);
        _this3.$emit('postWasUpdated', mobiledoc);
      });
    },
    _renderEditorPost: function _renderEditorPost() {
      this.editor.render(this.$refs.editorPost);
    },
    _updateActiveMarkupTags: function _updateActiveMarkupTags() {
      this.activeMarkupTags = this.editor.activeMarkups.map(function (m) {
        return m.tagName;
      });
    },
    _updateActiveSectionTags: function _updateActiveSectionTags() {
      this.activeSectionTags = this.editor.activeSections.map(function (s) {
        return s.isNested ? s.parent.tagName : s.tagName;
      });
    }
  },

  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  }
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(44);
module.exports = __webpack_require__(5).Object.assign;

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9)
  , toLength  = __webpack_require__(40)
  , toIndex   = __webpack_require__(39);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 22 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(19);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 25 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(23)
  , hide      = __webpack_require__(28)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 27 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(31)
  , createDesc = __webpack_require__(36);
module.exports = __webpack_require__(0) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(1)(function(){
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(34)
  , gOPS     = __webpack_require__(32)
  , pIE      = __webpack_require__(35)
  , toObject = __webpack_require__(41)
  , IObject  = __webpack_require__(7)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(1)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(20)
  , IE8_DOM_DEFINE = __webpack_require__(29)
  , toPrimitive    = __webpack_require__(42)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 32 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(27)
  , toIObject    = __webpack_require__(9)
  , arrayIndexOf = __webpack_require__(21)(false)
  , IE_PROTO     = __webpack_require__(37)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(33)
  , enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 35 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys')
  , uid    = __webpack_require__(43);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(6);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 43 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(26);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(30)});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Editor; });
/* unused harmony export Error */
/* unused harmony export ImageCard */
/* unused harmony export MOBILEDOC_VERSION */
/* unused harmony export Position */
/* unused harmony export Range */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ui; });
/* unused harmony export VERSION */
function detect(enumerable, callback) {
  if (enumerable.detect) {
    return enumerable.detect(callback);
  } else {
    for (let i=0; i<enumerable.length; i++) {
      if (callback(enumerable[i])) {
        return enumerable[i];
      }
    }
  }
}

function any(enumerable, callback) {
  if (enumerable.any) { return enumerable.any(callback); }

  for (let i=0; i<enumerable.length; i++) {
    if (callback(enumerable[i])) {
      return true;
    }
  }

  return false;
}

/**
 * Useful for array-like things that aren't
 * actually arrays, like NodeList
 * @private
 */
function forEach(enumerable, callback) {
  if (enumerable.forEach) {
    enumerable.forEach(callback);
  } else {
    for (let i=0; i<enumerable.length; i++) {
      callback(enumerable[i], i);
    }
  }
}

function filter(enumerable, conditionFn) {
  const filtered = [];
  forEach(enumerable, i => {
    if (conditionFn(i)) { filtered.push(i); }
  });
  return filtered;
}

/**
 * @return {Integer} the number of items that are the same, starting from the 0th index, in a and b
 * @private
 */
function commonItemLength(listA, listB) {
  let offset = 0;
  while (offset < listA.length && offset < listB.length) {
    if (listA[offset] !== listB[offset]) {
      break;
    }
    offset++;
  }
  return offset;
}

/**
 * @return {Array} the items that are the same, starting from the 0th index, in a and b
 * @private
 */
function commonItems(listA, listB) {
  let offset = 0;
  while (offset < listA.length && offset < listB.length) {
    if (listA[offset] !== listB[offset]) {
      break;
    }
    offset++;
  }
  return listA.slice(0, offset);
}

function reduce(enumerable, callback, initialValue) {
  let previousValue = initialValue;
  forEach(enumerable, (val, index) => {
    previousValue = callback(previousValue, val, index);
  });
  return previousValue;
}

/**
 * @param {Array} array of key1,value1,key2,value2,...
 * @return {Object} {key1:value1, key2:value2, ...}
 * @private
 */
function kvArrayToObject(array) {
  const obj = {};
  for (let i = 0; i < array.length; i+=2) {
    let [key, value] = [array[i], array[i+1]];
    obj[key] = value;
  }
  return obj;
}

function objectToSortedKVArray(obj) {
  const keys = Object.keys(obj).sort();
  const result = [];
  keys.forEach(k => {
    result.push(k);
    result.push(obj[k]);
  });
  return result;
}

// check shallow equality of two non-nested arrays
function isArrayEqual(arr1, arr2) {
  let l1 = arr1.length, l2 = arr2.length;
  if (l1 !== l2) { return false; }

  for (let i=0; i < l1; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}

// return an object with only the valid keys
function filterObject(object, validKeys=[]) {
  let result = {};
  forEach(
    filter(Object.keys(object), key => validKeys.indexOf(key) !== -1),
      key => result[key] = object[key]
  );
  return result;
}

function contains(array, item) {
  return array.indexOf(item) !== -1;
}

function values(object) {
  return Object.keys(object).map(key => object[key]);
}

const NODE_TYPES = {
  ELEMENT: 1,
  TEXT: 3,
  COMMENT: 8
};

function isTextNode(node) {
  return node.nodeType === NODE_TYPES.TEXT;
}

function isCommentNode(node) {
  return node.nodeType === NODE_TYPES.COMMENT;
}

function isElementNode(node) {
  return node.nodeType === NODE_TYPES.ELEMENT;
}


function clearChildNodes(element) {
  while (element.childNodes.length) {
    element.removeChild(element.childNodes[0]);
  }
}

/**
 * @return {Boolean} true when the child node is contained or the same as
 * (e.g., inclusive containment)  the parent node
 *  see https://github.com/webmodules/node-contains/blob/master/index.js
 *  Mimics the behavior of `Node.contains`, which is broken in IE 10
 *  @private
 */
function containsNode(parentNode, childNode) {
  if (parentNode === childNode) {
    return true;
  }
  const position = parentNode.compareDocumentPosition(childNode);
  return !!(position & Node.DOCUMENT_POSITION_CONTAINED_BY);
}

/**
 * converts the element's NamedNodeMap of attrs into
 * an object with key-value pairs
 * @param {DOMNode} element
 * @return {Object} key-value pairs
 * @private
 */
function getAttributes(element) {
  const result = {};
  if (element.hasAttributes()) {
    forEach(element.attributes, ({name,value}) => {
      result[name] = value;
    });
  }
  return result;
}

function addClassName(element, className) {
  element.classList.add(className);
}

function removeClassName(element, className) {
  element.classList.remove(className);
}

function normalizeTagName(tagName) {
  return tagName.toLowerCase();
}

function parseHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div;
}

function serializeHTML(node) {
  const div = document.createElement('div');
  div.appendChild(node);
  return div.innerHTML;
}

class View {
  constructor(options={}) {
    options.tagName   = options.tagName   || 'div';
    options.container = options.container || document.body;

    this.element = document.createElement(options.tagName);
    this.container = options.container;
    this.isShowing = false;

    let classNames = options.classNames || [];
    classNames.forEach(name => addClassName(this.element, name));
    this._eventListeners = [];
  }

  addEventListener(element, type, listener) {
    element.addEventListener(type, listener);
    this._eventListeners.push([element, type, listener]);
  }

  removeAllEventListeners() {
    this._eventListeners.forEach(([element, type, listener]) => {
      element.removeEventListener(type, listener);
    });
  }

  show() {
    if(!this.isShowing) {
      this.container.appendChild(this.element);
      this.isShowing = true;
      return true;
    }
  }

  hide() {
    if (this.isShowing) {
      this.container.removeChild(this.element);
      this.isShowing = false;
      return true;
    }
  }

  destroy() {
    this.removeAllEventListeners();
    this.hide();
    this.isDestroyed = true;
  }
}

/*
 * @param {String} string
 * @return {String} a dasherized string. 'modelIndex' -> 'model-index', etc
 */
function dasherize(string) {
  return string.replace(/[A-Z]/g, (match, offset) => {
    const lower = match.toLowerCase();

    return (offset === 0 ? lower : '-' + lower);
  });
}

function startsWith(string, character) {
  return string.charAt(0) === character;
}

function endsWith(string, endString) {
  let index = string.lastIndexOf(endString);
  return index !== -1 && index === string.length - endString.length;
}

function getEventTargetMatchingTag(tagName, target, container) {
  tagName = normalizeTagName(tagName);
  // Traverses up DOM from an event target to find the node matching specifed tag
  while (target && target !== container) {
    if (normalizeTagName(target.tagName) === tagName) {
      return target;
    }
    target = target.parentNode;
  }
}

function getElementRelativeOffset(element) {
  var offset = { left: 0, top: -window.pageYOffset };
  var offsetParent = element.offsetParent;
  var offsetParentPosition = window.getComputedStyle(offsetParent).position;
  var offsetParentRect;

  if (offsetParentPosition === 'relative') {
    offsetParentRect = offsetParent.getBoundingClientRect();
    offset.left = offsetParentRect.left;
    offset.top  = offsetParentRect.top;
  }
  return offset;
}

function getElementComputedStyleNumericProp(element, prop) {
  return parseFloat(window.getComputedStyle(element)[prop]);
}

function positionElementToRect(element, rect, topOffset, leftOffset) {
  var relativeOffset = getElementRelativeOffset(element);
  var style = element.style;
  var round = Math.round;
  var left, top;

  topOffset = topOffset || 0;
  leftOffset = leftOffset || 0;
  left = round(rect.left - relativeOffset.left - leftOffset);
  top  = round(rect.top  + rect.height - relativeOffset.top  - topOffset);
  style.left = left + 'px';
  style.top  = top + 'px';
  return { left: left, top: top };
}

function positionElementHorizontallyCenteredToRect(element, rect, topOffset) {
  var horizontalCenter = (element.offsetWidth / 2) - (rect.width / 2);
  return positionElementToRect(element, rect, topOffset, horizontalCenter);
}

function positionElementCenteredBelow(element, belowElement) {
  var elementMargin = getElementComputedStyleNumericProp(element, 'marginTop');
  return positionElementHorizontallyCenteredToRect(element, belowElement.getBoundingClientRect(), -elementMargin);
}

function setData(element, name, value) {
  if (element.dataset) {
    element.dataset[name] = value;
  } else {
    const dataName = dasherize(name);
    return element.setAttribute(dataName, value);
  }
}

function whenElementIsNotInDOM(element, callback) {
  let isCanceled = false;
  const observerFn = () => {
    if (isCanceled) { return; }
    if (!element.parentNode) {
      callback();
    } else {
      window.requestAnimationFrame(observerFn);
    }
  };
  observerFn();
  return { cancel: () => isCanceled = true };
}

var errorProps = [
  'description',
  'fileName',
  'lineNumber',
  'message',
  'name',
  'number',
  'stack'
];

function MobiledocError() {
  let tmp = Error.apply(this, arguments);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  }
  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (let idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
}

MobiledocError.prototype = Object.create(Error.prototype);

function assert(message, conditional) {
  if (!conditional) {
    throw new MobiledocError(message);
  }
}

const MARKUP_SECTION_TYPE = 'markup-section';
const LIST_SECTION_TYPE = 'list-section';
const MARKUP_TYPE = 'markup';
const MARKER_TYPE = 'marker';
const POST_TYPE = 'post';
const LIST_ITEM_TYPE = 'list-item';
const CARD_TYPE = 'card-section';
const IMAGE_SECTION_TYPE = 'image-section';
const ATOM_TYPE = 'atom';

const CONSTRUCTOR_FN_NAME = 'constructor';

function mixin(target, source) {
  target = target.prototype;
  // Fallback to just `source` to allow mixing in a plain object (pojo)
  source = source.prototype || source;

  Object.getOwnPropertyNames(source).forEach((name) => {
    if (name !== CONSTRUCTOR_FN_NAME) {
      const descriptor = Object.getOwnPropertyDescriptor(source, name);

      Object.defineProperty(target, name, descriptor);
    }
  });
}

class Markerupable {

  clearMarkups() {
    this.markups = [];
  }

  addMarkup(markup) {
    this.markups.push(markup);
  }

  addMarkupAtIndex(markup, index) {
    this.markups.splice(index, 0, markup);
  }

  removeMarkup(markupOrMarkupCallback) {
    let callback;
    if (typeof markupOrMarkupCallback === 'function') {
      callback = markupOrMarkupCallback;
    } else {
      let markup = markupOrMarkupCallback;
      callback = (_markup) => _markup === markup;
    }

    forEach(
      filter(this.markups, callback),
      m => this._removeMarkup(m)
    );
  }

  _removeMarkup(markup) {
    const index = this.markups.indexOf(markup);
    if (index !== -1) {
      this.markups.splice(index, 1);
    }
  }

  hasMarkup(tagNameOrMarkup) {
    return !!this.getMarkup(tagNameOrMarkup);
  }

  getMarkup(tagNameOrMarkup) {
    if (typeof tagNameOrMarkup === 'string') {
      let tagName = normalizeTagName(tagNameOrMarkup);
      return detect(this.markups, markup => markup.tagName === tagName);
    } else {
      let targetMarkup = tagNameOrMarkup;
      return detect(this.markups, markup => markup === targetMarkup);
    }
  }

  get openedMarkups() {
    let count = 0;
    if (this.prev) {
      count = commonItemLength(this.markups, this.prev.markups);
    }

    return this.markups.slice(count);
  }

  get closedMarkups() {
    let count = 0;
    if (this.next) {
      count = commonItemLength(this.markups, this.next.markups);
    }

    return this.markups.slice(count);
  }
}

class LinkedItem {
  constructor() {
    this.next = null;
    this.prev = null;
  }
}

// Unicode uses a pair of "surrogate" characters" (a high- and low-surrogate)
// to encode characters outside the basic multilingual plane (like emoji and
// some languages).
// These values are the unicode code points for the start and end of the
// high- and low-surrogate characters.
// See "high surrogate" and "low surrogate" on
// https://en.wikipedia.org/wiki/Unicode_block
const HIGH_SURROGATE_RANGE = [0xD800, 0xDBFF];
const LOW_SURROGATE_RANGE  = [0xDC00, 0xDFFF];

const Marker = class Marker extends LinkedItem {
  constructor(value='', markups=[]) {
    super();
    this.value = value;
    assert('Marker must have value', value !== undefined && value !== null);
    this.markups = [];
    this.type = MARKER_TYPE;
    this.isMarker = true;
    this.isAtom = false;
    markups.forEach(m => this.addMarkup(m));
  }

  clone() {
    const clonedMarkups = this.markups.slice();
    return this.builder.createMarker(this.value, clonedMarkups);
  }

  get isEmpty() {
    return this.isBlank;
  }

  get isBlank() {
    return this.length === 0;
  }

  charAt(offset) {
    return this.value.slice(offset, offset+1);
  }

  /**
   * A marker's text is equal to its value.
   * Compare with an Atom which distinguishes between text and value
   */
  get text() {
    return this.value;
  }

  get length() {
    return this.value.length;
  }

  // delete the character at this offset,
  // update the value with the new value
  deleteValueAtOffset(offset) {
    assert('Cannot delete value at offset outside bounds',
           offset >= 0 && offset <= this.length);

    let width = 1;
    let code = this.value.charCodeAt(offset);
    if (code >= HIGH_SURROGATE_RANGE[0] && code <= HIGH_SURROGATE_RANGE[1]) {
      width = 2;
    } else if (code >= LOW_SURROGATE_RANGE[0] && code <= LOW_SURROGATE_RANGE[1]) {
      width = 2;
      offset = offset - 1;
    }

    const [ left, right ] = [
      this.value.slice(0, offset),
      this.value.slice(offset+width)
    ];
    this.value = left + right;

    return width;
  }

  canJoin(other) {
    return other && other.isMarker && isArrayEqual(this.markups, other.markups);
  }

  textUntil(offset) {
    return this.value.slice(0, offset);
  }

  split(offset=0, endOffset=this.length) {
    let markers = [
      this.builder.createMarker(this.value.substring(0, offset)),
      this.builder.createMarker(this.value.substring(offset, endOffset)),
      this.builder.createMarker(this.value.substring(endOffset))
    ];

    this.markups.forEach(mu => markers.forEach(m => m.addMarkup(mu)));
    return markers;
  }

  /**
   * @return {Array} 2 markers either or both of which could be blank
   */
  splitAtOffset(offset) {
    assert('Cannot split a marker at an offset > its length',
           offset <= this.length);
    let { value, builder } = this;

    let pre  = builder.createMarker(value.substring(0, offset));
    let post = builder.createMarker(value.substring(offset));

    this.markups.forEach(markup => {
      pre.addMarkup(markup);
      post.addMarkup(markup);
    });

    return [pre, post];
  }

};

mixin(Marker, Markerupable);

var Keycodes = {
  BACKSPACE:    8,
  SPACE:       32,
  ENTER:       13,
  SHIFT:       16,
  ESC:         27,
  DELETE:      46,
  '0':         48,
  '9':         57,
  A:           65,
  Z:           90,
  a:           97,
  z:          122,
  'NUMPAD_0': 186,
  'NUMPAD_9': 111,
  ';':        186,
  '.':        190,
  '`':        192,
  '[':        219,
  '"':        222,

  // Input Method Editor uses multiple keystrokes to display characters.
  // Example on mac: press option-i then i. This fires 2 key events in Chrome
  // with keyCode 229 and displays ˆ and then î.
  // See http://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html#fixed-virtual-key-codes
  IME:        229,

  TAB:          9,
  CLEAR:       12,
  PAUSE:       19,
  PAGEUP:      33,
  PAGEDOWN:    34,
  END:         35,
  HOME:        36,
  LEFT:        37,
  UP:          38,
  RIGHT:       39,
  DOWN:        40,
  INS:         45,
  META:        91,
  ALT:         18,
  CTRL:        17
};

var Keys = {
  BACKSPACE:  'Backspace',
  SPACE:      ' ',
  ENTER:      'Enter',
  SHIFT:      'Shift',
  ESC:        'Escape',
  DELETE:     'Delete',
  INS:        'Insert',
  HOME:       'Home',
  END:        'End',
  PAGEUP:     'PageUp',
  PAGEDOWN:   'PageDown',
  CLEAR:      'Clear',
  PAUSE:      'Pause',
  TAB:        'Tab',
  ALT:        'Alt',
  CTRL:       'Control',

  LEFT:       'ArrowLeft',
  RIGHT:      'ArrowRight',
  UP:         'ArrowUp',
  DOWN:       'ArrowDown'
};

const TAB = '\t';
const ENTER = '\n';

/**
 * @typedef Direction
 * @enum {number}
 * @property {number} FORWARD
 * @property {number} BACKWARD
 */
const DIRECTION = {
  FORWARD: 1,
  BACKWARD: -1
};

const MODIFIERS = {
  META: 1, // also called "command" on OS X
  CTRL: 2,
  SHIFT: 4,
  ALT: 8   // also called "option" on OS X
};

function modifierMask(event) {
  let {
    metaKey, shiftKey, ctrlKey, altKey
  } = event;
  let modVal = (val, modifier) => {
    return (val && modifier) || 0;
  };
  return modVal(metaKey,  MODIFIERS.META) +
         modVal(shiftKey, MODIFIERS.SHIFT) +
         modVal(ctrlKey,  MODIFIERS.CTRL) +
         modVal(altKey,   MODIFIERS.ALT);
}

const SPECIAL_KEYS = {
  BACKSPACE: Keycodes.BACKSPACE,
  TAB:       Keycodes.TAB,
  ENTER:     Keycodes.ENTER,
  ESC:       Keycodes.ESC,
  SPACE:     Keycodes.SPACE,
  PAGEUP:    Keycodes.PAGEUP,
  PAGEDOWN:  Keycodes.PAGEDOWN,
  END:       Keycodes.END,
  HOME:      Keycodes.HOME,
  LEFT:      Keycodes.LEFT,
  UP:        Keycodes.UP,
  RIGHT:     Keycodes.RIGHT,
  DOWN:      Keycodes.DOWN,
  INS:       Keycodes.INS,
  DEL:       Keycodes.DELETE
};

function specialCharacterToCode(specialCharacter) {
  return SPECIAL_KEYS[specialCharacter];
}

// heuristic for determining if `event` is a key event
function isKeyEvent(event) {
  return /^key/.test(event.type);
}

/**
 * An abstraction around a KeyEvent
 * that key listeners in the editor can use
 * to determine what sort of key was pressed
 */
const Key = class Key {
  constructor(event) {
    this.key = event.key;
    this.keyCode = event.keyCode;
    this.charCode = event.charCode;
    this.event = event;
    this.modifierMask = modifierMask(event);
  }

  static fromEvent(event) {
    assert('Must pass a Key event to Key.fromEvent',
           event && isKeyEvent(event));
    return new Key(event);
  }

  toString() {
    if (this.isTab()) { return TAB; }
    return String.fromCharCode(this.charCode);
  }

  // See https://caniuse.com/#feat=keyboardevent-key for browser support.
  isKeySupported() {
    return this.key;
  }

  isKey(identifier) {
    if (this.isKeySupported()) {
      assert(`Must define Keys.${identifier}.`, Keys[identifier]);
      return this.key === Keys[identifier];
    } else {
      assert(`Must define Keycodes.${identifier}.`, Keycodes[identifier]);
      return this.keyCode === Keycodes[identifier];
    }
  }

  isEscape() {
    return this.isKey('ESC');
  }

  isDelete() {
    return this.isKey('BACKSPACE') || this.isForwardDelete();
  }

  isForwardDelete() {
    return this.isKey('DELETE');
  }

  isArrow() {
    return this.isHorizontalArrow() || this.isVerticalArrow();
  }

  isHorizontalArrow() {
    return this.isLeftArrow() || this.isRightArrow();
  }

  isHorizontalArrowWithoutModifiersOtherThanShift() {
    return this.isHorizontalArrow() &&
      !(this.ctrlKey || this.metaKey || this.altKey);
  }

  isVerticalArrow() {
    return this.isKey('UP') || this.isKey('DOWN');
  }

  isLeftArrow() {
    return this.isKey('LEFT');
  }

  isRightArrow() {
    return this.isKey('RIGHT');
  }

  isHome() {
    return this.isKey('HOME');
  }

  isEnd() {
    return this.isKey('END');
  }

  isPageUp() {
    return this.isKey('PAGEUP');
  }

  isPageDown() {
    return this.isKey('PAGEDOWN');
  }

  isInsert() {
    return this.isKey('INS');
  }

  isClear() {
    return this.isKey('CLEAR');
  }

  isPause() {
    return this.isKey('PAUSE');
  }

  isSpace() {
    return this.isKey('SPACE');
  }

  // In Firefox, pressing ctrl-TAB will switch to another open browser tab, but
  // it will also fire a keydown event for the tab+modifier (ctrl). This causes
  // Mobiledoc to erroneously insert a tab character before FF switches to the
  // new browser tab.  Chrome doesn't fire this event so the issue doesn't
  // arise there. Fix this by returning false when the TAB key event includes a
  // modifier.
  // See: https://github.com/bustle/mobiledoc-kit/issues/565
  isTab() {
    return !this.hasAnyModifier() && this.isKey('TAB');
  }

  isEnter() {
    return this.isKey('ENTER');
  }

  /*
   * If the key is the actual shift key. This is false when the shift key
   * is held down and the source `event` is not the shift key.
   * @see {isShift}
   * @return {bool}
   */
  isShiftKey() {
    return this.isKey('SHIFT');
  }

  /*
   * If the key is the actual alt key (aka "option" on mac). This is false when the alt key
   * is held down and the source `event` is not the alt key.
   * @return {bool}
   */
  isAltKey() {
    return this.isKey('ALT');
  }

  /*
   * If the key is the actual ctrl key. This is false when the ctrl key
   * is held down and the source `event` is not the ctrl key.
   * @return {bool}
   */
  isCtrlKey() {
    return this.isKey('CTRL');
  }

  isIME() {
    // FIXME the IME action seems to get lost when we issue an
    // `editor.deleteSelection` before it (in Chrome)
    return this.keyCode === Keycodes.IME;
  }

  get direction() {
    switch (true) {
      case this.isDelete():
        return this.isForwardDelete() ? DIRECTION.FORWARD : DIRECTION.BACKWARD;
      case this.isHorizontalArrow():
        return this.isRightArrow() ? DIRECTION.FORWARD : DIRECTION.BACKWARD;
    }
  }

  /**
   * If the shift key is depressed.
   * For example, while holding down meta+shift, pressing the "v"
   * key would result in an event whose `Key` had `isShift()` with a truthy value,
   * because the shift key is down when pressing the "v".
   * @see {isShiftKey} which checks if the key is actually the shift key itself.
   * @return {bool}
   */
  isShift() {
    return this.shiftKey;
  }

  hasModifier(modifier) {
    return modifier & this.modifierMask;
  }

  hasAnyModifier() {
    return !!this.modifierMask;
  }

  get ctrlKey() {
    return MODIFIERS.CTRL & this.modifierMask;
  }

  get metaKey() {
    return MODIFIERS.META & this.modifierMask;
  }

  get shiftKey() {
    return MODIFIERS.SHIFT & this.modifierMask;
  }

  get altKey() {
    return MODIFIERS.ALT & this.modifierMask;
  }

  isPrintableKey() {
    return !(
      this.isArrow() ||
      this.isHome() || this.isEnd() ||
      this.isPageUp() || this.isPageDown() ||
      this.isInsert() || this.isClear() || this.isPause() ||
      this.isEscape()
    );
  }

  isNumberKey() {
    if (this.isKeySupported()) {
      return this.key >= '0' && this.key <= '9';
    } else {
      const code = this.keyCode;
      return (code >= Keycodes['0'] && code <= Keycodes['9']) ||
        (code >= Keycodes.NUMPAD_0 && code <= Keycodes.NUMPAD_9); // numpad keys
    }
  }

  isLetterKey() {
    if (this.isKeySupported()) {
      const key = this.key;
      return (key >= 'a' && key <= 'z') ||
        (key >= 'A' && key <= 'Z');
    } else {
      const code = this.keyCode;
      return (code >= Keycodes.A && code <= Keycodes.Z) ||
        (code >= Keycodes.a && code <= Keycodes.z);
    }
  }

  isPunctuation() {
    if (this.isKeySupported()) {
      const key = this.key;
      return (key >= ';' && key <= '`') ||
        (key >= '[' && key <= '"');
    } else {
      const code = this.keyCode;
      return (code >= Keycodes[';'] && code <= Keycodes['`']) ||
      (code >= Keycodes['['] && code <= Keycodes['"']);
    }
  }

  /**
   * See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#Printable_keys_in_standard_position
   *   and http://stackoverflow.com/a/12467610/137784
   */
  isPrintable() {
    if (this.ctrlKey || this.metaKey) {
      return false;
    }

    // Firefox calls keypress events for some keys that should not be printable
    if (!this.isPrintableKey()) {
      return false;
    }

    return (
      this.keyCode !== 0 ||
      this.toString().length > 0 ||
      this.isNumberKey() ||
      this.isSpace() ||
      this.isTab()   ||
      this.isEnter() ||
      this.isLetterKey() ||
      this.isPunctuation() ||
      this.isIME()
    );
  }
};

function clearSelection() {
  window.getSelection().removeAllRanges();
}

function textNodeRects(node) {
  let range = document.createRange();
  range.setEnd(node, node.nodeValue.length);
  range.setStart(node, 0);
  return range.getClientRects();
}

function findOffsetInTextNode(node, coords) {
  let len = node.nodeValue.length;
  let range = document.createRange();
  for (let i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    let rect = range.getBoundingClientRect();
    if (rect.top === rect.bottom) {
      continue;
    }
    if (rect.left <= coords.left && rect.right >= coords.left &&
        rect.top <= coords.top && rect.bottom >= coords.top) {
      return {node, offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0)};
    }
  }
  return {node, offset: 0};
}

/*
 * @param {Object} coords with `top` and `left`
 * @see https://github.com/ProseMirror/prosemirror/blob/4c22e3fe97d87a355a0534e25d65aaf0c0d83e57/src/edit/dompos.js
 * @return {Object} {node, offset}
 */
/* eslint-disable complexity */
function findOffsetInNode(node, coords) {
  let closest, dyClosest = 1e8, coordsClosest, offset = 0;
  for (let child = node.firstChild; child; child = child.nextSibling) {
    let rects;
    if (isElementNode(child)) {
      rects = child.getClientRects();
    } else if (isTextNode(child)) {
      rects = textNodeRects(child);
    } else {
      continue;
    }

    for (let i = 0; i < rects.length; i++) {
      let rect = rects[i];
      if (rect.left <= coords.left && rect.right >= coords.left) {
        let dy = rect.top > coords.top ? rect.top - coords.top
            : rect.bottom < coords.top ? coords.top - rect.bottom : 0;
        if (dy < dyClosest) {
          closest = child;
          dyClosest = dy;
          coordsClosest = dy ? {left: coords.left, top: rect.top} : coords;
          if (isElementNode(child) && !child.firstChild) {
            offset = i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
          }
          continue;
        }
      }
      if (!closest &&
          (coords.top >= rect.bottom || coords.top >= rect.top && coords.left >= rect.right)) {
        offset = i + 1;
      }
    }
  }
  if (!closest) {
    return {node, offset};
  }
  if (isTextNode(closest)) {
    return findOffsetInTextNode(closest, coordsClosest);
  }
  if (closest.firstChild) {
    return findOffsetInNode(closest, coordsClosest);
  }
  return {node, offset};
}
/* eslint-enable complexity */

function constrainNodeTo(node, parentNode, existingOffset) {
  let compare = parentNode.compareDocumentPosition(node);
  if (compare & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    // the node is inside parentNode, do nothing
    return { node, offset: existingOffset};
  } else if (compare & Node.DOCUMENT_POSITION_CONTAINS) {
    // the node contains parentNode. This shouldn't happen.
    return { node, offset: existingOffset};
  } else if (compare & Node.DOCUMENT_POSITION_PRECEDING) {
    // node is before parentNode. return start of deepest first child
    let child = parentNode.firstChild;
    while (child.firstChild) {
      child = child.firstChild;
    }
    return { node: child, offset: 0};
  } else if (compare & Node.DOCUMENT_POSITION_FOLLOWING) {
    // node is after parentNode. return end of deepest last child
    let child = parentNode.lastChild;
    while (child.lastChild) {
      child = child.lastChild;
    }

    let offset = isTextNode(child) ? child.textContent.length : 1;
    return {node: child, offset};
  } else {
    return { node, offset: existingOffset};
  }
}

/*
 * Returns a new selection that is constrained within parentNode.
 * If the anchorNode or focusNode are outside the parentNode, they are replaced with the beginning
 * or end of the parentNode's children
 */
function constrainSelectionTo(selection, parentNode) {
  let {
    node: anchorNode,
    offset: anchorOffset
  } = constrainNodeTo(selection.anchorNode, parentNode, selection.anchorOffset);
  let {
    node: focusNode,
    offset: focusOffset
  } = constrainNodeTo(selection.focusNode, parentNode, selection.focusOffset);

  return { anchorNode, anchorOffset, focusNode, focusOffset };
}

function comparePosition(selection) {
  let { anchorNode, focusNode, anchorOffset, focusOffset } = selection;
  let headNode, tailNode, headOffset, tailOffset, direction;

  const position = anchorNode.compareDocumentPosition(focusNode);

  // IE may select return focus and anchor nodes far up the DOM tree instead of
  // picking the deepest, most specific possible node. For example in
  //
  //     <div><span>abc</span><span>def</span></div>
  //
  // with a cursor between c and d, IE might say the focusNode is <div> with
  // an offset of 1. However the anchorNode for a selection might still be
  // <span> 2 if there was a selection.
  //
  // This code walks down the DOM tree until a good comparison of position can be
  // made.
  //
  if (position & Node.DOCUMENT_POSITION_CONTAINS) {
    if (focusOffset < focusNode.childNodes.length) {
      focusNode = focusNode.childNodes[focusOffset];
      focusOffset = 0;
    } else {
      // This situation happens on IE when triple-clicking to select.
      // Set the focus to the very last character inside the node.
      while (focusNode.lastChild) {
        focusNode = focusNode.lastChild;
      }
      focusOffset = focusNode.textContent.length;
    }

    return comparePosition({
      focusNode,
      focusOffset,
      anchorNode, anchorOffset
    });
  } else if (position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    let offset = anchorOffset - 1;
    if (offset < 0) {
      offset = 0;
    }
    return comparePosition({
      anchorNode: anchorNode.childNodes[offset],
      anchorOffset: 0,
      focusNode, focusOffset
    });
  // The meat of translating anchor and focus nodes to head and tail nodes
  } else if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
    headNode = anchorNode; tailNode = focusNode;
    headOffset = anchorOffset; tailOffset = focusOffset;
    direction = DIRECTION.FORWARD;
  } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
    headNode = focusNode; tailNode = anchorNode;
    headOffset = focusOffset; tailOffset = anchorOffset;
    direction = DIRECTION.BACKWARD;
  } else { // same node
    headNode = tailNode = anchorNode;
    headOffset = anchorOffset;
    tailOffset = focusOffset;
    if (tailOffset < headOffset) {
      // Swap the offset order
      headOffset = focusOffset;
      tailOffset = anchorOffset;
      direction = DIRECTION.BACKWARD;
    } else if (headOffset < tailOffset) {
      direction = DIRECTION.FORWARD;
    } else {
      direction = null;
    }
  }

  return {headNode, headOffset, tailNode, tailOffset, direction};
}

/**
 * A logical range of a {@link Post}.
 * Usually an instance of Range will be read from the {@link Editor#range} property,
 * but it may be useful to instantiate a range directly when programmatically modifying a Post.
 */
class Range {
  /**
   * @param {Position} head
   * @param {Position} [tail=head]
   * @param {Direction} [direction=null]
   * @return {Range}
   * @private
   */
  constructor(head, tail=head, direction=null) {
    /** @property {Position} head */
    this.head = head;

    /** @property {Position} tail */
    this.tail = tail;

    /** @property {Direction} direction */
    this.direction = direction;
  }

  /**
   * Shorthand to create a new range from a section(s) and offset(s).
   * When given only a head section and offset, creates a collapsed range.
   * @param {Section} headSection
   * @param {number} headOffset
   * @param {Section} [tailSection=headSection]
   * @param {number} [tailOffset=headOffset]
   * @param {Direction} [direction=null]
   * @return {Range}
   */
  static create(headSection, headOffset, tailSection=headSection, tailOffset=headOffset, direction=null) {
    return new Range(
      new Position$1(headSection, headOffset),
      new Position$1(tailSection, tailOffset),
      direction
    );
  }

  static blankRange() {
    return new Range(Position$1.blankPosition(), Position$1.blankPosition());
  }

  /**
   * @param {Markerable} section
   * @return {Range} A range that is constrained to only the part that
   * includes the section.
   * FIXME -- if the section isn't the head or tail, it's assumed to be
   * wholly contained. It's possible to call `trimTo` with a selection that is
   * outside of the range, though, which would invalidate that assumption.
   * There's no efficient way to determine if a section is within a range, yet.
   * @private
   */
  trimTo(section) {
    const length = section.length;

    let headOffset = section === this.head.section ?
      Math.min(this.head.offset, length) : 0;
    let tailOffset = section === this.tail.section ?
      Math.min(this.tail.offset, length) : length;

    return Range.create(section, headOffset, section, tailOffset);
  }

  /**
   * Expands the range 1 unit in the given direction
   * If the range is expandable in the given direction, always returns a
   * non-collapsed range.
   * @param {Number} units If units is > 0, the range is extended to the right,
   *                 otherwise range is extended to the left.
   * @return {Range}
   * @public
   */
  extend(units) {
    assert(`Must pass integer to Range#extend`, typeof units === 'number');

    if (units === 0) { return this; }

    let { head, tail, direction: currentDirection } = this;
    switch (currentDirection) {
      case DIRECTION.FORWARD:
        return new Range(head, tail.move(units), currentDirection);
      case DIRECTION.BACKWARD:
        return new Range(head.move(units), tail, currentDirection);
      default: {
        let newDirection = units > 0 ? DIRECTION.FORWARD : DIRECTION.BACKWARD;
        return new Range(head, tail, newDirection).extend(units);
      }
    }
  }

  /**
   * Moves this range 1 unit in the given direction.
   * If the range is collapsed, returns a collapsed range shifted by 1 unit,
   * otherwise collapses this range to the position at the `direction` end of the range.
   * Always returns a collapsed range.
   * @param {Direction} direction
   * @return {Range}
   * @public
   */
  move(direction) {
    assert(`Must pass DIRECTION.FORWARD (${DIRECTION.FORWARD}) or DIRECTION.BACKWARD (${DIRECTION.BACKWARD}) to Range#move`,
           direction === DIRECTION.FORWARD || direction === DIRECTION.BACKWARD);

    let { focusedPosition, isCollapsed } = this;

    if (isCollapsed) {
      return new Range(focusedPosition.move(direction));
    } else {
      return this._collapse(direction);
    }
  }

  /**
   * expand a range to all markers matching a given check
   *
   * @param {Function} detectMarker
   * @return {Range} The expanded range
   *
   * @public
   */
  expandByMarker(detectMarker) {
    let {
      head,
      tail,
      direction
    } = this;
    let {section: headSection} = head;
    if (headSection !== tail.section) {
      throw new Error('#expandByMarker does not work across sections. Perhaps you should confirm the range is collapsed');
    }

    let firstNotMatchingDetect = i => {
      return !detectMarker(i);
    };

    let headMarker = headSection.markers.detect(firstNotMatchingDetect, head.marker, true);
    if (!headMarker && detectMarker(headSection.markers.head)) {
      headMarker = headSection.markers.head;
    } else {
      headMarker = headMarker.next || head.marker;
    }
    let headPosition = new Position$1(headSection, headSection.offsetOfMarker(headMarker));

    let tailMarker = tail.section.markers.detect(firstNotMatchingDetect, tail.marker);
    if (!tailMarker && detectMarker(headSection.markers.tail)) {
      tailMarker = headSection.markers.tail;
    } else {
      tailMarker = tailMarker.prev || tail.marker;
    }
    let tailPosition = new Position$1(tail.section, tail.section.offsetOfMarker(tailMarker) + tailMarker.length);

    return headPosition.toRange(tailPosition, direction);
  }

  _collapse(direction) {
    return new Range(direction === DIRECTION.BACKWARD ? this.head : this.tail);
  }

  get focusedPosition() {
    return this.direction === DIRECTION.BACKWARD ? this.head : this.tail;
  }

  isEqual(other) {
    return other &&
      this.head.isEqual(other.head) &&
      this.tail.isEqual(other.tail);
  }

  get isBlank() {
    return this.head.isBlank && this.tail.isBlank;
  }

  // "legacy" APIs
  get headSection() {
    return this.head.section;
  }
  get tailSection() {
    return this.tail.section;
  }
  get headSectionOffset() {
    return this.head.offset;
  }
  get tailSectionOffset() {
    return this.tail.offset;
  }
  get isCollapsed() {
    return this.head.isEqual(this.tail);
  }
  get headMarker() {
    return this.head.marker;
  }
  get tailMarker() {
    return this.tail.marker;
  }
  get headMarkerOffset() {
    return this.head.offsetInMarker;
  }
  get tailMarkerOffset() {
    return this.tail.offsetInMarker;
  }
}

const { FORWARD, BACKWARD } = DIRECTION;

// generated via http://xregexp.com/ to cover chars that \w misses
// (new XRegExp('\\p{Alphabetic}|[0-9]|_|:')).toString()
const WORD_CHAR_REGEX = /[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևְ-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࢠ-ࢴࣣ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣲ-ꣷꣻꣽꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|[0-9]|_|:/;

function findParentSectionFromNode(renderTree, node) {
  let renderNode =  renderTree.findRenderNodeFromElement(
    node,
    (renderNode) => renderNode.postNode.isSection
  );

  return renderNode && renderNode.postNode;
}

function findOffsetInMarkerable(markerable, node, offset) {
  let offsetInSection = 0;
  let marker = markerable.markers.head;
  while (marker) {
    let markerNode = marker.renderNode.element;
    if (markerNode === node) {
      return offsetInSection + offset;
    } else if (marker.isAtom) {
      if (marker.renderNode.headTextNode === node) {
        return offsetInSection;
      } else if (marker.renderNode.tailTextNode === node) {
        return offsetInSection + 1;
      }
    }

    offsetInSection += marker.length;
    marker = marker.next;
  }

  return offsetInSection;
}

function findOffsetInSection(section, node, offset) {
  if (section.isMarkerable) {
    return findOffsetInMarkerable(section, node, offset);
  } else {
    assert('findOffsetInSection must be called with markerable or card section',
           section.isCardSection);

    let wrapperNode = section.renderNode.element;
    let endTextNode = wrapperNode.lastChild;
    if (node === endTextNode) {
      return 1;
    }
    return 0;
  }
}

let Position, BlankPosition;

Position = class Position {
  /**
   * A position is a logical location (zero-width, or "collapsed") in a post,
   * typically between two characters in a section.
   * Two positions (a head and a tail) make up a {@link Range}.
   * @constructor
   */
  constructor(section, offset=0, isBlank=false) {
    if (!isBlank) {
      assert('Position must have a section that is addressable by the cursor',
             (section && section.isLeafSection));
      assert('Position must have numeric offset',
             (typeof offset === 'number'));
    }

    this.section = section;
    this.offset = offset;
    this.isBlank = isBlank;
  }

  /**
   * @param {integer} x x-position in current viewport
   * @param {integer} y y-position in current viewport
   * @param {Editor} editor
   * @return {Position|null}
   */
  static atPoint(x, y, editor) {
    let { _renderTree, element: rootElement } = editor;
    let elementFromPoint = document.elementFromPoint(x, y);
    if (!containsNode(rootElement, elementFromPoint)) {
      return;
    }

    let { node, offset } = findOffsetInNode(elementFromPoint, {left: x, top: y});
    return Position.fromNode(_renderTree, node, offset);
  }

  static blankPosition() {
    return new BlankPosition();
  }

  /**
   * Returns a range from this position to the given tail. If no explicit
   * tail is given this returns a collapsed range focused on this position.
   * @param {Position} [tail=this] The ending position
   * @return {Range}
   * @public
   */
  toRange(tail=this, direction=null) {
    return new Range(this, tail, direction);
  }

  get leafSectionIndex() {
    let post = this.section.post;
    let leafSectionIndex;
    post.walkAllLeafSections((section, index) => {
      if (section === this.section) {
        leafSectionIndex = index;
      }
    });
    return leafSectionIndex;
  }

  get isMarkerable() {
    return this.section && this.section.isMarkerable;
  }

  /**
   * Returns the marker at this position, in the backward direction
   * (i.e., the marker to the left of the cursor if the cursor is on a marker boundary and text is left-to-right)
   * @return {Marker|undefined}
   */
  get marker() {
    return this.isMarkerable && this.markerPosition.marker;
  }

  /**
   * Returns the marker in `direction` from this position.
   * If the position is in the middle of a marker, the direction is irrelevant.
   * Otherwise, if the position is at a boundary between two markers, returns the
   * marker to the left if `direction` === BACKWARD and the marker to the right
   * if `direction` === FORWARD (assuming left-to-right text direction).
   * @param {Direction}
   * @return {Marker|undefined}
   */
  markerIn(direction) {
    if (!this.isMarkerable) { return; }

    let { marker, offsetInMarker } = this;
    if (!marker) { return; }

    if (offsetInMarker > 0 && offsetInMarker < marker.length) {
      return marker;
    } else if (offsetInMarker === 0) {
      return direction === BACKWARD ? marker : marker.prev;
    } else if (offsetInMarker === marker.length) {
      return direction === FORWARD ? marker.next : marker;
    }
  }

  get offsetInMarker() {
    return this.markerPosition.offset;
  }

  isEqual(position) {
    return this.section === position.section &&
           this.offset  === position.offset;
  }

  /**
   * @return {Boolean} If this position is at the head of the post
   */
  isHeadOfPost() {
    return this.move(BACKWARD).isEqual(this);
  }

  /**
   * @return {Boolean} If this position is at the tail of the post
   */
  isTailOfPost() {
    return this.move(FORWARD).isEqual(this);
  }

  /**
   * @return {Boolean} If this position is at the head of its section
   */
  isHead() {
    return this.isEqual(this.section.headPosition());
  }

  /**
   * @return {Boolean} If this position is at the tail of its section
   */
  isTail() {
    return this.isEqual(this.section.tailPosition());
  }

  /**
   * Move the position 1 unit in `direction`.
   *
   * @param {Number} units to move. > 0 moves right, < 0 moves left
   * @return {Position} Return a new position one unit in the given
   * direction. If the position is moving left and at the beginning of the post,
   * the same position will be returned. Same if the position is moving right and
   * at the end of the post.
   */
  move(units) {
    assert('Must pass integer to Position#move', typeof units === 'number');

    if (units < 0) {
      return this.moveLeft().move(++units);
    } else if (units > 0) {
      return this.moveRight().move(--units);
    } else {
      return this;
    }
  }

  /**
   * @param {Number} direction (FORWARD or BACKWARD)
   * @return {Position} The result of moving 1 "word" unit in `direction`
   */
  moveWord(direction) {
    let isPostBoundary = direction === BACKWARD ? this.isHeadOfPost() : this.isTailOfPost();
    if (isPostBoundary) {
      return this;
    }

    if (!this.isMarkerable) {
      return this.move(direction);
    }

    let pos = this;

    // Helper fn to check if the pos is at the `dir` boundary of its section
    let isBoundary = (pos, dir) => {
      return dir === BACKWARD ? pos.isHead() : pos.isTail();
    };
    // Get the char at this position (looking forward/right)
    let getChar = (pos) => {
      let { marker, offsetInMarker } = pos;
      return marker.charAt(offsetInMarker);
    };
    // Get the char in `dir` at this position
    let peekChar = (pos, dir) => {
      return dir === BACKWARD ? getChar(pos.move(BACKWARD)) : getChar(pos);
    };
    // Whether there is an atom in `dir` from this position
    let isAtom = (pos, dir) => {
      // Special case when position is at end, the marker associated with it is
      // the marker to its left. Normally `pos#marker` is the marker to the right of the pos's offset.
      if (dir === BACKWARD && pos.isTail() && pos.marker.isAtom) {
        return true;
      }
      return dir === BACKWARD ? pos.move(BACKWARD).marker.isAtom : pos.marker.isAtom;
    };

    if (isBoundary(pos, direction)) {
      // extend movement into prev/next section
      return pos.move(direction).moveWord(direction);
    }

    let seekWord = (pos) => {
      return !isBoundary(pos, direction) &&
        !isAtom(pos, direction) &&
        !WORD_CHAR_REGEX.test(peekChar(pos, direction));
    };

    // move(dir) while we are seeking the first word char
    while (seekWord(pos)) {
      pos = pos.move(direction);
    }

    if (isAtom(pos, direction)) {
      return pos.move(direction);
    }

    let seekBoundary = (pos) => {
      return !isBoundary(pos, direction) &&
        !isAtom(pos, direction) &&
        WORD_CHAR_REGEX.test(peekChar(pos, direction));
    };

    // move(dir) while we are seeking the first boundary position
    while (seekBoundary(pos)) {
      pos = pos.move(direction);
    }

    return pos;
  }

  /**
   * The position to the left of this position.
   * If this position is the post's headPosition it returns itself.
   * @return {Position}
   * @private
   */
  moveLeft() {
    if (this.isHead()) {
      let prev = this.section.previousLeafSection();
      return prev ? prev.tailPosition() : this;
    } else {
      let offset = this.offset - 1;
      if (this.isMarkerable && this.marker) {
        let code = this.marker.value.charCodeAt(offset);
        if (code >= LOW_SURROGATE_RANGE[0] && code <= LOW_SURROGATE_RANGE[1]) {
          offset = offset - 1;
        }
      }
      return new Position(this.section, offset);
    }
  }

  /**
   * The position to the right of this position.
   * If this position is the post's tailPosition it returns itself.
   * @return {Position}
   * @private
   */
  moveRight() {
    if (this.isTail()) {
      let next = this.section.nextLeafSection();
      return next ? next.headPosition() : this;
    } else {
      let offset = this.offset + 1;
      if (this.isMarkerable && this.marker) {
        let code = this.marker.value.charCodeAt(offset - 1);
        if (code >= HIGH_SURROGATE_RANGE[0] && code <= HIGH_SURROGATE_RANGE[1]) {
          offset = offset + 1;
        }
      }
      return new Position(this.section, offset);
    }
  }

  static fromNode(renderTree, node, offset) {
    if (isTextNode(node)) {
      return Position.fromTextNode(renderTree, node, offset);
    } else {
      return Position.fromElementNode(renderTree, node, offset);
    }
  }

  static fromTextNode(renderTree, textNode, offsetInNode) {
    const renderNode = renderTree.getElementRenderNode(textNode);
    let section, offsetInSection;

    if (renderNode) {
      const marker = renderNode.postNode;
      section = marker.section;

      assert(`Could not find parent section for mapped text node "${textNode.textContent}"`,
             !!section);
      offsetInSection = section.offsetOfMarker(marker, offsetInNode);
    } else {
      // all text nodes should be rendered by markers except:
      //   * text nodes inside cards
      //   * text nodes created by the browser during text input
      // both of these should have rendered parent sections, though
      section = findParentSectionFromNode(renderTree, textNode);
      assert(`Could not find parent section for un-mapped text node "${textNode.textContent}"`,
             !!section);

      offsetInSection = findOffsetInSection(section, textNode, offsetInNode);
    }

    return new Position(section, offsetInSection);
  }

  static fromElementNode(renderTree, elementNode, offset) {
    let position;

    // The browser may change the reported selection to equal the editor's root
    // element if the user clicks an element that is immediately removed,
    // which can happen when clicking to remove a card.
    if (elementNode === renderTree.rootElement) {
      let post = renderTree.rootNode.postNode;
      position = offset === 0 ? post.headPosition() : post.tailPosition();
    } else {
      let section = findParentSectionFromNode(renderTree, elementNode);
      assert('Could not find parent section from element node', !!section);

      if (section.isCardSection) {
        // Selections in cards are usually made on a text node
        // containing a &zwnj;  on one side or the other of the card but
        // some scenarios (Firefox) will result in selecting the
        // card's wrapper div. If the offset is 2 we've selected
        // the final zwnj and should consider the cursor at the
        // end of the card (offset 1). Otherwise,  the cursor is at
        // the start of the card
        position = offset < 2 ? section.headPosition() : section.tailPosition();
      } else {

        // In Firefox it is possible for the cursor to be on an atom's wrapper
        // element. (In Chrome/Safari, the browser corrects this to be on
        // one of the text nodes surrounding the wrapper).
        // This code corrects for when the browser reports the cursor position
        // to be on the wrapper element itself
        let renderNode = renderTree.getElementRenderNode(elementNode);
        let postNode = renderNode && renderNode.postNode;
        if (postNode && postNode.isAtom) {
          let sectionOffset = section.offsetOfMarker(postNode);
          if (offset > 1) {
            // we are on the tail side of the atom
            sectionOffset += postNode.length;
          }
          position = new Position(section, sectionOffset);
        } else if (offset >= elementNode.childNodes.length) {

          // This is to deal with how Firefox handles triple-click selections.
          // See https://stackoverflow.com/a/21234837/1269194 for an
          // explanation.
          position = section.tailPosition();
        } else {
          // The offset is 0 if the cursor is on a non-atom-wrapper element node
          // (e.g., a <br> tag in a blank markup section)
          position = section.headPosition();
        }
      }
    }

    return position;
  }

  /**
   * @private
   */
  get markerPosition() {
    assert('Cannot get markerPosition without a section', !!this.section);
    assert('cannot get markerPosition of a non-markerable', !!this.section.isMarkerable);
    return this.section.markerPositionAtOffset(this.offset);
  }
};

BlankPosition = class BlankPosition extends Position {
  constructor() {
    super(null, 0, true);
  }

  isEqual(other) {
    return other && other.isBlank;
  }

  toRange() { return Range.blankRange(); }
  get leafSectionIndex() { assert('must implement get leafSectionIndex', false); }

  get isMarkerable() { return false; }
  get marker() { return false; }
  isHeadOfPost() { return false; }
  isTailOfPost() { return false; }
  isHead() { return false; }
  isTail() { return false; }
  move() { return this; }
  moveWord() { return this; }

  get markerPosition() { return {}; }
};

var Position$1 = Position;

/**
 * @module UI
 */

let defaultShowPrompt = (message, defaultValue, callback) => callback(window.prompt(message, defaultValue));

/**
 * @callback promptCallback
 * @param {String} url The URL to pass back to the editor for linking
 *        to the selected text.
 */

/**
 * @callback showPrompt
 * @param {String} message The text of the prompt.
 * @param {String} defaultValue The initial URL to display in the prompt.
 * @param {module:UI~promptCallback} callback Once your handler has accepted a URL,
 *        it should pass it to `callback` so that the editor may link the
 *        selected text.
 */

/**
 * Exposes the core behavior for linking and unlinking text, and allows for
 * customization of the URL input handler.
 * @param {Editor} editor An editor instance to operate on. If a range is selected,
 *        either prompt for a URL and add a link or un-link the
 *        currently linked text.
 * @param {module:UI~showPrompt} [showPrompt] An optional custom input handler. Defaults
 *        to using `window.prompt`.
 * @example
 * let myPrompt = (message, defaultURL, promptCallback) => {
 *   let url = window.prompt("Overriding the defaults", "http://placekitten.com");
 *   promptCallback(url);
 * };
 *
 * editor.registerKeyCommand({
 *   str: "META+K",
 *   run(editor) {
 *     toggleLink(editor, myPrompt);
 *   }
 * });
 * @public
 */
function toggleLink(editor, showPrompt=defaultShowPrompt) {
  if (editor.range.isCollapsed) {
    return;
  }

  let selectedText = editor.cursor.selectedText();
  let defaultUrl = '';
  if (selectedText.indexOf('http') !== -1) { defaultUrl = selectedText; }

  let {range} = editor;
  let hasLink = editor.detectMarkupInRange(range, 'a');

  if (hasLink) {
    editor.toggleMarkup('a');
  } else {
    showPrompt('Enter a URL', defaultUrl, url => {
      if (!url) { return; }

      editor.toggleMarkup('a', {href: url});
    });
  }
}

/**
 * Exposes the core behavior for editing an existing link, and allows for
 * customization of the URL input handler.
 * @param {HTMLAnchorElement} target The anchor (<a>) DOM element whose URL should be edited.
 * @param {Editor} editor An editor instance to operate on. If a range is selected,
 *        either prompt for a URL and add a link or un-link the
 *        currently linked text.
 * @param {module:UI~showPrompt} [showPrompt] An optional custom input handler. Defaults
 *        to using `window.prompt`.
 *
 * @public
 */
function editLink(target, editor, showPrompt=defaultShowPrompt) {
  showPrompt('Enter a URL', target.href, url => {
    if (!url) { return; }

    const position = Position$1.fromNode(editor._renderTree, target.firstChild);
    const range = new Range(position, new Position$1(position.section, position.offset + target.textContent.length));

    editor.run(post => {
      let markup = editor.builder.createMarkup('a', {href: url});

      // This is the only way to "update" a markup with new attributes in the
      // current API.
      post.toggleMarkup(markup, range);
      post.toggleMarkup(markup, range);
    });
  });
}

var ui = {
  toggleLink,
  editLink
};

const SHOW_DELAY = 200;
const HIDE_DELAY = 600;

class Tooltip extends View {
  constructor(options) {
    options.classNames = ['__mobiledoc-tooltip'];
    super(options);

    this.rootElement = options.rootElement;
    this.editor = options.editor;

    this.addListeners(options);
  }

  showLink(linkEl) {
    const { editor, element: tooltipEl } = this;
    const { tooltipPlugin } = editor;

    tooltipPlugin.renderLink(tooltipEl, linkEl, {
      editLink: () => {
        editLink(linkEl, editor);
        this.hide();
      }
    });

    this.show();
    positionElementCenteredBelow(this.element, linkEl);

    this.elementObserver = whenElementIsNotInDOM(linkEl, () => this.hide());
  }

  addListeners(options) {
    const { rootElement, element: tooltipElement } = this;
    let showTimeout, hideTimeout;

    const scheduleHide = () => {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        this.hide();
      }, HIDE_DELAY);
    };

    this.addEventListener(tooltipElement, 'mouseenter', e => {
      clearTimeout(hideTimeout);
    });

    this.addEventListener(tooltipElement, 'mouseleave', e => {
      scheduleHide();
    });

    this.addEventListener(rootElement, 'mouseover', (e) => {
      let target = getEventTargetMatchingTag(options.showForTag, e.target, rootElement);

      if (target && target.isContentEditable) {
        clearTimeout(hideTimeout);
        showTimeout = setTimeout(() => {
          this.showLink(target);
        }, SHOW_DELAY);
      }
    });

    this.addEventListener(rootElement, 'mouseout', (e) => {
      clearTimeout(showTimeout);
      if (this.elementObserver) { this.elementObserver.cancel(); }
      scheduleHide();
    });
  }
}

const DEFAULT_TOOLTIP_PLUGIN = {
  renderLink(tooltipEl, linkEl, { editLink }) {
    const { href } = linkEl;
    tooltipEl.innerHTML = `<a href="${href}" target="_blank">${href}</a>`;
    const button = document.createElement('button');
    button.classList.add('__mobiledoc-tooltip__edit-link');
    button.innerText = 'Edit Link';
    button.addEventListener('click', editLink);
    tooltipEl.append(button);
  }
};

class LifecycleCallbacks {
  constructor(queueNames=[]) {
    this.callbackQueues = {};
    this.removalQueues = {};

    queueNames.forEach(name => {
      this.callbackQueues[name] = [];
      this.removalQueues[name] = [];
    });
  }

  runCallbacks(queueName, args=[]) {
    let queue = this._getQueue(queueName);
    queue.forEach(cb => cb(...args));

    let toRemove = this.removalQueues[queueName];
    toRemove.forEach(cb => {
      let index = queue.indexOf(cb);
      if (index !== -1) {
        queue.splice(index, 1);
      }
    });

    this.removalQueues[queueName] = [];
  }

  addCallback(queueName, callback) {
    this._getQueue(queueName).push(callback);
  }

  _scheduleCallbackForRemoval(queueName, callback) {
    this.removalQueues[queueName].push(callback);
  }

  addCallbackOnce(queueName, callback) {
    let queue = this._getQueue(queueName);
    if (queue.indexOf(callback) === -1) {
      queue.push(callback);
      this._scheduleCallbackForRemoval(queueName, callback);
    }
  }

  _getQueue(queueName) {
    let queue = this.callbackQueues[queueName];
    assert(`No queue found for "${queueName}"`, !!queue);
    return queue;
  }
}

const MARKERABLE = 'markerable',
      NESTED_MARKERABLE = 'nested_markerable',
      NON_MARKERABLE = 'non_markerable';

class Visitor {
  constructor(inserter, cursorPosition) {
    let { postEditor, post } = inserter;
    this.postEditor = postEditor;
    this._post = post;
    this.cursorPosition = cursorPosition;
    this.builder = this.postEditor.builder;

    this._hasInsertedFirstLeafSection = false;
  }

  get cursorPosition() {
    return this._cursorPosition;
  }

  set cursorPosition(position) {
    this._cursorPosition = position;
    this.postEditor.setRange(position);
  }

  visit(node) {
    let method = node.type;
    assert(`Cannot visit node of type ${node.type}`, !!this[method]);
    this[method](node);
  }

  _canMergeSection(section) {
    if (this._hasInsertedFirstLeafSection) {
      return false;
    } else {
      return this._isMarkerable && section.isMarkerable;
    }
  }

  get _isMarkerable() {
    return this.cursorSection.isMarkerable;
  }

  get cursorSection() {
    return this.cursorPosition.section;
  }

  get cursorOffset() {
    return this.cursorPosition.offset;
  }

  get _isNested() {
    return this.cursorSection.isNested;
  }

  [POST_TYPE](node) {
    if (this.cursorSection.isBlank && !this._isNested) {
      // replace blank section with entire post
      let newSections = node.sections.map(s => s.clone());
      this._replaceSection(this.cursorSection, newSections);
    } else {
      node.sections.forEach(section => this.visit(section));
    }
  }

  [MARKUP_SECTION_TYPE](node) {
    this[MARKERABLE](node);
  }

  [LIST_SECTION_TYPE](node) {
    let hasNext = !!node.next;
    node.items.forEach(item => this.visit(item));

    if (this._isNested && hasNext) {
      this._breakNestedAtCursor();
    }
  }

  [LIST_ITEM_TYPE](node) {
    this[NESTED_MARKERABLE](node);
  }

  [CARD_TYPE](node) {
    this[NON_MARKERABLE](node);
  }

  [IMAGE_SECTION_TYPE](node) {
    this[NON_MARKERABLE](node);
  }

  [NON_MARKERABLE](section) {
    if (this._isNested) {
      this._breakNestedAtCursor();
    } else if (!this.cursorSection.isBlank) {
      this._breakAtCursor();
    }

    this._insertLeafSection(section);
  }

  [MARKERABLE](section) {
    if (this._canMergeSection(section)) {
      this._mergeSection(section);
    } else if (this._isNested && this._isMarkerable) {
      // If we are attaching a markerable section to a list item,
      // insert a linebreak then merge the section onto the resulting blank list item
      this._breakAtCursor();

      // Advance the cursor to the head of the blank list item
      let nextPosition = this.cursorSection.next.headPosition();
      this.cursorPosition = nextPosition;

      // Merge this section onto the list item
      this._mergeSection(section);
    } else {
      this._breakAtCursor();
      this._insertLeafSection(section);
    }
  }

  [NESTED_MARKERABLE](section) {
    if (this._canMergeSection(section)) {
      this._mergeSection(section);
      return;
    }

    section = this._isNested ? section : this._wrapNestedSection(section);
    this._breakAtCursor();
    this._insertLeafSection(section);
  }

  // break out of a nested cursor position
  _breakNestedAtCursor() {
    assert('Cannot call _breakNestedAtCursor if not nested', this._isNested);

    let parent = this.cursorSection.parent;
    let cursorAtEndOfList = this.cursorPosition.isEqual(parent.tailPosition());

    if (cursorAtEndOfList) {
      let blank = this.builder.createMarkupSection();
      this._insertSectionAfter(blank, parent);
    } else {
      let [, blank,] = this._breakListAtCursor();
      this.cursorPosition = blank.tailPosition();
    }
  }

  _breakListAtCursor() {
    assert('Cannot _splitParentSection if cursor position is not nested',
           this._isNested);

    let list     = this.cursorSection.parent,
        position = this.cursorPosition,
        blank    = this.builder.createMarkupSection();
    let [pre, post] = this.postEditor._splitListAtPosition(list, position);

    let collection = this._post.sections,
        reference  = post;
    this.postEditor.insertSectionBefore(collection, blank, reference);
    return [pre, blank, post];
  }

  _wrapNestedSection(section) {
    let tagName = section.parent.tagName;
    let parent = this.builder.createListSection(tagName);
    parent.items.append(section.clone());
    return parent;
  }

  _mergeSection(section) {
    assert('Can only merge markerable sections',
           this._isMarkerable && section.isMarkerable);
    this._hasInsertedFirstLeafSection = true;

    let markers = section.markers.map(m => m.clone());
    let position = this.postEditor.insertMarkers(this.cursorPosition, markers);

    this.cursorPosition = position;
  }

  // Can be called to add a line break when in a nested section or a parent
  // section.
  _breakAtCursor() {
    if (this.cursorSection.isBlank) {
      return;
    } else if (this._isMarkerable) {
      this._breakMarkerableAtCursor();
    } else {
      this._breakNonMarkerableAtCursor();
    }
  }

  // Inserts a blank section before/after the cursor,
  // depending on cursor position.
  _breakNonMarkerableAtCursor() {
    let collection = this._post.sections,
        blank = this.builder.createMarkupSection(),
        reference = this.cursorPosition.isHead() ? this.cursorSection :
                                                   this.cursorSection.next;
    this.postEditor.insertSectionBefore(collection, blank, reference);
    this.cursorPosition = blank.tailPosition();
  }

  _breakMarkerableAtCursor() {
    let [pre,] =
      this.postEditor.splitSection(this.cursorPosition);

    this.cursorPosition = pre.tailPosition();
  }

  _replaceSection(section, newSections) {
    assert('Cannot replace section that does not have parent.sections',
           section.parent && section.parent.sections);
    assert('Must pass enumerable to _replaceSection', !!newSections.forEach);

    let collection = section.parent.sections;
    let reference = section.next;
    this.postEditor.removeSection(section);
    newSections.forEach(section => {
      this.postEditor.insertSectionBefore(collection, section, reference);
    });
    let lastSection = newSections[newSections.length - 1];

    this.cursorPosition = lastSection.tailPosition();
  }

  _insertSectionBefore(section, reference) {
    let collection = this.cursorSection.parent.sections;
    this.postEditor.insertSectionBefore(collection, section, reference);

    this.cursorPosition = section.tailPosition();
  }

  // Insert a section after the parent section.
  // E.g., add a markup section after a list section
  _insertSectionAfter(section, parent) {
    assert('Cannot _insertSectionAfter nested section', !parent.isNested);
    let reference = parent.next;
    let collection = this._post.sections;
    this.postEditor.insertSectionBefore(collection, section, reference);
    this.cursorPosition = section.tailPosition();
  }

  _insertLeafSection(section) {
    assert('Can only _insertLeafSection when cursor is at end of section',
           this.cursorPosition.isTail());

    this._hasInsertedFirstLeafSection = true;
    section = section.clone();

    if (this.cursorSection.isBlank) {
      assert('Cannot insert leaf non-markerable section when cursor is nested',
             !(section.isMarkerable && this._isNested));
      this._replaceSection(this.cursorSection, [section]);
    } else if (this.cursorSection.next && this.cursorSection.next.isBlank) {
      this._replaceSection(this.cursorSection.next, [section]);
    } else {
      let reference = this.cursorSection.next;
      this._insertSectionBefore(section, reference);
    }
  }
}

class Inserter {
  constructor(postEditor, post) {
    this.postEditor = postEditor;
    this.post = post;
  }

  insert(cursorPosition, newPost) {
    let visitor = new Visitor(this, cursorPosition);
    if (!newPost.isBlank) {
      visitor.visit(newPost);
    }
    return visitor.cursorPosition;
  }
}

/**
 * Usage:
 * Without a conditional, always prints deprecate message:
 *   `deprecate('This is deprecated')`
 *
 * Conditional deprecation, works similarly to `assert`, prints deprecation if
 * conditional is false:
 *   `deprecate('Deprecated only if foo !== bar', foo === bar)`
 */
function deprecate(message, conditional=false) {
  if (!conditional) {
    // eslint-disable-next-line no-console
    console.log(`[mobiledoc-kit] [DEPRECATED]: ${message}`);
  }
}

function toRange(rangeLike) {
  assert(`Must pass non-blank object to "toRange"`, !!rangeLike);

  if (rangeLike instanceof Range) {
    return rangeLike;
  } else if (rangeLike instanceof Position$1) {
    return rangeLike.toRange();
  }

  assert(`Incorrect structure for rangeLike: ${rangeLike}`, false);
}

const { FORWARD: FORWARD$1, BACKWARD: BACKWARD$1 } = DIRECTION;

function isListSectionTagName(tagName) {
  return tagName === 'ul' || tagName === 'ol';
}

function shrinkRange(range) {
  const { head, tail } = range;

  if (tail.offset === 0 && head.section !== tail.section) {
    range.tail = new Position$1(tail.section.prev, tail.section.prev.length);
  }

  return range;
}

const CALLBACK_QUEUES = {
  BEFORE_COMPLETE: 'beforeComplete',
  COMPLETE: 'complete',
  AFTER_COMPLETE: 'afterComplete'
};

// There are only two events that we're concerned about for Undo, that is inserting text and deleting content.
// These are the only two states that go on a "run" and create a combined undo, everything else has it's own
// deadicated undo.
const EDIT_ACTIONS = {
  INSERT_TEXT: 1,
  DELETE: 2
};

/**
 * The PostEditor is used to modify a post. It should not be instantiated directly.
 * Instead, a new instance of a PostEditor is created by the editor and passed
 * as the argument to the callback in {@link Editor#run}.
 *
 * Usage:
 * ```
 * editor.run((postEditor) => {
 *   // postEditor is an instance of PostEditor that can operate on the
 *   // editor's post
 * });
 * ```
 */
class PostEditor {
  /**
   * @private
   */
  constructor(editor) {
    this.editor = editor;
    this.builder = this.editor.builder;
    this._callbacks = new LifecycleCallbacks(values(CALLBACK_QUEUES));

    this._didComplete = false;
    this.editActionTaken = null;

    this._renderRange = () => this.editor.selectRange(this._range);
    this._postDidChange = () => this.editor._postDidChange();
    this._rerender = () => this.editor.rerender();
  }

  addCallback(...args) {
    this._callbacks.addCallback(...args);
  }

  addCallbackOnce(...args) {
    this._callbacks.addCallbackOnce(...args);
  }

  runCallbacks(...args) {
    this._callbacks.runCallbacks(...args);
  }

  begin() {
    // cache the editor's range
    this._range = this.editor.range;
  }

  /**
   * Schedules to select the given range on the editor after the postEditor
   * has completed its work. This also updates the postEditor's active range
   * (so that multiple calls to range-changing methods on the postEditor will
   * update the correct range).
   *
   * Usage:
   *   let range = editor.range;
   *   editor.run(postEditor => {
   *     let nextPosition = postEditor.deleteRange(range);
   *
   *     // Will position the editor's cursor at `nextPosition` after
   *     // the postEditor finishes work and the editor rerenders.
   *     postEditor.setRange(nextPosition);
   *   });
   * @param {Range|Position} range
   * @public
   */
  setRange(range) {
    range = toRange(range);

    // TODO validate that the range is valid
    // (does not contain marked-for-removal head or tail sections?)
    this._range = range;
    this.scheduleAfterRender(this._renderRange, true);
  }

  /**
   * Delete a range from the post
   *
   * Usage:
   * ```
   *     let { range } = editor;
   *     editor.run((postEditor) => {
   *       let nextPosition = postEditor.deleteRange(range);
   *       postEditor.setRange(nextPosition);
   *     });
   * ```
   * @param {Range} range Cursor Range object with head and tail Positions
   * @return {Position} The position where the cursor would go after deletion
   * @public
   */
  deleteRange(range) {
    assert("Must pass MobiledocKit Range to `deleteRange`", range instanceof Range);

    this.editActionTaken = EDIT_ACTIONS.DELETE;

    let {
      head, head: {section: headSection},
      tail, tail: {section: tailSection}
    } = range;

    let { editor: { post } } = this;

    if (headSection === tailSection) {
      return this.cutSection(headSection, head, tail);
    }

    let nextSection = headSection.nextLeafSection();

    let nextPos = this.cutSection(headSection, head, headSection.tailPosition());
    // cutSection can replace the section, so re-read headSection here
    headSection = nextPos.section;

    // Remove sections in the middle of the range
    while (nextSection !== tailSection) {
      let tmp = nextSection;
      nextSection = nextSection.nextLeafSection();
      this.removeSection(tmp);
    }

    let tailPos = this.cutSection(tailSection, tailSection.headPosition(), tail);
    // cutSection can replace the section, so re-read tailSection here
    tailSection = tailPos.section;

    if (tailSection.isBlank) {
      this.removeSection(tailSection);
    } else {
      // If head and tail sections are markerable, join them
      // Note: They may not be the same section type. E.g. this may join
      // a tail section that was a list item onto a markup section, or vice versa.
      // (This is the desired behavior.)
      if (headSection.isMarkerable && tailSection.isMarkerable) {
        headSection.join(tailSection);
        this._markDirty(headSection);
        this.removeSection(tailSection);
      } else if (headSection.isBlank) {
        this.removeSection(headSection);
        nextPos = tailPos;
      }
    }

    if (post.isBlank) {
      post.sections.append(this.builder.createMarkupSection('p'));
      nextPos = post.headPosition();
    }

    return nextPos;
  }

  /**
   * Note: This method may replace `section` with a different section.
   *
   * "Cut" out the part of the section inside `headOffset` and `tailOffset`.
   * If section is markerable this splits markers that straddle the head or tail (if necessary),
   * and removes markers that are wholly inside the offsets.
   * If section is a card, this may replace it with a blank markup section if the
   * positions contain the entire card.
   *
   * @param {Section} section
   * @param {Position} head
   * @param {Position} tail
   * @return {Position}
   * @private
   */
  cutSection(section, head, tail) {
    assert('Must pass head position and tail position to `cutSection`',
           head instanceof Position$1 && tail instanceof Position$1);
    assert('Must pass positions within same section to `cutSection`',
           head.section === tail.section);

    if (section.isBlank || head.isEqual(tail)) {
      return head;
    }
    if (section.isCardSection) {
      if (head.isHead() && tail.isTail()) {
        let newSection = this.builder.createMarkupSection();
        this.replaceSection(section, newSection);
        return newSection.headPosition();
      } else {
        return tail;
      }
    }

    let range = head.toRange(tail);
    this.splitMarkers(range).forEach(m => this.removeMarker(m));

    return head;
  }

  _coalesceMarkers(section) {
    if (section.isMarkerable) {
      this._removeBlankMarkers(section);
      this._joinSimilarMarkers(section);
    }
  }

  _removeBlankMarkers(section) {
    forEach(
      filter(section.markers, m => m.isBlank),
      m => this.removeMarker(m)
    );
  }

  // joins markers that have identical markups
  _joinSimilarMarkers(section) {
    let marker = section.markers.head;
    let nextMarker;
    while (marker && marker.next) {
      nextMarker = marker.next;

      if (marker.canJoin(nextMarker)) {
        nextMarker.value = marker.value + nextMarker.value;
        this._markDirty(nextMarker);
        this.removeMarker(marker);
      }

      marker = nextMarker;
    }
  }

  removeMarker(marker) {
    this._scheduleForRemoval(marker);
    if (marker.section) {
      this._markDirty(marker.section);
      marker.section.markers.remove(marker);
    }
  }

  _scheduleForRemoval(postNode) {
    if (postNode.renderNode) {
      postNode.renderNode.scheduleForRemoval();

      this.scheduleRerender();
      this.scheduleDidUpdate();
    }
    let removedAdjacentToList = (postNode.prev && postNode.prev.isListSection) ||
                                (postNode.next && postNode.next.isListSection);
    if (removedAdjacentToList) {
      this.addCallback(
        CALLBACK_QUEUES.BEFORE_COMPLETE,
        () => this._joinContiguousListSections()
      );
    }
  }

  _joinContiguousListSections() {
    let { post } = this.editor;
    let range = this._range;
    let prev;
    let groups = [];
    let currentGroup;

    // FIXME do we need to force a re-render of the range if changed sections
    // are contained within the range?
    let updatedHead = null;
    forEach(post.sections, section => {
      if (prev &&
          prev.isListSection &&
          section.isListSection &&
          prev.tagName === section.tagName) {

        currentGroup = currentGroup || [prev];
        currentGroup.push(section);
      } else {
        if (currentGroup) {
          groups.push(currentGroup);
        }
        currentGroup = null;
      }
      prev = section;
    });

    if (currentGroup) {
      groups.push(currentGroup);
    }

    forEach(groups, group => {
      let list = group[0];
      forEach(group, listSection => {
        if (listSection === list) {
          return;
        }

        let currentHead = range.head;
        let prevPosition;

        // FIXME is there a currentHead if there is no range?
        // is the current head a list item in the section
        if (!range.isBlank && currentHead.section.isListItem &&
            currentHead.section.parent === listSection) {
          prevPosition = list.tailPosition();
        }
        this._joinListSections(list, listSection);
        if (prevPosition) {
          updatedHead = prevPosition.move(FORWARD$1);
        }
      });
    });

    if (updatedHead) {
      this.setRange(updatedHead);
    }
  }

  _joinListSections(baseList, nextList) {
    baseList.join(nextList);
    this._markDirty(baseList);
    this.removeSection(nextList);
  }

  _markDirty(postNode) {
    if (postNode.renderNode) {
      postNode.renderNode.markDirty();

      this.scheduleRerender();
      this.scheduleDidUpdate();
    }
    if (postNode.section) {
      this._markDirty(postNode.section);
    }
    if (postNode.isMarkerable) {
      this.addCallback(
        CALLBACK_QUEUES.BEFORE_COMPLETE, () => this._coalesceMarkers(postNode));
    }
  }

  /**
   * @param {Position} position object with {section, offset} the marker and offset to delete from
   * @param {Number} direction The direction to delete in (default is BACKWARD)
   * @return {Position} for positioning the cursor
   * @public
   * @deprecated after v0.10.3
   */
  deleteFrom(position, direction=DIRECTION.BACKWARD) {
    deprecate("`postEditor#deleteFrom is deprecated. Use `deleteAtPosition(position, direction=BACKWARD, {unit}={unit: 'char'})` instead");
    return this.deleteAtPosition(position, direction, {unit: 'char'});
  }

  /**
   * Delete 1 `unit` (can be 'char' or 'word') in the given `direction` at the given
   * `position`. In almost all cases this will be equivalent to deleting the range formed
   * by expanding the position 1 unit in the given direction. The exception is when deleting
   * backward from the beginning of a list item, which reverts the list item into a markup section
   * instead of joining it with its previous list item (if any).
   *
   * Usage:
   *
   *     let position = section.tailPosition();
   *     // Section has text of "Howdy!"
   *     editor.run((postEditor) => {
   *       postEditor.deleteAtPosition(position);
   *     });
   *     // section has text of "Howdy"
   *
   * @param {Position} position The position to delete at
   * @param {Direction} [direction=DIRECTION.BACKWARD] direction The direction to delete in
   * @param {Object} [options]
   * @param {String} [options.unit="char"] The unit of deletion ("word" or "char")
   * @return {Position}
   */
  deleteAtPosition(position, direction=DIRECTION.BACKWARD, {unit}={unit: 'char'}) {
    if (direction === DIRECTION.BACKWARD) {
      return this._deleteAtPositionBackward(position, unit);
    } else {
      return this._deleteAtPositionForward(position, unit);
    }
  }

  _deleteAtPositionBackward(position, unit) {
    if (position.isHead() && position.section.isListItem) {
      this.toggleSection('p', position);
      return this._range.head;
    } else {
      let prevPosition = unit === 'word' ? position.moveWord(BACKWARD$1) : position.move(BACKWARD$1);
      let range = prevPosition.toRange(position);
      return this.deleteRange(range);
    }
  }

  _deleteAtPositionForward(position, unit) {
    let nextPosition = unit === 'word' ? position.moveWord(FORWARD$1) : position.move(FORWARD$1);
    let range = position.toRange(nextPosition);
    return this.deleteRange(range);
  }

  /**
   * Split markers at two positions, once at the head, and if necessary once
   * at the tail.
   *
   * Usage:
   * ```
   *     let range = editor.range;
   *     editor.run((postEditor) => {
   *       postEditor.splitMarkers(range);
   *     });
   * ```
   * The return value will be marker object completely inside the offsets
   * provided. Markers outside of the split may also have been modified.
   *
   * @param {Range} markerRange
   * @return {Array} of markers that are inside the split
   * @private
   */
  splitMarkers(range) {
    const { post } = this.editor;
    const { head, tail } = range;

    this.splitSectionMarkerAtOffset(head.section, head.offset);
    this.splitSectionMarkerAtOffset(tail.section, tail.offset);

    return post.markersContainedByRange(range);
  }

  splitSectionMarkerAtOffset(section, offset) {
    const edit = section.splitMarkerAtOffset(offset);
    edit.removed.forEach(m => this.removeMarker(m));
  }

  /**
   * Split the section at the position.
   *
   * Usage:
   * ```
   *     let position = editor.cursor.offsets.head;
   *     editor.run((postEditor) => {
   *       postEditor.splitSection(position);
   *     });
   *     // Will result in the creation of two new sections
   *     // replacing the old one at the cursor position
   * ```
   * The return value will be the two new sections. One or both of these
   * sections can be blank (contain only a blank marker), for example if the
   * headMarkerOffset is 0.
   *
   * @param {Position} position
   * @return {Array} new sections, one for the first half and one for the second (either one can be null)
   * @public
   */
  splitSection(position) {
    const { section } = position;

    if (section.isCardSection) {
      return this._splitCardSection(section, position);
    } else if (section.isListItem) {
      let isLastAndBlank = section.isBlank && !section.next;
      if (isLastAndBlank) {
        // if is last, replace the item with a blank markup section
        let parent = section.parent;
        let collection = this.editor.post.sections;
        let blank = this.builder.createMarkupSection();
        this.removeSection(section);
        this.insertSectionBefore(collection, blank, parent.next);

        return [null, blank];
      } else {
        let [pre, post] = this._splitListItem(section, position);
        return [pre, post];
      }
    } else {
      let splitSections = section.splitAtPosition(position);
      splitSections.forEach(s => this._coalesceMarkers(s));
      this._replaceSection(section, splitSections);

      return splitSections;
    }
  }

  /**
   * @param {Section} cardSection
   * @param {Position} position to split at
   * @return {Section[]} 2-item array of pre and post-split sections
   * @private
   */
  _splitCardSection(cardSection, position) {
    let { offset } = position;
    assert('Cards section must be split at offset 0 or 1',
           offset === 0 || offset === 1);

    let newSection = this.builder.createMarkupSection();
    let nextSection;
    let surroundingSections;

    if (offset === 0) {
      nextSection = cardSection;
      surroundingSections = [newSection, cardSection];
    } else {
      nextSection = cardSection.next;
      surroundingSections = [cardSection, newSection];
    }

    let collection = this.editor.post.sections;
    this.insertSectionBefore(collection, newSection, nextSection);

    return surroundingSections;
  }

  /**
   * @param {Section} section
   * @param {Section} newSection
   * @return null
   * @public
   */
  replaceSection(section, newSection) {
    if (!section) {
      // FIXME should a falsy section be a valid argument?
      this.insertSectionBefore(this.editor.post.sections, newSection, null);
    } else {
      this._replaceSection(section, [newSection]);
    }
  }

  moveSectionBefore(collection, renderedSection, beforeSection) {
    const newSection = renderedSection.clone();
    this.removeSection(renderedSection);
    this.insertSectionBefore(collection, newSection, beforeSection);
    return newSection;
  }

  /**
   * @param {Section} section A section that is already in DOM
   * @public
   */
  moveSectionUp(renderedSection) {
    const isFirst = !renderedSection.prev;
    if (isFirst) {
      return renderedSection;
    }

    const collection = renderedSection.parent.sections;
    const beforeSection = renderedSection.prev;
    return this.moveSectionBefore(collection, renderedSection, beforeSection);
  }

  /**
   * @param {Section} section A section that is already in DOM
   * @public
   */
  moveSectionDown(renderedSection) {
    const isLast = !renderedSection.next;
    if (isLast) {
      return renderedSection;
    }

    const beforeSection = renderedSection.next.next;
    const collection = renderedSection.parent.sections;
    return this.moveSectionBefore(collection, renderedSection, beforeSection);
  }

  /**
   * Insert an array of markers at the given position. If the position is in
   * a non-markerable section (like a card section), this method throws an error.
   *
   * @param {Position} position
   * @param {Marker[]} markers
   * @return {Position} The position that represents the end of the inserted markers.
   * @public
   */
  insertMarkers(position, markers) {
    let { section, offset } = position;
    assert('Cannot insert markers at non-markerable position',
           section.isMarkerable);

    this.editActionTaken = EDIT_ACTIONS.INSERT_TEXT;

    let edit = section.splitMarkerAtOffset(offset);
    edit.removed.forEach(marker => this._scheduleForRemoval(marker));

    let prevMarker = section.markerBeforeOffset(offset);
    markers.forEach(marker => {
      section.markers.insertAfter(marker, prevMarker);
      offset += marker.length;
      prevMarker = marker;
    });

    this._coalesceMarkers(section);
    this._markDirty(section);

    let nextPosition = section.toPosition(offset);
    this.setRange(nextPosition);
    return nextPosition;
  }

  /**
   * Inserts text with the given markups, ignoring the existing markups at
   * the position, if any.
   *
   * @param {Position} position
   * @param {String} text
   * @param {Markup[]} markups
   * @return {Position} position at the end of the inserted text
   */
  insertTextWithMarkup(position, text, markups=[]) {
    let { section } = position;
    if (!section.isMarkerable) { return; }
    let marker = this.builder.createMarker(text, markups);
    return this.insertMarkers(position, [marker]);
  }

  /**
   * Insert the text at the given position
   * Inherits the markups already at that position, if any.
   *
   * @param {Position} position
   * @param {String} text
   * @return {Position} position at the end of the inserted text.
   */
  insertText(position, text) {
    let { section } = position;
    if (!section.isMarkerable) { return; }
    let markups = position.marker && position.marker.markups;
    markups = markups || [];
    return this.insertTextWithMarkup(position, text, markups);
  }

  _replaceSection(section, newSections) {
    let nextSection = section.next;
    let collection = section.parent.sections;

    let nextNewSection = newSections[0];
    if (nextNewSection.isMarkupSection && section.isListItem) {
      // put the new section after the ListSection (section.parent)
      // instead of after the ListItem
      collection = section.parent.parent.sections;
      nextSection = section.parent.next;
    }

    newSections.forEach(s => this.insertSectionBefore(collection, s, nextSection));
    this.removeSection(section);
  }

  /**
   * Given a markerRange (for example `editor.range`) mark all markers
   * inside it as a given markup. The markup must be provided as a post
   * abstract node.
   *
   * Usage:
   *
   *     let range = editor.range;
   *     let strongMarkup = editor.builder.createMarkup('strong');
   *     editor.run((postEditor) => {
   *       postEditor.addMarkupToRange(range, strongMarkup);
   *     });
   *     // Will result some markers possibly being split, and the markup
   *     // being applied to all markers between the split.
   *
   * @param {Range} range
   * @param {Markup} markup A markup post abstract node
   * @public
   */
  addMarkupToRange(range, markup) {
    if (range.isCollapsed) { return; }

    let markers = this.splitMarkers(range);
    if (markers.length) {
      // We insert the new markup at a consistent index across the range.
      // If we just push on the end of the list, it can end up in different positions
      // of the markup stack. This results in unnecessary closing and re-opening of
      // the markup each time it changes position.
      // If we just push it at the beginning of the list, this causes unnecessary closing
      // and re-opening of surrounding tags.
      // So, we look for any tags open across the whole range, and push into the stack
      // at the end of those.
      // Prompted by https://github.com/bustle/mobiledoc-kit/issues/360

      let markupsOpenAcrossRange = reduce(markers, function (soFar, marker) {
        return commonItems(soFar, marker.markups);
      }, markers[0].markups);
      let indexToInsert = markupsOpenAcrossRange.length;

      markers.forEach(marker => {
        marker.addMarkupAtIndex(markup, indexToInsert);
        this._markDirty(marker);
      });
    }
  }

  /**
   * Given a markerRange (for example `editor.range`) remove the given
   * markup from all contained markers.
   *
   * Usage:
   * ```
   *     let { range } = editor;
   *     let markup = markerRange.headMarker.markups[0];
   *     editor.run(postEditor => {
   *       postEditor.removeMarkupFromRange(range, markup);
   *     });
   *     // Will result in some markers possibly being split, and the markup
   *     // being removed from all markers between the split.
   * ```
   * @param {Range} range Object with offsets
   * @param {Markup|Function} markupOrCallback A markup post abstract node or
   * a function that returns true when passed a markup that should be removed
   * @private
   */
  removeMarkupFromRange(range, markupOrMarkupCallback) {
    if (range.isCollapsed) { return; }

    this.splitMarkers(range).forEach(marker => {
      marker.removeMarkup(markupOrMarkupCallback);
      this._markDirty(marker);
    });
  }

  /**
   * Toggle the given markup in the given range (or at the position given). If the range/position
   * has the markup, the markup will be removed. If nothing in the range/position
   * has the markup, the markup will be added to everything in the range/position.
   *
   * Usage:
   * ```
   * // Remove any 'strong' markup if it exists in the selection, otherwise
   * // make it all 'strong'
   * editor.run(postEditor => postEditor.toggleMarkup('strong'));
   *
   * // add/remove a link to 'bustle.com' to the selection
   * editor.run(postEditor => {
   *   const linkMarkup = postEditor.builder.createMarkup('a', {href: 'http://bustle.com'});
   *   postEditor.toggleMarkup(linkMarkup);
   * });
   * ```
   * @param {Markup|String} markupOrString Either a markup object created using
   * the builder (useful when adding a markup with attributes, like an 'a' markup),
   * or, if a string, the tag name of the markup (e.g. 'strong', 'em') to toggle.
   * @param {Range|Position} range in which to toggle. Defaults to current editor range.
   * @public
   */
  toggleMarkup(markupOrMarkupString, range=this._range) {
    range = toRange(range);
    const markup = typeof markupOrMarkupString === 'string' ?
                     this.builder.createMarkup(markupOrMarkupString) :
                     markupOrMarkupString;

    const hasMarkup = this.editor.detectMarkupInRange(range, markup.tagName);
    // FIXME: This implies only a single markup in a range. This may not be
    // true for links (which are not the same object instance like multiple
    // strong tags would be).
    if (hasMarkup) {
      this.removeMarkupFromRange(range, hasMarkup);
    } else {
      this.addMarkupToRange(range, markup);
    }

    this.setRange(range);
  }

  /**
   * Toggles the tagName of the active section or sections in the given range/position.
   * If every section has the tag name, they will all be reset to default sections.
   * Otherwise, every section will be changed to the requested type
   *
   * @param {String} sectionTagName A valid markup section or
   *        list section tag name (e.g. 'blockquote', 'h2', 'ul')
   * @param {Range|Position} range The range over which to toggle.
   *        Defaults to the current editor range.
   * @public
   */
  toggleSection(sectionTagName, range=this._range) {
    range = shrinkRange(toRange(range));

    sectionTagName = normalizeTagName(sectionTagName);
    let { post } = this.editor;

    let everySectionHasTagName = true;
    post.walkMarkerableSections(range, section => {
      if (!this._isSameSectionType(section, sectionTagName)) {
        everySectionHasTagName = false;
      }
    });

    let tagName = everySectionHasTagName ? 'p' : sectionTagName;
    let sectionTransformations = [];
    post.walkMarkerableSections(range, section => {
      let changedSection = this.changeSectionTagName(section, tagName);

      sectionTransformations.push({
        from: section,
        to: changedSection
      });
    });

    let nextRange = this._determineNextRangeAfterToggleSection(range, sectionTransformations);
    this.setRange(nextRange);
  }

  _determineNextRangeAfterToggleSection(range, sectionTransformations) {
    if (sectionTransformations.length) {
      let changedHeadSection = detect(sectionTransformations, ({ from }) => {
        return from === range.headSection;
      }).to;
      let changedTailSection = detect(sectionTransformations, ({ from }) => {
        return from === range.tailSection;
      }).to;

      if (changedHeadSection.isListSection || changedTailSection.isListSection) {
        // We don't know to which ListItem's the original sections point at, so
        // we don't have enough information to reconstruct the range when
        // dealing with lists.
        return sectionTransformations[0].to.headPosition().toRange();
      } else {
        return Range.create(
          changedHeadSection,
          range.headSectionOffset,
          changedTailSection,
          range.tailSectionOffset,
          range.direction
        );
      }
    } else {
      return range;
    }
  }

  setAttribute(key, value, range=this._range) {
    this._mutateAttribute(key, range, (section, attribute) => {
      if (section.getAttribute(attribute) !== value) {
        section.setAttribute(attribute, value);
        return true;
      }
    });
  }

  removeAttribute(key, range=this._range) {
    this._mutateAttribute(key, range, (section, attribute) => {
      if (section.hasAttribute(attribute)) {
        section.removeAttribute(attribute);
        return true;
      }
    });
  }

  _mutateAttribute(key, range, cb) {
    range = toRange(range);
    let { post } = this.editor;
    let attribute = `data-md-${key}`;

    post.walkMarkerableSections(range, section => {
      if (section.isListItem) {
        section = section.parent;
      }

      if (cb(section, attribute) === true) {
        this._markDirty(section);
      }
    });

    this.setRange(range);
  }

  _isSameSectionType(section, sectionTagName) {
    return section.isListItem ?
      section.parent.tagName === sectionTagName :
      section.tagName        === sectionTagName;
  }

  /**
   * @param {Markerable} section
   * @private
   */
  changeSectionTagName(section, newTagName) {
    assert('Cannot pass non-markerable section to `changeSectionTagName`',
           section.isMarkerable);

    if (isListSectionTagName(newTagName)) {
      return this._changeSectionToListItem(section, newTagName);
    } else if (section.isListItem) {
      return this._changeSectionFromListItem(section, newTagName);
    } else {
      section.tagName = newTagName;
      this._markDirty(section);
      return section;
    }
  }

  /**
   * Splits the item at the position given.
   * If the position is at the start or end of the item, the pre- or post-item
   * will contain a single empty ("") marker.
   * @param {ListItem} item
   * @param {Position} position
   * @return {Array} the pre-item and post-item on either side of the split
   * @private
   */
  _splitListItem(item, position) {
    let { section, offset } = position;
    assert('Cannot split list item at position that does not include item',
           item === section);

    item.splitMarkerAtOffset(offset);
    let prevMarker = item.markerBeforeOffset(offset);
    let preItem  = this.builder.createListItem(),
        postItem = this.builder.createListItem();

    let currentItem = preItem;
    item.markers.forEach(marker => {
      currentItem.markers.append(marker.clone());
      if (marker === prevMarker) {
        currentItem = postItem;
      }
    });
    this._replaceSection(item, [preItem, postItem]);
    return [preItem, postItem];
  }

  /**
   * Splits the list at the position given.
   * @return {Array} pre-split list and post-split list, either of which could
   * be blank (0-item list) if the position is at the start or end of the list.
   *
   * Note: Contiguous list sections will be joined in the before_complete queue
   * of the postEditor.
   *
   * @private
   */
  _splitListAtPosition(list, position) {
    assert('Cannot split list at position not in list',
           position.section.parent === list);

    let positionIsMiddle = !position.isHead() && !position.isTail();
    if (positionIsMiddle) {
      let item = position.section;
      let [pre,] =
        this._splitListItem(item, position);
      position = pre.tailPosition();
    }

    let preList  = this.builder.createListSection(list.tagName);
    let postList = this.builder.createListSection(list.tagName);

    let preItem = position.section;
    let currentList = preList;
    list.items.forEach(item => {
      // If this item matches the start item and the position is at its start,
      // it should be appended to the postList instead of the preList
      if (item === preItem && position.isEqual(item.headPosition())) {
        currentList = postList;
      }
      currentList.items.append(item.clone());
      // If we just appended the preItem, append the remaining items to the postList
      if (item === preItem) {
        currentList = postList;
      }
    });

    this._replaceSection(list, [preList, postList]);
    return [preList, postList];
  }

  /**
   * @return Array of [prev, mid, next] lists. `prev` and `next` can
   *         be blank, depending on the position of `item`. `mid` will always
   *         be a 1-item list containing `item`. `prev` and `next` will be
   *         removed in the before_complete queue if they are blank
   *         (and still attached).
   *
   * @private
   */
  _splitListAtItem(list, item) {
    let next = list;
    let prev = this.builder.createListSection(next.tagName, [], next.attributes);
    let mid = this.builder.createListSection(next.tagName);

    let addToPrev = true;
    // must turn the LinkedList into an array so that we can remove items
    // as we iterate through it
    let items = next.items.toArray();
    items.forEach(i => {
      let listToAppend;
      if (i === item) {
        addToPrev    = false;
        listToAppend = mid;
      } else if (addToPrev) {
        listToAppend = prev;
      } else {
        return; // break after iterating prev and mid parts of the list
      }
      listToAppend.join(i);
      this.removeSection(i);
    });
    let found = !addToPrev;
    assert('Cannot split list at item that is not present in the list', found);

    let collection = this.editor.post.sections;
    this.insertSectionBefore(collection, mid, next);
    this.insertSectionBefore(collection, prev, mid);

    // Remove possibly blank prev/next lists
    this.addCallback(CALLBACK_QUEUES.BEFORE_COMPLETE, () => {
      [prev, next].forEach(_list => {
        let isAttached = !!_list.parent;
        if (_list.isBlank && isAttached) {
          this.removeSection(_list);
        }
      });
    });

    return [prev, mid, next];
  }

  _changeSectionFromListItem(section, newTagName) {
    assert('Must pass list item to `_changeSectionFromListItem`',
           section.isListItem);

    let listSection = section.parent;
    let markupSection = this.builder.createMarkupSection(newTagName);
    markupSection.join(section);

    let [, mid,] = this._splitListAtItem(listSection, section);
    this.replaceSection(mid, markupSection);
    return markupSection;
  }

  _changeSectionToListItem(section, newTagName) {
    let isAlreadyCorrectListItem = section.isListItem &&
      section.parent.tagName === newTagName;

    if (isAlreadyCorrectListItem) {
      return section;
    }

    let listSection = this.builder.createListSection(newTagName);
    listSection.join(section);

    let sectionToReplace;
    if (section.isListItem) {
      let [, mid,] = this._splitListAtItem(section.parent, section);
      sectionToReplace = mid;
    } else {
      sectionToReplace = section;
    }
    this.replaceSection(sectionToReplace, listSection);
    return listSection;
  }

  /**
   * Insert a given section before another one, updating the post abstract
   * and the rendered UI.
   *
   * Usage:
   * ```
   *     let markerRange = editor.range;
   *     let sectionWithCursor = markerRange.headMarker.section;
   *     let section = editor.builder.createCardSection('my-image');
   *     let collection = sectionWithCursor.parent.sections;
   *     editor.run((postEditor) => {
   *       postEditor.insertSectionBefore(collection, section, sectionWithCursor);
   *     });
   * ```
   * @param {LinkedList} collection The list of sections to insert into
   * @param {Object} section The new section
   * @param {Object} beforeSection Optional The section "before" is relative to,
   *        if falsy the new section will be appended to the collection
   * @public
   */
  insertSectionBefore(collection, section, beforeSection) {
    collection.insertBefore(section, beforeSection);
    this._markDirty(section.parent);
  }

  /**
   * Insert the given section after the current active section, or, if no
   * section is active, at the end of the document.
   * @param {Section} section
   * @public
   */
  insertSection(section) {
    const activeSection = this.editor.activeSection;
    const nextSection = activeSection && activeSection.next;

    const collection = this.editor.post.sections;
    this.insertSectionBefore(collection, section, nextSection);
  }

  /**
   * Insert the given section at the end of the document.
   * @param {Section} section
   * @public
   */
  insertSectionAtEnd(section) {
    this.insertSectionBefore(this.editor.post.sections, section, null);
  }

  /**
   * Insert the `post` at the given position in the editor's post.
   * @param {Position} position
   * @param {Post} post
   * @private
   */
  insertPost(position, newPost) {
    let post = this.editor.post;
    let inserter = new Inserter(this, post);
    let nextPosition = inserter.insert(position, newPost);
    return nextPosition;
  }

  /**
   * Remove a given section from the post abstract and the rendered UI.
   *
   * Usage:
   * ```
   *     let { range } = editor;
   *     let sectionWithCursor = range.head.section;
   *     editor.run((postEditor) => {
   *       postEditor.removeSection(sectionWithCursor);
   *     });
   * ```
   * @param {Object} section The section to remove
   * @public
   */
  removeSection(section) {
    let parent          = section.parent;
    this._scheduleForRemoval(section);
    parent.sections.remove(section);

    if (parent.isListSection) {
      this._scheduleListRemovalIfEmpty(parent);
    }
  }

  removeAllSections() {
    this.editor.post.sections.toArray().forEach(section => {
      this.removeSection(section);
    });
  }

  migrateSectionsFromPost(post) {
    post.sections.toArray().forEach(section => {
      post.sections.remove(section);
      this.insertSectionBefore(this.editor.post.sections, section, null);
    });
  }

  _scheduleListRemovalIfEmpty(listSection) {
    this.addCallback(CALLBACK_QUEUES.BEFORE_COMPLETE, () => {
      // if the list is attached and blank after we do other rendering stuff,
      // remove it
      let isAttached = !!listSection.parent;
      if (isAttached && listSection.isBlank) {
        this.removeSection(listSection);
      }
    });
  }

  /**
   * A method for adding work the deferred queue
   *
   * @param {Function} callback to run during completion
   * @param {Boolean} [once=false] Whether to only schedule the callback once.
   * @public
   */
  schedule(callback, once=false) {
    assert('Work can only be scheduled before a post edit has completed',
           !this._didComplete);
    if (once) {
      this.addCallbackOnce(CALLBACK_QUEUES.COMPLETE, callback);
    } else {
      this.addCallback(CALLBACK_QUEUES.COMPLETE, callback);
    }
  }

  /**
   * A method for adding work the deferred queue. The callback will only
   * be added to the queue once, even if `scheduleOnce` is called multiple times.
   * The function cannot be an anonymous function.
   *
   * @param {Function} callback to run during completion
   * @public
   */
  scheduleOnce(callback) {
    this.schedule(callback, true);
  }

  /**
   * Add a rerender job to the queue
   *
   * @public
   */
  scheduleRerender() {
    this.scheduleOnce(this._rerender);
  }

  /**
   * Schedule a notification that the post has been changed.
   * The notification will result in the editor firing its `postDidChange`
   * hook after the postEditor completes its work (at the end of {@link Editor#run}).
   *
   * @public
   */
  scheduleDidUpdate() {
    this.scheduleOnce(this._postDidChange);
  }

  scheduleAfterRender(callback, once=false) {
    if (once) {
      this.addCallbackOnce(CALLBACK_QUEUES.AFTER_COMPLETE, callback);
    } else {
      this.addCallback(CALLBACK_QUEUES.AFTER_COMPLETE, callback);
    }
  }

  /**
   * Flush any work on the queue. {@link Editor#run} calls this method; it
   * should not be called directly.
   *
   * @private
   */
  complete() {
    assert('Post editing can only be completed once', !this._didComplete);

    this.runCallbacks(CALLBACK_QUEUES.BEFORE_COMPLETE);
    this._didComplete = true;
    this.runCallbacks(CALLBACK_QUEUES.COMPLETE);
    this.runCallbacks(CALLBACK_QUEUES.AFTER_COMPLETE);
  }

  undoLastChange() {
    this.editor._editHistory.stepBackward(this);
  }

  redoLastChange() {
    this.editor._editHistory.stepForward(this);
  }

  cancelSnapshot() {
    this._shouldCancelSnapshot = true;
  }
}

const placeholderImageSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsHm6+63u77Hy868wMPe4+bO09bh5unr8fTR1djAxMfM0NPX3N/c4eTBxcjXRf5TAAACh0lEQVR4nO3b6ZKqMBSFUSQMYZL3f9tbBq/NEEDiqUqOfusn1ZXKbjcQlGQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC6RkbsGHuabChEtHmiGYfS3EQYM+Sxw/gMQvmcNnYaj6oTDHi73WPn2eqnj9B8zo3TJXcq5uNjXmVff86VwSR3JtryMa1BYqi7S1hJDCVpSigyLcGhJJEwzlCSNtPKrbVhVwsdCfOhH7uuaG3ARV9DwsaOzxt3N1yPqCHhvXytTUz92VDpmE/LLhZwl++R6Sds6sUa/PL6K/2E2fIhw1xdRKefsFolrPc+xNx/N0k/4fpBsdhL2HfeiN+TsDCms8dDpeRyS3P3QDl6Iqaf8L0rTf+80m6Lmn7Ct+4Wxf+/2RY1/YRv3PHz/u+fsCmqgoTnq7Z+8SGviqoh4dnKu1ieqauiakh4/PQ0r6ivqDoSHj0B97eNRVG1JNxV+L4bnxdVecJtRTdFVZ7QU9F1UXUn9FZ0VVRlCav5ob2KLouqKmFjy676u2HsVnRRVFUJq3J+8KCi86IqSthMvyl209Hjijqm3RsqAZ5pNfa5PJ2KelJRjQmr1/r7cfy0ouoSNvOfvbvhvKLaEr4qOin9kTQnrN7LpDZhE/Zmhp6Eq4p+YcKgiipKGFhRRQkDK6ooYfgLbiSMioQkJGF8P5XwHv4O+7AaKiXzaeXh1kMl5AffTUxiKEm/krD94BR8Gdxl1fceSlR58ZhXKbEpyD2amNiBtmrJLTMHL1LF8/rpXkSZXEmz8K8uvAFFNm6Iq0aBLUFOmeCuJ6exrcCmoLpN7kYx891bSAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgh/wDdr8peyRHLogAAAAASUVORK5CYII=";

var ImageCard = {
  name: 'image',
  type: 'dom',

  render({payload}) {
    let img = document.createElement('img');
    img.src = payload.src || placeholderImageSrc;
    return img;
  }
};

function visit(visitor, node, opcodes) {
  const method = node.type;
  assert(`Cannot visit unknown type ${method}`, !!visitor[method]);
  visitor[method](node, opcodes);
}

function compile(compiler, opcodes) {
  for (var i=0, l=opcodes.length; i<l; i++) {
    let [method, ...params] = opcodes[i];
    let length = params.length;
    if (length === 0) {
      compiler[method].call(compiler);
    } else if (length === 1) {
      compiler[method].call(compiler, params[0]);
    } else if (length === 2) {
      compiler[method].call(compiler, params[0], params[1]);
    } else {
      compiler[method].apply(compiler, params);
    }
  }
}

function visitArray(visitor, nodes, opcodes) {
  if (!nodes || nodes.length === 0) {
    return;
  }
  forEach(nodes, node => {
    visit(visitor, node, opcodes);
  });
}

const MOBILEDOC_VERSION = '0.2.0';
const MOBILEDOC_MARKUP_SECTION_TYPE = 1;
const MOBILEDOC_IMAGE_SECTION_TYPE = 2;
const MOBILEDOC_LIST_SECTION_TYPE = 3;
const MOBILEDOC_CARD_SECTION_TYPE = 10;

const visitor = {
  [POST_TYPE](node, opcodes) {
    opcodes.push(['openPost']);
    visitArray(visitor, node.sections, opcodes);
  },
  [MARKUP_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openMarkupSection', node.tagName]);
    visitArray(visitor, node.markers, opcodes);
  },
  [LIST_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openListSection', node.tagName]);
    visitArray(visitor, node.items, opcodes);
  },
  [LIST_ITEM_TYPE](node, opcodes) {
    opcodes.push(['openListItem']);
    visitArray(visitor, node.markers, opcodes);
  },
  [IMAGE_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openImageSection', node.src]);
  },
  [CARD_TYPE](node, opcodes) {
    opcodes.push(['openCardSection', node.name, node.payload]);
  },
  [MARKER_TYPE](node, opcodes) {
    opcodes.push(['openMarker', node.closedMarkups.length, node.value]);
    visitArray(visitor, node.openedMarkups, opcodes);
  },
  [MARKUP_TYPE](node, opcodes) {
    opcodes.push(['openMarkup', node.tagName, objectToSortedKVArray(node.attributes)]);
  }
};

const postOpcodeCompiler = {
  openMarker(closeCount, value) {
    this.markupMarkerIds = [];
    this.markers.push([
      this.markupMarkerIds,
      closeCount,
      value || ''
    ]);
  },
  openMarkupSection(tagName) {
    this.markers = [];
    this.sections.push([MOBILEDOC_MARKUP_SECTION_TYPE, tagName, this.markers]);
  },
  openListSection(tagName) {
    this.items = [];
    this.sections.push([MOBILEDOC_LIST_SECTION_TYPE, tagName, this.items]);
  },
  openListItem() {
    this.markers = [];
    this.items.push(this.markers);
  },
  openImageSection(url) {
    this.sections.push([MOBILEDOC_IMAGE_SECTION_TYPE, url]);
  },
  openCardSection(name, payload) {
    this.sections.push([MOBILEDOC_CARD_SECTION_TYPE, name, payload]);
  },
  openPost() {
    this.markerTypes = [];
    this.sections = [];
    this.result = {
      version: MOBILEDOC_VERSION,
      sections: [this.markerTypes, this.sections]
    };
  },
  openMarkup(tagName, attributes) {
    const index = this._findOrAddMarkerTypeIndex(tagName, attributes);
    this.markupMarkerIds.push(index);
  },
  _findOrAddMarkerTypeIndex(tagName, attributesArray) {
    if (!this._markerTypeCache) { this._markerTypeCache = {}; }
    const key = `${tagName}-${attributesArray.join('-')}`;

    let index = this._markerTypeCache[key];
    if (index === undefined) {
      let markerType = [tagName];
      if (attributesArray.length) { markerType.push(attributesArray); }
      this.markerTypes.push(markerType);

      index =  this.markerTypes.length - 1;
      this._markerTypeCache[key] = index;
    }

    return index;
  }
};

/**
 * Render from post -> mobiledoc
 */
var MobiledocRenderer_0_2 = {
  /**
   * @param {Post}
   * @return {Mobiledoc}
   */
  render(post) {
    let opcodes = [];
    visit(visitor, post, opcodes);
    let compiler = Object.create(postOpcodeCompiler);
    compile(compiler, opcodes);
    return compiler.result;
  }
};

/*
 * Parses from mobiledoc -> post
 */
class MobiledocParser {
  constructor(builder) {
    this.builder = builder;
  }

  /**
   * @param {Mobiledoc}
   * @return {Post}
   */
  parse({sections: sectionData}) {
    try {
      const markerTypes = sectionData[0];
      const sections    = sectionData[1];

      const post = this.builder.createPost();

      this.markups = [];
      this.markerTypes = this.parseMarkerTypes(markerTypes);
      this.parseSections(sections, post);

      return post;
    } catch (e) {
      assert(`Unable to parse mobiledoc: ${e.message}`, false);
    }
  }

  parseMarkerTypes(markerTypes) {
    return markerTypes.map((markerType) => this.parseMarkerType(markerType));
  }

  parseMarkerType([tagName, attributesArray]) {
    const attributesObject = kvArrayToObject(attributesArray || []);
    return this.builder.createMarkup(tagName, attributesObject);
  }

  parseSections(sections, post) {
    sections.forEach((section) => this.parseSection(section, post));
  }

  parseSection(section, post) {
    let [type] = section;
    switch(type) {
      case MOBILEDOC_MARKUP_SECTION_TYPE:
        this.parseMarkupSection(section, post);
        break;
      case MOBILEDOC_IMAGE_SECTION_TYPE:
        this.parseImageSection(section, post);
        break;
      case MOBILEDOC_CARD_SECTION_TYPE:
        this.parseCardSection(section, post);
        break;
      case MOBILEDOC_LIST_SECTION_TYPE:
        this.parseListSection(section, post);
        break;
      default:
        assert(`Unexpected section type ${type}`, false);
    }
  }

  parseCardSection([, name, payload], post) {
    const section = this.builder.createCardSection(name, payload);
    post.sections.append(section);
  }

  parseImageSection([, src], post) {
    const section = this.builder.createImageSection(src);
    post.sections.append(section);
  }

  parseMarkupSection([, tagName, markers], post) {
    const section = this.builder.createMarkupSection(tagName.toLowerCase() === 'pull-quote' ? 'aside' : tagName);
    post.sections.append(section);
    this.parseMarkers(markers, section);
    // Strip blank markers after they have been created. This ensures any
    // markup they include has been correctly populated.
    filter(section.markers, m => m.isBlank).forEach(m => {
      section.markers.remove(m);
    });
  }

  parseListSection([, tagName, items], post) {
    const section = this.builder.createListSection(tagName);
    post.sections.append(section);
    this.parseListItems(items, section);
  }

  parseListItems(items, section) {
    items.forEach(i => this.parseListItem(i, section));
  }

  parseListItem(markers, section) {
    const item = this.builder.createListItem();
    this.parseMarkers(markers, item);
    section.items.append(item);
  }

  parseMarkers(markers, parent) {
    markers.forEach(m => this.parseMarker(m, parent));
  }

  parseMarker([markerTypeIndexes, closeCount, value], parent) {
    markerTypeIndexes.forEach(index => {
      this.markups.push(this.markerTypes[index]);
    });
    const marker = this.builder.createMarker(value, this.markups.slice());
    parent.markers.append(marker);
    this.markups = this.markups.slice(0, this.markups.length-closeCount);
  }
}

const MOBILEDOC_VERSION$1 = '0.3.0';
const MOBILEDOC_MARKUP_SECTION_TYPE$1 = 1;
const MOBILEDOC_IMAGE_SECTION_TYPE$1 = 2;
const MOBILEDOC_LIST_SECTION_TYPE$1 = 3;
const MOBILEDOC_CARD_SECTION_TYPE$1 = 10;

const MOBILEDOC_MARKUP_MARKER_TYPE = 0;
const MOBILEDOC_ATOM_MARKER_TYPE = 1;

const visitor$1 = {
  [POST_TYPE](node, opcodes) {
    opcodes.push(['openPost']);
    visitArray(visitor$1, node.sections, opcodes);
  },
  [MARKUP_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openMarkupSection', node.tagName]);
    visitArray(visitor$1, node.markers, opcodes);
  },
  [LIST_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openListSection', node.tagName]);
    visitArray(visitor$1, node.items, opcodes);
  },
  [LIST_ITEM_TYPE](node, opcodes) {
    opcodes.push(['openListItem']);
    visitArray(visitor$1, node.markers, opcodes);
  },
  [IMAGE_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openImageSection', node.src]);
  },
  [CARD_TYPE](node, opcodes) {
    opcodes.push(['openCardSection', node.name, node.payload]);
  },
  [MARKER_TYPE](node, opcodes) {
    opcodes.push(['openMarker', node.closedMarkups.length, node.value]);
    visitArray(visitor$1, node.openedMarkups, opcodes);
  },
  [MARKUP_TYPE](node, opcodes) {
    opcodes.push(['openMarkup', node.tagName, objectToSortedKVArray(node.attributes)]);
  },
  [ATOM_TYPE](node, opcodes) {
    opcodes.push(['openAtom', node.closedMarkups.length, node.name, node.value, node.payload]);
    visitArray(visitor$1, node.openedMarkups, opcodes);
  }
};

const postOpcodeCompiler$1 = {
  openMarker(closeCount, value) {
    this.markupMarkerIds = [];
    this.markers.push([
      MOBILEDOC_MARKUP_MARKER_TYPE,
      this.markupMarkerIds,
      closeCount,
      value || ''
    ]);
  },
  openMarkupSection(tagName) {
    this.markers = [];
    this.sections.push([MOBILEDOC_MARKUP_SECTION_TYPE$1, tagName, this.markers]);
  },
  openListSection(tagName) {
    this.items = [];
    this.sections.push([MOBILEDOC_LIST_SECTION_TYPE$1, tagName, this.items]);
  },
  openListItem() {
    this.markers = [];
    this.items.push(this.markers);
  },
  openImageSection(url) {
    this.sections.push([MOBILEDOC_IMAGE_SECTION_TYPE$1, url]);
  },
  openCardSection(name, payload) {
    const index = this._addCardTypeIndex(name, payload);
    this.sections.push([MOBILEDOC_CARD_SECTION_TYPE$1, index]);
  },
  openAtom(closeCount, name, value, payload) {
    const index = this._addAtomTypeIndex(name, value, payload);
    this.markupMarkerIds = [];
    this.markers.push([
      MOBILEDOC_ATOM_MARKER_TYPE,
      this.markupMarkerIds,
      closeCount,
      index
    ]);
  },
  openPost() {
    this.atomTypes = [];
    this.cardTypes = [];
    this.markerTypes = [];
    this.sections = [];
    this.result = {
      version: MOBILEDOC_VERSION$1,
      atoms: this.atomTypes,
      cards: this.cardTypes,
      markups: this.markerTypes,
      sections: this.sections
    };
  },
  openMarkup(tagName, attributes) {
    const index = this._findOrAddMarkerTypeIndex(tagName, attributes);
    this.markupMarkerIds.push(index);
  },
  _addCardTypeIndex(cardName, payload) {
    let cardType = [cardName, payload];
    this.cardTypes.push(cardType);
    return this.cardTypes.length - 1;
  },
  _addAtomTypeIndex(atomName, atomValue, payload) {
    let atomType = [atomName, atomValue, payload];
    this.atomTypes.push(atomType);
    return this.atomTypes.length - 1;
  },
  _findOrAddMarkerTypeIndex(tagName, attributesArray) {
    if (!this._markerTypeCache) { this._markerTypeCache = {}; }
    const key = `${tagName}-${attributesArray.join('-')}`;

    let index = this._markerTypeCache[key];
    if (index === undefined) {
      let markerType = [tagName];
      if (attributesArray.length) { markerType.push(attributesArray); }
      this.markerTypes.push(markerType);

      index =  this.markerTypes.length - 1;
      this._markerTypeCache[key] = index;
    }

    return index;
  }
};

/**
 * Render from post -> mobiledoc
 */
var MobiledocRenderer_0_3 = {
  /**
   * @param {Post}
   * @return {Mobiledoc}
   */
  render(post) {
    let opcodes = [];
    visit(visitor$1, post, opcodes);
    let compiler = Object.create(postOpcodeCompiler$1);
    compile(compiler, opcodes);
    return compiler.result;
  }
};

/*
 * Parses from mobiledoc -> post
 */
class MobiledocParser$1 {
  constructor(builder) {
    this.builder = builder;
  }

  /**
   * @param {Mobiledoc}
   * @return {Post}
   */
  parse({ sections, markups: markerTypes, cards: cardTypes, atoms: atomTypes }) {
    try {
      const post = this.builder.createPost();

      this.markups = [];
      this.markerTypes = this.parseMarkerTypes(markerTypes);
      this.cardTypes = this.parseCardTypes(cardTypes);
      this.atomTypes = this.parseAtomTypes(atomTypes);
      this.parseSections(sections, post);

      return post;
    } catch (e) {
      assert(`Unable to parse mobiledoc: ${e.message}`, false);
    }
  }

  parseMarkerTypes(markerTypes) {
    return markerTypes.map((markerType) => this.parseMarkerType(markerType));
  }

  parseMarkerType([tagName, attributesArray]) {
    const attributesObject = kvArrayToObject(attributesArray || []);
    return this.builder.createMarkup(tagName, attributesObject);
  }

  parseCardTypes(cardTypes) {
    return cardTypes.map((cardType) => this.parseCardType(cardType));
  }

  parseCardType([cardName, cardPayload]) {
    return [cardName, cardPayload];
  }

  parseAtomTypes(atomTypes) {
    return atomTypes.map((atomType) => this.parseAtomType(atomType));
  }

  parseAtomType([atomName, atomValue, atomPayload]) {
    return [atomName, atomValue, atomPayload];
  }

  parseSections(sections, post) {
    sections.forEach((section) => this.parseSection(section, post));
  }

  parseSection(section, post) {
    let [type] = section;
    switch(type) {
      case MOBILEDOC_MARKUP_SECTION_TYPE$1:
        this.parseMarkupSection(section, post);
        break;
      case MOBILEDOC_IMAGE_SECTION_TYPE$1:
        this.parseImageSection(section, post);
        break;
      case MOBILEDOC_CARD_SECTION_TYPE$1:
        this.parseCardSection(section, post);
        break;
      case MOBILEDOC_LIST_SECTION_TYPE$1:
        this.parseListSection(section, post);
        break;
      default:
        assert('Unexpected section type ${type}', false);
    }
  }

  getAtomTypeFromIndex(index) {
    const atomType = this.atomTypes[index];
    assert(`No atom definition found at index ${index}`, !!atomType);
    return atomType;
  }

  getCardTypeFromIndex(index) {
    const cardType = this.cardTypes[index];
    assert(`No card definition found at index ${index}`, !!cardType);
    return cardType;
  }

  parseCardSection([, cardIndex], post) {
    const [name, payload] = this.getCardTypeFromIndex(cardIndex);
    const section = this.builder.createCardSection(name, payload);
    post.sections.append(section);
  }

  parseImageSection([, src], post) {
    const section = this.builder.createImageSection(src);
    post.sections.append(section);
  }

  parseMarkupSection([, tagName, markers], post) {
    const section = this.builder.createMarkupSection(tagName.toLowerCase() === 'pull-quote' ? 'aside' : tagName);
    post.sections.append(section);
    this.parseMarkers(markers, section);
    // Strip blank markers after they have been created. This ensures any
    // markup they include has been correctly populated.
    filter(section.markers, m => m.isBlank).forEach(m => {
      section.markers.remove(m);
    });
  }

  parseListSection([, tagName, items], post) {
    const section = this.builder.createListSection(tagName);
    post.sections.append(section);
    this.parseListItems(items, section);
  }

  parseListItems(items, section) {
    items.forEach(i => this.parseListItem(i, section));
  }

  parseListItem(markers, section) {
    const item = this.builder.createListItem();
    this.parseMarkers(markers, item);
    section.items.append(item);
  }

  parseMarkers(markers, parent) {
    markers.forEach(m => this.parseMarker(m, parent));
  }

  parseMarker([type, markerTypeIndexes, closeCount, value], parent) {
    markerTypeIndexes.forEach(index => {
      this.markups.push(this.markerTypes[index]);
    });

    const marker = this.buildMarkerType(type, value);
    parent.markers.append(marker);

    this.markups = this.markups.slice(0, this.markups.length-closeCount);
  }

  buildMarkerType(type, value) {
    switch (type) {
      case MOBILEDOC_MARKUP_MARKER_TYPE:
        return this.builder.createMarker(value, this.markups.slice());
      case MOBILEDOC_ATOM_MARKER_TYPE: {
        const [atomName, atomValue, atomPayload] = this.getAtomTypeFromIndex(value);
        return this.builder.createAtom(atomName, atomValue, atomPayload, this.markups.slice());
      }
      default:
        assert(`Unexpected marker type ${type}`, false);
    }
  }
}

const MOBILEDOC_VERSION$2 = '0.3.1';
const MOBILEDOC_MARKUP_SECTION_TYPE$2 = 1;
const MOBILEDOC_IMAGE_SECTION_TYPE$2 = 2;
const MOBILEDOC_LIST_SECTION_TYPE$2 = 3;
const MOBILEDOC_CARD_SECTION_TYPE$2 = 10;

const MOBILEDOC_MARKUP_MARKER_TYPE$1 = 0;
const MOBILEDOC_ATOM_MARKER_TYPE$1 = 1;

const visitor$2 = {
  [POST_TYPE](node, opcodes) {
    opcodes.push(['openPost']);
    visitArray(visitor$2, node.sections, opcodes);
  },
  [MARKUP_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openMarkupSection', node.tagName]);
    visitArray(visitor$2, node.markers, opcodes);
  },
  [LIST_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openListSection', node.tagName]);
    visitArray(visitor$2, node.items, opcodes);
  },
  [LIST_ITEM_TYPE](node, opcodes) {
    opcodes.push(['openListItem']);
    visitArray(visitor$2, node.markers, opcodes);
  },
  [IMAGE_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openImageSection', node.src]);
  },
  [CARD_TYPE](node, opcodes) {
    opcodes.push(['openCardSection', node.name, node.payload]);
  },
  [MARKER_TYPE](node, opcodes) {
    opcodes.push(['openMarker', node.closedMarkups.length, node.value]);
    visitArray(visitor$2, node.openedMarkups, opcodes);
  },
  [MARKUP_TYPE](node, opcodes) {
    opcodes.push(['openMarkup', node.tagName, objectToSortedKVArray(node.attributes)]);
  },
  [ATOM_TYPE](node, opcodes) {
    opcodes.push(['openAtom', node.closedMarkups.length, node.name, node.value, node.payload]);
    visitArray(visitor$2, node.openedMarkups, opcodes);
  }
};

const postOpcodeCompiler$2 = {
  openMarker(closeCount, value) {
    this.markupMarkerIds = [];
    this.markers.push([
      MOBILEDOC_MARKUP_MARKER_TYPE$1,
      this.markupMarkerIds,
      closeCount,
      value || ''
    ]);
  },
  openMarkupSection(tagName) {
    this.markers = [];
    this.sections.push([MOBILEDOC_MARKUP_SECTION_TYPE$2, tagName, this.markers]);
  },
  openListSection(tagName) {
    this.items = [];
    this.sections.push([MOBILEDOC_LIST_SECTION_TYPE$2, tagName, this.items]);
  },
  openListItem() {
    this.markers = [];
    this.items.push(this.markers);
  },
  openImageSection(url) {
    this.sections.push([MOBILEDOC_IMAGE_SECTION_TYPE$2, url]);
  },
  openCardSection(name, payload) {
    const index = this._addCardTypeIndex(name, payload);
    this.sections.push([MOBILEDOC_CARD_SECTION_TYPE$2, index]);
  },
  openAtom(closeCount, name, value, payload) {
    const index = this._addAtomTypeIndex(name, value, payload);
    this.markupMarkerIds = [];
    this.markers.push([
      MOBILEDOC_ATOM_MARKER_TYPE$1,
      this.markupMarkerIds,
      closeCount,
      index
    ]);
  },
  openPost() {
    this.atomTypes = [];
    this.cardTypes = [];
    this.markerTypes = [];
    this.sections = [];
    this.result = {
      version: MOBILEDOC_VERSION$2,
      atoms: this.atomTypes,
      cards: this.cardTypes,
      markups: this.markerTypes,
      sections: this.sections
    };
  },
  openMarkup(tagName, attributes) {
    const index = this._findOrAddMarkerTypeIndex(tagName, attributes);
    this.markupMarkerIds.push(index);
  },
  _addCardTypeIndex(cardName, payload) {
    let cardType = [cardName, payload];
    this.cardTypes.push(cardType);
    return this.cardTypes.length - 1;
  },
  _addAtomTypeIndex(atomName, atomValue, payload) {
    let atomType = [atomName, atomValue, payload];
    this.atomTypes.push(atomType);
    return this.atomTypes.length - 1;
  },
  _findOrAddMarkerTypeIndex(tagName, attributesArray) {
    if (!this._markerTypeCache) { this._markerTypeCache = {}; }
    const key = `${tagName}-${attributesArray.join('-')}`;

    let index = this._markerTypeCache[key];
    if (index === undefined) {
      let markerType = [tagName];
      if (attributesArray.length) { markerType.push(attributesArray); }
      this.markerTypes.push(markerType);

      index =  this.markerTypes.length - 1;
      this._markerTypeCache[key] = index;
    }

    return index;
  }
};

/**
 * Render from post -> mobiledoc
 */
var MobiledocRenderer_0_3_1 = {
  /**
   * @param {Post}
   * @return {Mobiledoc}
   */
  render(post) {
    let opcodes = [];
    visit(visitor$2, post, opcodes);
    let compiler = Object.create(postOpcodeCompiler$2);
    compile(compiler, opcodes);
    return compiler.result;
  }
};

/*
 * Parses from mobiledoc -> post
 */
class MobiledocParser$2 {
  constructor(builder) {
    this.builder = builder;
  }

  /**
   * @param {Mobiledoc}
   * @return {Post}
   */
  parse({ sections, markups: markerTypes, cards: cardTypes, atoms: atomTypes }) {
    try {
      const post = this.builder.createPost();

      this.markups = [];
      this.markerTypes = this.parseMarkerTypes(markerTypes);
      this.cardTypes = this.parseCardTypes(cardTypes);
      this.atomTypes = this.parseAtomTypes(atomTypes);
      this.parseSections(sections, post);

      return post;
    } catch (e) {
      assert(`Unable to parse mobiledoc: ${e.message}`, false);
    }
  }

  parseMarkerTypes(markerTypes) {
    return markerTypes.map((markerType) => this.parseMarkerType(markerType));
  }

  parseMarkerType([tagName, attributesArray]) {
    const attributesObject = kvArrayToObject(attributesArray || []);
    return this.builder.createMarkup(tagName, attributesObject);
  }

  parseCardTypes(cardTypes) {
    return cardTypes.map((cardType) => this.parseCardType(cardType));
  }

  parseCardType([cardName, cardPayload]) {
    return [cardName, cardPayload];
  }

  parseAtomTypes(atomTypes) {
    return atomTypes.map((atomType) => this.parseAtomType(atomType));
  }

  parseAtomType([atomName, atomValue, atomPayload]) {
    return [atomName, atomValue, atomPayload];
  }

  parseSections(sections, post) {
    sections.forEach((section) => this.parseSection(section, post));
  }

  parseSection(section, post) {
    let [type] = section;
    switch(type) {
      case MOBILEDOC_MARKUP_SECTION_TYPE$2:
        this.parseMarkupSection(section, post);
        break;
      case MOBILEDOC_IMAGE_SECTION_TYPE$2:
        this.parseImageSection(section, post);
        break;
      case MOBILEDOC_CARD_SECTION_TYPE$2:
        this.parseCardSection(section, post);
        break;
      case MOBILEDOC_LIST_SECTION_TYPE$2:
        this.parseListSection(section, post);
        break;
      default:
        assert('Unexpected section type ${type}', false);
    }
  }

  getAtomTypeFromIndex(index) {
    const atomType = this.atomTypes[index];
    assert(`No atom definition found at index ${index}`, !!atomType);
    return atomType;
  }

  getCardTypeFromIndex(index) {
    const cardType = this.cardTypes[index];
    assert(`No card definition found at index ${index}`, !!cardType);
    return cardType;
  }

  parseCardSection([, cardIndex], post) {
    const [name, payload] = this.getCardTypeFromIndex(cardIndex);
    const section = this.builder.createCardSection(name, payload);
    post.sections.append(section);
  }

  parseImageSection([, src], post) {
    const section = this.builder.createImageSection(src);
    post.sections.append(section);
  }

  parseMarkupSection([, tagName, markers], post) {
    const section = this.builder.createMarkupSection(tagName);
    post.sections.append(section);
    this.parseMarkers(markers, section);
    // Strip blank markers after they have been created. This ensures any
    // markup they include has been correctly populated.
    filter(section.markers, m => m.isBlank).forEach(m => {
      section.markers.remove(m);
    });
  }

  parseListSection([, tagName, items], post) {
    const section = this.builder.createListSection(tagName);
    post.sections.append(section);
    this.parseListItems(items, section);
  }

  parseListItems(items, section) {
    items.forEach(i => this.parseListItem(i, section));
  }

  parseListItem(markers, section) {
    const item = this.builder.createListItem();
    this.parseMarkers(markers, item);
    section.items.append(item);
  }

  parseMarkers(markers, parent) {
    markers.forEach(m => this.parseMarker(m, parent));
  }

  parseMarker([type, markerTypeIndexes, closeCount, value], parent) {
    markerTypeIndexes.forEach(index => {
      this.markups.push(this.markerTypes[index]);
    });

    const marker = this.buildMarkerType(type, value);
    parent.markers.append(marker);

    this.markups = this.markups.slice(0, this.markups.length-closeCount);
  }

  buildMarkerType(type, value) {
    switch (type) {
      case MOBILEDOC_MARKUP_MARKER_TYPE$1:
        return this.builder.createMarker(value, this.markups.slice());
      case MOBILEDOC_ATOM_MARKER_TYPE$1: {
        const [atomName, atomValue, atomPayload] = this.getAtomTypeFromIndex(value);
        return this.builder.createAtom(atomName, atomValue, atomPayload, this.markups.slice());
      }
      default:
        assert(`Unexpected marker type ${type}`, false);
    }
  }
}

const MOBILEDOC_VERSION$3 = '0.3.2';
const MOBILEDOC_MARKUP_SECTION_TYPE$3 = 1;
const MOBILEDOC_IMAGE_SECTION_TYPE$3 = 2;
const MOBILEDOC_LIST_SECTION_TYPE$3 = 3;
const MOBILEDOC_CARD_SECTION_TYPE$3 = 10;

const MOBILEDOC_MARKUP_MARKER_TYPE$2 = 0;
const MOBILEDOC_ATOM_MARKER_TYPE$2 = 1;

const visitor$3 = {
  [POST_TYPE](node, opcodes) {
    opcodes.push(['openPost']);
    visitArray(visitor$3, node.sections, opcodes);
  },
  [MARKUP_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openMarkupSection', node.tagName, objectToSortedKVArray(node.attributes)]);
    visitArray(visitor$3, node.markers, opcodes);
  },
  [LIST_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openListSection', node.tagName, objectToSortedKVArray(node.attributes)]);
    visitArray(visitor$3, node.items, opcodes);
  },
  [LIST_ITEM_TYPE](node, opcodes) {
    opcodes.push(['openListItem']);
    visitArray(visitor$3, node.markers, opcodes);
  },
  [IMAGE_SECTION_TYPE](node, opcodes) {
    opcodes.push(['openImageSection', node.src]);
  },
  [CARD_TYPE](node, opcodes) {
    opcodes.push(['openCardSection', node.name, node.payload]);
  },
  [MARKER_TYPE](node, opcodes) {
    opcodes.push(['openMarker', node.closedMarkups.length, node.value]);
    visitArray(visitor$3, node.openedMarkups, opcodes);
  },
  [MARKUP_TYPE](node, opcodes) {
    opcodes.push(['openMarkup', node.tagName, objectToSortedKVArray(node.attributes)]);
  },
  [ATOM_TYPE](node, opcodes) {
    opcodes.push(['openAtom', node.closedMarkups.length, node.name, node.value, node.payload]);
    visitArray(visitor$3, node.openedMarkups, opcodes);
  }
};

const postOpcodeCompiler$3 = {
  openMarker(closeCount, value) {
    this.markupMarkerIds = [];
    this.markers.push([
      MOBILEDOC_MARKUP_MARKER_TYPE$2,
      this.markupMarkerIds,
      closeCount,
      value || ''
    ]);
  },
  openMarkupSection(tagName, attributes) {
    this.markers = [];
    if (attributes && attributes.length !== 0) {
      this.sections.push([MOBILEDOC_MARKUP_SECTION_TYPE$3, tagName, this.markers, attributes]);
    } else {
      this.sections.push([MOBILEDOC_MARKUP_SECTION_TYPE$3, tagName, this.markers]);
    }
  },
  openListSection(tagName, attributes) {
    this.items = [];
    if (attributes && attributes.length !== 0) {
      this.sections.push([MOBILEDOC_LIST_SECTION_TYPE$3, tagName, this.items, attributes]);
    } else {
      this.sections.push([MOBILEDOC_LIST_SECTION_TYPE$3, tagName, this.items]);
    }
  },
  openListItem() {
    this.markers = [];
    this.items.push(this.markers);
  },
  openImageSection(url) {
    this.sections.push([MOBILEDOC_IMAGE_SECTION_TYPE$3, url]);
  },
  openCardSection(name, payload) {
    const index = this._addCardTypeIndex(name, payload);
    this.sections.push([MOBILEDOC_CARD_SECTION_TYPE$3, index]);
  },
  openAtom(closeCount, name, value, payload) {
    const index = this._addAtomTypeIndex(name, value, payload);
    this.markupMarkerIds = [];
    this.markers.push([
      MOBILEDOC_ATOM_MARKER_TYPE$2,
      this.markupMarkerIds,
      closeCount,
      index
    ]);
  },
  openPost() {
    this.atomTypes = [];
    this.cardTypes = [];
    this.markerTypes = [];
    this.sections = [];
    this.result = {
      version: MOBILEDOC_VERSION$3,
      atoms: this.atomTypes,
      cards: this.cardTypes,
      markups: this.markerTypes,
      sections: this.sections
    };
  },
  openMarkup(tagName, attributes) {
    const index = this._findOrAddMarkerTypeIndex(tagName, attributes);
    this.markupMarkerIds.push(index);
  },
  _addCardTypeIndex(cardName, payload) {
    let cardType = [cardName, payload];
    this.cardTypes.push(cardType);
    return this.cardTypes.length - 1;
  },
  _addAtomTypeIndex(atomName, atomValue, payload) {
    let atomType = [atomName, atomValue, payload];
    this.atomTypes.push(atomType);
    return this.atomTypes.length - 1;
  },
  _findOrAddMarkerTypeIndex(tagName, attributesArray) {
    if (!this._markerTypeCache) { this._markerTypeCache = {}; }
    const key = `${tagName}-${attributesArray.join('-')}`;

    let index = this._markerTypeCache[key];
    if (index === undefined) {
      let markerType = [tagName];
      if (attributesArray.length) { markerType.push(attributesArray); }
      this.markerTypes.push(markerType);

      index =  this.markerTypes.length - 1;
      this._markerTypeCache[key] = index;
    }

    return index;
  }
};

/**
 * Render from post -> mobiledoc
 */
var MobiledocRenderer_0_3_2 = {
  /**
   * @param {Post}
   * @return {Mobiledoc}
   */
  render(post) {
    let opcodes = [];
    visit(visitor$3, post, opcodes);
    let compiler = Object.create(postOpcodeCompiler$3);
    compile(compiler, opcodes);
    return compiler.result;
  }
};

function entries(obj) {
  const ownProps = Object.keys(obj);
  let i = ownProps.length;
  const resArray = new Array(i);

  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }

  return resArray;
}

/*
 * Parses from mobiledoc -> post
 */
class MobiledocParser$3 {
  constructor(builder) {
    this.builder = builder;
  }

  /**
   * @param {Mobiledoc}
   * @return {Post}
   */
  parse({ sections, markups: markerTypes, cards: cardTypes, atoms: atomTypes }) {
    try {
      const post = this.builder.createPost();

      this.markups = [];
      this.markerTypes = this.parseMarkerTypes(markerTypes);
      this.cardTypes = this.parseCardTypes(cardTypes);
      this.atomTypes = this.parseAtomTypes(atomTypes);
      this.parseSections(sections, post);

      return post;
    } catch (e) {
      assert(`Unable to parse mobiledoc: ${e.message}`, false);
    }
  }

  parseMarkerTypes(markerTypes) {
    return markerTypes.map((markerType) => this.parseMarkerType(markerType));
  }

  parseMarkerType([tagName, attributesArray]) {
    const attributesObject = kvArrayToObject(attributesArray || []);
    return this.builder.createMarkup(tagName, attributesObject);
  }

  parseCardTypes(cardTypes) {
    return cardTypes.map((cardType) => this.parseCardType(cardType));
  }

  parseCardType([cardName, cardPayload]) {
    return [cardName, cardPayload];
  }

  parseAtomTypes(atomTypes) {
    return atomTypes.map((atomType) => this.parseAtomType(atomType));
  }

  parseAtomType([atomName, atomValue, atomPayload]) {
    return [atomName, atomValue, atomPayload];
  }

  parseSections(sections, post) {
    sections.forEach((section) => this.parseSection(section, post));
  }

  parseSection(section, post) {
    let [type] = section;
    switch(type) {
      case MOBILEDOC_MARKUP_SECTION_TYPE$3:
        this.parseMarkupSection(section, post);
        break;
      case MOBILEDOC_IMAGE_SECTION_TYPE$3:
        this.parseImageSection(section, post);
        break;
      case MOBILEDOC_CARD_SECTION_TYPE$3:
        this.parseCardSection(section, post);
        break;
      case MOBILEDOC_LIST_SECTION_TYPE$3:
        this.parseListSection(section, post);
        break;
      default:
        assert('Unexpected section type ${type}', false);
    }
  }

  getAtomTypeFromIndex(index) {
    const atomType = this.atomTypes[index];
    assert(`No atom definition found at index ${index}`, !!atomType);
    return atomType;
  }

  getCardTypeFromIndex(index) {
    const cardType = this.cardTypes[index];
    assert(`No card definition found at index ${index}`, !!cardType);
    return cardType;
  }

  parseCardSection([, cardIndex], post) {
    const [name, payload] = this.getCardTypeFromIndex(cardIndex);
    const section = this.builder.createCardSection(name, payload);
    post.sections.append(section);
  }

  parseImageSection([, src], post) {
    const section = this.builder.createImageSection(src);
    post.sections.append(section);
  }

  parseMarkupSection([, tagName, markers, attributesArray], post) {
    const section = this.builder.createMarkupSection(tagName);
    post.sections.append(section);
    if (attributesArray) {
      entries(kvArrayToObject(attributesArray)).forEach(([key, value]) => {
        section.setAttribute(key, value);
      });
    }
    this.parseMarkers(markers, section);
    // Strip blank markers after they have been created. This ensures any
    // markup they include has been correctly populated.
    filter(section.markers, m => m.isBlank).forEach(m => {
      section.markers.remove(m);
    });
  }

  parseListSection([, tagName, items, attributesArray], post) {
    const section = this.builder.createListSection(tagName);
    post.sections.append(section);
    if (attributesArray) {
      entries(kvArrayToObject(attributesArray)).forEach(([key, value]) => {
        section.setAttribute(key, value);
      });
    }
    this.parseListItems(items, section);
  }

  parseListItems(items, section) {
    items.forEach(i => this.parseListItem(i, section));
  }

  parseListItem(markers, section) {
    const item = this.builder.createListItem();
    this.parseMarkers(markers, item);
    section.items.append(item);
  }

  parseMarkers(markers, parent) {
    markers.forEach(m => this.parseMarker(m, parent));
  }

  parseMarker([type, markerTypeIndexes, closeCount, value], parent) {
    markerTypeIndexes.forEach(index => {
      this.markups.push(this.markerTypes[index]);
    });

    const marker = this.buildMarkerType(type, value);
    parent.markers.append(marker);

    this.markups = this.markups.slice(0, this.markups.length-closeCount);
  }

  buildMarkerType(type, value) {
    switch (type) {
      case MOBILEDOC_MARKUP_MARKER_TYPE$2:
        return this.builder.createMarker(value, this.markups.slice());
      case MOBILEDOC_ATOM_MARKER_TYPE$2: {
        const [atomName, atomValue, atomPayload] = this.getAtomTypeFromIndex(value);
        return this.builder.createAtom(atomName, atomValue, atomPayload, this.markups.slice());
      }
      default:
        assert(`Unexpected marker type ${type}`, false);
    }
  }
}

function parseVersion(mobiledoc) {
  return mobiledoc.version;
}

var mobiledocParsers = {
  parse(builder, mobiledoc) {
    let version = parseVersion(mobiledoc);
    switch (version) {
      case MOBILEDOC_VERSION:
        return new MobiledocParser(builder).parse(mobiledoc);
      case MOBILEDOC_VERSION$1:
        return new MobiledocParser$1(builder).parse(mobiledoc);
      case MOBILEDOC_VERSION$2:
        return new MobiledocParser$2(builder).parse(mobiledoc);
      case MOBILEDOC_VERSION$3:
        return new MobiledocParser$3(builder).parse(mobiledoc);
      default:
        assert(`Unknown version of mobiledoc parser requested: ${version}`,
               false);
    }
  }
};

class CardNode {
  constructor(editor, card, section, element, options) {
    this.editor  = editor;
    this.card    = card;
    this.section = section;
    this.element = element;
    this.options = options;

    this.mode = null;

    this._teardownCallback = null;
    this._rendered         = null;
  }

  render(mode) {
    if (this.mode === mode) { return; }

    this.teardown();

    this.mode = mode;

    let method = mode === 'display' ? 'render' : 'edit';
    method = this.card[method];

    assert(`Card is missing "${method}" (tried to render mode: "${mode}")`,
           !!method);
    let rendered = method({
      env: this.env,
      options: this.options,
      payload: this.section.payload
    });

    this._validateAndAppendRenderResult(rendered);
  }

  teardown() {
    if (this._teardownCallback) {
      this._teardownCallback();
      this._teardownCallback = null;
    }
    if (this._rendered) {
      this.element.removeChild(this._rendered);
      this._rendered = null;
    }
  }

  didRender() {
    if (this._didRenderCallback) {
      this._didRenderCallback();
    }
  }

  get env() {
    return {
      name: this.card.name,
      isInEditor: true,
      onTeardown: (callback) => this._teardownCallback = callback,
      didRender: (callback) => this._didRenderCallback = callback,
      edit: () => this.edit(),
      save: (payload, transition=true) => {
        this.section.payload = payload;

        this.editor._postDidChange();
        if (transition) {
          this.display();
        }
      },
      cancel: () => this.display(),
      remove: () => this.remove(),
      postModel: this.section
    };
  }

  display() {
    this.render('display');
  }

  edit() {
    this.render('edit');
  }

  remove() {
    this.editor.run(postEditor => postEditor.removeSection(this.section));
  }

  _validateAndAppendRenderResult(rendered) {
    if (!rendered) {
      return;
    }

    let { card: { name } } = this;
    assert(
      `Card "${name}" must render dom (render value was: "${rendered}")`,
      !!rendered.nodeType
    );
    this.element.appendChild(rendered);
    this._rendered = rendered;
    this.didRender();
  }
}

class AtomNode {
  constructor(editor, atom, model, element, atomOptions) {
    this.editor = editor;
    this.atom = atom;
    this.model = model;
    this.atomOptions = atomOptions;
    this.element = element;

    this._teardownCallback = null;
    this._rendered         = null;
  }

  render() {
    if (!this._rendered) {
      let {atomOptions: options, env, model: { value, payload } } = this;
      // cache initial render
      this._rendered = this.atom.render({options, env, value, payload});
    }

    this._validateAndAppendRenderResult(this._rendered);
  }

  get env() {
    return {
      name: this.atom.name,
      onTeardown: (callback) => this._teardownCallback = callback,
      save: (value, payload={}) => {
        this.model.value = value;
        this.model.payload = payload;

        this.editor._postDidChange();
        this.teardown();
        this.render();
      }
    };
  }

  teardown() {
    if (this._teardownCallback) {
      this._teardownCallback();
      this._teardownCallback = null;
    }
    if (this._rendered) {
      this.element.removeChild(this._rendered);
      this._rendered = null;
    }
  }

  _validateAndAppendRenderResult(rendered) {
    if (!rendered) {
      return;
    }

    let { atom: { name } } = this;
    assert(
      `Atom "${name}" must return a DOM node (returned value was: "${rendered}")`,
      !!rendered.nodeType
    );
    this.element.appendChild(rendered);
  }
}

class Set {
  constructor(items=[]) {
    this.items = [];
    items.forEach(i => this.add(i));
  }

  add(item) {
    if (!this.has(item)) {
      this.items.push(item);
    }
  }

  get length() {
    return this.items.length;
  }

  has(item) {
    return this.items.indexOf(item) !== -1;
  }

  toArray() {
    return this.items;
  }
}

const PARENT_PROP = '__parent';

class LinkedList {
  constructor(options) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (options) {
      const {adoptItem, freeItem} = options;
      this._adoptItem = adoptItem;
      this._freeItem = freeItem;
    }
  }
  adoptItem(item) {
    item[PARENT_PROP]= this;
    this.length++;
    if (this._adoptItem) { this._adoptItem(item); }
  }
  freeItem(item) {
    item[PARENT_PROP] = null;
    this.length--;
    if (this._freeItem) { this._freeItem(item); }
  }
  get isEmpty() {
    return this.length === 0;
  }
  prepend(item) {
    this.insertBefore(item, this.head);
  }
  append(item) {
    this.insertBefore(item, null);
  }
  insertAfter(item, prevItem) {
    let nextItem = prevItem ? prevItem.next : this.head;
    this.insertBefore(item, nextItem);
  }
  _ensureItemIsNotAlreadyInList(item){
    assert(
      'Cannot insert an item into a list if it is already in a list',
      !item.next && !item.prev && this.head !== item
    );
  }
  insertBefore(item, nextItem) {
    this._ensureItemIsNotInList(item);
    this.adoptItem(item);

    let insertPos;
    if (nextItem && nextItem.prev) {
      insertPos = 'middle';
    } else if (nextItem) {
      insertPos = 'start';
    } else {
      insertPos = 'end';
    }

    switch (insertPos) {
      case 'start':
        if (this.head) {
          item.next      = this.head;
          this.head.prev = item;
        }
        this.head = item;

        break;
      case 'middle': {
        let prevItem  = nextItem.prev;
        item.next     = nextItem;
        item.prev     = prevItem;
        nextItem.prev = item;
        prevItem.next = item;

        break;
      }
      case 'end': {
        let tail = this.tail;
        item.prev = tail;

        if (tail) {
          tail.next = item;
        } else {
          this.head = item;
        }
        this.tail = item;

        break;
      }
    }
  }
  remove(item) {
    if (!item[PARENT_PROP]) {
      return;
    }
    this._ensureItemIsInThisList(item);
    this.freeItem(item);

    let [prev, next] = [item.prev, item.next];
    item.prev = null;
    item.next = null;

    if (prev) {
      prev.next = next;
    } else {
      this.head = next;
    }

    if (next) {
      next.prev = prev;
    } else {
      this.tail = prev;
    }
  }
  forEach(callback) {
    let item = this.head;
    let index = 0;
    while (item) {
      callback(item, index++);
      item = item.next;
    }
  }
  map(callback) {
    let result = [];
    this.forEach(i => result.push(callback(i)));
    return result;
  }
  walk(startItem, endItem, callback) {
    let item = startItem || this.head;
    while (item) {
      callback(item);
      if (item === endItem) {
        break;
      }
      item = item.next;
    }
  }
  readRange(startItem, endItem) {
    let items = [];
    this.walk(startItem, endItem, (item) => {
      items.push(item);
    });
    return items;
  }
  toArray() {
    return this.readRange();
  }
  detect(callback, item=this.head, reverse=false) {
    while (item) {
      if (callback(item)) {
        return item;
      }
      item = reverse ? item.prev : item.next;
    }
  }
  any(callback) {
    return !!this.detect(callback);
  }
  every(callback) {
    let item = this.head;
    while (item) {
      if (!callback(item)) {
        return false;
      }
      item = item.next;
    }
    return true;
  }
  objectAt(targetIndex) {
    let index = -1;
    return this.detect(() => {
      index++;
      return (targetIndex === index);
    });
  }
  splice(targetItem, removalCount, newItems) {
    let item = targetItem;
    let nextItem = item.next;
    let count = 0;
    while (item && count < removalCount) {
      count++;
      nextItem = item.next;
      this.remove(item);
      item = nextItem;
    }
    newItems.forEach((newItem) => {
      this.insertBefore(newItem, nextItem);
    });
  }
  removeBy(conditionFn) {
    let item = this.head;
    while (item) {
      let nextItem = item.next;

      if (conditionFn(item)) {
        this.remove(item);
      }

      item = nextItem;
    }
  }
  _ensureItemIsNotInList(item) {
    assert('Cannot insert an item into a list if it is already in a list',
           !item[PARENT_PROP]);
  }
  _ensureItemIsInThisList(item) {
    assert('Cannot remove item that is in another list',
           item[PARENT_PROP] === this);
  }
}

function unimplementedMethod(methodName, me) {
  assert(`\`${methodName}()\` must be implemented by ${me.constructor.name}`,
         false);
}

class Section extends LinkedItem {
  constructor(type) {
    super();
    assert('Cannot create section without type', !!type);
    this.type = type;
    this.isSection = true;
    this.isMarkerable = false;
    this.isNested = false;
    this.isSection = true;
    this.isLeafSection = true;
  }

  set tagName(val) {
    let normalizedTagName = normalizeTagName(val);
    assert(`Cannot set section tagName to ${val}`,
           this.isValidTagName(normalizedTagName));
    this._tagName = normalizedTagName;
  }

  get tagName() {
    return this._tagName;
  }

  isValidTagName(/* normalizedTagName */) {
    unimplementedMethod('isValidTagName', this);
  }

  get length() {
    return 0;
  }

  get isBlank() {
    unimplementedMethod('isBlank', this);
  }

  clone() {
    unimplementedMethod('clone', this);
  }

  canJoin(/* otherSection */) {
    unimplementedMethod('canJoin', this);
  }

  /**
   * @return {Position} The position at the start of this section
   * @public
   */
  headPosition() {
    return this.toPosition(0);
  }

  /**
   * @return {Position} The position at the end of this section
   * @public
   */
  tailPosition() {
    return this.toPosition(this.length);
  }

  /**
   * @param {Number} offset
   * @return {Position} The position in this section at the given offset
   * @public
   */
  toPosition(offset) {
    assert("Must pass number to `toPosition`", typeof offset === 'number');
    assert("Cannot call `toPosition` with offset > length", offset <= this.length);

    return new Position$1(this, offset);
  }

  /**
   * @return {Range} A range from this section's head to tail positions
   * @public
   */
  toRange() {
    return this.headPosition().toRange(this.tailPosition());
  }

  join() {
    unimplementedMethod('join', this);
  }

  textUntil(/* position */) {
    return '';
  }

  /**
   * Markerable sections should override this method
   */
  splitMarkerAtOffset() {
    let blankEdit = { added: [], removed: [] };
    return blankEdit;
  }

  nextLeafSection() {
    const next = this.next;
    if (next) {
      if (next.items) {
        return next.items.head;
      } else {
        return next;
      }
    } else {
      if (this.isNested) {
        return this.parent.nextLeafSection();
      }
    }
  }

  immediatelyNextMarkerableSection() {
    let next = this.nextLeafSection();
    while (next && !next.isMarkerable) {
      next = next.nextLeafSection();
    }
    return next;
  }

  previousLeafSection() {
    const prev = this.prev;

    if (prev) {
      if (prev.items) {
        return prev.items.tail;
      } else {
        return prev;
      }
    } else {
      if (this.isNested) {
        return this.parent.previousLeafSection();
      }
    }
  }
}

class Markerable extends Section {
  constructor(type, tagName, markers=[]) {
    super(type);
    this.isMarkerable = true;
    this.tagName = tagName;
    this.markers = new LinkedList({
      adoptItem: m => {
        assert(`Can only insert markers and atoms into markerable (was: ${m.type})`,
               m.isMarker || m.isAtom);
        m.section = m.parent = this;
      },
      freeItem: m => m.section = m.parent = null
    });

    markers.forEach(m => this.markers.append(m));
  }

  canJoin(other) {
    return other.isMarkerable &&
      other.type === this.type &&
      other.tagName === this.tagName;
  }

  clone() {
    const newMarkers = this.markers.map(m => m.clone());
    return this.builder.createMarkerableSection(
      this.type, this.tagName, newMarkers);
  }

  get isBlank() {
    if (!this.markers.length) {
      return true;
    }
    return this.markers.every(m => m.isBlank);
  }

  textUntil(position) {
    assert(`Cannot get textUntil for a position not in this section`, position.section === this);
    let {marker, offsetInMarker} = position;
    let text = '';
    let currentMarker = this.markers.head;
    while (currentMarker) {
      if (currentMarker === marker) {
        text += currentMarker.textUntil(offsetInMarker);
        break;
      } else {
        text += currentMarker.text;
        currentMarker = currentMarker.next;
      }
    }
    return text;
  }

  /**
   * @param {Marker}
   * @param {Number} markerOffset The offset relative to the start of the marker
   *
   * @return {Number} The offset relative to the start of this section
   */
  offsetOfMarker(marker, markerOffset=0) {
    assert(`Cannot get offsetOfMarker for marker that is not child of this`,
           marker.section === this);

    // FIXME it is possible, when we get a cursor position before having finished reparsing,
    // for markerOffset to be > marker.length. We shouldn't rely on this functionality.

    let offset = 0;
    let currentMarker = this.markers.head;
    while (currentMarker && currentMarker !== marker.next) {
      let length = currentMarker === marker ? markerOffset :
                                              currentMarker.length;
      offset += length;
      currentMarker = currentMarker.next;
    }

    return offset;
  }

  // puts clones of this.markers into beforeSection and afterSection,
  // all markers before the marker/offset split go in beforeSection, and all
  // after the marker/offset split go in afterSection
  // @return {Array} [beforeSection, afterSection], two new sections
  _redistributeMarkers(beforeSection, afterSection, marker, offset=0) {
    let currentSection = beforeSection;
    forEach(this.markers, m => {
      if (m === marker) {
        const [beforeMarker, ...afterMarkers] = marker.split(offset);
        beforeSection.markers.append(beforeMarker);
        forEach(afterMarkers, _m => afterSection.markers.append(_m));
        currentSection = afterSection;
      } else {
        currentSection.markers.append(m.clone());
      }
    });

    return [beforeSection, afterSection];
  }

  splitAtMarker(/*marker, offset=0*/) {
    assert('splitAtMarker must be implemented by sub-class', false);
  }

  /**
   * Split this section's marker (if any) at the given offset, so that
   * there is now a marker boundary at that offset (useful for later applying
   * a markup to a range)
   * @param {Number} sectionOffset The offset relative to start of this section
   * @return {EditObject} An edit object with 'removed' and 'added' keys with arrays of Markers. The added markers may be blank.
   * After calling `splitMarkerAtOffset(offset)`, there will always be a valid
   * result returned from `markerBeforeOffset(offset)`.
   */
  splitMarkerAtOffset(sectionOffset) {
    assert('Cannot splitMarkerAtOffset when offset is > length',
           sectionOffset <= this.length);
    let markerOffset;
    let len = 0;
    let currentMarker = this.markers.head;
    let edit = {added: [], removed: []};

    if (!currentMarker) {
      let blankMarker = this.builder.createMarker();
      this.markers.prepend(blankMarker);
      edit.added.push(blankMarker);
    } else {
      while (currentMarker) {
        len += currentMarker.length;
        if (len === sectionOffset) {
          // nothing to do, there is a gap at the requested offset
          break;
        } else if (len > sectionOffset) {
          markerOffset = currentMarker.length - (len - sectionOffset);
          let newMarkers = currentMarker.splitAtOffset(markerOffset);
          edit.added.push(...newMarkers);
          edit.removed.push(currentMarker);
          this.markers.splice(currentMarker, 1, newMarkers);
          break;
        } else {
          currentMarker = currentMarker.next;
        }
      }
    }

    return edit;
  }

  splitAtPosition(position) {
    const {marker, offsetInMarker} = position;
    return this.splitAtMarker(marker, offsetInMarker);
  }

  // returns the marker just before this offset.
  // It is an error to call this method with an offset that is in the middle
  // of a marker.
  markerBeforeOffset(sectionOffset) {
    let len = 0;
    let currentMarker = this.markers.head;

    while (currentMarker) {
      len += currentMarker.length;
      if (len === sectionOffset) {
        return currentMarker;
      } else {
        assert('markerBeforeOffset called with sectionOffset not between markers',
               len < sectionOffset);
        currentMarker = currentMarker.next;
      }
    }
  }

  markerPositionAtOffset(offset) {
    let currentOffset = 0;
    let currentMarker;
    let remaining = offset;
    this.markers.detect((marker) => {
      currentOffset = Math.min(remaining, marker.length);
      remaining -= currentOffset;
      if (remaining === 0) {
        currentMarker = marker;
        return true; // break out of detect
      }
    });

    return {marker:currentMarker, offset:currentOffset};
  }

  get text() {
    return reduce(this.markers, (prev, m) => prev + m.value, '');
  }

  get length() {
    return reduce(this.markers, (prev, m) => prev + m.length, 0);
  }

  /**
   * @return {Array} New markers that match the boundaries of the
   * range. Does not change the existing markers in this section.
   */
  markersFor(headOffset, tailOffset) {
    const range = {head: {section:this, offset:headOffset},
                   tail: {section:this, offset:tailOffset}};

    let markers = [];
    this._markersInRange(range, (marker, {markerHead, markerTail, isContained}) => {
      const cloned = marker.clone();
      if (!isContained) {
        // cannot do marker.value.slice if the marker is an atom -- this breaks the atom's "atomic" value
        // If a marker is an atom `isContained` should always be true so
        // we shouldn't hit this code path. FIXME add tests
        cloned.value = marker.value.slice(markerHead, markerTail);
      }
      markers.push(cloned);
    });
    return markers;
  }

  markupsInRange(range) {
    const markups = new Set();
    this._markersInRange(range, marker => {
      marker.markups.forEach(m => markups.add(m));
    });
    return markups.toArray();
  }

  // calls the callback with (marker, {markerHead, markerTail, isContained})
  // for each marker that is wholly or partially contained in the range.
  _markersInRange(range, callback) {
    const { head, tail } = range;
    assert('Cannot call #_markersInRange if range expands beyond this section',
           head.section === this && tail.section === this);
    const {offset:headOffset} = head, {offset:tailOffset} = tail;

    let currentHead = 0, currentTail = 0, currentMarker = this.markers.head;

    while (currentMarker) {
      currentTail += currentMarker.length;

      if (currentTail > headOffset && currentHead < tailOffset) {
        let markerHead = Math.max(headOffset - currentHead, 0);
        let markerTail = currentMarker.length -
          Math.max(currentTail - tailOffset, 0);
        let isContained = markerHead === 0 && markerTail === currentMarker.length;

        callback(currentMarker, {markerHead, markerTail, isContained});
      }

      currentHead += currentMarker.length;
      currentMarker = currentMarker.next;

      if (currentHead > tailOffset) { break; }
    }
  }

  // mutates this by appending the other section's (cloned) markers to it
  join(otherSection) {
    let beforeMarker = this.markers.tail;
    let afterMarker = null;

    otherSection.markers.forEach(m => {
      if (!m.isBlank) {
        m = m.clone();
        this.markers.append(m);
        if (!afterMarker) {
          afterMarker = m;
        }
      }
    });

    return { beforeMarker, afterMarker };
  }
}

const VALID_ATTRIBUTES = [
  'data-md-text-align'
];

/*
 * A "mixin" to add section attribute support
 * to markup and list sections.
 */
function attributable(ctx) {
  ctx.attributes = {};

  ctx.hasAttribute = key => key in ctx.attributes;

  ctx.setAttribute = (key, value) => {
    if (!contains(VALID_ATTRIBUTES, key)) {
      throw new Error(`Invalid attribute "${key}" was passed. Constrain attributes to the spec-compliant whitelist.`);
    }
    ctx.attributes[key] = value;
  };
  ctx.removeAttribute = key => {
    delete ctx.attributes[key];
  };
  ctx.getAttribute = key => ctx.attributes[key];
  ctx.eachAttribute = cb => {
    entries(ctx.attributes).forEach(([k,v]) => cb(k,v));
  };
}

// valid values of `tagName` for a MarkupSection
const VALID_MARKUP_SECTION_TAGNAMES = [
  'aside',
  'blockquote',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p'
].map(normalizeTagName);

// valid element names for a MarkupSection. A MarkupSection with a tagName
// not in this will be rendered as a div with a className matching the
// tagName
const MARKUP_SECTION_ELEMENT_NAMES = [
  'aside',
  'blockquote',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p'
].map(normalizeTagName);
const DEFAULT_TAG_NAME = VALID_MARKUP_SECTION_TAGNAMES[8];

const MarkupSection = class MarkupSection extends Markerable {
  constructor(tagName=DEFAULT_TAG_NAME, markers=[], attributes={}) {
    super(MARKUP_SECTION_TYPE, tagName, markers);

    attributable(this);
    entries(attributes).forEach(([k,v]) => this.setAttribute(k, v));

    this.isMarkupSection = true;
  }

  isValidTagName(normalizedTagName) {
    return contains(VALID_MARKUP_SECTION_TAGNAMES, normalizedTagName);
  }

  splitAtMarker(marker, offset=0) {
    let [beforeSection, afterSection] = [
      this.builder.createMarkupSection(this.tagName, [], false, this.attributes),
      this.builder.createMarkupSection()
    ];

    return this._redistributeMarkers(beforeSection, afterSection, marker, offset);
  }
};

const CARD_ELEMENT_CLASS_NAME = '__mobiledoc-card';
const NO_BREAK_SPACE = '\u00A0';
const TAB_CHARACTER = '\u2003';
const SPACE = ' ';
const ZWNJ = '\u200c';
const ATOM_CLASS_NAME = '-mobiledoc-kit__atom';
const EDITOR_HAS_NO_CONTENT_CLASS_NAME = '__has-no-content';
const EDITOR_ELEMENT_CLASS_NAME = '__mobiledoc-editor';

function createElementFromMarkup(doc, markup) {
  let element = doc.createElement(markup.tagName);
  Object.keys(markup.attributes).forEach(k => {
    element.setAttribute(k, markup.attributes[k]);
  });
  return element;
}

const TWO_SPACES         = `${SPACE}${SPACE}`;
const SPACE_AND_NO_BREAK = `${SPACE}${NO_BREAK_SPACE}`;
const SPACES_REGEX       = new RegExp(TWO_SPACES, 'g');
const TAB_REGEX          = new RegExp(TAB, 'g');
const endsWithSpace = function(text) {
  return endsWith(text, SPACE);
};
const startsWithSpace = function(text) {
  return startsWith(text, SPACE);
};

// FIXME: This can be done more efficiently with a single pass
// building a correct string based on the original.
function renderHTMLText(marker) {
  let text = marker.value;
  text = text.replace(SPACES_REGEX, SPACE_AND_NO_BREAK)
             .replace(TAB_REGEX,    TAB_CHARACTER);

  // If the first marker has a leading space or the last marker has a
  // trailing space, the browser will collapse the space when we position
  // the cursor.
  // See https://github.com/bustle/mobiledoc-kit/issues/68
  //   and https://github.com/bustle/mobiledoc-kit/issues/75
  if (marker.isMarker && endsWithSpace(text) && !marker.next) {
    text = text.substr(0, text.length - 1) + NO_BREAK_SPACE;
  }
  if (marker.isMarker && startsWithSpace(text) &&
      (!marker.prev || (marker.prev.isMarker && endsWithSpace(marker.prev.value)))) {
    text = NO_BREAK_SPACE + text.substr(1);
  }
  return text;
}

// ascends from element upward, returning the last parent node that is not
// parentElement
function penultimateParentOf(element, parentElement) {
  while (parentElement &&
         element.parentNode !== parentElement &&
         element.parentNode !== document.body // ensure the while loop stops
        ) {
    element = element.parentNode;
  }
  return element;
}

function setSectionAttributesOnElement(section, element) {
  section.eachAttribute((key, value) => {
    element.setAttribute(key, value);
  });
}

function renderMarkupSection(section) {
  let element;
  if (MARKUP_SECTION_ELEMENT_NAMES.indexOf(section.tagName) !== -1) {
    element = document.createElement(section.tagName);
  } else {
    element = document.createElement('div');
    addClassName(element, section.tagName);
  }

  setSectionAttributesOnElement(section, element);

  return element;
}

function renderListSection(section) {
  let element = document.createElement(section.tagName);

  setSectionAttributesOnElement(section, element);

  return element;
}

function renderListItem() {
  return document.createElement('li');
}

function renderCursorPlaceholder() {
  return document.createElement('br');
}

function renderInlineCursorPlaceholder() {
  return document.createTextNode(ZWNJ);
}

function renderCard() {
  let wrapper = document.createElement('div');
  let cardElement = document.createElement('div');
  cardElement.contentEditable = false;
  addClassName(cardElement, CARD_ELEMENT_CLASS_NAME);
  wrapper.appendChild(renderInlineCursorPlaceholder());
  wrapper.appendChild(cardElement);
  wrapper.appendChild(renderInlineCursorPlaceholder());
  return { wrapper, cardElement };
}

/**
 * Wrap the element in all of the opened markups
 * @return {DOMElement} the wrapped element
 * @private
 */
function wrapElement(element, openedMarkups) {
  let wrappedElement = element;

  for (let i=openedMarkups.length - 1; i>=0; i--) {
    let markup = openedMarkups[i];
    let openedElement = createElementFromMarkup(document, markup);
    openedElement.appendChild(wrappedElement);
    wrappedElement = openedElement;
  }

  return wrappedElement;
}

// Attach the element to its parent element at the correct position based on the
// previousRenderNode
function attachElementToParent(element, parentElement, previousRenderNode=null) {
  if (previousRenderNode) {
    let previousSibling = previousRenderNode.element;
    let previousSiblingPenultimate = penultimateParentOf(previousSibling,
                                                         parentElement);
    parentElement.insertBefore(element, previousSiblingPenultimate.nextSibling);
  } else {
    parentElement.insertBefore(element, parentElement.firstChild);
  }
}

function renderAtom(atom, element, previousRenderNode) {
  let atomElement = document.createElement('span');
  atomElement.contentEditable = false;

  let wrapper = document.createElement('span');
  addClassName(wrapper, ATOM_CLASS_NAME);
  let headTextNode = renderInlineCursorPlaceholder();
  let tailTextNode = renderInlineCursorPlaceholder();

  wrapper.appendChild(headTextNode);
  wrapper.appendChild(atomElement);
  wrapper.appendChild(tailTextNode);

  let wrappedElement = wrapElement(wrapper, atom.openedMarkups);
  attachElementToParent(wrappedElement, element, previousRenderNode);

  return {
    markupElement: wrappedElement,
    wrapper,
    atomElement,
    headTextNode,
    tailTextNode
  };
}

function getNextMarkerElement(renderNode) {
  let element = renderNode.element.parentNode;
  let marker = renderNode.postNode;
  let closedCount = marker.closedMarkups.length;

  while (closedCount--) {
    element = element.parentNode;
  }
  return element;
}

/**
 * Render the marker
 * @param {Marker} marker the marker to render
 * @param {DOMNode} element the element to attach the rendered marker to
 * @param {RenderNode} [previousRenderNode] The render node before this one, which
 *        affects the determination of where to insert this rendered marker.
 * @return {Object} With properties `element` and `markupElement`.
 *         The element (textNode) that has the text for
 *         this marker, and the outermost rendered element. If the marker has no
 *         markups, element and markupElement will be the same textNode
 * @private
 */
function renderMarker(marker, parentElement, previousRenderNode) {
  let text = renderHTMLText(marker);

  let element = document.createTextNode(text);
  let markupElement = wrapElement(element, marker.openedMarkups);
  attachElementToParent(markupElement, parentElement, previousRenderNode);

  return { element, markupElement };
}

// Attach the render node's element to the DOM,
// replacing the originalElement if it exists
function attachRenderNodeElementToDOM(renderNode, originalElement=null) {
  const element = renderNode.element;
  const hasRendered = !!originalElement;

  if (hasRendered) {
    let parentElement = renderNode.parent.element;
    parentElement.replaceChild(element, originalElement);
  } else {
    let parentElement, nextSiblingElement;
    if (renderNode.prev) {
      let previousElement = renderNode.prev.element;
      parentElement = previousElement.parentNode;
      nextSiblingElement = previousElement.nextSibling;
    } else {
      parentElement = renderNode.parent.element;
      nextSiblingElement = parentElement.firstChild;
    }
    parentElement.insertBefore(element, nextSiblingElement);
  }
}

function removeRenderNodeSectionFromParent(renderNode, section) {
  const parent = renderNode.parent.postNode;
  parent.sections.remove(section);
}

function removeRenderNodeElementFromParent(renderNode) {
  if (renderNode.element && renderNode.element.parentNode) {
    renderNode.element.parentNode.removeChild(renderNode.element);
  }
}

function validateCards(cards=[]) {
  forEach(cards, card => {
    assert(
      `Card "${card.name}" must define type "dom", has: "${card.type}"`,
      card.type === 'dom'
    );
    assert(
      `Card "${card.name}" must define \`render\` method`,
      !!card.render
    );
  });
  return cards;
}

function validateAtoms(atoms=[]) {
  forEach(atoms, atom => {
    assert(
      `Atom "${atom.name}" must define type "dom", has: "${atom.type}"`,
      atom.type === 'dom'
    );
    assert(
      `Atom "${atom.name}" must define \`render\` method`,
      !!atom.render
    );
  });
  return atoms;
}

class Visitor$1 {
  constructor(editor, cards, atoms, unknownCardHandler, unknownAtomHandler, options) {
    this.editor = editor;
    this.cards = validateCards(cards);
    this.atoms = validateAtoms(atoms);
    this.unknownCardHandler = unknownCardHandler;
    this.unknownAtomHandler = unknownAtomHandler;
    this.options = options;
  }

  _findCard(cardName) {
    let card = detect(this.cards, card => card.name === cardName);
    return card || this._createUnknownCard(cardName);
  }

  _createUnknownCard(cardName) {
    assert(
      `Unknown card "${cardName}" found, but no unknownCardHandler is defined`,
      !!this.unknownCardHandler
    );

    return {
      name: cardName,
      type: 'dom',
      render: this.unknownCardHandler,
      edit:   this.unknownCardHandler
    };
  }

  _findAtom(atomName) {
    let atom = detect(this.atoms, atom => atom.name === atomName);
    return atom || this._createUnknownAtom(atomName);
  }

  _createUnknownAtom(atomName) {
    assert(
      `Unknown atom "${atomName}" found, but no unknownAtomHandler is defined`,
      !!this.unknownAtomHandler
    );

    return {
      name: atomName,
      type: 'dom',
      render: this.unknownAtomHandler
    };
  }

  [POST_TYPE](renderNode, post, visit) {
    if (!renderNode.element) {
      renderNode.element = document.createElement('div');
    }
    addClassName(renderNode.element, EDITOR_ELEMENT_CLASS_NAME);
    if (post.hasContent) {
      removeClassName(renderNode.element, EDITOR_HAS_NO_CONTENT_CLASS_NAME);
    } else {
      addClassName(renderNode.element, EDITOR_HAS_NO_CONTENT_CLASS_NAME);
    }
    visit(renderNode, post.sections);
  }

  [MARKUP_SECTION_TYPE](renderNode, section, visit) {
    const originalElement = renderNode.element;

    // Always rerender the section -- its tag name or attributes may have changed.
    // TODO make this smarter, only rerendering and replacing the element when necessary
    renderNode.element = renderMarkupSection(section);
    renderNode.cursorElement = null;
    attachRenderNodeElementToDOM(renderNode, originalElement);

    if (section.isBlank) {
      let cursorPlaceholder = renderCursorPlaceholder();
      renderNode.element.appendChild(cursorPlaceholder);
      renderNode.cursorElement = cursorPlaceholder;
    } else {
      const visitAll = true;
      visit(renderNode, section.markers, visitAll);
    }
  }

  [LIST_SECTION_TYPE](renderNode, section, visit) {
    const originalElement = renderNode.element;

    renderNode.element = renderListSection(section);
    attachRenderNodeElementToDOM(renderNode, originalElement);

    const visitAll = true;
    visit(renderNode, section.items, visitAll);
  }

  [LIST_ITEM_TYPE](renderNode, item, visit) {
    // FIXME do we need to do anything special for rerenders?
    renderNode.element = renderListItem();
    renderNode.cursorElement = null;
    attachRenderNodeElementToDOM(renderNode, null);

    if (item.isBlank) {
      let cursorPlaceholder = renderCursorPlaceholder();
      renderNode.element.appendChild(cursorPlaceholder);
      renderNode.cursorElement = cursorPlaceholder;
    } else {
      const visitAll = true;
      visit(renderNode, item.markers, visitAll);
    }
  }

  [MARKER_TYPE](renderNode, marker) {
    let parentElement;

    if (renderNode.prev) {
      parentElement = getNextMarkerElement(renderNode.prev);
    } else {
      parentElement = renderNode.parent.element;
    }

    let { element, markupElement } =
      renderMarker(marker, parentElement, renderNode.prev);

    renderNode.element = element;
    renderNode.markupElement = markupElement;
  }

  [IMAGE_SECTION_TYPE](renderNode, section) {
    if (renderNode.element) {
      if (renderNode.element.src !== section.src) {
        renderNode.element.src = section.src;
      }
    } else {
      let element = document.createElement('img');
      element.src = section.src;
      if (renderNode.prev) {
        let previousElement = renderNode.prev.element;
        let nextElement = previousElement.nextSibling;
        if (nextElement) {
          nextElement.parentNode.insertBefore(element, nextElement);
        }
      }
      if (!element.parentNode) {
        renderNode.parent.element.appendChild(element);
      }
      renderNode.element = element;
    }
  }

  [CARD_TYPE](renderNode, section) {
    const originalElement = renderNode.element;
    const {editor, options} = this;

    const card = this._findCard(section.name);

    let { wrapper, cardElement } = renderCard();
    renderNode.element = wrapper;
    attachRenderNodeElementToDOM(renderNode, originalElement);

    const cardNode = new CardNode(
      editor, card, section, cardElement, options);
    renderNode.cardNode = cardNode;

    const initialMode = section._initialMode;
    cardNode[initialMode]();
  }

  [ATOM_TYPE](renderNode, atomModel) {
    let parentElement;

    if (renderNode.prev) {
      parentElement = getNextMarkerElement(renderNode.prev);
    } else {
      parentElement = renderNode.parent.element;
    }

    const { editor, options } = this;
    const {
      wrapper,
      markupElement,
      atomElement,
      headTextNode,
      tailTextNode
    } = renderAtom(atomModel, parentElement, renderNode.prev);
    const atom = this._findAtom(atomModel.name);

    let atomNode = renderNode.atomNode;
    if (!atomNode) {
      // create new AtomNode
      atomNode = new AtomNode(editor, atom, atomModel, atomElement, options);
    } else {
      // retarget atomNode to new atom element
      atomNode.element = atomElement;
    }

    atomNode.render();

    renderNode.atomNode = atomNode;
    renderNode.element = wrapper;
    renderNode.headTextNode = headTextNode;
    renderNode.tailTextNode = tailTextNode;
    renderNode.markupElement = markupElement;
  }
}

let destroyHooks = {
  [POST_TYPE](/*renderNode, post*/) {
    assert('post destruction is not supported by the renderer', false);
  },

  [MARKUP_SECTION_TYPE](renderNode, section) {
    removeRenderNodeSectionFromParent(renderNode, section);
    removeRenderNodeElementFromParent(renderNode);
  },

  [LIST_SECTION_TYPE](renderNode, section) {
    removeRenderNodeSectionFromParent(renderNode, section);
    removeRenderNodeElementFromParent(renderNode);
  },

  [LIST_ITEM_TYPE](renderNode, li) {
    removeRenderNodeSectionFromParent(renderNode, li);
    removeRenderNodeElementFromParent(renderNode);
  },

  [MARKER_TYPE](renderNode, marker) {
    // FIXME before we render marker, should delete previous renderNode's element
    // and up until the next marker element

    // If an atom throws during render we may end up later destroying a renderNode
    // that has not rendered yet, so exit early here if so.
    if (!renderNode.isRendered) {
      return;
    }
    let { markupElement } = renderNode;

    if (marker.section) {
      marker.section.markers.remove(marker);
    }

    if (markupElement.parentNode) {
      // if no parentNode, the browser already removed this element
      markupElement.parentNode.removeChild(markupElement);
    }
  },

  [IMAGE_SECTION_TYPE](renderNode, section) {
    removeRenderNodeSectionFromParent(renderNode, section);
    removeRenderNodeElementFromParent(renderNode);
  },

  [CARD_TYPE](renderNode, section) {
    if (renderNode.cardNode) {
      renderNode.cardNode.teardown();
    }
    removeRenderNodeSectionFromParent(renderNode, section);
    removeRenderNodeElementFromParent(renderNode);
  },

  [ATOM_TYPE](renderNode, atom) {
    if (renderNode.atomNode) {
      renderNode.atomNode.teardown();
    }

    // an atom is a kind of marker so just call its destroy hook vs copying here
    destroyHooks[MARKER_TYPE](renderNode, atom);
  }
};

// removes children from parentNode (a RenderNode) that are scheduled for removal
function removeDestroyedChildren(parentNode, forceRemoval=false) {
  let child = parentNode.childNodes.head;
  let nextChild, method;
  while (child) {
    nextChild = child.next;
    if (child.isRemoved || forceRemoval) {
      removeDestroyedChildren(child, true);
      method = child.postNode.type;
      assert(`editor-dom cannot destroy "${method}"`, !!destroyHooks[method]);
      destroyHooks[method](child, child.postNode);
      parentNode.childNodes.remove(child);
    }
    child = nextChild;
  }
}

// Find an existing render node for the given postNode, or
// create one, insert it into the tree, and return it
function lookupNode(renderTree, parentNode, postNode, previousNode) {
  if (postNode.renderNode) {
    return postNode.renderNode;
  } else {
    const renderNode = renderTree.buildRenderNode(postNode);
    parentNode.childNodes.insertAfter(renderNode, previousNode);
    return renderNode;
  }
}

class Renderer {
  constructor(editor, cards, atoms, unknownCardHandler, unknownAtomHandler, options) {
    this.editor = editor;
    this.visitor = new Visitor$1(editor, cards, atoms, unknownCardHandler, unknownAtomHandler, options);
    this.nodes = [];
    this.hasRendered = false;
  }

  destroy() {
    if (!this.hasRendered) {
      return;
    }
    let renderNode = this.renderTree.rootNode;
    let force = true;
    removeDestroyedChildren(renderNode, force);
  }

  visit(renderTree, parentNode, postNodes, visitAll=false) {
    let previousNode;
    postNodes.forEach(postNode => {
      let node = lookupNode(renderTree, parentNode, postNode, previousNode);
      if (node.isDirty || visitAll) {
        this.nodes.push(node);
      }
      previousNode = node;
    });
  }

  render(renderTree) {
    this.hasRendered = true;
    this.renderTree = renderTree;
    let renderNode = renderTree.rootNode;
    let method, postNode;

    while (renderNode) {
      removeDestroyedChildren(renderNode);
      postNode = renderNode.postNode;

      method = postNode.type;
      assert(`EditorDom visitor cannot handle type ${method}`, !!this.visitor[method]);
      this.visitor[method](renderNode, postNode,
                           (...args) => this.visit(renderTree, ...args));
      renderNode.markClean();
      renderNode = this.nodes.shift();
    }
  }
}

const VALID_LIST_SECTION_TAGNAMES = [
  'ul', 'ol'
].map(normalizeTagName);

const DEFAULT_TAG_NAME$1 = VALID_LIST_SECTION_TAGNAMES[0];

class ListSection extends Section {
  constructor(tagName=DEFAULT_TAG_NAME$1, items=[], attributes={}) {
    super(LIST_SECTION_TYPE);
    this.tagName = tagName;
    this.isListSection = true;
    this.isLeafSection = false;

    attributable(this);
    entries(attributes).forEach(([k,v]) => this.setAttribute(k, v));

    this.items = new LinkedList({
      adoptItem: i => {
        assert(`Cannot insert non-list-item to list (is: ${i.type})`,
               i.isListItem);
        i.section = i.parent = this;
      },
      freeItem:  i => i.section = i.parent = null
    });
    this.sections = this.items;

    items.forEach(i => this.items.append(i));
  }

  canJoin() {
    return false;
  }

  isValidTagName(normalizedTagName) {
    return contains(VALID_LIST_SECTION_TAGNAMES, normalizedTagName);
  }

  headPosition() {
    return this.items.head.headPosition();
  }

  tailPosition() {
    return this.items.tail.tailPosition();
  }

  get isBlank() {
    return this.items.isEmpty;
  }

  clone() {
    let newSection = this.builder.createListSection(this.tagName);
    forEach(this.items, i => newSection.items.append(i.clone()));
    return newSection;
  }

  /**
   * Mutates this list
   * @param {ListSection|Markerable}
   * @return null
   */
  join(other) {
    if (other.isListSection) {
      other.items.forEach(i => this.join(i));
    } else if (other.isMarkerable) {
      let item = this.builder.createListItem();
      item.join(other);
      this.items.append(item);
    }
  }
}

const VALID_LIST_ITEM_TAGNAMES = [
  'li'
].map(normalizeTagName);

class ListItem extends Markerable {
  constructor(tagName, markers=[]) {
    super(LIST_ITEM_TYPE, tagName, markers);
    this.isListItem = true;
    this.isNested = true;
  }

  isValidTagName(normalizedTagName) {
    return contains(VALID_LIST_ITEM_TAGNAMES, normalizedTagName);
  }

  splitAtMarker(marker, offset=0) {
    // FIXME need to check if we are going to split into two list items
    // or a list item and a new markup section:
    const isLastItem = !this.next;
    const createNewSection = (!marker && offset === 0 && isLastItem);

    let [beforeSection, afterSection] = [
      this.builder.createListItem(),
      createNewSection ? this.builder.createMarkupSection() :
                         this.builder.createListItem()
    ];

    return this._redistributeMarkers(
      beforeSection, afterSection, marker, offset);
  }

  get post() {
    return this.section.post;
  }
}

const VALID_MARKUP_TAGNAMES = [
  'a',
  'b',
  'code',
  'em',
  'i',
  's',   // strikethrough
  'del', // deleted text (also strikethrough)
  'strong',
  'sub', // subscript
  'sup', // superscript
  'u'
].map(normalizeTagName);

const VALID_ATTRIBUTES$1 = [
  'href',
  'rel'
];

/**
 * A Markup is similar with an inline HTML tag that might be added to
 * text to modify its meaning and/or display. Examples of types of markup
 * that could be added are bold ('b'), italic ('i'), strikethrough ('s'), and `a` tags (links).
 * @property {String} tagName
 */
class Markup {
  /*
   * @param {Object} attributes key-values
   */
  constructor(tagName, attributes={}) {
    this.tagName = normalizeTagName(tagName);

    assert('Must use attributes object param (not array) for Markup',
           !Array.isArray(attributes));

    this.attributes = filterObject(attributes, VALID_ATTRIBUTES$1);
    this.type = MARKUP_TYPE;

    assert(`Cannot create markup of tagName ${tagName}`,
           VALID_MARKUP_TAGNAMES.indexOf(this.tagName) !== -1);
  }

  /**
   * Whether text in the forward direction of the cursor (i.e. to the right in ltr text)
   * should be considered to have this markup applied to it.
   * @private
   */
  isForwardInclusive() {
    return this.tagName === normalizeTagName("a") ? false : true;
  }

  isBackwardInclusive() {
    return false;
  }

  hasTag(tagName) {
    return this.tagName === normalizeTagName(tagName);
  }

  /**
   * Returns the attribute value
   * @param {String} name, e.g. "href"
   */
  getAttribute(name) {
    return this.attributes[name];
  }

  static isValidElement(element) {
    const tagName = normalizeTagName(element.tagName);
    return VALID_MARKUP_TAGNAMES.indexOf(tagName) !== -1;
  }
}

const SKIPPABLE_ELEMENT_TAG_NAMES = [
  'style', 'head', 'title', 'meta'
].map(normalizeTagName);

const NEWLINES = /\s*\n\s*/g;
function sanitize(text) {
  return text.replace(NEWLINES, ' ');
}

/**
 * parses an element into a section, ignoring any non-markup
 * elements contained within
 * @private
 */
class SectionParser {
  constructor(builder, options={}) {
    this.builder = builder;
    this.plugins = options.plugins || [];
  }

  parse(element) {
    if (this._isSkippable(element)) {
      return [];
    }
    this.sections = [];
    this.state = {};

    this._updateStateFromElement(element);

    let finished = false;

    // top-level text nodes will be run through parseNode later so avoid running
    // the node through parserPlugins twice
    if (!isTextNode(element)) {
      finished = this.runPlugins(element);
    }

    if (!finished) {
      let childNodes = isTextNode(element) ? [element] : element.childNodes;

      forEach(childNodes, el => {
        this.parseNode(el);
      });
    }

    this._closeCurrentSection();

    return this.sections;
  }

  runPlugins(node) {
    let isNodeFinished = false;
    let env = {
      addSection: (section) => {
        // avoid creating empty paragraphs due to wrapper elements around
        // parser-plugin-handled elements
        if (this.state.section && this.state.section.isMarkerable && !this.state.section.text && !this.state.text) {
          this.state.section = null;
        } else {
          this._closeCurrentSection();
        }
        this.sections.push(section);
      },
      addMarkerable: (marker) => {
        let { state } = this;
        let { section } = state;
        // if the first element doesn't create it's own state and it's plugin
        // handler uses `addMarkerable` we won't have a section yet
        if (!section) {
          state.text = '';
          state.section = this.builder.createMarkupSection(normalizeTagName('p'));
          section = state.section;
        }
        assert(
          'Markerables can only be appended to markup sections and list item sections',
          section && section.isMarkerable
        );
        if (state.text) {
          this._createMarker();
        }
        section.markers.append(marker);
      },
      nodeFinished() {
        isNodeFinished = true;
      }
    };
    for (let i=0; i<this.plugins.length; i++) {
      let plugin = this.plugins[i];
      plugin(node, this.builder, env);
      if (isNodeFinished) {
        return true;
      }
    }
    return false;
  }

  /* eslint-disable complexity */
  parseNode(node) {
    if (!this.state.section) {
      this._updateStateFromElement(node);
    }

    let nodeFinished = this.runPlugins(node);
    if (nodeFinished) {
      return;
    }

    // handle closing the current section and starting a new one if we hit a
    // new-section-creating element.
    if (this.state.section && !isTextNode(node) && node.tagName) {
      let tagName = normalizeTagName(node.tagName);
      let isListSection = contains(VALID_LIST_SECTION_TAGNAMES, tagName);
      let isListItem = contains(VALID_LIST_ITEM_TAGNAMES, tagName);
      let isMarkupSection = contains(VALID_MARKUP_SECTION_TAGNAMES, tagName);
      let isNestedListSection = isListSection && this.state.section.isListItem;
      let lastSection = this.sections[this.sections.length - 1];

      // lists can continue after breaking out for a markup section,
      // in that situation, start a new list using the same list type
      if (isListItem && this.state.section.isMarkupSection) {
        this._closeCurrentSection();
        this._updateStateFromElement(node.parentElement);
      }

      // we can hit a list item after parsing a nested list, when that happens
      // and the lists are of different types we need to make sure we switch
      // the list type back
      if (isListItem && lastSection && lastSection.isListSection) {
        let parentElement = node.parentElement;
        let parentElementTagName = normalizeTagName(parentElement.tagName);
        if (parentElementTagName !== lastSection.tagName) {
          this._closeCurrentSection();
          this._updateStateFromElement(parentElement);
        }
      }

      // if we've broken out of a list due to nested section-level elements we
      // can hit the next list item without having a list section in the current
      // state. In this instance we find the parent list node and use it to
      // re-initialize the state with a new list section
      if (
        isListItem &&
        !(this.state.section.isListItem || this.state.section.isListSection) &&
        !lastSection.isListSection
      ) {
        this._closeCurrentSection();
        this._updateStateFromElement(node.parentElement);
      }

      // if we have consecutive list sections of different types (ul, ol) then
      // ensure we close the current section and start a new one
      let isNewListSection = lastSection
        && lastSection.isListSection
        && this.state.section.isListItem
        && isListSection
        && tagName !== lastSection.tagName;

      if (
        isNewListSection ||
        (isListSection && !isNestedListSection) ||
        isMarkupSection ||
        isListItem
      ) {
        // don't break out of the list for list items that contain a single <p>.
        // deals with typical case of <li><p>Text</p></li><li><p>Text</p></li>
        if (
          this.state.section.isListItem &&
          tagName === 'p' &&
          !node.nextSibling &&
          contains(VALID_LIST_ITEM_TAGNAMES, normalizeTagName(node.parentElement.tagName))
         ) {
          this.parseElementNode(node);
          return;
        }

        // avoid creating empty paragraphs due to wrapper elements around
        // section-creating elements
        if (this.state.section.isMarkerable && !this.state.text && this.state.section.markers.length === 0) {
          this.state.section = null;
        } else {
          this._closeCurrentSection();
        }

        this._updateStateFromElement(node);
      }

      if (this.state.section.isListSection) {
        // ensure the list section is closed and added to the sections list.
        // _closeCurrentSection handles pushing list items onto the list section
        this._closeCurrentSection();

        forEach(node.childNodes, (node) => {
          this.parseNode(node);
        });
        return;
      }
    }

    switch (node.nodeType) {
      case NODE_TYPES.TEXT:
        this.parseTextNode(node);
        break;
      case NODE_TYPES.ELEMENT:
        this.parseElementNode(node);
        break;
    }
  }

  parseElementNode(element) {
    let { state } = this;

    const markups = this._markupsFromElement(element);
    if (markups.length && state.text.length && state.section.isMarkerable) {
      this._createMarker();
    }
    state.markups.push(...markups);

    forEach(element.childNodes, (node) => {
      this.parseNode(node);
    });

    if (markups.length && state.text.length && state.section.isMarkerable) {
      // create the marker started for this node
      this._createMarker();
    }

    // pop the current markups from the stack
    state.markups.splice(-markups.length, markups.length);
  }

  parseTextNode(textNode) {
    let { state } = this;
    state.text += sanitize(textNode.textContent);
  }

  _updateStateFromElement(element) {
    if (isCommentNode(element)) {
      return;
    }

    let { state } = this;
    state.section = this._createSectionFromElement(element);
    state.markups = this._markupsFromElement(element);
    state.text = '';
  }

  _closeCurrentSection() {
    let { sections, state } = this;
    let lastSection = sections[sections.length - 1];

    if (!state.section) {
      return;
    }

    // close a trailing text node if it exists
    if (state.text.length && state.section.isMarkerable) {
      this._createMarker();
    }

    // push listItems onto the listSection or add a new section
    if (state.section.isListItem && lastSection && lastSection.isListSection) {
      trimSectionText(state.section);
      lastSection.items.append(state.section);
    } else {
      // avoid creating empty markup sections, especially useful for indented source
      if (
        state.section.isMarkerable &&
        !state.section.text.trim() &&
        !any(state.section.markers, marker => marker.isAtom)
      ) {
        state.section = null;
        state.text = '';
        return;
      }

      // remove empty list sections before creating a new section
      if (lastSection && lastSection.isListSection && lastSection.items.length === 0) {
        sections.pop();
      }

      sections.push(state.section);
    }

    state.section = null;
    state.text = '';
  }

  _markupsFromElement(element) {
    let { builder } = this;
    let markups = [];
    if (isTextNode(element)) {
      return markups;
    }

    const tagName = normalizeTagName(element.tagName);
    if (this._isValidMarkupForElement(tagName, element)) {
      markups.push(builder.createMarkup(tagName, getAttributes(element)));
    }

    this._markupsFromElementStyle(element).forEach(
      markup => markups.push(markup)
    );

    return markups;
  }

  _isValidMarkupForElement(tagName, element) {
    if (VALID_MARKUP_TAGNAMES.indexOf(tagName) === -1) {
      return false;
    } else if (tagName === 'b') {
      // google docs add a <b style="font-weight: normal;"> that should not
      // create a "b" markup
      return element.style.fontWeight !== 'normal';
    }
    return true;
  }

  _markupsFromElementStyle(element) {
    let { builder } = this;
    let markups = [];
    let { fontStyle, fontWeight } = element.style;
    if (fontStyle === 'italic') {
      markups.push(builder.createMarkup('em'));
    }
    if (fontWeight === 'bold' || fontWeight === '700') {
      markups.push(builder.createMarkup('strong'));
    }
    return markups;
  }

  _createMarker() {
    let { state } = this;
    let text = transformHTMLText(state.text);
    let marker = this.builder.createMarker(text, state.markups);
    state.section.markers.append(marker);
    state.text = '';
  }

  _getSectionDetails(element) {
    let sectionType,
        tagName,
        inferredTagName = false;

    if (isTextNode(element)) {
      tagName = DEFAULT_TAG_NAME;
      sectionType = MARKUP_SECTION_TYPE;
      inferredTagName = true;
    } else {
      tagName = normalizeTagName(element.tagName);

      // blockquote>p is valid html and should be treated as a blockquote section
      // rather than a plain markup section
      if (
        tagName === 'p' &&
        element.parentElement &&
        normalizeTagName(element.parentElement.tagName) === 'blockquote'
      ) {
        tagName = 'blockquote';
      }

      if (contains(VALID_LIST_SECTION_TAGNAMES, tagName)) {
        sectionType = LIST_SECTION_TYPE;
      } else if (contains(VALID_LIST_ITEM_TAGNAMES, tagName)) {
        sectionType = LIST_ITEM_TYPE;
      } else if (contains(VALID_MARKUP_SECTION_TAGNAMES, tagName)) {
        sectionType = MARKUP_SECTION_TYPE;
      } else {
        sectionType = MARKUP_SECTION_TYPE;
        tagName = DEFAULT_TAG_NAME;
        inferredTagName = true;
      }
    }

    return {sectionType, tagName, inferredTagName};
  }

  _createSectionFromElement(element) {
    if (isCommentNode(element)) {
      return;
    }

    let { builder } = this;
    let section;
    let {tagName, sectionType, inferredTagName} =
      this._getSectionDetails(element);

    switch (sectionType) {
      case LIST_SECTION_TYPE:
        section = builder.createListSection(tagName);
        break;
      case LIST_ITEM_TYPE:
        section = builder.createListItem();
        break;
      case MARKUP_SECTION_TYPE:
        section = builder.createMarkupSection(tagName);
        section._inferredTagName = inferredTagName;
        break;
      default:
        assert('Cannot parse section from element', false);
    }

    return section;
  }

  _isSkippable(element) {
    return element.nodeType === NODE_TYPES.ELEMENT &&
           contains(SKIPPABLE_ELEMENT_TAG_NAMES,
                    normalizeTagName(element.tagName));
  }
}

const GOOGLE_DOCS_CONTAINER_ID_REGEX = /^docs\-internal\-guid/;

const NO_BREAK_SPACE_REGEX = new RegExp(NO_BREAK_SPACE, 'g');
const TAB_CHARACTER_REGEX = new RegExp(TAB_CHARACTER, 'g');
function transformHTMLText(textContent) {
  let text = textContent;
  text = text.replace(NO_BREAK_SPACE_REGEX, ' ');
  text = text.replace(TAB_CHARACTER_REGEX, TAB);
  return text;
}

function trimSectionText(section) {
  if (section.isMarkerable && section.markers.length) {
    let { head, tail } = section.markers;
    head.value = head.value.replace(/^\s+/, '');
    tail.value = tail.value.replace(/\s+$/, '');
  }
}

function isGoogleDocsContainer(element) {
  return !isTextNode(element) &&
         !isCommentNode(element) &&
         normalizeTagName(element.tagName) === normalizeTagName('b') &&
         GOOGLE_DOCS_CONTAINER_ID_REGEX.test(element.id);
}

function detectRootElement(element) {
  let childNodes = element.childNodes || [];
  let googleDocsContainer = detect(childNodes, isGoogleDocsContainer);

  if (googleDocsContainer) {
    return googleDocsContainer;
  } else {
    return element;
  }
}

const TAG_REMAPPING = {
  'b': 'strong',
  'i': 'em'
};

function remapTagName(tagName) {
  let normalized = normalizeTagName(tagName);
  let remapped = TAG_REMAPPING[normalized];
  return remapped || normalized;
}

function trim(str) {
  return str.replace(/^\s+/, '').replace(/\s+$/, '');
}

function walkMarkerableNodes(parent, callback) {
  let currentNode = parent;

  if (
    isTextNode(currentNode) ||
    (
      isElementNode(currentNode) &&
      currentNode.classList.contains(ATOM_CLASS_NAME)
    )
  ) {
    callback(currentNode);
  } else {
    currentNode = currentNode.firstChild;
    while (currentNode) {
      walkMarkerableNodes(currentNode, callback);
      currentNode = currentNode.nextSibling;
    }
  }
}

/**
 * Parses DOM element -> Post
 * @private
 */
class DOMParser {
  constructor(builder, options={}) {
    this.builder = builder;
    this.sectionParser = new SectionParser(this.builder, options);
  }

  parse(element) {
    const post = this.builder.createPost();
    let rootElement = detectRootElement(element);

    this._eachChildNode(rootElement, child => {
      let sections = this.parseSections(child);
      this.appendSections(post, sections);
    });

    // trim leading/trailing whitespace of markerable sections to avoid
    // unnessary whitespace from indented HTML input
    forEach(post.sections, section => trimSectionText(section));

    return post;
  }

  appendSections(post, sections) {
    forEach(sections, section => this.appendSection(post, section));
  }

  appendSection(post, section) {
    if (
      section.isBlank ||
      (section.isMarkerable &&
        trim(section.text) === "" &&
        !any(section.markers, marker => marker.isAtom))
    ) {
      return;
    }

    let lastSection = post.sections.tail;
    if (lastSection &&
        lastSection._inferredTagName &&
        section._inferredTagName &&
        lastSection.tagName === section.tagName) {
      lastSection.join(section);
    } else {
      post.sections.append(section);
    }
  }

  _eachChildNode(element, callback) {
    let nodes = isTextNode(element) ? [element] : element.childNodes;
    forEach(nodes, node => callback(node));
  }

  parseSections(element) {
    return this.sectionParser.parse(element);
  }

  // walk up from the textNode until the rootNode, converting each
  // parentNode into a markup
  collectMarkups(textNode, rootNode) {
    let markups = [];
    let currentNode = textNode.parentNode;
    while (currentNode && currentNode !== rootNode) {
      let markup = this.markupFromNode(currentNode);
      if (markup) {
        markups.push(markup);
      }

      currentNode = currentNode.parentNode;
    }
    return markups;
  }

  // Turn an element node into a markup
  markupFromNode(node) {
    if (Markup.isValidElement(node)) {
      let tagName = remapTagName(node.tagName);
      let attributes = getAttributes(node);
      return this.builder.createMarkup(tagName, attributes);
    }
  }

  // FIXME should move to the section parser?
  // FIXME the `collectMarkups` logic could simplify the section parser?
  reparseSection(section, renderTree) {
    switch (section.type) {
      case LIST_SECTION_TYPE:
        return this.reparseListSection(section, renderTree);
      case LIST_ITEM_TYPE:
        return this.reparseListItem(section, renderTree);
      case MARKUP_SECTION_TYPE:
        return this.reparseMarkupSection(section, renderTree);
      default:
        return; // can only parse the above types
    }
  }

  reparseMarkupSection(section, renderTree) {
    return this._reparseSectionContainingMarkers(section, renderTree);
  }

  reparseListItem(listItem, renderTree) {
    return this._reparseSectionContainingMarkers(listItem, renderTree);
  }

  reparseListSection(listSection, renderTree) {
    listSection.items.forEach(li => this.reparseListItem(li, renderTree));
  }

  _reparseSectionContainingMarkers(section, renderTree) {
    let element = section.renderNode.element;
    let seenRenderNodes = [];
    let previousMarker;

    walkMarkerableNodes(element, (node) => {
      let marker;
      let renderNode = renderTree.getElementRenderNode(node);
      if (renderNode) {
        if (renderNode.postNode.isMarker) {
          let text = transformHTMLText(node.textContent);
          let markups = this.collectMarkups(node, element);
          if (text.length) {
            marker = renderNode.postNode;
            marker.value = text;
            marker.markups = markups;
          } else {
            renderNode.scheduleForRemoval();
          }
        } else if (renderNode.postNode.isAtom) {
          let { headTextNode, tailTextNode } = renderNode;
          if (headTextNode.textContent !== ZWNJ) {
            let value = headTextNode.textContent.replace(new RegExp(ZWNJ, 'g'), '');
            headTextNode.textContent = ZWNJ;
            if (previousMarker && previousMarker.isMarker) {
              previousMarker.value += value;
              if (previousMarker.renderNode) {
                previousMarker.renderNode.markDirty();
              }
            } else {
              let postNode = renderNode.postNode;
              let newMarkups = postNode.markups.slice();
              let newPreviousMarker = this.builder.createMarker(value, newMarkups);
              section.markers.insertBefore(newPreviousMarker, postNode);

              let newPreviousRenderNode = renderTree.buildRenderNode(newPreviousMarker);
              newPreviousRenderNode.markDirty();
              section.renderNode.markDirty();

              seenRenderNodes.push(newPreviousRenderNode);
              section.renderNode.childNodes.insertBefore(newPreviousRenderNode,
                                                         renderNode);
            }
          }
          if (tailTextNode.textContent !== ZWNJ) {
            let value = tailTextNode.textContent.replace(new RegExp(ZWNJ, 'g'), '');
            tailTextNode.textContent = ZWNJ;

            if (renderNode.postNode.next && renderNode.postNode.next.isMarker) {
              let nextMarker = renderNode.postNode.next;

              if (nextMarker.renderNode) {
                let nextValue = nextMarker.renderNode.element.textContent;
                nextMarker.renderNode.element.textContent = value + nextValue;
              } else {
                let nextValue = value + nextMarker.value;
                nextMarker.value = nextValue;
              }
            } else {
              let postNode = renderNode.postNode;
              let newMarkups = postNode.markups.slice();
              let newMarker = this.builder.createMarker(value, newMarkups);

              section.markers.insertAfter(newMarker, postNode);

              let newRenderNode = renderTree.buildRenderNode(newMarker);
              seenRenderNodes.push(newRenderNode);

              newRenderNode.markDirty();
              section.renderNode.markDirty();

              section.renderNode.childNodes.insertAfter(newRenderNode, renderNode);
            }
          }
          if (renderNode) {
            marker = renderNode.postNode;
          }
        }
      } else if (isTextNode(node)) {
        let text = transformHTMLText(node.textContent);
        let markups = this.collectMarkups(node, element);
        marker = this.builder.createMarker(text, markups);

        renderNode = renderTree.buildRenderNode(marker);
        renderNode.element = node;
        renderNode.markClean();
        section.renderNode.markDirty();

        let previousRenderNode = previousMarker && previousMarker.renderNode;
        section.markers.insertAfter(marker, previousMarker);
        section.renderNode.childNodes.insertAfter(renderNode, previousRenderNode);
      }

      if (renderNode) {
        seenRenderNodes.push(renderNode);
      }
      previousMarker = marker;
    });

    let renderNode = section.renderNode.childNodes.head;
    while (renderNode) {
      if (seenRenderNodes.indexOf(renderNode) === -1) {
        renderNode.scheduleForRemoval();
      }
      renderNode = renderNode.next;
    }
  }
}

class HTMLParser {
  constructor(builder, options={}) {
    assert('Must pass builder to HTMLParser', builder);
    this.builder = builder;
    this.options = options;
  }

  /**
   * @param {String} html to parse
   * @return {Post} A post abstract
   */
  parse(html) {
    let dom = parseHTML(html);
    let parser = new DOMParser(this.builder, this.options);
    return parser.parse(dom);
  }
}

class RenderNode extends LinkedItem {
  constructor(postNode, renderTree) {
    super();
    this.parent = null;
    this.isDirty = true;
    this.isRemoved = false;
    this.postNode = postNode;
    this._childNodes = null;
    this._element = null;
    this._cursorElement = null; // blank render nodes need a cursor element
    this.renderTree = renderTree;

    // RenderNodes for Markers keep track of their markupElement
    this.markupElement = null;

    // RenderNodes for Atoms use these properties
    this.headTextNode = null;
    this.tailTextNode = null;
    this.atomNode = null;

    // RenderNodes for cards use this property
    this.cardNode = null;
  }
  isAttached() {
    assert('Cannot check if a renderNode is attached without an element.',
           !!this.element);
    return containsNode(this.renderTree.rootElement, this.element);
  }
  get childNodes() {
    if (!this._childNodes) {
      this._childNodes = new LinkedList({
        adoptItem: item => item.parent = this,
        freeItem: item => item.destroy()
      });
    }
    return this._childNodes;
  }
  scheduleForRemoval() {
    this.isRemoved = true;
    if (this.parent) { this.parent.markDirty(); }
  }
  markDirty() {
    this.isDirty = true;
    if (this.parent) { this.parent.markDirty(); }
  }
  get isRendered() {
    return !!this.element;
  }
  markClean() {
    this.isDirty = false;
  }
  set element(element) {
    const currentElement = this._element;
    this._element = element;

    if (currentElement) {
      this.renderTree.removeElementRenderNode(currentElement);
    }

    if (element) {
      this.renderTree.setElementRenderNode(element, this);
    }
  }
  get element() {
    return this._element;
  }
  set cursorElement(cursorElement) {
    this._cursorElement = cursorElement;
  }
  get cursorElement() {
    return this._cursorElement || this.element;
  }
  destroy() {
    this.element = null;
    this.parent = null;
    this.postNode = null;
    this.renderTree = null;
  }
  reparsesMutationOfChildNode(node) {
    if (this.postNode.isCardSection) {
      return !containsNode(this.cardNode.element, node);
    } else if (this.postNode.isAtom) {
      return !containsNode(this.atomNode.element, node);
    }
    return true;
  }
}

// start at one to make the falsy semantics easier
let uuidGenerator = 1;

class ElementMap {
  constructor() {
    this._map = {};
  }
  set(key, value) {
    let uuid = key._uuid;
    if (!uuid) {
      key._uuid = uuid = '' + uuidGenerator++;
    }
    this._map[uuid] = value;
  }
  get(key) {
    if (key._uuid) {
      return this._map[key._uuid];
    }
    return null;
  }
  remove(key) {
    assert('tried to fetch a value for an element not seen before', !!key._uuid);
    delete this._map[key._uuid];
  }

}

class RenderTree {
  constructor(rootPostNode) {
    this._rootNode = this.buildRenderNode(rootPostNode);
    this._elements = new ElementMap();
  }
  /*
   * @return {RenderNode} The root render node in this tree
   */
  get rootNode() {
    return this._rootNode;
  }
  /**
   * @return {Boolean}
   */
  get isDirty() {
    return this.rootNode && this.rootNode.isDirty;
  }
  /*
   * @return {DOMNode} The root DOM element in this tree
   */
  get rootElement() {
    return this.rootNode.element;
  }
  /*
   * @param {DOMNode} element
   * @return {RenderNode} The renderNode for this element, if any
   */
  getElementRenderNode(element) {
    return this._elements.get(element);
  }
  setElementRenderNode(element, renderNode) {
    this._elements.set(element, renderNode);
  }
  removeElementRenderNode(element) {
    this._elements.remove(element);
  }
  /**
   * @param {DOMNode} element
   * Walk up from the dom element until we find a renderNode element
   */
  findRenderNodeFromElement(element, conditionFn=()=>true) {
    let renderNode;
    while (element) {
      renderNode = this.getElementRenderNode(element);
      if (renderNode && conditionFn(renderNode)) {
        return renderNode;
      }

      // continue loop
      element = element.parentNode;

      // stop if we are at the root element
      if (element === this.rootElement) {
        if (conditionFn(this.rootNode)) {
          return this.rootNode;
        } else {
          return;
        }
      }
    }
  }
  buildRenderNode(postNode) {
    const renderNode = new RenderNode(postNode, this);
    postNode.renderNode = renderNode;
    return renderNode;
  }
}

const MOBILEDOC_VERSION$4 = MOBILEDOC_VERSION$3;

var mobiledocRenderers = {
  render(post, version) {
    switch (version) {
      case MOBILEDOC_VERSION:
        return MobiledocRenderer_0_2.render(post);
      case MOBILEDOC_VERSION$1:
        return MobiledocRenderer_0_3.render(post);
      case MOBILEDOC_VERSION$2:
        return MobiledocRenderer_0_3_1.render(post);
      case undefined:
      case null:
      case MOBILEDOC_VERSION$3:
        return MobiledocRenderer_0_3_2.render(post);
      default:
        assert(`Unknown version of mobiledoc renderer requested: ${version}`, false);
    }
  }
};

function mergeWithOptions(original, updates, options) {
  options = options || {};
  for(var prop in updates) {
    if (options.hasOwnProperty(prop)) {
      original[prop] = options[prop];
    } else if (updates.hasOwnProperty(prop)) {
      original[prop] = updates[prop];
    }
  }
  return original;
}

const Cursor = class Cursor {
  constructor(editor) {
    this.editor = editor;
    this.renderTree = editor._renderTree;
    this.post = editor.post;
  }

  clearSelection() {
    clearSelection();
  }

  /**
   * @return {Boolean} true when there is either a collapsed cursor in the
   * editor's element or a selection that is contained in the editor's element
   */
  hasCursor() {
    return this.editor.hasRendered &&
           (this._hasCollapsedSelection() || this._hasSelection());
  }

  hasSelection() {
    return this.editor.hasRendered &&
           this._hasSelection();
  }

  /**
   * @return {Boolean} Can the cursor be on this element?
   */
  isAddressable(element) {
    let { renderTree } = this;
    let renderNode = renderTree.findRenderNodeFromElement(element);
    if (renderNode && renderNode.postNode.isCardSection) {
      let renderedElement = renderNode.element;

      // card sections have addressable text nodes containing &zwnj;
      // as their first and last child
      if (element !== renderedElement &&
          element !== renderedElement.firstChild &&
          element !== renderedElement.lastChild) {
        return false;
      }
    }

    return !!renderNode;
  }

  /*
   * @return {Range} Cursor#Range object
   */
  get offsets() {
    if (!this.hasCursor()) { return Range.blankRange(); }

    let { selection, renderTree } = this;
    let parentNode = this.editor.element;
    selection = constrainSelectionTo(selection, parentNode);

    const {
      headNode, headOffset, tailNode, tailOffset, direction
    } = comparePosition(selection);

    const headPosition = Position$1.fromNode(renderTree, headNode, headOffset);
    const tailPosition = Position$1.fromNode(renderTree, tailNode, tailOffset);

    return new Range(headPosition, tailPosition, direction);
  }

  _findNodeForPosition(position) {
    let { section } = position;
    let node, offset;
    if (section.isCardSection) {
      offset = 0;
      if (position.offset === 0) {
        node = section.renderNode.element.firstChild;
      } else {
        node = section.renderNode.element.lastChild;
      }
    } else if (section.isBlank) {
      node = section.renderNode.cursorElement;
      offset = 0;
    } else {
      let {marker, offsetInMarker} = position;
      if (marker.isAtom) {
        if (offsetInMarker > 0) {
          // FIXME -- if there is a next marker, focus on it?
          offset = 0;
          node = marker.renderNode.tailTextNode;
        } else {
          offset = 0;
          node = marker.renderNode.headTextNode;
        }
      } else {
        node = marker.renderNode.element;
        offset = offsetInMarker;
      }
    }

    return {node, offset};
  }

  selectRange(range) {
    if (range.isBlank) {
      this.clearSelection();
      return;
    }

    const { head, tail, direction } = range;
    const { node:headNode, offset:headOffset } = this._findNodeForPosition(head),
          { node:tailNode, offset:tailOffset } = this._findNodeForPosition(tail);
    this._moveToNode(headNode, headOffset, tailNode, tailOffset, direction);

    // Firefox sometimes doesn't keep focus in the editor after adding a card
    this.editor._ensureFocus();
  }

  get selection() {
    return window.getSelection();
  }

  selectedText() {
    // FIXME remove this
    return this.selection.toString();
  }

  /**
   * @param {textNode} node
   * @param {integer} offset
   * @param {textNode} endNode
   * @param {integer} endOffset
   * @param {integer} direction forward or backward, default forward
   * @private
   */
  _moveToNode(node, offset, endNode, endOffset, direction=DIRECTION.FORWARD) {
    this.clearSelection();

    if (direction === DIRECTION.BACKWARD) {
      [node, offset, endNode, endOffset] = [ endNode, endOffset, node, offset ];
    }

    const range = document.createRange();
    range.setStart(node, offset);
    if (direction === DIRECTION.BACKWARD && !!this.selection.extend) {
      this.selection.addRange(range);
      this.selection.extend(endNode, endOffset);
    } else {
      range.setEnd(endNode, endOffset);
      this.selection.addRange(range);
    }
  }

  _hasSelection() {
    const element = this.editor.element;
    const { _selectionRange } = this;
    if (!_selectionRange || _selectionRange.collapsed) { return false; }

    return containsNode(element, this.selection.anchorNode) &&
           containsNode(element, this.selection.focusNode);
  }

  _hasCollapsedSelection() {
    const { _selectionRange } = this;
    if (!_selectionRange) { return false; }

    const element = this.editor.element;
    return containsNode(element, this.selection.anchorNode);
  }

  get _selectionRange() {
    const { selection } = this;
    if (selection.rangeCount === 0) { return null; }
    return selection.getRangeAt(0);
  }
};

var Environment = {
  hasDOM() {
    return typeof document !== 'undefined';
  }
};

const ATOM_LENGTH = 1;

class Atom extends LinkedItem {
  constructor(name, value, payload, markups=[]) {
    super();
    this.name = name;
    this.value = value;
    this.text = ''; // An atom never has text, but it does have a value
    assert('Atom must have value', value !== undefined && value !== null);
    this.payload = payload;
    this.type = ATOM_TYPE;
    this.isMarker = false;
    this.isAtom = true;

    this.markups = [];
    markups.forEach(m => this.addMarkup(m));
  }

  clone() {
    let clonedMarkups = this.markups.slice();
    return this.builder.createAtom(
      this.name, this.value, this.payload, clonedMarkups
    );
  }

  get isBlank() {
    return false;
  }

  get length() {
    return ATOM_LENGTH;
  }

  canJoin(/* other */) {
    return false;
  }

  textUntil(/* offset */) {
    return '';
  }

  split(offset=0, endOffset=offset) {
    let markers = [];

    if (endOffset === 0) {
      markers.push(this.builder.createMarker('', this.markups.slice()));
    }

    markers.push(this.clone());

    if (offset === ATOM_LENGTH) {
      markers.push(this.builder.createMarker('', this.markups.slice()));
    }

    return markers;
  }

  splitAtOffset(offset) {
    assert('Cannot split a marker at an offset > its length',
           offset <= this.length);

    let { builder } = this;
    let clone = this.clone();
    let blankMarker = builder.createMarker('');
    let pre, post;

    if (offset === 0) {
      ([pre, post] = [blankMarker, clone]);
    } else if (offset === ATOM_LENGTH) {
      ([pre, post] = [clone, blankMarker]);
    } else {
      assert(`Invalid offset given to Atom#splitAtOffset: "${offset}"`, false);
    }

    this.markups.forEach(markup => {
      pre.addMarkup(markup);
      post.addMarkup(markup);
    });
    return [pre, post];
  }
}

mixin(Atom, Markerupable);

/**
 * The Post is an in-memory representation of an editor's document.
 * An editor always has a single post. The post is organized into a list of
 * sections. Each section may be markerable (contains "markers", aka editable
 * text) or non-markerable (e.g., a card).
 * When persisting a post, it must first be serialized (loss-lessly) into
 * mobiledoc using {@link Editor#serialize}.
 */
class Post {
  /**
   * @private
   */
  constructor() {
    this.type = POST_TYPE;
    this.sections = new LinkedList({
      adoptItem: s => s.post = s.parent = this,
      freeItem: s => s.post = s.parent = null
    });
  }

  /**
   * @return {Position} The position at the start of the post (will be a {@link BlankPosition}
   * if the post is blank)
   * @public
   */
  headPosition() {
    if (this.isBlank) {
      return Position$1.blankPosition();
    } else {
      return this.sections.head.headPosition();
    }
  }

  /**
   * @return {Position} The position at the end of the post (will be a {@link BlankPosition}
   * if the post is blank)
   * @public
   */
  tailPosition() {
    if (this.isBlank) {
      return Position$1.blankPosition();
    } else {
      return this.sections.tail.tailPosition();
    }
  }

  /**
   * @return {Range} A range encompassing the entire post
   * @public
   */
  toRange() {
    return this.headPosition().toRange(this.tailPosition());
  }

  get isBlank() {
    return this.sections.isEmpty;
  }

  /**
   * If the post has no sections, or only has one, blank section, then it does
   * not have content and this method returns false. Otherwise it is true.
   * @return {Boolean}
   * @public
   */
  get hasContent() {
    if ((this.sections.length > 1) ||
        (this.sections.length === 1 && !this.sections.head.isBlank)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @param {Range} range
   * @return {Array} markers that are completely contained by the range
   */
  markersContainedByRange(range) {
    const markers = [];

    this.walkMarkerableSections(range, section => {
      section._markersInRange(
        range.trimTo(section),
        (m, {isContained}) => { if (isContained) { markers.push(m); } }
      );
    });

    return markers;
  }

  markupsInRange(range) {
    const markups = new Set();

    if (range.isCollapsed) {
      let pos = range.head;
      if (pos.isMarkerable) {
        let [back, forward] = [pos.markerIn(-1), pos.markerIn(1)];
        if (back && forward && back === forward) {
          back.markups.forEach(m => markups.add(m));
        } else {
          (back && back.markups || []).forEach(m => {
            if (m.isForwardInclusive()) {
              markups.add(m);
            }
          });
          (forward && forward.markups || []).forEach(m => {
            if (m.isBackwardInclusive()) {
              markups.add(m);
            }
          });
        }
      }
    } else {
      this.walkMarkerableSections(range, (section) => {
        forEach(
          section.markupsInRange(range.trimTo(section)),
          m => markups.add(m)
        );
      });
    }

    return markups.toArray();
  }

  walkAllLeafSections(callback) {
    let range = this.headPosition().toRange(this.tailPosition());
    return this.walkLeafSections(range, callback);
  }

  walkLeafSections(range, callback) {
    const { head, tail } = range;

    let index = 0;
    let nextSection, shouldStop;
    let currentSection = head.section;

    while (currentSection) {
      nextSection = this._nextLeafSection(currentSection);
      shouldStop = currentSection === tail.section;

      callback(currentSection, index);
      index++;

      if (shouldStop) {
        break;
      } else {
        currentSection = nextSection;
      }
    }
  }

  walkMarkerableSections(range, callback) {
    this.walkLeafSections(range, section => {
      if (section.isMarkerable) {
        callback(section);
      }
    });
  }

  // return the next section that has markers after this one,
  // possibly skipping non-markerable sections
  _nextLeafSection(section) {
    if (!section) { return null; }

    const next = section.next;
    if (next) {
      if (next.isLeafSection) {
        return next;
      } else if (next.items) {
        return next.items.head;
      } else {
        assert('Cannot determine next section from non-leaf-section', false);
      }
    } else if (section.isNested) {
      // if there is no section after this, but this section is a child
      // (e.g. a ListItem inside a ListSection), check for a markerable
      // section after its parent
      return this._nextLeafSection(section.parent);
    }
  }

  /**
   * @param {Range} range
   * @return {Post} A new post, constrained to {range}
   */
  trimTo(range) {
    const post = this.builder.createPost();
    const { builder } = this;
    const { head, tail } = range;
    const tailNotSelected = tail.offset === 0 && head.section !== tail.section;

    let sectionParent = post,
        listParent = null;
    this.walkLeafSections(range, section => {
      let newSection;
      if (section.isMarkerable) {
        if (section.isListItem) {
          if (listParent) {
            sectionParent = null;
          } else {
            listParent = builder.createListSection(section.parent.tagName);
            post.sections.append(listParent);
            sectionParent = null;
          }
          newSection = builder.createListItem();
          listParent.items.append(newSection);
        } else {
          listParent = null;
          sectionParent = post;
          const tagName = tailNotSelected && tail.section === section ?
              'p' :
              section.tagName;
          newSection = builder.createMarkupSection(tagName);
        }

        let currentRange = range.trimTo(section);
        forEach(
          section.markersFor(currentRange.headSectionOffset, currentRange.tailSectionOffset),
          m => newSection.markers.append(m)
        );
      } else {
        newSection = tailNotSelected && tail.section === section ?
            builder.createMarkupSection('p') :
            section.clone();

        sectionParent = post;
      }
      if (sectionParent) {
        sectionParent.sections.append(newSection);
      }
    });
    return post;
  }
}

class Image extends Section {
  constructor() {
    super(IMAGE_SECTION_TYPE);
    this.src = null;
  }

  canJoin() {
    return false;
  }

  get isBlank() {
    return false;
  }

  get length() {
    return 1;
  }
}

function shallowCopyObject(object) {
  let copy = {};
  Object.keys(object).forEach(key => {
    copy[key] = object[key];
  });
  return copy;
}

const CARD_MODES = {
  DISPLAY: 'display',
  EDIT: 'edit'
};

const CARD_LENGTH = 1;

const DEFAULT_INITIAL_MODE = CARD_MODES.DISPLAY;

class Card extends Section {
  constructor(name, payload) {
    super(CARD_TYPE);
    this.name = name;
    this.payload = payload;
    this.setInitialMode(DEFAULT_INITIAL_MODE);
    this.isCardSection = true;
  }

  get isBlank() {
    return false;
  }

  canJoin() {
    return false;
  }

  get length() {
    return CARD_LENGTH;
  }

  clone() {
    let payload = shallowCopyObject(this.payload);
    let card = this.builder.createCardSection(this.name, payload);
    // If this card is currently rendered, clone the mode it is
    // currently in as the default mode of the new card.
    let mode = this._initialMode;
    if (this.renderNode && this.renderNode.cardNode) {
      mode = this.renderNode.cardNode.mode;
    }
    card.setInitialMode(mode);
    return card;
  }

  /**
   * set the mode that this will be rendered into initially
   * @private
   */
  setInitialMode(initialMode) {
    // TODO validate initialMode
    this._initialMode = initialMode;
  }
}

function cacheKey(tagName, attributes) {
  return `${normalizeTagName(tagName)}-${objectToSortedKVArray(attributes).join('-')}`;
}

function addMarkupToCache(cache, markup) {
  cache[cacheKey(markup.tagName, markup.attributes)] = markup;
}

function findMarkupInCache(cache, tagName, attributes) {
  const key = cacheKey(tagName, attributes);
  return cache[key];
}

/**
 * The PostNodeBuilder is used to create new {@link Post} primitives, such
 * as a MarkupSection, a CardSection, a Markup, etc. Every instance of an
 * {@link Editor} has its own builder instance. The builder can be used
 * inside an {@link Editor#run} callback to programmatically create new
 * Post primitives to insert into the document.
 * A PostNodeBuilder should be read from the Editor, *not* instantiated on its own.
 */
class PostNodeBuilder {
  /**
   * @private
   */
  constructor() {
    this.markupCache = {};
  }

  /**
   * @return {Post} A new, blank post
   */
  createPost(sections=[]) {
    const post = new Post();
    post.builder = this;

    sections.forEach(s => post.sections.append(s));

    return post;
  }

  createMarkerableSection(type, tagName, markers=[]) {
    switch (type) {
      case LIST_ITEM_TYPE:
        return this.createListItem(markers);
      case MARKUP_SECTION_TYPE:
        return this.createMarkupSection(tagName, markers);
      default:
        assert(`Cannot create markerable section of type ${type}`, false);
    }
  }

  /**
   * @param {tagName} [tagName='P']
   * @param {Marker[]} [markers=[]]
   * @return {MarkupSection}
   */
  createMarkupSection(tagName=DEFAULT_TAG_NAME, markers=[], isGenerated=false, attributes={}) {
    tagName = normalizeTagName(tagName);
    const section = new MarkupSection(tagName, markers, attributes);
    if (isGenerated) {
      section.isGenerated = true;
    }
    section.builder = this;
    return section;
  }

  createListSection(tagName=DEFAULT_TAG_NAME$1, items=[], attributes={}) {
    tagName = normalizeTagName(tagName);
    const section = new ListSection(tagName, items, attributes);
    section.builder = this;
    return section;
  }

  createListItem(markers=[]) {
    const tagName = normalizeTagName('li');
    const item = new ListItem(tagName, markers);
    item.builder = this;
    return item;
  }

  createImageSection(url) {
    let section = new Image();
    if (url) {
      section.src = url;
    }
    return section;
  }

  /**
   * @param {String} name
   * @param {Object} [payload={}]
   * @return {CardSection}
   */
  createCardSection(name, payload={}) {
    const card = new Card(name, payload);
    card.builder = this;
    return card;
  }

  /**
   * @param {String} value
   * @param {Markup[]} [markups=[]]
   * @return {Marker}
   */
  createMarker(value, markups=[]) {
    const marker = new Marker(value, markups);
    marker.builder = this;
    return marker;
  }

  /**
   * @param {String} name
   * @param {String} [value='']
   * @param {Object} [payload={}]
   * @param {Markup[]} [markups=[]]
   * @return {Atom}
   */
  createAtom(name, value='', payload={}, markups=[]) {
    const atom = new Atom(name, value, payload, markups);
    atom.builder = this;
    return atom;
  }

  /**
   * @param {String} tagName
   * @param {Object} attributes Key-value pairs of attributes for the markup
   * @return {Markup}
   */
  createMarkup(tagName, attributes={}) {
    tagName = normalizeTagName(tagName);

    let markup = findMarkupInCache(this.markupCache, tagName, attributes);
    if (!markup) {
      markup = new Markup(tagName, attributes);
      markup.builder = this;
      addMarkupToCache(this.markupCache, markup);
    }

    return markup;
  }
}

/**
 * Convert section at the editor's cursor position into a list.
 * Does nothing if the cursor position is not at the start of the section,
 * or if the section is already a list item.
 *
 * @param {Editor} editor
 * @param {String} listTagName ("ul" or "ol")
 * @public
 */
function replaceWithListSection(editor, listTagName) {
  let { range: { head, head: { section } } } = editor;
  // Skip if cursor is not at end of section
  if (!head.isTail()) {
    return;
  }

  if (section.isListItem) {
    return;
  }

  editor.run(postEditor => {
    let { builder } = postEditor;
    let item = builder.createListItem();
    let listSection = builder.createListSection(listTagName, [item]);

    postEditor.replaceSection(section, listSection);
    postEditor.setRange(listSection.headPosition());
  });
}

/**
 * Convert section at the editor's cursor position into a header section.
 * Does nothing if the cursor position is not at the start of the section.
 *
 * @param {Editor} editor
 * @param {String} headingTagName ('h1', 'h2', 'h3', 'h4', 'h5', 'h6')
 * @public
 */
function replaceWithHeaderSection(editor, headingTagName) {
  let { range: { head, head: { section } } } = editor;
  // Skip if cursor is not at end of section
  if (!head.isTail()) {
    return;
  }

  editor.run(postEditor => {
    let { builder } = postEditor;
    let newSection = builder.createMarkupSection(headingTagName);
    postEditor.replaceSection(section, newSection);
    postEditor.setRange(newSection.headPosition());
  });
}

const DEFAULT_TEXT_INPUT_HANDLERS = [
  {
    name: 'ul',
    // "* " -> ul
    match: /^\* $/,
    run(editor) {
      replaceWithListSection(editor, 'ul');
    }
  },
  {
    name: 'ol',
    // "1" -> ol, "1." -> ol
    match: /^1\.? $/,
    run(editor) {
      replaceWithListSection(editor, 'ol');
    }
  },
  {
    name: 'heading',
    /*
     * "# " -> h1
     * "## " -> h2
     * "### " -> h3
     * "#### " -> h4
     * "##### " -> h5
     * "###### " -> h6
     */
    match: /^(#{1,6}) $/,
    run(editor, matches) {
      let capture = matches[1];
      let headingTag = 'h' + capture.length;
      replaceWithHeaderSection(editor, headingTag);
    }
  }
];

var Browser = {
  isMac() {
    return (typeof window !== 'undefined') && window.navigator && /Mac/.test(window.navigator.platform);
  },
  isWin() {
    return (typeof window !== 'undefined') && window.navigator && /Win/.test(window.navigator.platform);
  }
};

function selectAll(editor) {
  let { post } = editor;
  editor.selectRange(post.toRange());
}

function gotoStartOfLine(editor) {
  let {range} = editor;
  let {tail: {section}} = range;
  editor.run(postEditor => {
    postEditor.setRange(section.headPosition());
  });
}

function gotoEndOfLine(editor) {
  let {range} = editor;
  let {tail: {section}} = range;
  editor.run(postEditor => {
    postEditor.setRange(section.tailPosition());
  });
}

function deleteToEndOfSection(editor) {
  let { range } = editor;
  if (range.isCollapsed) {
    let { head, head: { section } } = range;
    range = head.toRange(section.tailPosition());
  }
  editor.run(postEditor => {
    let nextPosition = postEditor.deleteRange(range);
    postEditor.setRange(nextPosition);
  });
}

const DEFAULT_KEY_COMMANDS = [{
  str: 'META+B',
  run(editor) {
    editor.toggleMarkup('strong');
  }
}, {
  str: 'CTRL+B',
  run(editor) {
    editor.toggleMarkup('strong');
  }
}, {
  str: 'META+I',
  run(editor) {
    editor.toggleMarkup('em');
  }
}, {
  str: 'CTRL+I',
  run(editor) {
    editor.toggleMarkup('em');
  }
}, {
  str: 'META+U',
  run(editor) {
    editor.toggleMarkup('u');
  }
}, {
  str: 'CTRL+U',
  run(editor) {
    editor.toggleMarkup('u');
  }
}, {
  str: 'CTRL+K',
  run(editor) {
    if (Browser.isMac()) {
      return deleteToEndOfSection(editor);
    } else if (Browser.isWin()) {
      return toggleLink(editor);
    }
  }
}, {
  str: 'CTRL+A',
  run(editor) {
    if (Browser.isMac()) {
      gotoStartOfLine(editor);
    } else {
      selectAll(editor);
    }
  }
}, {
  str: 'META+A',
  run(editor) {
    if (Browser.isMac()) {
      selectAll(editor);
    }
  }
}, {
  str: 'CTRL+E',
  run(editor) {
    if (Browser.isMac()) {
      gotoEndOfLine(editor);
    }
  }
}, {
  str: 'META+K',
  run(editor) {
    return toggleLink(editor);
  },

}, {
  str: 'META+Z',
  run(editor) {
    editor.run(postEditor => {
      postEditor.undoLastChange();
    });
  }
}, {
  str: 'META+SHIFT+Z',
  run(editor) {
    editor.run(postEditor => {
      postEditor.redoLastChange();
    });
  }
}, {
  str: 'CTRL+Z',
  run(editor) {
    if (Browser.isMac()) { return false; }
    editor.run(postEditor => postEditor.undoLastChange());
  }
}, {
  str: 'CTRL+SHIFT+Z',
  run(editor) {
    if (Browser.isMac()) { return false; }
    editor.run(postEditor => postEditor.redoLastChange());
  }
}];

function modifierNamesToMask(modiferNames) {
  let defaultVal = 0;
  return reduce(modiferNames,
                (sum, name) => {
                  let modifier = MODIFIERS[name.toUpperCase()];
                  assert(`No modifier named "${name}" found`, !!modifier);
                  return sum + modifier;
                },
                defaultVal);
}

function characterToCode(character) {
  const upperCharacter = character.toUpperCase();
  const special = specialCharacterToCode(upperCharacter);
  if (special) {
    return special;
  } else {
    assert(`Only 1 character can be used in a key command str (got "${character}")`,
           character.length === 1);
    return upperCharacter.charCodeAt(0);
  }
}

function buildKeyCommand(keyCommand) {
  let { str } = keyCommand;

  if (!str) {
    return keyCommand;
  }
  assert('[deprecation] Key commands no longer use the `modifier` property',
         !keyCommand.modifier);

  let [character, ...modifierNames] = str.split('+').reverse();

  keyCommand.modifierMask = modifierNamesToMask(modifierNames);
  keyCommand.code = characterToCode(character);

  return keyCommand;
}

function validateKeyCommand(keyCommand) {
  return !!keyCommand.code && !!keyCommand.run;
}

function findKeyCommands(keyCommands, keyEvent) {
  const key = Key.fromEvent(keyEvent);

  return filter(keyCommands, ({modifierMask, code}) => {
    return key.keyCode === code && key.modifierMask === modifierMask;
  });
}

const MUTATION = {
  NODES_CHANGED: 'childList',
  CHARACTER_DATA: 'characterData'
};

class MutationHandler {
  constructor(editor) {
    this.editor     = editor;
    this.logger     = editor.loggerFor('mutation-handler');
    this.renderTree = null;
    this._isObserving = false;

    this._observer = new MutationObserver((mutations) => {
      this._handleMutations(mutations);
    });
  }

  init() {
    this.startObserving();
  }

  destroy() {
    this.stopObserving();
    this._observer = null;
  }

  suspendObservation(callback) {
    this.stopObserving();
    callback();
    this.startObserving();
  }

  stopObserving() {
    if (this._isObserving) {
      this._isObserving = false;
      this._observer.disconnect();
    }
  }

  startObserving() {
    if (!this._isObserving) {
      let { editor } = this;
      assert('Cannot observe un-rendered editor', editor.hasRendered);

      this._isObserving = true;
      this.renderTree = editor._renderTree;

      this._observer.observe(editor.element, {
        characterData: true,
        childList: true,
        subtree: true
      });
    }
  }

  reparsePost() {
    this.editor._reparsePost();
  }

  reparseSections(sections) {
    this.editor._reparseSections(sections);
  }

  /**
   * for each mutation:
   *   * find the target nodes:
   *     * if nodes changed, target nodes are:
   *        * added nodes
   *        * the target from which removed nodes were removed
   *     * if character data changed
   *       * target node is the mutation event's target (text node)
   *     * filter out nodes that are no longer attached (parentNode is null)
   *   * for each remaining node:
   *   *  find its section, add to sections-to-reparse
   *   *  if no section, reparse all (and break)
   */
  _handleMutations(mutations) {
    let reparsePost = false;
    let sections = new Set();

    for (let i = 0; i < mutations.length; i++) {
      if (reparsePost) {
        break;
      }

      let nodes = this._findTargetNodes(mutations[i]);

      for (let j=0; j < nodes.length; j++) {
        let node = nodes[j];
        let renderNode = this._findRenderNodeFromNode(node);
        if (renderNode) {
          if (renderNode.reparsesMutationOfChildNode(node)) {
            let section = this._findSectionFromRenderNode(renderNode);
            if (section) {
              sections.add(section);
            } else {
              reparsePost = true;
            }
          }
        } else {
          reparsePost = true;
          break;
        }
      }
    }

    if (reparsePost) {
      this.logger.log(`reparsePost (${mutations.length} mutations)`);
      this.reparsePost();
    } else if (sections.length) {
      this.logger.log(`reparse ${sections.length} sections (${mutations.length} mutations)`);
      this.reparseSections(sections.toArray());
    }
  }

  _findTargetNodes(mutation) {
    let nodes = [];

    switch (mutation.type) {
      case MUTATION.CHARACTER_DATA:
        nodes.push(mutation.target);
        break;
      case MUTATION.NODES_CHANGED:
        forEach(mutation.addedNodes, n => nodes.push(n));
        if (mutation.removedNodes.length) {
          nodes.push(mutation.target);
        }
        break;
    }

    let element = this.editor.element;
    let attachedNodes = filter(nodes, node => containsNode(element, node));
    return attachedNodes;
  }

  _findSectionRenderNodeFromNode(node) {
    return this.renderTree.findRenderNodeFromElement(node, (rn) => {
      return rn.postNode.isSection;
    });
  }

  _findRenderNodeFromNode(node) {
    return this.renderTree.findRenderNodeFromElement(node);
  }

  _findSectionFromRenderNode(renderNode) {
    let sectionRenderNode = this._findSectionRenderNodeFromNode(renderNode.element);
    return sectionRenderNode && sectionRenderNode.postNode;
  }

}

class FixedQueue {
  constructor(length=0) {
    this._maxLength = length;
    this._items = [];
  }

  get length() {
    return this._items.length;
  }

  pop() {
    return this._items.pop();
  }

  push(item) {
    this._items.push(item);
    if (this.length > this._maxLength) {
      this._items.shift();
    }
  }

  clear() {
    this._items = [];
  }

  toArray() {
    return this._items;
  }
}

function findLeafSectionAtIndex(post, index) {
  let section;
  post.walkAllLeafSections((_section, _index) => {
    if (index === _index) {
      section = _section;
    }
  });
  return section;
}

class Snapshot {
  constructor(takenAt, editor, editAction=null) {
    this.mobiledoc = editor.serialize();
    this.editor = editor;
    this.editAction = editAction;
    this.takenAt = takenAt;

    this.snapshotRange();
  }

  snapshotRange() {
    let { range, cursor } = this.editor;
    if (cursor.hasCursor() && !range.isBlank) {
      let { head, tail } = range;
      this.range = {
        head: [head.leafSectionIndex, head.offset],
        tail: [tail.leafSectionIndex, tail.offset]
      };
    }
  }

  getRange(post) {
    if (this.range) {
      let { head, tail } = this.range;
      let [headLeafSectionIndex, headOffset] = head;
      let [tailLeafSectionIndex, tailOffset] = tail;
      let headSection = findLeafSectionAtIndex(post, headLeafSectionIndex);
      let tailSection = findLeafSectionAtIndex(post, tailLeafSectionIndex);

      head = headSection.toPosition(headOffset);
      tail = tailSection.toPosition(tailOffset);

      return head.toRange(tail);
    }
  }

  groupsWith(groupingTimeout, editAction, takenAt) {
    return (
      editAction !== null &&
      this.editAction === editAction &&
      this.takenAt + groupingTimeout > takenAt
    );
  }
}

class EditHistory {
  constructor(editor, queueLength, groupingTimeout) {
    this.editor = editor;
    this._undoStack = new FixedQueue(queueLength);
    this._redoStack = new FixedQueue(queueLength);

    this._pendingSnapshot = null;
    this._groupingTimeout = groupingTimeout;
  }

  snapshot() {
    // update the current snapshot with the range read from DOM
    if (this._pendingSnapshot) {
      this._pendingSnapshot.snapshotRange();
    }
  }

  storeSnapshot(editAction=null) {
    let now = Date.now();
    // store pending snapshot
    let pendingSnapshot = this._pendingSnapshot;
    if (pendingSnapshot) {
      if (!pendingSnapshot.groupsWith(this._groupingTimeout, editAction, now)) {
        this._undoStack.push(pendingSnapshot);
      }
      this._redoStack.clear();
    }

    // take new pending snapshot to store next time `storeSnapshot` is called
    this._pendingSnapshot = new Snapshot(now, this.editor, editAction);
  }

  stepBackward(postEditor) {
    // Throw away the pending snapshot
    this._pendingSnapshot = null;

    let snapshot = this._undoStack.pop();
    if (snapshot) {
      this._redoStack.push(new Snapshot(Date.now(), this.editor));
      this._restoreFromSnapshot(snapshot, postEditor);
    }
  }

  stepForward(postEditor) {
    let snapshot = this._redoStack.pop();
    if (snapshot) {
      this._undoStack.push(new Snapshot(Date.now(), this.editor));
      this._restoreFromSnapshot(snapshot, postEditor);
    }
    postEditor.cancelSnapshot();
  }

  _restoreFromSnapshot(snapshot, postEditor) {
    let { mobiledoc } = snapshot;
    let { editor } = this;
    let { builder, post } = editor;
    let restoredPost = mobiledocParsers.parse(builder, mobiledoc);

    postEditor.removeAllSections();
    postEditor.migrateSectionsFromPost(restoredPost);

    // resurrect snapshotted range if it exists
    let newRange = snapshot.getRange(post);
    if (newRange) {
      postEditor.setRange(newRange);
    }
  }
}

const UL_LI_REGEX = /^\* (.*)$/;
const OL_LI_REGEX = /^\d\.? (.*)$/;
const CR = '\r';
const LF = '\n';
const CR_REGEX = new RegExp(CR, 'g');
const CR_LF_REGEX = new RegExp(CR+LF, 'g');

const SECTION_BREAK = LF;

function normalizeLineEndings(text) {
  return text.replace(CR_LF_REGEX, LF)
             .replace(CR_REGEX, LF);
}

class TextParser {
  constructor(builder, options) {
    this.builder = builder;
    this.options = options;

    this.post = this.builder.createPost();
    this.prevSection = null;
  }

  /**
   * @param {String} text to parse
   * @return {Post} a post abstract
   */
  parse(text) {
    text = normalizeLineEndings(text);
    text.split(SECTION_BREAK).forEach(text => {
      let section = this._parseSection(text);
      this._appendSection(section);
    });

    return this.post;
  }

  _parseSection(text) {
    let tagName = DEFAULT_TAG_NAME,
        type    = MARKUP_SECTION_TYPE,
        section;

    if (UL_LI_REGEX.test(text)) {
      tagName = 'ul';
      type = LIST_SECTION_TYPE;
      text = text.match(UL_LI_REGEX)[1];
    } else if (OL_LI_REGEX.test(text)) {
      tagName = 'ol';
      type = LIST_SECTION_TYPE;
      text = text.match(OL_LI_REGEX)[1];
    }

    let markers = [this.builder.createMarker(text)];

    switch (type) {
      case LIST_SECTION_TYPE: {
        let item = this.builder.createListItem(markers);
        let list = this.builder.createListSection(tagName, [item]);
        section = list;
        break;
      }
      case MARKUP_SECTION_TYPE:
        section = this.builder.createMarkupSection(tagName, markers);
        break;
      default:
        assert(`Unknown type encountered ${type}`, false);
    }

    return section;
  }

  _appendSection(section) {
    let isSameListSection =
      section.isListSection &&
      this.prevSection && this.prevSection.isListSection &&
      this.prevSection.tagName === section.tagName;

    if (isSameListSection) {
      section.items.forEach(item => {
        this.prevSection.items.append(item.clone());
      });
    } else {
      this.post.sections.insertAfter(section, this.prevSection);
      this.prevSection = section;
    }
  }
}

/* global JSON */

const MIME_TEXT_PLAIN = 'text/plain';
const MIME_TEXT_HTML = 'text/html';
const NONSTANDARD_IE_TEXT_TYPE = 'Text';

const MOBILEDOC_REGEX = new RegExp(/data\-mobiledoc='(.*?)'>/);

/**
 * @return {Post}
 * @private
 */
function parsePostFromHTML(html, builder, plugins) {
  let post;

  if (MOBILEDOC_REGEX.test(html)) {
    let mobiledocString = html.match(MOBILEDOC_REGEX)[1];
    let mobiledoc = JSON.parse(mobiledocString);
    post = mobiledocParsers.parse(builder, mobiledoc);
  } else {
    post = new HTMLParser(builder, {plugins}).parse(html);
  }

  return post;
}

/**
 * @return {Post}
 * @private
 */
function parsePostFromText(text, builder, plugins) {
  let parser = new TextParser(builder, {plugins});
  let post = parser.parse(text);
  return post;
}

/**
 * @return {{html: String, text: String}}
 * @private
 */
function getContentFromPasteEvent(event, window) {
  let html = '', text = '';

  let { clipboardData } = event;

  if (clipboardData && clipboardData.getData) {
    html = clipboardData.getData(MIME_TEXT_HTML);
    text = clipboardData.getData(MIME_TEXT_PLAIN);
  } else if (window.clipboardData && window.clipboardData.getData) { // IE
    // The Internet Explorers (including Edge) have a non-standard way of interacting with the
    // Clipboard API (see http://caniuse.com/#feat=clipboard). In short, they expose a global window.clipboardData
    // object instead of the per-event event.clipboardData object on the other browsers.
    html = window.clipboardData.getData(NONSTANDARD_IE_TEXT_TYPE);
  }

  return { html, text };
}

/**
 * @return {{html: String, text: String}}
 * @private
 */
function getContentFromDropEvent(event, logger) {
  let html = '', text = '';

  try {
    html = event.dataTransfer.getData(MIME_TEXT_HTML);
    text = event.dataTransfer.getData(MIME_TEXT_PLAIN);
  } catch (e) {
    // FIXME IE11 does not include any data in the 'text/html' or 'text/plain'
    // mimetypes. It throws an error 'Invalid argument' when attempting to read
    // these properties.
    if (logger) {
      logger.log('Error getting drop data: ', e);
    }
  }

  return { html, text };
}

/**
 * @param {CopyEvent|CutEvent}
 * @param {Editor}
 * @param {Window}
 * @private
 */
function setClipboardData(event, {mobiledoc, html, text}, window) {
  if (mobiledoc && html) {
    html = `<div data-mobiledoc='${JSON.stringify(mobiledoc)}'>${html}</div>`;
  }

  let { clipboardData } = event;
  let { clipboardData: nonstandardClipboardData } = window;

  if (clipboardData && clipboardData.setData) {
    clipboardData.setData(MIME_TEXT_HTML, html);
    clipboardData.setData(MIME_TEXT_PLAIN, text);
  } else if (nonstandardClipboardData && nonstandardClipboardData.setData) {
    // The Internet Explorers (including Edge) have a non-standard way of interacting with the
    // Clipboard API (see http://caniuse.com/#feat=clipboard). In short, they expose a global window.clipboardData
    // object instead of the per-event event.clipboardData object on the other browsers.
    nonstandardClipboardData.setData(NONSTANDARD_IE_TEXT_TYPE, html);
  }
}

/**
 * @param {PasteEvent}
 * @param {{builder: Builder, _parserPlugins: Array}} options
 * @return {Post}
 * @private
 */
function parsePostFromPaste(pasteEvent, {builder, _parserPlugins: plugins}, {targetFormat}={targetFormat:'html'}) {
  let { html, text } = getContentFromPasteEvent(pasteEvent, window);

  if (targetFormat === 'html' && html && html.length) {
    return parsePostFromHTML(html, builder, plugins);
  } else if (text && text.length) {
    return parsePostFromText(text, builder, plugins);
  }
}

/**
 * @param {DropEvent}
 * @param {Editor} editor
 * @param {Object} [options={}] Can pass a logger
 * @return {Post}
 * @private
 */
function parsePostFromDrop(dropEvent, editor, {logger}={}) {
  let { builder, _parserPlugins: plugins } = editor;
  let { html, text } = getContentFromDropEvent(dropEvent, logger);

  if (html && html.length) {
    return parsePostFromHTML(html, builder, plugins);
  } else if (text && text.length) {
    return parsePostFromText(text, builder, plugins);
  }
}

class TextInputHandler {
  constructor(editor) {
    this.editor = editor;
    this._handlers = [];
  }

  register(handler) {
    assert(`Input Handler is not valid`, this._validateHandler(handler));
    this._handlers.push(handler);
  }

  unregister(name) {
    let handlers = this._handlers;
    for (let i=0; i<handlers.length; i++) {
      if (handlers[i].name === name) {
        handlers.splice(i, 1);
      }
    }
  }

  handle(string) {
    let { editor } = this;

    editor.insertText(string);

    let matchedHandler = this._findHandler();
    if (matchedHandler) {
      let [ handler, matches ] = matchedHandler;
      handler.run(editor, matches);
    }
  }

  handleNewLine() {
    let { editor } = this;

    let matchedHandler = this._findHandler(ENTER);
    if (matchedHandler) {
      let [ handler, matches ] = matchedHandler;
      handler.run(editor, matches);
    }
  }

  _findHandler(string = "") {
    let { editor: { range: { head, head: { section } } } } = this;
    let preText = section.textUntil(head) + string;

    for (let i=0; i < this._handlers.length; i++) {
      let handler = this._handlers[i];
      let {text, match} = handler;

      if (text && endsWith(preText, text)) {
        return [handler, [text]];
      } else if (match && match.test(preText)) {
        return [handler, match.exec(preText)];
      }
    }
  }

  _validateHandler(handler) {
    deprecate('Registered input handlers require a "name" property so that they can be unregistered', !!handler.name);
    return !!handler.run &&                        // has `run`
           (!!handler.text || !!handler.match) &&  // and `text` or `match`
           !(!!handler.text && !!handler.match);   // not both `text` and `match`
  }

  destroy() {
    this._handlers = [];
  }
}

let instance;

class SelectionChangeObserver {
  constructor() {
    this.started   = false;
    this.listeners  = [];
    this.selection = {};
  }

  static getInstance() {
    if (!instance) {
      instance = new SelectionChangeObserver();
    }
    return instance;
  }

  static addListener(listener) {
    SelectionChangeObserver.getInstance().addListener(listener);
  }

  addListener(listener) {
    if (this.listeners.indexOf(listener) === -1) {
      this.listeners.push(listener);
      this.start();
    }
  }

  static removeListener(listener) {
    SelectionChangeObserver.getInstance().removeListener(listener);
  }

  removeListener(listener) {
    let index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
      if (this.listeners.length === 0) {
        this.stop();
      }
    }
  }

  start() {
    if (this.started) { return; }
    this.started = true;

    this.poll();
  }

  stop() {
    this.started = false;
    this.selection = {};
  }

  notifyListeners(/* newSelection, prevSelection */) {
    this.listeners.forEach(listener => {
      listener.selectionDidChange(...arguments);
    });
  }

  destroy() {
    this.stop();
    this.listeners = [];
  }

  getSelection() {
    let selection = window.getSelection();
    let { anchorNode, focusNode, anchorOffset, focusOffset } = selection;
    return { anchorNode, focusNode, anchorOffset, focusOffset };
  }

  poll() {
    if (this.started) {
      this.update();
      this.runNext(() => this.poll());
    }
  }

  runNext(fn) {
    window.requestAnimationFrame(fn);
  }

  update() {
    let prevSelection = this.selection;
    let curSelection = this.getSelection();
    if (!this.selectionIsEqual(prevSelection, curSelection)) {
      this.selection = curSelection;
      this.notifyListeners(curSelection, prevSelection);
    }
  }

  selectionIsEqual(s1, s2) {
    return s1.anchorNode === s2.anchorNode &&
      s1.anchorOffset === s2.anchorOffset &&
      s1.focusNode === s2.focusNode &&
      s1.focusOffset === s2.focusOffset;
  }
}

class SelectionManager {
  constructor(editor, callback) {
    this.editor   = editor;
    this.callback = callback;
    this.started  = false;
  }

  start() {
    if (this.started) { return; }

    SelectionChangeObserver.addListener(this);
    this.started = true;
  }

  stop() {
    this.started = false;
    SelectionChangeObserver.removeListener(this);
  }

  destroy() {
    this.stop();
  }

  selectionDidChange() {
    if (this.started) {
      this.callback(...arguments);
    }
  }
}

const ELEMENT_EVENT_TYPES = [
  'keydown', 'keyup', 'cut', 'copy', 'paste', 'keypress', 'drop'
];

class EventManager {
  constructor(editor) {
    this.editor = editor;
    this.logger = editor.loggerFor('event-manager');
    this._textInputHandler = new TextInputHandler(editor);
    this._listeners = [];
    this.modifierKeys = {
      shift: false
    };

    this._selectionManager = new SelectionManager(
      this.editor, this.selectionDidChange.bind(this));
    this.started = true;
  }

  init() {
    let { editor: { element } } = this;
    assert(`Cannot init EventManager without element`, !!element);

    ELEMENT_EVENT_TYPES.forEach(type => {
      this._addListener(element, type);
    });

    this._selectionManager.start();
  }

  start() {
    this.started = true;
  }

  stop() {
    this.started = false;
  }

  registerInputHandler(inputHandler) {
    this._textInputHandler.register(inputHandler);
  }

  unregisterInputHandler(name) {
    this._textInputHandler.unregister(name);
  }

  unregisterAllTextInputHandlers() {
    this._textInputHandler.destroy();
    this._textInputHandler = new TextInputHandler(this.editor);
  }

  _addListener(context, type) {
    assert(`Missing listener for ${type}`, !!this[type]);

    let listener = (event) => this._handleEvent(type, event);
    context.addEventListener(type, listener);
    this._listeners.push([context, type, listener]);
  }

  _removeListeners() {
    this._listeners.forEach(([context, type, listener]) => {
      context.removeEventListener(type, listener);
    });
    this._listeners = [];
  }

  // This is primarily useful for programmatically simulating events on the
  // editor from the tests.
  _trigger(context, type, event) {
    forEach(
      filter(this._listeners, ([_context, _type]) => {
        return _context === context && _type === type;
      }),
      ([context,, listener]) => {
        listener.call(context, event);
      }
    );
  }

  destroy() {
    this._textInputHandler.destroy();
    this._selectionManager.destroy();
    this._removeListeners();
  }

  _handleEvent(type, event) {
    let {target: element} = event;
    if (!this.started) {
      // abort handling this event
      return true;
    }

    if (!this.isElementAddressable(element)) {
      // abort handling this event
      return true;
    }

    this[type](event);
  }

  isElementAddressable(element) {
    return this.editor.cursor.isAddressable(element);
  }

  selectionDidChange(selection /*, prevSelection */) {
    let shouldNotify = true;
    let { anchorNode } = selection;
    if (!this.isElementAddressable(anchorNode)) {
      if (!this.editor.range.isBlank) {
        // Selection changed from something addressable to something
        // not-addressable -- e.g., blur event, user clicked outside editor,
        // etc
        shouldNotify = true;
      } else {
        // selection changes wholly outside the editor should not trigger
        // change notifications
        shouldNotify = false;
      }
    }

    if (shouldNotify) {
      this.editor._readRangeFromDOM();
    }
  }

  keypress(event) {
    let { editor, _textInputHandler } = this;
    if (!editor.hasCursor()) { return; }

    let key = Key.fromEvent(event);
    if (!key.isPrintable()) {
      return;
    } else {
      event.preventDefault();
    }

    _textInputHandler.handle(key.toString());
  }

  keydown(event) {
    let { editor } = this;
    if (!editor.hasCursor()) { return; }
    if (!editor.isEditable) { return; }

    let key = Key.fromEvent(event);
    this._updateModifiersFromKey(key, {isDown:true});

    if (editor.handleKeyCommand(event)) { return; }

    if (editor.post.isBlank) {
      editor._insertEmptyMarkupSectionAtCursor();
    }

    let range = editor.range;

    switch(true) {
      // FIXME This should be restricted to only card/atom boundaries
      case key.isHorizontalArrowWithoutModifiersOtherThanShift(): {
        let newRange;
        if (key.isShift()) {
          newRange = range.extend(key.direction * 1);
        } else {
          newRange = range.move(key.direction);
        }

        editor.selectRange(newRange);
        event.preventDefault();
        break;
      }
      case key.isDelete(): {
        let { direction } = key;
        let unit = 'char';
        if (key.altKey && Browser.isMac()) {
          unit = 'word';
        } else if (key.ctrlKey && !Browser.isMac()) {
          unit = 'word';
        }
        editor.performDelete({direction, unit});
        event.preventDefault();
        break;
      }
      case key.isEnter():
        this._textInputHandler.handleNewLine();
        editor.handleNewline(event);
        break;
      case key.isTab():
        // Handle tab here because it does not fire a `keypress` event
        event.preventDefault();
        this._textInputHandler.handle(key.toString());
        break;
    }
  }

  keyup(event) {
    let { editor } = this;
    if (!editor.hasCursor()) { return; }
    let key = Key.fromEvent(event);
    this._updateModifiersFromKey(key, {isDown:false});
  }

  cut(event) {
    event.preventDefault();

    this.copy(event);
    this.editor.performDelete();
  }

  copy(event) {
    event.preventDefault();

    let { editor, editor: { range, post } } = this;
    post = post.trimTo(range);

    let data = {
      html: editor.serializePost(post, 'html'),
      text: editor.serializePost(post, 'text'),
      mobiledoc: editor.serializePost(post, 'mobiledoc')
    };

    editor.runCallbacks('willCopy', [data]);

    setClipboardData(event, data, window);
  }

  paste(event) {
    event.preventDefault();

    let { editor } = this;
    let range = editor.range;

    if (!range.isCollapsed) {
      editor.performDelete();
    }

    if (editor.post.isBlank) {
      editor._insertEmptyMarkupSectionAtCursor();
    }

    let position = editor.range.head;
    let targetFormat = this.modifierKeys.shift ? 'text' : 'html';
    let pastedPost = parsePostFromPaste(event, editor, {targetFormat});

    editor.run(postEditor => {
      let nextPosition = postEditor.insertPost(position, pastedPost);
      postEditor.setRange(nextPosition);
    });
  }

  drop(event) {
    event.preventDefault();

    let { clientX: x, clientY: y } = event;
    let { editor } = this;

    let position = editor.positionAtPoint(x, y);
    if (!position) {
      this.logger.log('Could not find drop position');
      return;
    }

    let post = parsePostFromDrop(event, editor, {logger: this.logger});
    if (!post) {
      this.logger.log('Could not determine post from drop event');
      return;
    }

    editor.run(postEditor => {
      let nextPosition = postEditor.insertPost(position, post);
      postEditor.setRange(nextPosition);
    });
  }

  _updateModifiersFromKey(key, {isDown}) {
    if (key.isShiftKey()) {
      this.modifierKeys.shift = isDown;
    }
  }

}

/**
 * Used by {@link Editor} to manage its current state (cursor, active markups
 * and active sections).
 * @private
 */
class EditState {
  constructor(editor) {
    this.editor = editor;

    let defaultState = {
      range: Range.blankRange(),
      activeMarkups: [],
      activeSections: [],
      activeSectionTagNames: [],
      activeSectionAttributes: {}
    };

    this.prevState = this.state = defaultState;
  }

  updateRange(newRange) {
    this.prevState = this.state;
    this.state = this._readState(newRange);
  }

  destroy() {
    this.editor = null;
    this.prevState = this.state = null;
  }

  /**
   * @return {Boolean}
   */
  rangeDidChange() {
    let { state: { range } , prevState: {range: prevRange} } = this;

    return !prevRange.isEqual(range);
  }

  /**
   * @return {Boolean} Whether the input mode (active markups or active section tag names)
   * has changed.
   */
  inputModeDidChange() {
    let { state, prevState } = this;
    return (!isArrayEqual(state.activeMarkups, prevState.activeMarkups) ||
            !isArrayEqual(state.activeSectionTagNames, prevState.activeSectionTagNames) ||
            !isArrayEqual(objectToSortedKVArray(state.activeSectionAttributes), objectToSortedKVArray(prevState.activeSectionAttributes)));
  }

  /**
   * @return {Range}
   */
  get range() {
    return this.state.range;
  }

  /**
   * @return {Section[]}
   */
  get activeSections() {
    return this.state.activeSections;
  }


  /**
   * @return {Object}
   */
  get activeSectionAttributes() {
    return this.state.activeSectionAttributes;
  }

  /**
   * @return {Markup[]}
   */
  get activeMarkups() {
    return this.state.activeMarkups;
  }

  /**
   * Update the editor's markup state. This is used when, e.g.,
   * a user types meta+B when the editor has a cursor but no selected text;
   * in this case the editor needs to track that it has an active "b" markup
   * and apply it to the next text the user types.
   */
  toggleMarkupState(markup) {
    if (contains(this.activeMarkups, markup)) {
      this._removeActiveMarkup(markup);
    } else {
      this._addActiveMarkup(markup);
    }
  }

  _readState(range) {
    let state = {
      range,
      activeMarkups:  this._readActiveMarkups(range),
      activeSections: this._readActiveSections(range)
    };
    // Section objects are 'live', so to check that they changed, we
    // need to map their tagNames now (and compare to mapped tagNames later).
    // In addition, to catch changes from ul -> ol, we keep track of the
    // un-nested tag names (otherwise we'd only see li -> li change)
    state.activeSectionTagNames = state.activeSections.map(s => {
      return s.isNested ? s.parent.tagName : s.tagName;
    });
    state.activeSectionAttributes = this._readSectionAttributes(state.activeSections);
    return state;
  }

  _readActiveSections(range) {
    let { head, tail } = range;
    let { editor: { post } } = this;
    if (range.isBlank) {
      return [];
    } else {
      return post.sections.readRange(head.section, tail.section);
    }
  }

  _readActiveMarkups(range) {
    let { editor: { post } } = this;
    return post.markupsInRange(range);
  }

  _readSectionAttributes(sections) {
    return sections.reduce((sectionAttributes, s) => {
      let attributes = s.isNested ? s.parent.attributes : s.attributes;
      Object.keys(attributes || {}).forEach(attrName => {
        let camelizedAttrName = attrName.replace(/^data-md-/, '');
        let attrValue = attributes[attrName];
        sectionAttributes[camelizedAttrName] = sectionAttributes[camelizedAttrName] || [];
        if (!contains(sectionAttributes[camelizedAttrName], attrValue)) {
          sectionAttributes[camelizedAttrName].push(attrValue);
        }
      });
      return sectionAttributes;
    }, {});
  }

  _removeActiveMarkup(markup) {
    let index = this.state.activeMarkups.indexOf(markup);
    this.state.activeMarkups.splice(index, 1);
  }

  _addActiveMarkup(markup) {
    this.state.activeMarkups.push(markup);
  }
}

function addHTMLSpaces(text) {
  let nbsp = '\u00A0';
  return text.replace(/  /g, ' ' + nbsp);
}

function createTextNode(dom, text) {
  return dom.createTextNode(addHTMLSpaces(text));
}

function normalizeTagName$1(tagName) {
  return tagName.toLowerCase();
}

var RENDER_TYPE = 'dom';

var ImageCard$1 = {
  name: 'image',
  type: RENDER_TYPE,
  render({payload, env: {dom}}) {
    let img = dom.createElement('img');
    img.src = payload.src;
    return img;
  }
};

const MARKUP_SECTION_TYPE$1 = 1;
const IMAGE_SECTION_TYPE$1 = 2;
const LIST_SECTION_TYPE$1 = 3;
const CARD_SECTION_TYPE = 10;

const MARKUP_SECTION_TAG_NAMES = [
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pull-quote', 'aside'
].map(normalizeTagName$1);

const MARKUP_SECTION_ELEMENT_NAMES$1 = [
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'aside'
].map(normalizeTagName$1);

const LIST_SECTION_TAG_NAMES = [
  'ul', 'ol'
].map(normalizeTagName$1);

const MARKUP_TYPES = [
  'b', 'i', 'strong', 'em', 'a', 'u', 'sub', 'sup', 's', 'code'
].map(normalizeTagName$1);

function contains$1(array, item) {
  return array.indexOf(item) !== -1;
}

function isValidSectionTagName(tagName, sectionType) {
  tagName = normalizeTagName$1(tagName);

  switch (sectionType) {
    case MARKUP_SECTION_TYPE$1:
      return contains$1(MARKUP_SECTION_TAG_NAMES, tagName);
    case LIST_SECTION_TYPE$1:
      return contains$1(LIST_SECTION_TAG_NAMES, tagName);
    default:
      throw new Error(`Cannot validate tagName for unknown section type "${sectionType}"`);
  }
}

function isMarkupSectionElementName(tagName) {
  tagName = normalizeTagName$1(tagName);
  return contains$1(MARKUP_SECTION_ELEMENT_NAMES$1, tagName);
}

function isValidMarkerType(type) {
  type = normalizeTagName$1(type);
  return contains$1(MARKUP_TYPES, type);
}

function includes(array, detectValue) {
  for (let i=0;i < array.length;i++) {
    let value = array[i];
    if (value === detectValue) {
      return true;
    }
  }
  return false;
}

const PROTOCOL_REGEXP = /^([a-z0-9.+-]+:)/i;

const badProtocols = [
  'javascript:', // jshint ignore:line
  'vbscript:' // jshint ignore:line
];

function getProtocol(url) {
  let matches = url && url.match(PROTOCOL_REGEXP);
  let protocol = (matches && matches[0]) || ':';
  return protocol;
}

function sanitizeHref(url) {
  let protocol = getProtocol(url).toLowerCase();
  if (includes(badProtocols, protocol)) {
    return `unsafe:${url}`;
  }
  return url;
}

/**
 * @param attributes array
 * @return obj with normalized attribute names (lowercased)
 */
function reduceAttributes(attributes) {
  let obj = {};
  for (let i = 0; i < attributes.length; i += 2) {
    let key = attributes[i];
    let val = attributes[i+1];
    obj[key.toLowerCase()] = val;
  }
  return obj;
}

const VALID_ATTRIBUTES$2 = [
  'data-md-text-align'
];

function _isValidAttribute(attr) {
  return VALID_ATTRIBUTES$2.indexOf(attr) !== -1;
}

function handleMarkupSectionAttribute(element, attributeKey, attributeValue) {
  if (!_isValidAttribute(attributeKey)) {
    throw new Error(`Cannot use attribute: ${attributeKey}`);
  }

  element.setAttribute(attributeKey, attributeValue);
}

function defaultSectionElementRenderer(tagName, dom, attrsObj = {}) {
  let element;
  if (isMarkupSectionElementName(tagName)) {
    element = dom.createElement(tagName);

    Object.keys(attrsObj).forEach(k => {
      handleMarkupSectionAttribute(element, k, attrsObj[k]);
    });
  } else {
    element = dom.createElement('div');
    element.setAttribute('class', tagName);
  }

  return element;
}

function sanitizeAttribute(tagName, attrName, attrValue) {
  if (tagName === 'a' && attrName === 'href') {
    return sanitizeHref(attrValue);
  } else {
    return attrValue;
  }
}

function defaultMarkupElementRenderer(tagName, dom, attrsObj) {
  let element = dom.createElement(tagName);
  Object.keys(attrsObj).forEach(attrName => {
    let attrValue = attrsObj[attrName];
    attrValue = sanitizeAttribute(tagName, attrName, attrValue);
    element.setAttribute(attrName, attrValue);
  });
  return element;
}

const MOBILEDOC_VERSION$5 = '0.2.0';

const IMAGE_SECTION_TAG_NAME = 'img';

function validateVersion(version) {
  if (version !== MOBILEDOC_VERSION$5) {
    throw new Error(`Unexpected Mobiledoc version "${version}"`);
  }
}

class Renderer$1 {
  constructor(mobiledoc, options) {
    let {
      cards,
      cardOptions,
      unknownCardHandler,
      markupElementRenderer,
      sectionElementRenderer,
      dom
    } = options;
    let {
      version,
      sections: sectionData
    } = mobiledoc;
    validateVersion(version);

    const [markerTypes, sections] = sectionData;

    this.dom                = dom;
    this.root               = dom.createDocumentFragment();
    this.markerTypes        = markerTypes;
    this.sections           = sections;
    this.cards              = cards;
    this.cardOptions        = cardOptions;
    this.unknownCardHandler = unknownCardHandler || this._defaultUnknownCardHandler;

    this.sectionElementRenderer = {
      '__default__': defaultSectionElementRenderer
    };
    Object.keys(sectionElementRenderer).forEach(key => {
      this.sectionElementRenderer[key.toLowerCase()] = sectionElementRenderer[key];
    });

    this.markupElementRenderer = {
      '__default__': defaultMarkupElementRenderer
    };
    Object.keys(markupElementRenderer).forEach(key => {
      this.markupElementRenderer[key.toLowerCase()] = markupElementRenderer[key];
    });

    this._renderCallbacks    = [];
    this._teardownCallbacks  = [];
    this._renderedChildNodes = [];
  }

  get _defaultUnknownCardHandler() {
    return ({env: {name}}) => {
      throw new Error(`Card "${name}" not found but no unknownCardHandler was registered`);
    };
  }

  render() {
    this.sections.forEach(section => {
      let rendered = this.renderSection(section);
      if (rendered) {
        this.root.appendChild(rendered);
      }
    });
    for (let i = 0; i < this._renderCallbacks.length; i++) {
      this._renderCallbacks[i]();
    }
    // maintain a reference to child nodes so they can be cleaned up later by teardown
    this._renderedChildNodes = [];
    let node = this.root.firstChild;
    while (node) {
      this._renderedChildNodes.push(node);
      node = node.nextSibling;
    }
    return { result: this.root, teardown: () => this.teardown() };
  }

  teardown() {
    for (let i=0; i < this._teardownCallbacks.length; i++) {
      this._teardownCallbacks[i]();
    }
    for (let i=0; i < this._renderedChildNodes.length; i++) {
      let node = this._renderedChildNodes[i];
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }

  renderSection(section) {
    const [type] = section;
    switch (type) {
      case MARKUP_SECTION_TYPE$1:
        return this.renderMarkupSection(section);
      case IMAGE_SECTION_TYPE$1:
        return this.renderImageSection(section);
      case LIST_SECTION_TYPE$1:
        return this.renderListSection(section);
      case CARD_SECTION_TYPE:
        return this.renderCardSection(section);
      default:
        throw new Error(`Cannot render mobiledoc section of type "${type}"`);
    }
  }

  renderMarkersOnElement(element, markers) {
    let elements = [element];
    let currentElement = element;

    let pushElement = (openedElement) => {
      currentElement.appendChild(openedElement);
      elements.push(openedElement);
      currentElement = openedElement;
    };

    for (let i=0, l=markers.length; i<l; i++) {
      let marker = markers[i];
      let [openTypes, closeCount, text] = marker;

      for (let j=0, m=openTypes.length; j<m; j++) {
        let markerType = this.markerTypes[openTypes[j]];
        let [tagName, attrs=[]] = markerType;
        if (isValidMarkerType(tagName)) {
          pushElement(this.renderMarkupElement(tagName, attrs));
        } else {
          closeCount--;
        }
      }

      currentElement.appendChild(createTextNode(this.dom, text));

      for (let j=0, m=closeCount; j<m; j++) {
        elements.pop();
        currentElement = elements[elements.length - 1];
      }
    }
  }

  /**
   * @param attrs Array
   */
  renderMarkupElement(tagName, attrs) {
    tagName = tagName.toLowerCase();
    attrs   = reduceAttributes(attrs);

    let renderer = this.markupElementRendererFor(tagName);
    return renderer(tagName, this.dom, attrs);
  }

  markupElementRendererFor(tagName) {
    return this.markupElementRenderer[tagName] ||
      this.markupElementRenderer.__default__;
  }

  renderListItem(markers) {
    const element = this.dom.createElement('li');
    this.renderMarkersOnElement(element, markers);
    return element;
  }

  renderListSection([type, tagName, listItems]) {
    if (!isValidSectionTagName(tagName, LIST_SECTION_TYPE$1)) {
      return;
    }
    const element = this.dom.createElement(tagName);
    listItems.forEach(li => {
      element.appendChild(this.renderListItem(li));
    });
    return element;
  }

  renderImageSection([type, src]) {
    let element = this.dom.createElement(IMAGE_SECTION_TAG_NAME);
    element.src = src;
    return element;
  }

  findCard(name) {
    for (let i=0; i < this.cards.length; i++) {
      if (this.cards[i].name === name) {
        return this.cards[i];
      }
    }
    if (name === ImageCard$1.name) {
      return ImageCard$1;
    }
    return this._createUnknownCard(name);
  }

  _createUnknownCard(name) {
    return {
      name,
      type: RENDER_TYPE,
      render: this.unknownCardHandler
    };
  }

  _createCardArgument(card, payload={}) {
    let env = {
      name: card.name,
      isInEditor: false,
      dom: this.dom,
      didRender: (callback) => this._registerRenderCallback(callback),
      onTeardown: (callback) => this._registerTeardownCallback(callback)
    };

    let options = this.cardOptions;

    return { env, options, payload };
  }

  _registerRenderCallback(callback) {
    this._renderCallbacks.push(callback);
  }

  _registerTeardownCallback(callback) {
    this._teardownCallbacks.push(callback);
  }

  renderCardSection([type, name, payload]) {
    let card = this.findCard(name);

    let cardArg = this._createCardArgument(card, payload);
    let rendered = card.render(cardArg);

    this._validateCardRender(rendered, card.name);

    return rendered;
  }

  _validateCardRender(rendered, cardName) {
    if (!rendered) {
      return;
    }

    if (typeof rendered !== 'object') {
      throw new Error(`Card "${cardName}" must render ${RENDER_TYPE}, but result was "${rendered}"`);
    }
  }

  renderMarkupSection([type, tagName, markers]) {
    tagName = tagName.toLowerCase();
    if (!isValidSectionTagName(tagName, MARKUP_SECTION_TYPE$1)) {
      return;
    }

    let renderer = this.sectionElementRendererFor(tagName);
    let element = renderer(tagName, this.dom);

    this.renderMarkersOnElement(element, markers);
    return element;
  }

  sectionElementRendererFor(tagName) {
    return this.sectionElementRenderer[tagName] ||
      this.sectionElementRenderer.__default__;
  }
}

const MARKUP_MARKER_TYPE = 0;
const ATOM_MARKER_TYPE = 1;

const MOBILEDOC_VERSION_0_3_0 = '0.3.0';
const MOBILEDOC_VERSION_0_3_1 = '0.3.1';
const MOBILEDOC_VERSION_0_3_2 = '0.3.2';

const IMAGE_SECTION_TAG_NAME$1 = 'img';

function validateVersion$1(version) {
  switch (version) {
    case MOBILEDOC_VERSION_0_3_0:
    case MOBILEDOC_VERSION_0_3_1:
    case MOBILEDOC_VERSION_0_3_2:
      return;
    default:
      throw new Error(`Unexpected Mobiledoc version "${version}"`);
  }
}

class Renderer$2 {
  constructor(mobiledoc, state) {

    let {
      cards,
      cardOptions,
      atoms,
      unknownCardHandler,
      unknownAtomHandler,
      markupElementRenderer,
      sectionElementRenderer,
      dom
    } = state;
    let {
      version,
      sections,
      atoms: atomTypes,
      cards: cardTypes,
      markups: markerTypes
    } = mobiledoc;
    validateVersion$1(version);

    this.dom                = dom;
    this.root               = this.dom.createDocumentFragment();
    this.sections           = sections;
    this.atomTypes          = atomTypes;
    this.cardTypes          = cardTypes;
    this.markerTypes        = markerTypes;
    this.cards              = cards;
    this.atoms              = atoms;
    this.cardOptions        = cardOptions;
    this.unknownCardHandler = unknownCardHandler || this._defaultUnknownCardHandler;
    this.unknownAtomHandler = unknownAtomHandler || this._defaultUnknownAtomHandler;

    this.sectionElementRenderer = {
      '__default__': defaultSectionElementRenderer
    };
    Object.keys(sectionElementRenderer).forEach(key => {
      this.sectionElementRenderer[key.toLowerCase()] = sectionElementRenderer[key];
    });

    this.markupElementRenderer = {
      '__default__': defaultMarkupElementRenderer
    };
    Object.keys(markupElementRenderer).forEach(key => {
      this.markupElementRenderer[key.toLowerCase()] = markupElementRenderer[key];
    });

    this._renderCallbacks = [];
    this._teardownCallbacks  = [];
  }

  get _defaultUnknownCardHandler() {
    return ({env: {name}}) => {
      throw new Error(`Card "${name}" not found but no unknownCardHandler was registered`);
    };
  }

  get _defaultUnknownAtomHandler() {
    return ({env: {name}}) => {
      throw new Error(`Atom "${name}" not found but no unknownAtomHandler was registered`);
    };
  }

  render() {
    this.sections.forEach(section => {
      let rendered = this.renderSection(section);
      if (rendered) {
        this.root.appendChild(rendered);
      }
    });
    for (let i=0; i < this._renderCallbacks.length; i++) {
      this._renderCallbacks[i]();
    }
    // maintain a reference to child nodes so they can be cleaned up later by teardown
    this._renderedChildNodes = Array.prototype.slice.call(this.root.childNodes);
    return { result: this.root, teardown: () => this.teardown() };
  }

  teardown() {
    for (let i=0; i < this._teardownCallbacks.length; i++) {
      this._teardownCallbacks[i]();
    }
    for (let i=0; i < this._renderedChildNodes.length; i++) {
      let node = this._renderedChildNodes[i];
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }

  renderSection(section) {
    const [type] = section;
    switch (type) {
      case MARKUP_SECTION_TYPE$1:
        return this.renderMarkupSection(section);
      case IMAGE_SECTION_TYPE$1:
        return this.renderImageSection(section);
      case LIST_SECTION_TYPE$1:
        return this.renderListSection(section);
      case CARD_SECTION_TYPE:
        return this.renderCardSection(section);
      default:
        throw new Error(`Cannot render mobiledoc section of type "${type}"`);
    }
  }

  renderMarkersOnElement(element, markers) {
    let elements = [element];
    let currentElement = element;

    let pushElement = (openedElement) => {
      currentElement.appendChild(openedElement);
      elements.push(openedElement);
      currentElement = openedElement;
    };

    for (let i=0, l=markers.length; i<l; i++) {
      let marker = markers[i];
      let [type, openTypes, closeCount, value] = marker;

      for (let j=0, m=openTypes.length; j<m; j++) {
        let markerType = this.markerTypes[openTypes[j]];
        let [tagName, attrs=[]] = markerType;

        if (isValidMarkerType(tagName)) {
          pushElement(this.renderMarkupElement(tagName, attrs));
        } else {
          closeCount--;
        }
      }

      switch (type) {
        case MARKUP_MARKER_TYPE:
          currentElement.appendChild(createTextNode(this.dom, value));
          break;
        case ATOM_MARKER_TYPE:
          currentElement.appendChild(this._renderAtom(value));
          break;
        default:
          throw new Error(`Unknown markup type (${type})`);
      }

      for (let j=0, m=closeCount; j<m; j++) {
        elements.pop();
        currentElement = elements[elements.length - 1];
      }
    }
  }

  /**
   * @param attrs Array
   */
  renderMarkupElement(tagName, attrs) {
    tagName = tagName.toLowerCase();
    attrs   = reduceAttributes(attrs);

    let renderer = this.markupElementRendererFor(tagName);
    return renderer(tagName, this.dom, attrs);
  }

  markupElementRendererFor(tagName) {
    return this.markupElementRenderer[tagName] ||
      this.markupElementRenderer.__default__;
  }

  renderListItem(markers) {
    const element = this.dom.createElement('li');
    this.renderMarkersOnElement(element, markers);
    return element;
  }

  renderListSection([type, tagName, listItems]) {
    if (!isValidSectionTagName(tagName, LIST_SECTION_TYPE$1)) {
      return;
    }
    const element = this.dom.createElement(tagName);
    listItems.forEach(li => {
      element.appendChild(this.renderListItem(li));
    });
    return element;
  }

  renderImageSection([type, src]) {
    let element = this.dom.createElement(IMAGE_SECTION_TAG_NAME$1);
    element.src = src;
    return element;
  }

  findCard(name) {
    for (let i=0; i < this.cards.length; i++) {
      if (this.cards[i].name === name) {
        return this.cards[i];
      }
    }
    if (name === ImageCard$1.name) {
      return ImageCard$1;
    }
    return this._createUnknownCard(name);
  }

  _findCardByIndex(index) {
    let cardType = this.cardTypes[index];
    if (!cardType) {
      throw new Error(`No card definition found at index ${index}`);
    }

    let [ name, payload ] = cardType;
    let card = this.findCard(name);

    return {
      card,
      payload
    };
  }

  _createUnknownCard(name) {
    return {
      name,
      type: RENDER_TYPE,
      render: this.unknownCardHandler
    };
  }

  _createCardArgument(card, payload={}) {
    let env = {
      name: card.name,
      isInEditor: false,
      dom: this.dom,
      didRender: (callback) => this._registerRenderCallback(callback),
      onTeardown: (callback) => this._registerTeardownCallback(callback)
    };

    let options = this.cardOptions;

    return { env, options, payload };
  }

  _registerTeardownCallback(callback) {
    this._teardownCallbacks.push(callback);
  }

  _registerRenderCallback(callback) {
    this._renderCallbacks.push(callback);
  }

  renderCardSection([type, index]) {
    let { card, payload } = this._findCardByIndex(index);

    let cardArg = this._createCardArgument(card, payload);
    let rendered = card.render(cardArg);

    this._validateCardRender(rendered, card.name);

    return rendered;
  }

  _validateCardRender(rendered, cardName) {
    if (!rendered) {
      return;
    }

    if (typeof rendered !== 'object') {
      throw new Error(`Card "${cardName}" must render ${RENDER_TYPE}, but result was "${rendered}"`);
    }
  }

  findAtom(name) {
    for (let i=0; i < this.atoms.length; i++) {
      if (this.atoms[i].name === name) {
        return this.atoms[i];
      }
    }
    return this._createUnknownAtom(name);
  }

  _createUnknownAtom(name) {
    return {
      name,
      type: RENDER_TYPE,
      render: this.unknownAtomHandler
    };
  }

  _createAtomArgument(atom, value, payload) {
    let env = {
      name: atom.name,
      isInEditor: false,
      dom: this.dom,
      onTeardown: (callback) => this._registerTeardownCallback(callback)
    };

    let options = this.cardOptions;

    return { env, options, value, payload };
  }

  _validateAtomRender(rendered, atomName) {
    if (!rendered) {
      return;
    }

    if (typeof rendered !== 'object') {
      throw new Error(`Atom "${atomName}" must render ${RENDER_TYPE}, but result was "${rendered}"`);
    }
  }

  _findAtomByIndex(index) {
    let atomType = this.atomTypes[index];
    if (!atomType) {
      throw new Error(`No atom definition found at index ${index}`);
    }

    let [ name, value, payload ] = atomType;
    let atom = this.findAtom(name);

    return {
      atom,
      value,
      payload
    };
  }

  _renderAtom(index) {
    let { atom, value, payload } = this._findAtomByIndex(index);

    let atomArg = this._createAtomArgument(atom, value, payload);
    let rendered = atom.render(atomArg);

    this._validateAtomRender(rendered, atom.name);

    return rendered || createTextNode(this.dom, '');
  }

  renderMarkupSection([type, tagName, markers, attributes = []]) {
    tagName = tagName.toLowerCase();
    if (!isValidSectionTagName(tagName, MARKUP_SECTION_TYPE$1)) {
      return;
    }

    let attrsObj = reduceAttributes(attributes);
    let renderer = this.sectionElementRendererFor(tagName);
    let element = renderer(tagName, this.dom, attrsObj);

    this.renderMarkersOnElement(element, markers);
    return element;
  }

  sectionElementRendererFor(tagName) {
    return this.sectionElementRenderer[tagName] ||
      this.sectionElementRenderer.__default__;
  }
}

/**
 * runtime DOM renderer
 * renders a mobiledoc to DOM
 *
 * input: mobiledoc
 * output: DOM
 */

 function validateCards$1(cards) {
   if (!Array.isArray(cards)) {
     throw new Error('`cards` must be passed as an array');
   }
   for (let i=0; i < cards.length; i++) {
     let card = cards[i];
     if (card.type !== RENDER_TYPE) {
       throw new Error(`Card "${card.name}" must be of type "${RENDER_TYPE}", was "${card.type}"`);
     }
     if (!card.render) {
       throw new Error(`Card "${card.name}" must define \`render\``);
     }
   }
 }

 function validateAtoms$1(atoms) {
   if (!Array.isArray(atoms)) {
     throw new Error('`atoms` must be passed as an array');
   }
   for (let i=0; i < atoms.length; i++) {
     let atom = atoms[i];
     if (atom.type !== RENDER_TYPE) {
       throw new Error(`Atom "${atom.name}" must be type "${RENDER_TYPE}", was "${atom.type}"`);
     }
     if (!atom.render) {
       throw new Error(`Atom "${atom.name}" must define \`render\``);
     }
   }
 }

 class RendererFactory {
   constructor({
     cards=[],
     atoms=[],
     cardOptions={},
     unknownCardHandler,
     unknownAtomHandler,
     markupElementRenderer={},
     sectionElementRenderer={},
     dom,
     markupSanitizer=null
   }={}) {
     validateCards$1(cards);
     validateAtoms$1(atoms);

     if (!dom) {
       if (typeof window === 'undefined') {
         throw new Error('A `dom` option must be provided to the renderer when running without window.document');
       }
       dom = window.document;
     }

     this.options = {
       cards,
       atoms,
       cardOptions,
       unknownCardHandler,
       unknownAtomHandler,
       markupElementRenderer,
       sectionElementRenderer,
       dom,
       markupSanitizer
     };
   }

   render(mobiledoc) {
     let { version } = mobiledoc;
     switch (version) {
       case MOBILEDOC_VERSION$5:
       case undefined:
       case null:
         return new Renderer$1(mobiledoc, this.options).render();
       case MOBILEDOC_VERSION_0_3_0:
       case MOBILEDOC_VERSION_0_3_1:
       case MOBILEDOC_VERSION_0_3_2:
         return new Renderer$2(mobiledoc, this.options).render();
       default:
         throw new Error(`Unexpected Mobiledoc version "${version}"`);
     }
   }
 }

var ImageCard$2 = {
  name: 'image-card',
  type: 'text',
  render() {}
};

var RENDER_TYPE$1 = 'text';

const MARKUP_SECTION_TYPE$2 = 1;
const IMAGE_SECTION_TYPE$2 = 2;
const LIST_SECTION_TYPE$2 = 3;
const CARD_SECTION_TYPE$1 = 10;

/**
 * runtime Text renderer
 * renders a mobiledoc to Text
 *
 * input: mobiledoc
 * output: Text (string)
 */

const LINE_BREAK = '\n';

const MOBILEDOC_VERSION$6 = '0.2.0';

function validateVersion$2(version) {
  if (version !== MOBILEDOC_VERSION$6) {
    throw new Error(`Unexpected Mobiledoc version "${version}"`);
  }
}

class Renderer$3 {
  constructor(mobiledoc, state) {
    let { cards, cardOptions, atoms, unknownCardHandler } = state;
    let { version, sections: sectionData } = mobiledoc;
    validateVersion$2(version);

    let [, sections] = sectionData;

    this.root               = [];
    this.sections           = sections;
    this.cards              = cards;
    this.atoms              = atoms;
    this.cardOptions        = cardOptions;
    this.unknownCardHandler = unknownCardHandler || this._defaultUnknownCardHandler;

    this._teardownCallbacks  = [];
  }

  render() {
    this.sections.forEach(section => {
      this.root.push(this.renderSection(section));
    });

    let result = this.root.join(LINE_BREAK);
    return { result, teardown: () => this.teardown() };
  }

  teardown() {
    for (let i=0; i < this._teardownCallbacks.length; i++) {
      this._teardownCallbacks[i]();
    }
  }

  get _defaultUnknownCardHandler() {
    return () => {
      // for the text renderer, a missing card is a no-op
    };
  }

  renderSection(section) {
    const [type] = section;
    switch (type) {
      case MARKUP_SECTION_TYPE$2:
        return  this.renderMarkupSection(section);
      case IMAGE_SECTION_TYPE$2:
        return this.renderImageSection(section);
      case LIST_SECTION_TYPE$2:
        return this.renderListSection(section);
      case CARD_SECTION_TYPE$1:
        return this.renderCardSection(section);
      default:
        throw new Error('Unimplemented renderer for type ' + type);
    }
  }

  renderImageSection() {
    return '';
  }

  renderListSection([type, tagName, items]) {
    return items.map(
      li => this.renderListItem(li)
    ).join(LINE_BREAK);
  }

  renderListItem(markers) {
    return this.renderMarkers(markers);
  }

  findCard(name) {
    for (let i=0; i < this.cards.length; i++) {
      if (this.cards[i].name === name) {
        return this.cards[i];
      }
    }
    if (name === ImageCard$2.name) {
      return ImageCard$2;
    }
    return this._createUnknownCard(name);
  }

  _createUnknownCard(name) {
    return {
      name,
      type: RENDER_TYPE$1,
      render: this.unknownCardHandler
    };
  }

  renderCardSection([type, name, payload]) {
    let card = this.findCard(name);

    let cardArg = this._createCardArgument(card, payload);
    let rendered = card.render(cardArg);

    this._validateCardRender(rendered, card.name);

    return rendered || '';
  }

  _validateCardRender(rendered, cardName) {
    if (!rendered) {
      return;
    }

    if (typeof rendered !== 'string') {
      throw new Error(`Card "${cardName}" must render ${RENDER_TYPE$1}, but result was ${typeof rendered}"`);
    }
  }

  _registerTeardownCallback(callback) {
    this._teardownCallbacks.push(callback);
  }

  _createCardArgument(card, payload={}) {
    let env = {
      name: card.name,
      isInEditor: false,
      onTeardown: (callback) => this._registerTeardownCallback(callback)
    };

    let options = this.cardOptions;

    return { env, options, payload };
  }

  renderMarkupSection([type, tagName, markers]) {
    return this.renderMarkers(markers);
  }

  renderMarkers(markers) {
    let str = '';
    markers.forEach(m => {
      let [, , text] = m;
      str += text;
    });
    return str;
  }
}

const MARKUP_MARKER_TYPE$1 = 0;
const ATOM_MARKER_TYPE$1 = 1;

/**
 * runtime Text renderer
 * renders a mobiledoc to Text
 *
 * input: mobiledoc
 * output: Text (string)
 */

const LINE_BREAK$1 = '\n';

const MOBILEDOC_VERSION_0_3 = '0.3.0';
const MOBILEDOC_VERSION_0_3_1$1 = '0.3.1';
const MOBILEDOC_VERSION_0_3_2$1 = '0.3.2';

function validateVersion$3(version) {
  if (
    version !== MOBILEDOC_VERSION_0_3 &&
    version !== MOBILEDOC_VERSION_0_3_1$1 &&
    version !== MOBILEDOC_VERSION_0_3_2$1
  ) {
    throw new Error(`Unexpected Mobiledoc version "${version}"`);
  }
}

class Renderer$4 {
  constructor(mobiledoc, state) {

    let { cards, cardOptions, atoms, unknownCardHandler, unknownAtomHandler } = state;
    let { version, sections, atoms: atomTypes, cards: cardTypes } = mobiledoc;
    validateVersion$3(version);

    this.root               = [];
    this.sections           = sections;
    this.atomTypes          = atomTypes;
    this.cardTypes          = cardTypes;
    this.cards              = cards;
    this.atoms              = atoms;
    this.cardOptions        = cardOptions;
    this.unknownCardHandler = unknownCardHandler || this._defaultUnknownCardHandler;
    this.unknownAtomHandler = unknownAtomHandler || this._defaultUnknownAtomHandler;

    this._teardownCallbacks  = [];
  }

  render() {
    this.sections.forEach(section => {
      this.root.push(this.renderSection(section));
    });

    let result = this.root.join(LINE_BREAK$1);
    return { result, teardown: () => this.teardown() };
  }

  teardown() {
    for (let i=0; i < this._teardownCallbacks.length; i++) {
      this._teardownCallbacks[i]();
    }
  }

  get _defaultUnknownCardHandler() {
    return () => {
      // for the text renderer, a missing card is a no-op
    };
  }

  get _defaultUnknownAtomHandler() {
    return ({ value }) => {
      return value || '';
    };
  }

  renderSection(section) {
    const [type] = section;
    switch (type) {
      case MARKUP_SECTION_TYPE$2:
        return  this.renderMarkupSection(section);
      case IMAGE_SECTION_TYPE$2:
        return this.renderImageSection(section);
      case LIST_SECTION_TYPE$2:
        return this.renderListSection(section);
      case CARD_SECTION_TYPE$1:
        return this.renderCardSection(section);
      default:
        throw new Error('Unimplemented renderer for type ' + type);
    }
  }

  renderImageSection() {
    return '';
  }

  renderListSection([type, tagName, items]) {
    return items.map(
      li => this.renderListItem(li)
    ).join(LINE_BREAK$1);
  }

  renderListItem(markers) {
    return this.renderMarkers(markers);
  }

  findCard(name) {
    for (let i=0; i < this.cards.length; i++) {
      if (this.cards[i].name === name) {
        return this.cards[i];
      }
    }
    if (name === ImageCard$2.name) {
      return ImageCard$2;
    }
    return this._createUnknownCard(name);
  }

  _findCardByIndex(index) {
    let cardType = this.cardTypes[index];
    if (!cardType) {
      throw new Error(`No card definition found at index ${index}`);
    }

    let [ name, payload ] = cardType;
    let card = this.findCard(name);

    return {
      card,
      payload
    };
  }

  _createUnknownCard(name) {
    return {
      name,
      type: RENDER_TYPE$1,
      render: this.unknownCardHandler
    };
  }

  renderCardSection([type, index]) {
    let { card, payload } = this._findCardByIndex(index);

    let cardArg = this._createCardArgument(card, payload);
    let rendered = card.render(cardArg);

    this._validateCardRender(rendered, card.name);

    return rendered || '';
  }

  _validateCardRender(rendered, cardName) {
    if (!rendered) {
      return;
    }

    if (typeof rendered !== 'string') {
      throw new Error(`Card "${cardName}" must render ${RENDER_TYPE$1}, but result was ${typeof rendered}"`);
    }
  }

  _registerTeardownCallback(callback) {
    this._teardownCallbacks.push(callback);
  }

  _createCardArgument(card, payload={}) {
    let env = {
      name: card.name,
      isInEditor: false,
      onTeardown: (callback) => this._registerTeardownCallback(callback)
    };

    let options = this.cardOptions;

    return { env, options, payload };
  }

  renderMarkupSection([type, tagName, markers]) {
    return this.renderMarkers(markers);
  }

  findAtom(name) {
    for (let i=0; i < this.atoms.length; i++) {
      if (this.atoms[i].name === name) {
        return this.atoms[i];
      }
    }
    return this._createUnknownAtom(name);
  }

  _createUnknownAtom(name) {
    return {
      name,
      type: RENDER_TYPE$1,
      render: this.unknownAtomHandler
    };
  }

  _createAtomArgument(atom, value, payload) {
    let env = {
      name: atom.name,
      onTeardown: (callback) => this._registerTeardownCallback(callback)
    };

    let options = this.cardOptions;

    return { env, options, value, payload };
  }

  _validateAtomRender(rendered, atomName) {
    if (!rendered) {
      return;
    }

    if (typeof rendered !== 'string') {
      throw new Error(`Atom "${atomName}" must render ${RENDER_TYPE$1}, but result was ${typeof rendered}"`);
    }
  }

  _findAtomByIndex(index) {
    let atomType = this.atomTypes[index];
    if (!atomType) {
      throw new Error(`No atom definition found at index ${index}`);
    }

    let [ name, value, payload ] = atomType;
    let atom = this.findAtom(name);

    return {
      atom,
      value,
      payload
    };
  }

  _renderAtom(index) {
    let { atom, value, payload } = this._findAtomByIndex(index);

    let atomArg = this._createAtomArgument(atom, value, payload);
    let rendered = atom.render(atomArg);

    this._validateAtomRender(rendered, atom.name);

    return rendered || '';
  }

  renderMarkers(markers) {
    let str = '';
    markers.forEach(m => {
      let [type, , , value] = m;
      switch (type) {
        case MARKUP_MARKER_TYPE$1:
          str += value;
          break;
        case ATOM_MARKER_TYPE$1:
          str += this._renderAtom(value);
          break;
        default:
          throw new Error(`Unknown markup type (${type})`);
      }
    });
    return str;
  }
}

/**
 * runtime Text renderer
 * renders a mobiledoc to Text
 *
 * input: mobiledoc
 * output: Text (string)
 */

function validateCards$2(cards) {
  if (!Array.isArray(cards)) {
    throw new Error('`cards` must be passed as an array');
  }
  for (let i=0; i < cards.length; i++) {
    let card = cards[i];
    if (card.type !== RENDER_TYPE$1) {
      throw new Error(`Card "${card.name}" must be type "${RENDER_TYPE$1}", was "${card.type}"`);
    }
    if (!card.render) {
      throw new Error(`Card "${card.name}" must define \`render\``);
    }
  }
}

function validateAtoms$2(atoms) {
  if (!Array.isArray(atoms)) {
    throw new Error('`atoms` must be passed as an array');
  }
  for (let i=0; i < atoms.length; i++) {
    let atom = atoms[i];
    if (atom.type !== RENDER_TYPE$1) {
      throw new Error(`Atom "${atom.name}" must be type "${RENDER_TYPE$1}", was "${atom.type}"`);
    }
    if (!atom.render) {
      throw new Error(`Atom "${atom.name}" must define \`render\``);
    }
  }
}

class RendererFactory$1 {
  constructor({cards, atoms, cardOptions, unknownCardHandler, unknownAtomHandler}={}) {
    cards = cards || [];
    validateCards$2(cards);
    atoms = atoms || [];
    validateAtoms$2(atoms);
    cardOptions = cardOptions || {};

    this.state = {cards, atoms, cardOptions, unknownCardHandler, unknownAtomHandler};
  }

  render(mobiledoc) {
    let { version } = mobiledoc;
    switch (version) {
      case MOBILEDOC_VERSION$6:
        return new Renderer$3(mobiledoc, this.state).render();
      case undefined:
      case null:
      case MOBILEDOC_VERSION_0_3:
      case MOBILEDOC_VERSION_0_3_1$1:
      case MOBILEDOC_VERSION_0_3_2$1:
        return new Renderer$4(mobiledoc, this.state).render();
      default:
        throw new Error(`Unexpected Mobiledoc version "${version}"`);
    }
  }
}

class Logger {
  constructor(type, manager) {
    this.type = type;
    this.manager = manager;
  }

  isEnabled() {
    return this.manager.isEnabled(this.type);
  }

  log(...args) {
    args.unshift(`[${this.type}]`);
    if (this.isEnabled()) {
      window.console.log(...args);
    }
  }
}

class LogManager {
  constructor() {
    this.enabledTypes = [];
    this.allEnabled = false;
  }

  for(type) {
    return new Logger(type, this);
  }

  enableAll() {
    this.allEnabled = true;
  }

  enableTypes(types) {
    this.enabledTypes = this.enabledTypes.concat(types);
  }

  disable() {
    this.enabledTypes = [];
    this.allEnabled = false;
  }

  isEnabled(type) {
    return this.allEnabled || this.enabledTypes.indexOf(type) !== -1;
  }
}

const defaults = {
  placeholder: 'Write here...',
  spellcheck: true,
  autofocus: true,
  showLinkTooltips: true,
  undoDepth: 5,
  undoBlockTimeout: 5000, // ms for an undo event
  cards: [],
  atoms: [],
  cardOptions: {},
  unknownCardHandler: ({env}) => {
    throw new MobiledocError(`Unknown card encountered: ${env.name}`);
  },
  unknownAtomHandler: ({env}) => {
    throw new MobiledocError(`Unknown atom encountered: ${env.name}`);
  },
  mobiledoc: null,
  html: null,
  tooltipPlugin: DEFAULT_TOOLTIP_PLUGIN
};

const CALLBACK_QUEUES$1 = {
  DID_UPDATE: 'didUpdate',
  WILL_RENDER: 'willRender',
  DID_RENDER: 'didRender',
  WILL_DELETE: 'willDelete',
  DID_DELETE: 'didDelete',
  WILL_HANDLE_NEWLINE: 'willHandleNewline',
  CURSOR_DID_CHANGE: 'cursorDidChange',
  DID_REPARSE: 'didReparse',
  POST_DID_CHANGE: 'postDidChange',
  INPUT_MODE_DID_CHANGE: 'inputModeDidChange',
  WILL_COPY: 'willCopy'
};

/**
 * The Editor is a core component of mobiledoc-kit. After instantiating
 * an editor, use {@link Editor#render} to display the editor on the web page.
 *
 * An editor uses a {@link Post} internally to represent the displayed document.
 * The post can be serialized as mobiledoc using {@link Editor#serialize}. Mobiledoc
 * is the transportable "over-the-wire" format (JSON) that is suited for persisting
 * and sharing between editors and renderers (for display, e.g.), whereas the Post
 * model is better suited for programmatic editing.
 *
 * The editor will call registered callbacks for certain state changes. These are:
 *   * {@link Editor#cursorDidChange} -- The cursor position or selection changed.
 *   * {@link Editor#postDidChange} -- The contents of the post changed due to user input or
 *     programmatic editing. This hook can be used with {@link Editor#serialize}
 *     to auto-save a post as it is being edited.
 *   * {@link Editor#inputModeDidChange} -- The active section(s) or markup(s) at the current cursor
 *     position or selection have changed. This hook can be used with
 *     {@link Editor#activeMarkups} and {@link Editor#activeSections} to implement
 *     a custom toolbar.
 *   * {@link Editor#onTextInput} -- Register callbacks when the user enters text
 *     that matches a given string or regex.
 *   * {@link Editor#beforeToggleMarkup} -- Register callbacks that will be run before
 *     applying changes from {@link Editor#toggleMarkup}
 */
class Editor {
  /**
   * @param {Object} [options]
   * @param {Object} [options.mobiledoc] The mobiledoc to load into the editor.
   *        Supersedes `options.html`.
   * @param {String|DOM} [options.html] The html (as a string or DOM fragment)
   *        to parse and load into the editor.
   *        Will be ignored if `options.mobiledoc` is also passed.
   * @param {Array} [options.parserPlugins=[]]
   * @param {Array} [options.cards=[]] The cards that the editor may render.
   * @param {Array} [options.atoms=[]] The atoms that the editor may render.
   * @param {Function} [options.unknownCardHandler] Invoked by the editor's renderer
   *        whenever it encounters an unknown card.
   * @param {Function} [options.unknownAtomHandler] Invoked by the editor's renderer
   *        whenever it encounters an unknown atom.
   * @param {String} [options.placeholder] Default text to show before user starts typing.
   * @param {Boolean} [options.spellcheck=true] Whether to enable spellcheck
   * @param {Boolean} [options.autofocus=true] Whether to focus the editor when it is first rendered.
   * @param {Boolean} [options.showLinkTooltips=true] Whether to show the url tooltip for links
   * @param {number} [options.undoDepth=5] How many undo levels will be available.
   *        Set to 0 to disable undo/redo functionality.
   * @return {Editor}
   * @public
   */
  constructor(options={}) {
    assert('editor create accepts an options object. For legacy usage passing an element for the first argument, consider the `html` option for loading DOM or HTML posts. For other cases call `editor.render(domNode)` after editor creation',
          (options && !options.nodeType));
    this._views = [];
    this.isEditable = true;
    this._parserPlugins = options.parserPlugins || [];

    // FIXME: This should merge onto this.options
    mergeWithOptions(this, defaults, options);
    this.cards.push(ImageCard);

    DEFAULT_KEY_COMMANDS.forEach(kc => this.registerKeyCommand(kc));

    this._logManager = new LogManager();
    this._parser   = new DOMParser(this.builder);
    let {cards, atoms, unknownCardHandler, unknownAtomHandler, cardOptions} = this;
    this._renderer = new Renderer(this, cards, atoms, unknownCardHandler, unknownAtomHandler, cardOptions);

    this.post = this.loadPost();
    this._renderTree = new RenderTree(this.post);

    this._editHistory = new EditHistory(this, this.undoDepth, this.undoBlockTimeout);
    this._eventManager = new EventManager(this);
    this._mutationHandler = new MutationHandler(this);
    this._editState = new EditState(this);
    this._callbacks = new LifecycleCallbacks(values(CALLBACK_QUEUES$1));
    this._beforeHooks = { toggleMarkup: [] };

    DEFAULT_TEXT_INPUT_HANDLERS.forEach(handler => this.onTextInput(handler));

    this.hasRendered = false;
  }

  /**
   * Turns on verbose logging for the editor.
   * @param {Array} [logTypes=[]] If present, only the given log types will be logged.
   * @public
   */
  enableLogging(logTypes=[]) {
    if (logTypes.length === 0) {
      this._logManager.enableAll();
    } else {
      this._logManager.enableTypes(logTypes);
    }
  }

  /**
   * Disable all logging
   * @public
   */
  disableLogging() {
    this._logManager.disable();
  }

  /**
   * @private
   */
  loggerFor(type) {
    return this._logManager.for(type);
  }

  /**
   * The editor's instance of a post node builder.
   * @type {PostNodeBuilder}
   */
  get builder() {
    if (!this._builder) { this._builder = new PostNodeBuilder(); }
    return this._builder;
  }

  loadPost() {
    let {mobiledoc, html} = this;
    if (mobiledoc) {
      return mobiledocParsers.parse(this.builder, mobiledoc);
    } else if (html) {
      if (typeof html === 'string') {
        let options = {plugins: this._parserPlugins};
        return new HTMLParser(this.builder, options).parse(this.html);
      } else {
        let dom = html;
        return this._parser.parse(dom);
      }
    } else {
      return this.builder.createPost([this.builder.createMarkupSection()]);
    }
  }

  rerender() {
    let postRenderNode = this.post.renderNode;

    // if we haven't rendered this post's renderNode before, mark it dirty
    if (!postRenderNode.element) {
      assert('Must call `render` before `rerender` can be called',
             this.hasRendered);
      postRenderNode.element = this.element;
      postRenderNode.markDirty();
    }

    this.runCallbacks(CALLBACK_QUEUES$1.WILL_RENDER);
    this._mutationHandler.suspendObservation(() => {
      this._renderer.render(this._renderTree);
    });
    this.runCallbacks(CALLBACK_QUEUES$1.DID_RENDER);
  }

  /**
   * @param {Element} element The DOM element to render into.
   *        Its contents will be replaced by the editor's rendered post.
   * @public
   */
  render(element) {
    assert('Cannot render an editor twice. Use `rerender` to update the ' +
           'rendering of an existing editor instance.',
           !this.hasRendered);

    element.spellcheck = this.spellcheck;

    clearChildNodes(element);

    this.element = element;

    if (this.showLinkTooltips) {
      this._addTooltip();
    }

    // A call to `run` will trigger the didUpdatePostCallbacks hooks with a
    // postEditor.
    this.run(() => {});

    // Only set `hasRendered` to true after calling `run` to ensure that
    // no cursorDidChange or other callbacks get fired before the editor is
    // done rendering
    this.hasRendered = true;
    this.rerender();

    this._mutationHandler.init();
    this._eventManager.init();

    if (this.isEditable === false) {
      this.disableEditing();
    } else {
      this.enableEditing();
    }

    if (this.autofocus) {
      this.selectRange(this.post.headPosition());
    }
  }

  _addTooltip() {
    this.addView(new Tooltip({
      rootElement: this.element,
      showForTag: 'a',
      editor: this
    }));
  }

  get keyCommands() {
    if (!this._keyCommands) { this._keyCommands = []; }
    return this._keyCommands;
  }

  /**
   * @param {Object} keyCommand The key command to register. It must specify a
   * modifier key (meta, ctrl, etc), a string representing the ascii key, and
   * a `run` method that will be passed the editor instance when the key command
   * is invoked
   * @public
   */
  registerKeyCommand(rawKeyCommand) {
    const keyCommand = buildKeyCommand(rawKeyCommand);
    assert('Key Command is not valid', validateKeyCommand(keyCommand));
    this.keyCommands.unshift(keyCommand);
  }

  /**
   * @param {String} name If the keyCommand event has a name attribute it can be removed.
   * @public
   */
  unregisterKeyCommands(name) {
    for(let i = this.keyCommands.length-1; i > -1; i--) {
      let keyCommand = this.keyCommands[i];

      if(keyCommand.name === name) {
        this.keyCommands.splice(i,1);
      }
    }
  }

  /**
   * Convenience for {@link PostEditor#deleteAtPosition}. Deletes and puts the
   * cursor in the new position.
   * @public
   */
  deleteAtPosition(position, direction, {unit}) {
    this.run(postEditor => {
      let nextPosition = postEditor.deleteAtPosition(position, direction, {unit});
      postEditor.setRange(nextPosition);
    });
  }

  /**
   * Convenience for {@link PostEditor#deleteRange}. Deletes and puts the
   * cursor in the new position.
   * @param {Range} range
   * @public
   */
  deleteRange(range) {
    this.run(postEditor => {
      let nextPosition = postEditor.deleteRange(range);
      postEditor.setRange(nextPosition);
    });
  }

  /**
   * @private
   */
  performDelete({direction, unit}={direction: DIRECTION.BACKWARD, unit: 'char'}) {
    let { range } = this;

    this.runCallbacks(CALLBACK_QUEUES$1.WILL_DELETE, [range, direction, unit]);
    if (range.isCollapsed) {
      this.deleteAtPosition(range.head, direction, {unit});
    } else {
      this.deleteRange(range);
    }
    this.runCallbacks(CALLBACK_QUEUES$1.DID_DELETE, [range, direction, unit]);
  }

  handleNewline(event) {
    if (!this.hasCursor()) { return; }

    event.preventDefault();

    let { range } = this;
    this.run(postEditor => {
      let cursorSection;
      if (!range.isCollapsed) {
        let nextPosition  = postEditor.deleteRange(range);
        cursorSection = nextPosition.section;
        if (cursorSection && cursorSection.isBlank) {
          postEditor.setRange(cursorSection.headPosition());
          return;
        }
      }

      // Above logic might delete redundant range, so callback must run after it.
      let defaultPrevented = false;
      const event = { preventDefault() { defaultPrevented = true; } };
      this.runCallbacks(CALLBACK_QUEUES$1.WILL_HANDLE_NEWLINE, [event]);
      if (defaultPrevented) { return; }

      cursorSection = postEditor.splitSection(range.head)[1];
      postEditor.setRange(cursorSection.headPosition());
    });
  }

  /**
   * Notify the editor that the post did change, and run associated
   * callbacks.
   * @private
   */
  _postDidChange() {
    this.runCallbacks(CALLBACK_QUEUES$1.POST_DID_CHANGE);
  }

  /**
   * Selects the given range or position. If given a collapsed range or a position, this positions the cursor
   * at the range's position. Otherwise a selection is created in the editor
   * surface encompassing the range.
   * @param {Range|Position} range
   */
  selectRange(range) {
    range = toRange(range);

    this.cursor.selectRange(range);
    this.range = range;
  }

  get cursor() {
    return new Cursor(this);
  }

  /**
   * Return the current range for the editor (may be cached).
   * @return {Range}
   */
  get range() {
    return this._editState.range;
  }

  set range(newRange) {
    this._editState.updateRange(newRange);

    if (this._editState.rangeDidChange()) {
      this._rangeDidChange();
    }

    if (this._editState.inputModeDidChange()) {
      this._inputModeDidChange();
    }
  }

  _readRangeFromDOM() {
    this.range = this.cursor.offsets;
  }

  setPlaceholder(placeholder) {
    setData(this.element, 'placeholder', placeholder);
  }

  _reparsePost() {
    let post = this._parser.parse(this.element);
    this.run(postEditor => {
      postEditor.removeAllSections();
      postEditor.migrateSectionsFromPost(post);
      postEditor.setRange(Range.blankRange());
    });

    this.runCallbacks(CALLBACK_QUEUES$1.DID_REPARSE);
    this._postDidChange();
  }

  _reparseSections(sections=[]) {
    let currentRange;
    sections.forEach(section => {
      this._parser.reparseSection(section, this._renderTree);
    });
    this._removeDetachedSections();

    if (this._renderTree.isDirty) {
      currentRange = this.range;
    }

    // force the current snapshot's range to remain the same rather than
    // rereading it from DOM after the new character is applied and the browser
    // updates the cursor position
    let range = this._editHistory._pendingSnapshot.range;
    this.run(() => {
      this._editHistory._pendingSnapshot.range = range;
    });
    this.rerender();
    if (currentRange) {
      this.selectRange(currentRange);
    }

    this.runCallbacks(CALLBACK_QUEUES$1.DID_REPARSE);
    this._postDidChange();
  }

  // FIXME this should be able to be removed now -- if any sections are detached,
  // it's due to a bug in the code.
  _removeDetachedSections() {
    forEach(
      filter(this.post.sections, s => !s.renderNode.isAttached()),
      s => s.renderNode.scheduleForRemoval()
    );
  }

  /**
   * The sections from the cursor's selection start to the selection end
   * @type {Section[]}
   */
  get activeSections() {
    return this._editState.activeSections;
  }

  get activeSection() {
    const { activeSections } = this;
    return activeSections[activeSections.length - 1];
  }

  get activeSectionAttributes() {
    return this._editState.activeSectionAttributes;
  }

  detectMarkupInRange(range, markupTagName) {
    let markups = this.post.markupsInRange(range);
    return detect(markups, markup => {
      return markup.hasTag(markupTagName);
    });
  }

  /**
   * @type {Markup[]}
   * @public
   */
  get activeMarkups() {
    return this._editState.activeMarkups;
  }

  /**
   * @param {Markup|String} markup A markup instance, or a string (e.g. "b")
   * @return {boolean}
   */
  hasActiveMarkup(markup) {
    let matchesFn;
    if (typeof markup === 'string') {
      let tagName = normalizeTagName(markup);
      matchesFn = (m) => m.tagName === tagName;
    } else {
      matchesFn = (m) => m === markup;
    }

    return !!detect(this.activeMarkups, matchesFn);
  }

  /**
   * @param {String} version The mobiledoc version to serialize to.
   * @return {Mobiledoc} Serialized mobiledoc
   * @public
   */
  serialize(version=MOBILEDOC_VERSION$4) {
    return this.serializePost(this.post, 'mobiledoc', {version});
  }

  /**
   * Serialize the editor's post to the requested format.
   * Note that only mobiledoc format is lossless. If cards or atoms are present
   * in the post, the html and text formats will omit them in output because
   * the editor does not have access to the html and text versions of the
   * cards/atoms.
   * @param {string} format The format to serialize ('mobiledoc', 'text', 'html')
   * @return {Object|String} The editor's post, serialized to {format}
   * @public
   */
  serializeTo(format) {
    let post = this.post;
    return this.serializePost(post, format);
  }

  /**
   * @param {Post}
   * @param {String} format Same as {serializeTo}
   * @param {Object} [options]
   * @param {String} [options.version=MOBILEDOC_VERSION] version to serialize to
   * @return {Object|String}
   * @private
   */
  serializePost(post, format, options={}) {
    const validFormats = ['mobiledoc', 'html', 'text'];
    assert(`Unrecognized serialization format ${format}`,
           contains(validFormats, format));

    if (format === 'mobiledoc') {
      let version = options.version || MOBILEDOC_VERSION$4;
      return mobiledocRenderers.render(post, version);
    } else {
      let rendered;
      let mobiledoc = this.serializePost(post, 'mobiledoc');
      let unknownCardHandler = () => {};
      let unknownAtomHandler = () => {};
      let rendererOptions = { unknownCardHandler, unknownAtomHandler };

      switch (format) {
        case 'html': {
          let result;
          if (Environment.hasDOM()) {
            rendered = new RendererFactory(rendererOptions).render(mobiledoc);
            result = `<div>${serializeHTML(rendered.result)}</div>`;
          } else {
            // Fallback to text serialization
            result = this.serializePost(post, 'text', options);
          }
          return result;
        }
        case 'text':
          rendered = new RendererFactory$1(rendererOptions).render(mobiledoc);
          return rendered.result;
      }
    }
  }

  addView(view) {
    this._views.push(view);
  }

  removeAllViews() {
    this._views.forEach((v) => v.destroy());
    this._views = [];
  }

  /**
   * Whether the editor has a cursor (or a selected range).
   * It is possible for the editor to be focused but not have a selection.
   * In this case, key events will fire but the editor will not be able to
   * determine a cursor position, so they will be ignored.
   * @return {boolean}
   * @public
   */
  hasCursor() {
    return this.cursor.hasCursor();
  }

  /**
   * Tears down the editor's attached event listeners and views.
   * @public
   */
  destroy() {
    this.isDestroyed = true;
    if (this._hasSelection()) {
      this.cursor.clearSelection();
    }
    if (this._hasFocus()) {
      this.element.blur(); // FIXME This doesn't blur the element on IE11
    }
    this._mutationHandler.destroy();
    this._eventManager.destroy();
    this.removeAllViews();
    this._renderer.destroy();
    this._editState.destroy();
  }

  /**
   * Keep the user from directly editing the post using the keyboard and mouse.
   * Modification via the programmatic API is still permitted.
   * @see Editor#enableEditing
   * @public
   */
  disableEditing() {
    this.isEditable = false;
    if (this.hasRendered) {
      this._eventManager.stop();
      this.element.setAttribute('contentEditable', false);
      this.setPlaceholder('');
      this.selectRange(Range.blankRange());
    }
  }

  /**
   * Allow the user to directly interact with editing a post via keyboard and mouse input.
   * Editor instances are editable by default. Use this method to re-enable
   * editing after disabling it.
   * @see Editor#disableEditing
   * @public
   */
  enableEditing() {
    this.isEditable = true;
    if (this.hasRendered) {
      this._eventManager.start();
      this.element.setAttribute('contentEditable', true);
      this.setPlaceholder(this.placeholder);
    }
  }

  /**
   * Change a cardSection into edit mode
   * If called before the card has been rendered, it will be marked so that
   * it is rendered in edit mode when it gets rendered.
   * @param {CardSection} cardSection
   * @public
   */
  editCard(cardSection) {
    this._setCardMode(cardSection, CARD_MODES.EDIT);
  }

  /**
   * Change a cardSection into display mode
   * If called before the card has been rendered, it will be marked so that
   * it is rendered in display mode when it gets rendered.
   * @param {CardSection} cardSection
   * @return undefined
   * @public
   */
  displayCard(cardSection) {
    this._setCardMode(cardSection, CARD_MODES.DISPLAY);
  }

  /**
   * Run a new post editing session. Yields a block with a new {@link PostEditor}
   * instance. This instance can be used to interact with the post abstract.
   * Rendering will be deferred until after the callback is completed.
   *
   * Usage:
   * ```
   *   let markerRange = this.range;
   *   editor.run((postEditor) => {
   *     postEditor.deleteRange(markerRange);
   *     // editing surface not updated yet
   *     postEditor.schedule(() => {
   *       console.log('logs during rerender flush');
   *     });
   *     // logging not yet flushed
   *   });
   *   // editing surface now updated.
   *   // logging now flushed
   * ```
   *
   * @param {Function} callback Called with an instance of
   *        {@link PostEditor} as its argument.
   * @return {Mixed} The return value of `callback`.
   * @public
   */
  run(callback) {
    const postEditor = new PostEditor(this);
    postEditor.begin();
    this._editHistory.snapshot();
    const result = callback(postEditor);
    this.runCallbacks(CALLBACK_QUEUES$1.DID_UPDATE, [postEditor]);
    postEditor.complete();
    this._readRangeFromDOM();

    if (postEditor._shouldCancelSnapshot) {
      this._editHistory._pendingSnapshot = null;
    }
    this._editHistory.storeSnapshot(postEditor.editActionTaken);

    return result;
  }

  /**
   * @param {Function} callback Called with `postEditor` as its argument.
   * @public
   */
  didUpdatePost(callback) {
    this.addCallback(CALLBACK_QUEUES$1.DID_UPDATE, callback);
  }

  /**
   * @param {Function} callback Called when the post has changed, either via
   *        user input or programmatically. Use with {@link Editor#serialize} to
   *        retrieve the post in portable mobiledoc format.
   */
  postDidChange(callback) {
    this.addCallback(CALLBACK_QUEUES$1.POST_DID_CHANGE, callback);
  }

  /**
   * Register a handler that will be invoked by the editor after the user enters
   * matching text.
   * @param {Object} inputHandler
   * @param {String} inputHandler.name Required. Used by identifying handlers.
   * @param {String} [inputHandler.text] Required if `match` is not provided
   * @param {RegExp} [inputHandler.match] Required if `text` is not provided
   * @param {Function} inputHandler.run This callback is invoked with the {@link Editor}
   *                   instance and an array of matches. If `text` was provided,
   *                   the matches array will equal [`text`], and if a `match`
   *                   regex was provided the matches array will be the result of
   *                   `match.exec` on the matching text. The callback is called
   *                   after the matching text has been inserted.
   * @public
   */
  onTextInput(inputHandler) {
    this._eventManager.registerInputHandler(inputHandler);
  }

  /**
   * Unregister all text input handlers
   *
   * @public
   */
  unregisterAllTextInputHandlers() {
    this._eventManager.unregisterAllTextInputHandlers();
  }

  /**
   * Unregister text input handler by name
   * @param {String} name The name of handler to be removed
   *
   * @public
   */
  unregisterTextInputHandler(name) {
    this._eventManager.unregisterInputHandler(name);
  }

  /**
   * @param {Function} callback Called when the editor's state (active markups or
   * active sections) has changed, either via user input or programmatically
   */
  inputModeDidChange(callback) {
    this.addCallback(CALLBACK_QUEUES$1.INPUT_MODE_DID_CHANGE, callback);
  }

  /**
   * @param {Function} callback This callback will be called before the editor
   *        is rendered.
   * @public
   */
  willRender(callback) {
    this.addCallback(CALLBACK_QUEUES$1.WILL_RENDER, callback);
  }

  /**
   * @param {Function} callback This callback will be called after the editor
   *        is rendered.
   * @public
   */
  didRender(callback) {
    this.addCallback(CALLBACK_QUEUES$1.DID_RENDER, callback);
  }

  willCopy(callback) {
    this.addCallback(CALLBACK_QUEUES$1.WILL_COPY, callback);
  }

  /**
   * @param {Function} callback This callback will be called before deleting.
   * @public
   */
  willDelete(callback) {
    this.addCallback(CALLBACK_QUEUES$1.WILL_DELETE, callback);
  }

  /**
   * @param {Function} callback This callback will be called after deleting.
   * @public
   */
  didDelete(callback) {
    this.addCallback(CALLBACK_QUEUES$1.DID_DELETE, callback);
  }

  /**
   * @param {Function} callback This callback will be called before handling new line.
   * @public
   */
  willHandleNewline(callback) {
    this.addCallback(CALLBACK_QUEUES$1.WILL_HANDLE_NEWLINE, callback);
  }

  /**
   * @param {Function} callback This callback will be called every time the cursor
   *        position (or selection) changes.
   * @public
   */
  cursorDidChange(callback) {
    this.addCallback(CALLBACK_QUEUES$1.CURSOR_DID_CHANGE, callback);
  }

  _rangeDidChange() {
    if (this.hasRendered) {
      this.runCallbacks(CALLBACK_QUEUES$1.CURSOR_DID_CHANGE);
    }
  }

  _inputModeDidChange() {
    this.runCallbacks(CALLBACK_QUEUES$1.INPUT_MODE_DID_CHANGE);
  }

  _insertEmptyMarkupSectionAtCursor() {
    this.run(postEditor => {
      const section = postEditor.builder.createMarkupSection('p');
      postEditor.insertSectionBefore(this.post.sections, section);
      postEditor.setRange(section.toRange());
    });
  }

  /**
   * @callback editorBeforeCallback
   * @param { Object } details
   * @param { Markup } details.markup
   * @param { Range } details.range
   * @param { boolean } details.willAdd Whether the markup will be applied
   */

  /**
   * Register a callback that will be run before {@link Editor#toggleMarkup} is applied.
   * If any callback returns literal `false`, the toggling of markup will be canceled.
   * Note this only applies to calling `editor#toggleMarkup`. Using `editor.run` and
   * modifying markup with the `postEditor` will skip any `beforeToggleMarkup` callbacks.
   * @param {editorBeforeCallback}
   */
  beforeToggleMarkup(callback) {
    this._beforeHooks.toggleMarkup.push(callback);
  }

  /**
   * Toggles the given markup at the editor's current {@link Range}.
   * If the range is collapsed this changes the editor's state so that the
   * next characters typed will be affected. If there is text selected
   * (aka a non-collapsed range), the selections' markup will be toggled.
   * If the editor is not focused and has no active range, nothing happens.
   * Hooks added using #beforeToggleMarkup will be run before toggling,
   * and if any of them returns literal false, toggling the markup will be canceled
   * and no change will be applied.
   * @param {String} markup E.g. "b", "em", "a"
   * @param {Object} [attributes={}] E.g. {href: "http://bustle.com"}
   * @public
   * @see PostEditor#toggleMarkup
   */
  toggleMarkup(markup, attributes={}) {
    markup = this.builder.createMarkup(markup, attributes);
    let { range } = this;
    let willAdd = !this.detectMarkupInRange(range, markup.tagName);
    let shouldCancel = this._runBeforeHooks('toggleMarkup', {markup, range, willAdd});
    if (shouldCancel) { return; }

    if (range.isCollapsed) {
      this._editState.toggleMarkupState(markup);
      this._inputModeDidChange();

      // when clicking a button to toggle markup, the button can end up being focused,
      // so ensure the editor is focused
      this._ensureFocus();
    } else {
      this.run(postEditor => postEditor.toggleMarkup(markup, range));
    }
  }

  // If the editor has a selection but is not focused, focus it
  _ensureFocus() {
    if (this._hasSelection() && !this._hasFocus()) {
      this.focus();
    }
  }

  focus() {
    this.element.focus();
  }

  /**
   * Whether there is a selection inside the editor's element.
   * It's possible to have a selection but not have focus.
   * @see #_hasFocus
   * @return {Boolean}
   */
  _hasSelection() {
    let { cursor } = this;
    return this.hasRendered && (cursor._hasCollapsedSelection() || cursor._hasSelection());
  }

  /**
   * Whether the editor's element is focused
   * It's possible to be focused but have no selection
   * @see #_hasSelection
   * @return {Boolean}
   */
  _hasFocus() {
    return document.activeElement === this.element;
  }

  /**
   * Toggles the tagName for the current active section(s). This will skip
   * non-markerable sections. E.g. if the editor's range includes a "P" MarkupSection
   * and a CardSection, only the MarkupSection will be toggled.
   * @param {String} tagName The new tagname to change to.
   * @public
   * @see PostEditor#toggleSection
   */
  toggleSection(tagName) {
    this.run(postEditor => postEditor.toggleSection(tagName, this.range));
  }

  /**
   * Sets an attribute for the current active section(s).
   *
   * @param {String} key The attribute. The only valid attribute is 'text-align'.
   * @param {String} value The value of the attribute.
   * @public
   * @see PostEditor#setAttribute
   */
  setAttribute(key, value) {
    this.run(postEditor => postEditor.setAttribute(key, value, this.range));
  }

  /**
   * Removes an attribute from the current active section(s).
   *
   * @param {String} key The attribute. The only valid attribute is 'text-align'.
   * @public
   * @see PostEditor#removeAttribute
   */
  removeAttribute(key) {
    this.run(postEditor => postEditor.removeAttribute(key, this.range));
  }

  /**
   * Finds and runs the first matching key command for the event
   *
   * If multiple commands are bound to a key combination, the
   * first matching one is run.
   *
   * If a command returns `false` then the next matching command
   * is run instead.
   *
   * @param {Event} event The keyboard event triggered by the user
   * @return {Boolean} true when a command was successfully run
   * @private
   */
  handleKeyCommand(event) {
    const keyCommands = findKeyCommands(this.keyCommands, event);
    for (let i=0; i<keyCommands.length; i++) {
      let keyCommand = keyCommands[i];
      if (keyCommand.run(this) !== false) {
        event.preventDefault();
        return true;
      }
    }
    return false;
  }

  /**
   * Inserts the text at the current cursor position. If the editor has
   * no current cursor position, nothing will be inserted. If the editor's
   * range is not collapsed, it will be deleted before insertion.
   *
   * @param {String} text
   * @public
   */
  insertText(text) {
    if (!this.hasCursor()) { return; }
    if (this.post.isBlank) {
      this._insertEmptyMarkupSectionAtCursor();
    }
    let { activeMarkups, range, range: { head: position } } = this;

    this.run(postEditor => {
      if (!range.isCollapsed) {
        position = postEditor.deleteRange(range);
      }

      postEditor.insertTextWithMarkup(position, text, activeMarkups);
    });
  }

  /**
   * Inserts an atom at the current cursor position. If the editor has
   * no current cursor position, nothing will be inserted. If the editor's
   * range is not collapsed, it will be deleted before insertion.
   * @param {String} atomName
   * @param {String} [atomText='']
   * @param {Object} [atomPayload={}]
   * @return {Atom} The inserted atom.
   * @public
   */
  insertAtom(atomName, atomText='', atomPayload={}) {
    if (!this.hasCursor()) { return; }
    if (this.post.isBlank) {
      this._insertEmptyMarkupSectionAtCursor();
    }

    let atom;
    let { range } = this;
    this.run(postEditor => {
      let position = range.head;

      atom = postEditor.builder.createAtom(atomName, atomText, atomPayload);
      if (!range.isCollapsed) {
        position = postEditor.deleteRange(range);
      }

      postEditor.insertMarkers(position, [atom]);
    });
    return atom;
  }

  /**
   * Inserts a card at the section after the current cursor position. If the editor has
   * no current cursor position, nothing will be inserted. If the editor's
   * range is not collapsed, it will be deleted before insertion. If the cursor is in
   * a blank section, it will be replaced with a card section.
   * The editor's cursor will be placed at the end of the inserted card.
   * @param {String} cardName
   * @param {Object} [cardPayload={}]
   * @param {Boolean} [inEditMode=false] Whether the card should be inserted in edit mode.
   * @return {Card} The inserted Card section.
   * @public
   */
  insertCard(cardName, cardPayload={}, inEditMode=false) {
    if (!this.hasCursor()) { return; }
    if (this.post.isBlank) {
      this._insertEmptyMarkupSectionAtCursor();
    }

    let card;
    let { range } = this;
    this.run(postEditor => {
      let position = range.tail;
      card = postEditor.builder.createCardSection(cardName, cardPayload);
      if (inEditMode) {
        this.editCard(card);
      }

      if (!range.isCollapsed) {
        position = postEditor.deleteRange(range);
      }

      let section = position.section;
      if (section.isNested) { section = section.parent; }

      if (section.isBlank) {
        postEditor.replaceSection(section, card);
      } else {
        let collection = this.post.sections;
        postEditor.insertSectionBefore(collection, card, section.next);
      }

      // It is important to explicitly set the range to the end of the card.
      // Otherwise it is possible to create an inconsistent state in the
      // browser. For instance, if the user clicked a button that
      // called `editor.insertCard`, the editor surface may retain
      // the selection but lose focus, and the next keystroke by the user
      // will cause an unexpected DOM mutation (which can wipe out the
      // card).
      // See: https://github.com/bustle/mobiledoc-kit/issues/286
      postEditor.setRange(card.tailPosition());
    });
    return card;
  }

  /**
   * @param {integer} x x-position in viewport
   * @param {integer} y y-position in viewport
   * @return {Position|null}
   */
  positionAtPoint(x, y) {
    return Position$1.atPoint(x, y, this);
  }

  /**
   * @private
   */
  _setCardMode(cardSection, mode) {
    const renderNode = cardSection.renderNode;
    if (renderNode && renderNode.isRendered) {
      const cardNode = renderNode.cardNode;
      cardNode[mode]();
    } else {
      cardSection.setInitialMode(mode);
    }
  }

  triggerEvent(context, eventName, event) {
    this._eventManager._trigger(context, eventName, event);
  }

  addCallback(...args) {
    this._callbacks.addCallback(...args);
  }

  addCallbackOnce(...args) {
    this._callbacks.addCallbackOnce(...args);
  }

  runCallbacks(...args) {
    if (this.isDestroyed) {
      // TODO warn that callback attempted after editor was destroyed
      return;
    }
    this._callbacks.runCallbacks(...args);
  }

  /**
   * Runs each callback for the given hookName.
   * Only the hookName 'toggleMarkup' is currently supported
   * @return {Boolean} shouldCancel Whether the action in `hookName` should be canceled
   * @private
   */
  _runBeforeHooks(hookName, ...args) {
    let hooks = this._beforeHooks[hookName] || [];
    for (let i = 0; i < hooks.length; i++) {
      if (hooks[i](...args) === false) {
        return true;
      }
    }
  }
}

var version = '##VERSION##';


//# sourceMappingURL=mobiledoc.js.map


/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "mobiledoc-editor_container"
    }
  }, [_vm._t("header"), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c('div', {
    ref: "editorPost",
    attrs: {
      "id": "mobiledoc-editor_editor"
    }
  }), _vm._v(" "), _vm._t("footer")], 2)
},staticRenderFns: []}

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_MobiledocEditor__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_MobiledocEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_MobiledocEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_MobiledocButton__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_addons_MobiledocToolbar__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_addons_compToCard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_mobiledocFormats__ = __webpack_require__(12);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "MobiledocEditor", function() { return __WEBPACK_IMPORTED_MODULE_0_MobiledocEditor___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "MobiledocButton", function() { return __WEBPACK_IMPORTED_MODULE_1_MobiledocButton__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "MobiledocToolbar", function() { return __WEBPACK_IMPORTED_MODULE_2_addons_MobiledocToolbar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "compToCard", function() { return __WEBPACK_IMPORTED_MODULE_3_addons_compToCard__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "EMPTY_MOBILEDOC", function() { return __WEBPACK_IMPORTED_MODULE_4__helpers_mobiledocFormats__["a"]; });








/* harmony default export */ exports["default"] = {
  Editor: __WEBPACK_IMPORTED_MODULE_0_MobiledocEditor___default.a,
  Button: __WEBPACK_IMPORTED_MODULE_1_MobiledocButton__["a" /* default */]
};

/***/ }
/******/ ]);
});
//# sourceMappingURL=build.js.map