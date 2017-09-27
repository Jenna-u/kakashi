Object.prototype._keys = function (obj) {
  var res = [];
  for (var k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res.push(key);
    }
  }

  return res;
}
