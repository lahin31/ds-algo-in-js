/**
 * We are going to implement a hash-table
 */

const HashFunction = require("./hash-function");

class HashTable {
  constructor() {
    this.hash_table = new Array(8);
  }

  insert(item) {
    const index = HashFunction(this.hash_table.length, item);
    this.hash_table[index] = item;
  }

  search(item) {
    const index = HashFunction(this.hash_table.length, item);
    if (this.hash_table[index]) return index;
    return "Not Found";
  }

  delete(item) {
    const index = HashFunction(this.hash_table.length, item);
    if (this.hash_table[index]) this.hash_table[index] = "";
    // not using splice as splice mutates the original array
    else return "Not Found";
  }

  getTable() {
    return this.hash_table;
  }
}

module.exports = HashTable;

// const hashTable = new HashTable;
// hashTable.insert("john");
// hashTable.insert("michael");
// hashTable.delete("john");
// console.log(hashTable.search("michael"));
// console.log(hashTable.getTable());
