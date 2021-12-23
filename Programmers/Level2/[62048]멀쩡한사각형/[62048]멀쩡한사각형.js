function solution(w, h) {
    let answer = w * h;
    let value = []
    let repeat;
    
    for (let i = 1; i <= w; i++) {

        value.push( h * i / w);

        if(Number.isInteger( h * i / w )){
            repeat = i;
            break;
        }
    }

    // console.log(repeat , value) ;

    let notUseSquare = 0;
    let start = 0;

    for (let j = 0; j < value.length; j++) {
        notUseSquare += (Math.ceil(value[j]) - start);
        start = Math.floor(value[j]);
    }

    // console.log(notUseSquare);

    return answer - (notUseSquare * w / repeat);
}

const w = 8;
const h = 12;
console.log(solution(w,h));
