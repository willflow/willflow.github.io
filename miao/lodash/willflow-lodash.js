var willflow = {
  chunk: function(array,size){
    let len = array.length
    let ary1 = []
    let ary2 = []
    let result = []
    for(let i = 0; i < size; i++){
      ary1.push(array[i])
    }
    for(let i = size; i < len; i++){
      ary2.push(array[i])
    }
    result.push(ary1)
    result.push(ary2)
    return result
  },
  compact: function(array){
    let len = array.length
    let result = []
    for(let i = 0; i < len; i++){
      if(Boolean(array[i]) == true) result.push(array[i])
    }
    return result
  }
}