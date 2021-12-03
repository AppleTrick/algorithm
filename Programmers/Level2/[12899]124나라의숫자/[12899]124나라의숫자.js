function solution(n) {
    let answer = '';

    function oneTwoFour(n){
        n = n - 1
        let num = parseInt(n / 3); // 몫
        let sub = n % 3; // 나머지

        if(sub == 0){
            answer = '1' + answer;
        }else if(sub == 1){
            answer = '2' + answer;
        }else if(sub == 2){
            answer = '4' + answer;
        }

        if(num > 0){
            oneTwoFour(num);
        }
    }

    oneTwoFour(n);
    return answer;
}



/*
 나머지가 1 =>  1
 나머지가 2 = > 2
 나머지가 0 => 4



 */
1 // 1 
2 // 2
3 // 4

4 // 11
5 // 12
6 // 14

7 // 21
8 // 22
9 // 24

10 // 41
11 // 42
12 // 44

13 // 111
14 // 112
15 // 114


let n = 15;
console.log(solution(n));

console.log([1,2,3,4,5][4]); // 배열에서 해당 요소를 바로 불러오는 방법

/*
 피드백 단순하게 문제에 접근할것
 위치에 해당하는 요소를 바로 불러올 수 있도록 하는 방법에 대해 연구해야된다.
*/