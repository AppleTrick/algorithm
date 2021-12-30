function solution(info, query) {
    // 지원자 정보
    info = info.map((element) => element.split(" "));
    query = query.map((element) => element.replace(/and /g,"").split(" "));

    // console.log(info);
    // console.log(query);

    function checking(val){
        // query 정보
        let [lang,pos,career,soulFood,score] = val;
        let result = info.filter( (e) => (e[0] === lang || lang == "-") && (e[1] === pos || pos == "-") && (e[2] === career || career == "-") && (e[3] === soulFood || soulFood == "-")  && (Number(e[4]) >= Number(score) || score == "-"));
        // console.log(result); 
        
        return result.length;
    }

    let answer = [];

    for (let i = 0; i < query.length; i++) {
        answer.push(checking(query[i]))
    }
    

    return answer;

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
        "java and backend and junior and pizza 100",
        "python and frontend and senior and chicken 200",
        "cpp and - and senior and pizza 250",
        "- and backend and senior and - 150",
        "- and - and - and chicken 100",
        "- and - and - and - 150"
    ]
console.log(solution(info,query));