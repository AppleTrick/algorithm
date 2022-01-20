function solution(id_list, report, k) {
    report = report.map(e => e.split(' '));
    let answer = Array.from({length : id_list.length} , () => 0);

    let reportCount = [];
    report.forEach(e => {
        //존재하면
        if(reportCount[e[1]] ){ 
            // 중복신고 제거
            if(!reportCount[e[1]][1].includes(e[0])){
                reportCount[e[1]][0] += 1;
                reportCount[e[1]][1].push(e[0]);
            }
        // 존재하지 않는다면    
        }else{
            reportCount[e[1]] = [1, [e[0]]]
        }
    });

    // console.log(reportCount)

    for (const key in reportCount) {
        if(reportCount[key][0] >= k){
            reportCount[key][1].forEach(e =>{
                answer[id_list.indexOf(e)]++;
            })
        }
    }


    return answer;
}

const id_list = ["con", "ryan"]
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

console.log(solution(id_list,report,k));