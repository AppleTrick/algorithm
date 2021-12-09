function solution(n, costs) {

    let answerArray = [];
    let answer = 0;

    // 0. cost 비용 대비로 정렬을 했음
    costs.sort((a,b) => a[2]-b[2]); 

    // 1. 비용이 가장 짧은 것을 값에 넣어줌
    let [a,b,c] = costs.shift();
    answerArray.push(a,b);
    answer += c;

    // 2. 정렬된 값 중에서 양쪽을 포함시키지 않고, 한쪽만 포함 시키면 값을 넣음answer.Array가 n과 같아지면 종료시키면됨
    // 연결 되어 있는지를 확인 해야됨;

    while(answerArray.length < n){
        

        for (let i = 0; i < costs.length; i++) {

            let [a,b,c] = costs[i];
            // 다 연결될때까지 반복 한다.
            if(answerArray.includes(a) && !answerArray.includes(b)){
                answerArray.push(b);
                answer += c;
                costs.splice(i,1);
                break;
            }else if(!answerArray.includes(a) && answerArray.includes(b)){
                answerArray.push(a);
                answer += c;
                costs.splice(i,1);
                break;
            }
        }

        
    }

    // console.log(answerArray);

    return answer;
}

let n = 4;
let costs = [
    [0,1,1],
    [0,2,2],
    [1,2,5],
    [1,3,1],
    [2,3,8]
];

console.log(solution(n,costs));
