function solution(clothes) {
    let typeObj = {};
    clothes.forEach(element => {
        if(element[1] in typeObj){
            typeObj[element[1]]++;
            // console.log("값 존재");
        }else{
            typeObj[element[1]] = 1 ;
            // console.log("값 존재하지 않음");
        }
    });
    // console.log(typeObj);
    let answer = 1;
    for (const key of Object.keys(typeObj)) {
        answer *= (typeObj[key] + 1)
    }    
   

    // console.log(answer);
    return answer -1;
}

const clothes = [
    ["yellowhat", "headgear"], 
    ["bluesunglasses", "eyewear"], 
    ["green_turban", "headgear"]
]
console.log(solution(clothes));