/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  var b;
  var a = stack.peek();
  stack.pop();
  b = stack.peek();
  stack.push(a);
  return b;
}
