Array.prototype._filter = function (callback) {
  var result = []
  for (var i = 0, len = this.length; i < len; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }

  return result
}