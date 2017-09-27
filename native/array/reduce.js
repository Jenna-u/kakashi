Array.prototype._reduce = function(callback, initialValue) {
  if (this.length <= 0) throw new TypeError('Array is null')
  var accumulator, currentValue, currentIndex;
  if (initialValue) {
    accumulator = initialValue
    currentValue = this[0]
  } else {
    accumulator = this[0]
    currentValue = this[1]
    currentIndex = 1
    initialValue = this[0]
  }

  for (var i=currentIndex, len = this.length; i < len; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}
