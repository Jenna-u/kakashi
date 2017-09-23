Array.prototype._includes = function (searchEle, index) {
  var formIndex = index < 0 ? this.length + index : index;
  formIndex = Math.max(formIndex, 0);
  for (var i = formIndex, len = this.length; i < len; i++) {
    return searchEle === this[i];
  }

  return false;
}
