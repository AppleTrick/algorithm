function solution(n, k) {

    function prime(num){
        num = parseInt(num);

        if(num <= 1){
            return false;
        }

        if(num % 2 === 0){
            return num === 2 ? true : false;
        }

        for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
            if(num % i === 0){
              return false; 
            }
        }
        return true; 
    }
    n = n.toString(k).split(0).filter((e) => prime(e) && e.length > 0);
    // console.log(n);

    return n.length;
}

const n = 110011;
const k = 10;

console.log(solution(n,k));