function solution(n) {
    
    return Number(String(n).split('').map((e) => Number(e)).sort((a,b) => b - a).join(''));
}

let n = 118372;
console.log(solution(n));