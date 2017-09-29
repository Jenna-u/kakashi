String.prototype._search = function(regexp) {
  if (typeof regexp !== 'string') {
    regexp = new RegExp(regexp)
    return this.indexOf(this.match(regexp)[0])
  } else {
      return this.indexOf(regexp)
  }
}
