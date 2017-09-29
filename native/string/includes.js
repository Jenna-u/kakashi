String.prototype._includes = function (searchString, position) {
  if (typeof searchString !== 'string') return false;
  position = position < 0 ? this.length + position : position || 0
  for (var i=position, len = this.length; i < len; i++) {
    return this[i] === searchString
  }
  return false
}
