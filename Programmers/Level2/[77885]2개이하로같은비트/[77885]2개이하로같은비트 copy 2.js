function solution(numbers) {

    let answer = [];

    // numbers의 각각의 비트로 변환값을 표현해야됨;
    for (const x of numbers) {

        if( x % 2 == 0 ){
            answer.push(x+1);
            continue;
        }else{
            let value = x.toString(2)
            value = 0 + value;
            value = value.split('');
            for (let i = value.length -1; i >= 0; i--) {    
                if(value[i] == 0){
                    value[i] = 1;
                    value[i+1] = 0;
                    break;
                } 
            }
            value = value.join('')
            answer.push(parseInt(value,2));
            continue;
        }
    }

    return answer;
}


const numbers = [2,7];
console.log(solution(numbers));