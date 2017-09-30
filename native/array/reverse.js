Array.prototype._reverse = function() {
  var reverseArr = this.slice(0)
  for(var i = 0, len = reverseArr.length; i < len; i++) {
    this[i] = reverseArr[len - i - 1]
  }

  return this;
}
