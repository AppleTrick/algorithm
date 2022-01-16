function isPrime(num){
    if(!num || num===1) return false;
    for(let i=2; i<=+Math.sqrt(num); i++){
        if(num%i===0) return false;
    }
    return true;
}

function solution(n, k) {    
    // k진법으로 나눈 후 split
    const candidates = n.toString(k).split('0');
    // 소수 개수 세기

    console.log(candidates.filter(v=>isPrime(v)));
    return candidates.filter(v=>isPrime(+v)).length;
}

const n = 110011;
const k = 10;

console.log(solution(n,k));


// return candidates.filter(v=>isPrime(+v)).length;
// +v의 의미를 모르겟다.. 무슨 의미이지?