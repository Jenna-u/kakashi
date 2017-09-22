Array.prototype._copyWithin = function(target, start, end) {
  var newArr = this.slice(0);
  var len = newArr.length;
  var newArrTarget = target < 0 ? len + target : target;
  var newArrStart = start < 0 ? len + start : start || 0;
  var newArrEnd = end < 0 ? len + end : end || len;

  for (var i = newArrStart; newArrTarget - i - newArrStart < len && i < newArrEnd; i++) {
    newArr[newArrTarget - newArrStart + i] = this[i];
  }

  return newArr;
}
