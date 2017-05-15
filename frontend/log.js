export default class Log {
  constructor() {
    this.list = [];  
  }
  
  add(str) {
    this.list.push(str);
  }
  
  getList() {
    return this.list;
  }
  
  clear() {
    this.list.length = 0;
  }
  
  toString() {
    
  }
}
