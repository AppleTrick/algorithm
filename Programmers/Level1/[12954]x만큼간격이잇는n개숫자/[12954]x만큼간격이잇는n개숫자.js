function solution(x, n) {
    // let answer = [];
    // for (let i = 1; i <= n; i++) {
    //     answer.push(x * i);
    // }
    // return answer;

    return Array(n).fill(x).map((e,i) => (1+i) * e);
}

let x = 2;
let n = 5;
console.log(solution(x,n));


/*

for 문보다 함수를 이용하는 방법을 생각하자
Array(n).fill(x).map((e,i) => (1+i) * e);


*/