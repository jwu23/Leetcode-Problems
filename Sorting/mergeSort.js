var mergeSort = (list) => {
  if (list.length < 2) {
    return list
  }

  var front = list.slice(0, Math.floor(list.length / 2))
  var end = list.slice(Math.floor(list.length / 2))

  var sort = (front, end) => {
    // console.log(front, end)
    var result = []
    while (front.length && end.length) {
      if (front[0] <= end[0]) {
        result.push(front.shift())
      } else {
        result.push(end.shift())
      }
    }
    result = [...result, ...front, ...end]
    return result
  }

  return sort(mergeSort(front), mergeSort(end))

}

console.log(mergeSort([4,6,2,3,7,5,1,8,9,0])) //[0,1,2,3,4,5,6,7,8,9]
console.log(mergeSort([4,6,2,3,7,5,1,8,9,0,-4,2,-7,5,3,-9,3,4,2,-1])) // [-9,-7,-4,-1,0,1,2,2,2,3,3,3,4,4,5,5,6,7,8,9]