function solution(numbers) {

    let answer = [];

    // numbers의 각각의 비트로 변환값을 표현해야됨;
    for (const x of numbers) {
        let value = x.toString(2)
        let n = x;

        while(true){
            n++;
            let difValue = n.toString(2)

            if(difValue.length > value.length){
                value = "0".repeat(difValue.length - value.length) + value;
            }

            let sum = 0;
            for (let i = 0; i < difValue.length; i++) {
                if(difValue[i] !== value[i]){
                    sum++;
                }
            }

            if(sum <=2){
                break;
            }
        }
        answer.push(n);
    }

    return answer;
}


const numbers = [2,7];
console.log(solution(numbers));