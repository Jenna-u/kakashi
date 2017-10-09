Array.prototype._splice = function(start, deleteCount, item) {
  var len = this.length
  start = start < 0 ? len + start : start || 0
  deleteCount = deleteCount || len - start
  var deleteArr = []

  for (var i = start; i < deleteCount; i++) {
    deleteArr.push(this[i])
  }
  this[start] = item

  return deleteArr;
}
