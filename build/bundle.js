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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Num2Words = exports.Num2Words = function () {
  function Num2Words(input) {
    _classCallCheck(this, Num2Words);

    // console.log(input);
    this.input = input;
    this.ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    this.mid = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    this.tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];;
    this.rest = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion'];
  }

  _createClass(Num2Words, [{
    key: 'find',
    value: function find() {
      var tex = '';
      if (Number(this.input) === 0) {
        tex = 'zero';
        return tex.trim();
      }
      if (this.input.length > 48) {
        tex = 'Out of Limit';
        return tex.trim();
      }
      var num = this.input;
      var j = 0;
      while (num.length > 0) {
        var ex = 0;
        if (num.length === 2) {
          ex = 1;
        }
        var last = num.substr(num.length - 3 + ex);
        tex = this.convert(last, j) + tex;
        num = num.substr(0, num.length - 3);
        j++;
      }
      return tex.trim();
    }
  }, {
    key: 'convert',
    value: function convert(last, j) {
      var text = '';
      last = Number(last);
      while (last > 0) {
        if (last > 99) {
          var digit = Math.floor(last / 100);
          text += ' ' + this.ones[digit] + ' hundred';
          last = last % 100;
        } else if (last >= 20 && last <= 99) {
          if (text !== '' && j === 0) {
            text += ' and';
          }
          digit = Math.floor(last / 10);
          text += ' ' + this.tens[digit];
          last = last % 10;
          text += ' ' + this.ones[last];
          last = 0;
        } else if (last < 20 && last > 10) {
          if (text !== '' && j === 0) {
            text += ' and';
          }
          text += ' ' + this.mid[last - 10];
          last = 0;
        } else {
          text += ' ' + this.ones[last];
          last = 0;
        }
      }
      if (text !== '') {
        text += ' ' + this.rest[j];
      }
      return text;
    }
  }]);

  return Num2Words;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decider = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Identifier = function () {
  function Identifier(input) {
    _classCallCheck(this, Identifier);

    this.input = input;
    this.text = [];
    this.c1 = 0;
    this.c2 = 0;
  }

  _createClass(Identifier, [{
    key: 'send',
    value: function send() {
      var _this = this;

      this.text = this.input.split(/\s+/g);
      // console.log(text);
      var regexp = /\d+/;
      var dec = void 0,
          out = void 0;
      // let that = this;
      // this.c1 = 0;
      // this.c2 = 0;

      var _loop = function _loop(i) {
        if (regexp.test(_this.text[i])) {
          _this.c1++;
          // console.log(text[i]);
          setTimeout(function (that) {
            that.c2++;
            dec = new _Decider.Decider({ word: that.text[i], index: i });
            out = dec.decide();
            that.text[out.index] = out.word;
            // console.log(that.text);
            if (that.c1 === that.c2) {
              that.output();
            }
          }, 0, _this);
        }
      };

      for (var i = 0; i < this.text.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: 'output',
    value: function output() {
      document.getElementById('output').innerHTML = this.text.join(' ');
    }
  }]);

  return Identifier;
}();

var checker = function checker() {
  var input = document.getElementById('input').value;
  var i = new Identifier(input);
  i.send();
};
document.getElementById('b1').addEventListener('click', checker);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Decider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cardinal = __webpack_require__(3);

var _Special_middle = __webpack_require__(4);

var _Suffix_prefix = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Decider = exports.Decider = function () {
  function Decider(out) {
    _classCallCheck(this, Decider);

    this.input = out;
    // console.log(this.input);
  }

  _createClass(Decider, [{
    key: 'decide',
    value: function decide() {
      var dig = /^\d+$/;
      var mid = /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$|^\d{1,2}[:]\d{2}$|^\d+[/.]\d+$|^0\d{10}$|^[+]\d{2}[-| ]\d{10}/;
      // let sufpref = /^[A-Za-z]*\d+[A-Za-z]*/;
      var suf = /^[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*\d+$/;
      var pref = /^\d+[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*/;
      // console.log(mid.test(this.input[i].word));
      if (dig.test(this.input.word)) {
        var cardinalOb = new _Cardinal.Cardinal(this.input);
        var out = cardinalOb.output();
        return out;
      } else if (mid.test(this.input.word)) {
        // console.log(i);
        var special = new _Special_middle.SpecialMiddle(this.input);
        var _out = special.whichSpecialMiddle();
        return _out;
      } else if (suf.test(this.input.word) || pref.test(this.input.word)) {
        var sufprefOb = new _Suffix_prefix.SuffixPrefix(this.input);
        var _out2 = sufprefOb.output();
        // console.log(this.input);
        return _out2;
      }
    }
  }]);

  return Decider;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cardinal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Num2Words = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cardinal = exports.Cardinal = function () {
  function Cardinal(input) {
    _classCallCheck(this, Cardinal);

    this.input = input;
  }

  _createClass(Cardinal, [{
    key: 'output',
    value: function output() {
      var num = new _Num2Words.Num2Words(this.input.word);
      this.input.word = num.find();
      // console.log(this.input.word);
      return this.input;
    }
  }]);

  return Cardinal;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecialMiddle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Date = __webpack_require__(5);

var _Time = __webpack_require__(6);

var _Dec_frac = __webpack_require__(7);

var _Phone = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialMiddle = exports.SpecialMiddle = function () {
  function SpecialMiddle(input) {
    _classCallCheck(this, SpecialMiddle);

    this.input = input;
  }

  _createClass(SpecialMiddle, [{
    key: 'whichSpecialMiddle',
    value: function whichSpecialMiddle() {
      var date = /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/g;
      var time = /^\d{1,2}[:]\d{2}$/;
      var decfrac = /^\d+[/.]\d+$/;
      var phone = /^0\d{10}$|^[+]\d{2}[-| ]\d{10}/;
      if (date.test(this.input.word)) {
        var dateOb = new _Date.Date(this.input);
        var out = dateOb.output();
        return out;
      } else if (time.test(this.input.word)) {
        var timeOb = new _Time.Time(this.input);
        var _out = timeOb.output();
        return _out;
      } else if (decfrac.test(this.input.word)) {
        var decfracOb = new _Dec_frac.DecFrac(this.input);
        var _out2 = decfracOb.output();
        return _out2;
      } else if (phone.test(this.input.word)) {
        var _phone = new _Phone.Phone(this.input);
        var _out3 = _phone.output();
        return _out3;
      }
    }
  }]);

  return SpecialMiddle;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Date = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Num2Words = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Date = exports.Date = function () {
  function Date(input) {
    _classCallCheck(this, Date);

    this.input = input;
    this.out = [];
  }

  _createClass(Date, [{
    key: 'output',
    value: function output() {
      // console.log(this.input.word);
      var inp = this.input.word.split(/[/]|[-]/);
      for (var i = 0; i < inp.length; i++) {
        var num = new _Num2Words.Num2Words(inp[i]);
        this.out.push(num.find());
      }
      if (this.input.word.indexOf('/') >= 0) {
        this.create('/');
      } else {
        this.create('-');
      }
    }
  }, {
    key: 'create',
    value: function create(deli) {
      var word = '';
      word = this.out[0] + deli + this.out[1] + deli + this.out[2];
      // console.log(word);
      this.input.word = word;
      return this.input;
    }
  }]);

  return Date;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Time = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Num2Words = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Time = exports.Time = function () {
  function Time(input) {
    _classCallCheck(this, Time);

    this.input = input;
    this.out = [];
  }

  _createClass(Time, [{
    key: 'output',
    value: function output() {
      var inp = this.input.word.split(/[:]/);
      for (var i = 0; i < inp.length; i++) {
        var num = new _Num2Words.Num2Words(inp[i]);
        this.out.push(num.find());
      }
      var word = '';
      word = this.out[0] + ':' + this.out[1];
      // console.log(word);
      this.input.word = word;
      return this.input;
    }
  }]);

  return Time;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecFrac = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Num2Words = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DecFrac = exports.DecFrac = function () {
  function DecFrac(input) {
    _classCallCheck(this, DecFrac);

    this.input = input;
  }

  _createClass(DecFrac, [{
    key: 'output',
    value: function output() {
      if (this.input.word.indexOf('.') >= 0) {
        console.log(this.input.word.indexOf('.'));
        this.decimal();
      } else {
        this.fraction();
      }
    }
  }, {
    key: 'decimal',
    value: function decimal() {
      var inp = this.input.word.split('.');
      var num = new _Num2Words.Num2Words(inp[0]);
      var int = '';
      int = num.find();
      var deci = inp[1];
      var word = '';
      for (var i = 0; i < inp[1].length; i++) {
        var num1 = new _Num2Words.Num2Words(deci[i]);
        word += num1.find() + ' ';
      }
      word = int + ' point ' + word.trim();
      // console.log(word);
      this.input.word = word;
      return this.input;
    }
  }, {
    key: 'fraction',
    value: function fraction() {
      var inp = this.input.word.split('/');
      var num = new _Num2Words.Num2Words(inp[0]);
      var word = '';
      word = num.find();
      var num1 = new _Num2Words.Num2Words(inp[1]);
      word += ' by ' + num1.find();
      // console.log(word);
      this.input.word = word;
      return this.input;
    }
  }]);

  return DecFrac;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phone = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Num2Words = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Phone = exports.Phone = function () {
  function Phone(input) {
    _classCallCheck(this, Phone);

    this.input = input;
  }

  _createClass(Phone, [{
    key: 'output',
    value: function output() {
      var word = '';
      for (var i = 0; i < this.input.word.length; i++) {
        if (!isNaN(parseInt(this.input.word[i]))) {
          var num = new _Num2Words.Num2Words(this.input.word[i]);
          word += num.find() + ' ';
        } else {
          word += this.input.word[i] + ' ';
        }
      }
      // console.log(word.trim());
      this.input.word = word.trim();
      return this.input;
    }
  }]);

  return Phone;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuffixPrefix = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Num2Words = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuffixPrefix = exports.SuffixPrefix = function () {
  function SuffixPrefix(word) {
    _classCallCheck(this, SuffixPrefix);

    this.input = word;
    this.select = 'none';
  }

  _createClass(SuffixPrefix, [{
    key: 'output',
    value: function output() {
      var numpart = this.input.word.match(/\d+/);
      var restpart = this.input.word.split(/\d+/);
      var num = new _Num2Words.Num2Words(numpart[0]);
      var word = '';
      if (/^[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*\d+$/.test(this.input.word)) {
        word = restpart[0] + num.find();
        // console.log(word);
        this.input.word = word.trim();
        return this.input;
      } else {
        word = num.find() + restpart[1];
        word = word.replace('threerd', 'third');
        word = word.replace('onest', 'first');
        word = word.replace('twond', 'second');
        word = word.replace('fiveth', 'fifth');
        word = word.replace('eightth', 'eighth');
        word = word.replace('nineth', 'ninth');
        // console.log(word);
        this.input.word = word.trim();
        return this.input;
      }
    }
  }]);

  return SuffixPrefix;
}();

/***/ })
/******/ ]);