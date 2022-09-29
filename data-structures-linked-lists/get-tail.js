/* exported getTail */

function getTail(list) {
  let current = list;
  let next = list.next;
  while (next !== null) {
    current = next;
    next = current.next;
  }
  return current.data;
}
