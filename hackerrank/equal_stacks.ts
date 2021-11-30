/*
    Назва задачі: Equal Stacks
    Рівень задачі: Easy
    Опис:
    You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. 
    You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

    Find the maximum possible height of the stacks such that all of the stacks are exactly the same height.
    This means you must remove zero or more cylinders from the top of zero or more of the three stacks
    until they are all the same height, then return the height.
    
    Example:
    Input: h1=[3,2,1,1,1] h2=[4,3,2] h3=[1,1,4,1]
    Output: 5
    Explanation: Calculate height of arrays. Reverse then to create stack.
    While stacks aren't empty find lowest stack.
    Pop element from other two until they are equal or lower in size that our lowest in iteration.
    If all are equal return height, if not repeat until all are equal or empty.

    Time complexity: O(nmk)
 */

function equalStacks(h1: number[], h2: number[], h3: number[]): number {
    const sum = (stack: number[])=>{
        return stack.reduce((sum, value) => {
            return sum += value;
        }, 0);
    };
  
    let h1sum = sum(h1); 
    let h2sum = sum(h2);
    let h3sum = sum(h3);

    h1.reverse();
    h2.reverse();
    h3.reverse();

    while(h1 && h2 && h3){
        const min = Math.min(h1sum,h2sum,h3sum);

        while (h1sum > min) {
            h1sum -= h1.pop();
        }
        while (h2sum > min) {
            h2sum -= h2.pop();
        }
        while (h3sum>min) {
            h3sum -= h3.pop();
        }
        if (h1sum === h2sum && h1sum === h3sum){
            return h1sum;
        }
    }
    return 0;
};
