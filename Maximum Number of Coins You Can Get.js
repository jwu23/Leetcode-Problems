/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a,b) => {
      return b - a
  })

  var result = 0
  for (var i = 1; i <= piles.length / 3; i++) {
      result += piles[(i * 2) - 1]
  }
  return result
};