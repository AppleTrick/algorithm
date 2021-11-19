function solution(n, left, right) {
    // let arr1 = Array.from(Array(n), ()=> Array(n));
    let arr = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr.push(Math.max(i,j) + 1);
        }        
    }
 
    return arr.splice(left,right-left+1);

}

let n  = 3;
let left = 2;
let right = 5;
console.log(solution(n,left,right));