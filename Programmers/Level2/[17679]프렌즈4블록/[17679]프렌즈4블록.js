function solution(m, n, boards) {
    // m 높이 , n 너비
    boards = boards.map( e => e.split(''));
    // console.log(boards);
    
    while(true){
        let arr = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if(boards[i][j] && boards[i][j] === boards[i+1][j] && boards[i][j] === boards[i+1][j+1] && boards[i][j] === boards[i][j+1]){
                    arr.push([i,j])
                }
            }
        }

        if(arr.length === 0){
            break;
        }

        arr.forEach((e) => {
            let [a,b] = e;
            boards[a][b] = 0;
            boards[a][b+1] = 0
            boards[a+1][b+1] = 0
            boards[a+1][b] = 0
        } )

        // console.log(boards);
        // j는 너비
        for (let j = 0; j < n; j++) {

            // m은 높이
            for (let k = m -1; k >= 0; k--){
                // 0 인걸 발견했을때
                if(boards[k][j] === 0){
                    // 그 위에 0이 아닌것을 발견하면
                    for (let l = k - 1; l >= 0; l--) {
                        if(boards[l][j] !== 0 ){
                            boards[k][j] = boards[l][j];
                            boards[l][j] = 0;
                            break;
                        }
                    }
                }
            }
        }

    }
    
    return [].concat(...boards).filter( (e) => !e).length;
}

const m = 6;
const n = 6;
const board = [
    "TTTANT", 
    "RRFACC", 
    "RRRFCC", 
    "TRRRAA", 
    "TTMMMF", 
    "TMMTTJ"
]

console.log(solution(m,n,board));