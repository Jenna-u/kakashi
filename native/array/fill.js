Array.prototype._fill = function(value, start, end){
  var newArr = this.slice(0);
  var len = this.length;
  var newStart = start < 0 ? len + start : start || 0;
  var newEnd = end < 0 ? len + end : end || len;
  for (var i = newStart; i < len && i < newEnd ; i++) {
    newArr[i] = value;
  }

  return newArr;
}
