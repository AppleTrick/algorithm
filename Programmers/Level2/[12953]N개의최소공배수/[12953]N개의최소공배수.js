function solution(arr) {
    return arr.reduce((a,b) => a*b / gcd(a,b));
}

function gcd(a,b){
    while(b > 0){
        let temp = b;
        b = a % b;
        a = temp; 
    }
    return a;
}

let arr = [2,6,8,14];
console.log(solution(arr));

// feedback1

/*

최대공약수 최소공배수를 구하는 법을 몰라 이전 코드를 보면서 구현을 했다.
유클리드 호재법과 같은 방법을 많이 공부해야됨


*/