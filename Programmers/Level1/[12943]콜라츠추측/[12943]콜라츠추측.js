function solution(num) {
    let answer = num
    let count = 0;
    while(answer !== 1){
        
        if(count > 500){
            count = -1;
            break;
        }

        answer = answer % 2 === 0 ? answer / 2 : answer * 3 + 1;
        // console.log(answer);
        count ++;
    }
    return count;
}

let num = 6;
console.log(solution(num));