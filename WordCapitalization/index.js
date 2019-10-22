'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}

// thats all what you have to write to get input from stdin, using readLine.


// Main code runs in main();


function main() {
    let word = readline();

    let res = word;
    let firtLetter = res[0].toUpperCase();
    let res2 = res.substring(1,res.length);
    process.stdout.write(firtLetter.concat(res2));
}
