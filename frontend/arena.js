'use strict'

export default class Arena {
  baff(func, n, health) {
    return health + func(n);
  }
  
  debaff(func, n, health) {
    return health - func(n);
  }
}
