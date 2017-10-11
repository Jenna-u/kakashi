Array.prototype._splice = function(start, deleteCount,item) {
  var len = this.length
  start = Math.max(start < 0 ? len + start : start, 0)
  deleteCount = deleteCount <= 0 ? 0 : deleteCount
  item = item || ''
  var deleteArr = []
  var addArr = this.slice(0, start).concat(item)

  for (var i = start; i < len; i++) {
    deleteArr.push(this[i])
  }

  // this.slice(0, start).concat(item).concat(this.slice(start + deleteCount, this.length))

  return deleteArr.slice(0, deleteCount);
}
