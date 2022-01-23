/*
    백준에서 자바스크립트 되지 않기때문에. node.js 를 통해 실행 시켜야된다.
*/

// 한줄로 입력 받을때

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

//  여러줄로 입력 받을때

// count : 횟수
// numbers = [] 여러줄의 값들이 하나씩 들어간다.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}