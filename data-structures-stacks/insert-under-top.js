/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack;
  }
  var a = stack.peek();
  stack.pop();
  stack.push(value);
  stack.push(a);
  return stack;
}
