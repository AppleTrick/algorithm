function solution(land) {
    let answer = Array(land.length);
    answer[0] = land[0];
    let beforePos;
    for (let i = 1; i < land.length; i++){
        let max = 0;
        let sub = 0;
        for (let j = 0; j < answer[i-1].length; j++) {

            if(answer[i-1][j] >= max){
                max = answer[i-1][j];
                beforePos = j;
            }

            if(answer[i-1][j] <= max && answer[i-1][j]  > sub){
                sub = answer[i-1][j];
            }


        }

        console.log(max, sub);

        answer[i] = land[i].map((e,i) => {
            if(i !== beforePos ){
                return e + max;
            }else{
                return e + sub;
            }
        });

        // console.log(answer);
    }
    console.log(answer);
    return Math.max(...answer[land.length - 1 ])
}


let land = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]];
// let land = [[1,2,3,5],[5,6,7,8],[4,3,2,1]];
console.log(solution(land));

/*

오류 테스트 케이스 발견

*/