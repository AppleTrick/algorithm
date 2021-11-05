function solution(d, budget) {
    let answer = 0;
    let ck = Array.from({length : d.length} , ()=>0)

    function DFS(budget){
        if(budget < 0 ){
            let n = ck.filter((e) => e > 0).length
            answer = answer >= n-1 ? answer : n-1;
        }else if(budget == 0){
            let n = ck.filter((e) => e > 0).length
            answer = answer >= n ? answer : n;
        }else{
            for (let i = 0; i < d.length; i++) {
                if(ck[i] !== 0){
                    continue;
                }else{
                    ck[i] = 1;
                    // console.log(budget);
                    DFS(budget - d[i]);
                    ck[i] = 0;
                }
            }
        }
    }

    DFS(budget)

    return answer;
}

let d = [1,3,2,5,4];
let budget = 9;
console.log(solution(d,budget));