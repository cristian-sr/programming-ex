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

//es 2005

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
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
    var a = parseInt(readLine());
    var b = parseInt(readline());;

    var res = solveMeFirst(a,b);
    console.log(res);
}