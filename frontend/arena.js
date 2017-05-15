'use strict'

export default class Arena {
  constructor(n) {
   this.n = n; 
  }
  
  baff(func, health) {
    return health + func(this.n);
  }
  
  debaff(func, health) {
    return health - func(this.n);
  }
}
