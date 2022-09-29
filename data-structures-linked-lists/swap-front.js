/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const a = list.data;
    list.data = list.next.data;
    list.next.data = a;
  }
  return list;
}
