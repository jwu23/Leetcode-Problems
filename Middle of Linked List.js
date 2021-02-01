var middleNode = function(head) {
  var count = 0
  var current = head
  while (current) {
      count++
      current = current.next
  }

  var center = Math.floor(count / 2)
  for (var i = 0; i < center; i++) {
      head = head.next
  }
  return head

//     var arr = []
//     while(head) {
//         arr.push(head)
//         head = head.next
//     }

//     return arr[Math.floor(arr.length / 2)]

};