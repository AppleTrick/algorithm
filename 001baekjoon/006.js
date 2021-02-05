// 두 정수 A와 B를 입력받은 다음, 
//A-B를 출력하는 프로그램을 작성하시오.

// 첫째 줄에 A-B를 출력한다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = +(input[0]);
const B = +(input[1]);

console.log(A-B);

// const A = +"1";
// console.log(A);
// console.log(typeof(A));
