function solution(absolutes, signs) {
    let answer = 0;

    absolutes.forEach((element,i) => {
        signs[i] ? answer+=element : answer-=element;
    });

    return answer;
}

let absolutes = [4,7,12];
let signs = [true,false,true];
console.log(solution(absolutes,signs));