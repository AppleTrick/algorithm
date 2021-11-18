function solution(land) {
    let answer = [0,0,0,0];
    let beforePos = -1;
    for (let i = 0; i < land.length; i++) {
        let max = 0;
        let sub = 0;

        for (let j = 0; j < land[i].length; j++) {
            if(land[i][j] >= max){
                sub = max;
                max = land[i][j];
                beforePos = j;
            }
        }

        answer = answer.map((e,i) => {
            if( i !== beforePos){
                return max;
            }else{
                return e+sub;
            }
        })

        console.log(answer);
    }

    return Math.max(...answer)
}


// let land = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]];
let land = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]];
console.log(solution(land));

/*

오류 테스트 케이스 발견

*/