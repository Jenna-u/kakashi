String.prototype._substr = function (start, end) {
  var len = this.length
  var newStart = start < 0 ? len + start : start || 0
  newStart = Math.max(newStart, 0)
  var result = ''
  if (end <= 0) return result
  var newEnd = Math.min(end, len) || len
  var count = 0

  for (var i = newStart; i < len; i++) {
    if (count < newEnd) {
      result += this[i]
      count ++
    }
  }

  return result
}
