function solution(numbers) {

    numbers = numbers.map(String);

    numbers.sort(function(a,b){
        if(b[0] > a[0]){
            return 1;
        }
        if(b[0] < a[0]){
            return -1;
        }
    
        if (b[0] === a[0]) {
            if(b[1]==undefined){
                b = b + b[0];
            }
            if(a[1]==undefined){
                a = a + a[0];
            }
            if(b[1] > a[1]){
                return 1;
            }
            if(b[1] < a[1]){
                return -1;
            }
            return 0;
        }
    })

    console.log(numbers);

    var answer = '';

    for(let i = 0; i < numbers.length; i++){
        answer = answer + numbers[i];
    }
    return answer;
}

let nums = [3, 341, 343, 5, 9];

solution(nums);
