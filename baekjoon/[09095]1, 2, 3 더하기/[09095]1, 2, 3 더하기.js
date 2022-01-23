

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let numbers = [];

// let count = 3
// let numbers = [4,7,10];


for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

let arr = Array.from({length : 10} , () => 0)
arr[0] = 1;
arr[1] = arr[0] + 1;
arr[2] = arr[0] + arr[1] + 1; // 3 , 1+1+1 , 1 + 2 , 2 + 1;

for (let i = 3; i < arr.length; i++) {
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
}

for (let j = 0; j < count; j++) {
    console.log(arr[numbers[j]-1]);
}
