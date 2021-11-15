function solution(n)
{
    return String(n).split('').reduce((a,b) => Number(a)+Number(b),0);
}

let n = 987;
console.log(solution(n));