// You are given an integer array nums sorted in ascending order (not necessarily distinct values), and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,4,4,5,6,6,7] might become [4,5,6,6,7,0,1,2,4,4]).

// If target is found in the array return its index, otherwise, return -1.



var search = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return true;
    }
  }
  return false;
}

var test = search([2,5,6,0,0,1,2], 0)
console.log(test)