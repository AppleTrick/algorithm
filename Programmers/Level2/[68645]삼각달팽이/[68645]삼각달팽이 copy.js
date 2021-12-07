function solution(n) {
    let fullcount = 0;

    let answer = [];
    // 총 값 계산
    for (let i = 1; i <= n; i++) {
        fullcount += i
    }

    // 해당 배열 생성
    for (let i = 1; i <= n; i++) {
        answer.push(Array(i));
    }

    console.log(fullcount);

    let count = 1 ;
    let switchCount = 0;  // 0 이면 왼쪽 벽 ,  1 이면 하단 , 2 이면 오른쪽 벽
    let i = 0             // 내부적으로 개수가 초과 되면 switchCase값을 변화 시켜야됨
    let border = 0;       // 한바퀴 돌면 값 0 1, 2 를 저 부 돌면 1 추가 해줌

    while( count <= fullcount ){
        if(switchCount == 0){

            // console.log(switchCount , i);

            answer[i+(2*border)][border] = count;

            i++; //갯수 증가
            if( i >= n - 1 - ( 3 *border) ){
                switchCount = 1;
                i = 0;
            }
            // console.log(answer);


        }else if(switchCount == 1){

            // console.log(switchCount , i);

            answer[n-1-border][i + border] = count;

            i++; // 갯수 증가
            if( i >= n - 1 - (3*border)){
                switchCount = 2;
                i = 0;
            }
            // console.log(answer);


        }else if(switchCount == 2){

            // console.log(switchCount , i);

            answer[n-1-border-i][ answer[n-1-border-i].length-1 - border] = count
            i++; // 갯수 증가
            if( i >= n - 1 - (3*border) ){
                switchCount = 0;
                border++;
                i = 0;
            }
            // console.log(answer);
        }
        count++;
    }

    answer = answer.join(',').split(',').map((e) => Number(e));
    

    return answer ;
}

let n = 7
console.log(solution(n));