Array.prototype._concat = function() {
  var newArr = this.slice(0);
  for (var i = 0, len = arguments.length; i < len; i++) {
    var arr = arguments[i];
    var arrLen = newArr.length;
    if (Array.isArray(arr)) {
      for (var j = 0; j < arr.length; j++) {
        newArr[arrLen + j] = arr[j];
      }
    } else {
      newArr[arrLen] = arr;
    }

  }

  return newArr;
}
