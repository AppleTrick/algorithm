function solution(n,a,b)
{
    let answer = 0;
    let resultA = a;
    let resultB = b;

    console.log(resultA,resultB);

    while(resultA !== resultB){

        resultA = Math.ceil(resultA/2);
        resultB = Math.ceil(resultB/2);

        // console.log(resultA, resultB);
        answer++;
    }

    // console.log(answer);

    return answer;
}

const N = 8;
const A = 4;
const B = 7;
console.log(solution(N,A,B));
