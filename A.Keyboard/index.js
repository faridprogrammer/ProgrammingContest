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

function main() {

    let direction = readline();
    let origWord = readline();
    var keyboard = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
    ];
    let rowCount = 3, colCount = 10;

    /*
        s;;upimrrfod;pbr
        allyouneedislove
    */

    if (direction == "R") {
        let result = [];
        // shift left
        for (let index = 0; index < origWord.length; index++) {
            const element = origWord[index];
            var loc = findElementLocation(keyboard, element);
            result.push(keyboard[loc.row][loc.col - 1]);
        }

        process.stdout.write(result.join(''));

    }
    else if (direction == "L") {
        // shift right
        let result = [];

        for (let index = 0; index < origWord.length; index++) {
            const element = origWord[index];
            var loc = findElementLocation(keyboard, element);
            result.push(keyboard[loc.row][loc.col +1]);
        }

        process.stdout.write(result.join(''));
    }

}

function findElementLocation(keyboard, element) {
    for (let row = 0; row < 3; row++) {
        const cols = keyboard[row];
        for (let col = 0; col < 10; col++) {
            const colitem = cols[col];
            if (colitem == element) {
                return {
                    row: row,
                    col: col
                };
            }
        }
    }
    return {
        row: -1,
        col: -1
    };
}