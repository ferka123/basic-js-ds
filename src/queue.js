const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.data = [];
  }

  getUnderlyingList(index=0) {
    if (this.data.length>index)
      return {value: this.data[index], next: this.getUnderlyingList(++index)}
    else return null
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue(value) {
    return this.data.shift(value)
  }
}

module.exports = {
  Queue
};
