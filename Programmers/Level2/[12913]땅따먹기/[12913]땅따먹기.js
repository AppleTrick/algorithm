function solution(land) {
    let answer = 0;
    let beforePos;

    for (let i = 0; i < land.length; i++) {
        let val = 0;
        let pos;
        for (let j = 0; j < land[i].length; j++) {
            if( val < land[i][j] && beforePos !== j){
                val = land[i][j]
                pos = j;
            }
        }
        beforePos = pos
        console.log(beforePos);
        answer += val;
    }
    console.log(typeof answer);
    return answer;
}

let land = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]];
console.log(solution(land));

/*

오류 테스트 케이스 발견

*/