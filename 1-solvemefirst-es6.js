/*
Complete the function solveMeFirst to compute the sum of two integers.

Function prototype:

int solveMeFirst(int a, int b);

where,

a is the first integer input.
b is the second integer input
Return values

sum of the above two integers
Sample Input

a = 2
b = 3
Sample Output

5
Explanation

The sum of the two integers  and  is computed as: 2 + 3 = 5. 
*/

// es6 

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stin.on('data', data => {
    input_stdin += data;
});

process.stdin.on('end', () => {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readline(){
    return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
    return a + b;
}


function main() {
    const a = parseInt(readLine());
    const b = parseInt(readline());;

    const res = solveMeFirst(a,b);
    console.log(res);
}