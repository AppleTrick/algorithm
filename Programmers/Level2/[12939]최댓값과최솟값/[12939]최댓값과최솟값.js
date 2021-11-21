function solution(s) {
    let result = s.split(' ').map((e) => Number(e));

    // console.log(Math.max(...result));
    return ""+Math.min(...result)+" " + Math.max(...result)
}

let s = "1 2 3 4";
console.log(solution(s));