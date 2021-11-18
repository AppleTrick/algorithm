function solution(land) {
    let answer = 0;

    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) {
            if( i=== 0 ){
                continue
            }else{
                let temp = [...land[i-1]];
                temp[j] = 0;
                land[i][j] = land[i][j] + Math.max(...temp);
            }
        }
    }

    // console.log(land);

    
    return Math.max(...land[land.length -1]);
}


let land = [[1, 99, 100, 1], [1, 1, 99, 1],];
// let land = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]];
// let land = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]];
console.log(solution(land));
