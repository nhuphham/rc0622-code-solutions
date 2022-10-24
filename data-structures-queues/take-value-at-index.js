/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    const a = queue.dequeue();
    queue.enqueue(a);
  }
  return queue.dequeue();
}
