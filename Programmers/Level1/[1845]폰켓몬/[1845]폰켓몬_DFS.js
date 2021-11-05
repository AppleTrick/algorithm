function solution(nums) {
    let answer = 0;
    let temp = Array.from({length : nums.length} , ()=> 0)
    let n = nums.length/2;

    function DFS(L){
        if(L >= n){
            let result = temp.filter((element,index) => (element > 0) && temp.indexOf(element) === index );
            // console.log(result);
            answer = Math.max(answer, result.length);
        }else{
            for (let j = 0; j < nums.length; j++) {
                if(temp[j] !== 0){
                    continue;
                }else{
                    temp[j] = nums[j];
                    DFS(L+1);
                    temp[j] = 0;
                }
            }
        }
    }

    DFS(0)

    return answer;
}

let nums = [3,3,3,2,2,2]
console.log(solution(nums));