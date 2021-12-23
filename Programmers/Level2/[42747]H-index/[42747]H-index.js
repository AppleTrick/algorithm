function solution(citations) {

    citations.sort((a,b) => a-b);

    console.log(citations);
    let h_index = -1;
    let temp = -1;

    citations.forEach((e,i) => {
        let value = citations.filter((element) => element >= e).length;
        console.log(value , e , temp);

        if(value > temp && e > h_index){
            temp = value
            h_index = e;
        }
        console.log("h_index의 값 " , h_index);
    });

    return h_index;
}


const citations = [6, 0, 3, 1, 5 ,0];
console.log(solution(citations));