function solution(numbers, target) {
    let count = 0;
    let result = 0;
    let start = 0;

    plusMinus(start, numbers, result , target)
    
    function plusMinus(deep, numbersArray, result, target){
        // 현재의 깊이
        let thisDeep = deep;

        // 현재까지의 결과값
        let thisResult = result
    
        
        // 깊이가 최대 깊이일 경우
        if(thisDeep == numbersArray.length){
            // Count ++ 아니면 그냥 count
            thisResult === target ? count++ : count;
        // 아닐경우
        }else{ 
            // console.log("현재 깊이 : " ,thisDeep);
            // console.log("현재까지의 결과 값 : " , thisResult);
            // console.log("배열 값  : " ,numbersArray[thisDeep]);
            // console.log("count횟수 : ", count);
            
            let plus = thisResult + numbersArray[thisDeep];
            let minus = thisResult - numbersArray[thisDeep];

            // console.log("-----");
            thisDeep++
            plusMinus(thisDeep,numbersArray, plus , target, count);
            plusMinus(thisDeep,numbersArray, minus, target, count);
        }
        
    }

    return count;
}