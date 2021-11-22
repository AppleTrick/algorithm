function solution(s){
    let arr = [];
    for (const x of s) {
        if( x === '('){
            arr.push(x);
        }else{
            if(arr.length < 1){
                return false;
            }else{
                arr.pop();
            }
        }
    }
    return arr.length ? false : true;
}


let s = "(())()";
console.log(solution(s));

/*
feedback 1
정규식 , -1과 +1 로 푸는 방법등 다른 방법들을 새롭게 만들 수 있으니 체크하고 리뷰해볼것
*/