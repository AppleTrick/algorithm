function solution(msg) {
    const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    let answer = [];
    // for (const x of msg) {

    //     value += x;

    //     if(arr.includes(value)){
    //         continue;
    //     }else{
    //         arr.push(value);
    //         value = x
    //     }
    // }
    let value = "";
    for (let i = 0; i < msg.length; i++) {
        value = value + msg[i];
        if(arr.includes(value+msg[i+1])){
            continue;
        }else{
            answer.push(arr.indexOf(value) + 1);
            if(i+1 < msg.length){
                arr.push(value+msg[i+1])
            }
            value = "";
        }
    }

    // console.log(arr);
    
    return answer;
}

let msg = "TOBEORNOTTOBEORTOBEORNOT";
console.log(solution(msg));

/*
    feedback
    바로 맞추긴했어도 다른 방법들이 많으므로 피드백 코드 작성해볼것

*/