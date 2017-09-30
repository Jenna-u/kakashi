Array.prototype._unshift = function() {
  var res = []
  for (var i = 0; i < arguments.length; i++) {
    res.push(arguments[i]);
  }
  return res.concat(this).length;
}
