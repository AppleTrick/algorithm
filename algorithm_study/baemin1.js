function solution(weights, head2head) {
    let answer = [];

    for(let i = 0; i < weights.length; i++){
        answer.push(i);
    }
    const result = [];
    const result1 = [];

    head2head = head2head.map((head)=>(head.split('')))
    //console.log(head2head);

    for(let i = 0; i < head2head.length; i++){
        let count = 0;
        let count1 = 0;
        for(let j = 0; j < head2head[i].length; j++){
            if(head2head[i][j] == 'W'){
                count ++
                if(weights[i] < weights[j]){
                    count1++;
                }
            }
        }
        result.push(count);
        result1.push(count1);
    }
    // result 결과 값
    //console.log(result);
    //console.log(result1);
    //console.log(weights);

    answer.sort(function(a,b){
        if(result[b]-result[a] == 0){
            if(result1[b] - result1[a] ==0){
                return weights[b]-weights[a]
            }else{
                return result1[b]-result1[a]
            }
        }else{
            return result[b]-result[a];
        }
    });

    answer = answer.map((a) => (a+1));
    console.log(answer);
    return answer;
}

const weights = [50,82,75,120];
const head2head = ["NLWL","WNLL","LWNW","WWLN"]
solution(weights,head2head)