function solution(s) {
    let val = s;
    let removeCount = 0;
    let tryCount = 0;

    while(val.length !== 1){
        let count = val.length;
        val = val.split('').filter((e) => e === '1').join('').length;
        removeCount =  removeCount + (count - val)
        val = val.toString(2);
        tryCount++;
    }
   
    return [tryCount, removeCount];
}

let s ="110010101001"
console.log(solution(s));

/*
    feedback 1
        
        정규식을 사용하면서 해당 문제를 해결하는 방법이 좀더 좋은 방법일 것이라 추측됨

*/