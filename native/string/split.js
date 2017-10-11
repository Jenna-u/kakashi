String.prototype._split = function (separator, limit) {
  var split_array = []
  var len = this.length

  if (separator === '') {
    for (var i=0; i < len; i++) {
      split_array.push(this[i])
    }
  } else {
    var pos = this.indexOf(separator)
    var start = pos
    var result = ''
    split_array.push(this.substr(0, pos))

    while (pos !== -1) {
      pos = this.indexOf(separator, pos + 1)
      if (pos === -1) {
        result = this.substr(start + 1, len - start)
        start = start + len - start
      } else {
        result = this.substr(start + 1, pos - start - 1)
        start = pos
      }

      split_array.push(result)
    }
  }

  limit = limit || split_array.length
  return split_array.slice(0, limit)
}
