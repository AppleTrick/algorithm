function solution(n) {
    let arr = Array( n + 1 );
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i < arr.length; i++) {
        arr[i] = (arr[i-2] + arr[i-1]) % 1234567;
    }
    return arr[arr.length - 1];
}

let n = 3;
console.log(solution(n));

/*
    Infinity 에 대한 대처를 어떻게 하는가가 중요하다.
*/