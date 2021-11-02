function solution(numbers) {

    // 문자열 배열을 문자로 만듬
    const arr = numbers.split('');

    // Set 으로 중복 제거
    const answer = new Set();

    // 배열 재정렬
    research(arr, '', answer);

    //console.log(answer);
    return answer.size

}

function research(arr , preNum, set){
    for(let i of arr.keys()){
        let setNum = parseInt(preNum + arr[i]);
        decimal(setNum,set);
        let temp = [...arr];
        temp.splice(i,1);
        research(temp, setNum, set);
    }

}

// 소수 판별 알고리즘
function decimal(val , set){
    for(let i = 2; i<=val; i++){
        if(val % i === 0){
            if(i == val){
                set.add(val); 
            }else{
                break;
            }
        }
    }
}