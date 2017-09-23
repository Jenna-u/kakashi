Array.prototype._join = function (separator) {
  separator = separator || ','
  var newStr = ''
  for (var i=0, len = this.length; i < len; i++) {
    newStr += i === len - 1 ? this[i] + '' : this[i] + separator
  }
  return newStr;
}
