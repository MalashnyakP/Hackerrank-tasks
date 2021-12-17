/*
    Назва задачі: Reverse a Linked List
    Рівень задачі: Easy
    Опис:
    Given the pointer to the head node of a linked list, 
    change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.
    
    Example:
    Input: 1 5 1 2 3 4 5
    Output: 5 4 3 2 1
    Explanation: First number is number of test cases. Then is a number of element in list.
    Next n integers is list.
    Check if list contains only head, if it does return head. Change pointer of heads next node to head and heads to null.
    Repeat same process for each node. Return last node.

    Time complexity: O(n)
 */
function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
  if (llist.next === null) return llist;

  let currNode = llist.next;
  let nextNode = currNode.next;
  llist.next = null;
  currNode.next = llist;

  while (nextNode.next) {
    let swap = nextNode.next;
    nextNode.next = currNode;
    currNode = nextNode;
    nextNode = swap;
  }

  nextNode.next = currNode;

  return nextNode;
}

class SinglyLinkedListNode {
  constructor(public next: SinglyLinkedListNode, public value: string) {}
}
