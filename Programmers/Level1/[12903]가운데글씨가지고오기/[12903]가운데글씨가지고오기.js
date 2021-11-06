function solution(s) {
    let num = s.length/2;
    let answer = Number.isInteger(num) ? s[Math.floor(num)-1] + s[Math.floor(num)] : s[Math.floor(num)];

    return answer;
}


let s =  "qwer33"
console.log(solution(s));