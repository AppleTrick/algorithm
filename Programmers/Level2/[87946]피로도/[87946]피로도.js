function solution(k, dungeons) {
    // [최소피로도 , 소모 피로도]
    // k 유저의 피로도 값
    // 결과값 : 유저가 탐험할수 있는 최대 던전 수의 갯수

    // 1. 많이 가기 위해 우선 최소피로도가 높은곳 먼저 돈다. -> 최소피로도가 낮은곳 부터 돌면 위에서 돌수있는 곳을 못돔
    let temp = dungeons.sort((a,b) => a[1] - b[1]);
    console.log(temp);

    let n = dungeons.length; // 던전 배열의 끝가지 확인할 것
    let answer = 0;

    function DFS(L, k, count){
        console.log(L,k,count);
        if(k < 0){
            count--;
            answer = Math.max(answer , count);
        }

        if(L === n){
            answer = Math.max(answer , count);
        }else{
            if(k >= temp[L][0]){    // 최소피로도를 만족할 경우!

                DFS(L+1 , k - temp[L][1], count + 1) 
                console.log("분기점");
                DFS(L+1 , k , count)

            }else{
                DFS(L+1 , k, count)  
            }
        }


    }

    DFS(0, k, 0);



    return answer;
}

const k = 80; 
const dungeons = [[80,20],[50,40],[30,10]];
console.log(solution(k,dungeons));