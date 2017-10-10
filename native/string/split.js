String.prototype._split = function (separator) {
  var split_array = []
  var pos = this.indexOf(separator)
  var start = pos
  var result = ''
  var len = this.length
  split_array.push(this.substr(0, pos))
  
  if (separator === '') {
    for (var i=0; i < len; i++) {
      split_array.push(this[i])
    }
  }

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

  return split_array
}
