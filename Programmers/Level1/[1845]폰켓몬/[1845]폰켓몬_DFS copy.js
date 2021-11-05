function solution(nums) {
    let answer = nums.length /2;
    let result = nums.filter((element, index) => nums.indexOf(element) === index);
    answer = Math.min(answer,result.length)

    return answer;
}

let nums = [3,3,3,2,2,2]
console.log(solution(nums));