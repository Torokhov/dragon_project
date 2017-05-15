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

	    dragon1.setHealth(150);
	    dragon2.setHealth(75);
	    assert.equal(dragon1.getHealth(), 150);
	    assert.equal(dragon2.getHealth(), 75);

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
	    var dragon1 = new _dragon2.default('Фафнир', 100, 50);
	    var dragon2 = new _dragon2.default('Смауг', 100, 50);
	    var arena = new _arena2.default(10);

	    var game = new _game2.default(arena, dragon1, dragon2);
	    game.start();
	    var log = game.getLog();
	    assert.equal(log.length, 11);
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
	    key: 'setHealth',
	    value: function setHealth(health) {
	      this.health = health;
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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _log = __webpack_require__(4);

	var _log2 = _interopRequireDefault(_log);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
	  function Game(arena, dragon1, dragon2) {
	    _classCallCheck(this, Game);

	    this.arena = arena;
	    this.dragon1 = dragon1;
	    this.dragon2 = dragon2;
	    this.log = new _log2.default();
	  }

	  _createClass(Game, [{
	    key: "start",
	    value: function start() {
	      var _this = this;

	      this.log.clear();

	      var step = function step(dragon1, dragon2, log, n) {
	        if (dragon1.getHealth() <= 0) {
	          log.add("\u0414\u0440\u0430\u043A\u043E\u043D " + dragon2.getName() + " \u043F\u043E\u0431\u0435\u0434\u0438\u043B");
	          return log;
	        } else if (dragon2.getHealth() <= 0) {
	          log.add("\u0414\u0440\u0430\u043A\u043E\u043D " + dragon2.getName() + " \u043F\u043E\u0431\u0435\u0434\u0438\u043B");
	          return log;
	        }

	        var newHealth = void 0;

	        switch (n) {
	          case 1:
	            newHealth = dragon2.getHealth() - dragon1.getDamage();
	            dragon2.setHealth(newHealth);
	            log.add("\u0414\u0440\u0430\u043A\u043E\u043D " + dragon2.getName() + " \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0443\u0440\u043E\u043D " + dragon1.getDamage() + ". \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435: " + dragon2.getHealth());

	            dragon2.setHealth(_this.arena.baff(function (n) {
	              return n;
	            }, dragon2.getHealth()));
	            log.add("\u0414\u0440\u0430\u043A\u043E\u043D " + dragon2.getName() + " \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0431\u043E\u043D\u0443c.  \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435: " + dragon2.getHealth());

	            return step(dragon1, dragon2, log, 2);

	          case 2:
	            newHealth = dragon1.getHealth() - dragon2.getDamage();
	            dragon1.setHealth(newHealth);
	            log.add("\u0414\u0440\u0430\u043A\u043E\u043D " + dragon1.getName() + " \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0443\u0440\u043E\u043D " + dragon2.getDamage() + ". \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435: " + dragon1.getHealth());

	            dragon1.setHealth(_this.arena.baff(function (n) {
	              return n;
	            }, dragon1.getHealth()));
	            log.add("\u0414\u0440\u0430\u043A\u043E\u043D " + dragon1.getName() + " \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0431\u043E\u043D\u0443c.  \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435: " + dragon1.getHealth());

	            return step(dragon1, dragon2, log, 1);
	        }
	      };

	      return step(this.dragon1, this.dragon2, this.log, 1);
	    }
	  }, {
	    key: "getLog",
	    value: function getLog() {
	      return this.log.getList();
	    }
	  }]);

	  return Game;
	}();

		exports.default = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Log = function () {
	  function Log() {
	    _classCallCheck(this, Log);

	    this.list = [];
	  }

	  _createClass(Log, [{
	    key: "add",
	    value: function add(str) {
	      this.list.push(str);
	    }
	  }, {
	    key: "getList",
	    value: function getList() {
	      return this.list;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.list.length = 0;
	    }
	  }]);

	  return Log;
	}();

		exports.default = Log;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMjdlNjdkYzMzZTIwMGYzNjYwYSIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvdGVzdC5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvZHJhZ29uLmpzIiwid2VicGFjazovLy9mcm9udGVuZC9hcmVuYS5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEyN2U2N2RjMzNlMjAwZjM2NjBhIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBEcmFnb24gZnJvbSBcIi4vZHJhZ29uLmpzXCI7XG5pbXBvcnQgQXJlbmEgZnJvbSBcIi4vYXJlbmEuanNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIlxuXG5kZXNjcmliZSgnR2FtZScsICgpID0+IHtcbiAgaXQoJ9Ch0L7Qt9C00LDQtdC8INC00YDQsNC60L7QvdC+0LInLCAoKSA9PiB7XG4gICAgY29uc3QgZHJhZ29uMSA9IG5ldyBEcmFnb24oJ9Ck0LDRhNC90LjRgCcsIDEwMCwgMjUpO1xuICAgIGNvbnN0IGRyYWdvbjIgPSBuZXcgRHJhZ29uKCfQodC80LDRg9CzJywgMTAwLCAyMCk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjEuZ2V0TmFtZSgpLCAn0KTQsNGE0L3QuNGAJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjIuZ2V0TmFtZSgpLCAn0KHQvNCw0YPQsycpO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24xLmdldEhlYWx0aCgpLCAxMDApO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24yLmdldEhlYWx0aCgpLCAxMDApO1xuICAgIFxuICAgIGRyYWdvbjEuc2V0SGVhbHRoKDE1MCk7XG4gICAgZHJhZ29uMi5zZXRIZWFsdGgoNzUpO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24xLmdldEhlYWx0aCgpLCAxNTApO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24yLmdldEhlYWx0aCgpLCA3NSk7XG4gICAgXG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjEuZ2V0RGFtYWdlKCksIDI1KTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMi5nZXREYW1hZ2UoKSwgMjApO1xuICB9KTtcbiAgXG4gIGl0KCfQodC+0LfQtNCw0LXQvCDQsNGA0LXQvdGDJywgKCkgPT4ge1xuICAgIGNvbnN0IGFyZW5hID0gbmV3IEFyZW5hKDEwKTtcbiAgICBhc3NlcnQuZXF1YWwoYXJlbmEuYmFmZigobikgPT4gbiwgMTAwKSwgMTEwKTtcbiAgICBhc3NlcnQuZXF1YWwoYXJlbmEuZGViYWZmKChuKSA9PiBuICogMC4xLCAxMDApLCA5OSk7XG4gIH0pO1xuICBcbiAgaXQoJ9CY0LPRgNCwJywgKCkgPT4ge1xuICAgIGNvbnN0IGRyYWdvbjEgPSBuZXcgRHJhZ29uKCfQpNCw0YTQvdC40YAnLCAxMDAsIDUwKTtcbiAgICBjb25zdCBkcmFnb24yID0gbmV3IERyYWdvbign0KHQvNCw0YPQsycsIDEwMCwgNTApO1xuICAgIGNvbnN0IGFyZW5hID0gbmV3IEFyZW5hKDEwKTtcbiAgICBcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoYXJlbmEsIGRyYWdvbjEsIGRyYWdvbjIpO1xuICAgIGdhbWUuc3RhcnQoKTtcbiAgICBjb25zdCBsb2cgPSBnYW1lLmdldExvZygpO1xuICAgIGFzc2VydC5lcXVhbChsb2cubGVuZ3RoLCAxMSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvdGVzdC5qcyIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBoZWFsdGgsIGRhbWFnZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgZ2V0SGVhbHRoKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWx0aDtcbiAgfVxuICBcbiAgc2V0SGVhbHRoKGhlYWx0aCkge1xuICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICB9XG4gIFxuICAgZ2V0RGFtYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmRhbWFnZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2RyYWdvbi5qcyIsIid1c2Ugc3RyaWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlbmEge1xyXG4gIGNvbnN0cnVjdG9yKG4pIHtcclxuICAgdGhpcy5uID0gbjsgXHJcbiAgfVxyXG4gIFxyXG4gIGJhZmYoZnVuYywgaGVhbHRoKSB7XHJcbiAgICByZXR1cm4gaGVhbHRoICsgZnVuYyh0aGlzLm4pO1xyXG4gIH1cclxuICBcclxuICBkZWJhZmYoZnVuYywgaGVhbHRoKSB7XHJcbiAgICByZXR1cm4gaGVhbHRoIC0gZnVuYyh0aGlzLm4pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvYXJlbmEuanMiLCJpbXBvcnQgTG9nIGZyb20gXCIuL2xvZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoYXJlbmEsIGRyYWdvbjEsIGRyYWdvbjIpIHtcbiAgICB0aGlzLmFyZW5hID0gYXJlbmE7XG4gICAgdGhpcy5kcmFnb24xID0gZHJhZ29uMTtcbiAgICB0aGlzLmRyYWdvbjIgPSBkcmFnb24yO1xuICAgIHRoaXMubG9nID0gbmV3IExvZygpO1xuICB9XG4gIFxuICBzdGFydCgpIHtcbiAgICB0aGlzLmxvZy5jbGVhcigpO1xuICAgIFxuICAgIGNvbnN0IHN0ZXAgPSAoZHJhZ29uMSwgZHJhZ29uMiwgbG9nLCBuKSA9PiB7XG4gICAgICBpZiAoZHJhZ29uMS5nZXRIZWFsdGgoKSA8PSAwKSB7XG4gICAgICAgIGxvZy5hZGQoYNCU0YDQsNC60L7QvSAke2RyYWdvbjIuZ2V0TmFtZSgpfSDQv9C+0LHQtdC00LjQu2ApO1xuICAgICAgICByZXR1cm4gbG9nO1xuICAgICAgfSBlbHNlIGlmIChkcmFnb24yLmdldEhlYWx0aCgpIDw9IDApIHtcbiAgICAgICAgbG9nLmFkZChg0JTRgNCw0LrQvtC9ICR7ZHJhZ29uMi5nZXROYW1lKCl9INC/0L7QsdC10LTQuNC7YCk7XG4gICAgICAgIHJldHVybiBsb2c7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBuZXdIZWFsdGg7XG4gICAgICBcbiAgICAgIHN3aXRjaChuKSB7XG4gICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgbmV3SGVhbHRoID0gZHJhZ29uMi5nZXRIZWFsdGgoKSAtIGRyYWdvbjEuZ2V0RGFtYWdlKCk7XG4gICAgICAgICAgZHJhZ29uMi5zZXRIZWFsdGgobmV3SGVhbHRoKTtcbiAgICAgICAgICBsb2cuYWRkKGDQlNGA0LDQutC+0L0gJHtkcmFnb24yLmdldE5hbWUoKX0g0L/QvtC70YPRh9C40Lsg0YPRgNC+0L0gJHtkcmFnb24xLmdldERhbWFnZSgpfS4g0JfQtNC+0YDQvtCy0YzQtTogJHtkcmFnb24yLmdldEhlYWx0aCgpfWApO1xuICAgICAgICAgIFxuICAgICAgICAgIGRyYWdvbjIuc2V0SGVhbHRoKHRoaXMuYXJlbmEuYmFmZigobikgPT4gbiwgZHJhZ29uMi5nZXRIZWFsdGgoKSkpO1xuICAgICAgICAgIGxvZy5hZGQoYNCU0YDQsNC60L7QvSAke2RyYWdvbjIuZ2V0TmFtZSgpfSDQv9C+0LvRg9GH0LjQuyDQsdC+0L3Rg2MuICDQl9C00L7RgNC+0LLRjNC1OiAke2RyYWdvbjIuZ2V0SGVhbHRoKCl9YCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHN0ZXAoZHJhZ29uMSwgZHJhZ29uMiwgbG9nLCAyKTtcbiAgICAgICAgICBcbiAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICBuZXdIZWFsdGggPSBkcmFnb24xLmdldEhlYWx0aCgpIC0gZHJhZ29uMi5nZXREYW1hZ2UoKTtcbiAgICAgICAgICBkcmFnb24xLnNldEhlYWx0aChuZXdIZWFsdGgpO1xuICAgICAgICAgIGxvZy5hZGQoYNCU0YDQsNC60L7QvSAke2RyYWdvbjEuZ2V0TmFtZSgpfSDQv9C+0LvRg9GH0LjQuyDRg9GA0L7QvSAke2RyYWdvbjIuZ2V0RGFtYWdlKCl9LiDQl9C00L7RgNC+0LLRjNC1OiAke2RyYWdvbjEuZ2V0SGVhbHRoKCl9YCk7XG4gICAgICAgICAgXG4gICAgICAgICAgZHJhZ29uMS5zZXRIZWFsdGgodGhpcy5hcmVuYS5iYWZmKChuKSA9PiBuLCBkcmFnb24xLmdldEhlYWx0aCgpKSk7XG4gICAgICAgICAgbG9nLmFkZChg0JTRgNCw0LrQvtC9ICR7ZHJhZ29uMS5nZXROYW1lKCl9INC/0L7Qu9GD0YfQuNC7INCx0L7QvdGDYy4gINCX0LTQvtGA0L7QstGM0LU6ICR7ZHJhZ29uMS5nZXRIZWFsdGgoKX1gKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gc3RlcChkcmFnb24xLCBkcmFnb24yLCBsb2csIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RlcCh0aGlzLmRyYWdvbjEsIHRoaXMuZHJhZ29uMiwgdGhpcy5sb2csIDEpO1xuICB9XG4gIFxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nLmdldExpc3QoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2dhbWUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5saXN0ID0gW107ICBcclxuICB9XHJcbiAgXHJcbiAgYWRkKHN0cikge1xyXG4gICAgdGhpcy5saXN0LnB1c2goc3RyKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3Q7XHJcbiAgfVxyXG4gIFxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9sb2cuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2Q0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQXJCQTs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFYQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQWxEQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFmQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==