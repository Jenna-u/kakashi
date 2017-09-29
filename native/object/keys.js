Object.prototype._keys = function (obj) {
  if (typeof obj !== 'object') return;
  var res = [];
  for (var k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      res.push(k);
    }
  }

  return res;
}
