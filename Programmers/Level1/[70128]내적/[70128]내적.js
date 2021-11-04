function solution(a, b) {
    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer = answer + a[i] * b[i]; 
    }
    return answer;
}

let a = [1,2,3,4];
let b = [-3,-1,0,2];
console.log(solution(a,b));

// feedback1
// reduce로 풀어볼것!;

function solution1(a, b) {
    return a.reduce((acc, cur, idx) => acc = acc + cur*b[idx], 0);
}

console.log(solution1(a,b));
