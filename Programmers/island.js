function solution(n, costs) {
    let answer = 0;
   
    return answer;

}


let n = 4;
let costs = [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]];
solution(n, costs);
console.log(solution(n, costs));



for(let j = n; j >= 0; j --){

    for(let i = 0; i <costs.length; i++){
        let shortNum = null;
        if(cost[i][0] == j || cost[i][1] == j){
            
            if(shortNum === null){
                shortNum 
            }

            if(shortNum > cost[i][2]){
                shortNum = cost[i][2];
            }
           
        }
    }

}
