function solution(board)
{
    let x = board[0].length;
    let y = board.length
    let answer = 0;

    if( x < 2 || y < 2 ) return 1;

    for (let i = 1; i < y; i++) {
       for (let j = 1; j < x; j++) {
           if(board[i][j] > 0){
               let min = Math.min(board[i-1][j],board[i-1][j-1],board[i][j-1]);
               board[i][j] = min + 1;
           } 
           
           if(answer < board[i][j]){
               answer = board[i][j]
           }
       } 
    }
    return answer * answer;
}

let board = [
    [0,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [0,0,1,0]
];
console.log(solution(board));


/*

    feedback 1.

    동적 프로그래밍 이걸 어케 풀라는거야...

    이걸 생각해야되는게 매우 힘드네 

    프로그래밍적 사고를 늘려야됨..
 

*/