// 1. 중복된 단어를 말한 부분
// 2. 문자의 앞뒤가 같지 않는 부분;

function solution(n, words) {

    let value = -1; // 실패한 경우의 위치
    let temp = words[0][0];

    words.some((e,i) => {
        if(words.indexOf(e)!==i || e[0] !== temp){
            value = i;
            // console.log(e,i);
            return true
        }
        temp = e[e.length - 1];
    });

    // [번호 , 차례]
    // console.log(value);
    let answer = [(value % n) + 1 , Math.ceil((value + 1) / n)]
    // console.log(answer);

    return value === -1 ? [0,0] : answer;
}

const n = 3;
const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank","kint","tank"]
console.log(solution(n,words));