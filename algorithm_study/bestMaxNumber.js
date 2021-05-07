function solution(number, k) {
    const result = [];
    let count = k;


    for(let i = 0; i < number.length; i++){

        while(result.length > 0 && count > 0 && result[result.length-1] < number[i]){
            count--;
            result.pop();
        } 
        result.push(number[i])
    }
    //console.log(result);
    result.splice(number.length-count,count);
    return result.join('');
}

const number = "1924";
const count = 2;
console.log(number.length);
console.log(solution(number,count));