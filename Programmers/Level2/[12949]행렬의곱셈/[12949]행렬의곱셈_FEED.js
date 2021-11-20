function solution(A, B) {
    let answer = [];
  
    for (let i = 0; i < A.length; i++) {
      const row = A[i];
      answer.push([]);
      for (let j = 0; j < B[0].length; j++) {
        let sum = 0;

        for (let k = 0; k < B.length; k++) {
          sum += row[k] * B[k][j];
        }
        answer[i].push(sum);
      }
    }
    return answer;
  }

let arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
let arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]];

console.log(solution(arr1, arr2));