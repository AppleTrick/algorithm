function solution(numbers) {

    numbers = numbers.map(String);

    numbers.sort(function(a,b){
        if(b[0] > a[0]){
            return 1;
        }else if(b[0] < a[0]){
            return -1;
        } else {
            return resort(a, b , 0);
        }       
    })

   console.log(numbers)

    var answer = '';

    for(let i = 0; i < numbers.length; i++){
        answer = answer + numbers[i];
    }

    console.log(answer)
    return answer;
}

function resort(a, b, num){
    if(num >= 3){
        return 0;
    } else if (b[num] === a[num]) {
        if(b[num+1]==undefined){
            b = b + b[num];
        }
        if(a[num+1]==undefined){
            a = a + a[num];
        }
        
        if(b[num+1] > a[num+1]){
            return 1;
        } else if(b[num+1] < a[num+1]){
            return -1;
        } else {
            return resort(a, b, num+1)
        }
       
    }
}

let nums = [0, 33, 32, 31, 55];

solution(nums);