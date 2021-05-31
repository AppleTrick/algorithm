function solution(info, query) {
    // 지원자 정보
    let arr = info.map((element) => element.split(" "))
    console.log(arr);

    // 원하는 조건
    let quest = query.map((element) => element.replace(/and /g,"").split(" "));
    console.log(quest);

    let result = [];

    for (let i = 0; i < quest.length; i++) {
        let count = 0;
            for(let k = 0; k < arr.length; k++){
                let match = 0;
                for(let l = 0; l<arr[k].length; l++){
                   if( quest[i][l] === arr[k][l] || quest[i][l] === "-"){
                       //console.log("참 작동",l);
                       match++;
                       if (match == 5) {
                           count++;
                           //console.log("작동1");
                       }
                   }else{
                       if( (l === 4) && (Number(arr[k][4]) >= Number(quest[i][4])) ){
                            match++;
                            if (match == 5) {
                                //console.log("작동2",l,quest[i][4],arr[k][4]);
                                count++;
                            }
                            continue;
                       }else{
                            //console.log("실패 발생",l,quest[i][4],arr[k][4]);
                            break;;
                       }
                       
                   }
                }
            }

        result.push(count);
    }

    return result;

}

let info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]

const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]

solution(info,query);
