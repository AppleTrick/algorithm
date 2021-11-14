function solution(n) {
    const Arr = Array.from({length : n}, (e,i)=> i+1);
    Arr[0] = 0;
    for (let i = 1; i*i < n; i++) {
        if(Arr[i]){
            let num = Arr[i];
            // console.log(num);  // 1 2 3 만 첫 for 문에 해당함
            for(let j = num * num; j <= n; j+=num){ // 
                Arr[j-1] = 0;
            }
        }
        
    }
    let answer = Arr.filter((number) => number).length;
   
    return answer;
}

let n = 10;
console.log(solution(n));