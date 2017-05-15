'use strict'

import Dragon from "./dragon.js";
import Arena from "./arena.js";
import Game from "./game.js"

describe('Game', () => {
  it('Создаем драконов', () => {
    const dragon1 = new Dragon('Фафнир', 100, 25);
    const dragon2 = new Dragon('Смауг', 100, 20);
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
  
  it('Создаем арену', () => {
    const arena = new Arena(10);
    assert.equal(arena.baff((n) => n, 100), 110);
    assert.equal(arena.debaff((n) => n * 0.1, 100), 99);
  });
  
  it('Игра', () => {
    const dragon1 = new Dragon('Фафнир', 100, 50);
    const dragon2 = new Dragon('Смауг', 100, 50);
    const arena = new Arena(10);
    
    const game = new Game(arena, dragon1, dragon2);
    game.start();
    const log = game.getLog();
    assert.equal(log.length, 11);
  });
});
