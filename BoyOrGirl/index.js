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


function main(){

    let line = readline();
    let distincs = [];
    for (let index = 0; index < line.length; index++) {
        const element = line[index];
        if(distincs.indexOf(element) == -1)
        {
            distincs.push(element);
        }

    }
    if(distincs.length % 2 == 0)
    {
        process.stdout.write("CHAT WITH HER!");
    }else{
    process.stdout.write("IGNORE HIM!");
}
    
}
