function solution(n) {
    let answer = 0;

    let result = n.toString(2);

    let regEx1 = /1/g;

    let oneLeng = result.match(regEx1).length;

    // console.log("원하는 값 " ,oneLeng, zeroLeng);

    while(1){
        n++
        let matchOneLeng = n.toString(2).match(regEx1).length;
        if(matchOneLeng === oneLeng){
            answer = n;
            break;
        }
    }

    return answer;
}

let n = 1;
console.log(solution(n));
// 15 => 1111
// 23 => 10111;


// 78 => 1001110
// 83 => 1010011


/*

    feedback 1
    문제를 좀 더 단순하게 보는 능력이 필요하다

*/