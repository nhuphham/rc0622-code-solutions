/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let big = queue.dequeue();
  let possibleSmaller = queue.peek();

  while (big > possibleSmaller) {
    queue.enqueue(big);
    big = queue.dequeue();
    possibleSmaller = queue.peek();
  }
  return big;
}
