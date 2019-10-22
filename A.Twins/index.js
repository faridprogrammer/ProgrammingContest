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

    let coinCount =Number.parseInt( readline());
    let coins = readline().split(" ").map( (item) => Number.parseInt(item));
    // desc
    coins = coins.sort((a,b) =>  a - b);
    
    let picked = [];
    let notPicked = coins;
    while(true) {
        
         picked.push(notPicked.pop());
         let pickedSum =  picked.reduce((a , b) => a + b, 0)
         let notPickedSum = notPicked.reduce((a,b) => a + b, 0);
         if(pickedSum > notPickedSum)
         {
            process.stdout.write(picked.length.toString());
             break;
         }

    
    }

    
}