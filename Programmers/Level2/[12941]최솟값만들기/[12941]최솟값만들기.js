function solution(A,B){
    let answer = 0;
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);


    for (let i = 0; i < A.length; i++) {
        answer = answer + (A[i] * B[i])
    }
    return answer;
}

let A = [1, 4, 2];
let B = [5, 4, 4];
console.log(solution(A,B));