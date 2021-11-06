function solution(a, b) {
    let months = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    let days = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    let sum = b;
    for (let i = 0; i < a; i++) {
        sum += months[i];     
    }
    return days[sum%7];
}

let a = 5;
let b = 24;
console.log(solution(a,b));