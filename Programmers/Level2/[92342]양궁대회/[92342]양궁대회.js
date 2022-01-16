function solution(n, info) {
    let max = 0;
    let answer = [-1];
    let lion = Array(11).fill(0);

    function DFS(level,count){
        // 종료조건
        if(level == 10){
            lion[level] = count;
            // 점수비교
            let sum = 0
            for (let i = 0; i < 10; i++) {
                if(lion[i] > info[i]){
                    sum = sum + (10 - i);
                }else if(lion[i] === info[i]){
                    continue;
                }else{
                    sum = sum - (10 - i);
                }      
            }
    
            if(sum > max){
                max = sum;
                answer = [...lion];
            }else if(sum == max){
                // 낮은 개수를 더 맞추는 경우를 답으로 채용함
                for (let j = 10; j > 0; j--) {
                    if(answer[j] == lion[j]){
                        continue;
                    }else if(lion[j] > answer[j]){
                        answer = [...lion];
                        break;
                    }else{
                        break;
                    }
                }
            }
        // 계속진행
        }else{

            // 남은 화살개수가 없거나 + 어피차보다 많이 못맞출경우
            if(count == 0 || count < info[level] + 1 ){
                DFS(level+1,count);
            }else{
                // 어피치보다 많이 맞출경우
                lion[level] = info[level] + 1
                count = count - (info[level] + 1);
                DFS(level+1,count)


                // 다른 점수로 돌릴경우
                lion[level] = 0
                count = count + (info[level] + 1);
                DFS(level+1,count)
            }

        }
        

    }
    DFS(0,n)

    return answer;
}
const n = 9;
const info = [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1];
// const n = 3;
// const info = [2,1,0,0]
console.log(solution(n,info));

// 카카오에서 나온 힌트
// 이 문제를 해결하기 위해서는 각 점수를 아예 안 맞추거나 
// 어피치보다 1발을 더 맞히는 경우로 각 점수(10점 ~ 0점)마다 
// 2가지(총 2048가지)를 완전 탐색하면 됩니다.

// 예를 들어, 어피치가 [2,0,1,1,0,0,0,0,0,0,0]처럼 화살을 맞췄을 경우 
// 라이언은 

// 과녁 점수 10점을 3발 맞추거나

// 0발 맞추거나만 선택하면 됩니다. 
// 9점~0점도 동일한 방식으로 어피치보다 1발을 더 맞추거나 아예 안 맞추도록 구현하면 되고, 
// 중간에 화살을 다 쐈을 경우는 나머지 과녁 점수를 모두 0발 맞춘 것으로 처리하면 됩니다. 
// 만약 1점까지 쏘고도 화살이 남았을 경우는 남은 화살을 0점에 다 쏘도록 처리할 수 있습니다
// 이렇게 가능한 모든 경우를 살펴보면서 라이언과 어피치의 최대 점수 차이를 구하면 됩니다.

//만약 10점부터 0점까지를 0발부터 n발까지 하나씩 증가시키면서 완전탐색한다면 
//최악의 경우 시간 초과가 발생할 수 있는 점 유의하시길 바랍니다.

// 가장 낮은 점수를 맞힌 개수가 같을 경우 계속해서 
// 그다음으로 낮은 점수를 더 많이 맞힌 경우를 return 해주세요.


