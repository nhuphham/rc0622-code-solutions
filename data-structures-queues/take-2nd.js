/* exported take2nd */

function take2nd(queue) {
  const a = queue.dequeue();
  const b = queue.dequeue();
  if (b === undefined) {
    return a;
  } else {
    queue.enqueue(a);
    return b;
  }
}
