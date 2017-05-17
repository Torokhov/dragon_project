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
	    assert.equal(log.getLength(), 11);
	    assert.equal(log.getRecord(11), 'Дракон Фафнир победил');
	    console.log(log.toString());
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
	          log.add("\u0414\u0440\u0430\u043A\u043E\u043D " + dragon1.getName() + " \u043F\u043E\u0431\u0435\u0434\u0438\u043B");
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
	      return this.log;
	    }
	  }]);

	  return Game;
	}();

		exports.default = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

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
	    key: 'add',
	    value: function add(str) {
	      this.list.push(str);
	    }
	  }, {
	    key: 'getList',
	    value: function getList() {
	      return this.list;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.list.length = 0;
	    }
	  }, {
	    key: 'getRecord',
	    value: function getRecord(num) {
	      return this.list[num - 1];
	    }
	  }, {
	    key: 'getLength',
	    value: function getLength() {
	      return this.list.length;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.list.reduce(function (str, value) {
	        return str += value + '\n';
	      }, '');
	    }
	  }]);

	  return Log;
	}();

		exports.default = Log;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhYWUxYWI2OTRkZjVjZDdhY2FlMyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvdGVzdC5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvZHJhZ29uLmpzIiwid2VicGFjazovLy9mcm9udGVuZC9hcmVuYS5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFhZTFhYjY5NGRmNWNkN2FjYWUzIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBEcmFnb24gZnJvbSBcIi4vZHJhZ29uLmpzXCI7XG5pbXBvcnQgQXJlbmEgZnJvbSBcIi4vYXJlbmEuanNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIlxuXG5kZXNjcmliZSgnR2FtZScsICgpID0+IHtcbiAgaXQoJ9Ch0L7Qt9C00LDQtdC8INC00YDQsNC60L7QvdC+0LInLCAoKSA9PiB7XG4gICAgY29uc3QgZHJhZ29uMSA9IG5ldyBEcmFnb24oJ9Ck0LDRhNC90LjRgCcsIDEwMCwgMjUpO1xuICAgIGNvbnN0IGRyYWdvbjIgPSBuZXcgRHJhZ29uKCfQodC80LDRg9CzJywgMTAwLCAyMCk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjEuZ2V0TmFtZSgpLCAn0KTQsNGE0L3QuNGAJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjIuZ2V0TmFtZSgpLCAn0KHQvNCw0YPQsycpO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24xLmdldEhlYWx0aCgpLCAxMDApO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24yLmdldEhlYWx0aCgpLCAxMDApO1xuICAgIFxuICAgIGRyYWdvbjEuc2V0SGVhbHRoKDE1MCk7XG4gICAgZHJhZ29uMi5zZXRIZWFsdGgoNzUpO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24xLmdldEhlYWx0aCgpLCAxNTApO1xuICAgIGFzc2VydC5lcXVhbChkcmFnb24yLmdldEhlYWx0aCgpLCA3NSk7XG4gICAgXG4gICAgYXNzZXJ0LmVxdWFsKGRyYWdvbjEuZ2V0RGFtYWdlKCksIDI1KTtcbiAgICBhc3NlcnQuZXF1YWwoZHJhZ29uMi5nZXREYW1hZ2UoKSwgMjApO1xuICB9KTtcbiAgXG4gIGl0KCfQodC+0LfQtNCw0LXQvCDQsNGA0LXQvdGDJywgKCkgPT4ge1xuICAgIGNvbnN0IGFyZW5hID0gbmV3IEFyZW5hKDEwKTtcbiAgICBhc3NlcnQuZXF1YWwoYXJlbmEuYmFmZigobikgPT4gbiwgMTAwKSwgMTEwKTtcbiAgICBhc3NlcnQuZXF1YWwoYXJlbmEuZGViYWZmKChuKSA9PiBuICogMC4xLCAxMDApLCA5OSk7XG4gIH0pO1xuICBcbiAgaXQoJ9CY0LPRgNCwJywgKCkgPT4ge1xuICAgIGNvbnN0IGRyYWdvbjEgPSBuZXcgRHJhZ29uKCfQpNCw0YTQvdC40YAnLCAxMDAsIDUwKTtcbiAgICBjb25zdCBkcmFnb24yID0gbmV3IERyYWdvbign0KHQvNCw0YPQsycsIDEwMCwgNTApO1xuICAgIGNvbnN0IGFyZW5hID0gbmV3IEFyZW5hKDEwKTtcbiAgICBcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoYXJlbmEsIGRyYWdvbjEsIGRyYWdvbjIpO1xuICAgIGdhbWUuc3RhcnQoKTtcbiAgICBjb25zdCBsb2cgPSBnYW1lLmdldExvZygpO1xuICAgIGFzc2VydC5lcXVhbChsb2cuZ2V0TGVuZ3RoKCksIDExKTtcbiAgICBhc3NlcnQuZXF1YWwobG9nLmdldFJlY29yZCgxMSksICfQlNGA0LDQutC+0L0g0KTQsNGE0L3QuNGAINC/0L7QsdC10LTQuNC7Jyk7XG4gICAgY29uc29sZS5sb2cobG9nLnRvU3RyaW5nKCkpO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3Rlc3QuanMiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ29uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaGVhbHRoLCBkYW1hZ2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGdldEhlYWx0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFsdGg7XG4gIH1cbiAgXG4gIHNldEhlYWx0aChoZWFsdGgpIHtcbiAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgfVxuICBcbiAgIGdldERhbWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYW1hZ2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9kcmFnb24uanMiLCIndXNlIHN0cmljdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZW5hIHtcclxuICBjb25zdHJ1Y3RvcihuKSB7XHJcbiAgIHRoaXMubiA9IG47IFxyXG4gIH1cclxuICBcclxuICBiYWZmKGZ1bmMsIGhlYWx0aCkge1xyXG4gICAgcmV0dXJuIGhlYWx0aCArIGZ1bmModGhpcy5uKTtcclxuICB9XHJcbiAgXHJcbiAgZGViYWZmKGZ1bmMsIGhlYWx0aCkge1xyXG4gICAgcmV0dXJuIGhlYWx0aCAtIGZ1bmModGhpcy5uKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2FyZW5hLmpzIiwiaW1wb3J0IExvZyBmcm9tIFwiLi9sb2cuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGFyZW5hLCBkcmFnb24xLCBkcmFnb24yKSB7XG4gICAgdGhpcy5hcmVuYSA9IGFyZW5hO1xuICAgIHRoaXMuZHJhZ29uMSA9IGRyYWdvbjE7XG4gICAgdGhpcy5kcmFnb24yID0gZHJhZ29uMjtcbiAgICB0aGlzLmxvZyA9IG5ldyBMb2coKTtcbiAgfVxuICBcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5sb2cuY2xlYXIoKTtcbiAgICBcbiAgICBjb25zdCBzdGVwID0gKGRyYWdvbjEsIGRyYWdvbjIsIGxvZywgbikgPT4ge1xuICAgICAgaWYgKGRyYWdvbjEuZ2V0SGVhbHRoKCkgPD0gMCkge1xuICAgICAgICBsb2cuYWRkKGDQlNGA0LDQutC+0L0gJHtkcmFnb24yLmdldE5hbWUoKX0g0L/QvtCx0LXQtNC40LtgKTtcbiAgICAgICAgcmV0dXJuIGxvZztcbiAgICAgIH0gZWxzZSBpZiAoZHJhZ29uMi5nZXRIZWFsdGgoKSA8PSAwKSB7XG4gICAgICAgIGxvZy5hZGQoYNCU0YDQsNC60L7QvSAke2RyYWdvbjEuZ2V0TmFtZSgpfSDQv9C+0LHQtdC00LjQu2ApO1xuICAgICAgICByZXR1cm4gbG9nO1xuICAgICAgfVxuICAgICAgXG4gICAgICBsZXQgbmV3SGVhbHRoO1xuICAgICAgXG4gICAgICBzd2l0Y2gobikge1xuICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgIG5ld0hlYWx0aCA9IGRyYWdvbjIuZ2V0SGVhbHRoKCkgLSBkcmFnb24xLmdldERhbWFnZSgpO1xuICAgICAgICAgIGRyYWdvbjIuc2V0SGVhbHRoKG5ld0hlYWx0aCk7XG4gICAgICAgICAgbG9nLmFkZChg0JTRgNCw0LrQvtC9ICR7ZHJhZ29uMi5nZXROYW1lKCl9INC/0L7Qu9GD0YfQuNC7INGD0YDQvtC9ICR7ZHJhZ29uMS5nZXREYW1hZ2UoKX0uINCX0LTQvtGA0L7QstGM0LU6ICR7ZHJhZ29uMi5nZXRIZWFsdGgoKX1gKTtcbiAgICAgICAgICBcbiAgICAgICAgICBkcmFnb24yLnNldEhlYWx0aCh0aGlzLmFyZW5hLmJhZmYoKG4pID0+IG4sIGRyYWdvbjIuZ2V0SGVhbHRoKCkpKTtcbiAgICAgICAgICBsb2cuYWRkKGDQlNGA0LDQutC+0L0gJHtkcmFnb24yLmdldE5hbWUoKX0g0L/QvtC70YPRh9C40Lsg0LHQvtC90YNjLiAg0JfQtNC+0YDQvtCy0YzQtTogJHtkcmFnb24yLmdldEhlYWx0aCgpfWApO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBzdGVwKGRyYWdvbjEsIGRyYWdvbjIsIGxvZywgMik7XG4gICAgICAgICAgXG4gICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgbmV3SGVhbHRoID0gZHJhZ29uMS5nZXRIZWFsdGgoKSAtIGRyYWdvbjIuZ2V0RGFtYWdlKCk7XG4gICAgICAgICAgZHJhZ29uMS5zZXRIZWFsdGgobmV3SGVhbHRoKTtcbiAgICAgICAgICBsb2cuYWRkKGDQlNGA0LDQutC+0L0gJHtkcmFnb24xLmdldE5hbWUoKX0g0L/QvtC70YPRh9C40Lsg0YPRgNC+0L0gJHtkcmFnb24yLmdldERhbWFnZSgpfS4g0JfQtNC+0YDQvtCy0YzQtTogJHtkcmFnb24xLmdldEhlYWx0aCgpfWApO1xuICAgICAgICAgIFxuICAgICAgICAgIGRyYWdvbjEuc2V0SGVhbHRoKHRoaXMuYXJlbmEuYmFmZigobikgPT4gbiwgZHJhZ29uMS5nZXRIZWFsdGgoKSkpO1xuICAgICAgICAgIGxvZy5hZGQoYNCU0YDQsNC60L7QvSAke2RyYWdvbjEuZ2V0TmFtZSgpfSDQv9C+0LvRg9GH0LjQuyDQsdC+0L3Rg2MuICDQl9C00L7RgNC+0LLRjNC1OiAke2RyYWdvbjEuZ2V0SGVhbHRoKCl9YCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHN0ZXAoZHJhZ29uMSwgZHJhZ29uMiwgbG9nLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0ZXAodGhpcy5kcmFnb24xLCB0aGlzLmRyYWdvbjIsIHRoaXMubG9nLCAxKTtcbiAgfVxuICBcbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2dhbWUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5saXN0ID0gW107ICBcclxuICB9XHJcbiAgXHJcbiAgYWRkKHN0cikge1xyXG4gICAgdGhpcy5saXN0LnB1c2goc3RyKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3Q7XHJcbiAgfVxyXG4gIFxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJlY29yZChudW0pIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3RbbnVtLTFdO1xyXG4gIH1cclxuICBcclxuICBnZXRMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0Lmxlbmd0aDtcclxuICB9XHJcbiAgXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0LnJlZHVjZSgoc3RyLCB2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RyICs9IGAke3ZhbHVlfVxcbmA7XHJcbiAgICB9LCAnJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9sb2cuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFyQkE7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBWEE7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFsREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTdCQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==