if (!Object.keys) {
  Object.keys = function (obj) {
    if (typeof obj !== 'object') throw new TypeError('Object.keys called on non-object');
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        res.push(key);
      }
    }

    return res;
  }
}
