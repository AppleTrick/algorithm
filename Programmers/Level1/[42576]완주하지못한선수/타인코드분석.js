// var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

// function solutio1(participant,completion){
//     participant.find(
//         (name)=>!completion[name]--, 
//         completion.map( (name) => completion[name] = (completion[name] | 0 ) +1)
//     )
// }


// function solution(participant,completion){
//     completion.map( (name) => completion[name] = (completion[name] | 0 ) +1)

//     console.log(completion);
// }


// let participant = ["mislav", "stanko", "mislav", "ana"];
// let completion = ["stanko", "ana", "mislav"];
// console.log(solution(participant,completion));

// let arr = [1,2,3,"park"];
// arr["park"] = (arr["park"] | 0) + 1;
// console.log(arr["park"]);

// var solution = (participant,completion) => {
//      completion.map(name => completion[name] = (completion[name]|0)+1); 
//      console.log(completion);
//      console.log(participant.map((name) => !completion[name]--));
//     //  return participant.find((name) => !completion[name]--); 
// };


//찢었다..


function solution(participant, completion) {
    var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
    console.log(dic);

    return participant.find(t=> {
        if(dic[t])
            dic[t] = dic[t]-1;
        else 
            return true;
    });
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant,completion));