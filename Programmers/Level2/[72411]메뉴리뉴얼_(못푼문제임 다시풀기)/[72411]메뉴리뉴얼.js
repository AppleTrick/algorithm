function combination(arr, selectNumber) {
    const results = [];
    
    if (selectNumber === 1){
        return arr.map((value) => [value]);
    }

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = combination(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        
        results.push(...attached);
    });
    
    // console.log(results);
    return results;
}

function solution(orders, course) {
    const answer = [];

    for (let i = 0; i < course.length; i++) {

        // course에 있는 갯수대로 조합을 맞춰야된다. ex ) course가 2,3,4 일경우 
        // 2로 만드는 조합 , 3으로 만드는 조합, 4로 만드는 조합

        const result = {};
        let max = 0;

        orders.forEach(element => {
            // 각각에 들어온 문자열에서 만들 수 있는 조합을 구함;
            // console.log(combination(element.split(""),course[i]));

            combination(element.split(""),course[i]).forEach((e) => {
                const str = e.sort().join('');
                result[str] = result[str] + 1 || 1;
                max = max < result[str] ? result[str] : max;
            })


        });

        if(max >= 2){
            for(const [key, value] of Object.entries(result)){
                if(value === max){
                    answer.push(key);
                }
            }
        }


    }

    return answer.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2,3,4];
console.log(solution(orders,course));

/*
    조합을 이용해야 되는 문제이다.
    1. 조합 만든 법
*/