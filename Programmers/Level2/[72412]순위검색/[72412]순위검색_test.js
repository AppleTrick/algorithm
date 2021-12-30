// 해당 코드는 시험때 작성한 코드
// 효율성에서 0 점을 맞았음

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