function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        const row =arr1[i];
        answer.push([]);
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            for(let k = 0; k < arr2.length; k++){
                sum += row[k] * arr2[k][j]
            }
            answer[i].push(sum)
            
        }
    }
    return answer;
    
}

let arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
let arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]];

console.log(solution(arr1, arr2));

// feedback : 코드가 똑같은데 arr2[i] 인지 arr[0] 인지에 따라 런타임 에러를 막을 수 있었다. 
// 앞에 숫자가 다를수도 있다는걸 인지 못함