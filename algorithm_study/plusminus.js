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

let absolutes = [4,7,12];
let signs = [true,false,true];
console.log(solution(absolutes,signs));