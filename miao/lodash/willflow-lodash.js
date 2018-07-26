let lodash = function(){
    function chunk(array, size) {
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
    }
    function compact(array) {
      let len = array.length
      let result = []
      for (let i = 0; i < len; i++) {
        if (Boolean(array[i]) == true) result.push(array[i])
      }
      return result
    }
    function difference(array, values) {
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
    }
    function drop(array, n) {
      let result = []
      if (n == undefined) n = 1
      for (let i = n; i < array.length; i++) {
        result.push(array[i])
      }
      return result
    }
    function dropRight(array, n) {
      let result = []
      if (n == undefined) n = 1
      array.reverse()
      for (let i = n; i < array.length; i++) {
        result.unshift(array[i])
      }
      return result
    }
    function fill(array, value, start, end) {
      var start = start || 0
      var end = end || array.length
      for (let i = start; i < end; i++) {
        array[i] = value
      }
      return array
    }
    function head(array) {
      return array[0]
    }
    function indexOf(array, value, fromindex) {
      var fromindex = fromindex || 0
      for (let i = fromindex; i < array.length; i++) {
        if (array[i] == value) {
          return i
        }
      }
      return -1
    }
    function initial(array) {
      let len = array.length
      array.length = len - 1
      return array
    }
    function last(array) {
      return array[array.length - 1]
    }
    function lastIndexOf(array, value, fromindex) {
      var fromindex = fromindex || 0
      let count = -1
      if (fromindex < 0 || fromindex > array.length) return -1
      for (let i = fromindex; i < array.length; i++) {
        if (array[i] == value) {
          count += 2
        }
      }
      return count
    }
    function nth(array, n) {
      var n = n || 0
      if (n >= 0) {
        return array[n]
      } else {
        array.reverse()
        n = (-n) - 1
        return array[n]
      }
    }
    function pull(array, value) {
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
    }
    function pullAll(array, value) {
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
    }
    function reverse(array) {
      let len = array.length
      for (let i = 0; i < len - 1; i++) {
        let a = array[i]
        let b = array[len - (1 + i)]
        array[len - (1 + i)] = a
        array[i] = b
      }
      return array
    }
    function sortedIndex(array, value) {
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
    }
    function fromPairs(pairs) {
      let list = {}
      for (let i = 0; i < pairs.length; i++) {
        for (let j = 0; j < pairs[i].length; j++) {
          list[pairs[i][j]] = pairs[i][j + 1]
          j++
        }
      }
      return list
    }
    function negate(predicate) {
      return function (...arguments) {
        return !predicate(...arguments)
      }
    }
    function sum(array) {
      let sum = 0
      for (let i = 0; i < array.length; i++) {
        sum += array[i]
      }
      return sum
    }
    function subtract(minuend, subtrahend) {
      return minuend - subtrahend
    }
    function sortedIndexOf(array, value) {
      let len = array.length
      for (let i = 0; i < len; i++) {
        if (array[i] === value) {
          return i
        }
      }
      return -1
    }
    function sortedLastIndex(array, value) {
      let len = array.length
      for (let i = len - 1; i > 0; i--) {
        if (array[i] === value) {
          i += 1
          return i
        }
      }
    }
    function sortedLastIndexOf(array, value) {
      let len = array.length
      for (let i = len - 1; i > 0; i--) {
        if (array[i] === value) {
          return i
        }
      }
      return -1
    }
    function uniq(array) {
      let result = []
      for (let i = 0; i < array.length; i++) {
        if (result.includes(array[i])) {
          continue
        } else {
          result.push(array[i])
        }
      }
      return result
    }
    function reverse(array) {
      let len = array.length
      for (let i = 0; i < len * 2; i++) {
        array.unshift(array[i])
        i++
      }
      for (let i = 0; i < len; i++) {
        array.pop()
      }
      return array
    }
    function flatten(array) {
      let result = [].concat.apply([], array)
      return result
    }
    function flattenDeep(arr) {
      let result = []
      for (let i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
          result = result.concat(flattenDeep(arr[i]))
        } else {
          result.push(arr[i])
        }
      }
      return result
    }
    function intersection(arrays) {
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
    }
    function sortedUniq(array) {
      let result = []
      for (let i = 0; i < array.length; i++) {
        if (result.includes(array[i])) {
          continue
        } else {
          result.push(array[i])
        }
      }
      return result
    }
    function sortedUniqBy(array, iteratee) {
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
    }
    function tail(array) {
      for (let i = 0; i < 1; i++) {
        array.shift()
      }
      return array
    }
    function take(array, n = 1) {
      return array.slice(0, n)
    }
    function takeRight(array,n = 1){
      if((array.length - n) < 0){
        return array.slice()
      }
      return array.slice(array.length - n)
    }
    function flattenDepth(array, depth) {
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
    }
    function differenceBy(array, values, iteratee){
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
    }
    function union(array){
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
    }
    function unionBy(array,values,iteratee){
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
    }
    function identity(ary,value){
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
    }
    function sumBy(array,iteratee){
      let result = 0
      for(let i = 0; i < array.length;i++){
        result += iteratee(array[i])
      }
      return result
    }
    function join(array,separator = ','){
      let len = array.length
      let str = ''
      for(let i = 0; i < len-1; i++){
        str += String(array[i])+String(separator)
      }
      str += array[len - 1]
      return str
    }
    function slice(array, start = 0, end = array.length){
      let result = []
      for(let i = start; i < end; i++){
        result.push(array[i])
      }
      return result
    }
    function sortedIndexBy(array,values,iteratee){
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
    }
    function sortedLastIndexBy(array,values,iteratee){
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
    }
    function zip(arrays){
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
    }
    function flip(func){
      return function(...arguments){
        return func(...arguments.reverse())
      }
    }
    function negate(func){
      return function(...arguments){
        return !func(...arguments)
      }
    }
    function without(array,...values){
      return array.filter(function(item){
        return values.indexOf(item) == -1
      })
    }
    function xor(arrays){
      let ary = []
      for(let i = 0; i < arguments.length; i++){
        ary = ary.concat(arguments[i])
      }
      return ary.filter(function(item){
        return ary.indexOf(item) == ary.lastIndexOf(item)
      })
    }
    function size(collection){
      return Object.keys(collection).length
    }
    function zipObject(props,values){
      let result = {}
      for(let i = 0; i < props.length; i++){
        result[props[i]] = values[i]
      }
      return result
    }
    function min(array){
      if(array.length == 0) return undefined
      array.sort(function(a,b){
        return a- b
      })
      return array[0]
    }
    function add(augend, addend){
      return augend + addend
    }
    function divide(dividend,divisor){
      return dividend / divisor
    }
    function max(array){
      if(array.length == 0) return undefined
      array.sort(function(a,b){
        return a - b
      })
      return array[array.length - 1]
    }
    function mean(array){
      reducer = (accumulator, currentValue) => accumulator + currentValu
      return array.reduce(reducer) / array.length
    }
    function subtract(minuend,subtrahend){
      return minuend - subtrahend
    }
    function property(name) {
      return function(obj){
        return obj[name]
      }
    }

    return willflow = {
      chunk: chunk,
      compact: compact,
      difference: difference,
      drop: drop,
      dropRight: dropRight,
      fill: fill,
      head: head,
      indexOf: indexOf,
      initial: initial,
      last: last,
      lastIndexOf: lastIndexOf,
      nth: nth,
      pull: pull,
      pullAll: pullAll,
      reverse: reverse,
      sortedIndex: sortedIndex,
      fromPairs: fromPairs,
      negate: negate,
      sum: sum,
      subtract: subtract,
      sortedIndexOf: sortedIndexOf,
      sortedLastIndex: sortedLastIndex,
      sortedLastIndexOf: sortedLastIndexOf,
      uniq: uniq,
      reverse: reverse,
      flatten: flatten,
      flattenDeep: flattenDeep,
      intersection: intersection,
      sortedUniq: sortedUniq,
      sortedUniqBy: sortedUniqBy,
      tail: tail,
      take: take,
      takeRight: takeRight,
      flattenDepth: flattenDepth,
      differenceBy: differenceBy,
      union: union,
      unionBy: unionBy,
      identity: identity,
      sumBy: sumBy,
      join: join,
      slice: slice,
      sortedIndexBy: sortedIndexBy,
      sortedLastIndexBy: sortedLastIndexBy,
      zip: zip,
      flip: flip,
      negate: negate,
      without: without,
      xor: xor,
      size: size,
      zipObject: zipObject,
      min: min,
      add: add,
      divide: divide,
      max: max,
      mean: mean,
      subtract: subtract,
      property: property,
    }
}()