function solution(n) {
    return String(n).split('').reverse().map((e) => Number(e));
}

let n = 12345;
console.log(solution(n));