Array.prototype._copyWithin = function(target, start, end) {
  var newArr = this.slice(0);
  var len = this.length;
  var newArrTarget = target < 0 ? len + target : target;
  var newArrStart = start < 0 ? len + start : start || 0;
  var newArrEnd = end < 0 ? len + end : end || len;
  newArrTarget = Math.max(newArrTarget, 0);
  newArrStart = Math.max(newArrStart, 0);
  newArrEnd = Math.min(newArrEnd, len)
  for (var i = newArrStart; newArrTarget + i - newArrStart < len && i < newArrEnd; i++) {
    newArr[newArrTarget - newArrStart + i] = this[i];
  }

  return newArr;
}
