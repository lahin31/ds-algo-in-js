/**
 * We are implementing a Queue using Array Data Structure
 */

class Queue {
  constructor() {
    this.students = [];
  }

  /**
   * enqueue - add new_student in the rear
   */
  enqueue(new_student) {
    this.students.push(new_student);
    return this.students;
  }

  /**
   * dequeue - delete the item from front
   */
  dequeue() {
    this.students.shift();
    return this.students;
  }

  /**
   * getQueue - returns the whole queue
   */
  getQueue() {
    return this.students;
  }

  /**
   * getFrontValue - returns front value of the queue
   */
  getFrontValue() {
    return this.students[0];
  }
}

module.exports = Queue;
