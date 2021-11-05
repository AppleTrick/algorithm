function solution(d, budget) {
    let answer = 0;
    
    function DFS(bd,L,count){
        if(bd < 0 || L > d.length){
            answer  = answer > count-1 ? answer : count-1; 
        }else{
            bd -= d[L];
            DFS(bd,L+1,count+1); // 예산을 넣을 경우
            bd += d[L]
            DFS(bd,L+1,count); // 예산을 안 넣을 경우
        }
    }

    DFS(budget,0,0)

    return answer;
}

let d = [2,2,3,3];
let budget = 10;
console.log(solution(d,budget));

// 완전탐색이기에 시간이 너무 오래 걸리게 된다 . 빽트래킹 조건이 필요함