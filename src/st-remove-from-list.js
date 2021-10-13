const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {

  if(l == null){
    return l;
  }

  while (k == l.value) {
    l = l.next;
  } 

  let current = l;

  while(current !== null) {
    if (k == current.value) {
      current.value = current.next.value
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return l;
}

