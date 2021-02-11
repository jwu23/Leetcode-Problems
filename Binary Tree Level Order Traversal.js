var levelOrder = function(root) {
  if (root === null) {
    return []
  }
  var result = []
  var queue = [root]
  console.log(queue)
  while (queue.length) {
    var temp = []
    var length = queue.length
    for (var i = 0; i < length; i++) {
      var num = queue.shift()
      console.log(queue)
      temp.push(num.val)
      if (num.left) {
        queue.push(num.left)
      }
      if (num.right) {
        queue.push(num.right)
      }
    }
    result.push(temp)
  }
  return result
};