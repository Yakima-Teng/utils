// typeOf, return 'array', 'object', 'function', 'null', 'undefined', 'string', 'number'
const typeOf = val => ({}).toString.call(val).slice(8, -1).toLowerCase()

// merge object properties (original object is revised)
const merge = (obj, options) => {
  if (typeOf(obj) === 'object' && typeOf(options) === 'object') {
    for (let p in options) {
      if (options.hasOwnProperty(p)) {
        if (typeOf(obj[p]) === 'object' && typeOf(options[p]) === 'object') {
          merge(obj[p], options[p])
        } else {
          obj[p] = options[p]
        }
      }
    }
  }
  return obj
}

export {
  typeOf,
  merge
}
