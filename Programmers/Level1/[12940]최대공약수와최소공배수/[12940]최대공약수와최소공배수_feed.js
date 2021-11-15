function solution(n, m) {

    function gcd(a,b){
        while(b > 0){
            let temp = b;
            b = a % b;
            a = temp; 
        }
        return a;
    }


    return [gcd(n,m) , n * m / gcd(n,m)]
}

let n = 10; 
let m = 12;
console.log(solution(n,m));

/*
피드백 유클리도 호재법 말고 다른 방법으로도 푸는 방법을 정확히 알아야됨..
빡대가리...

방법을 생각하자.
*/ 