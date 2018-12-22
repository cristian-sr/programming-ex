/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in 12 hour format
Input Format

A single string s containing a time in 12-hour clock format (i.e.: hh:mm:ssAM  or hh:mm:ssPM), where 01 <= hh <= 12 and 00 <= mm, ss <= 59.

Constraints

All input times are valid
Output Format

Convert and print the given time in -hour format, where .

Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var time = s.charAt(8) + s.charAt(9);
    if (time == "AM") {
        if (s.charAt(0) == "1" && s.charAt(1) == "2") {
            return ("00" + s.substr(2, 6));
        }
        else {
            return s.substr(0, 8);
        }
    }

    else if (time == "PM") {
        if (s.charAt(0) == "0") {
            if (s.charAt(1) == "1") {
                return ("13" + s.substr(2, 6))
            }
            if (s.charAt(1) == "2") {
                return ("14" + s.substr(2, 6))
            }
            if (s.charAt(1) == "3") {
                return ("15" + s.substr(2, 6))
            }
            if (s.charAt(1) == "4") {
                return ("16" + s.substr(2, 6))
            }
            if (s.charAt(1) == "5") {
                return ("17" + s.substr(2, 6))
            }
            if (s.charAt(1) == "6") {
                return ("18" + s.substr(2, 6))
            }
            if (s.charAt(1) == "7") {
                return ("19" + s.substr(2, 6));
            }
            if (s.charAt(1) == "8") {
                return ("20" + s.substr(2, 6))
            }
            if (s.charAt(1) == "9") {
                return ("21" + s.substr(2, 6))
            }
        }
        if (s.charAt(0) == "1") {
            if (s.charAt(1) == "0") {
                return ("22" + s.substr(2, 6))
            }
            if (s.charAt(1) == "1") {
                return ("23" + s.substr(2, 6))
            }
            if (s.charAt(1) == "2") {
                return ("12" + s.substr(2, 6))
            }
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}


