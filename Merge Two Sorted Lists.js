var mergeTwoLists = function(l1, l2) {
  if (l1 === null || l2 === null) {
      return l1 ? l1 : l2
  }

  var head = new ListNode()
  var current = head
  while (l1 && l2) {
      if (l1.val > l2.val) {
          current.next = l2
          l2 = l2.next
      } else {
          current.next = l1
          l1 = l1.next
      }
      current = current.next
  }
  current.next = l1 || l2
  return head.next
};