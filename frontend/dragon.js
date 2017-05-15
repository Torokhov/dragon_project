'use strict'

export default class Dragon {
  constructor(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
  }
  
  getName() {
    return this.name;
  }
  
  getHealth() {
    return this.health;
  }
  
  setHealth(health) {
    this.health = health;
  }
  
   getDamage() {
    return this.damage;
  }
}
