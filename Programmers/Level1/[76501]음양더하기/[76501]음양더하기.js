function solution(absolutes, signs) {
    let answer = 0;

    absolutes.forEach((element,i) => {
        if(signs[i]){
            answer+=element;
        }else{
            answer-=element;
        }
    });

    return answer;
}