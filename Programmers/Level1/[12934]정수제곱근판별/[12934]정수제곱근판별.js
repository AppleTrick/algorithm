function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n)+1)**2 : -1
}

let n = 121;
console.log(solution(n));
