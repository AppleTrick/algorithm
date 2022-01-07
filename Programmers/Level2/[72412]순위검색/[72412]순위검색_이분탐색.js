function solution(info, query) {
    const answer = [];
    const infoMap = {};
    
    // 조합을 구함
    function combination(array, score, start) {
        const key = array.join("");
        const value = infoMap[key];

        // key 문자열을 합친열
        // value는 infoMap[key]의 값인데 

        // value의 값이 존재할 경우
        if (value) {
            infoMap[key].push(score);
        // value의 값이 undefined 일 경우
        } else {  
            infoMap[key] = [score];
        }
        
        // 0부터 시작
        for (let i = start; i < array.length; i++) {
            const temp = [...array];
            temp[i] = "-";
            combination(temp, score, i + 1);
        }
    }
    // 유저 정보를 가지고  " "를 기준으로 나눈다.
    // 숫자와 정보를 나눈다.
    for (const e of info) {
        const splited = e.split(" ");
        const score = Number(splited.pop());

        // splited 일반적인 정보가 저장, score 점수만 따로저장
        combination(splited, score, 0);
    }

    // infomap에 모든 조합으로 데이터가 구성됨

    
    // infoMap 에 대한 값을 sort함
    for (const key in infoMap) {
        infoMap[key] = infoMap[key].sort((a, b) => a - b);
    }
    // console.log(infoMap);



    // 원하는 정보에 qurey를 split한다.
    for (const e of query) {
        // / and / 와 " " 사이로 구분하고, 배열을 구성
        const splited = e.replace(/ and /g, " ").split(" ");

        // key값과, score 점수값을 구분 시킴
        const score = Number(splited.pop());
        const key = splited.join("");

        // key 값은 찾는 유저 정보 , score 는 infomap의 값이 score 보다 높아야됨, 
        const array = infoMap[key];

        // key 값에 해당하는 사람들의 점수들이 나온다.
        // console.log(array , score);
        
        if (array) {
            let start = 0;          //  start = 0
            let end = array.length; //  end는 배열의 마지막

            while (start < end) {


                // console.log(start, end);

                // floor 내림
                const mid = Math.floor((start + end) / 2);
                
                if (array[mid] >= score) {
                    end = mid;
                } else if (array[mid] < score) {
                    start = mid + 1;
                }
            }
            
            const result = array.length - start;
            answer.push(result);
        } else {
            // 해당값이 존재하지 않으면 0으로 answer에 넣어준다.
            answer.push(0);
        }
    }
    
    return answer;
    // return 0;
}


const info = [
        "java backend junior pizza 150",
        "python frontend senior chicken 210",
        "python frontend senior chicken 150",
        "cpp backend senior pizza 260",
        "java backend junior chicken 80",
        "python backend senior chicken 50"
    ]
const query = [

        "- and - and - and - 150"
    ]
console.log(solution(info,query));

// "java and backend and junior and pizza 100",
// "python and frontend and senior and chicken 200",
// "cpp and - and senior and pizza 250",
// "- and backend and senior and - 150",
// "- and - and - and chicken 100",