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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MzE1NTIwMTg2NjE2NjEzZTExZSIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvdGVzdC5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvZHJhZ29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYzMTU1MjAxODY2MTY2MTNlMTFlIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBEcmFnb24gZnJvbSBcIi4vZHJhZ29uLmpzXCI7XG5cbmRlc2NyaWJlKCdHYW1lJywgKCkgPT4ge1xuICBpdCgn0KHQvtC30LTQsNC10Lwg0LTRgNCw0LrQvtC90L7QsicsICgpID0+IHtcbiAgICBjb25zdCBkcmFnb24xID0gbmV3IERyYWdvbign0KTQsNGE0L3QuNGAJywgMTAwLCAyNSk7XG4gICAgY29uc3QgZHJhZ29uMiA9IG5ldyBEcmFnb24oJ9Ch0LzQsNGD0LMnLCAxMDAsIDIwKTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMS5nZXROYW1lKCksICfQpNCw0YTQvdC40YAnKTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMi5nZXROYW1lKCksICfQodC80LDRg9CzJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjEuZ2V0SGVhbHRoKCksIDEwMCk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjIuZ2V0SGVhbHRoKCksIDEwMCk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjEuZ2V0RGFtYWdlKCksIDI1KTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMi5nZXREYW1hZ2UoKSwgMjApO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3Rlc3QuanMiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ29uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaGVhbHRoLCBkYW1hZ2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGdldEhlYWx0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFsdGg7XG4gIH1cbiAgXG4gICBnZXREYW1hZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvZHJhZ29uLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFqQkE7OzsiLCJzb3VyY2VSb290IjoiIn0=