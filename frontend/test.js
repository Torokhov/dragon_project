'use strict'

import Dragon from "./dragon.js";
import Arena from "./arena.js";

describe('Game', () => {
  it('Создаем драконов', () => {
    const dragon1 = new Dragon('Фафнир', 100, 25);
    const dragon2 = new Dragon('Смауг', 100, 20);
    assert.equal(dragon1.getName(), 'Фафнир');
    assert.equal(dragon2.getName(), 'Смауг');
    assert.equal(dragon1.getHealth(), 100);
    assert.equal(dragon2.getHealth(), 100);
    assert.equal(dragon1.getDamage(), 25);
    assert.equal(dragon2.getDamage(), 20);
  });
  
  it('Создаем арену', () => {
    const arena = new Arena();
    assert.equal(arena.baff((n) => n, 10, 100), 110);
    assert.equal(arena.debaff((n) => n * 0.1, 150, 100), 85);
  });
});
