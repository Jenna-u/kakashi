if (!Object.assign) {
  Object.assign = function (target, sources) {
    for (var key in sources) {
      if (Object.prototype.hasOwnProperty.call(sources, key)) {
        target[key] = sources
      }
    }

    return target;
  }
}
