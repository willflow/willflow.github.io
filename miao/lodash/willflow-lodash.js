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
  drop: function(array,n){
    let result = []
    if(n == undefined) n = 1
    for(let i = n; i < array.length; i++){
      result.push(array[i])
    }
    return result
  },
  dropright: function(array,n){
    let result = []
    if(n == undefined) n = 1
    array.reverse()
    for(let i = n; i <array.length ; i++){
      result.unshift(array[i])
    }
    return result
  }
}