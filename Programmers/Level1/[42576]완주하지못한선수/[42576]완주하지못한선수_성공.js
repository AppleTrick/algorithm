function solution(participant, completion) {
    participant.sort()
    completion.sort();
    // console.log(participant);
    // console.log(completion);
    for (const i in participant) {
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant,completion));

// feedback
// 더 좋은 방법이 엄청 많음 확인해보고 어떻게 하는지 정리할것



