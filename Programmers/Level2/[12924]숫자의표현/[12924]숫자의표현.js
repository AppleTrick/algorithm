function solution(n) {
    let answer = 0;
    let TrueValue = Math.round(n /2);
    let nowValue = TrueValue;
    let value = TrueValue;
    let sum = 0;
    while(value > 0){

        sum = sum + value;
        // console.log("현재합 : " + sum , value);

        if(sum < n){
            value--;
        }else if(sum == n){
            answer ++
            sum = 0;
            nowValue--;
            value = nowValue;
            // console.log("성공");
        }else{  // sum > n
            sum = 0;
            nowValue--;
            value = nowValue;
            // console.log("초기화");
        }
    }

    return answer + 1;
}

let n = 15;
console.log(solution(n));

/*
    feedback 1
    수학적으로 풀면 좀더 좋은 방법이 있을 것임!

    참고하고 포스팅할것!
*/