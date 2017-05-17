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
  
  getRecord(num) {
    return this.list[num-1];
  }
  
  getLength() {
    return this.list.length;
  }
  
  toString() {
    return this.list.reduce((str, value) => {
      return str += `${value}\n`;
    }, '');
  }
}
