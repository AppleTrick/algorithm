function solution(n) {
    let answer = parseInt([...n.toString(3)].reverse().join(''),3)
    return answer;
}

let n = 125	
console.log(solution(n));

// 피드백 
// parseInt(num , ? )
// ? 진법의 num을 10 진법으로 바꿔준다.
// [...] 전개 연산자를 통해 쉽게 배열로 바꿀수 있었음 