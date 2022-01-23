let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// input[0] : 첫번째 입력값
// input[1] : 두번째 입력값

let sum = 0;
for (let i = 0; i < Number(input[0]); i++) {
    sum += Number(input[1][i]);
}

console.log(sum);

