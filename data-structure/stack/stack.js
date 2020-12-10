/**
 * We are going to implemant a Stack using JavaScript Object, however you can use Array
 * making two operations push and pop
 */

class Stack {
  constructor() {
    this.storage = {};
    this.key_index = 0;
  }

  /**
   * push - inserting val into the stack
   */
  push(val) {
    this.storage[this.key_index] = val;
    this.key_index++;
    return this.storage;
  }

  /**
   * pop - deleting value from the stack
   */
  pop() {
    this.key_index -= 1;
    delete this.storage[this.key_index];
    return this.storage;
  }

  /**
   * showStack - returning the whole stack
   */
  showStack() {
    return this.storage;
  }
}

module.exports = Stack;
