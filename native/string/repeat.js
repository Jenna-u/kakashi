String.prototype._repeat = function (count) {
  if (typeof count !== 'number') throw new RangeError('Invalid count value')
  if (count < 0) throw new RangeError('Invalid count value')
  var result = ''
  if (count < Infinity && count < Math.pow(2, 28)) {
    for (var i = 0; i < Math.floor(count); i++) {
      result += this
    }
  }

  return result
}
