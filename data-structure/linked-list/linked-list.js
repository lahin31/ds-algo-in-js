/**
 * We are going to implement a linked-list
 */

class LinkedList {
  constructor() {
    this.head = null; // initially when the object is created this.head is null
  }

  /**
   * appendNode - appending a node
   */
  appendNode(data) {
    let newNode = {
      data,
      ref: null,
    };
    let _head = this.head;

    while (_head.ref !== null) {
      _head = _head.ref;
    }
    _head.ref = newNode;
    return this.head;
  }

  /**
   * prepend - add element in the head, of the list
   */
  prepend(element) {
    let newNode = {
      data: element,
      ref: this.head,
    };
    this.head = newNode;
    return this.head;
  }

  /**
   * isEmpty - checks the list is empty or not
   */
  isEmpty() {
    return this.head === null; // returns true if the list is empty or returns false if it's not empty
  }

  /**
   * remove - removes the item from the list
   */
  remove(val) {
    let currentNode = this.head; // making a reference of this.head or list
    let previousNode;
    if (currentNode.data === val) {
      currentNode = currentNode.ref; // updating the this.head
      return currentNode;
    } else {
      while (currentNode.data !== val) {
        previousNode = currentNode;
        currentNode = currentNode.ref;
      }
      previousNode.ref = currentNode.ref; // when we find the data, the previousNode will update the node position with the currentNode
      return this.head;
    }
  }

  /**
   * contains - checks if the value contains in the list or not
   */
  contains(val) {
    let _head = this.head;
    while (_head !== null) {
      if (_head.data === val) {
        return true;
      }
      _head = _head.ref;
    }
    return false;
  }

  /**
   * size - returns the size of the list
   */
  size() {
    let count = 0;
    let _head = this.head; // making a reference of the list(this.head)
    while (_head !== null) {
      // loop the list untill the list is become null
      count++;
      _head = _head.ref; // updating the head with the ref(as ref can be our nested list)
    }
    return count;
  }

  /**
   * showList - return the whole list
   */
  showList() {
    return this.head;
  }
}

module.exports = LinkedList;

// let linkedList = new LinkedList();
// console.log(linkedList.prepend(10)); // { data: 10, ref: null }
// console.log(linkedList.appendNode(6)); // { data: 10, ref: { data: 6, ref: null } }
// console.log(linkedList.prepend(5)); // { data: 5, ref: { data: 10, ref: { data: 6, ref: null } } }
// console.log(linkedList.size()); // 3
// console.log(linkedList.isEmpty()); // false
// console.log(linkedList.remove(10)); // { data: 5, ref: { data: 6, ref: null } }
// console.log(linkedList.contains(10)); // false
