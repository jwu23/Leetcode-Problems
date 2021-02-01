var productExceptSelf = function(nums) {
  var result = []
  var left = []
  var right = []

  left[0] = 1
  for (var i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1]
  }

  right[nums.length - 1] = 1
  for (var i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1]
  }

  for (var i = 0; i < nums.length; i++) {
    result.push(left[i] * right[i])
  }
  // for (var i = 0; i < nums.length; i++) {
  //   total *= nums[i];
  // }
  // for (var i = 0; i < nums.length; i++) {
  //   result.push(total / nums[i])
  // }
  // console.log(total)
  return result
};


// console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]

// console.log(productExceptSelf([1,2,0,4])) // [0,0,8,0]

console.log(productExceptSelf([0,0]))