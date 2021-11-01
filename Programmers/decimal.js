function solution(nums) {
    let answer = 0; // 결과 값 변수
    const leng = nums.length-1; // 가져온 배열의 길이
    //const mySet = new Set(); // Set 설정
    const mySet = [];


    let where = {num1 : 0, num2 : 1, num3 : 2};

    while(where.num1 <= (leng-2)){
        const sum = nums[where.num1] +  nums[where.num2] + nums[where.num3];
        //console.log(sum);
        mySet.push(sum);

        if(where.num3 !== leng){
            // num3 가 마지막이 아닐 경우
            where.num3++;
        } else{
            if(where.num2 !== leng-1){
                // num2 가 마지막에서 -1 아닐 경우
                where.num2++;
                where.num3 = where.num2+1;
            }else{
                if(where.num1 !== leng-2){
                    //num3 가 마지막에서 -2 아닐 경우
                    where.num1++;
                    where.num2 = where.num1 + 1;
                    where.num3 = where.num2 + 1;  
                }else{
                    break;
                }
            }
        }        
    }

    //console.log(mySet);
    
    // 소수 판별 알고리즘
    for(const element of mySet){
        let count = 0;

        for(let i = 1; i <= element; i++){            
            if( element % i === 0){
                count++;
                //console.log("element의 값 : " + element + " count의 값 : " + count)
                if(count > 2){
                    //console.log("중지됨");
                    break;                    
                }
            }      
        }

        if(count===2){
            answer++;
        }
    }

    return answer;
}


const nums = [1,2,7,6,4];
console.log("결과값 : " + solution(nums));

