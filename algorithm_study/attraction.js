// price : 놀이기구의 값
// money : 내가 가진 현재의 값
// count : 내가 타고 싶은 횟수


function solution(price, money, count) {
    let result = price * (count * (count + 1) / 2) - money;
    
    return result > 0 ? result : 0;
}



console.log(solution(3,20,4));