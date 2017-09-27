Object.prototype._assign = function (target) {
  for (var i = 0, len = arguments.length; i < len; i++) {
    var sources = arguments[i];
    for (var k in sources) {
      if (Object.prototype.hasOwnProperty.call(sources, k)) {
        target[k] = sources[k]
      }
    }
  }
  return target;
}
