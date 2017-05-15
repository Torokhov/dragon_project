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
	    var arena = new _arena2.default();
	    assert.equal(arena.baff(function (n) {
	      return n;
	    }, 10, 100), 110);
	    assert.equal(arena.debaff(function (n) {
	      return n * 0.1;
	    }, 150, 100), 85);
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
	  function Arena() {
	    _classCallCheck(this, Arena);
	  }

	  _createClass(Arena, [{
	    key: 'baff',
	    value: function baff(func, n, health) {
	      return health + func(n);
	    }
	  }, {
	    key: 'debaff',
	    value: function debaff(func, n, health) {
	      return health - func(n);
	    }
	  }]);

	  return Arena;
	}();

		exports.default = Arena;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZGIzYzA3YmZlNDUyYmQxNGQ1YyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvdGVzdC5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvZHJhZ29uLmpzIiwid2VicGFjazovLy9mcm9udGVuZC9hcmVuYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZGIzYzA3YmZlNDUyYmQxNGQ1YyIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgRHJhZ29uIGZyb20gXCIuL2RyYWdvbi5qc1wiO1xuaW1wb3J0IEFyZW5hIGZyb20gXCIuL2FyZW5hLmpzXCI7XG5cbmRlc2NyaWJlKCdHYW1lJywgKCkgPT4ge1xuICBpdCgn0KHQvtC30LTQsNC10Lwg0LTRgNCw0LrQvtC90L7QsicsICgpID0+IHtcbiAgICBjb25zdCBkcmFnb24xID0gbmV3IERyYWdvbign0KTQsNGE0L3QuNGAJywgMTAwLCAyNSk7XG4gICAgY29uc3QgZHJhZ29uMiA9IG5ldyBEcmFnb24oJ9Ch0LzQsNGD0LMnLCAxMDAsIDIwKTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMS5nZXROYW1lKCksICfQpNCw0YTQvdC40YAnKTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMi5nZXROYW1lKCksICfQodC80LDRg9CzJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjEuZ2V0SGVhbHRoKCksIDEwMCk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjIuZ2V0SGVhbHRoKCksIDEwMCk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjEuZ2V0RGFtYWdlKCksIDI1KTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMi5nZXREYW1hZ2UoKSwgMjApO1xuICB9KTtcbiAgXG4gIGl0KCfQodC+0LfQtNCw0LXQvCDQsNGA0LXQvdGDJywgKCkgPT4ge1xuICAgIGNvbnN0IGFyZW5hID0gbmV3IEFyZW5hKCk7XG4gICAgYXNzZXJ0LmVxdWFsKGFyZW5hLmJhZmYoKG4pID0+IG4sIDEwLCAxMDApLCAxMTApO1xuICAgIGFzc2VydC5lcXVhbChhcmVuYS5kZWJhZmYoKG4pID0+IG4gKiAwLjEsIDE1MCwgMTAwKSwgODUpO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3Rlc3QuanMiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ29uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaGVhbHRoLCBkYW1hZ2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGdldEhlYWx0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFsdGg7XG4gIH1cbiAgXG4gICBnZXREYW1hZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvZHJhZ29uLmpzIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVuYSB7XHJcbiAgYmFmZihmdW5jLCBuLCBoZWFsdGgpIHtcclxuICAgIHJldHVybiBoZWFsdGggKyBmdW5jKG4pO1xyXG4gIH1cclxuICBcclxuICBkZWJhZmYoZnVuYywgbiwgaGVhbHRoKSB7XHJcbiAgICByZXR1cm4gaGVhbHRoIC0gZnVuYyhuKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2FyZW5hLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFqQkE7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQVBBOzs7Iiwic291cmNlUm9vdCI6IiJ9