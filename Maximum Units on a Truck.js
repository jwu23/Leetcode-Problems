/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  var maxUnits = 0;
  var boxes = 0;
  boxTypes.sort((a,b) => {
      return b[1] - a[1];
  })

  for (var i = 0; i < boxTypes.length; i++) {
      if (boxes === truckSize) {
          break;
      }
      if (boxTypes[i][0] + boxes <= truckSize) {
          boxes += boxTypes[i][0];
          maxUnits += boxTypes[i][0] * boxTypes[i][1];
      } else {
          var toAdd = truckSize - boxes;
          boxes += toAdd;
          maxUnits += toAdd * boxTypes[i][1];
      }
  }

  return maxUnits;

};

console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)) // 91