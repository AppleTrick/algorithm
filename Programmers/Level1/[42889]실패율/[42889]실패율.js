function solution(N, stages) {
    let all = stages.length
    let result = [];
    let sum = 0; // 갯수 
    for (let i = 0; i < N; i++) {
        let num = stages.filter((e)=> e === i+1).length;
        result.push({ stage : i+1 , value : num / (all - sum)});
        sum += num
    }

    result.sort((a,b) => b.value - a.value);
    // console.log(result);

    return result.map((e) => e.stage);
}


let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N,stages));