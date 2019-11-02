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
    let number = readline().split('');
    var count = number.length;
    //console.log("count = " + count);
    for(let index = 1; index <= count - 1; index++)
    {
        var combines = GetCombinations(index,count);
        console.log("combinations count = " + combines.length);
        for (let combine = 0; combine < combines.length; combine++) {
            let combination = combines[combine].split('');
            //console.log("combination = " + combination);
            let subNum = [...number];
            //console.log("subNum = " + subNum);

            for (let comindex = combination.length - 1; comindex >= 0 ; comindex--) {
                let combitem = combination[comindex];
                //console.log("combitem = " + combitem + " subnumitem = " + subNum[combitem]);
                subNum[combitem] = "_";
            }
            //console.log("subNum = " + subNum.join(''));
            subNum =  subNum.join('').replaceAll("_",""); 
            //console.log("subNum = " + subNum);
            if(IsDevisibleByEight(subNum))
            {
                
                console.log("YES");
                console.log(subNum.toString());
                return;
            }
        }
    }

    console.log("NO");
    

}

function IsDevisibleByEight(numStr)
{
    if(numStr.length < 3)
    {
        return new Number(numStr) % 8 == 0;
    }
    else{
        var arr = numStr.split('');
        var newNum = new Number(arr.splice(arr.length - 3, 3).join(''));
        return newNum % 8 == 0;
    }
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function GetCombinations(r,n){
    let res = [];
    let a = new Array(r);
    // initialize first combination
    for (let i = 0; i < r; i++) {
        a[i] = i;
    }
    let i = r - 1; // Index to keep track of maximum unsaturated element in array
    // a[0] can only be n-r+1 exactly once - our termination condition!
    while (a[0] < n - r + 1) {
        // If outer elements are saturated, keep decrementing i till you find unsaturated element
        while (i > 0 && a[i] == n - r + i) {
            i--;
        }
        res.push(a.join("")); // pseudo-code to print array as space separated numbers
        a[i]++;
        // Reset each outer element to prev element + 1
        while (i < r - 1) {
            a[i + 1] = a[i] + 1;
            i++;
        }
    }

    return res;
}