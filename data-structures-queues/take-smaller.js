/* exported takeSmaller */

function takeSmaller(queue) {
  const a = queue.dequeue();
  const b = queue.dequeue();
  if (b === undefined) {
    return a;
  }
  if (b > a) {
    queue.enqueue(b);
    return a;
  } else {
    queue.enqueue(a);
    return b;
  }
}
