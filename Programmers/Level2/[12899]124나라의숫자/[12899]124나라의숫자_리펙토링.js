function solution(n) {
    let answer = '';

    function oneTwoFour(n){
        n = n - 1
        let num = parseInt(n / 3); // 몫
        let sub = n % 3; // 나머지

        answer = ['1','2','4'][sub] + answer;

        if(num > 0){
            oneTwoFour(num);
        }
    }

    oneTwoFour(n);
    return answer;
}

let n = 15;
console.log(solution(n));
