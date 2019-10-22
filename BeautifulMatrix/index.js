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
    let onerow = 1;
    let onecol = 1

    for(var row=1; row<=5;row++)
    {
        let line = readline();
        for (let col = 0; col < line.split(" ").length; col++) {
            const element = line.split(" ")[col];
            if(element  === '1')
            {
                onerow = row;
                onecol = col + 1;
            }
        }
    }
    var res=  Math.abs(3 - onerow) + Math.abs(3 - onecol);
    process.stdout.write(res.toString());
}
