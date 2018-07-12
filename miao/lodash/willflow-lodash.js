var willflow = {
  chunk: function (array, size) {
    let len = array.length
    let ary1 = []
    let ary2 = []
    let result = []
    for (let i = 0; i < size; i++) {
      ary1.push(array[i])
    }
    for (let i = size; i < len; i++) {
      ary2.push(array[i])
    }
    result.push(ary1)
    result.push(ary2)
    return result
  },
  compact: function (array) {
    let len = array.length
    let result = []
    for (let i = 0; i < len; i++) {
      if (Boolean(array[i]) == true) result.push(array[i])
    }
    return result
  },
  difference: function (array, values) {
    let len = arguments.length
    let result = []
    let ary = []
    for (let i = 1; i < len; i++) {
      ary = ary.concat(arguments[i])
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < ary.length; j++) {
        if (array[i] == ary[j]) {
          array.splice(i, 1)
          i--
        }
      }
    }
    result = array
    return result
  },
  differenceBy: function (array, values, iteratee) {

  },
  drop: function (array, n) {
    let result = []
    if (n == undefined) n = 1
    for (let i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  },
  dropRight: function (array, n) {
    let result = []
    if (n == undefined) n = 1
    array.reverse()
    for (let i = n; i < array.length; i++) {
      result.unshift(array[i])
    }
    return result
  },
  fill: function (array, value, start, end) {
    var start = start || 0
    var end = end || array.length
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  head: function (array) {
    return array[0]
  },
  indexOf: function (array, value, fromindex) {
    var fromindex = fromindex || 0
    for (let i = fromindex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },
  initial: function (array) {
    let len = array.length
    array.length = len - 1
    return array
  },
  last: function (array) {
    return array[array.length - 1]
  },
  lastIndexOf: function (array, value, fromindex) {
    var fromindex = fromindex || 0
    let count = -1
    if (fromindex < 0 || fromindex > array.length) return -1
    for (let i = fromindex; i < array.length; i++) {
      if (array[i] == value) {
        count += 2
      }
    }
    return count
  },
  nth: function (array, n) {
    var n = n || 0
    if (n >= 0) {
      return array[n]
    } else {
      array.reverse()
      n = (-n) - 1
      return array[n]
    }
  },
  pull: function (array, value) {
    let len = arguments.length
    let ary = []
    for (let i = 1; i < len; i++) {
      ary = ary.concat(arguments[i])
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < ary.length; j++) {
        if (array[i] == ary[j]) {
          array.splice(i, 1)
          i--
          break
        }
      }
    }
    return array
  },
  pullAll: function (array, value) {
    let len = arguments.length
    let ary = []
    for (let i = 1; i < len; i++) {
      ary = ary.concat(arguments[i])
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < ary.length; j++) {
        if (array[i] == ary[j]) {
          array.splice(i, 1)
          i--
          break
        }
      }
    }
    return array
  },
  reverse: function (array) {
    let len = array.length
    for (let i = 0; i < len - 1; i++) {
      let a = array[i]
      let b = array[len - (1 + i)]
      array[len - (1 + i)] = a
      array[i] = b
    }
    return array
  },
  sortedIndex: function (array, value) {
    let len = arguments.length
    let ary = []
    for (let i = 0; i < len; i++) {
      ary = ary.concat(arguments[i])
    }
    ary.sort(function (a, b) {
      return a - b
    })
    for (let i = 0; i < ary.length; i++) {
      if (ary[i] == value) {
        return i
      }
    }
  }
}