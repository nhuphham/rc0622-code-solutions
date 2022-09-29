/* exported getLength */

function getLength(list) {
  let temp = list.next;
  let count = 1;
  while (temp) {
    count++;
    temp = temp.next;
  }
  return count;
}
