function solution(str){
    let result = str.split(' ');
    // console.log(result);
    let a = Number(result[0]);
    let b = Number(result[1]);

    for (let i = 0; i < b; i++) {
        let answer = "*".repeat(a);
        console.log(answer);
    }
}

let str = "5 3"

solution(str)