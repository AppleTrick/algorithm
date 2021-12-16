function solution(k, dungeons) {
    // [최소피로도 , 소모 피로도]
    // k 유저의 피로도 값
    // 결과값 : 유저가 탐험할수 있는 최대 던전 수의 갯수

    let temp = Array.from({length : dungeons.length} , ()=> 0);
    // console.log(temp);

    let n = dungeons.length;

    let answer = 0;

    function DFS(k,count, L){

        // console.log(k,count);

        if (L === n) {
            answer = Math.max(count, answer)
        }else{
            for (let i = 0; i < dungeons.length; i++) {

                if (temp[i] === 0) {
    
                    temp[i] = 1;
                    if(k >= dungeons[i][0]){
                        k = k - dungeons[i][1];
                        DFS(k, count + 1 , L + 1);
                        k = k + dungeons[i][1];
                    }else{
                        DFS(k, count, L + 1);
                    }
                    temp[i] = 0;
    
                }else{
                    continue;
                }
            }
        }
    }

    DFS(k,0,0);



    return answer;
}

const k = 80; 
const dungeons = [[80,20],[50,40],[30,10]];
console.log(solution(k,dungeons));