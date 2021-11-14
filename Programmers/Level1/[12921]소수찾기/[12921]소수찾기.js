function solution(n) {
    let answer = 0;

    function isPrime(num){
        let n = 2;
        let result = true;
        while(num > n){
            if(num % n === 0){
                result = false;
                break;
            }else{
                n++;
            }
        }

        return result
    }

    for (let i = 2; i <= n; i++) {
        // isPrime(i) ? console.log(i) : 0;
        isPrime(i) ? answer+=1 : 0;
    }
    return answer;
}

let n = 10;
console.log(solution(n));