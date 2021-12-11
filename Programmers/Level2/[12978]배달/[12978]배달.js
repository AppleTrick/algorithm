function solution(N, road, K) {
    let answer = new Set();
    answer.add(0);

    let arr= Array.from({length : N}, ()=> Number.MAX_SAFE_INTEGER);

    // 노선을 담아주는 배열 생성
    let arrLog = Array.from({length : N}, ()=> []);

    // 노선을 담아줌
    road.forEach((element) => {
        let [a,b,c] = element;
        arrLog[a-1].push([b-1,c]);
        arrLog[b-1].push([a-1,c]);
    });

    // console.log(arrLog);


    // 값이 낮은 순으로 정렬함
    for (let i = 0; i < arrLog.length; i++) {
        arrLog[i].sort((a,b) => a[1] - b[1]);        
    }

    console.log(arrLog);

    

    // queue의 형태 [처음시작하는곳 , 합의 값]
    let queue = [[0,0,0]];

    while(queue.length !== 0){
        let [start, sum, before] = queue.shift();

        for (let i = 0; i < arrLog[start].length; i++) {
            sum = sum + arrLog[start][i][1];

            if(sum <= K && arrLog[start][i][0] !== before){
                if(!answer.has(arrLog[start][i][0])){
                    answer.add(arrLog[start][i][0]);
                }
                queue.push(arrLog[start][i][0],sum,start);
            }
            sum = sum - arrLog[start][i][1];
        }

        // console.log(queue);
    }
    
    return [...answer].length;
}

const N = 5;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
const K = 3;

console.log(solution(N, road, K));