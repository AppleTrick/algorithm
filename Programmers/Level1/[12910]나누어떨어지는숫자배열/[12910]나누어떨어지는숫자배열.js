function solution(arr, divisor) {
    let answer = [];
    for (const x of arr) {
        if( x % divisor === 0){
            answer.push(x);
        }
    }

    if(answer.length === 0 ){
        return [-1];
    }else{
        return answer.sort((a,b) => a-b);
    }
}

let arr = [5, 9, 7, 10];
let divisor = 5;
console.log(solution(arr,divisor));

/*
feedback 1
filter 를 사용하는 좋은 방법이 있었음

feedback 2
foreach를 자주 사용하는 방법을 길러야 됨


*/