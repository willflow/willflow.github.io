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
      if (ary[i] === value) {
        return i
      }
    }
  },
  fromPairs: function (pairs) {
    let list = {}
    for (let i = 0; i < pairs.length; i++) {
      for (let j = 0; j < pairs[i].length; j++) {
        list[pairs[i][j]] = pairs[i][j + 1]
        j++
      }
    }
    return list
  },
  negate: function (predicate) {
    return function (...arguments) {
      return !predicate(...arguments)
    }
  },
  sum: function (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
  },
  subtract: function (minuend, subtrahend) {
    return minuend - subtrahend
  },
  sortedIndexOf: function (array, value) {
    let len = array.length
    for (let i = 0; i < len; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },
  sortedLastIndex: function (array, value) {
    let len = array.length
    for (let i = len - 1; i > 0; i--) {
      if (array[i] === value) {
        i += 1
        return i
      }
    }
  },
  sortedLastIndexOf: function (array, value) {
    let len = array.length
    for (let i = len - 1; i > 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },
  uniq: function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (result.includes(array[i])) {
        continue
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  reverse: function (array) {
    let len = array.length
    for (let i = 0; i < len * 2; i++) {
      array.unshift(array[i])
      i++
    }
    for (let i = 0; i < len; i++) {
      array.pop()
    }
    return array
  },
  flatten: function (array) {
    let result = [].concat.apply([], array)
    return result
  },
  flattenDeep: function flattenDeep(arr) {
    let result = []
    for (let i = 0, len = arr.length; i < len; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flattenDeep(arr[i]))
      } else {
        result.push(arr[i])
      }
    }
    return result
  },
  intersection: function (arrays) {
    let result = []
    let ary = []
    for (let i = 1; i < arguments.length; i++) {
      ary = ary.concat(arguments[i])
    }
    for (let i = 0; i < arguments[0].length; i++) {
      for (let j = 0; j < ary.length; j++) {
        if (arguments[0][i] == ary[j]) {
          result.push(arguments[0][i])
        }
      }
    }
    return result
  },
  sortedUniq: function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (result.includes(array[i])) {
        continue
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  sortedUniqBy: function (array, iteratee) {
    let ary = array.map(function (item) {
      return iteratee(item)
    })
    let ary3 = []
    let ary2 = []
    let result = []
    for (let i = 0; i < ary.length; i++) {
      if (ary3.includes(ary[i])) {
        continue
      } else {
        ary3.push(ary[i])
        ary2.push(i)
      }
    }
    for (let i = 0; i < ary2.length; i++) {
      result.push(array[ary2[i]])
    }
    return result
  },
  tail: function (array) {
    for (let i = 0; i < 1; i++) {
      array.shift()
    }
    return array
  },
  take: function (array, n = 1) {
    return array.slice(0, n)
  },
  takeRight: function(array,n = 1){
    if((array.length - n) < 0){
      return array.slice()
    }
    return array.slice(array.length - n)
  },
  flattenDepth: function flattenDepth(array, depth) {
    var depth = depth || 1
    let result = []
    if (depth == 1) {
        return result = [].concat.apply([], array)
    }
    for (let i = 0; i < depth; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flattenDepth(array[i]))
        } else {
            result.push(array[i])
        }
    }
    return result
  },
  differenceBy: function(array, values, iteratee){
    let arys = this.identity(array,iteratee)
    let val = this.identity(values,iteratee)
    let count
    let newAry = []
    for(let i = 0; i < arys.length; i++){
      if(!val.includes(arys[i])){
        count = i
        newAry.push(array[count])
      }
    }
    return newAry
  },
  differenceWith: function(array,values,comparator){

  },
  union: function(array){
    let ary = arguments[0]
    let ary2 = []
    for(let i = 1; i <arguments.length; i++){
      ary2 = ary2.concat(arguments[i])
    }
    for(let i = 0; i < ary2.length; i++){
      if(!ary.includes(ary2[i])){
        ary.push(ary2[i])
      }
    }
    return ary
  },
  unionBy: function(array,values,iteratee){
    let arys = this.identity(array,iteratee)
    let val = this.identity(values,iteratee)
    let ary1 = []
    for(let i = 0; i < val.length; i++){
      if(!arys.includes(val[i])){
        arys.push(val[i])
        ary1.push(i)
      }
    }
    let result = Array.from(array)
    for(let i = 0; i < ary1.length; i++){
      result.push(values[ary1[i]])
    }
    return result
  },
  identity: function(ary,value){
    let result = []
    if(typeof value == 'function'){
      for(let i = 0; i < ary.length;i++){
        result.push(value(ary[i]))
      }
    }
    if(typeof value == 'string'){
      for(let i = 0; i < ary.length;i++){
        result.push(ary[i][value])
      }
    }
    return result
  },
  sumBy: function(array,iteratee){
    let result = 0
    for(let i = 0; i < array.length;i++){
      result += iteratee(array[i])
    }
    return result
  },
  join: function(array,separator = ','){
    let len = array.length
    let str = ''
    for(let i = 0; i < len-1; i++){
      str += String(array[i])+String(separator)
    }
    str += array[len - 1]
    return str
  },
  slice: function(array, start = 0, end = array.length){
    let result = []
    for(let i = start; i < end; i++){
      result.push(array[i])
    }
    return result
  },
  sortedIndexBy: function(array,values,iteratee){
    let arys = this.identity(array,iteratee)
    let val
    if(typeof iteratee == 'function'){
      val = iteratee(values)
    }else{
      val = values[iteratee]
    }
    for(let i = 0; i < arys.length; i++){
      if(arys[i] == val){
        return i
      }
    }
  },
  sortedLastIndexBy: function(array,values,iteratee){
    let arys = this.identity(array,iteratee)
    let val
    if(typeof iteratee == 'function'){
      val = iteratee(values)
    }else{
      val = values[iteratee]
    }
    for(let i = arys.length - 1; i > 0; i--){
      if(arys[i] == val){
        return i
      }
    }
  },
  zip: function(arrays){
    let result = []
    let ary1 = []
    let ary2 = []
    let ary3 = []
    for(let i = 0; i < arguments.length; i++){
      result = result.concat(arguments[i])
    }
    for(let i = 0; i < result.length; i++){
      if(i % 2 == 0){
        ary1.push(result[i])
      }else{
        ary2.push(result[i])
      }
    }
    ary3.push(ary1)
    ary3.push(ary2)
    return ary3
  },
  flip: function(func){
    return function(...arguments){
      return func(...arguments.reverse())
    }
  },
  negate: function(func){
    return function(...arguments){
      return !func(...arguments)
    }
  },
  without: function(array,...values){
    return array.filter(function(item){
      values.indexOf(item) == -1
    })
  },
  xor: function(...arrays){
    return arrays.filter(function(item){
      arrays.indexOf(item) == arrays.lastIndexOf(item)
    })
  }
}