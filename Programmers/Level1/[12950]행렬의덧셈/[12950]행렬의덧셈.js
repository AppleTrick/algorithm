function solution(arr1, arr2) {
    let answer = arr1.map((a,i) => a.map((b,j) => b + arr2[i][j]));
    return answer;
}

let arr1 = [[1,2],[2,3]];
let arr2 = [[3,4],[5,6]];
console.log(solution(arr1,arr2));