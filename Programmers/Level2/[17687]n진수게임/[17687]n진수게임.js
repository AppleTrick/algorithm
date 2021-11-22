function solution(n, t, m, p) { // 2진수  4개의 갯수를 2명과 1번째
    let arr = [];
    let num = 0;
    let turn = 0;
    while(1){
        let result = num.toString(n);

        // console.log(result);
        
        for (let i = 0; i < result.length; i++) {
            if(turn === p-1){
                arr.push(result[i])
            }
            turn++;

            if(arr.length >= t){
                return arr.join('').toUpperCase();;
            }

            if( turn === m){
                turn = 0;
            }
        }

        
        num++;
    }

    return 0;
}

let n = 2;
let t = 4;
let m = 2;
let p = 1;

console.log(solution(16,16,2,1));