/*
    Назва задачі: Queue using two stacks
    Рівень задачі: Medium
    Опис:
    In this challenge, you must first implement a queue using two stacks. 
    Then process q queries, where each query is one of the following types:

    1 x: Enqueue element x into the end of the queue.
    2: Dequeue the element at the front of the queue.
    3: Print the element at the front of the queue.

    Example:
    Input: 10 
          1 42
          2
          1 14
          3 
          1 28
          3
          1 60
          1 78
          2
          2
    Output: 14
            14
    Explanation: we get number of queries, then we iterate throught them and process them
    On operation 1 we add x to first stack.
    On operation 2 if second stack is empty we rewrite all element from first stack to second, then pop second stack.
    On operation 3 if second stack is empty and we first isn't we log first element from first stack. 
    If it isn't we log last element from second stack.

    Time complexity: O(n)
 */

const inputLines = "2 \n 1 42 \n 2";

function main() {
  const queue: string[] = [];
  const secondQ: string[] = [];
  const q = +inputLines[0];
  for (let i = 1; i <= q; ++i) {
    const [operation, value] = inputLines[i].split(" ");

    switch (operation) {
      case "1": {
        queue.push(value);

        break;
      }

      case "2": {
        if (!secondQ.length) {
          while (queue.length) {
            secondQ.push(queue.pop());
          }
        }
        if (secondQ.length) {
          secondQ.pop();
        }

        break;
      }
      case "3": {
        if (!secondQ.length && queue[0]) {
          console.log(queue[0]);
        }
        if (secondQ.length) {
          console.log(secondQ[secondQ.length - 1]);
        }
        break;
      }
    }
  }
}

function mainForOneStack() {
  const queue = [];
  const q = +inputLines[0];
  for (let i = 1; i <= q; ++i) {
    const [operation, value] = inputLines[i].split(" ");

    switch (operation) {
      case "1": {
        queue.push(value);
        break;
      }

      case "2": {
        queue.shift();
        break;
      }
      case "3": {
        if (queue[0]) console.log(queue[0]);
        break;
      }
    }
  }
}
