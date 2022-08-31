function filter(array, predicate) {
  var tempArr = [];
  for (let i = 0; i < array.length; i++) {
    tempArr.push(predicate(array[i]));
  }
  return tempArr;
}
