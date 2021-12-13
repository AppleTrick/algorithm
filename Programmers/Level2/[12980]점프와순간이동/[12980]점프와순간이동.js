function solution(n)
{
    let answer = 0;
    // console.log(n.toString(2));
    let num = n;

    while(  num  >=  1){
        // console.log(num);
        if( num % 2 === 0){
            num = num / 2;
        }else{
            num = num - 1;
            answer++;
        }
    }
    // console.log("----");
    return answer;
}

const n = 5000;




console.log(solution(n));