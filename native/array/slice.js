Array.prototype._slice = function(begin, end) {
  var len = this.length;
  begin = begin < 0 ? len + begin : begin || 0;
  end = end < 0 ? len + end - 1 : end || len;
  var result = []
  for (var i = begin; i < end && i < len; i++) {
    result.push(this[i]);
  }

  return result;
}
