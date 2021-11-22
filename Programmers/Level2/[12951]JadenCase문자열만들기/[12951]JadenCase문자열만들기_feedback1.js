function solution(s) {
    let answer = '';
    let butt = true;
    for (const x of s) {

        if(butt){
            answer += x.toUpperCase();
            butt = false;
        }else{
            answer += x.toLowerCase();
        }

        if(x === ' '){
            butt = true
        }
    }

    return answer;
}

let s = "3people unFollowed me"

/*
    좀더 심플하게 하는 방법이 있음

    정규식 방법도 파악하기
*/