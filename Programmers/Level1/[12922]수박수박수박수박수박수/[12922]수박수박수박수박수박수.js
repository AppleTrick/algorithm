function solution(n) {
    let answer = '수박'.repeat(parseInt(n/2)) + '수'.repeat(n%2);
    return answer;
}


let n = 5
console.log(solution(n));