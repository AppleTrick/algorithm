/*
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.

타겟 넘버는 1 이상 1000 이하인 자연수입니다.
*/

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

// 방법 (숫자를 적절히 더하고 빼서)
// 방법1. 모든 숫자에 + 하거나 - 하는 경우를 센다. 
// 그 값을 전부 더해서 타겟과 맞는 것들을 result에 넣는다.
const numbers = [1, 1, 1, 1, 1]
const target = 3

solution(numbers,target)
