var sortArrayByParityII = function(A) {
  var result = new Array(A.length)
  var even = 0;
  var odd = 1;

  for (var i = 0; i < A.length; i++) {
      if (A[i] % 2 === 0) {
          result[even] = A[i]
          even += 2
      } else {
          result[odd] = A[i]
          odd += 2
      }
  }
  return result
};

console.log(sortArrayByParityII([4, 2, 5, 7, 1, 6])) // [ 4, 5, 2, 7, 6, 1 ]