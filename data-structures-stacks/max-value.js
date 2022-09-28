/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    if (stack.peek() > max) {
      max = stack.peek();
    }
    stack.pop();
  }
  return max;
}
