// 첫째 줄에 A+B를 출력한다.

// input : 1 2
// output : 3

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
