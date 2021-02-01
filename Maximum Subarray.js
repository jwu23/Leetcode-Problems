var maxSubArray = function(nums) {
  var max = 0;
  if (nums.length < 2) {
    return nums[0]
  }

  max = nums[0]
  for (var i  = 0; i < nums.length; i++) {
    var current = nums[i];
    if (current > max) {
      max = current
    }
    for (var j = i + 1; j < nums.length; j++) {
      current += nums[j]
      if (current < max) {
        continue;
      }
      max = current;
    }
  }
  return max
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([-2, 1]))