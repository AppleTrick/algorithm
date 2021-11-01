function solution(price, money, count) {
    let result = price * (count * (count + 1) / 2) - money;
    
    return result > 0 ? result : 0;
}