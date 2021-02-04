var selectionSort = (list) => {
  if (list.length < 2) {
    return list
  }

  for (var i = 0; i < list.length; i++) {
    var min = list[i];
    var swap = i;
    for (var j = i + 1; j < list.length; j++) {
      if (list[j] < min) {
        min = list[j]
        swap = j
      }
    }
    if (swap !== i) {
      var temp = list[i]
      list[i] = list[swap]
      list[swap] = temp
    }
  }
  return list
}

console.log(selectionSort([4,6,2,3,7,5,1,8,9,0])) // [0,1,2,3,4,5,6,7,8,9]
console.log(selectionSort([4,6,2,3,7,5,1,8,9,0,-4,2,-7,5,3,-9,3,4,2,-1])) // [-9,-7,-4,-1,0,1,2,2,2,3,3,3,4,4,5,5,6,7,8,9]