function solution(citations) {

    let n = citations.length;

    let h = 0;

    while(true){
        let value = citations.filter((element) => element >= h).length; // h이상으로 인용된 횟수
        console.log("h" , h,"value",value);
        if(value >= h){

        }else{
            break;
        }
        h++;
    }

    return h - 1;
}


const citations = [6, 0, 3, 1, 5 ,0];
console.log(solution(citations));