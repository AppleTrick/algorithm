function solution(d, budget) {
    let answer = 0
    let sum = 0;
    
    d.sort((a,b) => a - b);

    for(let i = 0; i < d.length; i++){
        answer++;
        sum += d[i]

        if(sum > budget)
            answer--;
    }
  
    return answer;
}

let d = [2,2,3,3];
let budget = 10;
console.log(solution(d,budget));