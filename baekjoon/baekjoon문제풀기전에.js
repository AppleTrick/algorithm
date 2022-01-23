/*
    백준에서 자바스크립트 되지 않기때문에. node.js 를 통해 실행 시켜야된다.
*/

// 한줄로 입력 받을때

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//  여러줄로 입력 받을때

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');