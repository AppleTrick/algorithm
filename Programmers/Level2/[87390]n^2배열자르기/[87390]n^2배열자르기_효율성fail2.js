function solution(n, left, right) {
    let arr1 = Array.from(Array(n), ()=> Array(n));
    let arr2 = Array(right - left + 1)

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            arr1[i][j] = Math.max(i,j) + 1;
        }        
    }

    console.log(arr1);

    for (let k = left , count =0; k <= right; k++ , count++) {
        let l = Math.floor(k / n);
        let m = k % n;
        arr2[count] = arr1[l][m];
    }

    return arr2;

}

let n  = 3;
let left = 2;
let right = 5;
console.log(solution(n,left,right));