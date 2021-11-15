function solution(n) {
    let answer = 0;

    for (let i = 1; i * i <= n; i++) {
        if(n % i === 0){
            i * i === n ? answer = answer + i :  answer = answer + i + (n / i)
        }
    }

    return answer;
}

let n = 0;
console.log(solution(n));