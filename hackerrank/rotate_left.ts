/*
    Назва задачі: Left Rotation
    Рівень задачі: Easy
    Опис:
    Given an array of size n, shifts each of the array's elements 1 unit to the left.
    Given an integer, d, rotate the array that many steps left and return the result.
    
    Example:
    Input: nums = [1,2,3,4,5], d = 2
    Output: [3,4,5,1,2]
    Explanation:
    rotate 1 steps to the left: [2,3,4,5,1]
    rotate 2 steps to the left: [3,4,5,1,2]

    Time complexity: O(n)
 */

function rotateLeft(d: number, arr: number[]): number[] {
    const firstHalf = arr.slice(d, arr.length); 
    const secondHalf = arr.slice(0,d);

    return firstHalf.concat(secondHalf);
};
