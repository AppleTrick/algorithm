function solution(n) {
    let answer = parseInt(n.toString(3).split('').reverse().join(''),3)
    return answer;
}

let n = 125	
console.log(solution(n));

// 피드백 
// parseInt(num , ? )
// ? 진법의 num을 10 진법으로 바꿔준다.