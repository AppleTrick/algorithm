function solution(numbers) {

    numbers = numbers.map(String);

    numbers.sort(function(a,b){
        return (b+a)*1 - (a+b)*1;    
    })

    //console.log(numbers);

    var answer = '';

    for(let i = 0; i < numbers.length; i++){
        answer = answer + numbers[i];
    }

    //console.log(answer);
    return answer[0] == 0 ? 0 +'' : answer;
}