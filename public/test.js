var test =
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _dragon = __webpack_require__(1);

	var _dragon2 = _interopRequireDefault(_dragon);

	var _arena = __webpack_require__(2);

	var _arena2 = _interopRequireDefault(_arena);

	var _game = __webpack_require__(3);

	var _game2 = _interopRequireDefault(_game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Game', function () {
	  it('Создаем драконов', function () {
	    var dragon1 = new _dragon2.default('Фафнир', 100, 25);
	    var dragon2 = new _dragon2.default('Смауг', 100, 20);
	    assert.equal(dragon1.getName(), 'Фафнир');
	    assert.equal(dragon2.getName(), 'Смауг');
	    assert.equal(dragon1.getHealth(), 100);
	    assert.equal(dragon2.getHealth(), 100);
	    assert.equal(dragon1.getDamage(), 25);
	    assert.equal(dragon2.getDamage(), 20);
	  });

	  it('Создаем арену', function () {
	    var arena = new _arena2.default(10);
	    assert.equal(arena.baff(function (n) {
	      return n;
	    }, 100), 110);
	    assert.equal(arena.debaff(function (n) {
	      return n * 0.1;
	    }, 100), 99);
	  });

	  it('Игра', function () {
	    var dragon1 = new _dragon2.default('Фафнир', 100, 25);
	    var dragon2 = new _dragon2.default('Смауг', 100, 20);
	    var arena = new _arena2.default(10);

	    var game = new _game2.default();
	    game.start();
	    var log = game.getLog();
	    assert.equal(log.length, 5);
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dragon = function () {
	  function Dragon(name, health, damage) {
	    _classCallCheck(this, Dragon);

	    this.name = name;
	    this.health = health;
	    this.damage = damage;
	  }

	  _createClass(Dragon, [{
	    key: 'getName',
	    value: function getName() {
	      return this.name;
	    }
	  }, {
	    key: 'getHealth',
	    value: function getHealth() {
	      return this.health;
	    }
	  }, {
	    key: 'getDamage',
	    value: function getDamage() {
	      return this.damage;
	    }
	  }]);

	  return Dragon;
	}();

		exports.default = Dragon;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Arena = function () {
	  function Arena(n) {
	    _classCallCheck(this, Arena);

	    this.n = n;
	  }

	  _createClass(Arena, [{
	    key: 'baff',
	    value: function baff(func, health) {
	      return health + func(this.n);
	    }
	  }, {
	    key: 'debaff',
	    value: function debaff(func, health) {
	      return health - func(this.n);
	    }
	  }]);

	  return Arena;
	}();

		exports.default = Arena;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMmU1YzJkYzUyN2NhMmYyNTRjYiIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvdGVzdC5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvZHJhZ29uLmpzIiwid2VicGFjazovLy9mcm9udGVuZC9hcmVuYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMmU1YzJkYzUyN2NhMmYyNTRjYiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgRHJhZ29uIGZyb20gXCIuL2RyYWdvbi5qc1wiO1xuaW1wb3J0IEFyZW5hIGZyb20gXCIuL2FyZW5hLmpzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCJcblxuZGVzY3JpYmUoJ0dhbWUnLCAoKSA9PiB7XG4gIGl0KCfQodC+0LfQtNCw0LXQvCDQtNGA0LDQutC+0L3QvtCyJywgKCkgPT4ge1xuICAgIGNvbnN0IGRyYWdvbjEgPSBuZXcgRHJhZ29uKCfQpNCw0YTQvdC40YAnLCAxMDAsIDI1KTtcbiAgICBjb25zdCBkcmFnb24yID0gbmV3IERyYWdvbign0KHQvNCw0YPQsycsIDEwMCwgMjApO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24xLmdldE5hbWUoKSwgJ9Ck0LDRhNC90LjRgCcpO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24yLmdldE5hbWUoKSwgJ9Ch0LzQsNGD0LMnKTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMS5nZXRIZWFsdGgoKSwgMTAwKTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMi5nZXRIZWFsdGgoKSwgMTAwKTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMS5nZXREYW1hZ2UoKSwgMjUpO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24yLmdldERhbWFnZSgpLCAyMCk7XG4gIH0pO1xuICBcbiAgaXQoJ9Ch0L7Qt9C00LDQtdC8INCw0YDQtdC90YMnLCAoKSA9PiB7XG4gICAgY29uc3QgYXJlbmEgPSBuZXcgQXJlbmEoMTApO1xuICAgIGFzc2VydC5lcXVhbChhcmVuYS5iYWZmKChuKSA9PiBuLCAxMDApLCAxMTApO1xuICAgIGFzc2VydC5lcXVhbChhcmVuYS5kZWJhZmYoKG4pID0+IG4gKiAwLjEsIDEwMCksIDk5KTtcbiAgfSk7XG4gIFxuICBpdCgn0JjQs9GA0LAnLCAoKSA9PiB7XG4gICAgY29uc3QgZHJhZ29uMSA9IG5ldyBEcmFnb24oJ9Ck0LDRhNC90LjRgCcsIDEwMCwgMjUpO1xuICAgIGNvbnN0IGRyYWdvbjIgPSBuZXcgRHJhZ29uKCfQodC80LDRg9CzJywgMTAwLCAyMCk7XG4gICAgIGNvbnN0IGFyZW5hID0gbmV3IEFyZW5hKDEwKTtcbiAgICBcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBnYW1lLnN0YXJ0KCk7XG4gICAgY29uc3QgbG9nID0gZ2FtZS5nZXRMb2coKTtcbiAgICBhc3NlcnQuZXF1YWwobG9nLmxlbmd0aCwgNSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvdGVzdC5qcyIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBoZWFsdGgsIGRhbWFnZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgZ2V0SGVhbHRoKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWx0aDtcbiAgfVxuICBcbiAgIGdldERhbWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYW1hZ2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9kcmFnb24uanMiLCIndXNlIHN0cmljdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZW5hIHtcclxuICBjb25zdHJ1Y3RvcihuKSB7XHJcbiAgIHRoaXMubiA9IG47IFxyXG4gIH1cclxuICBcclxuICBiYWZmKGZ1bmMsIGhlYWx0aCkge1xyXG4gICAgcmV0dXJuIGhlYWx0aCArIGZ1bmModGhpcy5uKTtcclxuICB9XHJcbiAgXHJcbiAgZGViYWZmKGZ1bmMsIGhlYWx0aCkge1xyXG4gICAgcmV0dXJuIGhlYWx0aCAtIGZ1bmModGhpcy5uKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2FyZW5hLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBakJBOzs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQVhBOzs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9