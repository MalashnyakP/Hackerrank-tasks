/*
    Назва задачі: Delete a Node
    Рівень задачі: Easy
    Опис:
    Delete the node at a given position in a linked list and return a reference to the head node. 
    The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.
    
    Example:
    Input(first number is lenght of list, last number is position of an element to delete,
        rest of an input is linked list): 
    8
    20
    6
    2
    19
    7
    4
    15
    9
    3

    Output: 20 6 2 7 4 15 9
    Explanation:
    Check if position equals 0. If it's true delete reference to next element from head and return next element.
    Iterate list until we i === position, then change reference of previous node to next node and delete reference from current node. 

    Time complexity: O(n)
 */

function deleteNode(llist: SinglyLinkedListNode, position: number): SinglyLinkedListNode {
    let head : SinglyLinkedListNode = llist;

    if (!position) {
        const newHead = head.next;
        head.next = null;
        return newHead;
    }
    
    let prevNode = head;
    let currNode = head.next;
    
    for (let i = 1; i <= position; i++) {
        if (i === position) {
            prevNode.next = currNode.next;
            currNode.data = null;
            currNode.next = null;
            break;
        }
        
        prevNode = currNode;
        currNode = currNode.next;
    }
    
    return head;
};

class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
};
