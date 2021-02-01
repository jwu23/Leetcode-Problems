// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.



var numIdenticalPairs = function(nums) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      // console.log(i, nums[j])
      if (nums[i] === nums[j]) {
        count++
      }
    }
  }
  return count;
};


var test = numIdenticalPairs([1,1,1,1])
console.log(test)