function solution(n, left, right) {
    let arr2 = Array(right - left + 1)
    for (let k = left , count =0; k <= right; k++ , count++) {
        let l = Math.floor(k / n);
        let m = k % n;
        arr2[count] = Math.max(l,m)+1;
    }
    return arr2;
}

let n  = 3;
let left = 2;
let right = 5;
console.log(solution(n,left,right));

/*

    다양한 방법이 있었다.
    문제에 현혹되지 않고 풀어야 최고의 효율로 풀수 있다는점!

*/