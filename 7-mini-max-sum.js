/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, arr=[1,3,5,7,9]. Our minimum sum is 1 + 3 + 5 + 7 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print

16 24

Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

miniMaxSum has the following parameter(s):

arr: an array of 5 integers
Input Format

A single line of five space-separated integers.

Constraints
1 <= arr[i] <= 10^9

Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

Our initial numbers are 1, 2, 3, 4, and 5. We can calculate the following sums using four of the five integers:

1. If we sum everything except 1, our sum is 2+3+4+5=14.
2. If we sum everything except 2, our sum is 1+3+4+5=13.
3. If we sum everything except 3, our sum is 1+2+4+5=12.
4. If we sum everything except 4, our sum is 1+2+3+5=11.
5. If we sum everything except 5, our sum is 1+2+3+4=10.
Hints: Beware of integer overflow! Use 64-bit Integer.

Need help to get started? Try the Solve Me First problem
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(input) {
    var arrClone1 = input.slice()   //'input' not 'arr'
    var arrClone2 = input.slice()   //'input' not 'arr'
    var arrMinor = arrClone1.sort(function (a, b) { return a - b; })
    arrMinor.pop()

    var arrMajor = arrClone2.sort(function (a, b) { return b - a; })
    arrMajor.pop()

    function getSum(a, b) {
        return a + b;
    }

    var result1 = arrMinor.reduce(getSum)
    var result2 = arrMajor.reduce(getSum)

    console.log(`${result1} ${result2}`)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
