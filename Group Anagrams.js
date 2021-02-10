var groupAnagrams = function(strs) {
  var result = []
  var sorted = []
  var count = {}
  if (strs.length === 1) {
      result.push([strs[0]])
      return result
  }

  for (var i = 0; i < strs.length; i++) {
      var temp = strs[i].split('').sort().join('')
      sorted.push(temp)
  }
  for (var i = 0; i < sorted.length; i++) {
      if (!count[sorted[i]]) {
          var temp = []
          temp.push(strs[i])
          count[sorted[i]] = temp
      } else {
          count[sorted[i]].push(strs[i])
      }
  }
  for (var key in count) {
      result.push(count[key])
  }
  return result
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))