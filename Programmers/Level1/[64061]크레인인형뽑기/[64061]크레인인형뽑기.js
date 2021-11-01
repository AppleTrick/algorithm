function solution(board, moves){       
    let answer = 0;
    let stack = [];
    let n = board.length;
    for (const x of moves) {
        for (let i = 0; i < n; i++) {
            if (board[i][x-1] !== 0) {
                stack.push(board[i][x-1]);
                board[i][x-1] = 0;

                if (stack[stack.length - 1] === stack[stack.length -2]) {
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }

                break;
            }
        }
    }
    // console.log(stack);
    return answer;
}