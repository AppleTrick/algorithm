function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;

    // 각좌표별 연결된 배열을 만듬;
    let arr = Array.from({length : n + 1},()=> []);

    wires.forEach((element) => {
        let [a,b] = element;
        arr[a].push(b);
        arr[b].push(a);
    });

    // console.log(arr);


    // 방문한지 확인하는 배열
    let visited = Array.from({length : n + 1}, () => 0);

    function DFS(N,count){
        for (let i = 0; i < arr[N].length; i++) {
            if(visited[arr[N][i]] === 0 ){
                count++;
                visited[arr[N][i]] = 1;
                count = DFS(arr[N][i],count);
            }
        }

        return count;
    }

    
    for (let i = 0; i < wires.length; i++) {
        let [cutA,cutB] = wires[i];
        // 방문한곳 체크해주기
        visited[cutA] = 1;
        visited[cutB] = 1;
        // 미니멈 카운터 체크해주기
        let countA = 1;
        let countB = 1;
        
        countA = DFS(cutA,countA);
        countB = DFS(cutB,countB);

        answer = Math.min(answer, Math.abs(countA-countB));
        // console.log(countA,countB);
        visited.fill(0);
    }

    // console.log(answer);




    return answer;
}

let n = 9;
let wires = [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]];
console.log(solution(n,wires));