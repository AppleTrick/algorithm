function solution(numbers) {
    let answer = 45;
    for (const x of numbers) {
        answer-=x;
    }
    return answer;
}

let numbers = [1,2,3,4,6,7,8,0];
console.log(solution(numbers));


// feedback1
/*
    reduce 문법으로 푸는방법도 나름의 최고의 방법
*/