/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
  var temp = '1';
  var result = 0;

  if (K % 2 === 0 || K % 5 === 0) {
    return -1
  }

  checkDivisible = (K, temp) => {
    if (parseInt(temp) % K === 0) {
      result = temp.length;
      return;
    } else {
      newStr = temp + '1';
      checkDivisible(K, newStr);
    }
  }
  checkDivisible(K, temp)
  return result;
};

// var test = smallestRepunitDivByK(19)
// console.log(test)

console.log(1111111111111111 % 19)