function solution(arr) {

    // var min = arr.reduce((p, c) => {
    //     console.log(p);
    //     return Math.min(p,c)
    // })

    console.log(min);
    return arr.length > 1 ? arr.filter((e) => e > Math.min(...arr) ) : [-1];
    
}

let arr = [4,5,2,1];
console.log(solution(arr));