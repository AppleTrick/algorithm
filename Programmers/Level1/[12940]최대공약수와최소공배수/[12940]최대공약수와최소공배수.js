function solution(n, m) {

    function so(num){
        let result = [];
        for (let i = 1; i * i <= num; i++){
           if(num % i === 0){
               i * i === num ? result.push(i): result.push(i , num/i);
           }
        }
        return result;
    }
    let a = so(n);
    let b = so(m);
    let answer = [...a , ...b];
    
    
    return answer;
}

let n = 10; 
let m = 12;
console.log(solution(n,m));