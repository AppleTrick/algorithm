function solution(numbers) {
    var mySet = new Set();
    for(var i = 0; i < numbers.length; i++){
        for(var j = 1 + i; j < numbers.length; j++){
            mySet.add(numbers[i] + numbers[j]);
        }
    }
    var answer = Array.from(mySet).sort((a,b) => {return a-b});
    return answer;
}