var insertionSort = (list) => {
  if (list.length < 2) {
    return list
  }

  for (var i = 0; i < list.length; i++) {
    for (var j = i; j > 0; j--) {
      if (list[j] < list[j - 1]) {
        var temp = list[j - 1]
        list[j - 1] = list[j]
        list[j] = temp
      } else {
        break
      }
    }
  }

  return list
}

console.log(insertionSort([4,6,2,3,7,5,1,8,9,0])) //[0,1,2,3,4,5,6,7,8,9]