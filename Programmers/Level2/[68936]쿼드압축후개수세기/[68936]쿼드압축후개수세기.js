/*
    조건 1 : 0과 1로 이루어진 2^n x 2^n 크기의 2차원 정수 배열
    

    결과값은 압축했을때 => [ 0의 개수 , 1의 개수]
*/

/*
    풀이 방법
    1. 주어진 배열에서 2^(n-1) 단계씩 쿼드 압축을 실행한다.
    2. 큰수부터 압축을 했기에 압축한 값은 결과 값에 더해 주고, 나머지 값들을 1,0이 아닌 값으로 바꿔준다?
*/
function solution(arr) {
    let answer = {"0" : 0, "1" : 0};
    let len = arr.length;
    let leng = arr.length;

    function check(i,j){
        let val = arr[i][j];
        let isTrue = true;
        for (let k = i; k < i + leng; k++) {
            if(!isTrue){
                break;
            }
            for (let l = j; l < j + leng; l++) {
                if( arr[k][l] !== val){
                    isTrue = false;
                    break;
                }
            }
        }

        if(isTrue){
            for (let k = i; k < i + leng; k++) {
                for (let l = j; l < j + leng; l++) {
                   arr[k][l] = "clear";
                }
            }

            answer[val] = answer[val]+1;  
        }
    }

    while(leng > 1){
        for (let i = 0; i < len; i+=leng) {
            for (let j = 0; j < len; j+=leng) {
                if(arr[i][j] == "clear"){
                    continue;
                }
                check(i,j);
            }
        }

        leng = leng / 2;
    }
    
    let zero = 0;
    let one = 0;
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(arr[i][j] == 0){
                zero++;
            }else if(arr[i][j] == 1){
                one++;
            }
        }        
    }

    return [zero + answer["0"] , one + answer["1"]];
}

const arr = [
    [1,1,0,0],
    [1,0,0,0],
    [1,0,0,1],
    [1,1,1,1]
];

// const arr = [
//     [1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1],
// ]
// const arr = [
//     [1,1,1,1,1,1,1,1],
//     [0,1,1,1,1,1,1,1],
//     [0,0,0,0,1,1,1,1],
//     [0,1,0,0,1,1,1,1],
//     [0,0,0,0,0,0,1,1],
//     [0,0,0,0,0,0,0,1],
//     [0,0,0,0,1,0,0,1],
//     [0,0,0,0,1,1,1,1]
// ]


console.log(solution(arr));
