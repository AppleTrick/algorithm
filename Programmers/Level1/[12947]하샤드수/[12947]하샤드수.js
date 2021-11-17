function solution(x) {
    let sum = x.toString().split('').reduce((a,b) => a + Number(b),0);
    return x % sum === 0 ? true : false;
}

let num = 18;
console.log(solution(num));