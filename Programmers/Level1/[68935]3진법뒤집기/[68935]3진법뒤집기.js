function solution(n) {
    let answer = 0;
    let num = n.toString(3).split('').reverse()
    num.forEach((element,index) => {
        answer = answer + element * (3 ** (num.length - 1 - index))
    });
    return answer;
}

let n = 125	
console.log(solution(n));