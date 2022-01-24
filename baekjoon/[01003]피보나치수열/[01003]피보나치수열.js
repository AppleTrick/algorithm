// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let count = input[0];
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
//     if (input[i] !== '') {
//         numbers.push(input[i].split(' '));
//     }
// }

let count = 2;
let numbers = [6,22,0,40]

let arr = Array.from({length : 41}, () => [0,0]);

arr[0][0] = 1
arr[0][1] = 0
arr[1][0] = 0
arr[1][1] = 1

for (let j = 2; j < arr.length; j++) {
    arr[j][0] = arr[j-1][0] + arr[j-2][0]
    arr[j][1] = arr[j-1][1] + arr[j-2][1]
}

for (let i = 0; i < numbers.length; i++) {
    console.log(`${arr[numbers[i]][0]} ${arr[numbers[i]][1]}`);
}