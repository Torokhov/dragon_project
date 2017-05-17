import Log from "./log.js";

export default class Game {
  constructor(arena, dragon1, dragon2) {
    this.arena = arena;
    this.dragon1 = dragon1;
    this.dragon2 = dragon2;
    this.log = new Log();
  }
  
  start() {
    this.log.clear();
    
    const step = (dragon1, dragon2, log, n) => {
      if (dragon1.getHealth() <= 0) {
        log.add(`Дракон ${dragon2.getName()} победил`);
        return log;
      } else if (dragon2.getHealth() <= 0) {
        log.add(`Дракон ${dragon1.getName()} победил`);
        return log;
      }
      
      let newHealth;
      
      switch(n) {
        case 1: 
          newHealth = dragon2.getHealth() - dragon1.getDamage();
          dragon2.setHealth(newHealth);
          log.add(`Дракон ${dragon2.getName()} получил урон ${dragon1.getDamage()}. Здоровье: ${dragon2.getHealth()}`);
          
          dragon2.setHealth(this.arena.baff((n) => n, dragon2.getHealth()));
          log.add(`Дракон ${dragon2.getName()} получил бонуc.  Здоровье: ${dragon2.getHealth()}`);
          
          return step(dragon1, dragon2, log, 2);
          
        case 2: 
          newHealth = dragon1.getHealth() - dragon2.getDamage();
          dragon1.setHealth(newHealth);
          log.add(`Дракон ${dragon1.getName()} получил урон ${dragon2.getDamage()}. Здоровье: ${dragon1.getHealth()}`);
          
          dragon1.setHealth(this.arena.baff((n) => n, dragon1.getHealth()));
          log.add(`Дракон ${dragon1.getName()} получил бонуc.  Здоровье: ${dragon1.getHealth()}`);
          
          return step(dragon1, dragon2, log, 1);
      }
    }
    
    return step(this.dragon1, this.dragon2, this.log, 1);
  }
  
  getLog() {
    return this.log;
  }
}
