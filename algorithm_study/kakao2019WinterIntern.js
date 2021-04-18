var board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
var moves = [1,5,3,5,1,2,1,4];

solution(board,moves);

function solution(board, moves) {
    // count 할 갯수
    var answer = 0;
    // 인형을 담을 배열
    // 0을 제외한 모든 인형 담기 완료
    var pmt = Array.from(Array(board.length), () => new Array().fill(null));
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
            if(board[i][j]!==0){
                pmt[i].push(board[i][j]);
            }
        }
    }
    // console.log(pmt);
    
    // 인형을 담을 박스 생성
    var box = [];
    var last;
    for(var i = 0; i<moves.length; i++){
        // 없는것을 제외한 모든 인형을 담기
        last = pmt[moves[i]-1].pop();
        if(last !== undefined){
            box.push(last);
        }
        // console.log(box);
        // pop 한거 더하기
        if(box[box.length-1]===box[box.length-2] && box.length > 1){
            answer = answer + 2;
            box.pop();
            box.pop();
        }
        // console.log(answer);
    
    }
    // console.log(box);
    // console.log(answer);
    return answer;
}

// var a = [];
// a[1].push(1);
// console.log(a);