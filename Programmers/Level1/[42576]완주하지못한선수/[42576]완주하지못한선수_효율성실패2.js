function solution(participant, completion) {
    for (let i = 0; i < completion.length; i++) {
        for (let j = 0; j < participant.length; j++) {
            if(completion[i] === participant[j]){
                participant[j] = 0;
                break;
            }
        }
    }
    // console.log(participant);

    for (let k = 0; k < participant.length; k++) {
        if(participant[k]!==0){
            return participant[k]
        }
    }

}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant,completion));

// feedback 효율성 실패

