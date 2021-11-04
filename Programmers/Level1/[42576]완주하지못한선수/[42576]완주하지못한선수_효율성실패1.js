function solution(participant, completion) {
    for (let i = 0; i < completion.length; i++) {
        participant.splice(participant.indexOf(completion[i]),1);
    }
    return participant[0];
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant,completion));


// 효율성 실패 코드!