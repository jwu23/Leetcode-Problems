// var quickSort = (items, left, right) => {
//   var index;
//   if (items.length > 1) {
//     index = split(items, left, right);
//     if (left < index - 1) {
//       quickSort(items, left, index - 1);
//     }
//     if (index < right) {
//       quickSort(items, index, right);
//     }
//   }
//   return items;
// }

// var split = (items, left, right) => {
//   var pivot = items[Math.floor((right + left) / 2)];

//   while (left <= right) {
//     while (items[left] < pivot) {
//       left++;
//     }
//     while (items[right] > pivot) {
//       right--;
//     }
//     if (left <= right) {
//       var temp = items[left]
//       items[left] = items[right]
//       items[right] = temp
//       left++;
//       right--;
//     }
//   }
//   return left;
// }

// var test1 = [4,6,2,3,7,5,1,8,9,0];
// var test2 = [4,6,2,3,7,5,1,8,9,0,-4,2,-7,5,3,-9,3,4,2,-1];
// console.log(quickSort(test1, 0, test1.length - 1)); // [0,1,2,3,4,5,6,7,8,9]
// console.log(quickSort(test2, 0, test2.length - 1)); // [-9,-7,-4,-1,0,1,2,2,2,3,3,3,4,4,5,5,6,7,8,9]




var quickSort = (list) => {
  if (list.length < 2) {
    return list
  }

  var left =[]
  var right = []
  var middle = list[list.length - 1]

  for (var i = 0; i < list.length - 1; i++) {
    if(list[i] < middle) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }

  return [...quickSort(left), middle, ...quickSort(right)]
}



var test1 = [4,6,2,3,7,5,1,8,9,0];
var test2 = [4,6,2,3,7,5,1,8,9,0,-4,2,-7,5,3,-9,3,4,2,-1];
console.log(quickSort(test1)); // [0,1,2,3,4,5,6,7,8,9]
console.log(quickSort(test2)); // [-9,-7,-4,-1,0,1,2,2,2,3,3,3,4,4,5,5,6,7,8,9]